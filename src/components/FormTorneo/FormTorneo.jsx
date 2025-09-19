import { useFormTorneo } from "../../hooks/useFormTorneo";
import { FormInput } from "../FormInput/FormInput";
import { FormSelect } from "../FormSelect/FormSelect";
import styles from "./FormTorneo.module.css"

export const FormTorneo = () => {
    const {
        formData,
        isLoading,
        message,
        isSuccess,
        isRegistered,
        handleInputChange,
        submitForm
    } = useFormTorneo();

    const sexoOptions = [
        { value: "masculino", label: "Masculino" },
        { value: "femenino", label: "Femenino" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm();
    };

    // Determinar el texto del botón
    const getButtonText = () => {
        if (isRegistered) return "✓ Ya estás registrado";
        if (isLoading) return "Registrando...";
        return "Enviar inscripción";
    };

    return (
        <section id="registro" className={styles.formSection}>
            <div className={styles.container}>

                <header className={styles.headerForm}>
                    <h2 className={styles.title}>Registro</h2>
                    <img className={styles.imgHeader} src="/img/LogoVerdeBrillante.png" alt="Logo" />
                </header>

                <form onSubmit={handleSubmit} className={styles.formTorneo}>
                    <div className={styles.formRow}>
                        <FormInput
                            id="nombre"
                            name="nombre"
                            label="Nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            placeholder="Tiger Woods"
                            required
                            disabled={isRegistered}
                        />
                        
                        <FormInput
                            id="handicap"
                            name="handicap"
                            label="Handicap"
                            value={formData.handicap}
                            onChange={handleInputChange}
                            placeholder="Handicap"
                            required
                            disabled={isRegistered}
                        />
                    </div>

                    <div className={styles.formRow}>
                        <FormInput
                            id="ghni"
                            name="ghni"
                            label="GHNI"
                            value={formData.ghni}
                            onChange={handleInputChange}
                            placeholder="GHNI"
                            required
                            disabled={isRegistered}
                        />
                        
                        <FormInput
                            id="edad"
                            name="edad"
                            label="Edad"
                            value={formData.edad}
                            onChange={handleInputChange}
                            placeholder="49"
                            required
                            disabled={isRegistered}
                        />
                    </div>

                    <div className={styles.formRow}>
                        <FormInput
                            id="fechaNacimiento"
                            name="fechaNacimiento"
                            type="date"
                            label="Fecha de Nacimiento"
                            value={formData.fechaNacimiento}
                            onChange={handleInputChange}
                            required
                            disabled={isRegistered}
                        />
                        
                        <FormSelect
                            id="sexo"
                            name="sexo"
                            label="Sexo"
                            value={formData.sexo}
                            onChange={handleInputChange}
                            options={sexoOptions}
                            required
                            disabled={isRegistered}
                        />
                    </div>

                    <div className={styles.formRow}>
                        <FormInput
                            id="ciudad"
                            name="ciudad"
                            label="Ciudad"
                            value={formData.ciudad}
                            onChange={handleInputChange}
                            placeholder="Cypress"
                            required
                            disabled={isRegistered}
                        />
                        
                        <FormInput
                            id="telefono"
                            name="telefono"
                            type="tel"
                            label="Teléfono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            placeholder="9989998888"
                            required
                            disabled={isRegistered}
                        />
                    </div>

                    <div className={styles.formRow}>
                        <FormInput
                            id="correo"
                            name="correo"
                            type="email"
                            label="Email"
                            value={formData.correo}
                            onChange={handleInputChange}
                            placeholder="tiger@woods.com"
                            required
                            disabled={isRegistered}
                        />
                        
                        <FormInput
                            id="nombrePareja"
                            name="nombrePareja"
                            label="Nombre Pareja"
                            value={formData.nombrePareja}
                            onChange={handleInputChange}
                            placeholder="Scottie Scheffler"
                            required
                            disabled={isRegistered}
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={isLoading || isRegistered} 
                        className={`${styles.submitButton} ${isRegistered ? styles.registered : ''}`}
                    >
                        {getButtonText()}
                    </button>

                    {message && (
                        <div className={`${styles.message} ${isSuccess ? styles.success : styles.error}`}>
                            {message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default FormTorneo;