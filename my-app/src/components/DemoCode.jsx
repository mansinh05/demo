import React from "react";

function DemoCode(props){
    return(
        <div>
        <p>  {props.name}</p>
        <p> {props.address}</p>
        <p> {props.tag}  </p>
        </div>
    );
};
export default DemoCode;