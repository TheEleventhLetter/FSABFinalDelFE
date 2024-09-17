'use client'
import { useEffect, useState } from "react"
import classes from "./visited-comment-table-styles.module.css"

function VisitedCommentTable() {
    // Array of students state
    const [comments, setComments] = useState([])
    // A function to get all of the students from the frontend. MAKE SURE your backend is running on port 8080!
    async function getAllComments() {
        // fetch the URL 
        const res = await fetch("http://localhost:8080/locationsVisitedComments", {
            method: "GET",
        })
        // We turn the result into a JSON. We could have also turned it into a string, for instance
        const resJSON = await res.json()
        setComments(resJSON)
    }

    // You can use a side effect to the page loading by entering an empty [] dependency array
    useEffect(() => {
        getAllComments()
    }, [])

    return (
        <div>
            <h2 className={classes.center}>Comments!</h2>
            <button className = {classes.center} onClick = {getAllComments}>
                Reload
            </button>
            <br/>
            <br/>
            <table className={classes.table}>
                <tbody >
                <tr className = {classes.row}>
                    <th>User</th>
                    <th>Comment</th>
                </tr>
            {
                comments.map((comment) => 
                    <tr key={comment.id} className={classes.row}>
                        <td>{comment.commentUser}</td>
                        <td>{comment.commentText}</td>
                    </tr>
                )
            }
                </tbody>
            </table>
        </div>
    )
}
export default VisitedCommentTable;