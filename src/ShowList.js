import Show from './Show';
import './style.css';

const ShowList = ({ shows }) => {
    // Map through the todos
    const showNode = shows.map((show) => {
        return (<Show show={show} key={show.id} />)
    });
    return (
        <div>
            <div>{showNode}</div>
        </div>
    );
}

export default ShowList