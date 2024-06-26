package helpers

// GetMappingID can be implemented so that it can use OneToMany below to map a flat list of values
// to a flat list of their relative keys
type GetMappingID[keyT comparable] interface {
	GetMappingID() keyT
}

// OneToMany takes a list of keys and a list of values which map one-to-many (key-to-value)
// ex: vals could be a list of contract numbers where more than one value has the same mapped ID
func OneToMany[valT GetMappingID[keyT], keyT comparable](keys []keyT, vals []valT) [][]valT {
	// create a map to store values grouped by key (of type keyT)
	// each key will map to a slice of values (of type valT)
	store := map[keyT][]valT{}

	// populate the map with empty slices for each key
	for _, key := range keys {
		store[key] = []valT{}
	}

	// iterate over each value in the flat slice and append it to the correct key in the map,
	// based on the value's GetMappingID() method
	for _, val := range vals {
		id := val.GetMappingID()
		store[id] = append(store[id], val)
	}

	// now we have a map of keys to slices of values, but we want to convert that to
	// a 2D slice of values, where each slice is a list of values that share the same key
	//
	// to do this, we iterate over the keys slice and append the corresponding value slice from the map
	var out [][]valT
	for _, key := range keys {
		out = append(out, store[key])
	}

	return out
}
