const Discord = require('discord.js')
module.exports = member => {

 var embed = new Discord.RichEmbed()

.setDescription('Benim ismim "Yasin", **16** yaşındayım.Kendi kendine kod yazan kod bilgisi olan normal bir insanım :),İnsanlara yardım etmekten zevk alıyordum.Bunun üzerine **"CodEming"** sunucusunu kurdum.Burda insanlara yardım ediyor,İstenen komutları yapıp Kendi kodladığım komutları sunucuda paylaşıyorum.Sunucuma katıldığın için teşekkür ederim.Bir Sorun olursa yetkililerle veya benimle iletişime geçebilirsin.Aşağıya 3 5 soru-cevap bırakıyorum :)')
.addField('istediğim Kodu yapmanı istiyorum ne yapmalıyım?', 'sunucuda ki **"istek-sırası"** kanalına istediğin kod u yazarsan,bot bana iletecektir :*')
 .addField('Sunucuda Neden **"kurallar"** bölümü yok?', 'zaten yapmamanız gereken şeyleri biliyorsunuz, anlayabiliyorsunuz heryere yezmaya gerek var mı?')
 .addField('Sunucuda ki **"hazır komutları"** nasıl görürüm?', '**"#💻bot-komut"** kanalına, **c!js**,**c!html**,**c!py** Yazman yeterli olucaktır.')
 .addField('Botumu sunuya ekleyebilir miyim?', 'Evet..! tabii ki [Website](https://codeming-bot-list.glitch.me/ adresimziden botunu sunucuya ekleyebilirsin.')
 .addField('Yetkili Olabilir miyim?', 'Şu an sunucuda alımlarımız açık >> ꏍ Yasin#1534 << dm atarak katılabilirsin.')
 .addField('**Linkler:**', 'Sınırsız Davet Linkimiz: \n https://discord.gg/Y8fHZPk')
 .setFooter(' Aramızda seni görmekten gurur duyuyoruz.')
.addBlankField()
 .setColor('RED')
 member.send(embed)
 };
