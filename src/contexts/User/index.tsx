import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IContextUser, IProviderUser } from "../../interfaces/context";
import { IDeals } from "../../interfaces/service";
import api from "../../services";

export const ContextUser = createContext({} as IContextUser);

const ProviderUser = ({ children }: IProviderUser) => {
  const [isLoading, setIsLoading] = useState(false);
  const [listCart, setListCart] = useState<IDeals[]>([]);
  const [cartProductInformation, setCartProductInformation] = useState({});
  const navigate = useNavigate()

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

  const removeAllGames = () => {
    setListCart([]);
    localStorage.removeItem("@searchGame")
  };

  const searchCartGames = async () => {
    if(listCart.length === 0) return toast.error("O Carrinho está vazio");
    setIsLoading(true)
    const stringIDs = listCart.reduce((acc, game) => {
      return acc += `${game.gameID},`
    }, "").slice(0, -1);
    await api.get(`/games?ids=${stringIDs}`)
      .then(({ data }) => {
        setCartProductInformation(data)
      })
      .catch(err => console.log(err))
    
    setIsLoading(false)
    navigate("/game/searchCart")
  }

  useEffect(() => {
    const listLocal = JSON.parse(localStorage.getItem("@searchGame")!);
    if(listLocal) {
      setListCart(listLocal);
    };
  }, []);

  return (
    <ContextUser.Provider value={{ isLoading, setIsLoading, addGameToCart, removeGameToCart, listCart, removeAllGames, searchCartGames, cartProductInformation }}>
      {children}
    </ContextUser.Provider>
  )
}

export default ProviderUser