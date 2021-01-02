import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"


const ShowLink = ({ show }) => {
    return (
        // <Nav>
            <button type="button" class="btn btn-primary shows">
                <Nav.Link href={"/shows/" + show.date}>{show.date} {show.venue.name}</Nav.Link>
            </button>
        // // </Nav>
            
/* <a href= {"/shows/" + show.date}>{show.date} {show.venue.name} </a> */

    );
};

export default ShowLink;