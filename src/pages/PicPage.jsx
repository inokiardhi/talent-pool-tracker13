import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import PicTable from '../components/table/PicTable'
import { getPicList } from '../redux/action/getPicList';
import { postPic } from '../redux/action/postPicList';

function PicPage() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        pic_name: "",
        contact_number: "",
        email: "",

    });
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };

    const formTitle = [
        {
            title: "Name",
            ariaLabel: "name",
            placeholder:"Naruto",
            onChange: (e) => setData({ ...data, pic_name: e.target.value }),
        },
        {
            title: "Contact",
            ariaLabel: "contact",
            placeholder:"08121212xxx",
            onChange: (e) => setData({ ...data, contact_number: e.target.value }),
        },
        {
            title: "Email",
            ariaLabel: "email",
            placeholder:"example@email.com",
            onChange: (e) => setData({ ...data, email: e.target.value }),
        },
    ];

    const handlePost = (e) => {
        e.preventDefault();
        dispatch(postPic(data));
        setTimeout(() => {
            dispatch(getPicList());
        }, 1000);
        handleClose();
    };
    console.log(data)

    return (
        <>
            <div className="container">
                <button className="btn btn-outline-success mt-5 mb-2" onClick={handleShow}>+ PIC</button>
                <PicTable/>
                <Modal className="p-4" show={show} onHide={handleClose}>
                    <div className="m-5">
                        {formTitle.map((item, index) => (
                            <div key={index} class="input-group mb-3">
                                <span class="input-group-text" >{item.title}</span>
                                <input type="text" class="form-control" placeholder={item.placeholder} aria-label={item.ariaLabel} onChange={item.onChange}/>
                            </div>
                        ))}
                        <button type="button" class="btn btn-outline-success" onClick={handlePost}>Submit</button>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default PicPage
