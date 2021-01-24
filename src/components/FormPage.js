import React from 'react'
import { Link} from 'react-router-dom'
import { Formik, Form as Formk ,Field, ErrorMessage } from 'formik'
import * as yup from 'yup' 

const initialValues = {
    sex: '',
    weight: ''
}

const validationSchema = yup.object({
    sex: yup.string().required('Required'),
    weight: yup.number('Must be a number').required('Required').positive('Must be a positive value.')
})


function FormPage({isComplete, setComplete, userData, setUserData}) {

    const onSubmit = (values) => {
        console.log('Form Data', values)
        setComplete(true)
        setUserData( {
            sex: values.sex,
            weight: values.weight
        });
        console.log('isComplete', isComplete)
        return (
            <Link to="/dashboard"></Link>
        )
    }

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Formk>
                User Info
                <div className="form-control">
                    <label htmlFor="sex">Sex</label>
                    <Field type="text" as="select" id="sex" name="sex" placeholder="select">
                        <option value="" disabled selected hidden>Please Choose</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Field>
                    <ErrorMessage name="sex"/>
                </div>

                <div className="form-control">
                    <label htmlFor="weight">Weight</label>
                    <Field type="number" id="weight" name="weight"/>
                    <ErrorMessage name="weight"/>
                </div>
                <button className="submit-button" type="submit">Submit</button>
            </Formk>
        </Formik>
    )
}

export default FormPage;