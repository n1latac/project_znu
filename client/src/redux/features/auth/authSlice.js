import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null
}

//ф-ции которые отвечают за регистрацию
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({email, password}) => {
        try{
            const {data} = await axios.post('/login', {  //res.data
                email,
                password
            })
            if(data.token){
                window.localStorage.setItem('token', data.token)
            }

            return data
        }catch(err){
            console.log(err)
        }
    }
    ) // 1аргумент(название слайса, название ф-ции)

    export const registerUser = createAsyncThunk(
        'auth/registerUser',
        async ({firstname, lastname, email, password}) => {
            try{
                const {data} = await axios.post('/signup', {  //res.data
                    firstname,
                    lastname,
                    email,
                    password
                })
                if(data.token){
                    window.localStorage.setItem('token', data.token)
                }
    
                return data
            }catch(err){
                console.log(err)
            }
        }
        ) // 1аргумент(название слайса, название ф-ции)
    
        export const getMe = createAsyncThunk(
            'auth/registerUser',
            async () => {
                try{
                    const {data} = await axios.get('/getMe')
        
                    return data
                }catch(err){
                    console.log(err)
                }
            }
            ) // 1аргумент(название слайса, название ф-ции)
        
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout:(state)=>{
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
        }
    },
    extraReducers:{ //чтобы управлять нашим state
        [registerUser.pending] : (state)=>{
            state.isLoading = true
            state.status = null
        },
        [registerUser.fulfilled] : (state, action)=>{  //action-ответ с бэка
            state.isLoading = false
            state.status = action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [registerUser.rejected] : (state, action)=>{
            state.status = action.payload.message
            state.isLoading = false
        },
        [loginUser.pending] : (state)=>{
            state.isLoading = true
            state.status = null
        },
        [loginUser.fulfilled] : (state, action)=>{  //action-ответ с бэка
            state.isLoading = false
            state.status = action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [loginUser.rejected] : (state, action)=>{
            state.status = action.payload.message
            state.isLoading = false
        },
        [getMe.pending] : (state)=>{
            state.isLoading = true
            state.status = null
        },
        [getMe.fulfilled] : (state, action)=>{  //action-ответ с бэка
            state.isLoading = false
            state.status = null
            state.user = action.payload?.user
            state.token = action.payload?.token
        },
        [getMe.rejected] : (state, action)=>{
            state.status = action.payload.message
            state.isLoading = false
        },
    }
})

export const checkAuth = state => Boolean(state.auth.token)

export const {logout} = authSlice.actions

export default authSlice.reducer