import { Dispatch, ReactNode, SetStateAction } from "react";
import { IDeals, ISearchGame } from "../service";

export interface IProviderHome {
  children: ReactNode
}

export interface IContextHome {
  listDeals: IDeals[]
  setCurrentPage: Dispatch<SetStateAction<number>>
  currentPage: number
  isLoading: boolean
}

export interface IProviderSearchGame extends IProviderHome {}

export interface IContextSearchGame {
  listOfGames: IDeals[]
  isLoading: boolean
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
}