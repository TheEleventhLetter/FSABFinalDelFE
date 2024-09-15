import React from "react";
import classes from "./cool-button-styles.module.css"

function CoolButton(props: { text: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }){
  return (
    <button className={classes.comicbutton}>{props.text}</button>
  );
};

export default CoolButton;