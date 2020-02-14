import React from 'react';
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';






import Header from './Navbar';
import SongUpload from './streams/SongUpload';
import SongEdit from './streams/SongEdit';
import SongDelete from './streams/SongDelete';
import SongShow from './streams/SongShow';
import SongList from './streams/SongList';
import Landing from './streams/Landing';
import Login from './streams/Login';
import NotFound from './streams/NotFound';
import Register from './streams/Register';









const App = () => {
    return (
        <div className="ui ">
            
            <BrowserRouter>
            <div>
            
            <Header /> 
            <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/streams/list' exact component={SongList} />
            <Route path='/streams/upload' exact component={SongUpload} />
            <Route path='/streams/register' exact component={Register} />
            <Route path='/not-found' exact component={NotFound} />
            <Route path='/streams/delete' exact component={SongDelete} />
            <Route path='/streams/show' exact  component={SongShow} />
            <Route path='/streams/login' exact component={Login} />
            <Redirect to="/not-found" />
            </Switch>
            </div>
        </BrowserRouter></div>
    );
};

export default App;