import { ICardMain } from "../../interfaces/components/CardMain";
import { AiTwotoneStar } from "react-icons/ai";
import CardLi from "./style";
import { useContext } from "react";
import { ContextUser } from "../../contexts/User";

const CardMain = ({
  title,
  dealID,
  gameID,
  salePrice,
  normalPrice,
  steamRatingPercent,
  thumb,
  game
}: ICardMain) => {
  const { addGameToCart } = useContext(ContextUser);

  return (
    <CardLi>
      <figure>
        <img src={thumb} alt={title} title={title} />
      </figure>
      <h2>{title}</h2>
      <div className="boxInfo">
        <div className="prices">
          <h4 className="normalPrice">De: {normalPrice}</h4>
          <h4 className="salePrice">Por: {salePrice}</h4>
        </div>

        <div className="starRating">
          <AiTwotoneStar />
          <p>{steamRatingPercent}</p>
        </div>
      </div>

      <div className="boxButtons">
        <button onClick={() => addGameToCart(game)} className="addToCart">Adicionar ao carrinho de busca</button>
        <button className="viewPrices">Ver mais preços</button>
        <a href={`https://www.cheapshark.com/redirect?dealID=${dealID}`} target="_blank">Ir para a loja</a>
      </div>
    </CardLi>
  );
};

export default CardMain;
