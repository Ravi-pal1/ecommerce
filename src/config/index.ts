import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const config = {
    PORT: process.env.PORT!
}

export default config