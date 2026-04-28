import { type VariantProps, cva, cx} from "class-variance-authority";
import type { buttonIconVariants } from "./button";
import type React from "react";
import { TextVariants } from "./text";

const inputTextVariants = cva(`
     border-b border-solid border-gray-200 focus:border-pink-base
     bg-transparent outline-none
    `, {
        variants: {
            size: {
                md : "pb-2 px-2"
            },
            disabled: {
                true: "pointer-events-none"
            }
        },
        defaultVariants: {
            size: "md",
            disabled: false,
        }
    });


interface InputTextProps extends VariantProps<typeof inputTextVariants>, 
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

function InputText({
    size, disabled, className, ...props
} : InputTextProps) {
    return <input className={cx(inputTextVariants({size, disabled}),
    TextVariants(),
    className
    )}
    {...props} />
}


export {inputTextVariants}

export default InputText