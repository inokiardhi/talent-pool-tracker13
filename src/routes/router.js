import React from 'react'
import { useParams } from 'react-router';
import { Switch, Route } from "react-router-dom";
import FooterMe from '../components/footer/FooterMe';
import NavbarMe from '../components/navbar/Navbar';
import Detailpage from '../pages/Detailpage';
import Homepage from '../pages/Homepage';

function Router() {
    const {id} = useParams()
    return (
        <>
            <NavbarMe/>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route exact path="/detail/:id">
                    <Detailpage/>
                </Route>

            </Switch>
            <FooterMe/>
        </>
    )
}

export default Router
