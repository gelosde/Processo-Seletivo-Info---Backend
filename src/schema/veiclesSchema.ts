import * as yup from "yup";

const schema = yup.object().shape({
  plate: yup
    .string()
    .matches(/^[a-zA-Z]{2}[A-Za-z0-9]{4}$/)
    .required(),

  chassis: yup.string().min(17).max(17).required(),

  renavam: yup.number().required(),

  model: yup.string().required(),

  brand: yup.string().required(),

  year: yup.date().required(),
});

export default schema;
