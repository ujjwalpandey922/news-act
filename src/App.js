import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsCompo from "./components/NewsCompo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const size = 6;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar heigth={3} color="red" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <NewsCompo
                setProgress={setProgress}
                pageSize={size}
                key="sports "
                countryName="in"
              />
            }
          />
          <Route
            path="/business"
            element={
              <NewsCompo
                setProgress={setProgress}
                pageSize={size}
                key="business "
                countryName="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <NewsCompo
                setProgress={setProgress}
                pageSize={size}
                countryName="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <NewsCompo
                setProgress={setProgress}
                pageSize={size}
                key="general "
                countryName="in"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <NewsCompo
                setProgress={setProgress}
                pageSize={size}
                key="health "
                countryName="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <NewsCompo
                setProgress={setProgress}
                pageSize={size}
                key="science "
                countryName="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <NewsCompo
                setProgress={setProgress}
                pageSize={size}
                key="sports "
                countryName="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <NewsCompo
                setProgress={setProgress}
                pageSize={size}
                countryName="in"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// setProgress = (progress) => {
//   setState({ progress: progress });
// };
