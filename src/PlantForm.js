import React, { useState } from "react";
import styled from "styled-components";

const initialFormValues = {
  id: "",
  nickname: "",
  species: "",
  h2ofrequency: "",
};

function PlantForm() {
  const [values, setValues] = useState(initialFormValues);

  const onChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };

  return (
    <form className="form-container">
      <div className="form-group inputs">
        <label>
          Id
          <input type="text" value={values.id} onChange={onChange} name="id" />
        </label>

        <label>
          Nickname
          <input
            type="text"
            value={values.nickname}
            onChange={onChange}
            name="nickname"
            placeholder="type a nickname here"
          />
        </label>

        <label>
          Species
          <input
            type="text"
            value={values.species}
            onChange={onChange}
            name="species"
            placeholder="input species here"
          />
        </label>

        <label>
          H20 Frequency
          <input
            type="text"
            value={values.h2ofrequency}
            onChange={onChange}
            name="h2ofrequency"
            placeholder="input frequency here"
          />
        </label>

        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}

const Container = styled.div``;

const Form = styled.form``;

export default PlantForm;
