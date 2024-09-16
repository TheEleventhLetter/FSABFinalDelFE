import React from "react";
import classes from "./cool-button-styles.module.css"

function CoolButton(props: {
  linkURL: string | undefined; text: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; 
}){
  return (
    <a href={props.linkURL}>
      <button className={classes.comicbutton}>
        {props.text}
      </button>
    </a>
  );
};

export default CoolButton;