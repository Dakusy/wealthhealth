import React, { useState } from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Form() {

    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [birth, setBirth] = useState("");
    const [date, setStart] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [code, setCode] = useState("");
    const [departement, setDepartement] = useState("");
    const [state, setState] = useState("");
    const [errors, setError] = useState(false)
    const [dateToday] = useState(new Date().getTime())

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        if(validate() === true){
            event.stopPropagation()
            //add data here to employee table
            setOpenModal(true);
        }else {
            alert("stop")
        }
        console.log("Prénom:", firstName);
        console.log("Nom:", lastName);
        console.log("Code postal:", zipCode);
    };

    const nameValidation = /^[A-Za-zÀ-ÖØ-öø-ÿ- -]{1,}$/;
    const numberValidation = /^[0-9]{6}/;

    const dataEmployee = {
        firstName,
        lastName,
        birth: JSON.stringify(birth),
        date: JSON.stringify(date),
        street,
        city,
        code,
        departement,
        state,
    };

    const validate = () => {
        if (nameValidation.test(firstName.trim()) &&
            nameValidation.test(lastName.trim()) &&
            state !== ""
        ) {
            return true
        }


        else {
            return setError(true)
        }

    }

    return (
        <div>
            <Link to="/Employee">View Current Employees</Link>
            <h2>Formulaire</h2>
            <form onSubmit={handleClick}>
                <div>
                    <label>Prénom:</label>
                    <input type="text" value={firstName} onChange={handleFirstNameChange} />
                    {errors && !nameValidation.test(firstName.trim()) ? (
                        <p className="error_input">Votre prenom doit comporter au minimum 1 caractère</p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label>Nom:</label>
                    <input type="text" value={lastName} onChange={handleLastNameChange} />
                    {errors && !nameValidation.test(lastName.trim()) ? (
                        <p className="error_input">Votre nom doit comporter au minimum 1 caractère</p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label>Code postal:</label>
                    <input type="text" value={zipCode} onChange={handleZipCodeChange} />
                </div>
                <button onClick={handleClick}>Save</button>
                {openModal && <Modal closeModal={setOpenModal} />}
            </form>
        </div>
    );
}

export default Form;
