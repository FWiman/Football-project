import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import LiveResultsPage from "./pages/LiveResults/LiveResultsPage";
import PrePostMatchNewsPage from "./pages/PrePostMatchNews/PrePostMatchNewsPage";
import TransferNewsComponent from "./components/TransferNewsComponent/TransferNewsComponent";
import TransferNewsPage from "./pages/TransferNewsPage/TransferNewsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live-results" element={<LiveResultsPage />} />
          <Route path="/pre-post-match-news" element={<PrePostMatchNewsPage />} />
          <Route path="/transfer-news" element={<TransferNewsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
