import { Message } from 'discord.js'

export interface Command {
    name: string,
    description: string,
    args: boolean,
    usage: string,
    execute(
        message: Message,
        args: string[]
    ): void,
}