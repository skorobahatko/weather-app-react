import React, {useEffect, useState} from "react";
import './CityChoosingPage.css';

const CityChoosingPage = (props) => {

    const [ valueOfInput, changeValue ] = useState ('');

    // const getQuery = () => {
    //     let query = new URLSearchParams(props.location.search);
    //     let city = query.get('city');
    //     if (city === 'null') {
    //         return undefined
    //     }
    //     return city;
    // };

    const onChangeInput = (event) => {
        changeValue (event.target.value);
        console.log (valueOfInput)
    };

    const FormSubmit = (event) => {
        event.preventDefault ();
        console.log (valueOfInput)
        if (valueOfInput) {
            props.history.push (`/weather/current_weather/${valueOfInput}`)
        }
    };

    return (<div className='container-fluid background'>
            <h1>Where are u?</h1>
            <div>
                <form onSubmit={FormSubmit} className='form-group' autoComplete='off'>
                    <input
                        type="text"
                        // id='input-of-city'
                        name='city'
                        value={valueOfInput}
                        onChange={onChangeInput}
                        className='input-of-city'
                        placeholder='write your city here'
                    />
                    <input type="submit" value='Search' className='input-of-submit'/>
                </form>
            </div>
        </div>)
};
export default CityChoosingPage;
