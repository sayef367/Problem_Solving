## All problems are solved in the JavaScript programming language.

32. problem32
- Louise and Richard have developed a numbers game. They pick a number (1 ≤ n < 264) and check to see if it is a power of 2. If it is, they divide it by 2. If not, they reduce it by the next lower number which is a power of 2. Whoever reduces the number to 1 wins the game. Louise always starts.
- Given an initial value, determine who wins the game.
- As an example, let the initial value n = 132. It's Louise's turn so she first determines that 132 is not a power of 2. The next lower power of is 128, so she subtracts that from 132 and passes 4 to Richard. 4 is a power of 2, so Richard divides it by 2 and passes 2 to Louise. Likewise, 2 is a power so she divides it by 2 and reaches 1. She wins the game.
- If they initially set counter to 1, Richard wins. Louise cannot make a move so she loses.
```bash
input 132
output Louise
```
31. problem31
- Given an integer n, we need to find the super digit of the integer.
super_digit(9875) 9+8+7+5 = 29 
super_digit(29)   2 + 9 = 11
super_digit(11)   1 + 1 = 2
super_digit(2)    = 2  
- Complete the function superDigit in the editor below. It must return the calculated super digit as an integer.
- superDigit has the following parameter(s):
string n: a string representation of an integer
int k: the times to concatenate n to make p
```bash
input 9875
output 8
```
30. problem30
- Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right. For instance, given the array arr=[5,6,8,11], 8 is between two subarrays that sum to 11. If your starting array is[1], that element satisfies the rule as left and right sum to 0.
- You will be given arrays of integers and must determine whether there is an element that meets the criterion. If there is, return YES. Otherwise, return NO.
```bash
input [5,6,8,11]
output YES
```
29. problem29
- A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side.
- When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.
- Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.
```bash
input n = 5, p = 3
output 1
```
28. problem28
- Given two dates each in the format dd-mm-yyyy, you have to find the number of lucky dates between them (inclusive). To see if a date is lucky,
- Firstly, sequentially concatinate the date, month and year, into a new integer x erasing the leading zeroes.
- Now if x is divisible by either 4 or 7, then we call the date a lucky date.
- For example, let's take the date "02-08-2024". After concatinating the day, month and year, we get  x= 2082024. As x is divisible by 4 so the date "02-08-2024" is called a lucky date.
- Debug the given function findPrimeDates and/or other lines of code, to find the correct lucky dates from the given input.
```bash
input 02-08-2025 04-09-2025
output 5
```
27. problem27
- Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.
grid = ['abc', 'ade', 'efg'];
- The rows are already in alphabetical order. The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. Only elements within the same row can be rearranged. They cannot be moved to a different row.
```bash
input ['abc', 'ade', 'efg']
output YES
```
26. problem26
- Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed.
- Declare an integer, lastAnswer, and initialize it to 0.
- Declare an answers array.
- Parse through each query. The format of each query will be [type, x, y]. There are 2 types of queries, given as an array of strings for you to parse, treat them according to their type:
1. Query: 1 x y
  Let idx = ( (x ^ lastAnswer) % n ).
  Append the integer y to arr[idx].
2. Query: 2 x y
  Let idx = ( (x ^ lastAnswer) % n ).
  Assign the value arr[idx][y % size(arr[idx])] to lastAnswer.
  Store the new value of lastAnswer to answers array.
