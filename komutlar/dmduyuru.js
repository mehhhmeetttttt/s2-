const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  if(message.author.id !== ayarlar.sahip) return
  if(!args[0] || args[0] !== "sunucu" && args[0] !== "bot") return message.reply(`Duyurunun bot kullanıcılarına mı bu sunucu üyelerine mi yapılacağını belirtmelisin! => \`${prefix}dmduyuru sunucu/bot <mesaj>\``)
  let mesaj = args.slice(1).join(' ');
  if(args[0] === "sunucu") {
    try {
      message.guild.members.forEach(üye => {
        client.users.get(üye.user.id).send(mesaj)
      })
      message.reply(`**Başarıyla \`${message.guild.memberCount}\` adet üyeye mesajını ilettim!**`)
    } catch(err) { }
    return;
  };
  if(args[0] === "bot") {
    try {
      client.users.forEach(kullanıcı => {
        kullanıcı.send(mesaj)
      });
      message.reply(`**Başarıyla \`${client.users.size}\` adet kullanıcıya mesajını ilettim!**`)
    } catch(err) { };
    return;
  };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dm'],
  permLevel: 0
};

exports.help = {
  name: 'dmduyuru',
  description: "Sunucu üyelerine veya botun kullanıcılarına özelden belirtilen mesajı atar.",
  usage: 'dmduyuru sunucu/bot <mesaj>',
  kategori: 'sahip'
};