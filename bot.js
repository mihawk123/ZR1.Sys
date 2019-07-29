
const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyB2AlcMM3pqfcVZwdoZTvCLFf0D3xe47yk");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const ms = require('ms');

const moment = require('moment');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "3";
const adminprefix = "^";

/////////////////////////
////////////////////////



client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**

=-=-=-=-=-= 🌍 Public Commands - اوامر عامة 🌍 =-=-=-=-=-=


💎-add لاضافة ايموجي بالايدي الخاص به 
💎-toggleMedia لتعطيل روم الصور والمقاطع او تفعيله 
💎-setMedia لتحديد روم الصور والمقاطع 
💎-infoMedia لعرض معلومات روم الصور والمقاطع 
💎-setup لانشاء وتعديل رتبة المانع من الكتابة 
💎-rank لعرض الليفل والاكس بي 
💎-sug (suggest) لارسال اقتراح 
💎-allsug لرؤية جميع الاقتراحات 
💎-dsug لحذف الاقتراح 
💎-ip (minecaftserver) لعرض سيرفر ماينكرافت الذي تريده 
💎-rank لعرض رتبتك 
💎-ping لعرض بنقك الحالي 
💎-skin (minecraftusername) عرض سكنك في ماين كرافت      
💎-giveaway لبدء قيفاواي 
💎-temp لانشاء غرفة مؤقتة صوتية او كتابية 
💎-avatar لعرض صورتك 
💎-avatar (mentionuser) لعرض صورة الشخص اللي منشنته 
💎-avatar server لعرض صورة السيرفر 
💎-role (mentionuser) (rolename) لإعطاء شخص رتبة 
💎-server لعرض معلومات السيرفر 
💎-vmute لاعطاء الشخص ميوت صوتي 
💎-unvmute لفك الميوت الصوتي عن الشخص 
💎-voiceonline لتفعيل الفويس اونلاين 
💎-credits لعرض الكريدت 
💎-daily لاخذ الحصة اليومية 
💎-credits (user) (amount) لتحويل الكريدت  


💎-bot لمعلومات البوت 
💎-invites لعرض دعواتك        
💎-new | عشان تسوي تكت
💎-close | عشان تسكر التكت
💎-add | عشان تضيف احد لتكت
💎-remove | عشان تشيل احد من التكت
💎-multiclose | عشان تسكر كل التكات المفتوحة 




=-=-=-=-=-= 🔧  Admin Commands - اوامر ادارية 🔧 =-=-=-=-=-=

👑-warn لتحذير شخص 
👑-clear  مسح الشات  
👑-bc   برودكاست لجميع اعضاء السيرفر  
👑-obc برودكاست لجميع اعضاء السيرفر الاونلاين 
👑-kick  كيك بسبب 
👑-ban  بان بسبب 
👑-mute  ميوت  
👑-unmute  لفك منع شخص من الكتابة  

=-=-=-=-=-= 🎯  Music Commands - اوامر الموسيقى 🎯 =-=-=-=-=-=

:notes: -play لتشغيل اي اغنية من رابط او من اسم
:notes: -skip لتجاوز اغنية
:notes: -np لرؤية الاغنية التي تعمل
:notes: -replay لاعادة الاغنية
:notes: -queue لرؤية قائمة الاغاني
:notes: -vol لرؤية وتغيير مستوى الصوت
:notes: -pause


       **  `)
   message.author.sendEmbed(embed)
   
   }
   });  

client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
if (message.content.startsWith(prefix + "avatar")) {
if(!message.channel.guild) return
var user = message.mentions.users.first();
let args = message.content.split(" ").slice(1).join(" ");
let ava = message.author.avatarURL
let mem = message.author
let x = new Discord.RichEmbed()
.setAuthor(message.guild.name,`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=1024`)
.setDescription(`[Avatar Link](${message.guild.iconURL})`)
.setImage(`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=1024`)
.setFooter(`Requested by ${message.author.tag}`,message.author.avatarURL)
if(args) {
if(args == 'server') return message.channel.send(x)
if(!user) return message.channel.send(`:rolling_eyes: ${message.author.tag}, I can't find **${args}**!`)
mem = user 
ava = user.id}
 let t = new Discord.RichEmbed()
.setAuthor(mem.tag,mem.avatarURL)
.setDescription(`[Avatar Link](${mem.avatarURL})`)
.setImage(`${mem.displayAvatarURL}?size=1024`)
.setFooter(`Requested by ${message.author.tag}`,message.author.avatarURL)
message.channel.send(t)}
});

client.on('message', message => {
  if (true) {
if (message.content === '-invite') {
      message.author.send('**رابط البوت  |  https://discordapp.com/api/oauth2/authorize?client_id=599110073628885002&permissions=8&scope=bot**').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === "-invite") {
     message.react("✅");
    }
});

client.on('message', message => {
  if (true) {
if (message.content === '-inv') {
      message.author.send('**رابط البوت  |  https://discordapp.com/api/oauth2/authorize?client_id=599110073628885002&permissions=8&scope=bot**').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === "-inv") {
     message.react("✅");
    }
});


client.on('message', message => {
  if (true) {
if (message.content === '-support') {
      message.author.send('**رابط سيرفر الدعم الفني  |  https://discord.gg/PBTDRuG**').catch(e => console.log(e.stack));
 
    }
   }
  });

client.on('message', message => {
     if (message.content === "-support") {
     message.react("✅");
    }
});

client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🌚 | اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🆔 | ايدي:', "**"+ `${z.id}` +"**",true)
.addField(':video_game: | Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| تاق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك:**', message.author.createdAt.toLocaleString())

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المنشن بشكل صحيح  ❌ **').catch(console.error);

}

});

