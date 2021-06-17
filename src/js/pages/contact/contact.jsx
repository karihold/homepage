import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/input/input";
import GreenPageDecoration from "components/green-page-decoration/green-page-decoration";
import * as yup from "yup";
import "./contact.scss";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-z-\s]/g, "Please enter a valid name")
    .required("First Name is required"),
  phone: yup
    .string()
    .matches(/^\+?\d{8,10}$/g, "Please enter a valid phone number")
    .required("Phone number is required"),
  email: yup
    .string()
    .email("Email is not valid", { regex: /^[\d-_.a-zA-z]+@[\d-_.a-zA-z]+\.[a-zA-z]+$/g })
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const getValidationMessage = (inputName) => (inputName in errors ? errors[inputName].message : "");

  const onSubmit = (data, event) => {
    const form = event.target;

    form.submit();
    reset();
  };

  return (
    <>
      <GreenPageDecoration />
      <form
        className="contact-form"
        action="mailto:holdcroftkari@gmail.com?subject=Let's talk"
        encType="text/plain"
        method="POST"
        target="_blank"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Input
          name="name"
          placeholder="NAME"
          isRequired
          validationMessage={getValidationMessage("name")}
          icon="name-icon"
          register={register}
        />
        <Input
          name="phone"
          type="tel"
          placeholder="PHONE"
          icon="phone-icon"
          isRequired
          validationMessage={getValidationMessage("phone")}
          register={register}
        />
        <Input
          name="email"
          type="email"
          placeholder="E-MAIL"
          icon="e-mail-icon"
          isRequired
          validationMessage={getValidationMessage("email")}
          register={register}
        />
        <label className="contact-textarea-label">
          <span className="input-icon-wrapper ">
            <img className="input-icon" src={require("icons/message-icon.svg").default} alt="Message icon" />
            MESSAGE
          </span>
          <textarea
            className="contact-textarea"
            name="message"
            rows="10"
            required
            {...register("message", { required: true })}
          />
        </label>
        <button className="contact-submit-button" type="submit">
          SEND
        </button>
      </form>
    </>
  );
};

export default Contact;
