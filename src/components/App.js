import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';





import Home from './streams/Home';
import Header from './Header';
import SongUpload from './streams/SongUpload';
import SongEdit from './streams/SongEdit';
import SongDelete from './streams/SongDelete';
import SongShow from './streams/SongShow';
import SongList from './streams/SongList';









const App = () => {
    return (
        <div className="ui ">
            
            <BrowserRouter>
            <div>
            <Header /> 
            
            <Route path='/' exact component={Home} />
            <Route path='/streams/list' exact component={SongList} />
            <Route path='/streams/upload' exact component={SongUpload} />
            <Route path='/streams/edit' exact component={SongEdit} />
            <Route path='/streams/delete' exact component={SongDelete} />
            <Route path='/streams/show' exact component={SongShow} />
            
            </div>
        </BrowserRouter></div>
    );
};

export default App;