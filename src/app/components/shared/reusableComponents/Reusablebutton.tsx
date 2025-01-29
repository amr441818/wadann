import { ReactNode } from "react"
import "./index.css"

type ButtonProps = {
    children: string | ReactNode
    onClick?: () => void
    type?: "button" | "submit" | "reset" | undefined
    outline?: boolean
    className?: string
}

const Button = (props: ButtonProps) => {
    return (
        <button
            type={props.type || "button"}
            className={`${
                props.outline
                    ? "bg-white w-full lg:w-auto text-primary text-[16px] whitespace-nowrap font-semibold border-[1px] border-primary  rounded-lg px-4 md:px-[44px] py-[12px] text-center  "
                    : "text-white w-full lg:w-auto bg-linearbg text-[16px] whitespace-nowrap font-semibold rounded-lg  px-4 md:px-[44px] py-[13px] text-center"
            } ${props?.className ? props?.className : ""}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>

        // {/*  <button className="btn text-primary  hover:text-white hover:bg-linearbg" > amr</button> */}
    )
}

export default Button
