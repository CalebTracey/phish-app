import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"


const YearLink = (year) => {

    return (
            <button type="button" class="btn btn-primary">
                <Nav.Link href= {`/years/${year.year}`}>{year.year} </Nav.Link>
            </button>

    );
}

export default YearLink