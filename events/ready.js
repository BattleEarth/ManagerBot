const chalk = require('chalk');

module.exports = {
  name: 'ready',
  execute(client) {
    console.log('Logged in the bot.')
	  client.on("ready", message => {
		  client.user.setActivity('BattleEarth', { type: 'WATCHING' });
	  });


/*
    const oniChan = client.channels.cache.get(client.config.ticketChannel)

    function sendTicketMSG() {
      const embed = new client.discord.MessageEmbed()
        .setColor('6d6ee8')
        .setAuthor({name: 'チケット作成はこちら', iconURL: 'https://raw.githubusercontent.com/BattleEarth/Tickety/v1.1/icon.png'})
        .setDescription('お問い合わせがある方は、📩を押してチケットを発行してください。\n同じカテゴリに「ticket-◯◯」という専用のチャンネルが作成されるので、\nそちらでお問い合わせ内容の記載をお願いします。')
        .setFooter(`Tickety | BattleEarth`)
      const row = new client.discord.MessageActionRow()
        .addComponents(
          new client.discord.MessageButton()
          .setCustomId('open-ticket')
          .setLabel('チケットを発行')
          .setEmoji('📩')
          .setStyle('PRIMARY'),
        );

      oniChan.send({
        embeds: [embed],
        : [row]
      })
    }

    oniChan.bulkDelete(100).then(() => {
      sendTicketMSG()

    */



  }
}