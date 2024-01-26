
import React from "react";
import './../styles/App.css';
import { Route, Routes } from "react-router-dom";
import Item from "./Item";
import Itemlist from "./Itemlist";
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Routes>
          <Route path="/" element={<Itemlist />} />
          <Route path="/item/1" element={<Item count={1} />} />
          <Route path="/item/2" element={<Item count={2} />} />
          <Route path="/item/3" element={<Item count={3} />} />
        </Routes>
    </div>
  )
}

export default App;
