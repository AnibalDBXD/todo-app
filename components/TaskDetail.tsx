import { Task } from "../interfaces";
import Delete from "./icons/Delete";
import Colors from "../utils/Colors";
import { FormEvent, useRef, useState } from "react";

import axios from "axios";
import config from "../config.json";
import { useRouter } from "next/router";

const TaskDetail = ({ _id, name, completed, createdDate }: Task) => {
    const route = useRouter();

    const [Checked, setChecked] = useState(completed);

    const CheckBox = useRef<HTMLInputElement | null>(null);
    const Input = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const data = {
            _id,
            name: Input.current?.value,
            completed: CheckBox.current?.checked,
        }
        axios.put(config.URL, data)
            .then(() => route.back())
            .then(() => alert("Change made succes"))
            .catch(() => alert("An error has occurred"));
    };

    const handleDelete = () => {
        axios.delete(`${config.URL}/${_id}`)
            .then(() => route.back())
            .then(() => alert("Change made succes"))
            .catch(() => alert("An error has occurred"));
    };

    //Background color
    const date = new Date(createdDate);
    const LastDigit = date.getMilliseconds().toString().split('').pop();
    const NumberForColor = Math.floor(Number(LastDigit) / 2);

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="flex justify-center content-center">
                <div className={`${Colors[NumberForColor]} rounded-xl my-5 mx-1 p-4 w-1/3 overflow-hidden xl:w-1/4`}>
                    <p className="font-light text-gray-300">ID: {_id}</p>
                    <div className="flex justify-between my-2">
                        <input ref={Input} className="text-black text-lg my-auto" defaultValue={name}></input>
                        <div className="my-auto block">
                            <p>
                                {`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
                            </p>
                            <p>{`${date.getHours()}:${date.getMinutes()}`}</p>
                        </div>
                    </div>
                    <div className="my-2">
                        <label htmlFor="completed" className="mr-2">Completed</label>
                        <input onChange={() => setChecked(!Checked)} ref={CheckBox} className="my-auto" type="checkbox" name="completed" id="completed" checked={Checked} />
                    </div>
                    <br />
                    <div className="flex justify-between my-2">
                        <button className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded mx-2 my-auto" type="submit">Change</button>
                        <button className="mx-2 my-auto h-5 w-5" type="button" onClick={handleDelete}><Delete /></button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default TaskDetail;
