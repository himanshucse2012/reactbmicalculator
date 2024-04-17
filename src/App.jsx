import React, { useState } from 'react';
import Bmi from './component/Bmi';
import { Result } from 'postcss';

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState({
    value: '',
    message: {
      category: '',
      suggestion: ''
    },
    hidden: false
  });

  const handleWeight = (e) => {
    setWeight(e.target.value);
  }

  const handleHeight = (e) => {
    setHeight(e.target.value / 100);
  }

  const prepareResult = (val) => {
    let category = '';
    let suggestion = '';
    if (val < 18.5) {
      category = 'Underweight';
      suggestion = 'To maintain a healthy weight, consider increasing your calorie intake with nutritious foods like lean proteins, healthy fats, and whole grains. Also, incorporate strength training exercises to build muscle mass.';
    } else if (val >= 18.5 && val < 25) {
      category = 'Normal weight';
      suggestion = 'Congratulations! Your BMI falls within the normal range. To maintain your weight, continue with a balanced diet and regular exercise routine.';
    } else if (val >= 25 && val < 30) {
      category = 'Overweight';
      suggestion = 'To manage your weight, focus on portion control, increasing physical activity, and choosing nutrient-dense foods. Consider consulting a healthcare professional for personalized advice.';
    } else {
      category = 'Obese';
      suggestion = 'It\'s important to take steps to improve your health. Start by setting realistic goals for weight loss, incorporating regular exercise, and seeking support from healthcare professionals or a support group.';
    }

    return {
      category: category,
      suggestion: suggestion
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmi = (weight / (height * height)).toFixed(1);    
    setResult({
      value: bmi,
      message: prepareResult(bmi),
      hidden: true
    });
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="max-w-md bg-white p-8 rounded drop-shadow-lg w-full">
          <h2 className="text-2xl font-bold mb-4 text-red-500">BMI Calculator</h2>
          <form onSubmit={ handleSubmit } className="space-y-4">
              <div>
                  <label htmlFor="weight" className="block font-medium text-gray-700">Weight (kg)</label>
                  <input type="number" id="weight" name="weight" className="mt-1 p-2 border rounded w-full focus:outline-none focus:border-red-300" required
                    onChange={ handleWeight }
                  />
              </div>
              <div>
                  <label htmlFor="height" className="block font-medium text-gray-700">Height (cm)</label>
                  <input type="number" id="height" name="height" className="mt-1 p-2 border rounded w-full focus:outline-none focus:border-red-300" required
                    onChange={ handleHeight }
                  />
              </div>
              <div>
                  <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded w-full hover:bg-red-700 transition-colors duration-300">Calculate BMI</button>
              </div>
          </form>
          <Bmi 
            result={ result }
          />
        </div>
      </div>
    </>
  )
}

export default App;