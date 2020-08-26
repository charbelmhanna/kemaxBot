const Discord = require('discord.js');

require('dotenv').config();


const client = new Discord.Client();
const TOKEN  = process.env.BOT_TOKEN;
const NAME   = process.env.DEV_NAME.toLowerCase();
const DESC   = process.env.DEV_DESC;
const L_P    = process.env.LATEST_PROJECT_NAME;

client.once('ready', () => {
    console.log('Kemax is ready !');
});


client.login(TOKEN)
    .then(function () {
        console.log('KEMAX ACCESS GRANTED !')
    }, function (err) {
        console.log('BOT IS INACTIVE ')
        client.destroy()
});



//Get today's date using the JavaScript Date object.
var ourDate = new Date();

//Change it so that it is 30 days in the past.
var pastDate = ourDate.getDate() - 30;
ourDate.setDate(pastDate);



// Create an event listener for messages
client.on('message', async message => {


    // If the message is "what is my avatar"
    if (message.content.toLowerCase() === 'what is my avatar') {
        // Send the user's avatar URL
        message.reply(message.author.displayAvatarURL());
         console.log('Avatar displayed');
    }

     if (message.content.toLowerCase() === 'who is ' + NAME) {
        await message.reply(NAME.toUpperCase() + ' ' + DESC);
        console.log('Info message sent');
     }

      if (message.content.toLowerCase() === 'i need support') {
          // Send the user's avatar URL
          await message.reply('Please send us your request, we will be happy to help you !');
          console.log('Support message sent');
      }

      if(message.content.toLowerCase() === 'latest project') {
          // latest project terminated 
          await message.reply('My latest project was completed on ' + ' ' +  L_P  + ' ' + ourDate);
          //Log the date to our web console.
          console.log('LATEST PROJECT DATE ' + ourDate);

      }

       if (message.content.toLowerCase() === '!commands') {
           // latest project terminated 
          message.channel.send({
              embed: {
                  color: 3447003,
                  author: {
                      name      : client.user.username,
                      icon_url  : client.user.avatarURL
                  },
                  title: "COMMANDS",
                  url: "http://charbelm.com",
                  description: "This is a test embed to showcase what they look like and what they can do.",
                  fields: [{
                          name: "What is my avatar",
                          value: "Display user avatar"
                      },
                      {
                          name: "who is " + NAME,
                          value: "Display details about the developer"
                      },
                      {
                          name: "i need support",
                          value: "Information message for the user, how he could contact support team"
                      },
                      {
                          name: "!support",
                          value: "Display random message"
                      }
                  ],
                  timestamp: new Date(),
                  footer: {
                      icon_url: client.user.avatarURL,
                      text: "© Charbel Mhanna"
                  }
              }
          });
       }


    const supported = 
                    [
                        'Do you need to be contacted ?',
                        'Do you have any type of issue ?',
                        'Can we call you ?',
                        'Can you try harder ?'
                    ];


      let sup = /^\!support\s.+/i;

    
      if(sup.exec(message.content)){
          const i = Math.floor(Math.random()*supported.length);
          const reply = supported[i];
          await message.reply(reply);
      }

});


