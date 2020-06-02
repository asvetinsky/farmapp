import React from 'react'
import {Switch, Route,BrowserRouter} from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestTemplate from './pages/TestTemplate';
import CoopPage from './pages/CoopPage';
import CoopPageEdit from './pages/CoopPageEdit';
import CoopPageAdd from './pages/CoopPageAdd';

export default ()=>{
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/coop/:id' component={CoopPage}/>
            <Route exact path='/coop/edit/:id' component={CoopPageEdit}/>
            <Route exact path='/coop-add' component={CoopPageAdd}/>
            
        </Switch>
    </BrowserRouter>
    )
}

//<Route exact path='/' component={MainPage}/>