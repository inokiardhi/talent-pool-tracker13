import { combineReducers } from "redux";
import games from "./getGameList";
import gameDetails from "./getDetail";

export default combineReducers({
    games,
    gameDetails,
});
