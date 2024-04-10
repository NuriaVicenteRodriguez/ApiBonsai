import 'dotenv/config'

export const DB_PASS = process.env.DB_PASS;
export const DB_DEV_NAME = process.env.DB_DEV_NAME;
export const DB_USER = process.env.DB_USER;
export const PORT = process.env.DB_PORT || 3008;
export const DB_TEST_NAME = process.env.DB_TEST_NAME;
export const NODE_ENV = process.env.NODE_ENV;