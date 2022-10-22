import { useContext } from "react"
import Loading from "../../components/Loading"
import NavBar from "../../components/NavBar"
import ShowCase from "../../components/ShowCase"
import { ContextHome } from "../../contexts/Home/index"
import BoxPages from "./style"

const Home = () => {
  const { listDeals, setCurrentPage, currentPage, isLoading } = useContext(ContextHome);

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <NavBar />
      <ShowCase listGames={listDeals} title="Principais ofertas" />
      <BoxPages>
        {currentPage > 0 
        ?
        (<button onClick={previousPage} className="previousPage">{currentPage - 1}</button>)
        :
        (<></>)}
        <p>{currentPage}</p>
        <button onClick={nextPage} className="nextPage">{currentPage + 1}</button>
      </BoxPages>
    </>
  )
}

export default Home