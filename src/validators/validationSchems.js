import * as yup from 'yup';

export const LoginSchema = yup.object({
    email: yup.string().required('Email is required').min(1).max(60).email(),
    password: yup.string().required('Password is required').min(5).max(60)
})
export const SignupSchema = yup.object({
    firstName: yup.string().required('First name is required').min(1).max(30),
    lastName: yup.string().required('Last name is required').min(1).max(30),
    email: yup.string().required('Email is required').min(1).max(60).email(),
    password: yup.string().required('Password is required').min(5).max(60)
})