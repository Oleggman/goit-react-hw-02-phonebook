import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
      .trim()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Invalid name format.'
        )
      .min(3, 'Too short contact name!')
      .max(50, 'Too long contact name!')
      .required('Required'),
   number: Yup.string()
      .trim()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Invalid phone number format'
      )
     .required('Required'),
 });

export const ContactsForm = ({ onSubmitForm }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={onSubmitForm}
    >
      <Form>
        <label>
          Name
          <Field name="name" autoComplete="off" placeholder="Oleh Kovalets" required />
          <ErrorMessage name="name" />
        </label>
        <label>
          Phone
          <Field type="tel" autoComplete="off" name="number" required />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}
