import React, {useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {selectUser} from "../../features/user/userSlice"
import styles from "./Account.module.css";
 
export function Account(){
    let user = useAppSelector(selectUser);
    return (
        <div className={styles.card}>
        <div className={styles.card__name}>{user.firstName}</div>
        <div className={styles.card__name}>{user.lastName}</div>
        <img className={styles.card__img} src={user.photo} alt=''/> 
      </div>
      )
}