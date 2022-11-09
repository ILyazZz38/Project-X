import React, { useState } from 'react'
import axios from 'axios';
import validator from 'validator';

export default function Register () {
    
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
        }
    })
     
    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
     
     
    const submitChackin = event => {
        event.preventDefault();
        if(!validator.isEmail(register.email)) {
            alert("Вы не ввели электронную почту")
        } else if(!validator.isStrongPassword(register.password, {minSymbols: 0})) {
            alert("Пароль должен состоять из одной строчной, прописной буквы и цифры, не менее 6 символов")
        } else {
            axios.post("https://localhost:5001/api/Authenticate/register/", {
                username: register.username,
                email: register.email,
                password: register.password,
            }
            ).catch(() => {
                alert("Произошла ошибка на сервере")
            })
        }
    }
    return (
        <div className="form">
            <h2>Register user:</h2>
            <form onSubmit={submitChackin}>
                <p>Name: 
                    <input 
                        type="username"
                        id="username"
                        name="username"
                        value={register.username}
                        onChange={changeInputRegister}
                    />
                </p>
                <p>Email: 
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={register.email}
                        onChange={changeInputRegister}
                        formnovalidate
                    />
                </p>
                <p>Password:
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={register.password}
                        onChange={changeInputRegister}
                    />
                </p>
                <input type="submit"/>
            </form>
        </div>
    )

}