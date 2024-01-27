import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";

const Card = (props) => {
  console.log(props.item);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{duration:0.3}}
      className="card w-80 bg-base-100 shadow-xl "
    >
      <figure className="px-10 pt-10">
        <img
          src={props.item.imgUrl}
          alt={props.item.imgAlt}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.item.imgAlt}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions">
          <a
            target="_blank"
            href={`https://docs.google.com/gview?url=${props.item.pdfUrl}&embedded=true`}
            className="btn btn-primary"
          >
            View PDF
          </a>
        </div>
      </div>
    </motion.div>

    ///////////////OLD CARD//////////

    // <div className="card card-side bg-base-100 shadow-xl">
    //   <figure>
    //     <img src={data[0].imgUrl} alt={data[0].imgAlt} />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{data[0].imgAlt}</h2>
    //     {/* <ol className="columns-2 list-decimal">
    //       <li className=" text-sm">Getting started with algorithms</li>
    //       <li className=" text-sm">Algorithm Complexity</li>
    //       <li className=" text-sm">Big-O Notation</li>
    //       <li className=" text-sm">Trees</li>
    //       <li className=" text-sm">Binary Search Trees</li>
    //       <li className=" text-sm">Check if a tree is BST or not</li>
    //       <li className=" text-sm">Binary Tree traversals</li>
    //       <li className=" text-sm">Lowest common ancestor of a Binary Tree</li>
    //       <li className=" text-sm">Graph</li>
    //       <li className=" text-sm">Graph Traversals</li>
    //       <li className=" text-sm">Dijkstra’s Algorithm</li>
    //       <li className=" text-sm">A* Pathfinding</li>
    //       <li className=" text-sm">A* Pathfinding Algorithm</li>
    //       <li className=" text-sm">Dynamic Programming</li>
    //       <li className=" text-sm">Applications of Dynamic Programming</li>
    //       <li className=" text-sm">Kruskal's Algorithm</li>
    //       <li className=" text-sm">Greedy Algorithms</li>
    //       <li className=" text-sm">Applications of Greedy technique</li>
    //       <li className=" text-sm">Prim's Algorithm</li>
    //       <li className=" text-sm">Bellman–Ford Algorithm</li>
    //       <li className=" text-sm">Line Algorithm</li>
    //       <li className=" text-sm">Floyd-Warshall Algorithm</li>
    //       <li className=" text-sm">Catalan Number Algorithm</li>
    //       <li className=" text-sm">Multithreaded Algorithms</li>
    //       <li className=" text-sm">Knuth Morris Pratt (KMP) Algorithm</li>
    //       <li className=" text-sm">Edit Distance Dynamic Algorithm</li>
    //       <li className=" text-sm">Online algorithms</li>
    //       <li className=" text-sm">Sorting</li>
    //       <li className=" text-sm">Bubble Sort</li>
    //       <li className=" text-sm">Merge Sort</li>
    //       <li className=" text-sm">Insertion Sort</li>
    //       <li className=" text-sm">Bucket Sort</li>
    //       <li className=" text-sm">Quicksort</li>
    //       <li className=" text-sm">Counting Sort</li>
    //       <li className=" text-sm">Heap Sort</li>
    //       <li className=" text-sm">Cycle Sort</li>
    //       <li className=" text-sm">Odd-Even Sort</li>
    //       <li className=" text-sm">Selection Sort</li>
    //       <li className=" text-sm">Searching</li>
    //       <li className=" text-sm">Substring Search</li>
    //       <li className=" text-sm">Breadth-First Search</li>
    //       <li className=" text-sm">Depth First Search</li>
    //       <li className=" text-sm">Hash Functions</li>
    //       <li className=" text-sm">Travelling Salesman</li>
    //       <li className=" text-sm">Knapsack Problem</li>
    //       <li className=" text-sm">Equation Solving</li>
    //       <li className=" text-sm">Longest Common Subsequence</li>
    //       <li className=" text-sm">Longest Increasing Subsequence</li>
    //       <li className=" text-sm">Check two strings are anagrams</li>
    //       <li className=" text-sm">Pascal's Triangle</li>
    //       <li className=" text-sm">Algo:- Print a m*n matrix in square wise</li>
    //       <li className=" text-sm">Matrix Exponentiation</li>
    //       <li className=" text-sm">
    //         polynomial-time bounded algorithm for Minimum Vertex Cover
    //       </li>
    //       <li className=" text-sm">Dynamic Time Warping</li>
    //       <li className=" text-sm">Fast Fourier Transform</li>
    //       <li className="appendix-type text-sm">Pseudocode</li>
    //     </ol> */}
    //     <div className="card-actions justify-end">
    //       <a target="_blank" href={`https://docs.google.com/gview?url=${data[0].pdfUrl}&embedded=true`} className="btn btn-primary">View PDF</a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
