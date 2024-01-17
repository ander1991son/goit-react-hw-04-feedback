import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedbackReceived, setFeedbackReceived] = useState(false);
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
    setFeedbackReceived(true);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {feedbackReceived ||
        feedback.good > 0 ||
        feedback.neutral > 0 ||
        feedback.bad > 0 ? (
          <Statistics feedback={feedback} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

/////////////////////////////////////////////////                                 codigo de abajo original
// import React, { Component } from 'react';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Statistics from './Statistics/Statistics';
// import Section from './Section/Section';
// import Notification from './Notification/Notification';

// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { feedbackReceived: false, good: 0, neutral: 0, bad: 0 };
//   }

//   handleFeedback = type => {
//     this.setState(prevState => ({
//       ...prevState,
//       [type]: prevState[type] + 1,
//     }));
//   };

//   render() {
//     const { feedbackReceived, good, neutral, bad } = this.state;
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {feedbackReceived || good > 0 || neutral > 0 || bad > 0 ? (
//             <Statistics feedback={{ good, neutral, bad }} />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
