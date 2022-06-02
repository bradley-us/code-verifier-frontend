import { AxiosResponse } from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { login } from '../../services/authService'

// Define Schema of validation with Yup
const loginSchema = Yup.object().shape(
  {
    email: Yup.string().email('Invalid Email Format').required('Email is mandatory'),
    password: Yup.string().required('Password is mandatory')
  }
)

const LoginForm = () => {

  const initialCredentials = {
    email: '',
    password: ''
  }

  return (
    <div>
      <h4>Login Form</h4>
      {/* Formik to encapsulate a Form */}
      <Formik
        initialValues={ initialCredentials }
        validationSchema={ loginSchema }
        onSubmit={ async(values) => {
          // await new Promise((response) => setTimeout(response, 1000))
          // alert(JSON.stringify(values, null, 2))
          // console.table(values)

          login(values.email, values.password).then((res: AxiosResponse) => {
            if(res.status === 200){
              alert(JSON.stringify(res.data.token, null, 2))
              console.table(res.data)
              sessionStorage.setItem('sessionToken', res.data.token)
            } else {
              throw new Error ('Invalid Credentials')
            }
          }).catch((error) => console.log(`[LOGIN ERROR]: ${error}`))
        }}
      >
        {
          ({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
            <Form>
              {/* Email FIELD */}
              <label htmlFor='email'>Email</label>
              <Field id='email' type='email' name='email' placeholder='example'></Field>
              {/* Email Errors */}
              {
                errors.email && touched.email && (
                  <ErrorMessage name='email' component='div'></ErrorMessage>
                )
              }

              {/* password FIELD */}
              <label htmlFor='password'>Password</label>
              <Field id='password' type='password' name='password' placeholder='Password'></Field>
              {/* Email Errors */}
              {
                errors.password && touched.password && (
                  <ErrorMessage name='password' component='div'></ErrorMessage>
                )
              }

              {/* SUBMIT FORM */}
              <button type='submit'> Login </button>

              {/*  Message if the form is being submitted */}
              {
                isSubmitting ? (<p>Checking credentials...</p>) : null
              }

            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default LoginForm