import { Message, Guild } from 'discord.js'

interface CustomMessage {
    (user: string): string
}

const messages: Array<CustomMessage> = [
    (user: string) => `Have you all met my best friend, ${user}?`,
]

module.exports = {
    name: 'trust',
    description: 'Declare that you trust another user.',
    args: true,
    usage: 'trust <user>',
    execute: async (
        message: Message,
        args: string
    ) => {
        const userExists = await message.guild?.members.fetch() // Check if the user exists in the guild
        .then(members => members.find(member => member.user.username === args[0]))  // For some reason args is both an array and an object, but not a string??
        .catch((error: Error) => console.error(error))

        // If false, reply "This user doesn't exist in this guild."
        // Otherwise, send a random message.
        if (!args || !userExists) {
            message.reply("Error: that user doesn't exist in this server.")
        } else {
            message.channel.send(`${message.author.username} says: ` + messages[Math.floor(Math.random() * 5)](args) )
        }
    },
}