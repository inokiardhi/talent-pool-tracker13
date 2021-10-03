import React, {useState} from 'react'
import "./Navbar.css"
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { getSearchList } from '../../redux/action/getSearch';

function NavbarMe() {
    const dispatch = useDispatch();

    const [keyword, setKeyword] = useState("");

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);
    };

    const resetKeyword = () => {
        setKeyword("");
    };

    const handleGetSearch = (e) => {
        e.preventDefault();
        dispatch(getSearchList(keyword));
        resetKeyword();
    }
    return (
        <>
            <Navbar className="navbarShadow" expand="lg" style={{backgroundColor: '#191c19'}}>
                <Container fluid className="mx-4">
                    <h2 href="#" className="flex-grow-1 navbarTitle">Game App</h2>
                    
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2 rounded-pill colorForm"
                        aria-label="Search"
                        value={keyword}
                        onChange={handleKeywordChange}
                        />
                        <Button variant="outline-success" onClick={handleGetSearch}>Search</Button>
                    </Form>
                   
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarMe
