import React,{memo} from 'react'
import { CiCirclePlus } from 'react-icons/ci';
const Button = ({text,textColor,bgColor,icAfter,onClick,fullwidth}) => {
    // console.log('re-render')
    return (
        <button
        type = "button"
        className = {`py-2 px-4 ${textColor} ${bgColor} ${fullwidth && 'w-full'} outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
        onClick={onClick}
        >
            
            <span>{text}</span>
            <span>{icAfter && <CiCirclePlus/>} </span>   
        </button>
    )
}

export default memo(Button)