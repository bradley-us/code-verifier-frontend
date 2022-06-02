import { AxiosResponse } from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { register } from '../../services/authService'

const registerSchema = Yup.object().shape(
  {
    name: Yup.string()
      .min(6, 'Username must have 6 letters minimun')
      .max(12, 'Username must have maximum 12 letters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password too short')
      .required('Password is required'),
    confirm: Yup.string()
      .when('password', {
        is: (value: string) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')], 'Passwords must match'
        )
      })
      .required('You must confirm password'),
      age: Yup.number()
        .min(10, 'You must be over 10')
        .required('Age is required')
  }
)

const RegisterForm = () => {

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    age: Number('')
  }

  return (
    <div>
      <h4>Register a new user</h4>
      {/* Formik Wrapper */}
      <Formik
        initialValues={ initialValues }
        validationSchema={ registerSchema }
        onSubmit={ async (values) => {
          register(values.name, values.email, values.password, values.age).then((response: AxiosResponse) => {
              if(response.status === 200){
                  console.log('User registered correctly')
                  console.log(response.data);
                  alert('User registered correctly');
              }else{
                  throw new Error('Error in registry')
              }
          }).catch((error) => console.error(`[Register ERROR]: Something went wrong: ${error}`))
      }}

      >
        {
          ({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
              <Form>
                {/* Name Field */}
                <label htmlFor='name' >Name</label>
                <Field id='name' type='text' name='name' placeholder='Your Name' />

                {/* Name Errors */}
                {
                    errors.name && touched.name && (
                        <ErrorMessage name='name' component='div'></ErrorMessage>
                    )
                }


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

                {/* password CONFIRMATION FIELD */}
                <label htmlFor='confirm'>Password</label>
                <Field id='confirm' type='password' name='confirm' placeholder='Confirm Password'></Field>
                {/* Email Errors */}
                {
                  errors.confirm && touched.confirm && (
                    <ErrorMessage name='confirm' component='div'></ErrorMessage>
                  )
                }

                {/* age FIELD */}
                <label htmlFor='age'>Age</label>
                <Field id='age' type='number' name='age' placeholder='Age'></Field>
                {/* Email Errors */}
                {
                  errors.age && touched.age && (
                    <ErrorMessage name='age' component='div'></ErrorMessage>
                  )
                }
  
                {/* SUBMIT FORM */}
                <button type='submit'> Register </button>
  
                {/*  Message if the form is being submitted */}
                {
                  isSubmitting ? (<p>Sending data...</p>) : null
                }
  
              </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default RegisterForm