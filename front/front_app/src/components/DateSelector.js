import React, {useState}  from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {dateFormat} from '../util'

const DateSelector = (props) => {
    const [date, setDate] = useState(props.current)
    const handleDatePickerChange = (selected) => {
        setDate(selected)
        props.getPropsFromChild(selected)
    }

    return(
        <DatePicker id="date" selected={props.current} onChange={handleDatePickerChange} />
    )
}

export default DateSelector

