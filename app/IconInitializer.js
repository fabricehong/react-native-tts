import React from 'react';

export default class IconInitializer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
        });
        this.setState({ready:true})
    }

    render() {
        if (!this.state.ready) {
            return null;
        }
        return this.props.children;
    }
}
