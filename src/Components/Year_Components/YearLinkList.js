import YearLink from "./YearLink";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch } from "react-redux";
import allActions from "../../Redux/actions";

const YearLinkList = ({ data }) => {
  const dispatch = useDispatch();

  const yearNode =
    data === undefined ? (
      <Spinner animation="border" />
    ) : (
      data.reverse().map((year) => {
        return (
          <YearLink
            year={year}
            key={year}
            onClick={dispatch(allActions.showsAction.setYear(year))}
          />
        );
      })
    );
  return yearNode;
};

export default YearLinkList;
