import {cva, type VariantProps} from "class-variance-authority";
import Text from "./text";
import React from "react";


const badgeVariants = cva("inline-flex items-center justify-center rounded-full", {
    variants: {
        variant: {
            primary: "bg-green-light",
            secondary: "bg-pink-light",
        },
        size: {
            sm: "py-0.5 px-2"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm",
    }
    
});

const BadgeTextVariants = cva("", {
    variants: {
        variant: {
            primary: "text-green-dark",
            secondary: "text-pink-dark",
        }
    },
    defaultVariants: {
        variant: "primary",
    }
})

interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {}

function Badge({
    variant,
    size,
    className,
    children,
}: BadgeProps) {
    return (
        <div className={badgeVariants({variant, size, className})}>
            <Text variant="body-md-bold" className={BadgeTextVariants({variant})}>{children}</Text>
        </div>
    )
}


export {badgeVariants}
export default Badge;