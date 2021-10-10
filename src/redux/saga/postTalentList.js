import axios from "axios";
import { POST_TALENT_, UPDATE_TALENT_ } from "../type";
import { put, takeEvery } from "@redux-saga/core/effects";
import Swal from "sweetalert2";


function* PostTalentLists (actions) {
    const { data } = actions;
    try {
        const res = yield axios.post(`https://talent-pool-tracker.herokuapp.com/talents`, data);
        yield put({
            type: `${POST_TALENT_}SUCCESS`,
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
            type: `${POST_TALENT_}FAIL`,
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

function* UpdateTalentLists(actions) {
    const { data, id } = actions;
    try {
        const res = yield axios.put(`https://talent-pool-tracker.herokuapp.com/talents/edit/${id}`, data);
        yield put({
            type: `${UPDATE_TALENT_}SUCCESS`,
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
            type: `${UPDATE_TALENT_}FAIL`,
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

export function* watchPostTalentLists() {
    yield takeEvery(`${POST_TALENT_}BEGIN`,PostTalentLists);
};

export function* watchUpdateTalentLists() {
    yield takeEvery(`${UPDATE_TALENT_}BEGIN`, UpdateTalentLists);
};