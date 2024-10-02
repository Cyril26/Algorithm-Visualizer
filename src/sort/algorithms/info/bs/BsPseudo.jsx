import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../info.css";

export default function Pseudo() {
  const code = `
bubbleSort(array)
   for i <- 1 to indexOfLastUnsortedElement-1
        if leftElement > rightElement
           swap leftElement and rightElement
end bubbleSort
  `;

  return (
    <div className="pseudocode">
      <SyntaxHighlighter language="python" style={dracula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
