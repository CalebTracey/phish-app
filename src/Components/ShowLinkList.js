import '../style.css';
import ShowLink from './ShowLink';

const ShowLinkList = ({ shows}) => {
    // Map through the todos
    const showNode = shows.map((show) => {
        return (<ShowLink show={show} key={show.id} />)
    });
    return (
            showNode
    );
}

export default ShowLinkList