client.on('messageDelete', message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = message.guild.channels.find(c => c.name === 'اللوق');
    if(!logChannel) return;
 
    let messageDelete = new Discord.RichEmbed()
    .setTitle('**[حذف الرسالة]**')
    .setColor('RED')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`**\n**:wastebasket: بنجاح \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**قناة:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**معرف الرسالة:** ${message.id}\n**أرسلت بواسطة:** <@${message.author.id}> (ID: ${message.author.id})\n**رسالة:**\n\`\`\`${message}\`\`\``)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'اللوق');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return;
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[تحرير الرسالة]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n**:wrench: بنجاح \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**قناة:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**معرف الرسالة:** ${oldMessage.id}\n**أرسلت بواسطة:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**رسالة قديمة:**\`\`\`${oldMessage}\`\`\`\n**رسالة جديدة:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 
// Roles Logs
client.on('roleCreate', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'اللوق');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**[دور خلق]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: بنجاح \`\`CREATE\`\` Role.\n\n**اسم الدور:** \`\`${role.name}\`\` (ID: ${role.id})\n**بواسطة:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'اللوق');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[دور الحذف]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: بنجاح \`\`DELETE\`\` Role.\n\n**اسم الدور:** \`\`${role.name}\`\` (ID: ${role.id})\n**بواسطة:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete);
    })
});

client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'اللوق');
    if(!logChannel) return;
 
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**[تحديث دور الاسم]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: بنجاح \`\`EDITED\`\` Role Name.\n\n**اسم قديم:** \`\`${oldRole.name}\`\`\n**اسم جديد:** \`\`${newRole.name}\`\`\n**معرف الدور:** ${oldRole.id}\n**بواسطة:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName);
        }
        if(oldRole.hexColor !== newRole.hexColor) {
            if(oldRole.hexColor === '#000000') {
                var oldColor = '`Default`';
            }else {
                var oldColor = oldRole.hexColor;
            }
            if(newRole.hexColor === '#000000') {
                var newColor = '`Default`';
            }else {
                var newColor = newRole.hexColor;
            }
            let roleUpdateColor = new Discord.RichEmbed()
            .setTitle('**[تحديث دور اللون]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: بنجح \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**اللون القديم:** ${oldColor}\n**لون جديد:** ${newColor}\n**معرف الدور:** ${oldRole.id}\n**بواسطة:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateColor);
        }
        if(oldRole.permissions !== newRole.permissions) {
            let roleUpdate = new Discord.RichEmbed()
            .setTitle('**[تحديث دور التحديثات]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:first_place: بنجح \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**أذونات قديمة:** \`\`${oldRole.permissions}\`\`\n**أذونات جديدة:** \`\`${newRole.permissions}\`\`\n**بواسطة:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
           
            logChannel.send(roleUpdate)
        }
    })
});
 
 
// Channels Log
client.on('channelCreate', channel => {
 
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'اللوق');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelCreate = new Discord.RichEmbed()
        .setTitle('**[إنشاء قناة]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: بنجح \`\`CREATE\`\` **${roomType}** channel.\n\n**اسم القناة:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**بواسطة:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
});

client.on('channelDelete', channel => {
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'اللوق');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[حذف قناة]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: بنجح \`\`DELETE\`\` **${roomType}** channel.\n\n**اسم القناة:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**بواسطة:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete);
    })
});

client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find(c => c.name === 'اللوق');
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
 
    oldChannel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**[تحرير قناة]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: تم التعديل بنجاح **${channelType}** Channel Name\n\n**اسم قديم:** \`\`${oldChannel.name}\`\`\n**اسم جديد:** \`\`${newChannel.name}\`\`\n**معرف القناة:** ${oldChannel.id}\n**بواسطة:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newName);
        }
        if(oldChannel.topic !== newChannel.topic) {
            let newTopic = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 

// Guild Logs
client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'اللوق');
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**[محظور]**')
        .setThumbnail(userAvatar)
        .setColor('DARK_RED')
        .setDescription(`**\n**:airplane: بنجاح \`\`BANNED\`\` **${user.username}** From the server!\n\n**المستعمل:** <@${user.id}> (ID: ${user.id})\n**بواسطة:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
    })
});

client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'اللوق');
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**[غير ممنوع]**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`**\n**:unlock: بنجح \`\`UNBANNED\`\` **${user.username}** From the server\n\n**المستعمل:** <@${user.id}> (ID: ${user.id})\n**بواسطة:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});

client.on('guildUpdate', (oldGuild, newGuild) => {
 
    if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldGuild.channels.find(c => c.id === guildSettings[oldGuild.id].logChannel);
    if(!logChannel) return;
 
    oldGuild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldGuild.name !== newGuild.name) {
            let guildName = new Discord.RichEmbed()
            .setTitle('**[تغيير اسم الذنب]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: بنجح \`\`EDITED\`\` The guild name.\n\n**اسم قديم:** \`\`${oldGuild.name}\`\`\n**اسم جديد:** \`\`${newGuild.name}\`\`\n**بواسطة:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(newGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildName)
        }
        if(oldGuild.region !== newGuild.region) {
            let guildRegion = new Discord.RichEmbed()
            .setTitle('**[CHANGE GUILD REGION]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild region.\n\n**Old Region:** ${oldGuild.region}\n**New Region:** ${newGuild.region}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildRegion);
        }
        if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
            if(oldGuild.verificationLevel === 0) {
                var oldVerLvl = 'Very Easy';
            }else
            if(oldGuild.verificationLevel === 1) {
                var oldVerLvl = 'Easy';
            }else
            if(oldGuild.verificationLevel === 2) {
                var oldVerLvl = 'Medium';
            }else
            if(oldGuild.verificationLevel === 3) {
                var oldVerLvl = 'Hard';
            }else
            if(oldGuild.verificationLevel === 4) {
                var oldVerLvl = 'Very Hard';
            }
 
            if(newGuild.verificationLevel === 0) {
                var newVerLvl = 'Very Easy';
            }else
            if(newGuild.verificationLevel === 1) {
                var newVerLvl = 'Easy';
            }else
            if(newGuild.verificationLevel === 2) {
                var newVerLvl = 'Medium';
            }else
            if(newGuild.verificationLevel === 3) {
                var newVerLvl = 'Hard';
            }else
            if(newGuild.verificationLevel === 4) {
                var newVerLvl = 'Very Hard';
            }
 
            let verLog = new Discord.RichEmbed()
            .setTitle('**[GUILD VERIFICATION LEVEL CHANGE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Guild verification level.\n\n**Old Verification Level:** ${oldVerLvl}\n**New Verification Level:** ${newVerLvl}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
 
            logChannel.send(verLog);
        }
    })
});

client.on('guildMemberUpdate', (oldMember, newMember) => {
    var logChannel = oldMember.guild.channels.find(c => c.name === 'اللوق');
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var newNM = newMember.nickname;
            }
 
            let updateNickname = new Discord.RichEmbed()
            .setTitle('**[تحديث اسم العضو]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:spy: بنجح \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**الاسم المستعار القديم:** ${oldNM}\n**كنية جديدة:** ${newNM}\n**بواسطة:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
 
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[ADDED ROLE TO MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
 
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**[REMOVED ROLE FROM MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
        let newOwner = new Discord.RichEmbed()
        .setTitle('**[UPDATE GUILD OWNER]**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});

client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'اللوق');
  if(!logChannel) return;
 
  let newMember = new Discord.RichEmbed()
  .setTitle('**[عضو جديد تمت إضافته]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_lower_right: انضم **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**أيام في الخلاف:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(newMember);
});

function Days(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
}

client.on('guildMemberRemove', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'اللوق');
  if(!logChannel) return;
 
  let leaveMember = new Discord.RichEmbed()
  .setTitle('**[غادر عضو]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_upper_left: غادر **${member.user.username}** From the server.\n\n**المستعمل:** <@${member.user.id}> (ID: ${member.user.id})`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(leaveMember);
});
 
 
// Voice Logs
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'اللوق');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
// Server Muted Voice
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[كتم الصوت]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**المستعمل:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**بواسطة:** <@${userID}> (ID: ${userID})\n**قناة:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }
// Server UnMuted Voice
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[إلغاء الصوت]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**المستعمل:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**بواسطة:** <@${userID}> (ID: ${userID})\n**قناة:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }
// Server Deafen Voice
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[صوت الصوت]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**المستعمل:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**بواسطة:** <@${userID}> (ID: ${userID})\n**قناة:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }
// Server UnDeafen Voice
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed()
            .setTitle('**[صوت غير مؤثر]**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**المستعمل:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**بواسطة:** <@${userID}> (ID: ${userID})\n**قناة:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv);
        }
    })
