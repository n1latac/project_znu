import React, { useEffect } from 'react';
import {Formik, Form, Field} from 'formik';
import CustomField from '../CustomField';
import { LoginSchema } from '../../validators/validationSchems';
import styles from './LogInForm.module.css';
import Header from '../Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, loginUser } from '../../redux/features/auth/authSlice';
import {toast} from 'react-toastify'

const initialState ={
    email: '',
    password: '',
}
const Login = (props) => {
    const isAuth = useSelector(checkAuth);
    const dispatch = useDispatch()
    const {status} = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(()=>{
        if(status){
            toast(status)
        }
        if(isAuth){
            navigate('/')
        }
    },[status, isAuth, navigate])

    const submitHandler = (values,{resetForm}) => {
        console.log(values);
         try{
             dispatch(loginUser(values));
             resetForm()
         }catch(err){
             console.log(err)
         }
    }


    const inputStyle = {
        width: '100%',
        padding: '0px 15px',
        margin: '0px 0px 20px 0px',
        fontSize: '16px',
        color: 'black',
        lineHeight: '3em',
        borderRadius: '5px',
        border: '1px solid white',
        boxSizing: 'border-box',
    }


    return (
        <section className={styles.background}>
            <Header style={{padding: '0vh 10vw', margin: '0 auto', background: 'rgb(0,0,0,0.3)', backdropFilter: 'blur(20px)'}}/>
            <div className={styles['signup-content']}>
            <div className={styles.container}>
            <Formik
            initialValues={initialState}
            onSubmit={submitHandler}
            validationSchema={LoginSchema}
            >
                {(formikProps)=>{
                    //console.log(formikProps)
                    return( 
                    <Form className={styles.form} >
                        <p className={styles.title}>LOGIN TO YOUR ACCOUNT</p>
                        <CustomField type='text' name='email' placeholder='Enter your email' style={inputStyle}/>
                        <CustomField type='password' name='password' placeholder='Enter your password' style={inputStyle}/>
                        <div className={styles.remind}>
                            <Link to='/Signup'>Нет аккаунта?</Link>
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
