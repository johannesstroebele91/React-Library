import React from "react";
import {ButtonProps} from "../../interfaces";
import './button.css'

// "React.FC" is needed if a functional component is needed for the interface
// Props can be replaced by "({type='default'})" and used later as "type"
// Children can be used to access the content of the HTML element <p>"content"</p>
export const Button: React.FC<ButtonProps> = ({type='default', children}) => {

    // Logic for button
    // 'primary' references the css class primary in the button.css
    const classButton = type === 'primary' ? 'primary' : '';

    return (
        <button className={classButton}>{children}</button>
    )
}

export const ButtonSimple: React.FC<ButtonProps> = props => {

    // Logic for button
    // 'primary' references the css class primary in the button.css
    const classButton = props.type === 'primary' ? 'primary' : '';

    return (
        <button className={classButton}>Test</button>
    )
}
