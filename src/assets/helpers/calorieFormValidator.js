import * as yup from "yup";

export const calorieFormValidator = yup.object().shape({
  age: yup
    .number()
    .typeError("Please use only numbers to type your age")
    .required("Age is a mandatory field")
    .min(18, "Age should be between 18 and 120 years")
    .max(120, "Age should be between 18 and 120 years"),
  height: yup
    .number()
    .typeError("Please use only numbers to type your height")
    .required("Height is a mandatory field")
    .min(140, "Height should be between 140 cm and 250 cm")
    .max(250, "Height should be between 140 cm and 250 cm"),
  weight: yup
    .number()
    .typeError("Please use only numbers to type your weight")
    .required("Weight is a mandatory field")
    .min(30, "Weight should be between 30 kg and 250 kg")
    .max(250, "Weight should be between 40 kg and 250 kg"),
  activity: yup.number().required().min(1.4).max(2.5),
  sex: yup
    .string()
    .required("Please select Male or Female")
    .matches(/(male|female)/, "Please select Male or Female"),
});
