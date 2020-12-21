import { FormEvent, useRef } from "react";
import axios from "axios";
import { Task } from '../interfaces';

type Props = {
    Tasks: Task[]
    setTasks: Function
}

const InputPost = ({ Tasks, setTasks }: Props) => {
    const input = useRef<HTMLInputElement | null>(null)

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        const name = input.current?.value;
        evt.preventDefault();
        axios.post("https://todo-app-api-gamma.herokuapp.com/todo", {
            name,
            completed: false
        }).then((response) => setTasks([...Tasks, response.data.data]));
    }
    return (
        <form className="text-center" onSubmit={handleSubmit}>
            <input ref={input} placeholder="add details" />
            <button type="submit" />
        </form>
    )
}

export default InputPost;
