import React, {useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import { user } from "../user/userApi";
import {clearState,status} from "../user/userSlice"
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';


type Values = {
    login:string,
    password:string
}

export function MyForm (){
    const dispatch = useAppDispatch();
    const history = useHistory();
    const {  isSuccess, isError } = useAppSelector(
        status
      );
      useEffect(() => {
        return () => {
          dispatch(clearState());
        };
      }, [dispatch]);

      useEffect(() => {
        if (isError) {
          toast.error("Please, check your login or password");
          dispatch(clearState());
        }
    
        if (isSuccess) {
          dispatch(clearState());
          history.push('/account');
        }
      });

    const onSubmit = (values:Values) => {dispatch(user())};
      return (
        <Styles>
        <div>
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <Field name="login" component="input" placeholder="login"/>
                </div>       
              <div>
              <Field
                  name="password"
                  placeholder="password" 
                  component="input"
                />
              </div>
               
                <button type="submit">Log in</button>
              </form>
            )}
          />
          </div>
          </Styles>
        )

} 
 
export function Login() {
    return (
        <div>
            <MyForm/>
        </div>
    )
}