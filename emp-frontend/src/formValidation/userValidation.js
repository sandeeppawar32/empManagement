import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    address: yup.string(),
    email: yup.string().email().required(),
})