// Join Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.RichEmbed()
        .setTitle('**[انضم إلى غرفة الصوت]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_lower_right: بنجاح \`\`JOIN\`\` To Voice Channel.\n\n**قناة:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**المستعمل:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceJoin);
    }
// Leave Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[ترك غرفة الصوت]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_upper_left: بنجاح \`\`LEAVE\`\` From Voice Channel.\n\n**قناة:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**المستعمل:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
// Changed Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[تغيير صوت الغرفة]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:repeat: بنجاح \`\`CHANGED\`\` The Voice Channel.\n\n**من عند:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**إلى:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**المستعمل:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
});


client.on('message', async msg => {
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1] .replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
    if (command === `play`) {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
        }
 
        if (!permissions.has('EMBED_LINKS')) {
            return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **rl")
            }
 
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, msg, voiceChannel, true);
            }
            return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
        } else {
            try {
 
                var video = await youtube.getVideo(url);
 
            } catch (error) {
                try {
                                            var fast = {};
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join('\n')}`)
                    .setFooter(`${msg.guild.name}`)
                    msg.channel.sendEmbed(embed1).then(message =>{
 
                        message.delete(15000)
 
                    });
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 20000,
                            errors: ['time']
                        })
 
                        }catch(err) {
                        console.error(err);
                        return msg.channel.send('لم يتم إختيآر مقطع صوتي');
                        }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send(':x: لا يتوفر نتآئج بحث ');
                }
        }
 
            return handleVideo(video, msg, voiceChannel);
        }
    } else if (command === `skip`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
        serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
        return undefined;
    } else if (command === `stop`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
        return undefined;
    } else if (command === `vol`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
        if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
    } else if (command === `np`) {
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        const embedNP = new Discord.RichEmbed()
    .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
    } else if (command === `replay`) {
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        const embedNP = new Discord.RichEmbed()
    .setDescription(`سيتم اعاده تشغيل الفديو :**${serverQueue.songs[0].title}**`)
    msg.channel.send({embed: embedNP})
     return handleVideo(video, msg, msg.member.voiceChannel);
 
    } else if (command === `queue`) {
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        let index = 0;
        const embedqu = new Discord.RichEmbed()
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
        return msg.channel.sendEmbed(embedqu);
    } else if (command === `pause`) {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
        }
        return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    } else if (command === "resume") {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
        }
        return msg.channel.send('لا يوجد شيء حالي في العمل.');
    }
 
    return undefined;
async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`,
        time:`${video.duration.hours}:${video.duration.minutes}:${video.duration.seconds}`,
        eyad:`${video.thumbnails.high.url}`,
        best:`${video.channel.title}`,
        bees:`${video.raw.snippet.publishedAt}`,
        shahd:`${video.raw.kind}`,
        zg:`${video.raw.snippet.channelId}`,
        views:`${video.raw.views}`,
        like:`${video.raw.likeCount}`,
        dislike:`${video.raw.dislikeCount}`,
        hi:`${video.raw.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);
        queueConstruct.songs.push(song);
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
    }
    return undefined;
}
 
function play(guild, song) {
    const serverQueue = queue.get(guild.id);
 
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
        fetchVideoInfo(`${song.hi}`, function (err, fuck) {
  if (err) throw new Error(err);
  console.log(fuck);
      const yyyy = {}
  if(!yyyy[msg.guild.id]) yyyy[msg.guild.id] = {
    like: `${fuck.likeCount}`,
    dislike: `${fuck.dislikeCount}`
  }
    serverQueue.textChannel.send({embed : new Discord.RichEmbed()
  .setTitle(`**${fuck.title}**`)
  .setURL(fuck.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${fuck.datePublished}`, true)
  .addField('Views :' , `${fuck.views}`, true)
  .addField('Like👍 :' , `${fuck.likeCount}`, true)
  .addField('dislike👎 :' , `${fuck.dislikeCount}`, true)
  .addField('comments :' , `${fuck.commentCount}`, true)
    .setImage(`${song.eyad}`)
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
    .setColor('#ff0000')
    .setTimestamp()
    }).then(love => {
        love.react('👍').then(r=>{
        love.react('👎').then(r =>{
        love.react('🙌').then(r=> {
    let likee = (reaction, user) => reaction.emoji.name === '👍' && user.id === msg.author.id;
    let dislikee = (reaction, user) => reaction.emoji.name === '👎' && user.id === msg.author.id;
    let cnn = (reaction, user) => reaction.emoji.name === '🙌' && user.id === msg.author.id;
 
    let ll = love.createReactionCollector(likee , {max:5});
    let dd = love.createReactionCollector(dislikee , {max:5});
    let cn = love.createReactionCollector(cnn , {max:5});
 
            ll.on("collect", r => {
              yyyy[msg.guild.id].like++;
    love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${fuck.title}**`)
  .setURL(fuck.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${fuck.datePublished}`, true)
  .addField('Views :' , `${fuck.views}`, true)
  .addField('Like👍 :' , `${yyyy[msg.guild.id].like}`, true)
  .addField('dislike👎 :' , `${fuck.dislikeCount}`, true)
  .addField('comments :' , `${fuck.commentCount}`, true)
    .setImage(`${song.eyad}`)
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
    .setColor('#ff0000')
    .setTimestamp()
});
    })
 
    dd.on("collect", r => {
      yyyy[msg.guild.id].dislike++;
    love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${fuck.title}**`)
  .setURL(fuck.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${fuck.datePublished}`, true)
  .addField('Views :' , `${fuck.views}`, true)
  .addField('Like👍 :' , `${fuck.likeCount}`, true)
  .addField('dislike👎 :' , `${yyyy[msg.guild.id].dislike}`, true)
  .addField('comments :' , `${fuck.commentCount}`, true)
    .setImage(`${song.eyad}`)
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
    .setColor('#ff0000')
    .setTimestamp()
});
})
    cn.on("collect", r => {
    love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${fuck.title}**`)
  .setURL(fuck.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${fuck.datePublished}`, true)
  .addField('Views :' , `${fuck.views}`, true)
  .addField('Like👍 :' , `${fuck.likeCount}`, true)
  .addField('dislike👎 :' , `${fuck.dislikeCount}`, true)
  .addField('comments :' , `${fuck.commentCount}`, true)
    .setImage(`${song.eyad}`)
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
    .setColor('#ff0000')
    .setTimestamp()
});
})
})
})
})
})
})
}
});




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  



