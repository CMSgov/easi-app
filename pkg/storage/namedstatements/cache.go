package namedstatements

import (
	"errors"
	"sync"

	"github.com/jmoiron/sqlx"
)

// Cache is a cache of prepared statements.
type Cache struct {
	db                 *sqlx.DB
	preparedStatements map[string]*sqlx.NamedStmt
	lock               sync.RWMutex
}

// NewCache initializes a new Cache instance with the provided database.
func NewCache(db *sqlx.DB) *Cache {
	return &Cache{
		db:                 db,
		preparedStatements: make(map[string]*sqlx.NamedStmt),
	}
}

// Get returns a prepared statement for the provided query.
func (n *Cache) Get(query string) (*sqlx.NamedStmt, error) {
	n.lock.RLock()
	storedStatement, foundPreparedStatement := n.preparedStatements[query]
	n.lock.RUnlock()

	if foundPreparedStatement {
		return storedStatement, nil
	}

	n.lock.Lock()
	defer n.lock.Unlock()

	// Check again to ensure no other goroutine prepared the statement since our previous check.
	// We must assert this as there is a potential for a prepared statement overwrite between the
	// first check and the write lock acquisition, however minor the chance.
	if storedStatement, foundPreparedStatement = n.preparedStatements[query]; foundPreparedStatement {
		return storedStatement, nil
	}

	preparedStatement, err := n.db.PrepareNamed(query)
	if err != nil {
		return nil, err
	}

	n.preparedStatements[query] = preparedStatement
	return preparedStatement, nil
}

// Close releases all resources and closes all prepared statements.
func (n *Cache) Close() error {
	n.lock.Lock()
	defer n.lock.Unlock()

	var errs []error

	for _, stmt := range n.preparedStatements {
		if err := stmt.Close(); err != nil {
			errs = append(errs, err)
		}
	}

	// Clear the map after attempting to close all statements
	n.preparedStatements = make(map[string]*sqlx.NamedStmt)

	if len(errs) > 0 {
		msg := "Errors while closing prepared statements: "
		for _, err := range errs {
			msg += err.Error() + "; "
		}
		return errors.New(msg)
	}

	return nil
}
