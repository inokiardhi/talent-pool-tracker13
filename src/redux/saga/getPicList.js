import axios from "axios";
import { GET_PIC_, DEL_PIC_ } from "../type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* getPicLists() {
    // console.log("ini saga")
    try {
        const res = yield axios.get(`https://talent-pool-tracker.herokuapp.com/pic?limit=30`);
        yield put({
            type: `${GET_PIC_}SUCCESS`,
            payload: res.data.data.reverse(),
        });
    } catch (error) {
        yield put({
            type: `${GET_PIC_}FAIL`,
            error: error,
        })
    }
};

function* delPicLists(actions) {
    const {id} = actions;
    try {
        const res = yield axios.delete(`https://talent-pool-tracker.herokuapp.com/pic/${id}`);
        yield put({
            type: `${DEL_PIC_}SUCCESS`,
            payload: res.data,
        });
    } catch (error) {
        yield put({
            type: `${DEL_PIC_}FAIL`,
            error: error,
        })
    }
};

export function* watchGetPicLists() {
    yield takeEvery(`${GET_PIC_}BEGIN`, getPicLists);
}

export function* watchDelPicLists() {
    yield takeEvery(`${DEL_PIC_}BEGIN`, delPicLists);
}