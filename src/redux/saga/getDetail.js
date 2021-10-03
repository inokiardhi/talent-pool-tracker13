import axios from "axios";
import { GET_GAMEDETAIL_BEGIN, GET_GAMEDETAIL_SUCCESS, GET_GAMEDETAIL_FAIL } from "../type";
import { put, takeEvery } from "@redux-saga/core/effects";


function* getGameDetails(actions) {
    const { id } = actions;
    try {
        const res = yield axios.get(`https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_API_KEY}`);
        yield put({
            type: GET_GAMEDETAIL_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        yield put({
            type: GET_GAMEDETAIL_FAIL,
            error: error,
        })
    }
};

export function* watchGetGameDetails() {
    yield takeEvery(GET_GAMEDETAIL_BEGIN, getGameDetails);
}