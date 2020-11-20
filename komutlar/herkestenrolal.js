const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':hayirr: | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
   let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('Herkesten rol alabilmem için bir rol etiketlemelisin.')
  
  
   const embed = new Discord.RichEmbed()
     .setDescription(`Herkesten ${rol} adlı rol alındı!`)
        .setColor(rol.hexColor)
   const ver = new Discord.RichEmbed()
   .setDescription('Bir kullanıcıya ``' + rol.name + '`` adlı rol alındı!')
   .setColor(rol.hexColor)
   
   message.guild.members.forEach(u => {
u.removeRole(rol)
})

  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rolal',],
    permLevel: 0
}

exports.help = {
    name: 'herkestenrolal',
    description: 'Herkesten rol alır',
    usage: 'herkesten-rol-al @rol / rol-ismi'
}