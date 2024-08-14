import { forwardRef } from "react";

const Input = forwardRef(({ name, textarea, type = "text", ...props }, ref) => {
    return (
        <div className="input-container">
            <label>{name}</label>
            {textarea ? (
                <textarea className="input-textarea" {...props} ref={ref}></textarea>
            ) : (
                <input className="input-field" type={type} {...props} ref={ref}/>
            )}
        </div>
    );
});

export default Input;
