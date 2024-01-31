"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
(function main() {
    dotenv_1.default.config();
    const token = String.raw `${process.env.API_TOKEN}`;
    const bot = new node_telegram_bot_api_1.default(token, { polling: true });
    bot.on("message", (message) => {
        const chatId = message.chat.id;
        bot.sendMessage(chatId, "Received your message");
    });
})();
