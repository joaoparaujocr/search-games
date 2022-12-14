import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IContextHome, IProviderHome } from "../../interfaces/context";
import { IDeals } from "../../interfaces/service";
import api from "../../services";
import { ContextUser } from "../User";

export const ContextHome = createContext({} as IContextHome);

const ProviderHome = ({ children }: IProviderHome) => {
  const [listDeals, setListDeals] = useState<IDeals[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { isLoading, setIsLoading } = useContext(ContextUser);

  useEffect(() => {
    setIsLoading(true)
    const requestListDeals = async () => {
      await api.get(`/deals?pageNumber=${currentPage}`)
        .then(({ data } )=> setListDeals(data))
        .catch(err => console.error(err))
      setIsLoading(false)
    };

    requestListDeals();
  },[currentPage]);  

  return(
    <ContextHome.Provider value={{ listDeals, setCurrentPage, currentPage }}>
      {children}
    </ContextHome.Provider>
  )
}

export default ProviderHome;