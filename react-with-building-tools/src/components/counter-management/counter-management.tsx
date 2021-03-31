import React from "react";

interface CounterManagementProps {
    ownerName: string;
}

interface CounterManagementState {
    counter: number;
    counterRandom: number;
    counterRandomTwo: number;
}

// Class component "React.Component" needed, because we want to alter the state
// Functional component "React.FC" would not be sufficient
export class CounterManagement extends React.Component<CounterManagementProps, CounterManagementState> {

    // INITIALIZE STATE USING 2 WAYS
    // 1) Good way via constructor
    constructor(props: CounterManagementProps) {
        super(props); // enables to pass the value to the component

        // Initialize the state
        // Is directly connected to the interface, which is why it is better
        this.state = {
            counter: 0
        }
    }

    /* 1) Bad way by directly altering the state
    state = {
        counter: 0
    } */

    // SET STATE VIA OBJECT OR FUNCTION

    // 1) OBJECT

    // ONLY the last this.set.counter is considered!!!
    // Further, the render function is only called once due to the merge of "setState()" for performance reasons
    // Therefore, handleDecreaseClick calls render() function via "this.state.counter" only once
    handleDecreaseClick = () => {
        this.setState({counter: this.state.counter - 4289}) // does not matter
        this.setState({counter: this.state.counter + 121}) // does not matter
        this.setState({counter: this.state.counter - 1}) // MATTERS!!!!
    }

    // 2) FUNCTION

    // Arrow function enables that this will reference globally
    // and not the local scope of the button HTML element
    // Reason: button has no setState() function, but this component has the functions
    handleAddClick = () => {
        // calling the function with "prevState" enable to call functions multiple times
        // HOWEVER the render function is only triggered once again
        this.setState(function(prevState){
            return {
                counter: prevState.counter + 1
            }
        });
        this.setState(function(prevState: { counter: number; }){
            return {
                counter: prevState.counter + 1
            }
        });
        this.setState(function(prevState: { counter: number; }){
            return {
                counter: prevState.counter + 1
            }
        }, function(){
            console.log("Callback function");
        });
    }

    render() {
        console.log("render")
        const {ownerName} = this.props;
        const {counter} = this.state;
        return (
            <>
                <h3>Counter Management</h3>
                <p>Owner Name: {ownerName}</p>
                <p>Counter: {counter}</p>
                <button onClick={this.handleAddClick}>Add</button>
                <button onClick={this.handleDecreaseClick}>Decrease</button>
            </>
        );
    }
}
