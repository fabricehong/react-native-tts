import React from 'react';
import Platform from './Platform';
import { Dimensions } from 'react-native';

const withOrientation = (WrappedComponent) => class WithOrientation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPortrait: Platform.isPortrait(),
            devicetype: Platform.isTablet() ? 'tablet' : 'phone',
        };

        // Event Listener for orientation changes
        Dimensions.addEventListener('change', () => {
            this.setState({
                isPortrait: Platform.isPortrait(),
            });
            console.log('Orientation mode portrait ? ' + this.state.isPortrait);
        });
    }

    render() {
        return <WrappedComponent isPortrait={this.state.isPortrait} {...this.props}/>
    }
}

export default withOrientation;