//bc

client.on("message", message => {
    if (message.content.startsWith("-obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`  عدد المستلمين `);
  message.delete();
  };
  });


//bc online جميع الحقوق محفوظه ل Ahmed_Mondo#1434


  

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\`   عدد المستلمين `); 
   message.delete(); 
  };     
  });


client.on('message', msg => {
   if(msg.content === "_السعودية") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇸🇦 🕌 الاذان في السعودية 🕌 🇸🇦")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502484545556316174/unknown.png")
msg.channel.sendEmbed(embed20).then(SA => {
   SA.react('🇸🇦').then(() => SA.react('🇸🇦'))    
})
}                      
 });

client.on('message', msg => {
   if(msg.content === "_مصر") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇪🇬 🕌 الاذان في مصر 🕌 🇪🇬")
.setImage("https://cdn.discordapp.com/attachments/501948394286350356/502486345537683456/unknown.png")
msg.channel.sendEmbed(embed20).then(M => {
M.react('🇪🇬').then(() => M.react('🇪🇬'))
})
   }
 });


client.on('message', msg => {
   if(msg.content === "_العراق") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇮🇶 🕌 الاذان في العراق 🕌 🇮🇶")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502494601525985280/unknown.png")
msg.channel.sendEmbed(embed20).then(I => {
I.react('🇮🇶').then(() => I.react('🇮🇶'))
})
                                    }
 });
client.on('message', msg => {
   if(msg.content === "_المغرب") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇲🇦 🕌 الاذان في المغرب 🕌🇲🇦 ")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502494027375968266/unknown.png")
msg.channel.sendEmbed(embed20).then(A => {
A.react('🇲🇦').then(() => A.react('🇲🇦'))
})   
}
 });



client.on('message', msg => {
   if(msg.content === "_سوريا") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇸🇾 🕌 الاذان في سوريا 🕌 🇸🇾")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502495763549388800/unknown.png")
msg.channel.sendEmbed(embed20).then(S => {
S.react('🇸🇾').then(() => S.react('🇸🇾'))
})   
}
 });

client.on('message', msg => {
   if(msg.content === "_الأردن") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇯🇴 🕌 الاذان في الأردن 🕌 🇯🇴")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502496095570624533/unknown.png")
msg.channel.sendEmbed(embed20).then(J => {
J.react('🇯🇴').then(() => J.react('🇯🇴'))
})
   }
 });

client.on('message', msg => {
   if(msg.content === "_تونس") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇹🇳 🕌 الاذان في تونس 🕌 🇹🇳")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502496873073082394/unknown.png")
msg.channel.sendEmbed(embed20).then(T => {
T.react('🇹🇳').then(() => T.react('🇹🇳'))
})   
}
 });

client.on('message', msg => {
   if(msg.content === "_فلسطين") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇵🇸 🕌 الاذان في فلسطين 🕌 🇵🇸")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502496873073082394/unknown.png")
msg.channel.sendEmbed(embed20).then(P => {
P.react('🇵🇸').then(() => P.react('🇵🇸'))
})   
}
 });

client.on('message', msg => {
   if(msg.content === "_قطر") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇶🇦 🕌 الاذان في قطر 🕌 🇶🇦")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502497346207219742/unknown.png")
msg.channel.sendEmbed(embed20).then(Q => {
Q.react('🇶🇦').then(() => Q.react('🇶🇦'))
})   
   }
 });

client.on('message', msg => {
   if(msg.content === "_البحرين") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇧🇭 🕌 الاذان في البحرين 🕌 🇧🇭")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502497608284241940/unknown.png")
msg.channel.sendEmbed(embed20).then(B => {
B.react('🇧🇭').then(() => B.react('🇧🇭'))
})   
   }
                                                
                                    
 });

client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});


client.on('message', message => {  
    if (message.author.bot) return; ///PxrBot Team
    if (message.content.startsWith(prefix + 'clear')) { 
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`** You don't have Premissions!**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(`** The number can't be more than **100** .**`).then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).then(msgs => {
    message.channel.send(`** Done , Deleted \`${msgs.size}\` messages.**`).then(messages => messages.delete(1000));
    })
  }
});  


