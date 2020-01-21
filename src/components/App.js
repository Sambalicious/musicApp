import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';



import Header from './Header';
import SongUpload from './streams/SongUpload';
import SongEdit from './streams/SongEdit';
import SongDelete from './streams/SongDelete';
import SongShow from './streams/SongShow';
import SongList from './streams/SongList';









const App = () => {
    return (
        <div className="ui container">
            
            <BrowserRouter>
            <div>
            <Header />
            <Route path='/' exact component={SongList} />
            <Route path='/streams/upload' exact component={SongUpload} />
            <Route path='/streams/edit' exact component={SongEdit} />
            <Route path='/streams/delete' exact component={SongDelete} />
            <Route path='/streams/show' exact component={SongShow} />
            
            </div>
        </BrowserRouter></div>
    );
};

export default App;