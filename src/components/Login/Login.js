import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import checkToken from '../../services/checkToken';
import getToken from '../../services/getToken';
import { useHistory } from 'react-router';

function Login() {

    return (
        <div>
        <h1>Login</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(getToken(values))
                    setTimeout(() => {
                    setSubmitting(false);
                    }, 500);
                }}
                >
                {({ isSubmitting }) => (
                    <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login
