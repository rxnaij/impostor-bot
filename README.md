# Impostor Bot
Impostor Bot is a Discord bot that will check whether a user is an impostor or a crewmate.

This was made using the [discord.js](https://github.com/discordjs/discord.js) library.

## How to use
This project uses [TypeScript](https://www.typescriptlang.org).

Visit the official [discord.js](https://discordjs.guide/) guide for an in-depth, beginner-friendly tutorial on how to set up your project.

(Note: The linked tutorial uses JavaScript.)

### Prerequisites
- Node.js

### Installation
1. Make sure all of the prequisites are installed.
2. Clone the repository.
3. Install dependencies using the command `npm install`
    - Or, if you're using yarn, run the command: `yarn`

### Setting up your bot configuration
1. Set up your application with Discord. (This is covered in the first few sections of the [discord.js guide](https://discordjs.guide/)).
3. In the `src` directory, create a file called `config.json`, and add the following:
```json
{
    "prefix": "!",
    "token": "your-discord-bot-token-here"
}
```

### Compile TypeScript to JavaScript

When you're ready to compile your `.ts` files to JavaScript, run the command: ```tsc```

A `dist` folder will be created in the root directory, containing all of the files compiled to JavaScript.



