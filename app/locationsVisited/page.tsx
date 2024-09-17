import VisitedTable from "../components/VisitedTable";
import VisitedCommentTable from "../components/VisitedCommentTable";
import VisitedCommentForm from "../components/VisitedCommentForm"
import classes from "../locationsVisited/locations-visited-page-styles.module.css";

export default function Home() {
  return (
    <div>
      <img 
      src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
      className={classes.center}></img>
      <VisitedTable />
      <hr />
      <VisitedCommentTable />
      <VisitedCommentForm />
    </div>
  );
}