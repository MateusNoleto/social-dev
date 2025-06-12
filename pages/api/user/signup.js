import connect from "next-connect"
import Joi from "joi"

import validadion from "../../../lib/middlewares/validadion"

import { signupUser } from "../../../modules/user/user.service"

const postSchema = Joi.object({
    FirstName: Joi.string().required().max(50),
    LastName: Joi.string().required().max(50),
    user: Joi.string().required().max(30),
    email: Joi.string().email().required().max(50),
    password: Joi.string().required().max(50).min(6),
})

const signup = connect()
 .post(validadion( {body: postSchema} ), (req, res) => {
    function signup (){
        signupUser(req.body)
        res.status(200).json({ teste: "ok" })
    }
 }) 



export default signup