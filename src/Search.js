import React, {useState} from 'react';
import './Search.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"; 
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

// Libreria para ver el calendario
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h4>
                Numero de invitados<PeopleIcon />
            </h4>
            <input min={0} defaultValue={100} type="number" />
            <Button onClick={() => history.push('/search')}>Buscar en Feasty</Button>
        </div>
    )
}

export default Search