client.on("message", message => {
let args = message.content.split(' ');
  if(args[0].toLowerCase() === (prefix + "server")) {
        let embed = new Discord.RichEmbed()
        .addField(`:id: Server ID:`, `${message.guild.id}`, true)
        .addField(`:calendar: Created on:`, `${moment(message.guild.createdAt).format(`D/M/YYYY h:mm`)} \n ${moment(message.guild.createdAt).locale("eg").fromNow()}`,true)
        .addField(`:crown: Owned by`, `${message.guild.owner.user} `,true) 
        .addField(`:busts_in_silhouette: Members [${message.guild.members.size}]`, `**${message.guild.members.filter(c => c.presence.status !== "offline").size}** Online`, true)
        .addField(`:speech_balloon: Channels [${message.guild.channels.size}]`,`**${message.guild.channels.filter(f => f.type === "text").size}** Text | **${message.guild.channels.filter(f => f.type === "voice").size}** Voice`,true)
        .addField(`:earth_africa: Others`, `**Region:** ${message.guild.region} \n **Verification level:** ${message.guild.verificationLevel}`, true)  
        .setThumbnail(`${message.guild.iconURL}`)
        .setColor(`black`)
        .setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`);
       
    message.channel.sendEmbed(embed);
    }

});
client.on('message', message =>{
  if(message.content === '-ping'){
let start = Date.now(); message.channel.send('pong').then(message => {
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});



client.on('message', async message => {
                  if(message.content.startsWith(prefix + "temp")) {
                    await message.channel.send("ارسل اسم الروم").then(e => {
                    let filter = m => m.author.id === message.author.id
                    let name = '';
                    let time = '';
                    let type = '';
                    let limit = '';
 
                   
                    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
                    .then(collected => {
                      name = collected.first().content
                      collected.first().delete()
 
 
 
                e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
                message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
                .then(co => {
                if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
                if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
                  time = co.first().content
                co.first().delete()
                  e.edit("ارسل نوع الروم text, voice")
                message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
                .then(col => {
                  type = col.first().content
                col.first().delete()
                e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
                message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
                .then(coll => {
                  if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
                    limit = coll.first().content
                coll.first().delete()
 
                  e.edit("جاري اعداد الغرفه الرجاء الانتظار...")
                  message.guild.createChannel(name, type).then(c => {
                    c.edit({
                      userLimit: limit
                    })
                    setTimeout(() => {
                      c.delete()
                      message.channel.send("تم انقضاء الوقت")
                    }, Math.floor(time*60000))
                   
                  })
                  e.edit("تم انشاء الغرفه استمتع")
 
                })
                })
                })
                })
                })
 
                  }
                })



client.on("message", message => {
if(message.content.startsWith(prefix + "vmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}vmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(true).then(() => {
message.channel.send(`Successfully Muted ${mnt} :+1:`)
}).catch(console.error);
}
if(message.content.startsWith(prefix + "unvmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}unvmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(false).then(() => {
message.channel.send(`Successfully Unmuted ${mnt} :+1:`)
}).catch(console.error);
}
});


client.on('message', message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + 'new')) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
  let log = message.guild.channels.find("name", "اللوق");
  let args = message.content.split(' ').slice(1).join(' ');
  let support = message.guild.roles.find("name","Helper");
  let ticketsStation = message.guild.channels.find("name", "TICKETS");
  let reason = message.content.split(" ").slice(1).join(" ");
  if(!reason) reason = 'NONE';
  const embed = new Discord.RichEmbed()
  .setColor("#36393e")
  .addField(`**Error :interrobang:**`, `This server doesn't have a \`Helper\` role made so the ticket won't be opened.`)
  .setTimestamp();
  if (!message.guild.roles.exists("name", "Helper")) return message.channel.send({ embed: embed });
  if(message.guild.channels.exists("name", `ticket-${message.author.username}`)) return message.channel.send(`You already have a ticket open :no_entry:`);
  if(!ticketsStation) return message.channel.send(`**Error! **:interrobang:\n please create \`category\` Called \`TICKETS\``)
  message.guild.createChannel(`ticket-` + message.author.username, "text").then(c => {
  c.setParent(ticketsStation);
  const done = new Discord.RichEmbed()
  .setColor(`GREEN`)
  .setTitle(`Ticket Created`)
  .setDescription(`Ticket : #${c.name}
  by :<@${message.author.id}>
  Reason : ${reason}`)
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033107635208193/563111847692337174.png`)
  .setFooter(message.author.tag)
  if(log) log.send(done)
  let role = message.guild.roles.find("name", "Helper");
  let role2 = message.guild.roles.find("name", "@everyone");
  c.overwritePermissions(role, {
  SEND_MESSAGES: true,
  READ_MESSAGES: true
  });
  c.overwritePermissions(role2, {
  SEND_MESSAGES: false,
  READ_MESSAGES: false
  });
                c.overwritePermissions(message.author, {
                    SEND_MESSAGES: true,
                    READ_MESSAGES: true
                });
message.channel.send(`**:white_check_mark: تم انشاء تذكرتك, #${c.name}.**`);
                /////////////
  const eembed = new Discord.RichEmbed()
  .setColor("#00ffd4")
  //.setThumbnail(message.author.avatarURL)
  .addField(`Your ticket has been created :white_check_mark:`, `<#${c.id}>`)
     .setFooter(`${client.user.tag} BY | ${dev_tag}`,client.user.displayAvatarURL);
  //////////////////
  message.channel.send({ embed: eembed });
  const embed = new Discord.RichEmbed()
  .setColor(0xCF40FA)
  .setThumbnail(message.author.avatarURL)
  .addField(`**Welcome**`, `<@${message.author.id}>`)
  .addField(`Our **__Support Team__** will be here soon to help.`, `** **`)
  .addField(`Reason :`, `${reason}`)
  .setFooter(`${client.user.tag} BY | ${dev_tag}`,client.user.displayAvatarURL)
  .setTimestamp();
  c.send({ embed: embed }).then
  c.send(`<@${message.author.id}>`).then(b=>{
    b.delete();
  })
  }) .catch();
    }
    if(message.content.startsWith(prefix + 'close')) {
       
      if(message.author.bot) return;
        if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`)
  let close = new Discord.RichEmbed()
  .addField(`type \`${prefix}close\` again to confirm`, `** **`)
  .setColor("#36393e");
  message.channel.sendEmbed(close) .then(m => {
  const filter = msg => msg.content.startsWith(prefix + 'close');
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return
  message.channel.awaitMessages(response => response.content === prefix + 'close', {
  max: 1,
  time: 20000,
  errors: ['time']
  })
  .then((collect) => {
  message.channel.delete();
  let Reason = message.content.split(" ").slice(1).join(" ");
  if(!Reason) Reason = 'NONE';
let closee = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`Ticket Closed`)
.setDescription(`Ticket : #${message.channel.name}
By : <@${message.author.id}>
Reason : ${Reason}`)
.setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109178712074/563111850162520077.png`)
.setFooter(message.author.tag)
let log = message.guild.channels.find("name", "اللوق");
if(log) log.send(closee)
  }) .catch(() => {
  m.delete()
  .then(message.channel.send('Ticket close timed out, the ticket was not closed')) .then((c) => {
  c.delete(4000);
  }) 
  })
  })     
    } if(message.content.startsWith(prefix + `multiclose`)) {
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('You don\'t have Permission **MANAGE_CHANNELS** to close all tickets');
      message.guild.channels.filter(c => c.name.toLowerCase().startsWith("ticket-")).forEach(channel => { channel.delete(); })
const ttt = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`**Done all Tickets has been closed :white_check_mark:**`,`** **`)
message.channel.send(ttt)
let log = message.guild.channels.find("name", "اللوق");
const rr = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`**all Tickets channels has been closed :white_check_mark:**`, `**by <@${message.author.id}>**`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588151961279397898/582096914376425501.png`)
.setTimestamp();
if(log) return log.send(rr)
//
} if(message.content.startsWith(prefix + `add`)) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission to do this`)
  if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`);
let member = message.mentions.members.first();
if(!member) return message.channel.send(`**Please mention the user :x:**`);
if(message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) return message.channel.send(`this member already in this ticket :rolling_eyes:`);
message.channel.overwritePermissions(member.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true });
message.channel.send(`**Done :white_check_mark:\nSuccessfully added <@${member.user.id}> to the ticket**`)
let tgt = new Discord.RichEmbed()
.setColor(`GREEN`)
.setAuthor(`Added member to a ticket`)
.setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109539160066/563111851165220885.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "اللوق");
if(log) return log.send(tgt);
} if(message.content.startsWith(prefix + `remove`)) {
  if(!message.channel.name.startsWith("ticket-")) {
      return message.channel.send(`this command only for the tickets`);
  }
  let member = message.mentions.members.first();
  if(!member || member.id === client.user.id) {
      return message.channel.send(`**Please mention the user :x:**`);
  }
  if(!message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) {
      return message.channel.send(`:x: **${member.user.tag}** is not in this ticket to remove them`);
  }
  message.channel.overwritePermissions(member.id, { SEND_MESSAGES: false, VIEW_CHANNEL: false, READ_MESSAGE_HISTORY: false });
  message.channel.send(`**Done :white_check_mark:\nSuccessfully removed \`${member.user.tag}\` from the ticket**`)
  let gtg = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`removed member from a ticket`)
.setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033111212949555/563111852352077886.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "اللوق");
if(log) return log.send(gtg);
  }
 
  });

client.on('message', message => { 
    const mm = message.mentions.members.first() || message.member;
    if(message.content.startsWith(prefix + "avatar")){
        const embed = new Discord.RichEmbed()
        .setAuthor(mm.user.tag, mm.user.avatarURL)
        .setTitle("Avatar Link")
        .setURL(mm.user.avatarURL)
        .setImage(mm.user.avatarURL)
        .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed);
    }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});





client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__You Dont Have Permissions__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Remove it From The User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Mention Role To Remove it From The User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: Success Removed Role [ '+role1.name+' ] From [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ]  From All**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Humans**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark:Success Gived Rank [ '+role1.name+' ] To [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: Success Gived All Rank [ '+role1.name+' ]**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Bots Rank [ '+role1.name+' ] **');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Humans Rank [ '+role1.name+' ]**');
		} 
	} 
});

const developers = ["477867461195202574" , "304992596575518721" , "575731198752718859"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on("message", message => {
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "server image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`${message.guild.name}`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)

   message.channel.send({embed});
      }
  });

client.on('message', message => {
  if (message.content.toLowerCase().startsWith(prefix+ `top servers`))  {

const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
message.channel.send(`**Top 10 Servers : **\n1. **${top[0].name}**: ${top[0].memberCount} \n2. **${top[1].name}**: ${top[1].memberCount}.\n3. **${top[2].name}**: ${top[2].memberCount}.\n4. **${top[3].name}**: ${top[3].memberCount}.\n5. **${top[4].name}**: ${top[4].memberCount}.\n6. **${top[5].name}**: ${top[5].memberCount}.\n7. **${top[6].name}**: ${top[6].memberCount}.\n8. **${top[7].name}**: ${top[7].memberCount}.\n9. **${top[8].name}**: ${top[8].memberCount}.\n10. **${top[9].name}**: ${top[9].memberCount} .`)
}
  });

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose:
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `)
}).catch(console.error)
})


 
var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
 

client.on('message',async message => {
  if(message.content.startsWith(prefix + "voiceonline")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});




client.on('message',async message => {
if(message.content.startsWith( prefix + 'invites')) { 
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;
       
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            let inviteCode = personalInvites.reduce((p, v) => v.code);
            let possibleInvites = [['Total de membros recrutados:']];
            possibleInvites.push([inviteCount, inviteCode]);
            let user = message.mentions.users.first() || message.author;
            let mem = message.guild.member(user);
            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
           
            var inviteInfo = new Discord.RichEmbed()
            .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
            .setThumbnail(client.user.avatarURL)
            .addField('**عدد الدعوات للسيرفر**', `**?** [ شخص **${Number(inviteCount)}** ]`)
            .addField('**تاريخ انضمامك لسيرفرنا **', `**?** [ منذ  **${daysJoined.toFixed(0)}** يوم ]`)
            .addField('**رابط الدعوة الذي دخلت منه**', `**?** [ **https://discord.gg/${inviteCode || 'Zm2U6we'}** ]`)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(Tag, Avatar)
           
            message.channel.send(inviteInfo);
            });
    };
});

const deves = ["477867461195202574" , "304992596575518721" , "575731198752718859"]
client.on('message', message =>{
  var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if(message.content.startsWith(prefix + 'add')) {
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.channel.send('**Please type the emoji ID after the command!**')
    if(args.length < "18" || args.length > "18" || isNaN(args)) return message.channel.send(`**This emoji Can't be Found :x:**`)
    message.guild.createEmoji(`https://cdn.discordapp.com/emojis/${args}.png`, `${args}`).catch(mstry => {
     return message.channel.send(`**This emoji Can't be Found :x:**`)
    })
    message.channel.send(`**Successfully Added The Emoji ✅**`)
  }
});


  let pics = JSON.parse(fs.readFileSync('./pics.json', 'utf8'));
                 client.on('message', message => {
                     var prefix = "-"
                         if (!message.channel.guild) return;
                 
                  let room = message.content.split(" ").slice(1);
                  let findroom = message.guild.channels.find('name', `${room}`)
                  if(message.content.startsWith(prefix + "setMedia")) {
                      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
                      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
                      if(!room) return message.channel.send('Please Type The Channel Name')
                      if(!findroom) return message.channel.send('لا يمكن العثور على هذه الروم')
                      let embed = new Discord.RichEmbed()
                      .setTitle('**:innocent:  لقد اصبح هذا الروم مخصص لي الصور والمقاطع**')
                      .addField('Channel:', `${room}`)
                      .addField('Requested By', `${message.author}`)
                      .setFooter(`${client.user.username}`)
             message.channel.sendEmbed(embed)
                      pics[message.guild.id] = {
                      channel: room,
                      onoff: 'On'
                      },
                      fs.writeFile("./pics.json", JSON.stringify(pics), (err) => {
                      if (err) console.error(err)
                     
                      })
                    }})
                       
                client.on('message', message => {
                 
                  if(message.content.startsWith(prefix + "toggleMedia")) {
                          if (!message.channel.guild) return;
                 
                      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
                      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
                      if(!pics[message.guild.id]) pics[message.guild.id] = {
                        onoff: 'Off'
                      }
                        if(pics[message.guild.id].onoff === 'Off') return [message.channel.send(`**The MediaCode Is __𝐎𝐍__ !**`), pics[message.guild.id].onoff = 'On']
                        if(pics[message.guild.id].onoff === 'On') return [message.channel.send(`**The MediaCode Is __𝐎𝐅𝐅__ !**`), pics[message.guild.id].onoff = 'Off']
                        fs.writeFile("./pics.json", JSON.stringify(pics), (err) => {
                          if (err) console.error(err)
                         
                          })
                        }
                       
                      })
                     
                             client.on('message', message => {
                                       if (!message.channel.guild) return;
                  if(message.author.bot) return;
                 
                        if(!pics[message.guild.id]) pics[message.guild.id] = {
                        onoff: 'Off'
                      }
                        if(pics[message.guild.id].onoff === 'Off') return;
                 
                  if(message.channel.name !== `${pics[message.guild.id].channel}`) return;
                 
                   let types = [
                    'jpg',
                    'jpeg',
                   'gif',
                    'png',
                     'mp4'
                  ]
                   if (message.attachments.size <= 0) {
                    message.delete();
            message.channel.send(`**🖼️ | ${message.author}, this room for pictures and videos only.**`)
                    .then(msg => {
                      setTimeout(() => {
                        msg.delete();
                      }, 5000)
                  })
                  return;
                }
                   if(message.attachments.size >= 1) {
                    let filename = message.attachments.first().filename
                    console.log(filename);
                    if(!types.some( type => filename.endsWith(type) )) {
                      message.delete();
            message.channel.send(`**🖼️ | ${message.author}, this room for pictures and videos only.**`)
                      .then(msg => {
                        setTimeout(() => {
                          msg.delete();
                        }, 5000)
                      })
                      .catch(err => {
                        console.error(err);
                    });
                    }
                  }
                 })
                 
                client.on('message', message => {
                  if(message.content.startsWith(prefix + "infoMedia")) {
                let embed = new Discord.RichEmbed()
            .addField('❯ Info:', `→ \`${pics[message.guild.id].onoff}\``)
            .addField('❯ Room: ', `→ \`${pics[message.guild.id].channel}\``)
            .addField('❯ By: ', `→ \`${message.author}\``)
                .setThumbnail(message.author.avatarURL)
                .setFooter(`${client.user.username}`)
                message.channel.sendEmbed(embed)
                }})





