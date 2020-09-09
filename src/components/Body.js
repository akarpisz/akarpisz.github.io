import React from 'react';
import {Row} from 'reactstrap';
import MainCol from "./MainCol";
import ProfileCol from "./ProfileCol";
const Body = () =>{
    return(
        <>
        <Row>
            <ProfileCol/>
            <MainCol/>
        </Row>
        </>
    )
}

export default Body;