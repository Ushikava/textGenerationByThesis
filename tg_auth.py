from telethon import TelegramClient, events

# Данные для авторизации
api_id = 123
api_hash = '123'
bot_token = '123'

# Авторизация и создание сессионного файла
bot = TelegramClient('bot', api_id, api_hash).start(bot_token=bot_token)


@bot.on(events.NewMessage(pattern='(?i)/start'))
async def start(event):
    sender = await event.get_sender()
    SENDER = sender.id
    text = "Parser Bot 🤖 Ready\n" +\
        "\"<b>/testing</b>\" → Random command!\n"+\
        "\"<b>/parsing</b>\" → Parsing command\n"
    await bot.send_message(SENDER, text, parse_mode="HTML")


@bot.on(events.NewMessage(pattern='(?i)/parsing'))
async def get_messages(event):
    sender = await event.get_sender()
    SENDER = sender.id
    last_message = (await bot.get_messages(-1002206061600, 1))[0]
    await bot.send_message(SENDER, last_message, parse_mode="HTML")


if __name__ == '__main__':
    print("bot started")
    bot.run_until_disconnected()