client.on('message', async message =>{
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
 
  
      
      

var EpicEdiTeD = {};
client.on("message", function(message){
if (message.content.startsWith("-rank")) {
    if (!EpicEdiTeD[message.author.id]) {
        EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0}
      

    }
     var mentionned = message.mentions.users.first();
 
      var epic;
      if(mentionned){
          var epic = mentionned;
      } else {
          var epic = message.author;
 
      }
 
   
    var CulLevel = Math.floor(0.50 * Math.sqrt(EpicEdiTeD[message.author.id].Xp +1));
    if (CulLevel > EpicEdiTeD[message.author.id].Level) {EpicEdiTeD[message.author.id].Level +=CulLevel}
    let edited = new Discord.RichEmbed()
    .setColor("Random")
    .addField("الأسم :", message.author.tag)
    .addField("الليفل :", EpicEdiTeD[message.author.id].Level)
    .addField("الأكس بي :",Math.floor(EpicEdiTeD[message.author.id].Xp))
    message.channel.send(edited);
}
if (!EpicEdiTeD[message.author.id]) {
    EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
    }
 
EpicEdiTeD[message.author.id].Xp+= 0.50;
EpicEdiTeD[message.author.id].Money+= 0.50;

 
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'ip')) {
   const args = message.content.split(" ")
   const ip = args[1]
   const port = args[2]
      if(!ip) return message.channel.send("** Write Server IP **");
      if(!port){
          let embed = new Discord.RichEmbed()
          .setColor('#642EFE')
          .setThumbnail(`https://api.minetools.eu/favicon/${ip}/25565`) 
          .addField("📜 Server NIP",`${ip}`,true)
          .addField("🌐 Server Port",`No PorT`)
          .setImage(`http://status.mclive.eu/${ip}/${ip}/25565/banner.png`) 
          .setFooter(`PrxBot`)
          .setTimestamp()
      message.channel.send(embed)
      }
      if(port){
          let rembed = new Discord.RichEmbed()
          .setColor('#642EFE')
          .setThumbnail(`https://api.minetools.eu/favicon/${ip}/${port}`) 
          .addField("📜 Server NIP",`${ip}`,true)
          .addField("🌐 Server Port",`${port}`, true)
          .setImage(`http://status.mclive.eu/${ip}/${ip}/${port}/banner.png`) 
          .setFooter(`KingBoT`)
                  .setTimestamp()
      message.channel.send(rembed)
      }
      
  }})



client.on('message', async(message) => {
    let args = message.content.split(' ');
    if(args[0] == `${prefix}kick`){
        if(!message.guild || message.author.bot) return undefined;
        if(!message.member.hasPermission('KICK_MEMBERS') || !message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return;
        let user = message.guild.members.get(args[1]) || message.mentions.members.first();
        let reason = args.slice(2).join(" ");
        if(!user) return message.channel.send(`**Usage:** ${prefix}kick @member [reason]`);
        if(!reason) reason = 'No reason provided.';
        if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You cant kick **${user.user.username}** because his role highest than your role!`);
        if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I cant kick **${user.user.username}** because his role highest than my role!`);
        if(!message.guild.member(user.user).kickable) return message.channel.send(`I cant kick **${user.user.username}**.`);
        await message.guild.member(user).kick(reason, user);
        await message.channel.send(`**${user.user.username}** has been kicked from the server! \`\`${reason}\`\``);
     }
 });








client.on('message',  async  message  =>  {
      let  user  =  message.mentions.users.first();
      let  reason  =  message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix  +  'warn'))  {
      message.delete();
      if(!message.member.hasPermission('MUTE_MEMBERS')) return;
      if(!user)  return  message.channel.send("**-Mention an Member**")
      if(!reason)  return  message.channel.send("**-Type Reason**")
      let  reportembed  =  new  Discord.RichEmbed()
      .setTitle(`**New  Warned User !**`)
    .addField("**-Warned  User:**",  `[${user}] ID [${user.id}]`) 
    .addField('**-Warned  By:**',`[${message.author.tag}] ID [${message.author.id}]`)  
    .addField('**-Reason:**',  `[${reason}]`,  true)
    .addField("**-Warned  in:**",`[${message.channel.name}]`)
    .addField("**-Time & Date:**",`[${message.createdAt}]`)
    .setFooter("Infinty")
  .setColor("#f3ae10")
    let incidentchannel = message.guild.channels.find(`name`, "اللوق");
    if(!incidentchannel) return message.channel.send("**Can't find Warns Channel! To Make Type \`-setwarns\`To Make**");
    incidentchannel.send(reportembed);
    message.channel.send(`** ${user} has been warned !:warning:**`).then(msg  =>  msg.delete(3000));
    user.send(`** You are has been warned in ${message.guild.name} reason: ${reason} :warning:**`)
    }
    })





client.on('message',async message => {
     
     const arraySort = require('array-sort');
const table = require('table');
if (message.content.toLowerCase().startsWith(prefix + 'banlist')){
     let ban = await message.guild.fetchBans().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view bans!');
    });

    ban = ban.array();
    let users = message.guild.fetchBans().id;
    message.channel.send(`**${message.guild.name} Bans List :**`)
    ban.forEach(function(ban) {
         message.channel.send(`${ban} (${ban.id})`)
    })
}
 });

client.on('message', message => {
  if(message.content.split(' ')[0] == `${prefix}ban`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission.');
      if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send('I don\'t have permission.');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send(`Usage: ${prefix}ban @mention reason`);
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send('You can\'t ban yourself!');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You can't ban **${user.user.tag}** because his role highest than your role!`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I can't ban **${user.user.tag}** because his role highest than my role!`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`You can't ban **${user.user.tag}** because he have Administration permissions!`);
      if(!message.guild.member(user.user).bannable) return message.channel.send(`I can't ban **${user.user.tag}**.`);
      message.guild.member(user).ban(reason, user);
      message.channel.send(`Done :+1:, I Banned ${user.user.username} from the server!\nReason: \`\`${reason}\`\``);
    }
});

