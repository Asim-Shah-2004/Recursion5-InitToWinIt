// import React from 'react';
import { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({ setDateDiff }) => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(new Date().getMonth() + 1 % 12)
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);

        const dateDifference = new Date(newValue.endDate) - new Date(newValue.startDate);
        const numberOfDays = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
        setDateDiff(numberOfDays);
    }

    return (
        <Datepicker
            value={value}
            onChange={handleValueChange}
        />
    );
};

export default DatePicker;