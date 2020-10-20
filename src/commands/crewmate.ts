import { Message } from "discord.js"
import { Command } from "../lib/types/command";

module.exports = {
    name: 'crewmate',
    description: 'Checks whether user is a crewmate.',
    args: false,
    usage: 'crewmate',
    execute: (message: Message) => {
      message.reply(`${message.author?.username} is a crewmate! I swear!`)
    },
}
