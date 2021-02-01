import '../../style.css';
import ShowLink from "./ShowLink";
import Spinner from 'react-bootstrap/Spinner'

const ShowLinkList = ({ data }) => {
//   const showNode = shows.map((show) => {
//     return <ShowLink show={show} key={show.id} />;
//   });
//   return showNode;
// };

const showsArr = Array.from(Object.values(data))
    const showNode = data === {} && !showsArr.length > 0 ? <Spinner animation="border" /> :
    showsArr.reverse().map((show) => {
      return <ShowLink show={show} key={show.id} />;
    });
    return (showNode);
  }
export default ShowLinkList;
