import { all } from "@redux-saga/core/effects";
import { watchGetGameDetails } from "./getDetail";
import { watchGetGameLists } from "./getGameList";
import { watchGetByGenres } from "./getGamesByGenre";
import { watchGetSearchLists } from "./getSearch";

export default function* rootSaga() {
    yield all([
        watchGetGameLists(),
        watchGetGameDetails(),
        watchGetByGenres(),
        watchGetSearchLists(),
    ]);
  }