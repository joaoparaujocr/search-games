import { createContext, useContext, useEffect, useState } from "react";
import { IContextSearchGame, IProviderSearchGame } from "../../interfaces/context";
import { IDeals } from "../../interfaces/service";
import api from "../../services";
import { ContextUser } from "../User";

export const ContextSearchGame = createContext({} as IContextSearchGame);

const ProviderSearchGame = ({ children }: IProviderSearchGame ) => {
  const [listOfGames, setListOfGames] = useState<IDeals[]>([]);
  const { setIsLoading } = useContext(ContextUser);
  const [valueSearch, setValueSearch] = useState("");
  
  useEffect(() => {
    const requestListOfGames = async () => {
      setIsLoading(true)
      await api.get(`/deals?title=${valueSearch}`)
        .then(({ data }) => setListOfGames(data))
        .catch((err) => console.error("Erro"));
      setIsLoading(false);
    }

    requestListOfGames();
  }, [valueSearch]);


  return (
    <ContextSearchGame.Provider value={{listOfGames, setValueSearch}}>
      {children}
    </ContextSearchGame.Provider>
  )
}

export default ProviderSearchGame