import {clsx} from "clsx";
import { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

export function TextInput(props: TextInputProps) {
    return (
        <input 
        className={clsx("py-4 px-3 rounded outline-none bg-gray-800 w-full text-gray-100 tex-xs placeholder:text-gray-400 focus:ring-2 ring-cyan-300",
        )}{...props} />
    )
}
