import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "../../components/Loading"
import NavBar from "../../components/NavBar"
import ShowCase from "../../components/ShowCase"
import { ContextSearchGame } from "../../contexts/SearchGame"
import { ContextUser } from "../../contexts/User"

const SearchGame = () => {
  const { listOfGames, setValueSearch } = useContext(ContextSearchGame);
  const { isLoading } = useContext(ContextUser);

  const { search } = useParams();
  useEffect(() => {
    setValueSearch(search!)
  }, [search])

  return(
    <>
      {isLoading ? <Loading /> : <></>}
      <NavBar />
      <ShowCase title={`Resultado de pesquisa para: ${search}`} listGames={listOfGames}/>
    </>
  )
}

export default SearchGame