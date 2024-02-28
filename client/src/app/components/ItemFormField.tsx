'use client';
import React, {FormEvent, useState} from "react";

const ItemForm: React.FC = ({}) => {
    const [state, setState] = useState({
        name: ""
    })
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        let requestData = {}
        for (let [key, value] of Object.entries(state)) {
            // @ts-ignore
            requestData[key] = value
        }
        const response = await fetch('/api/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(requestData)
        })
        if(response.status == 200) {
            alert("Success")
        } else {
            alert("Request Failed\n" + response.status + "\n" + response.statusText)
        }
    }
    return (
        <form onSubmit={onSubmit} style={{margin: "1em 1em 0em 1em"}}>
                <div key={1} style={{margin: "1em"}}>
                    <label htmlFor="name">Name: </label>
                    <br/>
                    <input type="text" style={{border: "1px solid black", padding: ".3em 1em .3em 1em"}} id="name" value={state.name} onChange={(e) => setState({name: e.target.value})} />
                </div>
            <button type="submit" style={{margin: "1em", padding: ".3em 1em .3em 1em", border: "1px solid black"}}>Click Me</button>
        </form>
    )
}

export default ItemForm