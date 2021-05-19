class LikeButton extends React.Component {

    // Constructor which contains the state
    constructor(props) {
        super(props);
        this.state = {liked: false}; // state liked standard value is false
    }

    // Contains the UI
    render() {

        // Logic for changing the state
        if (this.state.liked) {
            return 'You liked this.';
        }

        // Creates the button element
        // DOES NOT USE JSX! THEREFORE NOT SO NICE TO READ
        return React.createElement('div', {}, React.createElement(
            'button', // HTML element
            {onClick: () => this.setState({liked: true})}, // Properties of the element
            'Like' // Text of the element
        ));
    }
}
