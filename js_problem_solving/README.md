## All problems are solved in the JavaScript programming language.

23. problem23
- There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
ar = [1,2,1,2,1,3,2];
There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
```bash
input input [1,2,1,2,1,3,2]
output output 2
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