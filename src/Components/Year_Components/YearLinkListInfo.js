import YearLinkInfo from './YearLinkInfo'
import Spinner from 'react-bootstrap/Spinner'
import React from 'react';
import { useSelector, } from "react-redux";


const YearLinkListInfo = ({ yearList }) => {
    console.log(yearList)

    const yearNode = yearList === undefined ? <Spinner animation="border" /> :
        yearList.reverse().map((year, key) => {
            return (<YearLinkInfo year={year.date} key={key} showCount={year.show_count} />)
        });
    return (yearNode);
}

export default YearLinkListInfo