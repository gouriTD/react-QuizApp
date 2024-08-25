export const QUIZ_DATA = [
    {
        id: 'q1',
        question: 'How do you typically render list content in React apps?',
        options: [
            {
                bullet: 'a',
                answer: 'By using the loop() method to iterate over any array of data and returning JSX'
            },
            {
                bullet: 'b',
                answer: 'By using the map() method to iterate over any array of data and returning JSX'
            },
            {
                bullet: 'c',
                answer: 'By using the for() method to iterate over any array of data and returning JSX'
            },
            {
                bullet: 'd',
                answer: 'By using the forEach() method to iterate over any array of data and returning JSX'
            }
        ],
        correctAnswer: {
            bullet: 'b',
            answer: 'By using the map() method to iterate over any array of data and returning JSX'
        },
    },
    {
        id: 'q2',
        question: 'What is a side effect in react?',
        options: [
            {
                bullet: 'a',
                answer: 'An asynchronous function which must be executed after a react component is rendered.'
            },
            {
                bullet: 'b',
                answer: 'An operation that needs to be executed everytime react component is re-rendered.'
            },
            {
                bullet: 'c',
                answer: 'An operation which is not directly related to the render cycle of the component.'
            },
            {
                bullet: 'd',
                answer: 'None of these.'
            }
        ],
        correctAnswer: {
            bullet: 'c',
            answer: 'An operation which is not directly related to the render cycle of the component.'
        },
    },
    {
        id: 'q3',
        question: 'What purpose do React hooks serve?',
        options: [
            {
                bullet: 'a',
                answer: 'Enabling the use of state and other React features in functional components.',
            },
            {
                bullet: 'b',
                answer: 'Creating responsive layouts in React applications.',
            },
            {
                bullet: 'c',
                answer: 'Handling errors within the application.',
            },
            {
                bullet: 'd',
                answer: 'Part of the Redux library for managing global state.',
            }
        ],
        correctAnswer: {
            bullet: 'a',
            answer: 'Enabling the use of state and other React features in functional components.'
        },
    },
    // {
    //     id: 'q4',
    //     question: 'Can you identify what JSX is?',
    //     options: [
    //         {
    //             bullet: 'a',
    //             answer: 'A JavaScript extension that adds HTML-like syntax to JavaScript.',
    //         },
    //         {
    //             bullet: 'b',
    //             answer: 'A JavaScript library for building dynamic user interfaces.',
    //         },
    //         {
    //             bullet: 'c',
    //             answer: 'A specific HTML version that was explicitly created for React.',
    //         },
    //         {
    //             bullet: 'd',
    //             answer: 'A tool for making HTTP requests in a React application.',
    //         }
    //     ],
    //     correctAnswer: {
    //         bullet: 'a',
    //         answer: 'A JavaScript extension that adds HTML-like syntax to JavaScript.',
    //     }
    // },
    // {
    //     id: 'q5',
    //     question: 'What is the most common way to create a component in React?',
    //     options: [
    //         {
    //             bullet: 'a',
    //             answer: 'By defining a JavaScript function that returns a renderable value.',
    //         },
    //         {
    //             bullet: 'b',
    //             answer: 'By defining a custom HTML tag in JavaScript.',
    //         },
    //         {
    //             bullet: 'c',
    //             answer: 'By creating a file with a .jsx extension.',
    //         },
    //         {
    //             bullet: 'd',
    //             answer: 'By using the "new" keyword followed by the component name.',
    //         }
    //     ],
    //     correctAnswer: {
    //         bullet: 'a',
    //         answer: 'By defining a JavaScript function that returns a renderable value.',
    //     }
    // },
    // {
    //     id: 'q6',
    //     question: 'What does the term "React state" imply?',
    //     options: [
    //         {
    //             bullet: 'a',
    //             answer: 'An object in a component that holds values and may cause the component to render on change.'
    //         },
    //         {
    //             bullet: 'b',
    //             answer: 'The lifecycle phase a React component is in.'
    //         },
    //         {
    //             bullet: 'c',
    //             answer: 'The overall status of a React application, including all props and components.'
    //         },
    //         {
    //             bullet: 'd',
    //             answer: 'A library for managing global state in React applications.',
    //         }
    //     ],
    //     correctAnswer: {
    //         bullet: 'a',
    //         answer: 'An object in a component that holds values and may cause the component to render on change.'
    //     }
    // },
    // {
    //     id: 'q7',
    //     question: 'How do you typically render list content in React apps?',
    //     options: [
    //         {
    //             bullet: 'a',
    //             answer: 'By using the map() method to iterate over an array of data and returning JSX.'
    //         },
    //         {
    //             bullet: 'b',
    //             answer: 'By using the for() loop to iterate over an array of data and returning JSX.',
    //         },
    //         {
    //             bullet: 'c',
    //             answer: 'By using the forEach() method to iterate over an array of data and returning JSX.',
    //         },
    //         {
    //             bullet: 'd',
    //             answer: 'By using the loop() method to iterate over an array of data and returning JSX.',
    //         },
    //     ],
    //     correctAnswer: {
    //         bullet: 'a',
    //         answer: 'By using the map() method to iterate over an array of data and returning JSX.'
    //     }

    // },
    // {
    //     id: 'q8',
    //     question: 'Which approach can NOT be used to render content conditionally?',
    //     options: [
    //         {
    //             bullet: 'a',
    //             answer: 'Using a the #if template syntax.',
    //         },
    //         {
    //             bullet: 'b',
    //             answer: 'Using a ternary operator.',
    //         },
    //         {
    //             bullet: 'c',
    //             answer: 'Using the && operator.',
    //         },
    //         {
    //             bullet: 'd',
    //             answer: 'Using an if-else statement.',
    //         }
    //     ],
    //     correctAnswer: {
    //         bullet: 'a',
    //         answer: 'Using a the #if template syntax.'
    //     }
    // },
]

export const TIME_OUT = 10*1000// timer data needs to be in milliseconds