const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

client.on("ready", () => {
  console.log(`${client.user.tag}으로 로그인했어요!`);
  client.user.setActivity(`일레이나 도움`);
});

//embed
const help = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("도움")
  .setURL("")
  .setAuthor("일레이나")
  .setDescription("도와줄게 있나요?")
  .addFields(
    { name: "일레이나 핑", value: "핑 측정" },
    { name: "일레이나 서버", value: "서버정보" },
    { name: "일레이나 유저", value: "유저 정보" },
    { name: "일레이나 초대", value: "봇 초대" },
    {
      name: "일레이나 도배",
      value:
        "일레이나에게 도배를 시킵니다. 10번만 반복되며 이것은 추방당하고 싶다는 의미입니다. ",
    },
    { name: "일레이나 깃", value: "일레이나 봇 깃허브 주소를 보여줍니다." },
    { name: "일레이나 주사위", value: "주사위굴리기" }
  )
  .setTimestamp()
  .setFooter("Made by Elaina");

//commands

client.on("message", (message) => {
  if (message.content === "일레이나 초대") {
    message.channel.send(`http://invite.elaina.kro.kr/`);
  }
});

client.on("message", (message) => {
  if (message.content === "일레이나 도움") {
    message.channel.send(help);
  }
});

client.on("message", (message) => {
  if (message.content === "일레이나 서버") {
    message.channel.send(
      `서버이름:: ${message.guild.name}\n멤버 수: ${message.guild.memberCount}`
    );
  }
});

client.on("message", (message) => {
  if (message.content === "일레이나 유저") {
    message.channel.send(
      `닉네임: ${message.author.username}\n아이디: ${message.author.id}`
    );
  }
});

client.on("message", (message) => {
  if (message.content === "일레이나 핑") {
    message.channel.send(
      `🏓! ${Date.now() - message.createdTimestamp}(ms)이에요`
    );
  }
});

client.on("message", (message) => {
  if (message.content === "일레이나 주사위") {
    var random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    message.channel.send(random);
  }
});

client.on("message", (message) => {
  if (message.content === "일레이나 깃") {
    message.channel.send(`https://github.com/Elaina1017/Elaina-discordbot`);
  }
});

client.on("message", (message) => {
  if (message.content === "일레이나 접두사") {
    message.channel.send(config.prefix);
  }
});

client.on("message", (message) => {
  if (message.content === "일레이나 도배") {
    for (var i = 0; i < 10; i++) {
      message.channel.send(`방장님 ${message.author.tag} 가 추방당하고 싶대요`);
    }
  }
});

//로그
client.on("message", (message) => {
  console.log(
    `\n${message.content}\n보낸사람이름: ${message.author.tag}\n서버이름: ${message.guild.name}`
  );
  fs.appendFileSync(
    "log.txt",
    `\n${message.content}\n보낸사람이름: ${message.author.tag}\n서버이름: ${message.guild.name}\n`
  );
});

//로그인
client.login(config.token);
