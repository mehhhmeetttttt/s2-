const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const ayarlar = require('../ayarlar.json');
  let ıd = ayarlar.sahip
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(`⚠ Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
  
message.guild.members.forEach(kullanıcı => {
kullanıcı.setNickname("")
 })
  message.reply(`Herkesin İsmini Kendi Orjinal İsmi Yaptım!`)
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['herkesinisimsıfırla','isimsıfırla','sıfırla'],
    permLevel: 0
}

exports.help = {
    name: 'herkesinisimsıfırla',
description: 'herkesin kendi kullanici ismine sifirlar',
usage: 'sıfırla'
}