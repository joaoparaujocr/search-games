import { IDeals } from "../../service"

export interface ICardMain {
  title: string
  dealID: string
  gameID: string
  salePrice: string
  normalPrice: string
  steamRatingPercent: string
  thumb: string
  game: IDeals
}