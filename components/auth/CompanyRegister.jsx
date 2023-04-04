import React from 'react'
import FormInput from '../components/elements/FormInput'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { Button, DatePicker, Input, Select } from 'antd';
import selectBefore from '../components/elements/CountryCodeSelect';
import moment from 'moment';
import CountrySelect from '../components/elements/CountrySelect';
import Link from 'next/link';

export default function CompanyRegister() {

    const formik = useFormik({
        initialValues: {
            first_name: "", 
            last_name: "", 
            phone_number: "", 
            email: "", 
            country: "", 
            dob: "", 
            password: "",
            confirm_password: ""
        }, 
        validationSchema: new Yup.ObjectSchema({
            first_name: Yup.string().required(), 
            last_name: Yup.string().required(), 
            phone_number: Yup.string().min(11).max(16).required(), 
            email: Yup.string().email().required(), 
            country: Yup.string().required(), 
            dob: Yup.string().required(), 
            password: Yup.string().min(4).required(), 
            confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
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
    <div className="bg-primary-100 min-h-screen min-w-screen flex items-center px-2 py-4 md:p-6 bg-[url('/images/auth-background.png')] bg-contain bg-no-repeat bg-[center_bottom_5rem]">
        <div className="w-11/12 sm:w-10/12 lg:w-8/12 mx-auto bg-white shadow-lg rounded-2xl p-8">
            <h1 className='text-dark-800 text-[32px] font-semibold leading-10 text-center'>Sign Up</h1>
            <p className='text-center text-dark-800 text-[13px] font-normal leading-5 mt-4'>Create your account and let's get started</p>

            <div className="md:w-5/6 mx-auto mt-6 md:mt-10 grid sm:grid-cols-2 sm:gap-2 md:gap-5 lg:gap-6 space-y-4 sm:space-y-0">

                <div className="flex flex-col  space-y-1 ">
                    <label htmlFor={'first_name'} className='text-dark-800 text-[13px] font-medium leading-5'>First Name</label>
                    <FormInput 
                        name={'first_name'}
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={'e.g, Jane'}                                                
                    />
                    {
                        formik.errors.first_name && formik.touched.first_name ? 
                        <p className='text-red-500 text-[13px] font-normal leading-5'>{formik.errors.first_name}</p> : ""
                    }
                </div>

                <div className="flex flex-col  space-y-1 ">
                    <label htmlFor={'last_name'} className='text-dark-800 text-[13px] font-medium leading-5'>Last Name</label>
                    <FormInput 
                        name={'last_name'}
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={'e.g, Makkeba'}                                                
                    />
                    {
                        formik.errors.last_name && formik.touched.last_name ? 
                        <p className='text-red-500 text-[13px] font-normal leading-5'>{formik.errors.last_name}</p> : ""
                    }
                </div>
                
                <div className="flex flex-col  space-y-1 ">
                    <label htmlFor={'phone_number'} className='text-dark-800 text-[13px] font-medium leading-5'>Phone</label>
                    <Input 
                        bordered={false}
                        addonBefore={selectBefore} 
                        defaultValue="" 
                        className={'border-2 border-primary-200 rounded-xl p-2 bg-gray-50 focus-within:outline-none w-full'}
                        placeholder='92'
                        name='phone_number'
                        id='phone_number'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                    />
                    {
                        formik.errors.phone_number && formik.touched.phone_number ? 
                        <p className='text-red-500 text-[13px] font-normal leading-5'>{formik.errors.phone_number}</p> : ""
                    }
                </div>

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
                    <label htmlFor={'country'} className='text-dark-800 text-[13px] font-medium leading-5'>Country</label>
                    <CountrySelect
                        name="country"
                        id="country"
                        onChange={handleChangeCountry}
                    />
                    {
                        formik.errors.country && formik.touched.country ? 
                        <p className='text-red-500 text-[13px] font-normal leading-5'>{formik.errors.country}</p> : ""
                    }
                </div>
                
                <div className="flex flex-col  space-y-1 ">
                    <label htmlFor={'dob'} className='text-dark-800 text-[13px] font-medium leading-5'>Date of Birth</label>                    
                    <DatePicker 
                        name='dob'
                        id='dob'
                        className={'border-2 border-primary-200 rounded-xl p-2 bg-gray-50 focus-within:outline-none w-full px-3'}
                        placeholder='MM-DD-YYYY'
                        onChange={handleChangeDate}
                        format={"MM-DD-YYYY"}
                        disabledDate={(current) => current.isAfter(moment())}
                    />
                    {
                        formik.errors.dob && formik.touched.dob ? 
                        <p className='text-red-500 text-[13px] font-normal leading-5'>{formik.errors.dob}</p> : ""
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
                    {
                        formik.errors.password && formik.touched.password ? 
                        <p className='text-red-500 text-[13px] font-normal leading-5'>{formik.errors.password}</p> : ""
                    }
                </div>

                <div className="flex flex-col  space-y-1 ">
                    <label htmlFor={'confirm_password'} className='text-dark-800 text-[13px] font-medium leading-5'>Confirm Password</label>
                    <FormInput 
                        type={'password'}
                        id="confirm_password"
                        name={'confirm_password'}
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={'e.g, Jane'}                                                
                    />
                    {
                        formik.errors.confirm_password && formik.touched.confirm_password ? 
                        <p className='text-red-500 text-[13px] font-normal leading-5'>{formik.errors.confirm_password}</p> : ""
                    }
                </div>

            </div>
            <div className="w-full md:w-4/6 lg:w-2/6 mx-auto mt-6 md:mt-10">
                <button 
                    className='bg-primary-800 mx-auto rounded-xl w-full lg:max-w-[400px] text-white px-4 py-3.5 text-center font-semibold text-[20px] leading-5'
                >
                    Signup
                </button>
                <p className='text-center text-[13px] font-normal leading-5 mt-6'>
                    <span className='text-dark-800'>Already have an account? </span>
                    <Link href="/signin"><a className='text-primary-800 hover:text-primary-800'>Login here</a></Link>
                </p>
            </div>

        </div>
    </div>
  )
}
