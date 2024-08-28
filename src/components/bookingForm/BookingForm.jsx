// src/components/bookingForm/BookingForm.jsx

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './BookingForm.module.scss';

const BookingForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name is too short!')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    bookingDate: Yup.date()
      .required('Booking date is required')
      .nullable(),
    comment: Yup.string()
      .min(5, 'Comment is too short!')
      .required('Comment is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    toast.success('Booking successful!');
    resetForm();
  };

  return (
    <div className={css['booking-form-container']}>
      <p className={css['booking-header']}>Book your campervan now</p>
      <p>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={css['booking-form']}>
            <div className={css['form-group']}>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage name="name" component="div" className={css['error']} />
            </div>

            <div className={css['form-group']}>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" className={css['error']} />
            </div>

            <div className={css['form-group']}>
              <div className={css['date-picker-wrapper']}>
                <DatePicker
                  id="bookingDate"
                  selected={values.bookingDate}
                  onChange={(date) => setFieldValue('bookingDate', date)}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="Booking date"
                  className={css['date-picker']}
                />
                <svg className={css["my-icon"]} width="24" height="24">
                  <use href="/public/icons.svg#icon-calendar"></use>
                </svg>
              </div>
              <ErrorMessage name="bookingDate" component="div" className={css['error']} />
            </div>

            <div className={css['form-group']}>
              <Field
                as="textarea"
                id="comment"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage name="comment" component="div" className={css['error']} />
            </div>

            <button type="submit" className={css['submit-button']}>Send</button>
          </Form>
        )}
      </Formik>

      <ToastContainer />
    </div>
  );
};

export default BookingForm;
