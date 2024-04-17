import React from 'react'

const Result = ({ result }) => {
  return (    
    <div className={`${(!result.hidden) ? 'hidden' : ''} mt-4`}>
      <h3 className="text-xl font-bold mb-2 text-red-600">Your BMI</h3>
      <p id="bmiValue" className="text-2xl font-bold mb-2">{ result.value }</p>
      <p id="bmiCategory" className="font-medium text-red-600">{ result.message.category }</p>
      <p id="suggestions" className="text-sm text-gray-700">{ result.message.suggestion }</p>
  </div>
  )
}

export default Result;