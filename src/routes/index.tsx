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
      <Route path="/game">
        <Route path=":search" element={<SearchGame />} />
        <Route path="deals/:id" element={<GameDeals />} />
        <Route path="searchCart" element={<SearchCartGames />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesMain