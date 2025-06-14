import {useState}  from "react";

function MyExample( props) {
    return(
        <div>
           <p id='user-name'>{props.name}</p>
           <p id='user-address'>{props.address}</p>
        </div>
    );
};

export default MyExample;