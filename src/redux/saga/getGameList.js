import axios from "axios";
import { GET_GAMELIST_BEGIN, GET_GAMELIST_SUCCESS, GET_GAMELIST_FAIL } from "../type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* getGameLists(actions) {
    const { page } = actions;
    try {
        const res = yield axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=${page}&page_size=12`);
        yield put({
            type: GET_GAMELIST_SUCCESS,
            payload: res.data.results,
        });
    } catch (error) {
        yield put({
            type: GET_GAMELIST_FAIL,
            error: error,
        })
    }
};

export function* watchGetGameLists() {
    yield takeEvery(GET_GAMELIST_BEGIN, getGameLists);
}
