'use client';
import React, {FormEvent, useState} from "react";

const ItemForm: React.FC = ({}) => {
    const [state, setState] = useState({
        name: ""
    })
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        for (let [key, value] of Object.entries(state)) {
            formData.append(key, value)
        }
        const response = await fetch('http://localhost:8082/item', {
            method: 'POST',
            body: formData
        })
        console.log(l)
    }
    return (
        <form onSubmit={onSubmit} style={{margin: "1em"}}>
                <div key={1} style={{margin: "1em"}}>
                    <label htmlFor="name">Name: </label>
                    <br/>
                    <input type="text" style={{border: "1px solid black"}} id="name" value={state.name} onChange={(e) => setState({name: e.target.value})} />
                </div>
            <button type="submit" style={{margin: "1em"}}>Click Me</button>
        </form>
    )
}

export default ItemForm