import { useState } from "react";

export const useFormTorneo = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        handicap: "",
        ghni: "",
        edad: "",
        fechaNacimiento: "",
        sexo: "",
        ciudad: "",
        telefono: "",
        correo: "",
        nombrePareja: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const formatPhoneNumber = (phone) => {
        const cleanPhone = phone.replace(/\D/g, '');
        
        if (cleanPhone.startsWith('52')) {
            return `+${cleanPhone}`;
        }
        
        if (cleanPhone.length === 10) {
            return `+52${cleanPhone}`;
        }
        
        if (phone.startsWith('+')) {
            return phone;
        }
        
        return `+52${cleanPhone}`;
    };

    const validateField = (name, value) => {
        // Solo números para handicap, ghni y edad
        if (['handicap', 'ghni', 'edad'].includes(name) && value !== '' && !/^\d+$/.test(value)) {
            return false;
        }
        return true;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        if (!validateField(name, value)) {
            return;
        }
        
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const resetForm = () => {
        setFormData({
            nombre: "",
            handicap: "",
            ghni: "",
            edad: "",
            fechaNacimiento: "",
            sexo: "",
            ciudad: "",
            telefono: "",
            correo: "",
            nombrePareja: ""
        });
        setMessage("");
        setIsSuccess(false);
    };

    const submitForm = async () => {
        setIsLoading(true);
        setMessage("");
        setIsSuccess(false);

        try {
            const formattedPhone = formatPhoneNumber(formData.telefono);

            const response = await fetch('https://api.brevo.com/v3/contacts', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Api-Key': import.meta.env.VITE_BREVO_API
                },
                body: JSON.stringify({
                    email: formData.correo,
                    attributes: {
                        NOMBRE: formData.nombre,
                        HANDICAP: parseInt(formData.handicap) || 0,
                        GHNI: parseInt(formData.ghni) || 0,
                        EDAD: parseInt(formData.edad) || 0,
                        FECHA_NACIMIENTO: formData.fechaNacimiento,
                        SEXO: formData.sexo,
                        CIUDAD: formData.ciudad,
                        SMS: formattedPhone,
                        NOMBRE_PAREJA: formData.nombrePareja
                    },
                    listIds: [2],
                    updateEnabled: true
                })
            });

            if (response.ok) {
                setMessage("¡Registro exitoso! Te has inscrito al torneo correctamente.");
                setIsSuccess(true);
                resetForm();
            } else {
                const errorData = await response.json();
                console.error("Error de Brevo", errorData);
                setMessage("Hubo un error al registrarte. Por favor, intenta nuevamente.");
                setIsSuccess(false);
            }
        } catch (error) {
            console.error("Error de conexión: ", error);
            setMessage("Error de conexión. Verifica tu internet e intenta nuevamente.");
            setIsSuccess(false);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        isLoading,
        message,
        isSuccess,
        handleInputChange,
        submitForm,
        resetForm
    };
};