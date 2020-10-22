const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`일레이나 도움`);
});

//embed
const help = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('도움')
	.setURL('')
	.setAuthor('일레이나')
	.setDescription('도와줄게 있나요?')
	.addFields(
        { name: '일레이나 핑', value: '핑 측정' },
        { name: '일레이나 서버', value: '서버정보'},
        { name: '일레이나 유저', value: '유저 정보' },
        { name: '일레이나 초대', value: '봇 초대' }
	)
	.setTimestamp()
	.setFooter('Made by Elaina');

const invite = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.addFields(
        { name: '초대링크', value: 'http://invite.elaina.kro.kr/' },
	)
	.setTimestamp()
	.setFooter('Made by Elaina');


  //commands

    client.on('message', message => {
        if (message.content === '일레이나 초대') {
            message.channel.send(invite);
  }
    });


    client.on('message', message => {
        if (message.content === '일레이나 도움') {
            message.channel.send(help);
  }
    });

client.on('message', message => {
  if (message.content === '일레이나 서버') {  
    message.channel.send(`서버이름: ${message.guild.name}\n멤버 수: ${message.guild.memberCount}`);
  }
});

client.on('message', message => {
  if (message.content === '일레이나 유저') {  
    message.channel.send(`닉네임: ${message.author.username}\n아이디: ${message.author.id}`);
  }
});

client.on('message', message => {
  if (message.content === '일레이나 핑') {  
    message.channel.send(`🏓핑! ${Date.now() - message.createdTimestamp}(ms)이에요`);
  }
});


client.login('NzY4NjY0ODQ0ODk0MjA4MDYx.X5Dw7A.DYRYEgF9bs_ZOoU9XgXZ6iDQPso');