import React, { useEffect, useState } from 'react'
import countries from "../../data/countries.json";
import { Select } from 'antd';

export default function CountrySelect({ id, name, onChange }) {

    const [options, setOptions] = useState('');

    useEffect(() => {
        if(countries) {
            let opts = countries.map(item => {
                return {
                    value: item.name, 
                    label: item.name 
                }
            });
            setOptions(opts);
        }
    }, []);

    const handleChange = (country) => {
        onChange(country);
    }

    const handleSearch = (value) => {
        console.log('search:', value);
      };

    return (
        <>
            <Select
                showSearch
                name={name}
                id={id}
                // style={{ width: 160 }}
                className={'border-2 border-primary-200 rounded-xl p-2 bg-gray-50 focus-within:outline-none w-full px-3 select__input'}
                placeholder="e.g, Pakistan"
                optionFilterProp="children"
                onChange={handleChange}
                onSearch={handleSearch}
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={options}
            />
        </>
    )
}
