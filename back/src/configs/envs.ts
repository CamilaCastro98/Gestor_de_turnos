import "dotenv/config"

export const PORT = Number(process.env.PORT) || 3000
export const DB = process.env.DB
export const PROTO = process.env.PROTO || "http"
export const HOST = process.env.HOST || "localhost"
export const DB_TYPE = process.env.DB_TYPE || "postgress"
export const DB_HOST = process.env.DB_HOST || "localhost"
export const DB_PORT = process.env.DB_PORT || 5432
export const DB_USERNAME = process.env.DB_USERNAME || "test"
export const DB_PASSWORD = process.env.DB_PASSWORD || "test"
export const DB_NAME = process.env.DB_NAME || "test"
