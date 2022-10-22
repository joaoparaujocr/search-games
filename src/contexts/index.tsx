import { ReactNode } from "react"
import ProviderHome from "./Home"
import ProviderSearchGame from "./SearchGame"
import ProviderUser from "./User"

const Providers = ({ children }: { children: ReactNode }) => {
  return( 
    <ProviderUser>
      <ProviderHome>
        <ProviderSearchGame>
          {children}
        </ProviderSearchGame>
      </ProviderHome>
    </ProviderUser>
  )
}

export default Providers