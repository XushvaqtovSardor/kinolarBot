"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminKeyboard = void 0;
var grammy_1 = require("grammy");
var client_1 = require("@prisma/client");
var AdminKeyboard = /** @class */ (function () {
    function AdminKeyboard() {
    }
    AdminKeyboard.getAdminMainMenu = function (role) {
        var keyboard = new grammy_1.Keyboard()
            .text('🎬 Kino yuklash')
            .text('📺 Serial yuklash')
            .row();
        // ADMIN roli: Faqat content yuklash, kanal qo'shish va e'lon berish
        if (role === client_1.AdminRole.ADMIN) {
            keyboard
                .text('📁 Fieldlar')
                .text('💾 Database kanallar')
                .row()
                .text('📣 Reklama yuborish')
                .row();
        }
        // MANAGER roli: Ko'proq huquqlar + majburiy kanallar
        else if (role === client_1.AdminRole.MANAGER) {
            keyboard
                .text('📊 Statistika')
                .text('📁 Fieldlar')
                .row()
                .text('📢 Majburiy kanallar')
                .text('💾 Database kanallar')
                .row()
                .text('📣 Reklama yuborish')
                .text("🗑️ Kontent o'chirish")
                .row()
                .text('🌐 Web Panel')
                .row();
        }
        // SUPERADMIN roli: Hamma huquqlar
        else if (role === client_1.AdminRole.SUPERADMIN) {
            keyboard
                .text('📊 Statistika')
                .text('📁 Fieldlar')
                .row()
                .text('📢 Majburiy kanallar')
                .text('💾 Database kanallar')
                .row()
                .text('👥 Adminlar')
                .text('📣 Reklama yuborish')
                .row()
                .text("💳 To'lovlar")
                .text('⚙️ Sozlamalar')
                .row()
                .text("🗑️ Kontent o'chirish")
                .row()
                .text('🌐 Web Panel')
                .row();
        }
        keyboard.text('🔙 Orqaga');
        return { reply_markup: keyboard.resized() };
    };
    AdminKeyboard.getFieldManagementMenu = function () {
        var keyboard = new grammy_1.Keyboard()
            .text("➕ Field qo'shish")
            .text("📋 Fieldlar ro'yxati")
            .row()
            .text('🔙 Orqaga');
        return { reply_markup: keyboard.resized() };
    };
    AdminKeyboard.getChannelManagementMenu = function () {
        var keyboard = new grammy_1.Keyboard()
            .text("➕ Kanal qo'shish")
            .text("📋 Kanallar ro'yxati")
            .row()
            .text('🔙 Orqaga');
        return { reply_markup: keyboard.resized() };
    };
    AdminKeyboard.getPaymentManagementMenu = function () {
        var keyboard = new grammy_1.Keyboard()
            .text("📥 Yangi to'lovlar")
            .text('✅ Tasdiqlangan')
            .row()
            .text('❌ Rad etilgan')
            .text("📊 To'lov statistikasi")
            .row()
            .text('🚫 Premium banned users')
            .row()
            .text('🔙 Orqaga');
        return { reply_markup: keyboard.resized() };
    };
    AdminKeyboard.getCancelButton = function () {
        var keyboard = new grammy_1.Keyboard().text('❌ Bekor qilish');
        return { reply_markup: keyboard.resized() };
    };
    AdminKeyboard.getConfirmKeyboard = function (itemId, action) {
        var keyboard = new grammy_1.InlineKeyboard()
            .text('✅ Ha', "".concat(action, "_yes_").concat(itemId))
            .text("❌ Yo'q", "".concat(action, "_no_").concat(itemId));
        return { reply_markup: keyboard };
    };
    return AdminKeyboard;
}());
exports.AdminKeyboard = AdminKeyboard;
