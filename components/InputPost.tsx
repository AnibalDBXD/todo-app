import { FormEvent, useRef } from "react";
import { Task } from '../interfaces';

import axios from "axios";
import config from "../config.json";

type Props = {
    Tasks: Task[]
    setTasks: Function
};

const InputPost = ({ Tasks, setTasks }: Props) => {
    const input = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        const name = input.current?.value;
        evt.preventDefault();
        axios.post(config.URL, {
            name,
            completed: false
        }).then((response) => setTasks([...Tasks, response.data.data]));
    };
    return (
        <form className="text-center my-4" onSubmit={handleSubmit}>
            <input className="bg-gray-100 w-6/12 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" ref={input} placeholder="add details" />
            <button className="-ml-14 font-medium" type="submit">POST</button>
        </form>
    );
};

export default InputPost;
