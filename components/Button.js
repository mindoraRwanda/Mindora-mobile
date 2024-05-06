import React from 'react';

function Button(props) {
    return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
        <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
    );
}

export default Button;
