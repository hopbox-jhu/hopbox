import React, { useState } from "react";

export function Listing({ address, type, price, description, length, width, height }) {
    const [expanded, setExpanded] = useState(false);

    function toggleExpanded() {
        setExpanded(!expanded);
    }

    return (
        <div>
            <h3>{address}</h3>
            <p>Type: {type.charAt(0).toUpperCase() + type.slice(1)}</p>
            <p>Price: ${price}</p>
            <p>{expanded ? `Dimensions: ${length}x${width}${height != null ? `x${height} ft` : ' ft'}` : ""}</p>
            <p>
                {expanded ? `Description: ${description}` : ""}
            </p>
            <p onClick={toggleExpanded} style={{ cursor: "pointer" }}>
                {expanded ? "{-}" : "{+}"}
            </p>
        </div>
    );
}