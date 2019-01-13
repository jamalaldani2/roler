const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","MEMBERS"));
    });

	client.login(process.env.BOT_TOKEN);
