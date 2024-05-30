import React, { useState } from "react";
import NewItemForm from "./NewItemForm";
import { Link } from "react-router-dom"; 

function AddItem() {
    const [data, setData] = useState("")

    if (data) {
        return (
            <div>
            <h3>{data.name} added!</h3>
            <Link to="/">Home</Link>
            </div>
        )
    }
    return <NewItemForm setData={setData} />
}

export default AddItem