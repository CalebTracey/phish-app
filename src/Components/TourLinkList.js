import TourLink from './TourLink'

const YearLinkList = ({ data }) => {
    const tourNode = data === undefined ? "Loading..." :
        data.map((tour) => {
            return (<TourLink tour={tour} key={tour.id} />)
        });
    //console.log("*****YEARLINKLIST*****" + yearNode)
    return (

        tourNode

    );
}

export default YearLinkList