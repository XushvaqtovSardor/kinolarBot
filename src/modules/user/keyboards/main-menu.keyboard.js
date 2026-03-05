"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuKeyboard = void 0;
var grammy_1 = require("grammy");
var MainMenuKeyboard = /** @class */ (function () {
    function MainMenuKeyboard() {
    }
    MainMenuKeyboard.getMainMenu = function (isPremium, isPremiumBanned) {
        if (isPremium === void 0) { isPremium = false; }
        if (isPremiumBanned === void 0) { isPremiumBanned = false; }
        var keyboard = new grammy_1.Keyboard().text("🔍 Kino kodi bo'yicha qidirish");
        if (!isPremium && !isPremiumBanned) {
            keyboard.text('💎 Premium sotib olish');
        }
        keyboard.row().text('ℹ️ Bot haqida').text('📞 Aloqa');
        return { reply_markup: keyboard.resized() };
    };
    MainMenuKeyboard.getMainMenuWithBack = function (isPremium, isPremiumBanned) {
        if (isPremium === void 0) { isPremium = false; }
        if (isPremiumBanned === void 0) { isPremiumBanned = false; }
        var keyboard = new grammy_1.Keyboard().text("🔍 Kino kodi bo'yicha qidirish");
        if (!isPremium && !isPremiumBanned) {
            keyboard.text('💎 Premium sotib olish');
        }
        keyboard.row().text('ℹ️ Bot haqida').text('📞 Aloqa');
        keyboard.row().text('🔙 Orqaga');
        return { reply_markup: keyboard.resized() };
    };
    MainMenuKeyboard.getLanguageMenu = function (texts) {
        var keyboard = new grammy_1.InlineKeyboard()
            .text("🇺🇿 O'zbekcha", 'lang_uz')
            .text('🇷🇺 Русский', 'lang_ru')
            .row()
            .text('🇬🇧 English', 'lang_en');
        return { reply_markup: keyboard };
    };
    MainMenuKeyboard.getPremiumMenu = function (texts) {
        var keyboard = new grammy_1.InlineKeyboard()
            .text(texts.monthlyPremium, 'buy_premium_1')
            .text(texts.threeMonthPremium, 'buy_premium_3')
            .row()
            .text(texts.sixMonthPremium, 'buy_premium_6')
            .text(texts.yearlyPremium, 'buy_premium_12');
        return { reply_markup: keyboard };
    };
    MainMenuKeyboard.getBackButton = function (texts) {
        var keyboard = new grammy_1.Keyboard().text(texts.backButton);
        return { reply_markup: keyboard.resized() };
    };
    MainMenuKeyboard.removeKeyboard = function () {
        return { reply_markup: { remove_keyboard: true } };
    };
    return MainMenuKeyboard;
}());
exports.MainMenuKeyboard = MainMenuKeyboard;
