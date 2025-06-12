import withJoi from "next-joi";

export default withJoi({
    onValidationError:(req, res, erro) => {
        return res.status(400).send(error.details)
    }
})