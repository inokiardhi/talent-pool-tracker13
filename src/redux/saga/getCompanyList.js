import axios from "axios";
import { GET_COMPANY_, DEL_COMPANY_ } from "../type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* getCompanyLists() {
    // console.log("ini saga")
    try {
        const res = yield axios.get(`https://talent-pool-tracker.herokuapp.com/companies?limit=30`);
        yield put({
            type: `${GET_COMPANY_}SUCCESS`,
            payload: res.data.data.reverse(),
        });
    } catch (error) {
        yield put({
            type: `${GET_COMPANY_}FAIL`,
            error: error,
        })
    }
};

function* delCompanyLists(actions) {
    const {id} = actions;
    try {
        const res = yield axios.delete(`https://talent-pool-tracker.herokuapp.com/companies/${id}`);
        yield put({
            type: `${DEL_COMPANY_}SUCCESS`,
            payload: res.data,
        });
    } catch (error) {
        yield put({
            type: `${DEL_COMPANY_}FAIL`,
            error: error,
        })
    }
};

export function* watchGetCompanyLists() {
    yield takeEvery(`${GET_COMPANY_}BEGIN`, getCompanyLists);
}

export function* watchDelCompanyLists() {
    yield takeEvery(`${DEL_COMPANY_}BEGIN`, delCompanyLists);
}