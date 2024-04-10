import { body } from "express-validator";

export const validateBonsai = [
    body('specie')
    .isString().withMessage('Especie debe ser una cadena de caracteres.')
    .notEmpty().withMessage('El campo de especie no puede estar vacío.')
    .isLength({min: 3, max: 25}).withMessage('El campo de especie debe tener una longitud entre 3 y 25 caracteres.'),

    body('abonated')
    .isDate().withMessage('El campo de abono debe ser una fecha.')
    .isISO8601().withMessage('La fecha debe tener formato YYYY-MM-DD')
    .notEmpty().withMessage('El campo de abono no puede estar vacío.')
    .custom((value, {request}) => {
        const abonatedDate = new Date(value);
        const currentDate = new Date();
        if ( abonatedDate > currentDate ) {
            throw new Error('La fecha de abono debe ser menor o igual al día de hoy.')
        }
        return true;
    }),

    body('trasplanted')
    .isDate().withMessage('El campo de trasplante debe ser una fecha.')
    .isISO8601().withMessage('La fecha debe tener formato YYYY-MM-DD')
    .notEmpty().withMessage('El campo de trasplante no puede estar vacío.')
    .custom((value, {request}) => {
        const trasplantedDate = new Date(value);
        const currentDate = new Date();
        if ( trasplantedDate > currentDate ) {
            throw new Error('La fecha de trasplante debe ser menor o igual al día de hoy.')
        }
        return true;
    }),

    body('notes')
    .matches(/^[\w\s.,!()-ñ]+$/).withMessage('Las notas solo permiten caracteres alfanuméricos y algunos caracteres especiales simples.')
    .notEmpty().withMessage('Las notas no pueden estar vacías.')
    .isLength({max:255}).withMessage('Las notas deben tener una longitud máxima de 255 caracteres.'),

    body('images')
    .isURL().withMessage('El campo de imagen debe ser una URL válida')
    .notEmpty().withMessage('El campo de imagen no puede estar vacío.')
]

