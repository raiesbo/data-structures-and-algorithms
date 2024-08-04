package main

func SelectionSort(a []int) []int {

	for i := range a {
		// We assume the first num is the smollest one by now
		lowestIndex := i

		for j, val2 := range a[lowestIndex:] {
			// Loop through the rest of the array to identify the next lowest
			if val2 < a[lowestIndex] {
				lowestIndex = i + j
			}
		}

		// One we went through all the items, we swap the current in the
		// position "i" for the lowest found after a full loop
		a[i], a[lowestIndex] = a[lowestIndex], a[i]
	}

	return a
}
