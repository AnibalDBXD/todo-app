import { FormEvent, useRef } from "react";
import axios from "axios";

const InputPost = () => {
    const input = useRef<HTMLInputElement | null>(null)

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        const name = input.current?.value;
        evt.preventDefault();
        axios.post("https://todo-app-api-gamma.herokuapp.com/todo", {
            name,
            completed: false
        }).then((response) => console.log(response));
    }
    return (
        <form className="text-center" onSubmit={handleSubmit}>
            <input ref={input} placeholder="add details" />
            <button type="submit" />
        </form>
    )
}

export default InputPost;
