// pages/register.js
"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '@material-tailwind/react';
import { errorNotify, successNotify } from '@/components/toast';
import { ToastContainer } from 'react-toastify';
const RegisterForm = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      username: '',
      phoneNo: '',
      email: '',
      dailyExercise: '',
      dailyDiet: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      phoneNo: Yup.string().required('Phone number is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      dailyExercise: Yup.string().required('Daily exercise is required'),
      dailyDiet: Yup.string().required('Daily diet is required'),
    }),
    onSubmit: async (values,{resetForm}) => {
        try {
            const URL = "https://gym-backend-mocha.vercel.app"
          const response = await fetch(`${URL}/api/members`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values), 
            withCredentials: true 
          });
          console.log(response)
          const data = await response.json();
          console.log(data)
          if (response.ok) {
            successNotify(data.message || 'Member registered successfully');
            resetForm();
          } else {
            
            errorNotify(data.message || 'Registration failed');
          }
        } catch (error) {
          console.error('Error submitting the form:', error);
          errorNotify('An error occurred while submitting the form');
        }
      },
  });

  return (
    <div className="w-full max-w-1/2 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Username */}
        <div className="mb-4">
          <Input
            
            label="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </div>

        {/* Contact */}
        {/* <div className="mb-4">
          <Input
            
            label="Contact"
            name="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.contact && Boolean(formik.errors.contact)}
            helperText={formik.touched.contact && formik.errors.contact}
          />
        </div> */}

        {/* Phone Number */}
        <div className="mb-4">
          <Input
            
            label="Phone Number"
            name="phoneNo"
            value={formik.values.phoneNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
            helperText={formik.touched.phoneNo && formik.errors.phoneNo}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <Input
            
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>

        {/* Daily Exercise */}
        <div className="mb-4">
          <Input
            
            label="Daily Exercise"
            name="dailyExercise"
            value={formik.values.dailyExercise}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.dailyExercise && Boolean(formik.errors.dailyExercise)}
            helperText={formik.touched.dailyExercise && formik.errors.dailyExercise}
          />
        </div>

        {/* Daily Diet */}
        <div className="mb-6">
          <Input
            
            label="Daily Diet"
            name="dailyDiet"
            value={formik.values.dailyDiet}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.dailyDiet && Boolean(formik.errors.dailyDiet)}
            helperText={formik.touched.dailyDiet && formik.errors.dailyDiet}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Register
          </Button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default RegisterForm;
