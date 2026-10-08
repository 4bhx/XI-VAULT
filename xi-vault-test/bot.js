require("dotenv").config();

const { Bot, InlineKeyboard } = require("grammy");

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is missing from .env");
}

const bot = new Bot(BOT_TOKEN);

// ==========================================
// START MENU
// ==========================================

bot.command("start", async (ctx) => {
  const keyboard = new InlineKeyboard()
    .text("📦 MATERIALS", "materials")
    .text("🎬 XI EDITZ", "xieditz")
    .row()
    .text("📖 HELP", "help")
    .text("ℹ️ ABOUT", "about");

  await ctx.reply(
    `⚡ XI VAULT

Your creative resource vault.

━━━━━━━━━━━━━━━━━━

📦 EDITING APPS
Premium & useful editing applications

🎛 PRESETS
XMLs, shakes, transitions & presets

🎬 PROJECT FILES
Project files, templates & resources

🔊 AUDIO & SFX
SFX, sounds & audio resources

🧩 PLUGINS
Plugins, tools & extensions

✨ PREMIUM DROPS
Exclusive resources & new releases

━━━━━━━━━━━━━━━━━━

💡 Type /help to explore the vault.

🎬 @XIEDITZ
⛏️ @XIMATERIALS`,
    {
      reply_markup: keyboard,
    }
  );
});

// ==========================================
// HELP
// ==========================================

bot.command("help", async (ctx) => {
  await sendHelp(ctx);
});

// ==========================================
// ABOUT
// ==========================================

bot.command("about", async (ctx) => {
  await sendAbout(ctx);
});

// ==========================================
// CATEGORY COMMANDS
// ==========================================

bot.command("apps", async (ctx) => {
  await sendCategory(
    ctx,
    "📦 EDITING APPS",
    "Editing applications will be added here soon."
  );
});

bot.command("presets", async (ctx) => {
  await sendCategory(
    ctx,
    "🎛 PRESETS",
    "XMLs, shakes, transitions & presets will be added here soon."
  );
});

bot.command("projects", async (ctx) => {
  await sendCategory(
    ctx,
    "🎬 PROJECT FILES",
    "Project files & templates will be added here soon."
  );
});

bot.command("sfx", async (ctx) => {
  await sendCategory(
    ctx,
    "🔊 AUDIO & SFX",
    "SFX and audio resources will be added here soon."
  );
});

bot.command("plugins", async (ctx) => {
  await sendCategory(
    ctx,
    "🧩 PLUGINS",
    "Plugins, tools & extensions will be added here soon."
  );
});

bot.command("premium", async (ctx) => {
  await sendCategory(
    ctx,
    "✨ PREMIUM DROPS",
    "Exclusive premium resources will be added here soon."
  );
});

// ==========================================
// BUTTON HANDLERS
// ==========================================

bot.callbackQuery("materials", async (ctx) => {
  await ctx.answerCallbackQuery();

  await ctx.reply(
    `📦 XI VAULT — MATERIALS

Choose a category:

📦 /apps
🎛 /presets
🎬 /projects
🔊 /sfx
🧩 /plugins
✨ /premium`
  );
});

bot.callbackQuery("xieditz", async (ctx) => {
  await ctx.answerCallbackQuery();

  await ctx.reply(
    `🎬 XI EDITZ

Editing • VFX • Motion • Creative Resources

Follow:
@XIEDITZ`
  );
});

bot.callbackQuery("help", async (ctx) => {
  await ctx.answerCallbackQuery();
  await sendHelp(ctx);
});

bot.callbackQuery("about", async (ctx) => {
  await ctx.answerCallbackQuery();
  await sendAbout(ctx);
});

// ==========================================
// HELP FUNCTION
// ==========================================

async function sendHelp(ctx) {
  await ctx.reply(
    `📖 XI VAULT — HELP

Everything you need to navigate the vault.

━━━━━━━━━━━━━━━━━━

📦 MATERIALS

/apps
Editing applications

/presets
Presets & XMLs

/projects
Project files & templates

/sfx
SFX & audio resources

/plugins
Plugins & tools

/premium
Premium drops

━━━━━━━━━━━━━━━━━━

🔎 QUICK ACCESS

Once a material is available, use
its command directly.

Example:

/amz

━━━━━━━━━━━━━━━━━━

🛠 GENERAL

/start
Open XI VAULT

/help
Show this guide

/about
About XI VAULT

━━━━━━━━━━━━━━━━━━

🎬 @XIEDITZ
⛏️ @XIMATERIALS`
  );
}

// ==========================================
// ABOUT FUNCTION
// ==========================================

async function sendAbout(ctx) {
  await ctx.reply(
    `ℹ️ ABOUT XI VAULT

XI VAULT is a curated resource hub
for editors and creators.

━━━━━━━━━━━━━━━━━━

🎬 Editing Apps
🎛 Presets & XMLs
🎬 Project Files
🔊 SFX & Audio
🧩 Plugins & Tools
✨ Premium Resources

━━━━━━━━━━━━━━━━━━

Built for creators.
Made for better edits.

🎬 @XIEDITZ
⛏️ @XIMATERIALS`
  );
}

// ==========================================
// CATEGORY FUNCTION
// ==========================================

async function sendCategory(ctx, title, message) {
  await ctx.reply(
    `${title}

━━━━━━━━━━━━━━━━━━

${message}

━━━━━━━━━━━━━━━━━━

Use /help to explore XI VAULT.`
  );
}

// ==========================================
// ERROR HANDLING
// ==========================================

bot.catch((err) => {
  console.error("❌ Bot error:", err);
});

// ==========================================
// START BOT
// ==========================================

console.log("🚀 Starting XI VAULT...");

bot.start({
  onStart: (botInfo) => {
    console.log(`✅ XI VAULT is running as @${botInfo.username}`);
  },
});