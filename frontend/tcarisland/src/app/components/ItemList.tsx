'use client';
import React, {FormEvent, useEffect, useState} from "react";

const ItemList: React.FC = ({}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        /*
        const response = await fetch('/api/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(requestData)
        })
         */
        fetch('/api/item', {
            method: 'GET'
        }).then(response => response.json()).then(data => setData(data))
        console.log(data)
    })
    return (
        <ul style={{padding: "0em 2em 2em 2em"}}>
            {
                data.map((item, i) => <li key={i}>{item["id"] + " " + item['name']}</li>)
            }
        </ul>
    )
}

export default ItemList