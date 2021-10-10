import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './TalentTable.css'
import { Modal, Table } from 'react-bootstrap'
import Swal from 'sweetalert2';
import { clearList, delTalentList, getTalentList } from '../../redux/action/getTalentList';
import { updateTalent } from '../../redux/action/postTalentList';

function TalentTabel() {
    const dispatch = useDispatch();
    const {listTalent} = useSelector(state => state.Talents)
    // console.log(listTalent)
    const [show, setShow] = useState(false);
    const [id, setId] = useState("");
    const [data, setData] = useState({
        education: ""
    })

    useEffect(() => {
        dispatch(getTalentList())
    }, [dispatch]);
    
    const handleDelete = (idTalent) => {
        dispatch(delTalentList(idTalent));
        setTimeout(() => {
            dispatch(getTalentList())
        }, 1000);
    }

    const handleShow = (item) => {
        setId(item)
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleUpdate = (id) => {
        dispatch(updateTalent(data, id));
        setTimeout(() => {
            dispatch(getTalentList());
        }, 2000);
        handleClose();
    };

    const mainTitle = [
        "Name",
        "Contact",
        "Email",
        "City",
        "Education",
        "Experience",
        "Expertise",
        " ",
    ];

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


    const renderTableData = (item, index) => {
        return(
            <tr key={index} className="fontSize">
                <td>{item.name}</td>
                <td>{item.contact_number}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.education}</td>
                <td>{item.experience}</td>
                <td>{item.expertise}</td>
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
                        {listTalent.map(renderTableData)} 
                    </tbody>
                </Table>
            </div>
            <Modal className="p-4" show={show} onHide={handleClose}>
                    <div className="m-5">
                            <div class="input-group mb-3">
                                <span class="input-group-text" >Education</span>
                                <input type="text" class="form-control" placeholder="bachelor degree of ninjutsu art" onChange={(e) => setData({ ...data, education: e.target.value })}/>
                            </div>
                        <button type="button" class="btn btn-outline-success" onClick={() => handleUpdate(id)}>Submit</button>
                    </div>
            </Modal>
        </>
    )
}

export default TalentTabel
