import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/Bus-Search-System">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
