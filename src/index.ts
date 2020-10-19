import fs from 'fs'
import { Client, Collection } from 'discord.js'
import { prefix, token } from './config.json'
import Command from './lib/types/command'


// Create a new Discord client
const client = new Client()

// Dynamically retrieve commands from ./commands folder
const commands = new Collection<string, Command>()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // Returns an array of all <command>.js files in the ./commands folder
for (const file of commandFiles) {
    const command: Command = require(`./commands/${file}`)
    commands.set(command.name, command)
}   

/**
 * Respond to command messages.
 * Commands take the form !<command> <rest of message>
 */
client.on('message', (message) => {
    // Validate message content
    if (!message.content.startsWith(prefix) || message.author.bot) return   // Checks message for prefix and human author
    // Extract command message content
    const args = message.content.slice(prefix.length).trim().split(/ +/) // Deconstructs message into a whitespace-delimited array
    const commandName = args.shift()?.toLowerCase()   // Retrieves the command of the message

    // Validate command name
    if (!commandName || !commands.has(commandName)) return  // Checks if 1) a valid command was entered and 2) the command exists in the "commands" Collection
    const command = commands.get(commandName)

    // For commands that require arguments, validate that arguments exist
    if (command && command.args && !args.length)

    // Run command
    try {
        command && command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
})

// Log in to Discord using app's token
client.login(token)