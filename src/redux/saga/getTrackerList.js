import axios from "axios";
import { DEL_TRACKER_, GET_TRACKER_ } from "../type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* getTrackerLists() {
    // console.log("ini saga")
    try {
        const res = yield axios.get(`https://talent-pool-tracker.herokuapp.com/trackers?limit=30`);
        yield put({
            type: `${GET_TRACKER_}SUCCESS`,
            payload: res.data.data,
        });
    } catch (error) {
        yield put({
            type: `${GET_TRACKER_}FAIL`,
            error: error,
        })
    }
};

function* delTrackerLists(actions) {
    const {id} = actions;
    try {
        const res = yield axios.delete(`https://talent-pool-tracker.herokuapp.com/trackers/${id}`);
        yield put({
            type: `${DEL_TRACKER_}SUCCESS`,
            payload: res.data,
        });
    } catch (error) {
        yield put({
            type: `${DEL_TRACKER_}FAIL`,
            error: error,
        })
    }
};



export function* watchGetTrackerLists() {
    yield takeEvery(`${GET_TRACKER_}BEGIN`, getTrackerLists);
}

export function* watchDelTrackerLists() {
    yield takeEvery(`${DEL_TRACKER_}BEGIN`, delTrackerLists);
}