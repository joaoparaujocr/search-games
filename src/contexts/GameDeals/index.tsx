import { createContext, useContext, useEffect, useState } from "react";
import { IContextGameDeals, IInfoGame, IProviderGameDeals } from "../../interfaces/context";
import api from "../../services";
import { ContextUser } from "../User";

export const ContextGameDeals = createContext({} as IContextGameDeals);

const ProviderGameDeals = ({ children }: IProviderGameDeals) => {
  const [idParams, setIdParams] = useState("")
  const [infoGame, setInfoGame] = useState({} as IInfoGame);
  const { setIsLoading } = useContext(ContextUser)
  
  useEffect(() => {
    if(!idParams) return
    const requestInfoGame = async () => {
      setIsLoading(true)
      await api.get(`/games?id=${idParams}`)
        .then(({ data }) => {
          setInfoGame(data)
        })
        .catch(err => console.error(err))
      setIsLoading(false)
    }
    requestInfoGame()
  }, [idParams]);

  return (
    <ContextGameDeals.Provider value={{ setIdParams, infoGame }}>
      { children }
    </ContextGameDeals.Provider>
  )
}

export default ProviderGameDeals