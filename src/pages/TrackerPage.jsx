import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import TrackerTable from '../components/table/TrackerTable'
import { getCompanyList } from '../redux/action/getCompanyList';
import { getPicList } from '../redux/action/getPicList';
import { getTalentList } from '../redux/action/getTalentList';
import { getTrackerList } from '../redux/action/getTrackerList';
import { postTracker } from '../redux/action/postTrackerList';

function TrackerPage() {
    const dispatch = useDispatch();
    const {listTalent} = useSelector(state => state.Talents)
    const {listPic} = useSelector(state => state.Pics)
    const {listCompany} = useSelector(state => state.Companies)
  
    useEffect(() => {
        dispatch(getTalentList())
        dispatch(getPicList())
        dispatch(getCompanyList())
    }, [dispatch]);
    
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        company: "",
        pic: "",
        talent: "",
    });

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const formTitleSelect = [
        {
            title: "Company",
            onChange: (e) => setData({ ...data, company: e.target.value }),
        },
        {
            title: "PIC",
            onChange: (e) => setData({ ...data, pic: e.target.value }),
        },
        {
            title: "Talent",
            onChange: (e) => setData({ ...data, talent: e.target.value }),
        },
    ];

    const handlePost = (e) => {
        e.preventDefault();
        dispatch(postTracker(data));
        setTimeout(() => {
            dispatch(getTrackerList());
        }, 3000);
        handleClose();
    };

    return (
        <>
            <div className="container">
                <button className="btn btn-outline-success mt-5 mb-2" onClick={handleShow}>+ Talent</button>
                <TrackerTable/>
                <Modal className="p-4" show={show} onHide={handleClose}>
                    <div className="m-5">
                        {formTitleSelect.map((item, index) => ( 
                            <select className="form-select mb-3" onChange={item.onChange} aria-label="Default select example">
                                <option selected >Chose {item.title}</option>
                                {item.title === "Talent" && listTalent.map((data, _id) => (<option value={data._id}>{data.name}</option>))}
                                {item.title === "PIC" && listPic.map((data, _id) => (<option value={data._id}>{data.pic_name}</option>))}
                                {item.title === "Company" && listCompany.map((data, _id) => (<option value={data._id}>{data.company_name}</option>))}
                            </select>
                        ))}
                        <button type="button" class="btn btn-outline-success" onClick={handlePost}>Submit</button>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default TrackerPage
