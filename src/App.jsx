import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "components/loader";

const Movies = lazy(() => import("pages/movies"));

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Movies />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
