import React from 'react';

function TextInput() {
    const inputRef = React.useRef();

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focus the input</button>
        </div>
    );
}

export default TextInput;