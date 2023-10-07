 import { Formik, Field, Form } from 'formik';

export const ContactsForm = ({ onSubmitForm }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={onSubmitForm}
    >
      <Form>
        <label>
          Name
          <Field name="name" autoComplete="off" placeholder="Oleh Kovalets" required />
        </label>
        <label>
          Phone
          <Field type="tel" autoComplete="off" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}
