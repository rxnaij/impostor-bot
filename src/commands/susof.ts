import { Message, Guild } from 'discord.js'

interface susMessage {
    (user: string): string
}

const susMessages: Array<susMessage> = [
    (user: string) => `Better watch your back, ${user}.`,
    (user: string) => `${user}, do you know something we don't?`,
    (user: string) => `Keep an eye out on ${user}.`,
    (user: string) => `Something smells fishy. And it's coming from ${user}.`,
    (user: string) => `${user}, I'm not saying you're sus, but...you're sus.`,
]

module.exports = {
    name: 'susof',
    description: 'Declare that you are sus of another user.',
    args: true,
    usage: 'susof <user>',
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
            message.channel.send(`${message.author.username} says: ` + susMessages[Math.floor(Math.random() * 5)](args) )
        }
    },
}