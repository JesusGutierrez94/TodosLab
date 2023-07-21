import { useState } from "react";

export const CustomInput = ({ onSubmit }) => {
    const [value, setValue] = useState("");

    const handleSubmit = () => {
        if(!value) return;

        onSubmit(value);
        setValue("");
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
           handleSubmit();
        }
    };

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };

    return (
    <div style={{ padding: "16px 0 16px 0" }}>
        <input 
            type="text" 
            onChange={handleOnChange} 
            onKeyDown={handleKeyDown} 
            value={value}
        />
        <button onClick={handleSubmit}>{">"}</button>
    </div>
    );
};