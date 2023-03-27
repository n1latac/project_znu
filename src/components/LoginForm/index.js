import React from 'react';
import {Formik, Form, Field} from 'formik';
import CustomField from '../CustomField';
import { LoginSchema } from '../../validators/validationSchems';
import styles from './LogInForm.module.css';
import Header from '../Header/Header';

const Login = (props) => {
    const initialState ={
        email: '',
        password: '',
        rememberUser: false,
    }

    const inputStyle = {
        width: '100%',
        padding: '0px 15px',
        margin: '0px 0px 20px 0px',
        fontSize: '16px',
        color: 'white',
        lineHeight: '3em',
        borderRadius: '5px',
        border: '1px solid white',
        boxSizing: 'border-box',
    }

    const submitHandler = (values, actions) => {

    }

    return (
        <section className={styles.background}>
            <Header style={{padding: '0vh 10vw', margin: '0 auto', background: 'transparent', backdropFilter: 'blur(20px)'}}/>
            <div className={styles['signup-content']}>
            <div className={styles.container}>
            <Formik
            initialValues={initialState}
            onSubmit={submitHandler}
            validationSchema={LoginSchema}
            >
                {(formikProps)=>{
                    console.log(formikProps)
                    return( 
                    <Form className={styles.form}>
                        <p className={styles.title}>LOGIN TO YOUR ACCOUNT</p>
                        <CustomField name='email' placeholder='Enter your email' style={inputStyle}/>
                        <CustomField name='password' placeholder='Enter your password' style={inputStyle}/>
                        <div className={styles.remind}>
                            <label>
                                <input type='checkbox'/>
                                Remember Me
                            </label>
                            <a href='#'>Forgot Password</a>
                        </div>
                        <button type='submit' className={styles.loginButton}>LOGIN</button>
                    </Form>
                    )
                }}
            </Formik>
            </div>
            </div>
        </section>
    );
}

export default Login;
