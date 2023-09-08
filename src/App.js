import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

// const Landing = lazy(() => import("./Pages/Landing"));

import Landing from "./Pages/Landing";
function App() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
    // </Suspense>
  );
}

export default App;
