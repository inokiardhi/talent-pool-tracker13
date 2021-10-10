import React from 'react'
import { useParams } from 'react-router';
import { Switch, Route } from "react-router-dom";
import FooterMe from '../components/footer/FooterMe';
import NavbarMe from '../components/navbar/Navbar';
import CompanyPage from '../pages/CompanyPage';
import PicPage from '../pages/PicPage';
import TalentPage from '../pages/TalentPage';
import TrackerPage from '../pages/TrackerPage';


function Router() {
    const {id} = useParams()
    return (
        <>
            <NavbarMe/>
            <Switch>
                <Route exact path="/">
                    <TrackerPage/>
                </Route>
                <Route exact path="/talent">
                    <TalentPage/>
                </Route>
                <Route exact path="/pic">
                    <PicPage/>
                </Route>
                <Route exact path="/companies">
                    <CompanyPage/>
                </Route>


            </Switch>
            <FooterMe/>
        </>
    )
}

export default Router
