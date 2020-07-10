import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useForm } from "react-hook-form";

export const Contact = () => {
  const { handleSubmit, register, errors, formState, triggerValidation } = useForm();
  const { touched } = formState;
  const submit = async (data) => {
    const url = 'https://mailthis.to/franklinbravo';
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      //window.location.href = 'https://mailthis.to/confirm'
      const result = await res.json()
      console.log(result);
    } catch (err) {
      console.log(err);
    }

  }
  return (
    <Card body className="px-4" >
      <h3 className="text-center my-3">Contact Me!</h3>
      <Form className="form" autoComplete="off" onSubmit={handleSubmit(submit)}>
        <Form.Group>
          <Form.Control type="text" name="name" placeholder="Name*" ref={register({
            required: "Required",
            minLength: {
              value: 3,
              message: "Min 3"
            }
          })}
            isInvalid={touched.name && !!errors.name}
            isValid={touched.name && !errors.name}
            onBlur={() => { triggerValidation("name") }}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.name && errors.name.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group >
        </Form.Group>
        <Form.Group>
          <Form.Control type="email" name="_replyto" ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
            placeholder="Email*"
            isInvalid={touched._replyto && !!errors._replyto}
            isValid={touched._replyto && !errors._replyto}
            onBlur={() => { triggerValidation("_replyto") }}
          />
          <Form.Control.Feedback type="invalid">
            {errors._replyto && errors._replyto.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="_subject" placeholder="Subject" ref={register({ required: "Required" })}
            isInvalid={touched._subject && !!errors._subject}
            isValid={touched._subject && !errors._subject}
            onBlur={() => { triggerValidation("_subject") }}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors._subject && errors._subject.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group >
          <Form.Control as="textarea" name="message" placeholder="Message" ref={register({ required: "Required" })} rows="4" style={{ maxHeight: 400, minHeight: 100 }}
            isInvalid={touched.message && !!errors.message}
            isValid={touched.message && !errors.message}
            onBlur={() => { triggerValidation("message") }}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message && errors.message.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="success" className="" type="submit">
          Submit
        </Button>
      </Form>
    </Card>

  )
}
