import connect from "next-connect"
import Joi from "joi"
import { withIronSessionApiRoute } from "iron-session/next"

import validadion from "../../../lib/middlewares/validadion"

import createHandler from "../../../lib/middlewares/nextConnect"

import { signupUser } from "../../../modules/user/user.service"
import { signupSchema } from "../../../modules/user/user.schema"

import { ironConfig} from "../../../lib/middlewares/ironSession"
 

const signup = createHandler()

 signup.post(validadion( {body: signupSchema} ), async (req, res) => {
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