import axios from "axios";
import { GET_BYGENRE_BEGIN, GET_BYGENRE_SUCCESS, GET_BYGENRE_FAIL } from "../type";
import { put, takeEvery } from "@redux-saga/core/effects";


function* getByGenres(actions) {
    const { genres } = actions;
    try {
        const res = yield axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&genres=${genres}&page_size=12`);
        yield put({
            type: GET_BYGENRE_SUCCESS,
            payload: res.data.results,
        });
    } catch (error) {
        yield put({
            type: GET_BYGENRE_FAIL,
            error: error,
        })
    }
};

export function* watchGetByGenres() {
    yield takeEvery(GET_BYGENRE_BEGIN, getByGenres);
}