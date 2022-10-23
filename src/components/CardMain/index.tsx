import { ICardMain } from "../../interfaces/components/CardMain";
import { formatValueBRL } from "../../utils";
import { AiTwotoneStar } from "react-icons/ai";
import CardLi from "./style";
import { useContext } from "react";
import { ContextUser } from "../../contexts/User";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()

  return (
    <CardLi>
      <figure>
        <img src={thumb} alt={title} title={title} />
      </figure>
      <h2>{title}</h2>
      <div className="boxInfo">
        <div className="prices">
          <h4 className="normalPrice">De: {formatValueBRL(normalPrice)}</h4>
          <h4 className="salePrice">Por: {formatValueBRL(salePrice)}</h4>
        </div>

        <div className="starRating">
          <AiTwotoneStar />
          <p>{steamRatingPercent}</p>
        </div>
      </div>

      <div className="boxButtons">
        <button onClick={() => addGameToCart(game)} className="addToCart">Adicionar ao carrinho de busca</button>
        <button onClick={() => navigate(`/game/deals/${gameID}`)} className="viewPrices">Ver mais preços</button>
        <a href={`https://www.cheapshark.com/redirect?dealID=${dealID}`} target="_blank">Ir para a loja</a>
      </div>
    </CardLi>
  );
};

export default CardMain;
