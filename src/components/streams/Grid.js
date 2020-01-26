import React from 'react';
import '../streams/Grid.css';

import fav1 from  '../streams/fav1.jpg';
import fav2 from  '../streams/fav2.jpg';
import fav3 from  '../streams/fav3.jpg';

const Grid = () => {
    return ( 
<div className="container">
  <div className="row">
    <div className="col-4">
    <img src={fav1} alt="music" style={{width:400, height:300}} />
    </div>
    <div className="col-4">
    <img src={fav2} alt="music" style={{width:400, height:300}} />
    </div>
    <div className="col-4">
    <img src={fav3} alt="music" style={{width:400, height:300}} />
    </div>

  </div>
  
</div>

    )
}

export default Grid;
