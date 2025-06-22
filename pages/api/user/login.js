import Joi from "joi"

import validadion from "../../../lib/middlewares/validadion"

import createHandler from "../../../lib/middlewares/nextConnect"

import { login } from "../../../modules/user/user.service"

const loginSchema = Joi.object({
    userOrEmail: Joi.string().require(),
    password: Joi.string().required()
})

const handler = createHandler()

handler.post(validate({body: loginSchema}), async(req,res) => {
    try {
        const user =  await login(req, body)
        res.send(user)
    } catch (err) {
        console.error(err)
        throw err

    }
})

export default handler

