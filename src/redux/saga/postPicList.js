import axios from "axios";
import { POST_PIC_, UPDATE_PIC_ } from "../type";
import { put, takeEvery } from "@redux-saga/core/effects";
import Swal from "sweetalert2";

function* PostPicLists (actions) {
    const { data } = actions;
    try {
        const res = yield axios.post(`https://talent-pool-tracker.herokuapp.com/pic`, data);
        yield put({
            type: `${POST_PIC_}SUCCESS`,
            payload: res.data,
        });
        yield (
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Done :)',
                showConfirmButton: false,
                timer: 1800
            })
        );
    } catch (error) {
        yield put({
            type: `${POST_PIC_}FAIL`,
            error: error,
        });
        yield (
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Check your form, Please :(',
                showConfirmButton: false,
                timer: 1800
            })
        );
    }
};

function* UpdatePicLists(actions) {
    const { data, id } = actions;
    try {
        const res = yield axios.put(`https://talent-pool-tracker.herokuapp.com/pic/edit/${id}`, data);
        yield put({
            type: `${UPDATE_PIC_}SUCCESS`,
            payload: res.data,
        });
        yield (
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Done :)',
                showConfirmButton: false,
                timer: 1800
            })
        );
    } catch (err) {
        yield put({
            type: `${UPDATE_PIC_}FAIL`,
            error: err,
        });
        yield (
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Filled the form, Please :(',
                showConfirmButton: false,
                timer: 1800
            })
        );
    };

};

export function* watchPostPicLists() {
    yield takeEvery(`${POST_PIC_}BEGIN`,PostPicLists);
};

export function* watchUpdatePicLists() {
    yield takeEvery(`${UPDATE_PIC_}BEGIN`, UpdatePicLists);
};