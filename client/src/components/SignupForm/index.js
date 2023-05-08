import React, { useEffect} from 'react';
import {Formik, Form} from 'formik';
import CustomField from '../CustomField';
import { SignupSchema } from '../../validators/validationSchems';
import styles from './Login.module.css';
import Header from '../Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { checkAuth, registerUser } from '../../redux/features/auth/authSlice';
import {toast} from 'react-toastify';
const initialState ={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
}

const Signup = (props) => {
    const isAuth = useSelector(checkAuth)
    const dispatch = useDispatch()
    const {status} = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(()=>{
        if(status){
            toast(status)
        }
        if(isAuth){
            navigate('/')
            //console.log(isAuth)
        }
    },[status, isAuth, navigate])

   
 
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

    const submitHandler = (values,{resetForm}) => {
         try{
             const a = dispatch(registerUser(values));
             console.log(a)
             //resetForm()
         }catch(err){
             console.log(err)
         }
    }

    return (
        <section className={styles.background}>
            <div className={styles['signup-content']}>
            <div className={styles.container}>
            <Formik
            initialValues={initialState}
            onSubmit={submitHandler}
            validationSchema={SignupSchema}
            >
                {formikProps=>{  
                    //console.log(formikProps)
                    return ( 
                    <Form className={styles.form}>
                        <p className={styles.title}>SIGNUP</p>
                        <CustomField type='text' name='firstname' placeholder='Enter your firstname' style={inputStyle}/>
                        <CustomField type='text' name='lastname' placeholder='Enter your lastname' style={inputStyle}/>
                        <CustomField type='text' name='email' placeholder='Enter your email' style={inputStyle}/>
                        <CustomField type='password' name='password' placeholder='Enter your password' style={inputStyle}/>
                        <div className={styles.remind}>
                            <Link to='/Login'>Вже зареєстровані?</Link>
                        </div>
                        <button type='submit' className={styles.loginButton}>LOGIN</button>
                    </Form>
                )}
                }
            </Formik>
            </div>
            </div>
        </section>
    );
}

export default Signup;
