
import CoolButton from "./components/CoolButton"
import WebQuestion from "./components/WebQuestion"
import classes from "./main-page-styles.module.css"

export default function Home(){
  return (
    <div>
      <h1 className={classes.center}>
        Hello Internet!
      </h1>
      <span></span>
      <h2 className={classes.center}>
        This is my website about traveling!
      </h2>
      <span></span>
      <p className={classes.center}>
        The first button has places I've <span className={classes.highlight}>visited</span>.
        <br></br>
      The first button has places I <span className={classes.highlight}>want to visit</span>.
      </p>
      <div className={classes.redirectButton}>
        <CoolButton text={"Visited"} linkURL={"http://localhost:3000/locationsVisited"}>
        </CoolButton>
        <CoolButton text={"Want To Visit"} linkURL={"http://localhost:3000/locationsToVisit"}>
        </CoolButton>
        <br></br>
        <br></br>
        <WebQuestion>

        </WebQuestion>
      </div>
    </div>
  )
}