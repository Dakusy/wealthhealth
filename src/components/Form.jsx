import React, { useState } from "react";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [zipCode, setZipCode] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log("Prénom:", firstName);
        console.log("Nom:", lastName);
        console.log("Code postal:", zipCode);
    };

    return (
        <div>
            <h2>Formulaire</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Prénom:</label>
                    <input type="text" value={firstName} onChange={handleFirstNameChange} />
                </div>
                <div>
                    <label>Nom:</label>
                    <input type="text" value={lastName} onChange={handleLastNameChange} />
                </div>
                <div>
                    <label>Code postal:</label>
                    <input type="text" value={zipCode} onChange={handleZipCodeChange} />
                </div>
                <button type="submit">Soumettre</button>
            </form>
        </div>
    );
}

export default Form;
