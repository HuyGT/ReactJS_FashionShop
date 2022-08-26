import * as Yup from "yup";

export const VALIDATE_YUP = {
  TITLE: Yup.string()
    .required()
    .min(2, "Must be 2 characters or more")
    .max(80, "Must be 80 characters or less"),
  EMAIL: Yup.string().required().email("Invalid email address"),
  PASSWORD: Yup.string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "PassWord minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special characte"
    ),
  PASSWORDCONFIRMATION: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  TERM: Yup.boolean()
    .oneOf([true], "At least one needs to be checked")
    .required(),
  DESCRIPTION: Yup.string()
    .required()
    .min(2, "Must be 2 characters or more")
    .max(150, "Must be 150 characters or less")
    .trim(),
  PHONE: Yup.string()
    .required()
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Invalid number of phone"),
};
