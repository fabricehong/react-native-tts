import React from 'react';

import { CheckBox } from 'react-native';

const MyCheckBox = (props) => {
    return (<CheckBox
        style={{marginRight: 7}} 
        {...props}
        />)
}

export default MyCheckBox;