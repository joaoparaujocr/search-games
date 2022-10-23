import { ReactNode } from "react"
import ProviderGameDeals from "./GameDeals"
import ProviderHome from "./Home"
import ProviderSearchGame from "./SearchGame"
import ProviderUser from "./User"

const Providers = ({ children }: { children: ReactNode }) => {
  return( 
    <ProviderUser>
      <ProviderHome>
        <ProviderSearchGame>
          <ProviderGameDeals>
            {children}
          </ProviderGameDeals>
        </ProviderSearchGame>
      </ProviderHome>
    </ProviderUser>
  )
}

export default Providers