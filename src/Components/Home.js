import React from 'react'

function Home(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div>
      <div className='box'>
        <div>
          <h2>Welcome!, to our Weather Forecast  App</h2>
        </div>
        <div>
          <p>Weather forecasting is the application of science and technology to predict
            the conditions of the atmosphere for a given location and time. 
            </p>
            <p id='para-2'>People haveattempted to predict the weather informally for millennia and formally since
            the 19th century.</p>
            <p className='para-3' >Weather forecasts are made by collecting quantitative data about the current state of the atmosphere,
             land, and ocean and using meteorology to project how the atmosphere will change at a given place.</p>
             <p className='para-4'> Hence, forecasts become less accurate as the difference between current time and the time for which the forecast 
              is being made (the range of the forecast) increases.</p>
        </div>

      </div>
    </div>
  );
};

export default Home;
