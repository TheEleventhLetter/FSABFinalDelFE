'use client'
import { useEffect, useState } from "react"
import classes from "./visited-table-style.module.css"

function VisitedTable() {
    const [locations, setLocations] = useState([])
    async function getAllLocations() {
        const res = await fetch("http://localhost:8080/locationsVisited", {
            method: "GET",
        })
        const resJSON = await res.json()
        setLocations(resJSON)
    }

    useEffect(() => {
        getAllLocations()
    }, [])

    return (
        <div>
            <h2 className={classes.center}>Place's I've Visited!</h2>
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