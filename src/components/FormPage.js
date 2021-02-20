import React from 'react'
import { Formik, Form as Formk ,Field, ErrorMessage } from 'formik'
import * as yup from 'yup' 
import '../App.css';



const initialValues = {
    sex: '',
    weight: ''
}

const validationSchema = yup.object({
    sex: yup.string().required('Required'),
    weight: yup.number('Must be a number').required('Required').positive('Must be a positive value.')
})


function FormPage({complete, setComplete, HandleCompleteClick, setUserData}) {


    const onSubmit = (values) => {
        console.log('Form Data', values)
        setComplete(true)
        setUserData( {
            sex: values.sex,
            weight: values.weight
        });
        HandleCompleteClick();
    }

    return (
        <div className="form-page comp" id="form">
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Formk className="form-fields">
                <h1 className="form-title"> Let's get to know you </h1>
                <div className="form-control">
                    <label className="form-label" htmlFor="sex">Sex</label><br/>
                    <Field type="text" as="select" id="sex" name="sex" placeholder="select">
                        <option value="" disabled selected hidden>Please Choose</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Field>
                    <br/>
                    <ErrorMessage name="sex" render={msg => <div className="error-msg">{msg}</div>} />
                    <div className="spacer"/>
                </div>
                <div className="form-control">
                        <label  className="form-label" htmlFor="weight">Weight</label><br/>
                        <Field type="number" id="weight" name="weight"/>
                        <br/>
                        <ErrorMessage render={msg => <div className="error-msg">{msg}</div>}  name="weight"/>
                </div>
                <div className="spacer" style={{height: `3.5rem`}}/>
                <button className="btn form-btn" type="submit">Continue</button>
            </Formk>
        </Formik>
        </div>
    )
}

export default FormPage;