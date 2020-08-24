const Discord = require('discord.js');

require('dotenv').config();


const client = new Discord.Client();
const TOKEN  = process.env.BOT_TOKEN;
const NAME   = process.env.DEV_NAME.toLowerCase();
const DESC   = process.env.DEV_DESC;

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

    const supported = ['Do you need to be contacted ?',
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


