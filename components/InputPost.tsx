import { FormEvent, useRef } from "react";
import axios from "axios";
import { Task } from '../interfaces';

type Props = {
    Tasks: Task[]
    setTasks: Function
};

const InputPost = ({ Tasks, setTasks }: Props) => {
    const input = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        const name = input.current?.value;
        evt.preventDefault();
        axios.post("https://todo-app-api-gamma.herokuapp.com/todo", {
            name,
            completed: false
        }).then((response) => setTasks([...Tasks, response.data.data]));
    };
    return (
        <form className="text-center my-4" onSubmit={handleSubmit}>
            <input className="bg-gray-100 w-6/12 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" ref={input} placeholder="add details" />
            <button className="absolute -mx-12 mt-3 mr-4" type="submit">POST</button>
        </form>
    );
};

export default InputPost;
