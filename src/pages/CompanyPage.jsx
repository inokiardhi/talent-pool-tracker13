import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import CompanyTable from '../components/table/CompanyTable'
import { getCompanyList } from '../redux/action/getCompanyList';
import { postCompany } from '../redux/action/postCompanyList';

function CompanyPage() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        company_name: "",
        company_profile: "",
        job_description: "",
        business_field: "",
        location: "",
        business_scale: "",

    });
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };

    const formTitle = [
        {
            title: "Company Name",
            ariaLabel: "company name",
            placeholder:"PT. Segar Jaya Abadi",
            onChange: (e) => setData({ ...data, company_name: e.target.value }),
        },
        {
            title: "Company profile",
            ariaLabel: "company profile",
            placeholder:"min. 16 character",
            onChange: (e) => setData({ ...data, company_profile: e.target.value }),
        },
        {
            title: "Job desc",
            ariaLabel: "job desc",
            placeholder:"min. 16 character",
            onChange: (e) => setData({ ...data, job_description: e.target.value }),
        },
        {
            title: "Location",
            ariaLabel: "location",
            placeholder:"Konoha",
            onChange: (e) => setData({ ...data, location: e.target.value }),
        },
    ];

    const formTitleSelect = [
        {
            title: "Business field",
            value: ["industry", "otomotif", "food & beverage", "hospitality", "education", "technology"],
            onChange: (e) => setData({ ...data, business_field: e.target.value }),
        },
        {
            title: "Business scale",
            value: ["small", "medium", "large"],
            onChange: (e) => setData({ ...data, business_scale: e.target.value }),
        },
    ];

    const handlePost = (e) => {
        e.preventDefault();
        dispatch(postCompany(data));
        setTimeout(() => {
            dispatch(getCompanyList());
        }, 1000);
        handleClose();
    };

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <>
            <div className="container">
                <button className="btn btn-outline-success mt-5 mb-2" onClick={handleShow}>+ Company</button>
                <CompanyTable/>
                <Modal className="p-4" show={show} onHide={handleClose}>
                    <div className="m-5">
                        {formTitle.map((item, index) => (
                            <div key={index} class="input-group mb-3">
                                <span class="input-group-text" >{item.title}</span>
                                <input type="text" class="form-control" placeholder={item.placeholder} aria-label={item.ariaLabel} onChange={item.onChange}/>
                            </div>
                        ))}
                        {formTitleSelect.map((item, index) => ( 
                            <select className="form-select mb-3" onChange={item.onChange} aria-label="Default select example">
                                <option selected >Chose {item.title}</option>
                                {item.value.map(data => (
                                    <option value={data}>{capitalize(data)}</option>
                                ))}
                            </select>
                        ))}
                        <button type="button" class="btn btn-outline-success" onClick={handlePost}>Submit</button>
                    </div>
                </Modal>
            </div>
            
        </>
    )
}

export default CompanyPage
