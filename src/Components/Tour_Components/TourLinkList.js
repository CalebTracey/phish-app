import TourLink from './TourLink'
import Spinner from 'react-bootstrap/Spinner'

const TourLinkList = ({ tourList }) => {
    //const tourNode = tours === undefined ? <Spinner animation="border"/> :

    //const tourArr = Array.from(Object.values(tours))
    const tourNode = tourList === undefined ? <Spinner animation="border" /> :
    tourList.map((tour, key) => {
            return (<TourLink tour={tour} key={key} />)
        });
    return (tourNode);
}

export default TourLinkList