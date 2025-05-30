import React,{useCallback} from "react"
import logo from "../../assets/logo2.png"
import {Button} from "../../components"
import icons from '../../ultils/icons'
import {useNavigate} from 'react-router-dom'
import { path } from "../../ultils/constant"
const  {CiCirclePlus} = icons

const Header = () => {
    const navigate = useNavigate()
    const goLogin = useCallback(() => {
        navigate(path.LOGIN)
    },[])
    return (
        <div className='w-1100'>
            <div className = 'w-1100 flex items-center justify-between'>
                <img 
                src = {logo}
                alt = "logo"
                className = "w-[240px] h-[70px] object-contain"
                />
                <div className = "flex items-center gap-1">
                    <small>Phongtro.com xin chao!</small>
                    <Button text = {"Đăng nhập"} textColor = "text-white" bgColor = "bg-blue-500" onClick={goLogin}/>
                    <Button text = {"Đăng ký"} textColor = "text-white" bgColor = "bg-blue-500" onClick={goLogin}/>
                    <Button text = {"Đăng tin mới"} textColor = "text-white" bgColor = "bg-secondary2 " icAfter={CiCirclePlus}/>
                </div>
            </div>
        </div>
    );
}

export default Header;