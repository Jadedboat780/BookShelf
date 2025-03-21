import {FC} from "react";

type Props = {
    label: string,
    type: "text" | "email" | "url" | "password",
    placeholder: string,
    value: string,
    setValue: (val: any) => void,
}

export const InputText: FC<Props> = ({label, type, placeholder, value, setValue}) => {
    return <div className="mb-6">
        <label htmlFor={label} className="block text-xl font-medium text-white">{label}</label>
        <input type={type} id={label}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
               placeholder={placeholder}
               value={value}
               onChange={(e) => setValue(String(e.target.value))}
               required/>
    </div>
}