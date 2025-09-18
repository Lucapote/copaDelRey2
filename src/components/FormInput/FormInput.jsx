import styles from "./FormInput.module.css"

export const FormInput = ({ 
    id, 
    name, 
    type = "text", 
    label, 
    value, 
    onChange, 
    required = false, 
    placeholder = "",
    className = "inputContainer" 
}) => {
    return (
        <div className={styles[className]}>
            <label className={styles.label} htmlFor={id}>{label}:</label>
            <input
                className={styles.input}
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