import { Message } from "discord.js"
import Command from "../lib/types/command";

export const CrewmateCommand: Command = {
    name: 'crewmate',
    description: 'Checks whether user is a crewmate.',
    args: false,
    usage: 'crewmate',
    execute: (message: Message) => {
		message.channel.send(`${message.author?.username} is a crewmate! I swear!`)
	},
}
