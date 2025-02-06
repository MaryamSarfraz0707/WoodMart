import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/homePage/Home";
// import 'antd/dist/antd.css';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} /> {/* Default route */}
                    <Route path="/" element={<Home />} />
                    
                </Route>
       
      </Routes>
    </Router>
  );
}

export default App;