import { validationResult } from "express-validator";


export const handleValidationResults = (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ errors: errors.array() });
    }
    next();
};