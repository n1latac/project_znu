import React from 'react';
import styles from './Field.module.css';
import { Field } from 'formik';

function CustomField(props) {
  return (
    <Field name={props.name}>
             {({
               field, 
               form: { touched, errors }, 
               meta,
             }) => (
               <div>
                 <input autocomplete='off' type={props.type} placeholder={props.placeholder} {...field} style={props.style ? props.style : null}/>
                 {meta.touched && meta.error && (
                   <div className={styles.error}>{meta.error}</div>
                 )}
               </div>
             )}
           </Field>
  )
}
export default CustomField;
