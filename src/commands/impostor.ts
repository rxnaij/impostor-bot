import { Message } from 'discord.js'
import { Command } from '../lib/types/command'

module.exports = {
    name: 'impostor',
    description: 'Checks whether user is an impostor.',
    args: false,
    usage: 'impostor',
    execute: (message: Message) => {
      message.channel.send(`${message.author?.username} was ${Math.round(Math.random()) ? `not` : `` } an impostor.`)
    },
}
