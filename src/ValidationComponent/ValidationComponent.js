import React from 'react';

const ValidationComponent = (props) => {
    let validationText = null;

    if (props.textLength < 5) {
        validationText = <p>Text too short</p>;
    } else {
        validationText = <p>Text long enough</p>;
    }

    return <div>{validationText}</div>;
};

export default ValidationComponent;
