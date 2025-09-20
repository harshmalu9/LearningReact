import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams()
    return (
        <div
        className="bg-orange-700 text-2xl p-4 m-4 text-white rounded-xl"
        >
            User: {userid} 
        </div>
    )
}

export default User;