import CardMain from "../CardMain";
import MainShowCase from "./style";
import { IShowCase } from "../../interfaces/components/ShowCase";

const ShowCase = ({ title, listGames }: IShowCase) => {
  return (
    <MainShowCase>
      <h2>{title}</h2>
      <ul>
        {listGames.length === 0 ? <h3>Nada foi encontrado!</h3> :
        listGames.map(
          (game) => {
            return (
              <CardMain
                key={game.dealID}
                dealID={game.dealID}
                title={game.title}
                gameID={game.gameID}
                salePrice={game.salePrice}
                normalPrice={game.normalPrice}
                steamRatingPercent={game.steamRatingPercent}
                thumb={game.thumb}
                game={game}
              />
            );
          }
        )}
      </ul>
    </MainShowCase>
  );
};

export default ShowCase;
