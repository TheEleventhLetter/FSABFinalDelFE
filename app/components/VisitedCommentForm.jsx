'use client'
import {useState} from "react";
import classes from "../components/visited-comment-form.styles.module.css"
function VisitedCommentForm() {
    async function onSubmit(){
        const newCommentBody = {
            commentUser,
            commentText,
        }
        console.log(newCommentBody);
        const res = await fetch("http://localhost:8080/locationsVisitedComments", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCommentBody)
        })
    }
    const [commentUser, setCommentUser] = useState("")
    const [commentText, setCommentText] = useState("")

    return (
        <div>
            <h2 className={classes.center}>What places have you visited? How did you like them?</h2>
            <h4 className={classes.center}>Add a comment!</h4>
            <div className = {classes.mainForm}>
                <div>
                    <label htmlFor="commentUser" className={classes.center}>Your Name: </label>
                    <input 
                    name="commentUser"
                    value={commentUser}
                    onChange = {(event) => setCommentUser(event.target.value)}
                    maxLength="10"
                    size="10"
                    />
                </div>
                <div>
                    <label htmlFor="commentText" className={classes.center}>Your Comment: </label>
                    <input 
                    value={commentText}
                    onChange = {(event) => setCommentText(event.target.value)}
                    size="100"
                    />
                </div>
            <button 
            onClick={onSubmit}
            className={classes.submitButton}>Comment</button>
            </div>
        </div>
    )
}
export default VisitedCommentForm;