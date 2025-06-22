import connect from "next-connect"
import Joi from "joi"
import { withIronSessionApiRoute } from "iron-session/next"

import validadion from "../../../lib/middlewares/validadion"

import createHandler from "../../../lib/middlewares/nextConnect"

import { signupUser } from "../../../modules/user/user.service"

import { ironConfig} from "../../../lib/middlewares/ironSession"


const postSchema = Joi.object({
    FirstName: Joi.string().required().max(50),
    LastName: Joi.string().required().max(50),
    user: Joi.string().required().max(30),
    email: Joi.string().email().required().max(50),
    password: Joi.string().required().max(50).min(6),
})

const signup = createHandler()

 signup.post(validadion( {body: postSchema} ), async (req, res) => {
       try{ const user = await signupUser(req.body)
        req.session.user = {
            id: user._id,
            user: user.user
        }
        await req.session.save()

        res.status(201).json({ ok: true })
       }catch(err){
        console.error(err)
        throw err
        
       }
 }) 



export default withIronSessionApiRoute(signup, ironConfig)