export const FormInput = ({ 
    id, 
    name, 
    type = "text", 
    label, 
    value, 
    onChange, 
    required = false, 
    placeholder = "",
    className = "" 
}) => {
    return (
        <div className={`form-field ${className}`}>
            <label htmlFor={id}>{label}:</label>
            <input 
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};