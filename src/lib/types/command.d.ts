import { Message } from 'discord.js'

export default interface Command {
    name: string,
    description: string,
    args: boolean,
    usage: string,
    execute(
        message: Message,
        args: string[]
    ): void,
}