import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div className='questions'>
            <h2 className="text">Questions/Answers:</h2>
            <h4>1.How does React.js works?</h4>
            <p> <strong>Answer:</strong> React is a JavaScript library that creates user interfaces in a predictable and efficient way using declarative code. We can use it to help build single-page applications and mobile apps, or to build complex apps if we utilize it with other libraries. It uses a declarative paradigm which makes it easier to reason about our application and aims to be both efficient and flexible. React.js designs simple views for each state in our application, and it will efficiently update and render just the right component when your data changes.</p>
             <h4>2.What are the differences between props and state?</h4>
            <p><strong>Answer:</strong>The differences between props and state are:</p>
            <strong>Props</strong>
            <p>
                1. In a React component, props allow you to pass data from one component to other components as an argument.<br/>
                2. In a React component, props are immutable.
            </p>
            <strong>State</strong>
            <p>
                1. In a React component, the state holds information about the components. <br/>
                2. In a React component, the state is mutable.
            </p>
        </div>
    );
};

export default Question;