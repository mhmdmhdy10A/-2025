const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: process.env.MC_HOST || 'emerald.magmanode.com',
    port: parseInt(process.env.MC_PORT) ||33815,
    username: process.env.MC_USER || 'AFK_Bot_24ph'
  });

  bot.on('spawn', () => {
    console.log('✅ Bot joined the server');
    bot.chat('سلام! البوت شغال 24 ساعة.');
  });

  bot.on('end', () => {
    console.log('❌ Bot disconnected, reconnecting in 10 seconds...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => console.error('⚠️ Error:', err));
}

createBot();
