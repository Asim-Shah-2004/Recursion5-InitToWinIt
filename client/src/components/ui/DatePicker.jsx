import Datepicker from "react-tailwindcss-datepicker"; 
import React, { useState } from 'react'

const DatePicker = () => { 
    const [value, setValue] = useState({ 
    startDate: new Date(), 
    endDate: new Date().setMonth(11) 
    }); 
    
    const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    console.log(value.startDate.getMonth);
    } 
    
    return (
    <Datepicker 
    value={value} 
    onChange={handleValueChange} 
    /> 
    );
    }; 
    export default DatePicker;