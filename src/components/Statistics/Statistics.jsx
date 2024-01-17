import React, { useState, useEffect } from 'react';

const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    const newTotal = good + neutral + bad;
    const newPositivePercentage =
      newTotal > 0 ? Math.round((good / newTotal) * 100) : 0;

    setTotal(newTotal);
    setPositivePercentage(newPositivePercentage);
  }, [good, neutral, bad]);

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;

/////////////////////////////////                         codigo de abajo el original
// import React from 'react';

// const Statistics = ({ feedback }) => {
//   const { good, neutral, bad } = feedback;
//   const total = good + neutral + bad;
//   const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

//   return (
//     <div>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>Total: {total}</p>
//       <p>Positive feedback: {positivePercentage}%</p>
//     </div>
//   );
// };

// export default Statistics;
