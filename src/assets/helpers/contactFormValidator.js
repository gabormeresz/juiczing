import * as yup from "yup";

export const contactFormValidator = yup.object().shape({
  email: yup
    .string()
    .required("Email is a mandatory field")
    .email("Must be a valid email"),
  name: yup
    .string()
    .required("Name is a mandatory field")
    .min(3, "Name should be at least 3 characters")
    .max(50, "Name should be maximum 50 characters"),
  message: yup
    .string()
    .required("Message is a mandatory field")
    .min(10, "Please write us a message between 10 and 250 characters.")
    .max(250, "Please write us a message between 10 and 250 characters."),
});
