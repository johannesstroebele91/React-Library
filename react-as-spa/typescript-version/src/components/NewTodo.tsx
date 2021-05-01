import {useRef} from 'react';
import classes from './NewTodo.module.css';

/* A function call needs to be passed back to the App.tsx file
 * by given this component a onAddTodo prop
* of a function type by defining the structure of a function
* with the following syntax in TypeScript ": () => " 
    * "()" specifies the parameters (e.g. name: string)
    * to the left of the "=>" is stated the expected return type (e.g. void) */
const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {

    // Ref needs to explicitly stated, because several type of ref exist
    // e.g. <input/> it is HTMLInputElement
    // e.g. <button/> it is HTMLButtonElement
    // AND needs to be initialized with null
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    // On click listener: React.MouseEvent
    // On form submission listener: React.FormEvent
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // "!" could be also "?", because the text does not need to be set generally
        // React would store null in case the variable is not set
        // BUT in this case WE KNOW for 100% that the variable will be a string
        const enteredText = todoTextInputRef.current!.value;

        // Validate the text entered by the user
        if (enteredText?.trim().length === 0) {
            // Error should be thrown here, but easy way here is to:
            return;
        }

        /*  Add text to list of todos
         * Therefore data needs to be passed back to the App.tsx
         * Where the todos data should be centrally managed
         * This can be done by calling a function in App.tsx
         * from the current component and passing the enteredText value */
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            {/* ↑↑↑ Pass the submit handler to onSubmit */}
            <label>Todo text</label>
            <input type="text" id='text' ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;