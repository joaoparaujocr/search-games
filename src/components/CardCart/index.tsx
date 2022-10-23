import { useContext } from "react";
import { ContextUser } from "../../contexts/User";
import { ICardCart } from "../../interfaces/components/CardCart";
import LiCart from "./style";

const CardCart = ({gameID, thumb, title, game}: ICardCart) => {
  const { removeGameToCart } = useContext(ContextUser);

  return (
    <LiCart key={gameID}>
      <figure>
        <img src={thumb} alt="" />
      </figure>
      <div>
        <h4>{title.length > 32 ? `${title.slice(0, 29)}...` : title}</h4>
        <button onClick={() => removeGameToCart(game)} >Remover</button>
      </div>
    </LiCart>
  )
};

export default CardCart;
