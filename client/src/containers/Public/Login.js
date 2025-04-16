import React from 'react'
import {Button, InputForm} from '../../components'
const Login = () => {
    return (
        <div className = 'bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
            <h3 className='font-semibold text-2xl mb-3'>Đăng nhậpp</h3>
            <div className='w-full flex flex-col gap-3'>
                <InputForm label={'SỐ ĐIỆN THOẠI'}/>
                <InputForm label={'MẬT KHẨU'}/>
               
            </div>
        </div>
    );
}

export default Login