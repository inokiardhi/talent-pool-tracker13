import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Table } from 'react-bootstrap'
import { delCompanyList, getCompanyList } from '../../redux/action/getCompanyList';
import Swal from 'sweetalert2';
import { updateCompany } from '../../redux/action/postCompanyList';

function CompanyTable() {
    const dispatch = useDispatch();
    const {listCompany} = useSelector(state => state.Companies)
    // console.log(listCompany)
    const [show, setShow] = useState(false);
    const [id, setId] = useState("");
    const [data, setData] = useState({
        business_scale: "",
        business_field: "",
    })

    useEffect(() => {
        dispatch(getCompanyList())
    }, [dispatch]);

    const handleShow = (item) => {
        setId(item)
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleUpdate = (id) => {
        dispatch(updateCompany(data, id));
        setTimeout(() => {
            dispatch(getCompanyList());
        }, 2000);
        handleClose();
    };

    const mainTitle = [
        "Company",
        "Profile",
        "Location",
        "Business field",
        "Business scale",
        "Job description",
        ""
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

    const handleDelete = (idTalent) => {
        dispatch(delCompanyList(idTalent));
        setTimeout(() => {
            dispatch(getCompanyList())
        }, 800);
    }

    const deletePopUp = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(item);
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    };

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    
    const renderTableData = (item, index) => {
        return(
            <tr key={index} className="fontSize">
                <td>{item.company_name}</td>
                <td>{item.company_profile}</td>
                <td>{item.location}</td>
                <td>{capitalize(item.business_field)}</td>
                <td>{capitalize(item.business_scale)}</td>
                <td>{capitalize(item.job_description)}</td>
                <td>
                    <div style={{width: "60px"}}>
                            <i className="fas fa-edit me-2 styleMe" onClick={() => handleShow(item._id)}></i>
                            <i className="fas fa-trash-alt styleMe" onClick={() => deletePopUp(item._id)}></i>
                    </div>
                </td>
            </tr>
        );
    };

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
                        {listCompany.map(renderTableData)}
                    </tbody>
                </Table>
            </div>
            <Modal className="p-4" show={show} onHide={handleClose}>
                    <div className="m-5">
                        {formTitleSelect.map((item, index) => ( 
                            <select className="form-select mb-3" onChange={item.onChange} aria-label="Default select example">
                                <option selected >Chose {item.title}</option>
                                {item.value.map(data => (
                                    <option value={data}>{capitalize(data)}</option>
                                ))}
                            </select>
                        ))}
                        <button type="button" class="btn btn-outline-success" onClick={() => handleUpdate(id)}>Submit</button>
                    </div>
            </Modal>
        </>
    )
}

export default CompanyTable
