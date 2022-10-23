import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "../../components/Loading"
import NavBar from "../../components/NavBar"
import ShowCaseGameDeals from "../../components/ShowCaseGameDeals/index."
import { ContextGameDeals } from "../../contexts/GameDeals"
import { ContextUser } from "../../contexts/User"

const GameDeals = () => {
  const { id } = useParams();
  const { setIdParams, infoGame } = useContext(ContextGameDeals);
  const { isLoading } = useContext(ContextUser)

  useEffect(() => {
    setIdParams(id!);
  }, [])

  return (
    <>
      { isLoading ? <Loading /> : <></> }
      <NavBar />
      <ShowCaseGameDeals infoGame={infoGame} />
    </>
  )
}

export default GameDeals