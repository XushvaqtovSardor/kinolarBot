"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkupHelper = void 0;
var grammy_1 = require("grammy");
var MarkupHelper = /** @class */ (function () {
    function MarkupHelper() {
    }
    MarkupHelper.inlineKeyboard = function (buttons) {
        var keyboard = new grammy_1.InlineKeyboard();
        buttons.forEach(function (row, rowIndex) {
            row.forEach(function (btn, btnIndex) {
                if (btn.url) {
                    keyboard.url(btn.text, btn.url);
                }
                else if (btn.callback_data) {
                    keyboard.text(btn.text, btn.callback_data);
                }
                if (btnIndex < row.length - 1) {
                }
            });
            if (rowIndex < buttons.length - 1) {
                keyboard.row();
            }
        });
        return { reply_markup: keyboard };
    };
    MarkupHelper.keyboard = function (buttons) {
        var keyboard = new grammy_1.Keyboard();
        buttons.forEach(function (row, rowIndex) {
            row.forEach(function (btn) {
                var text = typeof btn === 'string' ? btn : btn.text;
                keyboard.text(text);
            });
            if (rowIndex < buttons.length - 1) {
                keyboard.row();
            }
        });
        return { reply_markup: keyboard.resized() };
    };
    MarkupHelper.button = {
        callback: function (text, data) { return ({
            text: text,
            callback_data: data,
        }); },
        url: function (text, url) { return ({
            text: text,
            url: url,
        }); },
    };
    return MarkupHelper;
}());
exports.MarkupHelper = MarkupHelper;
