package main

import "testing"

func Test_binarySearch(t *testing.T) {
	values := []int{2, 3, 4, 5, 8, 9, 23}

	result, err := binarySearch(values, 5)
	if err != nil {
		t.Error("binarySearch returned an error when should have found a value")
	}
	if result != 5 {
		t.Errorf("Error: binarySearch should have found %v, but found %v", 5, result)
	}
}
