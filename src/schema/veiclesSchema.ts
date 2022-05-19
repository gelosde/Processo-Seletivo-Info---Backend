import yup from "yup";

const schemaVeicle = yup.object().shape({
  plate: yup
    .string()
    .matches(/@"^[a-zA-Z]{3}\-\d{4}$"/, "value not is a plate value")
    .required("plate is missing"),

  chassis: yup.string().required("chassi is missing"),

  renavam: yup.number().min(11).max(11).required("renavam is missing"),

  model: yup.string().required("model is missing"),

  brand: yup.string().required("brand is missing"),

  year: yup.date().required("year is missing"),
});

export default schemaVeicle;
