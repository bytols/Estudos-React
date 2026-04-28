import React from "react"
import Icon from "./icon"
import {cva, type VariantProps} from "class-variance-authority";

const buttonVariants = cva("flex items-center justify-center cursor-pointer transition rounded-lg group gap-2" , {
    variants : {
        variant : {
            primary: "bg-gray-200"
        },
        size: {
            md: "h-14 py-4 px-5"
        },
        disabled: {
            true: "opacity-50 pointer-events-none"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false,
    }
});

const buttonIconVariants = cva("transition", {
    variants : {
        variant : {
            
        }
    }
})

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size"  | "disabled">, VariantProps<typeof buttonVariants>  {
    icon?: React.ComponentProps<typeof Icon>["svg"]
}


function button({
    variant,
    size,
    disabled,
    className,
    children,
    icon: IconComponent,
    ...props
}: ButtonProps) 
{
    return (
        <button {...props}>
            {children}
        </button>
    )
}

export default button