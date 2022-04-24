const fs = require('fs');
const {
    Client,
    Collection,
    Intents
} = require('discord.js');
const chalk = require('chalk')
const config = (require('./config.json').prefix);

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS],
});


const Discord = require('discord.js');
client.discord = Discord;
client.config = config;

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

const prefix = (require(`./config.json`).prefix)

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
    client.on(event.name, (...args) => event.execute(...args, client));
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction, client, config);
  } catch (error) {
    console.error(error);
    return interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true
    });
  }
});

discord_page = require("discord-quick-button-page")
    jsondata={
        custom_id:"hage",
        disabled: true,
        label: "捨てる",
        style: 1,
        type: 2,
    };
discord_page.buttonerror({content:"エラーが発生しました",button:"エラー"});

client
    .on('messageCreate',message => {
        if(message.content === `${prefix}list`)message.reply({embeds:[{description:button.content}],components:[button.data]});
    })
    .on("interactionCreate",async i=>{
        if(i.customId.startsWith("hoge")){
            await i.deferUpdate();
            const getbtn = discord_page.buttonpush({id:"HOGE",interaction:i});
            i.editReply({embeds:[{description:getbtn.content}],components:[getbtn.data]});
        }
        if(i.customId.startsWith("test")){
            await i.deferUpdate();
            const getbtn = discord_page.buttonpush({id:"test",interaction:i,json:jsondata});
            i.editReply({embeds:[{description:getbtn.content+getbtn.page}],components:[getbtn.data]});
        }
    })

        let button = discord_page.buttonpage({loop:true,content:[
                "**国リスト1**\n・国\n・国",
                "**国リスト2**\n・国\n・国",
                "**国リスト3**\n・国\n・国",
                "**国リスト4**\n・国\n・国"
    ],id:"HOGE",customid:{next:"hogenext",back:"hogeback"}
});


client.on("messageCreate", async message => {
    if(message.content === "!ping")
        message.channel.send (`**Pong!**　ping:${client.ws.ping}ms`)
});

const embed2 = new Discord.MessageEmbed()
    .setTitle('ロール追加')
    .setColor('#00ff00')
    .setDescription(`下のリアクションを押すとロールを追加できます！\n　<:Minecraft:967605434754150441> <@&957885396845469733>\n　<:Apex:967606608718864384> <@&957885396845469732>\n　<:Fortnite:967605475384373299> <@&957885396845469731>\n　<:Zinrou:967607245867200512> <@&957885396845469730>\n　<:Puroseka:967607648616849418> <@&957885396845469729>\n　<:Taiko:967608112343318579> <@&957885396845469728>`)

client.on("messageCreate", async message => {
    if (message.content === "!role game")
        message.channel.send({
            embeds: [embed2]
        })
    if (message.content === "!ping")
        message.channel.send(`**Pong!**\n　ping:${client.ws.ping}ms`);
})
client.on('messageReactionAdd', async (reaction, user) => {
    const message = reaction.message
    const member = message.guild.members.resolve(user)
    if (reaction.emoji.name === '<:Minecraft:967605434754150441>')
        member.roles.add("957885396845469733")
    if (reaction.emoji.name === '<:Apex:967606608718864384>')
        member.roles.add("957885396845469732")
    if (reaction.emoji.name === '<:Fortnite:967605475384373299>')
        member.roles.add("957885396845469731")
})

client.login('OTU4NjI3ODg1MjY1MDgwMzkx.YkQFyg.CJebvWXv8jf3doXoRn_03GlbbaU');