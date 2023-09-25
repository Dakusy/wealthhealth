import React, { useState } from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";

import { states } from "../data/states";
import  { departements } from "../data/departements";

import Select from "./select";


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

    const handlestateChange = (event) => {
        setState(event.target.value);
    };

    const handledepartChange = (event) => {
        setDepartement(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        if (validate() === true) {
            event.stopPropagation()
            //add data here to employee table
            setOpenModal(true);
        } else {
            alert("stop")
        }
        console.log("Prénom:", firstName);
        console.log("Nom:", lastName);
        console.log("Code postal:", zipCode);
    };

    const nameValidation = /^[A-Za-zÀ-ÖØ-öø-ÿ- -]{1,}$/;
    const zipCodeValidation = /^[0-9]{2}/;

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
            zipCode !== "" &&
            dateToday > new Date(birth).getTime() &&
            street !== "" &&
            city !== "" &&
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
            <Link to="/Employees">View Current Employees</Link>
            <h2>Formulaire</h2>
            <form onSubmit={handleClick}>
                <div>
                    <label>First Name : </label>
                    <input type="text" value={firstName} onChange={handleFirstNameChange} />
                    {errors && !nameValidation.test(firstName.trim()) ? (
                        <p className="error_input">Votre prenom doit comporter au minimum 1 caractère</p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type="text" value={lastName} onChange={handleLastNameChange} />
                    {errors && !nameValidation.test(lastName.trim()) ? (
                        <p className="error_input">Votre nom doit comporter au minimum 1 caractère</p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label>Birth Date : </label>
                    <DatePicker className="input_employee" placeholderText="Date of birth" selected={birth} onChange={(date) => { setBirth(date); }} />
                    {errors && birth === "" || dateToday < new Date(birth).getTime() ? (
                        <p className="error_input">Votre date de naissance n'est pas conforme</p>
                    ) : ""}
                </div>

                <div>
                    <label>Start Date : </label>
                    <DatePicker className="input_employee" placeholderText="Start date" selected={date} onChange={(date) => setStart(date)}
                    />
                    {errors && date === "" ? (
                        <p className="error_input">Veuillez renseigner la date de début de contrat correctement</p>
                    ) : ""}
                </div>

                <div>
                    <label>Street : </label>
                    <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
                    {errors && street === "" ? (
                        <p className="error_input">Veuillez renseigner votre adresse correctement</p>
                    ) : ""}
                </div>

                <div>
                    <label>City : </label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                    {errors && city === "" ? (
                        <p className="error_input">Veuillez renseigner ville correctement</p>
                    ) : ""}
                </div>

                <div>
                <label>State : </label>
                    <Select name="state" id="state" data={states} Value={handlestateChange}
                    />
                    {errors && state === "" ? (
                        <p className="error_input">Veuillez faire un choix parmis la selection</p>
                    ) : ""}
                </div>

                <div>
                    <label>Postal Code : </label>
                    <input type="number" value={zipCode} onChange={handleZipCodeChange} />
                    {errors && !zipCodeValidation.test(zipCode.trim()) ? (
                        <p className="error_input">Votre code postal doit contenir doit comporter au minimum 2 chiffres</p>
                    ) : (
                        ""
                    )}
                </div>

                <div>
                <label>Departement : </label>
                    <Select name="departement" id="departement" data={departements} Value={handledepartChange}
                    />
                    {errors && state === "" ? (
                        <p className="error_input">Veuillez faire un choix parmis la selection</p>
                    ) : ""}
                </div>

                <button onClick={handleClick}>Save</button>
                {openModal && <Modal closeModal={setOpenModal} />}
            </form>
        </div>
    );
}

export default Form;
