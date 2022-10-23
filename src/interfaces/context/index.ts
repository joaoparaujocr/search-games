import { Dispatch, ReactNode, SetStateAction } from "react";
import { IDeals, ISearchGame } from "../service";

export interface IProviderHome {
  children: ReactNode
}

export interface IContextHome {
  listDeals: IDeals[]
  setCurrentPage: Dispatch<SetStateAction<number>>
  currentPage: number
}

export interface IProviderSearchGame extends IProviderHome {}

export interface IContextSearchGame {
  listOfGames: IDeals[]
  setValueSearch: Dispatch<SetStateAction<string>>
}

export interface IProviderUser {
  children: ReactNode
}

export interface IContextUser {
  addGameToCart: (gameAdd: IDeals) => void
  removeGameToCart: (gameRemove: IDeals) => void
  listCart: IDeals[]
  removeAllGames: () => void
  setIsLoading: Dispatch<SetStateAction<boolean>>
  isLoading: boolean
  searchCartGames:  () => Promise<string | undefined>
  cartProductInformation: any
}

export interface IContextGameDeals {
  setIdParams: Dispatch<SetStateAction<string>>
  infoGame: IInfoGame
}

export interface IInfoGame {
  info: {
    title: string
    steamAppID: string
    thumb: string
  },
  cheapestPriceEver: {
    price: string
    date: number
  },
  deals: {
    storeID: string
    dealID: string
    price: string,
    retailPrice: string,
    savings: string
  }[]
}

export interface IProviderGameDeals {
  children: ReactNode,

}