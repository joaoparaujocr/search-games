import { IShowCaseGameDeals } from "../../interfaces/components/ShowCaseGameDeals"
import CartDeal from "../CardDeal"
import MainShowCase from "./style"

const ShowCaseGameDeals = ({ infoGame }: IShowCaseGameDeals) => {

  return (
    <MainShowCase>
      <figure>
        <img src={infoGame?.info?.thumb} alt="" />
      </figure>
      <ul>
        {infoGame?.deals?.map(deal => (
          <CartDeal key={deal?.dealID} dealID={deal?.dealID} price={deal?.price} retailPrice={deal?.retailPrice} />
        ))}
      </ul>
    </MainShowCase>
  )
}

export default ShowCaseGameDeals