import "../style.css";
import ShowLink from "./ShowLink";

const ShowLinkList = ({ shows }) => {
  const showNode = shows.map((show) => {
    return <ShowLink show={show} key={show.id} />;
  });
  return showNode;
};

export default ShowLinkList;
