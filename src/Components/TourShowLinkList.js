import "../style.css";
import TourShowLink from "./TourShowLink";

const TourShowLinkList = ({ shows }) => {
  const showNode = shows.map((show) => {
    return <TourShowLink show={show} key={show.id} />;
  });
  return showNode;
};

export default TourShowLinkList;
