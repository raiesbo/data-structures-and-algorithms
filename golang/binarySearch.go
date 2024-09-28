package main

import "errors"

func binarySearch(arr []int, val int) (int, error) {
	// We start accounting for low index pointing at the first element of the array
	// and the high value pointing to the last
	low := 0
	high := len(arr) - 1

	for low <= high {
		// We make an guess selecting the middle value of the array
		mid := (high + low) / 2
		guess := arr[mid]

		if val == guess {
			// If value and guess are the same, it means we found the value we were looking
			// for and we can return it.
			return guess, nil
		} else if val > guess {
			// If the value is bigger than the guess, it means it will be found in the higher
			// half of the array.
			low = mid
		} else {
			// If the value is smaller than the guess, it means it will be found in the lower
			// half of the array.
			high = mid
		}
	}

	// If no value is found, we return an error
	return 0, errors.New("The value was not found")
}
