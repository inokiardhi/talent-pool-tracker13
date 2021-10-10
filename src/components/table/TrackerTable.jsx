import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Table } from 'react-bootstrap'
import { getTrackerList } from '../../redux/action/getTrackerList';
import { updateTracker } from '../../redux/action/postTrackerList';

function TrackerTable() {
    const dispatch = useDispatch();
    const {listTracker} = useSelector(state => state.Trackers)
    const [show, setShow] = useState(false);
    const [id, setId] = useState("");
    const [data, setData] = useState({
        application_status: ""
    })
    console.log(listTracker)

    useEffect(() => {
        dispatch(getTrackerList())
    }, [dispatch]);

    const mainTitle = [
        "Name",
        "Company",
        "PIC",
        "Status",
        "",
    ];

    const handleShow = (item) => {
        setId(item)
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleUpdate = (id) => {
        dispatch(updateTracker(data, id));
        setTimeout(() => {
            dispatch(getTrackerList());
        }, 3000);
        handleClose();
    };

    
    const renderTableData = (item, index) => {
        return(
            <tr key={index} className="fontSize">
                <td>{item.talent.name}</td>
                <td>{item.company.company_name}</td>
                <td>{item.pic.pic_name}</td>
                <td>{item.application_status}</td>
                <td>
                    <div style={{width: "60px"}}>
                        <i className="fas fa-edit me-2"  onClick={() => handleShow(item._id)}></i>
                    </div>
                </td>
            </tr>
        );
    };
    console.log(id)

    return (
        <>
            <div className="table-responsive-lg">
                <Table striped bordered hover size="sm" className="mb-5">
                    <thead>
                        <tr>
                        {mainTitle.map((item, index) => (<th key={index} >{item}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {listTracker.map(renderTableData)}
                    </tbody>
                </Table>
            </div>
            <Modal className="p-4" show={show} onHide={handleClose}>
                    <div className="m-5">
                            <select className="form-select mb-3" onChange={(e) => setData({ ...data, application_status: e.target.value })} aria-label="Default select example">
                                <option selected >Update review status</option>
                                <option value="review">Review</option>
                                <option value="user interview">User interview</option>
                                <option value="HR interview">HR interview</option>
                                <option value="offer">Offer</option>
                                <option value="accepted">accepted</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        <button type="button" class="btn btn-outline-success" onClick={() => handleUpdate(id)}>Submit</button>
                    </div>
            </Modal>
        </>
    )
}

export default TrackerTable
