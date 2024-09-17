'use client'
import { useEffect, useState } from "react"
import classes from "./to-visit-table-styles.module.css"

function ToVisitTable() {
    const [locations, setLocations] = useState([])
    async function getAllLocations() {
        const res = await fetch("http://localhost:8080/locationsToVisit", {
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