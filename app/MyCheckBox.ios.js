import React from 'react';

import { Switch } from 'react-native';

const MyCheckBox = (props) => {
    return (<Switch
        
        style={{
            marginRight: 15, height: 20, transform: [{ scaleX: .6 }, { scaleY: .6 }]
        }}
        {...props}/>)
}

export default MyCheckBox;