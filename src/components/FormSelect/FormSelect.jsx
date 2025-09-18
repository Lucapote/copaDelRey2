import styles from "./FormSelect.module.css"

export const FormSelect = ({ 
    id, 
    name, 
    label, 
    value, 
    onChange, 
    options, 
    required = false, 
    placeholder = "Selecciona una opción",
    className = "" 
}) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={id}>{label}:</label>
            <select
                className={styles.input}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};