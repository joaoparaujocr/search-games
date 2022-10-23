import { Dispatch, SetStateAction } from "react"

export interface ICart {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}