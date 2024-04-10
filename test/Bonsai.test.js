import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import BonsaiModel from '../models/BonsaiModel';
import moment from 'moment';

const api = request(app);

describe('Testing CRUD bonsais', () => {
    
    describe('POST', ()=> {
        test('Post response should be an object and then return status 201', async() => {
            const response = await api.post('/api').send({
                "specie": "Hola",
                "abonated": "2023-09-03",
                "trasplanted": "2021-01-01",
                "notes": "pino pequenio",
                "images": "https://www.aragon.es/-/arbol-singular-pino-del-escobon"
            });
    
            expect(typeof response.body).toBe('object');
            expect(response.status).toBe(201);
        
        });

        test('Invalid URL should return error message and return status 422', async() => {
            const response = await api.post('/api').send({
                "specie": "Hola",
                "abonated": "2023-09-03",
                "trasplanted": "2021-01-01",
                "notes": "pino pequenio",
                "images": "URL no válida"
            });

            const errorMessage = response.body.errors[0].msg;
            expect(errorMessage).toBe('El campo de imagen debe ser una URL válida');
            expect(typeof response.body).toBe('object');
            expect(response.status).toBe(422);
    
        });

        test('Error should be returned if the abonated date is in the future and return status 422', async ()=> {
            const futureDate = moment().add(1, 'day').format('YYYY-MM-DD');
            const actualDate = moment().format('YYYY-MM-DD');
            const response = await api.post('/api').send({
                "specie": "test",
                "abonated": futureDate,
                "trasplanted": actualDate,
                "notes": "test notes",
                "images": "https://www.aragon.es/-/arbol-singular-pino-del-escobon"
            });

            const errorMessage = response.body.errors[0].msg;
            expect(errorMessage).toBe('La fecha de abono debe ser menor o igual al día de hoy.');
            expect(typeof response.body).toBe('object');
            expect(response.status).toBe(422)
        });

        test('Error should be returned if the trasplanted date is in the future and return status 422', async ()=> {
            const futureDate = moment().add(1, 'day').format('YYYY-MM-DD');
            const actualDate = moment().format('YYYY-MM-DD');
            const response = await api.post('/api').send({
                "specie": "test",
                "abonated": actualDate,
                "trasplanted": futureDate,
                "notes": "test notes",
                "images": "https://www.aragon.es/-/arbol-singular-pino-del-escobon"
            });

            const errorMessage = response.body.errors[0].msg;
            expect(errorMessage).toBe('La fecha de trasplante debe ser menor o igual al día de hoy.');
            expect(typeof response.body).toBe('object');
            expect(response.status).toBe(422);
        });

        test('Error should be returned if notes have more than 255 characters', async() => {
            let badNotes = "";
            for (let i=0; i<256; i++) {
                badNotes = badNotes + "a";
            }
            console.log(badNotes.length);

            const response = await api.post('/api').send({
                "specie": "Hola",
                "abonated": "2023-09-03",
                "trasplanted": "2021-01-01",
                "notes": badNotes,
                "images": "https://www.aragon.es/-/arbol-singular-pino-del-escobon"
            });

            const errorMessage = response.body.errors[0].msg;
            expect(errorMessage).toBe('Las notas deben tener una longitud máxima de 255 caracteres.');
            expect(typeof response.body).toBe('object');
            expect(response.status).toBe(422);
        });

        test('An array of errors should be returned if there is more than one error', async ()=> {
            const response = await api.post('/api').send({
                    "specie": 123,
                    "abonated": "2025-09-03",
                    "trasplanted": "2025-01-01",
                    "notes": 123,
                    "images": "Url no válida"
            })
            expect(Array.isArray(response.body.errors)).toBe(true)
            console.log(response.body.errors.length)
        });
    });

    describe('GET', ()=> {
        test('GET Response body must be an array and then show 200 status', async() =>{
            const response = await api.get('/api');
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.status).toBe(200);
        });
    })


    describe('PUT', () => {
        let createdBonsai = {};
        beforeEach(async ()=> {
            createdBonsai = await BonsaiModel.create({
                "specie": "test",
                "abonated": "2000-01-01",
                "trasplanted": "2000-01-01",
                "notes": "test",
                "images": "https://www.aragon.es/-/arbol-singular-pino-del-escobon"
            })
        })

        afterAll(async()=> {
            await BonsaiModel.destroy({where: {id: createdBonsai.id}})
        })

        test('Put response should be an object and return status 201', async () => {
            const response = await api.put(`/api/${createdBonsai.id}`).send({
                "specie": "updated test",
                "abonated": "2000-01-01",
                "trasplanted": "2000-01-01",
                "notes": "updated test",
                "images": "https://www.aragon.es/-/arbol-singular-pino-del-escobon"
            });
            expect(typeof response.body).toBe('object');
            expect(response.status).toBe(201)
        })
    });

    describe('DELETE', ()=> {
        let createdBonsai = {};
        let response;
        beforeEach(async ()=> {
            createdBonsai = await BonsaiModel.create({
                "specie": "test",
                "abonated": "2000-01-01",
                "trasplanted": "2000-01-01",
                "notes": "test",
                "images": "https://www.aragon.es/-/arbol-singular-pino-del-escobon"
            })

            response = await api.delete(`/api/${createdBonsai.id}`).send();
        })

        test('Delete response should show 200 status', () =>{
            expect(response.status).toBe(200);
        });
    })

    afterAll( async () => {
       server.close();
       await connection_db.sync({force: true });
       console.log('All databases are clean')
    })
});