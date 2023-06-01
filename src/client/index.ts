import {Client, GatewayIntentBits} from 'discord.js'
import allOfKeys from "../keys";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ]
})


client.login(allOfKeys.botToken)
    .then(() => {
        console.log('Logged in!')
    })
.catch((err) =>{
    console.log(err)
})