import React, { useState } from 'react';

const Support = () => {
  const [ppmValue, setPpmValue] = useState(0);
  const [co2Value, setCo2Value] = useState(0);
  const [temperatureValue, setTemperatureValue] = useState(0);

  const handleChange = (e, setValue) => {
    const value = parseInt(e.target.value, 10);
    setValue(value);
  };

  return (
    <div className="flex justify-center" name="support">
      {/* PPM Levels */}
      <div className="m-4">
        <label className="font-bold text-blue-900 mb-4 text-2xl">Check Carbon Monoxide Levels:</label>
        <input
          type="number"
          placeholder="Enter PPM"
          onChange={(e) => handleChange(e, setPpmValue)}
          value={ppmValue}
          className="border p-4 mb-4 text-lg"
        />
         <div>
            <p>Safe range: 280ppm to 350ppm</p>
        </div>
        <div
          className={`w-20 h-20 rounded-full border ${ppmValue > 350 ? 'bg-red-500' : 'bg-green-500'}`}
        ></div>
        <p className="text-center mt-4">
          {ppmValue > 350
            ? 'High pollution levels detected. Take necessary precautions.'
            : 'Air quality is good. Keep it up!'}
        </p>
      </div>

      {/* CO2 Levels */}
      <div className="m-4">
        <label className="font-bold text-blue-900 mb-4 text-2xl">Check CO2 Levels:</label>
        <input
          type="number"
          placeholder="Enter CO2 PPM"
          onChange={(e) => handleChange(e, setCo2Value)}
          value={co2Value}
          className="border p-4 mb-4 text-lg"
        />
          <div>
            <p>Safe range: 280ppm to 350ppm</p>
        </div>
           <div
          className={`w-20 h-20 rounded-full border ${
            co2Value >= 350 ? 'bg-red-500' : 'bg-green-500'
          }`}
        ></div> 
          <p className="text-center mt-4">
          {co2Value > 350     
            ? 'High pollution levels detected. Take necessary precautions.'
            : 'Air quality is good. Keep it up!'}
        </p>
      </div>

      {/* Temperature */}
      <div className="m-4">
        <label className="font-bold text-blue-900 mb-4 text-2xl">Check Temperature:</label>
        <input
          type="number"
          placeholder="Enter Temperature"
          onChange={(e) => handleChange(e, setTemperatureValue)}
          value={temperatureValue}
          className="border p-4 mb-4 text-lg"
        />
        <div>
            <p>Safe range: below 42C</p>
        </div>
        <div
          className={`w-20 h-20 rounded-full border ${
            temperatureValue >= 42 ? 'bg-red-500' : 'bg-green-500'
          }`}
        ></div>
        <p className="text-center mt-4">
          {temperatureValue >= 42
            ? 'High temperature detected. Danger!'
            : 'Temperature is within the safe range.'}
        </p>
      </div>
    </div>
  );
};

export default Support;
