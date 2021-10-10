import axios from "axios";
import { GET_TALENT_, DEL_TALENT_ } from "../type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* getTalentLists() {
    // console.log("ini saga")
    try {
        const res = yield axios.get(`https://talent-pool-tracker.herokuapp.com/talents?limit=30`);
        yield put({
            type: `${GET_TALENT_}SUCCESS`,
            payload: res.data.data.reverse(),
        });
    } catch (error) {
        yield put({
            type: `${GET_TALENT_}FAIL`,
            error: error,
        })
    }
};

function* delTalentLists(actions) {
    const {id} = actions;
    try {
        const res = yield axios.delete(`https://talent-pool-tracker.herokuapp.com/talents/${id}`);
        yield put({
            type: `${DEL_TALENT_}SUCCESS`,
            payload: res.data,
        });
    } catch (error) {
        yield put({
            type: `${DEL_TALENT_}FAIL`,
            error: error,
        })
    }
};

export function* watchGetTalentLists() {
    yield takeEvery(`${GET_TALENT_}BEGIN`, getTalentLists);
}

export function* watchDelTalentLists() {
    yield takeEvery(`${DEL_TALENT_}BEGIN`, delTalentLists);
}


