// this code only works on val.town
import fetch from "npm:node-fetch";
import TelegramBot from "npm:node-telegram-bot-api";

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: false });
const facuChatId = "678713487";

export const bootupFetch = async () => {
  const url = process.env.ENDPOINT;
  bot.sendMessage(facuChatId, "Booting up...");
  const response = await fetch(url);
  if (response.ok) {
    bot.sendMessage(facuChatId, "Render app is booted up!");
  } else {
    bot.sendMessage(
      facuChatId,
      `Something went wrong booting up :( \n
			${response.text}`
    );
  }
};
