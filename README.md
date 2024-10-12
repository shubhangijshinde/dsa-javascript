# Data Structures in JavaScript

Overview
This repository contains implementations of common data structures using JavaScript. Each data structure includes a brief explanation, example usage, and complexity analysis to help you understand how they work and when to use them.

Table of Contents
Introduction
Prerequisites
Data Structures Implemented
Arrays
Linked Lists
Stacks
Queues
Hash Tables
Trees
Graphs
Heaps
Tries
Getting Started
Complexity Analysis
Contributing
License
Introduction
Data structures are fundamental to organizing and storing data efficiently for various applications. This repository provides JavaScript implementations of classic data structures such as arrays, linked lists, stacks, and more. Each implementation is designed to demonstrate the fundamental concepts and provide examples of their usage.

Prerequisites
To work with this repository, you'll need:

Node.js: A runtime environment for running JavaScript outside the browser. Download Node.js
Basic knowledge of JavaScript.
Data Structures Implemented
Arrays
Description: A list-like structure with indexed elements.
Common Operations: Access, insertion, deletion.
Example:
javascript
Copy code
const arr = [1, 2, 3, 4];
arr.push(5); // Add element
arr.pop(); // Remove last element
console.log(arr[1]); // Access element
Linked Lists
Description: A series of nodes where each node contains data and a pointer to the next node.
Types: Singly Linked List, Doubly Linked List.
Example:
javascript
Copy code
class Node {
constructor(value) {
this.value = value;
this.next = null;
}
}

class LinkedList {
constructor() {
this.head = null;
}
// Add more methods here...
}
Stacks
Description: A LIFO (Last-In-First-Out) structure where elements are added and removed from the top.
Example:
javascript
Copy code
class Stack {
constructor() {
this.items = [];
}
push(element) {
this.items.push(element);
}
pop() {
return this.items.pop();
}
// Add more methods here...
}
Queues
Description: A FIFO (First-In-First-Out) structure where elements are added at the back and removed from the front.
Example:
javascript
Copy code
class Queue {
constructor() {
this.items = [];
}
enqueue(element) {
this.items.push(element);
}
dequeue() {
return this.items.shift();
}
// Add more methods here...
}
Hash Tables
Description: A key-value pair structure that provides efficient data retrieval.
Example:
javascript
Copy code
class HashTable {
constructor(size = 50) {
this.buckets = new Array(size);
}
set(key, value) {
// Hashing function and adding key-value
}
get(key) {
// Retrieve value using key
}
// Add more methods here...
}
Trees
Description: A hierarchical structure with a root node and child nodes.
Types: Binary Search Tree, AVL Tree.
Example:
javascript
Copy code
class TreeNode {
constructor(value) {
this.value = value;
this.left = null;
this.right = null;
}
}

class BinarySearchTree {
constructor() {
this.root = null;
}
// Add more methods here...
}
Graphs
Description: A collection of nodes (vertices) and edges connecting them.
Types: Directed, Undirected, Weighted.
Example:
javascript
Copy code
class Graph {
constructor() {
this.adjacencyList = {};
}
addVertex(vertex) {
// Add a vertex
}
addEdge(vertex1, vertex2) {
// Add an edge
}
// Add more methods here...
}
Heaps
Description: A binary tree where the parent node is either greater than or less than its child nodes.
Types: Min-Heap, Max-Heap.
Example:
javascript
Copy code
class MinHeap {
constructor() {
this.heap = [];
}
insert(value) {
// Insert value into heap
}
extractMin() {
// Remove and return the smallest element
}
// Add more methods here...
}
Tries
Description: A tree-like structure used for storing strings, often for search applications.
Example:
javascript
Copy code
class TrieNode {
constructor() {
this.children = {};
this.isEndOfWord = false;
}
}

class Trie {
constructor() {
this.root = new TrieNode();
}
insert(word) {
// Insert a word into the Trie
}
search(word) {
// Search for a word in the Trie
}
// Add more methods here...
}
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/data-structures-in-javascript.git
cd data-structures-in-javascript
Install dependencies (if any):

bash
Copy code
npm install
Run tests to verify implementations:

bash
Copy code
npm test
Complexity Analysis
Each data structure implementation includes time and space complexity analysis for the major operations, helping you understand their performance characteristics:

Arrays: Access - O(1), Insertion - O(n), Deletion - O(n)
Linked Lists: Access - O(n), Insertion - O(1), Deletion - O(1)
Stacks/Queues: Access - O(n), Insertion - O(1), Deletion - O(1)
Hash Tables: Access - O(1), Insertion - O(1), Deletion - O(1)
Trees/Graphs/Heaps/Tries: Various complexities based on operation and structure.
Contributing
Contributions are welcome! If you have suggestions for improvements or want to add a new data structure, please:

Fork the repository.
Create a new branch.
Commit your changes.
Submit a pull request.
License
This repository is licensed under the MIT License. See the LICENSE file for more details.
