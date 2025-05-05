const TelegramBot = require('node-telegram-bot-api');
const TonWeb = require('tonweb');

// bot settings
const token = '7920281:AAH5pgayEjsdG';
const bot = new TelegramBot(token, { polling: true });
const userId = '452';  

// TON settings
const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC'));
const walletAddress = 'UQCl4QWiGGNbQzcTm3gXUf';

const cliffSum = 0.9;
let alert = '';


function checkCondition() {
    
    setInterval(async () => {
        
        let req = await checkWalletBalance(walletAddress);
        console.log(req);

        // notify
        if (req <= cliffSum) {
            bot.sendMessage(userId, `${alert}`); 
        }

    }, 1800000);  // check condition interval: 60 min
}

// start
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Alert Informer');
    
    checkCondition();
});

async function checkWalletBalance(walletAddress) {
    try {
        
        const balance = await tonweb.provider.getBalance(walletAddress);
        const tonBalance = Number(balance) / 1e9;

        alert = `Ballance <R wallet> ${walletAddress}: ${tonBalance} TON`;
        return tonBalance;
    } catch (error) {
        console.error('ERROR check ballance:', error);
        return null;
    }
}