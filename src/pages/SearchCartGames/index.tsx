import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../../components/NavBar"
import ShowCaseGameDeals from "../../components/ShowCaseGameDeals/index."
import { ContextUser } from "../../contexts/User"

const SearchCartGames = () => {
  const { cartProductInformation } = useContext(ContextUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(cartProductInformation).length === 0) {
      return navigate("/")
    }
  }, [])

  return (
    <>
      <NavBar />
      {Object.keys(cartProductInformation).map(key => {
        return <ShowCaseGameDeals key={key} infoGame={cartProductInformation[key]} />
      })}
    </>
  )
}

export default SearchCartGames