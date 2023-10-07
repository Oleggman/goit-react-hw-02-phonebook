 import { Formik, Field, Form } from 'formik';

export const ContactsForm = ({ onSubmitForm }) => {
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={onSubmitForm}
    >
      <Form>
        <label>
          Name
          <Field name="name" autoComplete="off" placeholder="Oleh Kovalets" required />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}
