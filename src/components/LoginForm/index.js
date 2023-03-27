import React from 'react';
import Header from '../Header/Header';
import styles from './LogInForm.module.css';
import { Formik, Form, Field } from 'formik';
import  {LoginSchema}  from '../../validators/validationSchems';

export default function LogInForm() {

    const clicked = () => {
        console.log('hello')
    }
    
  return (
    <div className={styles['login-body']}>
        <Header style={{padding: '0vh 10vw', margin: '0 auto', background: 'transparent', backdropFilter: 'blur(20px)'}}/>
       <section className={styles['login-content']}>
            <div className={styles[`login-box`]}>
                <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={clicked()}
                validationSchema={LoginSchema}
                >
                    {(formikProps) => {
                        console.log(formikProps)
                        return(  
                     
                   <Form autoComplete='off'>
                        <h2>Login</h2>
                        <div className={styles['login-inputbox']}>
                        <ion-icon name="mail-outline"></ion-icon>
                            <Field className={styles['login-input']} type='text' name='email' required placeholder=' '></Field>
                            <label className={styles['login-label']}>Email</label>
                        </div>
                        <div className={styles['login-inputbox']}>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                            <Field className={styles['login-input']} type='password' name='password' required placeholder=' '></Field>
                            <label>Password</label>
                        </div>
                        <div className={styles.forget}>
                            <label><input type='checkbox'></input>Remember me<a href='#'>Forget Password</a></label>
                        </div>
                        <button className={styles['login-button']} type='submit'>Log in</button>
                        <div className={styles.register}>
                            <p>Don't have an account <a href='#'>Register</a></p>
                        </div>
                    </Form>
                    )}}
                </Formik>
                 <div>
   </div>
            </div>
        </section>
    </div>
  )    
}    
    
    


{/*
<div className={styles['input-body']}>
        <Header style={{padding: '0vh 10vw', margin: '0 auto', background: 'transparent', backdropFilter: 'blur(20px)'}}/>
       <section className={styles['form-content']}>
            <div className={styles[`form-box`]}>
                <div>
                    <form>
                        <h2>Login</h2>
                        <div className={styles.inputbox}>
                        <ion-icon name="mail-outline"></ion-icon>
                            <input classname={styles['login-input']}type='email' required placeholder=' '></input>
                            <label className={styles['login-label']}>Email</label>
                        </div>
                        <div className={styles.inputbox}>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                            <input className={styles['login-input']} type='pass' required placeholder=' '></input>
                            <label>Password</label>
                        </div>
                        <div className={styles.forget}>
                            <label><input type='checkbox'></input>Remember me<a href='#'>Forget Password</a></label>
                        </div>
                        <button>Log in</button>
                        <div className={styles.register}>
                            <p>Don't have an account <a href='#'>Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>*/}