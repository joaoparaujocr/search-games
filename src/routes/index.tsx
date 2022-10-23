import { Routes, Route } from "react-router-dom";
import GameDeals from "../pages/GameDeals";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SearchCartGames from "../pages/SearchCartGames";
import SearchGame from "../pages/SearchGame";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/game/:search" element={<SearchGame />} />
      <Route path="/game/deals/:id" element={<GameDeals />} />
      <Route path="/game/searchCart" element={<SearchCartGames />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesMain