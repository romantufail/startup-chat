import { Select } from 'antd';
import countries from "../../data/countries.json";

const { Option } = Select;

console.log(countries);

const selectBefore = (
  <Select defaultValue="+92" bordered={false} className='border-r border-gray-200 w-auto' >
      {
        countries && countries.sort((a, b) => {
          
          return Number(a.name) - Number(b.name);
        }).map((item, idx) => 
          
          <Option key={idx} value={`+${item?.callingCodes}`}>{item?.name}</Option>
        
        )
      }
      {/* <Option value="https://">https://</Option> */}
  </Select>
);

export default selectBefore;