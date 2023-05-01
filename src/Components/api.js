export const questions =[
    {
        id:1,
        question:"Why can’t browsers read JSX?",
        answer: "Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser."
    },
    {
        id:2,
        question:"What is the purpose of render() in React.",
        answer: "Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. "
    },
    {
        id:3,
        question:"What is a state in React and how is it used?",
        answer: "States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state()."
    },
    {
        id:4,
        question:"What are Higher Order Components(HOC)?",
        answer: "Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components."
    }
   
]