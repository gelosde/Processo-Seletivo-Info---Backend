import * as yup from "yup";

const schema = yup.object().shape({
  plate: yup
    .string()
    .matches(/@"^[a-zA-Z]{3}\-\d{4}$"/, "invalid plate")
    .required("plate is missing"),

  chassis: yup
    .string()
    .min(17)
    .max(17)
    .matches(
      /@"^[0-9]{1}[-][A-Z]{2}[-][A-Z]{7}[0-9]{1}[-][0-9]{1}-[0-9]{5}$"/,
      "invalid chassi"
    )
    .required("chassi is missing"),

  renavam: yup.number().min(8).max(11).required("renavam is missing"),

  model: yup.string().required("model is missing"),

  brand: yup.string().required("brand is missing"),

  year: yup.date().required("year is missing"),
});

export default schema;
