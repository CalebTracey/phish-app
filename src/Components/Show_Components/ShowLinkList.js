import '../../style.css';
import ShowLink from "./ShowLink";
import Spinner from 'react-bootstrap/Spinner'

const ShowLinkList = ({ showsList }) => {

  const showNode = Array.from(showsList).length === 0 ? <Spinner animation="border" /> :
    showsList.reverse().map((show, key) => {
      return <ShowLink show={show} key={key} />;
    });
  return (showNode);
}
export default ShowLinkList;
