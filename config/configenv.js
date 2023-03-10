import { config } from 'dotenv'

config()

export const API_KEY = process.env.API_KEY
export const AUTH_DOMAIN = process.env.AUTH_DOMAIN
export const DATABASE_URL = process.env.DATABASE_URL
export const PROJECT_ID = process.env.PROJECT_ID
export const STORAGE_BUCKET = process.env.STORAGE_BUCKET
export const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID
export const APP_ID = process.env.APP_ID
export const MEASUREMENT_ID = process.env.MEASUREMENT_ID