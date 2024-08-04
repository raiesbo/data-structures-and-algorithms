package main

import "testing"

func TestSelectionSort(t *testing.T) {
	originArray := []int{4, 6, 8, 3, 5, 2, 1}
	sortedArray := []int{1, 2, 3, 4, 5, 6, 8}

	result := SelectionSort(originArray)

	for i, val := range result {
		if val != sortedArray[i] {
			t.Fatalf("The value of index %v is %v and should be %v.", i, val, sortedArray[i])
		}
	}
}
