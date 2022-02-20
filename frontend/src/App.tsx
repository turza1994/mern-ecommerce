import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";

const App:React.FC = () => {
  return (
    <div className="font-link">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;