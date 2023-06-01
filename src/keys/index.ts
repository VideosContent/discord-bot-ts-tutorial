import { Keys } from '../types'

const allOfKeys : Keys = {
    botToken : process.env.BOT_TOKEN ?? null
}

if(Object.values(allOfKeys).includes(null)) {
    throw new Error('No keys were provided!')
}

export default allOfKeys