client.on('message', async(message) => {
    let args = message.content.split(' ');
    if(args[0] == `${prefix}kick`){
        if(!message.guild || message.author.bot) return undefined;
        if(!message.member.hasPermission('KICK_MEMBERS') || !message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return;
        let user = message.guild.members.get(args[1]) || message.mentions.members.first();
        let reason = args.slice(2).join(" ");
        if(!user) return message.channel.send(`**Usage:** ${prefix}kick @member [reason]`);
        if(!reason) reason = 'No reason provided.';
        if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You cant kick **${user.user.username}** because his role highest than your role!`);
        if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I cant kick **${user.user.username}** because his role highest than my role!`);
        if(!message.guild.member(user.user).kickable) return message.channel.send(`I cant kick **${user.user.username}**.`);
        await message.guild.member(user).kick(reason, user);
        await message.channel.send(`**${user.user.username}** has been kicked from the server! \`\`${reason}\`\``);
     }
 });

client.on('guildCreate', guild => {
    const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('Click Here To Invite Bot')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=599110073628885002&permissions=8&scope=bot')
.setDescription(`**
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
client.channels.get("599202177931804685").sendEmbed(embed)
});



client.on('guildDelete', guild => {
    const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('Click Here To Invite Bot')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=599110073628885002&permissions=8&scope=bot')
.setDescription(`**
Server name: __${guild.name}__
Server owner: __${guild.owner}__    
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
client.channels.get("599202177931804685").sendEmbed(embed) 
});








client.on('message',  async  message  =>  {
      let  user  =  message.mentions.users.first();
      let  reason  =  message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix  +  'warn'))  {
      message.delete();
      if(!message.member.hasPermission('MUTE_MEMBERS')) return;
      if(!user)  return  message.channel.send("**-Mention an Member**")
      if(!reason)  return  message.channel.send("**-Type Reason**")
      let  reportembed  =  new  Discord.RichEmbed()
      .setTitle(`**New  Warned User !**`)
    .addField("**-Warned  User:**",  `[${user}] ID [${user.id}]`) 
    .addField('**-Warned  By:**',`[${message.author.tag}] ID [${message.author.id}]`)  
    .addField('**-Reason:**',  `[${reason}]`,  true)
    .addField("**-Warned  in:**",`[${message.channel.name}]`)
    .addField("**-Time & Date:**",`[${message.createdAt}]`)
    .setFooter("Infinty")
  .setColor("#f3ae10")
    let incidentchannel = message.guild.channels.find(`name`, "اللوق");
    if(!incidentchannel) return message.channel.send("**Can't find Warns Channel! To Make Type \`-setwarns\`To Make**");
    incidentchannel.send(reportembed);
    message.channel.send(`** ${user} has been warned !:warning:**`).then(msg  =>  msg.delete(3000));
    user.send(`** You are has been warned in ${message.guild.name} reason: ${reason} :warning:**`)
    }
    })





client.on('message',async message => {
     
     const arraySort = require('array-sort');
const table = require('table');
if (message.content.toLowerCase().startsWith(prefix + 'banlist')){
     let ban = await message.guild.fetchBans().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view bans!');
    });

    ban = ban.array();
    let users = message.guild.fetchBans().id;
    message.channel.send(`**${message.guild.name} Bans List :**`)
    ban.forEach(function(ban) {
         message.channel.send(`${ban} (${ban.id})`)
    })
}
 });






client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``bot info`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[ - ]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .addField('``Developed by ``' , `[ Ahmed_Mondo#1434 , aboodx#8135 , 24Hassan#001 ]` , true)
                  .setFooter('PrxBot')
    })
}
});



 ///// this Work back to Mihawk

///// credits 

var copy = "~"

const cool = [];//كريدت
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 200;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send('**:heavy_multiplication_x:| لا تقدر تحول بسالب خطا **');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    message.channel.send(`**${mention.username}, your :money_with_wings: balance is **
**$${credits[mention.id].credits}** `);
  }
 
  }
  if(message.content.startsWith(prefix + "daily")) {//ديلي 
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
 
      var number = `${one}${two}${three}${four}`;
 
      message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
          message.channel.send(`**:atm: | \`${daily}\`, you received your :yen: daily credits!*`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
      
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
      message.channel.send(`**:atm: | \`${daily}\`, you received your :yen: daily credits!*`);
    }
    cool.unshift(message.author.id);
 
    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
    }, ms("864000000")); // Dont Touch
  }
});




// حقوق Me Codes
client.on('message', message => {
    if (message.content.startsWith("-armor")) {
if(!message.channel.guild) return;
              let armor = message.content.split(' ').slice(1).join(' ');
              if (!armor) return message.channel.send("**من فضلك ضع إسمك**");
              var link = (`https://minotar.net/armor/bust/${armor}/100.png`);
        const embed = new Discord.RichEmbed()
                           .addField('Done!', "Your McSkin Armor:")
        .setColor(000000)
        .setImage(`${link}`)
      message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content.startsWith("-down")) {
if(!message.channel.guild) return;
              let down = message.content.split(' ').slice(1).join(' ');
              if (!down) return message.channel.send("**من فضلك ضع الإسم**");
              var link = (`https://minotar.net/download/${down} إضغط على الرابط وسوف يتم تحميل السكن`);
        const embed = new Discord.RichEmbed()
                           .addField('Done!', "Your McSkin Download:")
                           .addField("Url:", `${link}`)
        .setColor(000000)
      message.channel.sendEmbed(embed);
    }
});
 
client.on('message', message => {
    if (message.content.startsWith("-skin")) { 
if(!message.channel.guild) return;
              let skin = message.content.split(' ').slice(1).join(' ');
              if (!skin) return message.channel.send("**من فضلك ضع إسمك**");
              var link = (`https://minotar.net/armor/body/${skin}/100.png`);
        const embed = new Discord.RichEmbed()
                           .addField('Done!', "Your McSkin:")
        .setColor(00000)
        .setImage(`${link}`)
      message.channel.sendEmbed(embed);
    }
});
 
client.on('message', message => {
    if (message.content.startsWith("-head")) {
if(!message.channel.guild) return;
              let head = message.content.split(' ').slice(1).join(' ');
              if (!head) return message.channel.send("**من فضلك ضع إسمك**");
              var link = (`https://minotar.net/helm/${head}/100.png`);
        const embed = new Discord.RichEmbed()
                           .addField('Done!', "Your McSkin Head:")
        .setColor(000000)
        .setImage(`${link}`)
      message.channel.sendEmbed(embed);
    }
});
client.login(process.env.BOT_TOKEN)
