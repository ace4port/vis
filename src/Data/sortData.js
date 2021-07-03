export const sortData = [
	{
		type: 'Bubble',
		markUp: `	<div>Bubble sort is a <i>simple sorting algorithm</i> that <b>repeatedly steps(loops)</b> through the list, 
						<b>compares adjacent elements</b> and <b>swaps</b> them if they are in the <b>wrong order</b>
						The pass through the list is repeated until the list is sorted. It is a comparison sort, named for the way smaller or 
						larger elements "bubble" to the top of the list.<hr />
						This simple algorithm performs <b>poorly</b> in real world use and is used primarily as an <b>educational tool</b>.<br />
						Bubble sort has a <b>worst-case</b> and <b>average complexity</b> of <strong>О(n<sup>2</sup>).</strong><br />
						Most practical sorting algorithms have substantially better worst-case or average complexity, often <b>O(n log n)</b>. 
						Even other О(n<sup>2</sup>) sorting algorithms, such as insertion sort, generally run faster than bubble sort, and are not that 
						complex. Therefore, bubble sort is not a <b>practical</b> sorting algorithm.<br />
						The only significant advantage that bubble sort has over most other algorithms is that the ability to detect that the list is 
						sorted efficiently is built into the algorithm.<hr /><ul>
						<li>Worst and Average Case Time Complexity: O(n*n).</li> Worst case occurs when array is reverse sorted.
						<li>Best Case Time Complexity: O(n). </li>Best case occurs when array is already sorted.
						<li>Auxiliary Space: O(1)</li>
						<li>Boundary Cases: Bubble sort takes minimum time (Order of n) when elements are already sorted.</li>
						<li>Sorting In Place: Yes</li>
						</ul><hr />
						Due to its <b>simplicity, bubble sort</b> is often used to <b>introduce</b> the concept of a sorting algorithm. <br />
						Steps: Given an array of N elements, Bubble Sort will:
						<ol>
							<li>Compare a pair of adjacent items (a, b)</li>
							<li>Swap that pair if the items are out of order (in this case, when a > b)</li>
							<li>Repeat Step 1 and 2 until we reach the end of array</li>
							(the last pair is the (N-2)-th and (N-1)-th items as we use 0-based indexing),
							<li>By now, the largest item will be at the last position.</li>
							<li>Then reduce N by 1 and repeat Step 1 until we have N = 1</li>
						</ol>
						Variations: Shell sort, binary insertion sort 
						<hr />Source and Read More: <a href="https://en.wikipedia.org/wiki/Bubble_sort">Wikipedia</a> 
						<a href="https://www.geeksforgeeks.org/bubble-sort/">Geeks4Geeks</a></div>`,
	},

	{
		type: 'Insertion',
		markUp: `<div>Insertion sort is another <i>simple sorting algorithm</i> that <b>builds the final sorted array (loops)</b> one item at a time
						It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
						It is a comparison sort. When people manually sort cards in a bridge hand, most use a method that is similar to insertion sort<hr />
						
						Insertion sort has a <b>worst-case</b> and <b>average complexity</b> of <strong>О(n<sup>2</sup>).</strong><br />
						
						It has some advantages over other algorithms in the ability to detect that the list is sorted, is stable and can sort a list as it recieves in stream.<hr />
						
						<ul>
						<li>Worst and Average Case Time Complexity: O(n*n).</li> Worst case occurs when array is reverse sorted.
						<li>Best Case Time Complexity: O(n). </li>Best case occurs when array is already sorted.
						<li>Auxiliary Space: O(1)</li>
						<li>Boundary Cases: Insertion sort takes maximum time to sort if elements are sorted in reverse order. And it takes minimum time (Order of n) when elements are already sorted.</li>
						<li>Sorting In Place: Yes</li>
						</ul><hr />
						The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
						<br />Steps: To sort an array of size n in ascending order: 
						<ol>
							<li>Iterate from arr[1] to arr[n] over the array. </li>
							<li>Compare the current element (key) to its predecessor. </li>
							<li> If the key element is smaller than its predecessor, compare it to the elements before.</li>
							Move the greater elements one position up to make space for the swapped element.
						</ol>

						Variations: Shell sort, Binary insertion sort 
						<hr />Source and Read More: <a href="https://en.wikipedia.org/wiki/Bubble_sort">Wikipedia</a> 
						<a href="https://www.geeksforgeeks.org/bubble-sort/">Geeks4Geeks</a></div>`,
	},

	{
		type: 'Selection',
		markUp: `<div>Selection sort is an in-place comparison sorting algorithm.
						It has an <b>O(n<sup>2</sup>) time complexity</b>, which makes it inefficient on large lists, and generally performs worse 
						than the similar insertion sort. Selection sort is noted for its simplicity and has performance advantages 
						over more complicated algorithms in certain situations, particularly where auxiliary memory is limited. 
						The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation					
						<hr /><ul>
						<li>Worst Case Time Complexity: <b>O(n<sup>2</sup>)</b> comparisions, <b>O(n)</b> swaps</li> Worst case occurs when array is reverse sorted.
						<li>Best Case Time Complexity: <b>O(n<sup>2</sup>)</b> comparisions, <b>O(1)</b> swaps</li>Best case occurs when array is already sorted.
						<li>Average Case Time Complexity: <b>O(n<sup>2</sup>)</b> comparisions, <b>O(n)</b> swaps
						<li>Auxiliary Space: <b>O(1)</b></li>
						<li>Boundary Cases: Selection sort takes maximum time to sort if elements are sorted in reverse order. And it takes minimum time (Order of n) when elements are already sorted.</li>
						<li>Sorting In Place: Yes</li>
						</ul><hr />
						The array is virtually split into a sorted and an unsorted part. Smallest value from the unsorted part is picked and placed at the correct position in the sorted part.
						<br />Steps: To sort an array of size n in ascending order: 
						<ol>
							<li>Iterate from arr[1] to arr[n] over the array</li>
							<li>Compare with each and Select the smallest element (key)</li>
							<li>Swap with element in sorted position </li>
						</ol>

						Variations: Heapsort, Cocktail(double selection) sort, bingo sort 
						<hr />Source and Read More: <a href="https://en.wikipedia.org/wiki/Bubble_sort">Wikipedia</a> 
						<a href="https://www.geeksforgeeks.org/bubble-sort/">Geeks4Geeks</a></div>`,
	},

	{
		type: 'Quick',
		markUp: `<div>Quick sort is an <i>in-place, divide-and-conquer algorithm</i> is still commonly used.
						This algorithm when implemented well, can perform somewhat faster than merge sort and about two or three times faster 
						than heapsort.
						It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, 
						according to whether they are less than or greater than the pivot.<br /> 
						For this reason, it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively.<br />

						Mathematical analysis of quicksort shows that, on average, the algorithm takes <b>O(n log n)</b> comparisons to sort n items. 
						In the worst case, it makes <b>O(n<sup>2</sup>)</b> comparisons, though this behavior is rare.
						
						<hr /><ul>
						<li>Worst Case Time Complexity: <b>O(n<sup>2</sup>)</b></li>  Worst case occurs when the partition process always picks greatest or smallest element as pivot
						<li>Best Case Time Complexity: <b>O(n log n)</b> (simple partition) or <b>O(n)</b> (three-way partition and equal keys)</li>  Best case occurs when the partition process always picks the middle element as pivot
						<li>Average Time Complexity: <b>O(n log n)</b>
						<li>Auxiliary Space: O(n)</li>
						<li>Sorting In Place: Yes</li>
						</ul><hr />

						Implementation details include choosing of pivot element. In early days, the lefmmost was picked which caused frequent worst case
						Our implementation uses rightmost(last) element which gives fairly average results.
						More advanced techniques like median of 3 be used.<br />
						Steps: Given an array of N elements, Quick Sort will:
						<ol>
							<li>Pick a pivot element and partition</li>
							<li>Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x.</li>
							<li>Recursively call partition for left and right of pivot</li>
						</ol>
						Variations: Binary tree sort, bucket sort with two buckets 
						<hr />Source and Read More: <a href="https://en.wikipedia.org/wiki/Bubble_sort">Wikipedia</a> 
						<a href="https://www.geeksforgeeks.org/bubble-sort/">Geeks4Geeks</a></div>`,
	},

	{
		type: 'Merge',
		markUp: `<div>Merge sort is an <i>an efficient, general-purpose, and comparison-based sorting algorithm</i> very commonly used.<br />
						Merge sort is a divide-and-conquer algorithm inventer by John von Neuman in 1945.<br />

						Conceptually, a merge sort works as follows:
						Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
						Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
						Implementations include top-down, buttom-up, top-down, buttom-up.

						Mathematical analysis of quicksort shows that average and worst case performance of <b>O(n log n)</b> same as quick sorts best case.
						Merge sort's most common implementation does not sort in place adn thus extra memory space must be allocated.
						<hr /><ul>
						<li>Worst Case Time Complexity: <b>O(n log n</sup>)</b></li>  Worst case occurs when the partition process always picks greatest or smallest element as pivot
						<li>Best Case Time Complexity: <b>O(n log n)</b> or <b>O(n)</b> (natural variant)</li>  Best case occurs when the partition process always picks the middle element as pivot
						<li>Average Time Complexity: <b>O(n log n)</b>
						<li>Auxiliary Space: O(n)</li>
						<li>Sorting In Place: No</li>
						</ul><hr />

						Implementation details include choosing of pivot element. In early days, the lefmmost was picked which caused frequent worst case
						Our implementation uses rightmost(last) element which gives fairly average results.
						More advanced techniques like median of 3 be used.<br />
						Steps: Given an array of N elements, Merge Sort will:
						<ol>
							<li> Divide input array into two halves</li> 
							<li> Call mergeSort on both until one element in array </li>
							<li> Then merge sorted array</li>
						</ol>
						Variations: Tim sort<br />
						Usage: Perl, Java, Linux kernel
						<hr />Source and Read More: <a href="https://en.wikipedia.org/wiki/Bubble_sort">Wikipedia</a> 
						<a href="https://www.geeksforgeeks.org/bubble-sort/">Geeks4Geeks</a></div>`,
	},
]