- Return answers array.
- Note: ^ is the bitwise XOR operation. % is the modulo operator.
Finally, size(arr[idx]) is the number of elements in arr[idx].
```bash
input nNo = 2, queriesArr = [[1,0,5], [1,1,7],[1,0,3],[2,1,0],[2,1,1]]
output 7, 3
```
25. problem25
- Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
```bash
input Always-Look-on-the-Bright-Side-of-Life, shift = 5
output Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj
```
24. problem24
- You will be given a list of integers, arr, and a single integer k. You must create an array of length k from elements of arr such that its unfairness is minimized. Call that array arr. Unfairness of an array is calculated as
- Unfairness = max(arr) — min(arr)
Where:
- max denotes the largest integer in arr
- min denotes the smallest integer in arr
```bash
input [2,8,2,4,4,1] , k = 4
output 2
```
23. problem23
- There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
ar = [1,2,1,2,1,3,2];
There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
```bash
input [1,2,1,2,1,3,2]
output 2
```
22. problem22
- Given a 2N x 2N matrix of integers. You are allowed to reverse any row or column any number of times and in any order. The task is to calculate the maximum sum of the upper-left N X N submatrix i.e the sum of elements of the submatrix from (0, 0) to (N – 1, N – 1).
```bash
input input [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]
output output 414
```
21. problem21
- The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?
- The sorted array arr = [1, 2, 3, 4, 5]. The middle element and the median is 3.
```bash
input [5, 3, 1, 2, 4]
output 3
```
20. problem20
- Efficient Teams A coding competition is being organized on the HackerRank platform. The participants need to be grouped into teams where each team has exactly two candidates. There are n candidates, where each candidate has a skill denoted by skill[i]. A total of (n/2) teams are to be formed, such that the total skill of each team is the same. The efficiency of a team is defined as the product of the skill levels of its two members, i.e., for the skills [1, 3], the efficiency of the team is 1∗3 =3. Find the sum of efficiencies of all teams that can be formed satisfying the criteria. If there is no way to create teams that satisfy the conditions, return −1. Note: It can be shown that the answer is always unique. Example The skills of the candidates are skill=[1,2,3,2]. They can be paired as [[1,3],[2,2]]. The sum of skills for each team is the same, i.e., 4. The efficiency is computed as: - Efficiency of [1,3]=1∗3=3 - Efficiency of [2,2]=2∗2=4 Return the sum of efficiencies, 3+4=7.
```bash
input [1,2,3,2]
output 7
```
19. problem19
- Input sequence data and first remove sequence duplicate data then match array data. If all sequence data match the array then return true or false.
```bash
input 
array [5, 1, 22, 25, 6, -1, 8]
sequence [5, 1, 22, 22, 25, 6, -1, 8]
output true
```
18. problem18
- There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
```bash
input
string = ['def', 'de', 'fgh', 'sdf', 'sdfs', 'de']
querie = ['de', 'lmn', 'fgh', 'sdfs']
output [ 2, 0, 1, 1 ]
```
17. problem17
- Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
- The proportions of occurrence are positive: 3/6 = 0.500000, negative: 2/6 = 0.333333 and zeros: 1/6 = 0.166667.
```bash
input [-4, 3, -9, 0, 4, 1]
output 0.500000  0.333333  0.166667
```
16. problem16
- The left-to-right diagonal 11 + 5 - 12 = 4. The right to left diagonal 4 + 5 + 10 = 19. Their absolute difference is |4 - 19| = 15.
- Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
```bash
input [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
output 15
```
15. problem15
- How would you find the second largest number in an array?
```bash
input [2,12,3,55,6,43,31,9]
output 43
```
14. problem14
- Submissions	Leaderboard	Discussions	Editorial A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
```bash
input "We promptly judged antique ivory buckles for the prize"
output "not pangram"
```
13. problem13
- Given an array of integers, where all elements but one occur twice, find the unique element.
```bash
input [1,2,3,4,3,2,1]
output 4
```
12. problem12
- Print two space-separated integers on one line: the minimum sum and the maximum sum of of elements.
```bash
input input [7, 4, 2, 11, 9]
output output 22 31
```
11. problem11
- Return a object ascending and descending order array (not change the main array), max value and min value.
```bash
input [5, 10, 7, 9, 4, 15, 1]
output { 
  ascending: [1,  4,  5, 7, 9, 10, 15],
  descending: [15, 10, 9, 7, 5,  4, 1],
  min: 1,
  max: 15
}
```
10. problem10
- Reverse words in a string
```bash
input "Mir Md Sayeful Islam"
output "riM dM lufeyaS malsI"
```
9. problem9
- Remove duplicate elements from JavaScript Array.
```bash
input [1, 'sayef', 4 , 'sayef' , 10, 2 , 10]
output [ 1, 3, 4, 10, 2 ]
```
8. problem8
- Reverse words in a string
```bash
input like "I love JavaScrpt"
output "I evol tprcSavaJ"
```
7. problem7
- Print heart logo
```bash
output ❤️ 
```
6. problem6
Declare an array. Nest a couple of loops to compare the numbers with other numbers in the array and Print the matching elements if found.
```bash
input [1, 2, 3, 4, 5, 1, 2, 6, 7, 6]
output [ 1, 2, 6 ]
```
5. problem5
- Reverse words in a string.
```bash
input "JavaScript is a client-side script."
output "tpircSavaJ si a edis-tneilc .tpircs"
```
4. Problem4
- Input same item name in array and return an object how many duplicates data in array.
```bash
input ['Apple', '🥭', 5, 'Apple', '🥭', 'Orange', 5, 'Apple', '🥭', 'Orange', '🥭']
output { '5': 2, Apple: 3, '🥭': 4, Orange: 2 }
```
3. problem3
- Sorting words by length in a sentence by return object Ascending and Descending order.
```bash
input = "JavaScript a high level programming language."
output = { asc: 'a high level language. JavaScript programming', des: 'programming JavaScript language. level high a' }
```
2. problem2
- User inputs a string and returns an object with total match vowels and matching vowels.
```bash
input ("Mir Md Sayeful Islam")
output { totalMetchVowels: 6, metchVowels: [ 'i', 'a', 'e', 'u', 'I', 'a' ] }
```
1. problem1
- Swap value first and second then next two and more or last one not swap add on array list.
```bash
input data in array like this [1,2,3,4,5]
output [ 2, 1, 4, 3, 5 ]
```