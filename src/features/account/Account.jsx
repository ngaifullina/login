import React from "react";
import { useAppSelector } from "../../app/hooks";
import {selectUser} from "../user/userSlice"
import styles from "./Account.module.css";
 
export function Account(){
    let user = useAppSelector(selectUser);
    return (
        <div className={styles.card}>
          <div><img className={styles.card__img} src={user.photo} alt=''/> 
          </div>
          <div>
          <div className={styles.card__name}>First Name: {user.firstName}</div>
        <div className={styles.card__name}>Last Name: {user.lastName}</div>
          </div>
          
        
      </div>
      )
}