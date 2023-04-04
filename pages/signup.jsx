import React from 'react'
import FormInput from '../components/elements/FormInput'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { Button, DatePicker, Input, Select } from 'antd';
import selectBefore from '../components/elements/CountryCodeSelect';
import moment from 'moment';
import CountrySelect from '../components/elements/CountrySelect';
import Link from 'next/link';

export default function Signup() {


  return (
    <div className="bg-white min-h-screen min-w-screen flex items-center px-2 py-4 md:px-6 justify-center">
        <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 bg-gray-50 rounded-2xl py-10 px-6 border-2 border-primary-200 mx-auto">
            <h1 className='font-semibold text-3xl sm:text-3xl md:text-4xl text-center'>Choose Account Type</h1>
            <p className='text-center mt-5 text-[15px] md:text-[17px]'>If you need more info, please click <Link href={"#"}><a className='text-primary-800 hover:text-primary-800'>Here</a></Link></p>

            <div className="w-11/12 sm:w-10/12 mx-auto mt-10 grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border-2 border-primary-200 hover:border-primary-800 p-6 bg-white flex items-center gap-4 hover:cursor-pointer">
                    <div className="w-[80px] h-[80px]">
                        <img 
                            src='/images/default.svg'
                            className='w-full h-full object-contain'
                        />
                    </div>

                    <div className="">
                        <h6 className='font-semibold text-sm text-dark-800'>Join as an Agent</h6>
                        <p className='mt-1 text-[12px] text-[#5E5873]'>Lorem ipsum dolor sit amet consectetur. Tristique plac cras.</p>
                    </div>
                </div>
                <div className="rounded-xl border-2 border-primary-200 hover:border-primary-800 p-6 bg-white flex items-center gap-4 hover:cursor-pointer">
                    <div className="w-[80px] h-[80px]">
                        <img 
                            src='/images/brifcase.svg'
                            className='w-full h-full object-contain'
                        />
                    </div>

                    <div className="">
                        <h6 className='font-semibold text-sm text-dark-800'>Join as a Company</h6>
                        <p className='mt-1 text-[12px] text-[#5E5873]'>Lorem ipsum dolor sit amet consectetur. Tristique plac cras.</p>
                    </div>
                </div>
            </div>

            <p className='text-center mt-10 text-[15px] md:text-[17px]'>Already have an account? <Link href={"#"}><a className='text-primary-800 hover:text-primary-800'>Login here</a></Link></p>
        </div>
    </div>
  )
}
