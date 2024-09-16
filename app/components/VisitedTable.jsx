'use client'
import { useEffect, useState } from "react"
import classes from "./visited-table-style.module.css"

function VisitedTable() {
    // Array of students state
    const [locations, setLocations] = useState([])
    // A function to get all of the students from the frontend. MAKE SURE your backend is running on port 8080!
    async function getAllLocations() {
        // fetch the URL 
        const res = await fetch("http://localhost:8080/locationsVisited", {
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
            <h2>Place's I've Visited!</h2>
            <button onClick = {getAllLocations}>
                Reload
            </button>
            <br/>
            <br/>
            <table className={classes.table}>
                <tbody >
                <tr className = {classes.row}>
                    <th>Name</th>
                    <th>When I Visited</th>
                    <th>Rating out of 5</th>
                    <th>Foods I Ate!</th>
                </tr>
            {
                locations.map((location) => 
                    <tr key={location.id} className={classes.row}>
                        <td>{location.locationName}</td>
                        <td>{location.locationYear}</td>
                        <td>{location.locationRating}</td>
                        <td>{location.locationFoods.join(", ")}</td>
                    </tr>
                )
            }
                </tbody>
            </table>
        </div>
    )
}
export default VisitedTable;