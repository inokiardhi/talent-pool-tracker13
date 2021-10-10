import axios from "axios";
import { POST_COMPANY_, UPDATE_COMPANY_ } from "../type";
import { put, takeEvery } from "@redux-saga/core/effects";
import Swal from "sweetalert2";


function* PostCompanyList (actions) {
    const { data } = actions;
    try {
        const res = yield axios.post(`https://talent-pool-tracker.herokuapp.com/companies`, data);
        yield put({
            type: `${POST_COMPANY_}SUCCESS`,
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
            type: `${POST_COMPANY_}FAIL`,
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

function* UpdateCompanyLists(actions) {
    const { data, id } = actions;
    try {
        const res = yield axios.put(`https://talent-pool-tracker.herokuapp.com/companies/edit/${id}`, data);
        yield put({
            type: `${UPDATE_COMPANY_}SUCCESS`,
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
            type: `${UPDATE_COMPANY_}FAIL`,
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

export function* watchPostCompanyList() {
    yield takeEvery(`${POST_COMPANY_}BEGIN`,PostCompanyList);
};

export function* watchUpdateCompanyLists() {
    yield takeEvery(`${UPDATE_COMPANY_}BEGIN`, UpdateCompanyLists);
};