import {FC} from "react";

type Props = {
    text: string,
    type: "submit" | "reset" | "button" | undefined
}

export const Button: FC<Props> = ({text, type}) => {
    return <button type={type}
                   className=" w-full px-12 py-2.5 text-xl font-medium  text-center text-black bg-white rounded-lg cursor-pointer">
        {text}

    </button>
}