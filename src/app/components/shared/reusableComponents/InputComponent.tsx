import { customInputProps } from "./types/types"
import "./index.css"
const InputComponent = (props: customInputProps) => {
    return (
        <div className={`lg:col-span-6 col-span-12 ${props?.className ? props?.className : ""}`}>
            {props.label && (
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {props.label}{" "}
                    <span className="bg-custom-gradient bg-clip-text text-transparent font-medium text-[16px]">
                        {props.labelLang}
                    </span>
                </label>
            )}
            <input
                type={props.type}
                placeholder={props.placeholder || ""}
                value={props.value}
                name={props.name}
                {...props.register(props.name)}
                required={props.required ? props.required : false}
                disabled={props.disabled ? props.disabled : false}
                
                className="bg-white p-4 border border-gray-300 text-gray-900 text-sm   focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
        </div>
    )
}

export default InputComponent
