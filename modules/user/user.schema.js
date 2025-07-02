import Joi from "joi";

export const signupSchema = Joi.object({
    FirstName: Joi.string().required().max(50),
    LastName: Joi.string().required().max(50),
    user: Joi.string().required().max(30),
    email: Joi.string().email({ tlds: { allow: false }}).required().max(50),
    password: Joi.string().required().max(50).min(6),
})