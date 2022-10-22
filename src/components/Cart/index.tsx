import ContainerCart from "./style"
import { GrFormClose } from "react-icons/gr";
import { ICart } from "../../interfaces/components/Cart";
import CardCart from "../CardCart";
import { useContext } from "react";
import { ContextUser } from "../../contexts/User";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = ({ isVisible, setIsVisible }: ICart) => {
  const { listCart, removeAllGames } = useContext(ContextUser)

  const closeCart = () => setIsVisible(!isVisible);

  if(!isVisible) return <></>

  return (
    <ContainerCart>
      <main>
        <header>
          <h3>Carrinho de pesquisa</h3>
          <GrFormClose onClick={closeCart} color="red" size={30} cursor="pointer" />
        </header>
        <ul className="listCartGames">
          {listCart.length === 0
           ?
          (
            <h1>Carrinho Vazio<AiOutlineShoppingCart /></h1>
          ) : 
          listCart.map(game => (
            <CardCart game={game} gameID={game.gameID} thumb={game.thumb} title={game.title} />
          )
          )}
        </ul>
        {listCart.length > 0 && (
          <div className="btnsCart">
            <button onClick={removeAllGames} className="btnClearCart">Esvaziar carrinho</button>
            <button className="btnSearch" >Pesquisar</button>
          </div>
        )}
      </main>
    </ContainerCart>
  )
}

export default Cart