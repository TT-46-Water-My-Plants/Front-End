import React from 'react';
import styled from 'styled-components';

export default function PlantForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Id
                        <input
                        type="int"
                        value={values.id}
                        onChange={onChange}
                        name=""
                        />
                </label>

                <label>Nickname
                    <input
                    type="text"
                    value={values.nickname}
                    onChange={onchange}
                    name="nickname"
                    placeholder="type a nickname here"
                    />
                    </label>

                    <label>Species
                        <input
                        type="text"
                        value={values.species}
                        onChange={onChange}
                       name="species"
                       placeholder="input species here"
                       />
                    </label>

                       <label>H20 Frequency
                       <input
                       type="text"
                       value={values.h2ofrequency}
                       onChange={onChange}
                       name="h2ofrequency"
                       placeholder="input frequency here"
                       />
                       </label>

                       <div className='submit'>
                           <button >Submit</button>
                       </div>

                    
            </div>
        </form>
    )
}

const Container = styled.div`

`

const Form = styled.form`

`

