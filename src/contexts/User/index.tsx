import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IContextUser, IProviderUser } from "../../interfaces/context";
import { IDeals } from "../../interfaces/service";

export const ContextUser = createContext({} as IContextUser);

const ProviderUser = ({ children }: IProviderUser) => {
  const [listCart, setListCart] = useState<IDeals[]>([]);

  useEffect(() => {
    const listLocal = JSON.parse(localStorage.getItem("@searchGame")!);
    if(listLocal) setListCart(listLocal);
  }, [])

  const addGameToCart = (gameAdd: IDeals) => {
    if((listCart.some(game => game.gameID === gameAdd.gameID))) {
      return toast.error("Jogo já existe na sua lista");
    }
    const newList = [...listCart, gameAdd]
    setListCart(newList);
    localStorage.setItem("@searchGame", JSON.stringify(newList));
    toast.success("Jogo adicionado")
  }

  const removeGameToCart = (gameRemove: IDeals) => {
    const newList = listCart.filter(game => game.gameID !== gameRemove.gameID);
    setListCart(newList);
    localStorage.setItem("@searchGame", JSON.stringify(newList));
    toast.success("Jogo removido")
  }

  const removeAllGames = () =>{
    setListCart([]);
    localStorage.removeItem("@searchGame")
  };

  return (
    <ContextUser.Provider value={{ addGameToCart, removeGameToCart, listCart, removeAllGames }}>
      {children}
    </ContextUser.Provider>
  )
}

export default ProviderUser