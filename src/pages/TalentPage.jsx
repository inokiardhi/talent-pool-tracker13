import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import TalentTabel from '../components/table/TalentTabel'
import { postTalent } from '../redux/action/postTalentList';
import { getTalentList } from '../redux/action/getTalentList';

function TalentPage() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        name: "",
        address: "",
        email: "",
        contact_number: "",
        experience: "",
        education: "",
        expertise: "",
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
            onChange: (e) => setData({ ...data, name: e.target.value }),
        },
        {
            title: "City",
            ariaLabel: "address",
            placeholder:"Konoha",
            onChange: (e) => setData({ ...data, address: e.target.value }),
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
        {
            title: "Experience",
            ariaLabel: "experience",
            placeholder:"Min. 10 character",
            onChange: (e) => setData({ ...data, experience: e.target.value }),
        },
        {
            title: "Education",
            ariaLabel: "education",
            placeholder:"bachelor degree of ninjutsu art",
            onChange: (e) => setData({ ...data, education: e.target.value }),
        },
        {
            title: "Expertise",
            ariaLabel: "expertise",
            placeholder:"Taijutsu, Ninjutsu",
            onChange: (e) => setData({ ...data, expertise: e.target.value }),
        },
    ];

    const handlePost = (e) => {
        e.preventDefault();
        dispatch(postTalent(data));
        setTimeout(() => {
            dispatch(getTalentList());
        }, 1000);
        handleClose();
    };

    return (
        <>
            <div className="container">
                <button className="btn btn-outline-success mt-5 mb-2" onClick={handleShow}>+ Talent</button>
                <TalentTabel/>
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

export default TalentPage
