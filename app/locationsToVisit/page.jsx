import ToVisitTable from "../components/ToVisitTable";
import ToVisitCommentTable from "../components/ToVisitCommentTable";
import ToVisitCommentForm from "../components/ToVisitCommentForm";
import classes from "../locationsToVisit/locations-to-visit-page-styles.module.css";

export default function Home() {
    return (
      <div>
        <img 
        src="https://t4.ftcdn.net/jpg/02/80/82/81/360_F_280828158_ZZ2W8atYMHiSkLoDzxgDHNhdmXJ31jCR.jpg"
        className={classes.center}></img>
        <ToVisitTable />
        <hr />
        <ToVisitCommentTable />
        <ToVisitCommentForm />
      </div>
    );
  }