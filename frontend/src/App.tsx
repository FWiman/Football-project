import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import LiveResults from "./pages/LiveResults/LiveResults";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live-results" element={<LiveResults />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
