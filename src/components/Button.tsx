import React from "react";
import {twMerge} from "tailwind-merge";
import Spinner from "./Spinner";

export enum Style {FILL, OUTLINE}
type ButtonProps = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    loading?: boolean
    loadingText?: string
    disabled?: boolean
    className?: string
    style?: Style
    children: React.ReactNode
}

// TODO: Allow to pass in any properties and classes and USE IT.
const Button = (props: ButtonProps) => {
    const [isBeingClicked, setIsBeingClicked] = React.useState(false);
    // Check global mouse up.
    React.useEffect(() => {
        const onMouseUp = () => setIsBeingClicked(false);
        window.addEventListener("mouseup", onMouseUp);
        return () => window.removeEventListener("mouseup", onMouseUp);
    }, []);

    let btnClasses;

    switch (props.style) {
        case Style.OUTLINE:
            btnClasses =
                // TODO: This fucker is hardcoded, because there is apparently no fucking way to create an inner border
                // in talwind css. What the fuck guys?
                `border-solid border-2 border-indigo-700 py-0.5
                ${isBeingClicked 
                    ? "bg-indigo-800 py-0.5" 
                    : props.loading 
                        ? ""
                        : "hover:bg-indigo-500 hover:bg-opacity-20 hover:border-indigo-500 bg-indigo-800 bg-opacity-5"}`
            break;

        default:
            btnClasses =
                (!isBeingClicked && !props.loading && " hover:bg-indigo-500")
                + (isBeingClicked ? " bg-indigo-800" : props.loading ? " bg-indigo-800" : " bg-indigo-700")
            break;
    }

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                if (props.loading) return;
                props.onClick && props.onClick(e);
            }}
            onMouseDown={() => setIsBeingClicked(true)}
            disabled={props.loading}
            className={twMerge("duration-200 rounded-md text-sm px-5 py-2.5 outline-none focus:outline-none "
                + (props.loading && " cursor-default")
                + btnClasses + " "
                + (props.className ?? ""))}>

            {props.loading && <Spinner className={(props.loadingText || props.children) ? `mr-2` : ""}/>}
            {
                props.loading && props.loadingText
                    ? <span className="">{props.loadingText}</span>
                    : props.children
            }
        </button>
    );
}
export default Button;