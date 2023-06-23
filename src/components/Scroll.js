import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', paddingTop: '10px', borderTop: '3px solid black', height: '700px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;