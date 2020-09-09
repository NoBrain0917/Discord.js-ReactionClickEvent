const discord = require("discord.js");
const client = new discord.Client();
const TOKEN = "YOUR TOKEN";

let messageReaction = {};

client.on("messageReactionAdd", function(reaction, user){
    if(!user.bot)messageReaction[reaction.message.id]!=null? messageReaction[reaction.message.id].onClick(reaction, user, messageReaction[reaction.message.id].message):null;
});

client.on("messageReactionRemove", function(reaction, user){
    if(!user.bot)messageReaction[reaction.message.id]!=null? messageReaction[reaction.message.id].onClick(reaction, user, messageReaction[reaction.message.id].message):null;
});

client.on("message", message => {
    messageReaction.send = function(str, arr, callback) {
        try {
            if(typeof callback != "function") return "It is not a function.";
            if(!Array.isArray(arr)) return "It is not an array.";
            message.channel.send(str).then((message)=>{
                arr.forEach((val)=>{
                    message.react(val).catch((e)=>{});
                })
                if(callback!=null) {
                    messageReaction[message.id]==null? messageReaction[message.id] = {}:null;
                    messageReaction[message.id].message = message;
                    messageReaction[message.id].onClick = callback;
                }
            }).catch((e)=>{});
        } catch (e){}
    }
});

client.login(TOKEN);
