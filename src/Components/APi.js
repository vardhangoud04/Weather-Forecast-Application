import React from 'react'
import '../App.css'

import dexter from '../dexter.png'
function APi(props) {


    // const [city, setCity]= useState()


    function handleChange(e) {

        e.preventDefault()
        let user2 = document.getElementById('res2')
        var apikey = "ebcc3a81a949615a37d19d01a837bca4";
        let userInput = document.getElementById('city').value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apikey}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)

                function display(res) {
                    let result = document.getElementById('res1')
                    result.innerText = res   
                }
                if (res.cod === "404") {

                    display(user2)
                }
                else {
                    display(`weather details of city :${res.name},${res.sys.country} 

        Current Temperature: ${res.main.temp}
        Temperature Range: ${res.main.temp_min} to ${res.main.temp_max}
                    humidity:${res.main.humidity}`)
                }
            })
    }
    if (!props.visible) {
        return null;
    };
    return (
        <div> 
            <div className='image-div'>
                <img className='cloud-images' src={dexter} alt="cloud pics" />
                <h3>let's find weather in my city</h3>
            </div>
            <form >
                <div className='content-div'>
                    <input type="text" onChange={handleChange} name="city" id="city" placeholder='Enter City' />
                    <div id='res1'>
                        <div id='res2'>Enter valid city name</div>
                    </div>
                    
                </div>
            </form>
           

        </div>
    );
};

export default APi;
