import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SearchGame from "../pages/SearchGame";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/game/:search" element={<SearchGame />} />
    </Routes>
  )
}

export default RoutesMain