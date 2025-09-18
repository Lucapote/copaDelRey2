import { useFormTorneo } from "../../hooks/useFormTorneo";
import { FormInput } from "../FormInput/FormInput";
import { FormSelect } from "../FormSelect/FormSelect";

export const FormTorneo = () => {
    const {
        formData,
        isLoading,
        message,
        isSuccess,
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

    return (
        <div className="form-container">

            <div>
            <h2>Registro</h2>
            <img src="/img/LogoVerdeBrillante.png" alt="Logo" />
            </div>

            <form onSubmit={handleSubmit} className="form-torneo">
                <div className="form-row">
                    <FormInput
                        id="nombre"
                        name="nombre"
                        label="Nombre Completo"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Tiger Woods"
                        required
                    />
                    
                    <FormInput
                        id="handicap"
                        name="handicap"
                        label="Handicap"
                        value={formData.handicap}
                        onChange={handleInputChange}
                        placeholder="Handicap"
                        required
                    />
                </div>

                <div className="form-row">
                    <FormInput
                        id="ghni"
                        name="ghni"
                        label="GHNI"
                        value={formData.ghni}
                        onChange={handleInputChange}
                        placeholder="GHNI"
                        required
                    />
                    
                    <FormInput
                        id="edad"
                        name="edad"
                        label="Edad"
                        value={formData.edad}
                        onChange={handleInputChange}
                        placeholder="49"
                        required
                    />
                </div>

                <div className="form-row">
                    <FormInput
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        type="date"
                        label="Fecha de Nacimiento"
                        value={formData.fechaNacimiento}
                        onChange={handleInputChange}
                        required
                    />
                    
                    <FormSelect
                        id="sexo"
                        name="sexo"
                        label="Sexo"
                        value={formData.sexo}
                        onChange={handleInputChange}
                        options={sexoOptions}
                        required
                    />
                </div>

                <div className="form-row">
                    <FormInput
                        id="ciudad"
                        name="ciudad"
                        label="Ciudad"
                        value={formData.ciudad}
                        onChange={handleInputChange}
                        placeholder="Cypress"
                        required
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
                    />
                </div>

                <div className="form-row">
                    <FormInput
                        id="correo"
                        name="correo"
                        type="email"
                        label="Correo Electrónico"
                        value={formData.correo}
                        onChange={handleInputChange}
                        placeholder="tiger@woods.com"
                        required
                    />
                    
                    <FormInput
                        id="nombrePareja"
                        name="nombrePareja"
                        label="Nombre de la Pareja"
                        value={formData.nombrePareja}
                        onChange={handleInputChange}
                        placeholder="Scottie Scheffler"
                        required
                    />
                </div>

                <button type="submit" disabled={isLoading} className="submit-button">
                    {isLoading ? "Registrando..." : "Inscribirse al Torneo"}
                </button>

                {message && (
                    <div className={`message ${isSuccess ? 'success' : 'error'}`}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default FormTorneo;