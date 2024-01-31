import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import YoutubeDownloader from "ytdl-core";

(function main() {
  dotenv.config();
  const token = String.raw`${process.env.API_TOKEN}`;
  const bot = new TelegramBot(token, { polling: true });

  bot.on("message", (message) => {
    const chatId = message.chat.id;
    bot.sendMessage(chatId, "Received your message");
  });
})();
