import React from 'react'
import "./FooterMe.css"
import { Navbar, Container } from 'react-bootstrap'

function FooterMe() {
    return (
        <>
            <Navbar className="footerShadow" expand="lg" style={{backgroundColor: '#191c19'}}>
                <Container className="mx-4">
                    <div className="d-flex footer-container w-100 my-4">
                        <div className="w-50">
                            <h5 className="ms-4">Game App</h5>
                            <div className="divider-f w-25"></div>
                            
                        </div>
                        <div className="d-flex justify-content-between w-50 footer-container-right">
                            <div>
                                <h5 >About</h5>
                                <div className="divider-f w-100 mb-2"></div>
                                <p className="m-0">Team</p>
                                <p className="m-0">Career</p>
                                <p className="m-0">Blog</p>
                            </div>
                            <div>
                                <h5 >Resource</h5>
                                <div className="divider-f w-100 mb-2"></div>
                                <p className="m-0">Security</p>
                                <p className="m-0">Global</p>
                                <p className="m-0">Chart</p>
                                <p className="m-0">OTC</p>
                            </div>
                            <div>
                                <h5 >Social</h5>
                                <div className="divider-f w-100 mb-2"></div>
                                <p className="m-0">Facebook</p>
                                <p className="m-0">Instagram</p>
                                <p className="m-0">Twitter</p>
                                <p className="m-0">LinkIn</p>
                            </div>
                        </div>

                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default FooterMe
