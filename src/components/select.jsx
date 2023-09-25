import React from "react";

const Select = ({data, Value}) => { 
    return(
        <select className="input_employee" onChange={Value}>
            {data.map((dataMapped, index) => {
                return(
                    <option value={dataMapped.name} key={index}>{dataMapped.name}</option>
                )
            })}
            
        </select>
    )
}

export default Select