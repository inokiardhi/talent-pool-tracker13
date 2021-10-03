import axios from "axios";
import { GET_SEARCH_BEGIN, GET_SEARCH_SUCCESS, GET_SEARCH_FAIL } from "../type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* getSearchLists(actions) {
    const { keyword } = actions;
    try {
        const res = yield axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&search=${keyword}&page_size=12`);
        yield put({
            type: GET_SEARCH_SUCCESS,
            payload: res.data.results,
        });
    } catch (error) {
        yield put({
            type: GET_SEARCH_FAIL,
            error: error,
        })
    }
};

export function* watchGetSearchLists() {
    yield takeEvery(GET_SEARCH_BEGIN, getSearchLists);
}
