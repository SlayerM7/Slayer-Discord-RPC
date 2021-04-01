const Discord = require('discord-rpc')
const client = new Discord.Client({transport: 'ipc'})

async function go() {
  client.on('ready', async() => {
    await client.setActivity({
      buttons: [{label: 'Click here', url: 'https://google.com'},{label: 'Ok', url: 'https://google.com/'}],
      details: "This is the description",
      largeImageKey: 'rpc_icon',
      largeImageText: 'Text shown when hovering'
    })
    console.log('Rich presence is enabled..')
  })

  await client.login({clientId: '827224080986013747'})
}
go()

// Credit tp fusion terror for the code
