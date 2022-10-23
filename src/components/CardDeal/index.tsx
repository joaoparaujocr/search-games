import LiCard from "./style";
import { ICardDealProps } from "../../interfaces/components/CardDeal";
import { formatValueBRL } from "../../utils";

const CartDeal = ({ dealID, price, retailPrice }: ICardDealProps) => {
  return (
    <LiCard>
      <div className="boxPrices">
        <p className="retailPrice">De: {formatValueBRL(retailPrice)}</p>
        <p className="price">Por: {formatValueBRL(price)}</p>
      </div>
      <a href={`https://www.cheapshark.com/redirect?dealID=${dealID}`} target="_blank">Ir para a loja</a>
    </LiCard>
  )
}

export default CartDeal;