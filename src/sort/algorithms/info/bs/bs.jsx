import React from "react";
import BsPseudo from "./BsPseudo";
import Python from "./BsCode";

export default function BsInfo() {
  return (
    <article className="info-container">
      <header>
        <h1 className="info-header">Bubble Sort</h1>
        <p>
          Bubble sort is a sorting algorithm that compares two adjacent elements
          and swaps them until they are in the intended order.
        </p>
        <p>
          Just like the movement of air bubbles in water that rise to the
          surface, each element of the array moves to the end in each iteration.
          Therefore, it is called a bubble sort.
        </p>
      </header>

      <section>
        <h2 className="info-header">Working of Bubble Sort</h2>
        <p>Suppose we are trying to sort the elements in ascending order.</p>

        <h3>1. First Iteration (Compare and Swap)</h3>
        <ol className="info-list">
          <li>
            Starting from the first index, compare the first and the second
            elements.
          </li>
          <li>
            If the first element is greater than the second element, they are
            swapped.
          </li>
          <li>
            Now, compare the second and the third elements. Swap them if they
            are not in order.
          </li>
          <li>The above process goes on until the last element.</li>
        </ol>

        <h3>2. Remaining Iterations</h3>
        <p>
          The same process continues for the remaining iterations. After each
          iteration, the largest element among the unsorted elements is placed
          at the end. In each iteration, the comparison takes place up to the
          last unsorted element. The array is sorted when all the unsorted
          elements are placed in their correct positions.
        </p>
      </section>

      <section>
        <h3 className="info-header">Bubble Sort Algorithm</h3>
        <BsPseudo />

        <h3 className="info-header">Bubble Sort Code in Python</h3>
        <Python />
      </section>

      <section>
        <h3 className="info-header">Bubble Sort Complexity</h3>
        <table className="info-table">
          <thead>
            <tr>
              <th>
                <strong>Time Complexity</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best</td>
              <td>O(n)</td>
            </tr>
            <tr>
              <td>Worst</td>
              <td>
                O(n <sup>2</sup>)
              </td>
            </tr>
            <tr>
              <td>Average</td>
              <td>
                O(n <sup>2</sup>)
              </td>
            </tr>
            <tr>
              <td>
                <strong>Space Complexity</strong>
              </td>
              <td>O(1)</td>
            </tr>
            <tr>
              <td>
                <strong>Stability</strong>
              </td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3 className="info-header">Bubble Sort Applications</h3>
        <p>Bubble Sort is used if:</p>
        <ul className="info-list">
          <li>Complexity does not matter</li>
          <li>Short and simple code is preferred</li>
        </ul>
      </section>
    </article>
  );
}
