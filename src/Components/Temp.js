import React, { useState } from 'react'
import arrow from '../arrow.jpeg'

function Temp(props) {
  
    // const [ctemp, setCtemp] = useState(null);
    // const [ftemp, setFtemp]  = useState(null);

    

    function handleSubmit(e) {
        e.preventDefault()
        var ftemp = document.getElementById('fahrenheit-box').value;
        var ctemp = document.getElementById('Celsius-box').value;
        if(ftemp!=="")
        {
        ctemp=((ftemp -32 *5/9));
        
    }else{
        ftemp = (( ctemp * 9/5 + 32));
    };
     document.getElementById('fahrenheit-box').value = ftemp;
     document.getElementById('Celsius-box').value = ctemp;

        
    };


    function handleReset(e) {

e.preventDefault();
       var user1 = document.getElementById('fahrenheit-box').value;
       var user2 = document.getElementById('Celsius-box').value;

       if(user1 !== null && user2 !== null) {
        document.getElementById('fahrenheit-box').value = null;
        document.getElementById('Celsius-box').value = null;

            
       };
        
    };
    
    
        
    if (!props.showpop) {
        return null;
    }
    return (
        <div>
            <div className='temp-box'>
               
                <h2>Temperature Converter</h2>
                <form action="my-form" id='my-form'  >
                <input type="number"     name="fahrenheit" id="fahrenheit-box"  placeholder='Enter Fahrenheit' />
                <img src={arrow} alt="arrow image" className='arrow-image' />
                <input type="number"  name="Celsius" id="Celsius-box" placeholder='Enter Celsius'  />
                <button type='submit'  id="Convert-btn" onClick={handleSubmit} >Convert!</button>
                <button onClick={handleReset} id="reset-btn">Reset</button>
                </form>
                 
                
            </div>
        </div>
    );
};


export default Temp;
