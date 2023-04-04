import React from 'react'
import FormInput from '../components/elements/FormInput'
import { useFormik } from 'formik'
import * as Yup from "yup";
import Link from 'next/link';

export default function Signin() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        }, 
        validationSchema: new Yup.ObjectSchema({
            email: Yup.string().email().required(), 
            password: Yup.string().min(4).required()
        }), 
        onSubmit: async (values) => {
            console.log("submit form values ", values);
        }
    });

    const handleChangeDate = (date) => {
        formik.setFieldValue("dob", date);
    }

    const handleChangeCountry = (value) => {
        console.log("return value ===>> ", value);
        formik.setFieldValue("country", value);
    }


  return (
    <div className="bg-primary-100 min-h-screen min-w-screen flex items-center px-2 py-4 md:p-6 bg-[url('/images/auth-background.png')] bg-contain bg-no-repeat bg-[center_bottom_8rem]">
        <div className="w-11/12 sm:w-[500px] mx-auto bg-white shadow-lg rounded-2xl p-8">
            <h1 className='text-dark-800 text-[32px] font-semibold leading-10 text-center'>Sign In</h1>
            <p className='text-center text-dark-800 text-[15px] font-medium leading-[22.5px] mt-4'>Hi, Enter your details to sign in to <br /> your account</p>

            <div className="mx-auto mt-6 md:mt-10 space-y-4 ">

                <div className="flex flex-col  space-y-1 ">
                    <label htmlFor={'email'} className='text-dark-800 text-[13px] font-medium leading-5'>Email</label>
                    <FormInput 
                        type={'email'}
                        id="email"
                        name={'email'}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={'example@mail.com'}                                                
                    />
                    {
                        formik.errors.email && formik.touched.email ? 
                        <p className='text-red-500 text-[13px] font-normal leading-5'>{formik.errors.email}</p> : ""
                    }
                </div>

                <div className="flex flex-col  space-y-1 ">
                    <label htmlFor={'password'} className='text-dark-800 text-[13px] font-medium leading-5'>Password</label>
                    <FormInput 
                        type={'password'}
                        name={'password'}
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={'e.g, Jane'}                                                
                    />
                    <div className="mt-3 flex justify-end">
                        <Link href={"/forgot-password"}>
                            <a className='text-primary-800 text-right hover:text-primary-800'>
                                Forgot Password?
                            </a>
                        </Link>
                    </div>
                    {
                        formik.errors.password && formik.touched.password ? 
                        <p className='text-red-500 text-[13px] font-normal leading-5'>{formik.errors.password}</p> : ""
                    }
                </div>

            </div>
            <div className="w-full mx-auto mt-6 md:mt-10">
                <button 
                    className='bg-primary-800 mx-auto rounded-xl w-full text-white px-4 py-3.5 text-center font-semibold text-[20px] leading-5'
                >
                    Sign In 
                </button>
                <div className="w-full mt-8 flex justify-center">
                    <button className='text-center space-y-2'>
                        <div className='w-[50px] h-[50px] border border-dark-800 p-3 rounded-full mx-auto'>
                            <img src='/images/google-icon.svg' className='w-full h-full'  />
                        </div>
                        <p className='text-[12px] text-secondary-200'>Sign in with Google</p>
                    </button>
                </div>
                <p className='text-center text-[13px] font-normal leading-5 mt-6'>
                    <span className='text-dark-800'>Don't have an account? </span>
                    <Link href="/signup"><a className='text-primary-800 hover:text-primary-800'>Register here</a></Link>
                </p>
            </div>

        </div>
    </div>
  )
}
