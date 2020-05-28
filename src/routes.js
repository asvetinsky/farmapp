import React from 'react'
import {Switch, Route,BrowserRouter} from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestTemplate from './pages/TestTemplate';
import CoopPage from './pages/CoopPage';
import CoopPageEdit from './pages/CoopPageEdit';

export default ()=>{
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/coop/:id' component={CoopPage}/>
            <Route exact path='/coop/edit/:id_device' component={CoopPageEdit}/>
            
        </Switch>
    </BrowserRouter>
    )
}

//<Route exact path='/' component={MainPage}/>