'use client'
import { useEffect, useState } from "react"
import classes from "./visited-comment-table-styles.module.css"

function VisitedCommentTable() {
    const [comments, setComments] = useState([])
    async function getAllComments() {
        const res = await fetch("http://localhost:8080/locationsVisitedComments", {
            method: "GET",
        })
        const resJSON = await res.json()
        setComments(resJSON)
    }

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