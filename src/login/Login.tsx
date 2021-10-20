import React, {useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import styles from "./Login.module.css";
import { Form, Field } from 'react-final-form'
import { user } from "../features/user/userApi";

// import {getUser} from "../features/users/usersSlice"

type Values = {
    login:string,
    password:string
}
export function MyForm (){
    const dispatch = useAppDispatch();

    const onSubmit = (values:Values) => {dispatch(user())};
      return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Login</label>
                  <Field name="login" component="input" placeholder="login" />
                </div>       
        
                <Field
                  name="password"
                  placeholder="password" 
                  render={({ input, meta }) => (
                    <div>
                      <label>Password</label>
                      <textarea {...input} />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                />
                <button type="submit">Log in</button>
              </form>
            )}
          />
        )

} 
 
export function Login() {
    return (
        <div>
            <MyForm/>
        </div>
    )
}