import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./Home";
import SortingVisualizer from "./sort/SortingVisualizer";
import PathfindingVisualizer from "./path/PathfindingVisualizer/PathfindingVisualizer";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sorting" element={<SortingVisualizer />} />
        <Route path="pathfinder" element={<PathfindingVisualizer />} />
      </Routes>
    </Router>
  );
}
