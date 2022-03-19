import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbar";
import News from "./Components/News";

function App() {
  const [country, setcountry] = useState("India");
  const [category, setCategory] = useState("General");

  const onCountryClick = (val) => {
    setcountry(val);
  };

  const onCategoryClick = (val) => {
    setCategory(val);
  };

  const onHomeClick = () => {
    setCategory("General");
    setcountry("India");
  };

  return (
    <div>
      <Router>
        <Navbar
          onCountryClick={onCountryClick}
          onCategoryClick={onCategoryClick}
          onHomeClick={onHomeClick}
          country={country}
          category={category}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<News country={country} category="general" />}
          ></Route>
          <Route
            exact
            path="/general"
            element={<News country={country} category="general" />}
          ></Route>
          <Route
            exact
            path="/sports"
            element={<News country={country} category="sports" />}
          ></Route>
          <Route
            exact
            path="/business"
            element={<News country={country} category="business" />}
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={<News country={country} category="entertainment" />}
          ></Route>
          <Route
            exact
            path="/health"
            element={<News country={country} category="health" />}
          ></Route>
          <Route
            exact
            path="/technology"
            element={<News country={country} category="technology" />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
