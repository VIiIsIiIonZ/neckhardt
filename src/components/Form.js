import { useState } from "react";

export default function Form(props) {
    const [name, setName] = useState(0);
    function handleSubmit(e) {
        e.preventDefault();
        setName((10+10));
        console.log(name);
        props.onSubmit(name);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )
}