import React from 'react';

const Catlist = (props) => {
    return (
        <div id="featuredcatsimage">
            {props.cats.map((cat,index) => (
                <div id="featuredcatsimage">
                    <img width="300px" height="300px" alt="Cat 1" src={cat.url}/>
                    <img width="300px" height="300px" alt="Cat 2" src={cat.url}/>
                    <img width="300px" height="300px" alt="Cat 3" src={cat.url}/>
                </div>
            ))}
        </div>
    );
}

export default Catlist