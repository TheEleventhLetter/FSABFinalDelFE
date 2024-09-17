'use client'
import { useEffect, useState } from "react"
import classes from "./to-visit-table-styles.module.css"

function ToVisitTable() {
    // Array of students state
    const [locations, setLocations] = useState([])
    // A function to get all of the students from the frontend. MAKE SURE your backend is running on port 8080!
    async function getAllLocations() {
        // fetch the URL 
        const res = await fetch("http://localhost:8080/locationsToVisit", {
            method: "GET",
        })
        // We turn the result into a JSON. We could have also turned it into a string, for instance
        const resJSON = await res.json()
        setLocations(resJSON)
    }

    // You can use a side effect to the page loading by entering an empty [] dependency array
    useEffect(() => {
        getAllLocations()
    }, [])

    return (
        <div>
            <h2 className={classes.center}>Place's I want to Visit!</h2>
            <br/>
            <br/>
            <table className={classes.table}>
                <tbody >
                <tr className = {classes.row}>
                    <th>Name of place</th>
                    <th>What I want to eat there</th>
                </tr>
            {
                locations.map((location) => 
                    <tr key={location.id} className={classes.row}>
                        <td>{location.locationName}</td>
                        <td>{location.locationFoods.join(", ")}</td>
                    </tr>
                )
            }
                </tbody>
            </table>
        </div>
    )
}
export default ToVisitTable;