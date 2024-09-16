"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import classes from "./web-question-styles.module.css";

export default function WebQuestion() {
    function onSubmit() {
        if (answer.toLowerCase() == "providence"){
            console.log("Correct");
            return (
                {correctNotify}
              );
        } else {
            console.log("Incorrect");
            return (
                {incorrectNotify}
              );
        }
    }

    const [answer, setAnswer] = useState("");
    const correctNotify = () => toast.success("Correct!");
    const incorrectNotify = () => toast.error("Incorrect");

    return (
        <div>
            <p className={classes.question}>
                Can you guess where I am now?
            </p>
            <label htmlFor="answer">Guess: </label>
            <input 
            value={answer}
            placeholder = "New York"
            onChange = {(event) => setAnswer(event.target.value)}
            />
            <button onClick={onSubmit} className={classes.guessButton}>Guess</button>
            <Toaster />
        </div>
    );

}