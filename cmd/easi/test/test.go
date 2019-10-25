package test

import (
	"log"
	"os"
	"os/exec"
)

func Server() {
	// I poked around with this for a bit
	// and didn't find a way to execute without shelling out
	// It might be an uncommon case
	// Will look again
	c := exec.Command(
		"go",
		"test",
		"./pkg/...")
	// Replace with some sort of configured writer
	c.Stdout = os.Stdout
	c.Stderr = os.Stderr
	err := c.Run()
	if err != nil {
		log.Fatalf("Fail %v", err)
	}
}

func All() {
	Server()
}
