import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Table } from 'react-bootstrap'
import { delPicList, getPicList } from '../../redux/action/getPicList';
import Swal from 'sweetalert2';
import { updatePic } from '../../redux/action/postPicList';

function PicTable() {
    const dispatch = useDispatch();
    const {listPic} = useSelector(state => state.Pics)
    // console.log(listPic)
    const [show, setShow] = useState(false);
    const [id, setId] = useState("");
    const [data, setData] = useState({
        pic_name: ""
    })

    useEffect(() => {
        dispatch(getPicList())
    }, [dispatch]);

    const handleShow = (item) => {
        setId(item)
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleUpdate = (id) => {
        dispatch(updatePic(data, id));
        setTimeout(() => {
            dispatch(getPicList());
        }, 2000);
        handleClose();
    };

    const mainTitle = [
        "Name",
        "Contact",
        "Email",
        "",
    ];

    const handleDelete = (idTalent) => {
        dispatch(delPicList(idTalent));
        setTimeout(() => {
            dispatch(getPicList())
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

    // console.log(listPic)

    const renderTableData = (item, index) => {
        return(
            <tr key={index} className="fontSize">
                <td>{item.pic_name}</td>
                <td>{item.contact_number}</td>
                <td>{item.email}</td>
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
                        {listPic.map(renderTableData)}
                    </tbody>
                </Table>
            </div>
            <Modal className="p-4" show={show} onHide={handleClose}>
                    <div className="m-5">
                            <div class="input-group mb-3">
                                <span class="input-group-text" >Name</span>
                                <input type="text" class="form-control" placeholder="Naruto" onChange={(e) => setData({ ...data, pic_name: e.target.value })}/>
                            </div>
                        <button type="button" class="btn btn-outline-success" onClick={() => handleUpdate(id)}>Submit</button>
                    </div>
            </Modal>
        </>
    )
}

export default PicTable
