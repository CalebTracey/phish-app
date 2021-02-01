import YearLinkInfo from './YearLinkInfo'
import Spinner from 'react-bootstrap/Spinner'
import React from 'react';

const YearLinkListInfo = ({ data }) => {

    const yearArr = Array.from(Object.values(data))
    const yearNode = !yearArr.length > 0 ? <Spinner animation="border" /> :
    yearArr.reverse().map((year) => {
            return (<YearLinkInfo year={year.date} key={year.date} showCount={year.show_count} />)
        });
    return (yearNode);
}

export default YearLinkListInfo