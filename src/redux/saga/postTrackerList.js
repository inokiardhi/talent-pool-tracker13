import axios from "axios";
import { POST_TRACKER_, UPDATE_TRACKER_ } from "../type";
import { put, takeEvery } from "@redux-saga/core/effects";
import Swal from "sweetalert2";


function* PostTrackerLists (actions) {
    const { data } = actions;
    try {
        const res = yield axios.post(`https://talent-pool-tracker.herokuapp.com/trackers`, data);
        yield put({
            type: `${POST_TRACKER_}SUCCESS`,
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
            type: `${POST_TRACKER_}FAIL`,
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

function* UpdateTrackerLists(actions) {
    const { data, id } = actions;
    try {
        const res = yield axios.put(`https://talent-pool-tracker.herokuapp.com/trackers/edit/${id}`, data);
        yield put({
            type: `${UPDATE_TRACKER_}SUCCESS`,
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
            type: `${UPDATE_TRACKER_}FAIL`,
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

export function* watchPostTrackerLists() {
    yield takeEvery(`${POST_TRACKER_}BEGIN`,PostTrackerLists);
};

export function* watchUpdateTrackerLists() {
    yield takeEvery(`${UPDATE_TRACKER_}BEGIN`, UpdateTrackerLists);
};
