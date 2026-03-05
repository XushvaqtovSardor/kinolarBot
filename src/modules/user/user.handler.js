"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHandler = void 0;
var common_1 = require("@nestjs/common");
var grammy_1 = require("grammy");
var main_menu_keyboard_1 = require("./keyboards/main-menu.keyboard");
var client_1 = require("@prisma/client");
var UserHandler = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var UserHandler = _classThis = /** @class */ (function () {
        function UserHandler_1(userService, movieService, serialService, episodeService, movieEpisodeService, channelService, channelStatusService, premiumService, paymentService, watchHistoryService, languageService, fieldService, settingsService, adminService, grammyBot, prisma) {
            this.userService = userService;
            this.movieService = movieService;
            this.serialService = serialService;
            this.episodeService = episodeService;
            this.movieEpisodeService = movieEpisodeService;
            this.channelService = channelService;
            this.channelStatusService = channelStatusService;
            this.premiumService = premiumService;
            this.paymentService = paymentService;
            this.watchHistoryService = watchHistoryService;
            this.languageService = languageService;
            this.fieldService = fieldService;
            this.settingsService = settingsService;
            this.adminService = adminService;
            this.grammyBot = grammyBot;
            this.prisma = prisma;
            this.logger = new common_1.Logger(UserHandler.name);
            this.waitingForReceipt = new Map();
        }
        UserHandler_1.prototype.onModuleInit = function () {
            try {
                this.registerHandlers();
            }
            catch (error) {
                this.logger.error("[UserHandler.onModuleInit] Failed to initialize - ".concat(error.message), error.stack);
                throw error;
            }
        };
        UserHandler_1.prototype.registerHandlers = function () {
            var _this = this;
            var bot = this.grammyBot.bot;
            bot.use(function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
                var hasTelegramPremium, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(ctx.from && ctx.from.id)) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            hasTelegramPremium = ctx.from.is_premium || false;
                            return [4 /*yield*/, this.prisma.user.updateMany({
                                    where: { telegramId: String(ctx.from.id) },
                                    data: { hasTelegramPremium: hasTelegramPremium },
                                })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            this.logger.error("[UserHandler.registerHandlers.middleware] Failed to update premium status - User: ".concat(ctx.from.id, ", Error: ").concat(error_1.message));
                            return [3 /*break*/, 4];
                        case 4: return [4 /*yield*/, next()];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            bot.command('start', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_2;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handleStart(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_2 = _b.sent();
                            this.logger.error("[UserHandler./start] Error in start command - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_2.message), error_2.stack);
                            return [4 /*yield*/, ctx
                                    .reply("❌ Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.")
                                    .catch(function (e) { var _a; return _this.logger.error("[UserHandler./start] Failed to send error reply - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(e.message)); })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears("🔍 Kino kodi bo'yicha qidirish", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_3;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handleSearch(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_3 = _b.sent();
                            this.logger.error("[UserHandler.searchHandler] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_3.message));
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.').catch(function () { })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('💎 Premium sotib olish', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_4;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.showPremium(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_4 = _b.sent();
                            this.logger.error("[UserHandler.premiumHandler] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_4.message));
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.').catch(function () { })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('ℹ️ Bot haqida', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_5;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.showAbout(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_5 = _b.sent();
                            this.logger.error("[UserHandler.aboutHandler] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_5.message));
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.').catch(function () { })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('📞 Aloqa', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_6;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.showContact(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_6 = _b.sent();
                            this.logger.error("[UserHandler.contactHandler] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_6.message));
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.').catch(function () { })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('🔙 Orqaga', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_7;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handleBack(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_7 = _b.sent();
                            this.logger.error("[UserHandler.backHandler] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_7.message));
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.').catch(function () { })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^movie_\d+$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_8;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handleMovieCallback(ctx)];
                        case 1:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_8 = _c.sent();
                            this.logger.error("[UserHandler.movieCallback] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Data: ").concat((_b = ctx.callbackQuery) === null || _b === void 0 ? void 0 : _b.data, ", Error: ").concat(error_8.message), error_8.stack);
                            return [4 /*yield*/, ctx
                                    .answerCallbackQuery({ text: '❌ Xatolik yuz berdi.' })
                                    .catch(function () { })];
                        case 3:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^serial_\d+$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_9;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handleSerialCallback(ctx)];
                        case 1:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_9 = _c.sent();
                            this.logger.error("[UserHandler.serialCallback] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Data: ").concat((_b = ctx.callbackQuery) === null || _b === void 0 ? void 0 : _b.data, ", Error: ").concat(error_9.message));
                            return [4 /*yield*/, ctx
                                    .answerCallbackQuery({ text: '❌ Xatolik yuz berdi.' })
                                    .catch(function () { })];
                        case 3:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^episode_(\d+)_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_10;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handleEpisodeCallback(ctx)];
                        case 1:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_10 = _c.sent();
                            this.logger.error("[UserHandler.episodeCallback] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Data: ").concat((_b = ctx.callbackQuery) === null || _b === void 0 ? void 0 : _b.data, ", Error: ").concat(error_10.message));
                            return [4 /*yield*/, ctx
                                    .answerCallbackQuery({ text: '❌ Xatolik yuz berdi.' })
                                    .catch(function () { })];
                        case 3:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^movie_episode_(\d+)_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_11;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handleMovieEpisodeCallback(ctx)];
                        case 1:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_11 = _c.sent();
                            this.logger.error("[UserHandler.movieEpisodeCallback] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Data: ").concat((_b = ctx.callbackQuery) === null || _b === void 0 ? void 0 : _b.data, ", Error: ").concat(error_11.message));
                            return [4 /*yield*/, ctx
                                    .answerCallbackQuery({ text: '❌ Xatolik yuz berdi.' })
                                    .catch(function () { })];
                        case 3:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^field_channel_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_12;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handleFieldChannelCallback(ctx)];
                        case 1:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_12 = _c.sent();
                            this.logger.error("[UserHandler.fieldChannelCallback] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Data: ").concat((_b = ctx.callbackQuery) === null || _b === void 0 ? void 0 : _b.data, ", Error: ").concat(error_12.message));
                            return [4 /*yield*/, ctx
                                    .answerCallbackQuery({ text: '❌ Xatolik yuz berdi.' })
                                    .catch(function () { })];
                        case 3:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^check_subscription$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_13;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handleCheckSubscription(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_13 = _b.sent();
                            this.logger.error("[UserHandler.checkSubscriptionCallback] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_13.message));
                            return [4 /*yield*/, ctx
                                    .answerCallbackQuery({ text: '❌ Xatolik yuz berdi.' })
                                    .catch(function () { })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^request_join_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_14;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handleRequestJoin(ctx)];
                        case 1:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_14 = _c.sent();
                            this.logger.error("[UserHandler.requestJoinCallback] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Data: ").concat((_b = ctx.callbackQuery) === null || _b === void 0 ? void 0 : _b.data, ", Error: ").concat(error_14.message));
                            return [4 /*yield*/, ctx
                                    .answerCallbackQuery({ text: '❌ Xatolik yuz berdi.' })
                                    .catch(function () { })];
                        case 3:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            // External kanallar URL button sifatida yaratiladi, callback handler kerak emas
            bot.callbackQuery(/^show_premium$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_15;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.showPremium(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_15 = _b.sent();
                            this.logger.error("[UserHandler.showPremiumCallback] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_15.message));
                            return [4 /*yield*/, ctx
                                    .answerCallbackQuery({ text: '❌ Xatolik yuz berdi.' })
                                    .catch(function () { })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^back_to_main$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_16;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handleBackCallback(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_16 = _b.sent();
                            this.logger.error("[UserHandler.backCallback] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_16.message));
                            return [4 /*yield*/, ctx
                                    .answerCallbackQuery({ text: '❌ Xatolik yuz berdi.' })
                                    .catch(function () { })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^buy_premium_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_17;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handlePremiumPurchase(ctx)];
                        case 1:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_17 = _c.sent();
                            this.logger.error("[UserHandler.premiumPurchaseCallback] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Data: ").concat((_b = ctx.callbackQuery) === null || _b === void 0 ? void 0 : _b.data, ", Error: ").concat(error_17.message));
                            return [4 /*yield*/, ctx
                                    .answerCallbackQuery({ text: '❌ Xatolik yuz berdi.' })
                                    .catch(function () { })];
                        case 3:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^upload_receipt$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_18;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handleUploadReceipt(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_18 = _b.sent();
                            this.logger.error("[UserHandler.uploadReceiptCallback] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_18.message));
                            return [4 /*yield*/, ctx
                                    .answerCallbackQuery({ text: '❌ Xatolik yuz berdi.' })
                                    .catch(function () { })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.on('inline_query', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_19;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.handleInlineQuery(ctx)];
                        case 1:
                            _c.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_19 = _c.sent();
                            this.logger.error("[UserHandler.inlineQuery] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Query: ").concat((_b = ctx.inlineQuery) === null || _b === void 0 ? void 0 : _b.query, ", Error: ").concat(error_19.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.on('chat_join_request', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_20;
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _e.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.handleJoinRequest(ctx)];
                        case 1:
                            _e.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_20 = _e.sent();
                            this.logger.error("[UserHandler.joinRequest] Error - Chat: ".concat((_b = (_a = ctx.chatJoinRequest) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.id, ", User: ").concat((_d = (_c = ctx.chatJoinRequest) === null || _c === void 0 ? void 0 : _c.from) === null || _d === void 0 ? void 0 : _d.id, ", Error: ").concat(error_20.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.on('chat_member', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_21;
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _e.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.handleChatMemberUpdate(ctx)];
                        case 1:
                            _e.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_21 = _e.sent();
                            this.logger.error("[UserHandler.chatMember] Error - Chat: ".concat((_b = (_a = ctx.chatMember) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.id, ", User: ").concat((_d = (_c = ctx.chatMember) === null || _c === void 0 ? void 0 : _c.from) === null || _d === void 0 ? void 0 : _d.id, ", Error: ").concat(error_21.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.on('my_chat_member', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_22;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.handleChatMemberUpdate(ctx)];
                        case 1:
                            _c.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_22 = _c.sent();
                            this.logger.error("[UserHandler.myChatMember] Error - Chat: ".concat((_b = (_a = ctx.myChatMember) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.id, ", Error: ").concat(error_22.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.on('message:photo', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_23;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.handlePhotoMessage(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_23 = _b.sent();
                            this.logger.error("[UserHandler.photoMessage] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_23.message));
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.').catch(function () { })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.use(function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
                var error_24;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 5, , 6]);
                            if (!(ctx.message && 'text' in ctx.message)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.handleTextMessage(ctx)];
                        case 1:
                            _d.sent();
                            return [2 /*return*/];
                        case 2: return [4 /*yield*/, next()];
                        case 3:
                            _d.sent();
                            _d.label = 4;
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            error_24 = _d.sent();
                            this.logger.error("[UserHandler.textMessage] Error - User: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Text: ").concat((_c = (_b = ctx.message) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.substring(0, 50), ", Error: ").concat(error_24.message), error_24.stack);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); });
        };
        UserHandler_1.prototype.handleStart = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var payload, hasTelegramPremium, user, premiumStatus, isPremium, admin, isAdmin, hasSubscription, code, code, welcomeMessage, error_25;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 16, , 17]);
                            payload = ctx.match;
                            hasTelegramPremium = ctx.from.is_premium || false;
                            return [4 /*yield*/, this.userService.findOrCreate(String(ctx.from.id), {
                                    firstName: ctx.from.first_name || '',
                                    lastName: ctx.from.last_name || '',
                                    username: ctx.from.username || '',
                                    languageCode: ctx.from.language_code || 'uz',
                                })];
                        case 2:
                            user = _b.sent();
                            if (!user.isBlocked) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply('🚫 Siz botdan foydalanish huquqidan mahrum etilgansiz.\n\n' +
                                    "Sana: ".concat(((_a = user.blockedAt) === null || _a === void 0 ? void 0 : _a.toLocaleString('uz-UZ')) || "Noma'lum"))];
                        case 3:
                            _b.sent();
                            return [2 /*return*/];
                        case 4: return [4 /*yield*/, this.prisma.user.update({
                                where: { id: user.id },
                                data: { hasTelegramPremium: hasTelegramPremium },
                            })];
                        case 5:
                            _b.sent();
                            return [4 /*yield*/, this.premiumService.checkPremiumStatus(user.id)];
                        case 6:
                            premiumStatus = _b.sent();
                            isPremium = premiumStatus.isPremium && !premiumStatus.isExpired;
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 7:
                            admin = _b.sent();
                            isAdmin = !!admin;
                            if (!(!isPremium && !isAdmin)) return [3 /*break*/, 9];
                            return [4 /*yield*/, this.checkSubscription(ctx, 0, 'start')];
                        case 8:
                            hasSubscription = _b.sent();
                            if (!hasSubscription) {
                                return [2 /*return*/];
                            }
                            _b.label = 9;
                        case 9:
                            if (!(typeof payload === 'string' && payload.length > 0)) return [3 /*break*/, 14];
                            if (!payload.startsWith('s')) return [3 /*break*/, 12];
                            code = parseInt(payload.substring(1));
                            if (!!isNaN(code)) return [3 /*break*/, 11];
                            return [4 /*yield*/, this.sendSerialToUser(ctx, code)];
                        case 10:
                            _b.sent();
                            return [2 /*return*/];
                        case 11: return [3 /*break*/, 14];
                        case 12:
                            code = parseInt(payload);
                            if (!!isNaN(code)) return [3 /*break*/, 14];
                            return [4 /*yield*/, this.sendMovieToUser(ctx, code)];
                        case 13:
                            _b.sent();
                            return [2 /*return*/];
                        case 14:
                            welcomeMessage = "\uD83D\uDC4B Assalomu alaykum, ".concat(ctx.from.first_name, " botimizga xush kelibsiz.\n\n\u270D\uD83C\uDFFB Kino kodini yuboring.").trim();
                            return [4 /*yield*/, ctx.reply(welcomeMessage, main_menu_keyboard_1.MainMenuKeyboard.getMainMenu(isPremium, user.isPremiumBanned))];
                        case 15:
                            _b.sent();
                            return [3 /*break*/, 17];
                        case 16:
                            error_25 = _b.sent();
                            this.logger.error("[UserHandler.handleStart] Error - User: ".concat(ctx.from.id, ", Error: ").concat(error_25.message), error_25.stack);
                            throw error_25;
                        case 17: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.showMovies = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var fields, message, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fieldService.findAll()];
                        case 1:
                            fields = _a.sent();
                            if (!(fields.length === 0)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Hozircha kinolar yo'q.")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            message = "🎬 **Kino bo'limlari:**\n\n";
                            message += "Qaysi bo'limdan kino ko'rmoqchisiz?\n";
                            keyboard = new grammy_1.InlineKeyboard();
                            fields.forEach(function (field) {
                                keyboard.text(field.name, "field_".concat(field.id)).row();
                            });
                            keyboard.text('🔙 Orqaga', 'back_to_main');
                            return [4 /*yield*/, ctx.reply(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.showSerials = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ctx.reply("📺 Seriallar bo'limi ishlab chiqilmoqda...")];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleSearch = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.reply('🔍 **Qidirish**\n\n' +
                                    'Kino yoki serial kodini kiriting:\n' +
                                    'Masalan: 12345', { parse_mode: 'Markdown' })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.showAbout = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var user, fields, emptyKeyboard, message, keyboard, buttonsInRow;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.userService.findByTelegramId(String(ctx.from.id))];
                        case 1:
                            user = _a.sent();
                            return [4 /*yield*/, this.fieldService.findAll()];
                        case 2:
                            fields = _a.sent();
                            if (!(fields.length === 0)) return [3 /*break*/, 4];
                            emptyKeyboard = new grammy_1.InlineKeyboard().text('🔙 Orqaga', 'back_to_main');
                            return [4 /*yield*/, ctx.reply('ℹ️ **Bot haqida**\n\n' +
                                    'Bu bot orqali minglab kino va seriallarni tomosha qilishingiz mumkin.\n\n' +
                                    '🎬 Kino va seriallar har kuni yangilanadi\n' +
                                    '📱 Mobil va kompyuterda ishlaydi\n' +
                                    "💎 Premium obuna bilan reklama yo'q\n\n" +
                                    "❌ Hozircha field kanallar yo'q.", {
                                    parse_mode: 'Markdown',
                                    reply_markup: emptyKeyboard,
                                })];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4:
                            message = 'ℹ️ **Bot haqida**\n\n';
                            message +=
                                'Bu bot orqali minglab kino va seriallarni tomosha qilishingiz mumkin.\n\n';
                            message += "📁 **Field kanallar ro'yxati:**\n\n";
                            keyboard = new grammy_1.InlineKeyboard();
                            buttonsInRow = 0;
                            fields.forEach(function (field, index) {
                                message += "".concat(index + 1, ". ").concat(field.name, "\n");
                                keyboard.text("".concat(index + 1), "field_channel_".concat(field.id));
                                buttonsInRow++;
                                if (buttonsInRow === 5) {
                                    keyboard.row();
                                    buttonsInRow = 0;
                                }
                            });
                            keyboard.row().text('🔙 Orqaga', 'back_to_main');
                            return [4 /*yield*/, ctx.reply(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.showFieldChannels = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var fields, message, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fieldService.findAll()];
                        case 1:
                            fields = _a.sent();
                            if (!(fields.length === 0)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Hozircha field kanallar yo'q.")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            message = "📁 **Field kanallar ro'yxati:**\n\n";
                            message += "Qaysi field kanaliga o'tmoqchisiz?\n\n";
                            keyboard = new grammy_1.InlineKeyboard();
                            fields.forEach(function (field, index) {
                                message += "".concat(index + 1, ". ").concat(field.name, "\n");
                                keyboard.text("".concat(index + 1), "field_channel_".concat(field.id));
                                if ((index + 1) % 5 === 0)
                                    keyboard.row();
                            });
                            if (fields.length % 5 !== 0)
                                keyboard.row();
                            keyboard.text('🔙 Orqaga', 'back_to_main');
                            return [4 /*yield*/, ctx.reply(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.showPremium = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var user, premiumSettings, message, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.prisma.user.findUnique({
                                    where: { telegramId: String(ctx.from.id) },
                                })];
                        case 1:
                            user = _a.sent();
                            if (!(user === null || user === void 0 ? void 0 : user.isPremiumBanned)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("🚫 Sizda Premium sotib olish imkoniyati yo'q.\n\n" +
                                    "Sabab: Yolg'on to'lov ma'lumotlaridan foydalanganingiz uchun bloklangansiz.\n\n" +
                                    'ℹ️ Blokni faqat admin ochishi mumkin.')];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            if (!ctx.callbackQuery) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5: return [4 /*yield*/, this.premiumService.getSettings()];
                        case 6:
                            premiumSettings = _a.sent();
                            message = "\n\uD83D\uDC8E **Premium obuna**\n\nPremium bilan:\n\u2705 Reklama yo'q\n\u2705 Majburiy kanallarga obuna bo'lmasdan tomosha qiling\n\u2705 Barcha kinolar ochiq\n\u2705 Yangi kinolar birinchi bo'lib\n\n\uD83D\uDCB0 **Narxlar:**\n\u251C 1 oy: ".concat(premiumSettings.monthlyPrice.toLocaleString(), " ").concat(premiumSettings.currency, "\n\u251C 3 oy: ").concat(premiumSettings.threeMonthPrice.toLocaleString(), " ").concat(premiumSettings.currency, "\n\u251C 6 oy: ").concat(premiumSettings.sixMonthPrice.toLocaleString(), " ").concat(premiumSettings.currency, "\n\u2514 1 yil: ").concat(premiumSettings.yearlyPrice.toLocaleString(), " ").concat(premiumSettings.currency, "\n\nQaysi muddatga obuna bo'lmoqchisiz?\n    ").trim();
                            keyboard = new grammy_1.InlineKeyboard()
                                .text('1 oy', 'buy_premium_1')
                                .text('3 oy', 'buy_premium_3')
                                .row()
                                .text('6 oy', 'buy_premium_6')
                                .text('1 yil', 'buy_premium_12')
                                .row()
                                .text('🔙 Orqaga', 'back_to_main');
                            if (!ctx.callbackQuery) return [3 /*break*/, 8];
                            return [4 /*yield*/, ctx.editMessageText(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 7:
                            _a.sent();
                            return [3 /*break*/, 10];
                        case 8: return [4 /*yield*/, ctx.reply(message, {
                                parse_mode: 'Markdown',
                                reply_markup: keyboard,
                            })];
                        case 9:
                            _a.sent();
                            _a.label = 10;
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handlePremiumPurchase = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var user, months, premiumSettings, price, duration, botUsername, paymeUrl, message, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.callbackQuery || !('data' in ctx.callbackQuery))
                                return [2 /*return*/];
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.prisma.user.findUnique({
                                    where: { telegramId: String(ctx.from.id) },
                                })];
                        case 1:
                            user = _a.sent();
                            if (!(user === null || user === void 0 ? void 0 : user.isPremiumBanned)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "🚫 Sizda Premium sotib olish imkoniyati yo'q",
                                    show_alert: true,
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            months = parseInt(ctx.callbackQuery.data.replace('buy_premium_', ''));
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.premiumService.getSettings()];
                        case 5:
                            premiumSettings = _a.sent();
                            price = premiumSettings.monthlyPrice;
                            duration = 30;
                            switch (months) {
                                case 1:
                                    price = premiumSettings.monthlyPrice;
                                    duration = 30;
                                    break;
                                case 3:
                                    price = premiumSettings.threeMonthPrice;
                                    duration = 90;
                                    break;
                                case 6:
                                    price = premiumSettings.sixMonthPrice;
                                    duration = 180;
                                    break;
                                case 12:
                                    price = premiumSettings.yearlyPrice;
                                    duration = 365;
                                    break;
                            }
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 6:
                            botUsername = (_a.sent()).username;
                            paymeUrl = this.generatePaymeUrl(ctx.from.id, price, duration, botUsername);
                            message = "\n\uD83D\uDCB3 **To'lov ma'lumotlari**\n\n\uD83D\uDCE6 Obuna: ".concat(months, " oy\n\uD83D\uDCB0 Summa: ").concat(price.toLocaleString(), " ").concat(premiumSettings.currency, "\n\n\uD83D\uDCDD **To'lov usuli:**\n\n1\uFE0F\u20E3 **Payme orqali:**\nQuyidagi tugmani bosib to'lovni amalga oshiring.\n\n2\uFE0F\u20E3 **Kartadan kartaga:**\n\uD83D\uDCB3 Karta: ").concat(premiumSettings.cardNumber, "\n\uD83D\uDC64 Egasi: ").concat(premiumSettings.cardHolder, "\n\nTo'lov qilgandan keyin chekni botga yuboring.\n    ").trim();
                            keyboard = new grammy_1.InlineKeyboard()
                                .url("💳 Payme orqali to'lash", paymeUrl)
                                .row()
                                .text('📸 Chek yuborish', 'upload_receipt')
                                .row()
                                .text('🔙 Orqaga', 'show_premium');
                            return [4 /*yield*/, ctx.reply(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 7:
                            _a.sent();
                            this.waitingForReceipt.set(ctx.from.id, {
                                amount: price,
                                duration: duration,
                                months: months,
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleUploadReceipt = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.callbackQuery || !ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, ctx.reply('📸 **Chekni yuborish**\n\n' +
                                    "To'lov chekini rasm sifatida yuboring.\n\n" +
                                    "💡 Chek aniq va tushunarli bo'lishi kerak.", { parse_mode: 'Markdown' })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handlePhotoMessage = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var userId, paymentInfo, photo, fileId, user, payment, error_26;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from || !ctx.message || !('photo' in ctx.message))
                                return [2 /*return*/];
                            userId = ctx.from.id;
                            paymentInfo = this.waitingForReceipt.get(userId);
                            if (!paymentInfo) {
                                return [2 /*return*/];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 8, , 10]);
                            photo = ctx.message.photo[ctx.message.photo.length - 1];
                            fileId = photo.file_id;
                            return [4 /*yield*/, this.userService.findByTelegramId(String(userId))];
                        case 2:
                            user = _a.sent();
                            if (!!user) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply('❌ Foydalanuvchi topilmadi.')];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4: return [4 /*yield*/, this.paymentService.create(user.id, paymentInfo.amount, fileId, paymentInfo.duration)];
                        case 5:
                            payment = _a.sent();
                            this.waitingForReceipt.delete(userId);
                            return [4 /*yield*/, ctx.reply('✅ **Chek qabul qilindi!**\n\n' +
                                    "\uD83D\uDCDD To'lov ID: ".concat(payment.id, "\n") +
                                    "\uD83D\uDCB0 Summa: ".concat(paymentInfo.amount.toLocaleString(), " UZS\n") +
                                    "\u23F1 Muddati: ".concat(paymentInfo.months, " oy\n\n") +
                                    "⏳ Chekingiz ko'rib chiqilmoqda. Tez orada javob beramiz!", { parse_mode: 'Markdown' })];
                        case 6:
                            _a.sent();
                            return [4 /*yield*/, this.notifyAdminsNewPayment(payment, user, paymentInfo)];
                        case 7:
                            _a.sent();
                            return [3 /*break*/, 10];
                        case 8:
                            error_26 = _a.sent();
                            this.logger.error("[UserHandler.handlePhotoMessage] Error processing receipt - User: ".concat(ctx.from.id, ", Error: ").concat(error_26.message), error_26.stack);
                            return [4 /*yield*/, ctx.reply("❌ Chekni qayta ishlashda xatolik yuz berdi. Iltimos qayta urinib ko'ring.")];
                        case 9:
                            _a.sent();
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.notifyAdminsNewPayment = function (payment, user, paymentInfo) {
            return __awaiter(this, void 0, void 0, function () {
                var admins, message, keyboard, _i, admins_1, admin, error_27, error_28;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 8, , 9]);
                            return [4 /*yield*/, this.adminService.findAll()];
                        case 1:
                            admins = _a.sent();
                            message = "\n\uD83D\uDD14 **Yangi to'lov!**\n\n\uD83D\uDC64 Foydalanuvchi: ".concat(user.firstName).concat(user.lastName ? ' ' + user.lastName : '', "\n\uD83C\uDD94 Telegram ID: ").concat(user.telegramId, "\n\uD83D\uDCDD Username: @").concat(user.username || "yo'q", "\n\n\uD83D\uDCB0 Summa: ").concat(paymentInfo.amount.toLocaleString(), " UZS\n\u23F1 Muddati: ").concat(paymentInfo.months, " oy (").concat(paymentInfo.duration, " kun)\n\uD83C\uDD94 Payment ID: ").concat(payment.id, "\n      ").trim();
                            keyboard = new grammy_1.InlineKeyboard()
                                .text('✅ Tasdiqlash', "approve_payment_".concat(payment.id))
                                .text('❌ Rad etish', "reject_payment_".concat(payment.id));
                            _i = 0, admins_1 = admins;
                            _a.label = 2;
                        case 2:
                            if (!(_i < admins_1.length)) return [3 /*break*/, 7];
                            admin = admins_1[_i];
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            return [4 /*yield*/, this.grammyBot.bot.api.sendPhoto(admin.telegramId, payment.receiptFileId, {
                                    caption: message,
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            error_27 = _a.sent();
                            this.logger.error("Failed to notify admin ".concat(admin.telegramId, ":"), error_27);
                            return [3 /*break*/, 6];
                        case 6:
                            _i++;
                            return [3 /*break*/, 2];
                        case 7: return [3 /*break*/, 9];
                        case 8:
                            error_28 = _a.sent();
                            this.logger.error("[UserHandler.notifyAdmins] Error notifying admins about payment - Payment: ".concat(payment.id, ", Error: ").concat(error_28.message), error_28.stack);
                            return [3 /*break*/, 9];
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.generatePaymeUrl = function (userId, amount, duration, botUsername) {
            var merchantId = process.env.PAYME_MERCHANT_ID || '';
            if (!merchantId) {
                this.logger.error('[UserHandler.showPremium] PAYME_MERCHANT_ID not configured');
                return 'https://checkout.paycom.uz';
            }
            var amountInTiyin = amount * 100;
            var params = Buffer.from(JSON.stringify({
                merchant_id: merchantId,
                amount: amountInTiyin,
                account: {
                    user_id: String(userId),
                    duration: duration,
                },
                callback: "https://t.me/".concat(botUsername),
                callback_timeout: 15,
            })).toString('base64');
            var paymeEndpoint = process.env.PAYME_ENDPOINT || 'https://checkout.paycom.uz';
            return "".concat(paymeEndpoint, "/").concat(params);
        };
        UserHandler_1.prototype.showSettings = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ctx.reply("⚙️ Sozlamalar bo'limi ishlab chiqilmoqda...")];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleBack = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var user, isPremium, isPremiumBanned;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.userService.findByTelegramId(String(ctx.from.id))];
                        case 1:
                            user = _a.sent();
                            if (!user)
                                return [2 /*return*/];
                            isPremium = user.isPremium || false;
                            isPremiumBanned = user.isPremiumBanned || false;
                            return [4 /*yield*/, ctx.reply('🏠 Asosiy menyu', main_menu_keyboard_1.MainMenuKeyboard.getMainMenu(isPremium, isPremiumBanned))];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleBackCallback = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var user, isPremium, isPremiumBanned, error_29;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.callbackQuery || !ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.userService.findByTelegramId(String(ctx.from.id))];
                        case 2:
                            user = _a.sent();
                            if (!user)
                                return [2 /*return*/];
                            isPremium = user.isPremium || false;
                            isPremiumBanned = user.isPremiumBanned || false;
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            return [4 /*yield*/, ctx.deleteMessage()];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            error_29 = _a.sent();
                            this.logger.error("[UserHandler.handleBack] Failed to delete message - Error: ".concat(error_29.message));
                            return [3 /*break*/, 6];
                        case 6: return [4 /*yield*/, ctx.reply('🏠 Asosiy menyu', main_menu_keyboard_1.MainMenuKeyboard.getMainMenu(isPremium, isPremiumBanned))];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.showContact = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var settings, message, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.settingsService.getSettings()];
                        case 1:
                            settings = _a.sent();
                            message = settings.contactMessage ||
                                "\n\uD83D\uDCDE **Aloqa**\n\nSavollaringiz bo'lsa murojaat qiling:\n\uD83D\uDC64 Admin: ".concat(settings.supportUsername || '@admin', "\n    ").trim();
                            keyboard = new grammy_1.InlineKeyboard().text('🔙 Orqaga', 'back_to_main');
                            return [4 /*yield*/, ctx.reply(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleTextMessage = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var text, code;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.message || !('text' in ctx.message))
                                return [2 /*return*/];
                            text = ctx.message.text;
                            if (text.startsWith('/') ||
                                text.includes('🔍') ||
                                text.includes('💎') ||
                                text.includes('ℹ️') ||
                                text.includes('📞') ||
                                text.includes('🎬') ||
                                text.includes('📺')) {
                                return [2 /*return*/];
                            }
                            code = parseInt(text);
                            if (!(!isNaN(code) && code > 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.handleCodeSearch(ctx, code)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleCodeSearch = function (ctx, code) {
            return __awaiter(this, void 0, void 0, function () {
                var user, premiumStatus, isPremium, admin, isAdmin, hasSubscription, movie, serial;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.userService.findByTelegramId(String(ctx.from.id))];
                        case 1:
                            user = _a.sent();
                            if (!user) {
                                this.logger.error("[UserHandler.handleCodeSearch] User not found - TelegramID: ".concat(ctx.from.id));
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.premiumService.checkPremiumStatus(user.id)];
                        case 2:
                            premiumStatus = _a.sent();
                            isPremium = premiumStatus.isPremium && !premiumStatus.isExpired;
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 3:
                            admin = _a.sent();
                            isAdmin = !!admin;
                            if (!!isPremium) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.checkSubscription(ctx, code, 'search')];
                        case 4:
                            hasSubscription = _a.sent();
                            if (!hasSubscription) {
                                return [2 /*return*/];
                            }
                            _a.label = 5;
                        case 5: return [4 /*yield*/, this.movieService.findByCode(String(code))];
                        case 6:
                            movie = _a.sent();
                            if (!movie) return [3 /*break*/, 8];
                            return [4 /*yield*/, this.sendMovieToUser(ctx, code)];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                        case 8: return [4 /*yield*/, this.serialService.findByCode(String(code))];
                        case 9:
                            serial = _a.sent();
                            if (!serial) return [3 /*break*/, 11];
                            return [4 /*yield*/, this.sendSerialToUser(ctx, code)];
                        case 10:
                            _a.sent();
                            return [2 /*return*/];
                        case 11: return [4 /*yield*/, ctx.reply("\u274C ".concat(code, " kodli kino yoki serial topilmadi."))];
                        case 12:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.sendMovieToUser = function (ctx, code) {
            return __awaiter(this, void 0, void 0, function () {
                var hasSubscription, movie_1, user, episodes, botUsername, field, movieDeepLink, fieldLink, caption, keyboard_1, totalButtons, shareText, isVideoFile, posterType, sendError_1, shareText, shareKeyboard, videoCaption, error_30;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 27, , 29]);
                            return [4 /*yield*/, this.checkSubscription(ctx, code, 'movie')];
                        case 2:
                            hasSubscription = _a.sent();
                            if (!hasSubscription) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.movieService.findByCode(String(code))];
                        case 3:
                            movie_1 = _a.sent();
                            if (!!movie_1) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.reply("\u274C ".concat(code, " kodli kino topilmadi."))];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                        case 5: return [4 /*yield*/, this.userService.findByTelegramId(String(ctx.from.id))];
                        case 6:
                            user = _a.sent();
                            if (!user)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.movieEpisodeService.findByMovieId(movie_1.id)];
                        case 7:
                            episodes = _a.sent();
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 8:
                            botUsername = (_a.sent()).username;
                            return [4 /*yield*/, this.fieldService.findOne(movie_1.fieldId)];
                        case 9:
                            field = _a.sent();
                            if (!(movie_1.totalEpisodes > 1)) return [3 /*break*/, 21];
                            movieDeepLink = "https://t.me/".concat(botUsername, "?start=").concat(movie_1.code);
                            fieldLink = (field === null || field === void 0 ? void 0 : field.channelLink) || '@' + ((field === null || field === void 0 ? void 0 : field.name) || 'Kanal');
                            caption = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Kino nomi: ".concat(movie_1.title, "\n\u251C\u2023 Kino kodi: ").concat(movie_1.code, "\n\u251C\u2023 Qism: ").concat(movie_1.totalEpisodes, "\n\u251C\u2023 Janrlari: ").concat(movie_1.genre || "Noma'lum", "\n\u251C\u2023 Kanal: ").concat(fieldLink, "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\u25B6\uFE0F Kinoni tomosha qilish uchun pastdagi taklif havolasi ustiga bosing. \u2B07\uFE0F\n").concat(movieDeepLink).trim();
                            keyboard_1 = new grammy_1.InlineKeyboard();
                            // Add first episode button (if movie.videoFileId exists)
                            if (movie_1.videoFileId) {
                                keyboard_1.text('1', "movie_episode_".concat(movie_1.id, "_1"));
                            }
                            // Add episode buttons from database
                            episodes.forEach(function (episode, index) {
                                var buttonIndex = movie_1.videoFileId ? index + 2 : index + 1;
                                keyboard_1.text("".concat(episode.episodeNumber), "movie_episode_".concat(movie_1.id, "_").concat(episode.episodeNumber));
                                if (buttonIndex % 5 === 0)
                                    keyboard_1.row();
                            });
                            totalButtons = (movie_1.videoFileId ? 1 : 0) + episodes.length;
                            if (totalButtons % 5 !== 0)
                                keyboard_1.row();
                            shareText = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Kino nomi: ".concat(movie_1.title, "\n\u251C\u2023 Kino kodi: ").concat(movie_1.code, "\n\u251C\u2023 Kino linki: ").concat(movieDeepLink, "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u25B6\uFE0F Kinoning to'liq qismini @").concat(botUsername, " dan tomosha qilishingiz mumkin!");
                            keyboard_1
                                .switchInline('♻️Ulashish', shareText)
                                .row()
                                .text('🔙 Orqaga', 'back_to_main');
                            _a.label = 10;
                        case 10:
                            _a.trys.push([10, 19, , 20]);
                            if (!movie_1.posterFileId) return [3 /*break*/, 15];
                            isVideoFile = movie_1.posterFileId.startsWith('BAAC');
                            posterType = movie_1.posterType || (isVideoFile ? 'video' : 'photo');
                            if (!(posterType === 'video' || isVideoFile)) return [3 /*break*/, 12];
                            return [4 /*yield*/, ctx.replyWithVideo(movie_1.posterFileId, {
                                    caption: caption,
                                    reply_markup: keyboard_1,
                                })];
                        case 11:
                            _a.sent();
                            return [3 /*break*/, 14];
                        case 12: return [4 /*yield*/, ctx.replyWithPhoto(movie_1.posterFileId, {
                                caption: caption,
                                reply_markup: keyboard_1,
                            })];
                        case 13:
                            _a.sent();
                            _a.label = 14;
                        case 14: return [3 /*break*/, 17];
                        case 15: return [4 /*yield*/, ctx.reply(caption, {
                                reply_markup: keyboard_1,
                            })];
                        case 16:
                            _a.sent();
                            _a.label = 17;
                        case 17: return [4 /*yield*/, this.watchHistoryService.recordMovieWatch(user.id, movie_1.id)];
                        case 18:
                            _a.sent();
                            return [3 /*break*/, 20];
                        case 19:
                            sendError_1 = _a.sent();
                            this.logger.error("[UserHandler.sendMovieToUser] Failed to send with poster - Code: ".concat(code, ", User: ").concat(ctx.from.id, ", Error: ").concat(sendError_1.message), sendError_1.stack);
                            throw sendError_1;
                        case 20: return [3 /*break*/, 26];
                        case 21:
                            if (!movie_1.videoFileId) return [3 /*break*/, 24];
                            shareText = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Kino nomi: ".concat(movie_1.title, "\n\u251C\u2023 Kino kodi: ").concat(movie_1.code, "\n\u251C\u2023 Kino linki: https://t.me/").concat(botUsername, "?start=").concat(movie_1.code, "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u25B6\uFE0F Kinoning to'liq qismini @").concat(botUsername, " dan tomosha qilishingiz mumkin!");
                            shareKeyboard = new grammy_1.InlineKeyboard().switchInline('♻️Ulashish', shareText);
                            videoCaption = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Kino nomi : ".concat(movie_1.title, "\n\u251C\u2023 Kino kodi: ").concat(movie_1.code, "\n\u251C\u2023 Qism: 1\n\u251C\u2023 Janrlari: ").concat(movie_1.genre || "Noma'lum", "\n\u251C\u2023 Kanal: ").concat((field === null || field === void 0 ? void 0 : field.channelLink) || '@' + ((field === null || field === void 0 ? void 0 : field.name) || 'Kanal'), "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\u25B6\uFE0F Kinoning to'liq qismini @").concat(botUsername, " dan tomosha qilishingiz mumkin!\n\n<blockquote expandable>\u26A0\uFE0F ESLATMA:\nBiz yuklayotgan kinolar turli saytlardan olinadi.\n\uD83C\uDFB0 Ba'zi kinolarda kazino, qimor yoki \"pulni ko'paytirib beramiz\" degan reklama chiqishi mumkin.\n\uD83D\uDEAB Bunday reklamalarga aslo ishonmang! Ular firibgarlar va sizni aldaydi.\n\uD83D\uDD1E Ba'zi sahnalar 18+ bo'lishi mumkin \u2013 agar noqulay bo'lsa, ko'rishni to'xtating.</blockquote>");
                            return [4 /*yield*/, ctx.replyWithVideo(movie_1.videoFileId, {
                                    caption: videoCaption,
                                    parse_mode: 'HTML',
                                    protect_content: true,
                                    reply_markup: shareKeyboard,
                                })];
                        case 22:
                            _a.sent();
                            return [4 /*yield*/, this.watchHistoryService.recordMovieWatch(user.id, movie_1.id)];
                        case 23:
                            _a.sent();
                            return [3 /*break*/, 26];
                        case 24: return [4 /*yield*/, ctx.reply("⏳ Video hali yuklanmagan. Tez orada qo'shiladi.")];
                        case 25:
                            _a.sent();
                            _a.label = 26;
                        case 26: return [3 /*break*/, 29];
                        case 27:
                            error_30 = _a.sent();
                            this.logger.error("[UserHandler.sendMovieToUser] Error - Code: ".concat(code, ", User: ").concat(ctx.from.id, ", Error: ").concat((error_30 === null || error_30 === void 0 ? void 0 : error_30.message) || 'Unknown', ", Name: ").concat((error_30 === null || error_30 === void 0 ? void 0 : error_30.name) || 'N/A'), error_30 === null || error_30 === void 0 ? void 0 : error_30.stack);
                            return [4 /*yield*/, ctx.reply("❌ Kino yuklashda xatolik yuz berdi. Iltimos admin bilan bog'laning.").catch(function () { })];
                        case 28:
                            _a.sent();
                            return [3 /*break*/, 29];
                        case 29: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.sendSerialToUser = function (ctx, code) {
            return __awaiter(this, void 0, void 0, function () {
                var hasSubscription, serial_1, user, episodes, botInfo, botUsername, field, serialDeepLink, channelLink, caption, shareText, keyboard_2, isVideoFile, posterType, error_31;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 20, , 22]);
                            return [4 /*yield*/, this.checkSubscription(ctx, code, 'serial')];
                        case 2:
                            hasSubscription = _a.sent();
                            if (!hasSubscription) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.serialService.findByCode(String(code))];
                        case 3:
                            serial_1 = _a.sent();
                            if (!!serial_1) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.reply("\u274C ".concat(code, " kodli serial topilmadi."))];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                        case 5: return [4 /*yield*/, this.userService.findByTelegramId(String(ctx.from.id))];
                        case 6:
                            user = _a.sent();
                            if (!!user) return [3 /*break*/, 8];
                            return [4 /*yield*/, ctx.reply('❌ Foydalanuvchi topilmadi.')];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                        case 8: return [4 /*yield*/, this.episodeService.findBySerialId(serial_1.id)];
                        case 9:
                            episodes = _a.sent();
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 10:
                            botInfo = _a.sent();
                            botUsername = botInfo.username || 'bot';
                            return [4 /*yield*/, this.fieldService.findOne(serial_1.fieldId)];
                        case 11:
                            field = _a.sent();
                            serialDeepLink = "https://t.me/".concat(botUsername, "?start=s").concat(serial_1.code);
                            channelLink = (field === null || field === void 0 ? void 0 : field.channelLink) || '';
                            if (!channelLink && (field === null || field === void 0 ? void 0 : field.name)) {
                                channelLink = "@".concat(field.name);
                            }
                            else if (!channelLink) {
                                channelLink = '@Kanal';
                            }
                            caption = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Serial nomi: ".concat(serial_1.title, "\n\u251C\u2023 Serial kodi: ").concat(serial_1.code, "\n\u251C\u2023 Qismlar: ").concat(episodes.length || serial_1.totalEpisodes || 0, "\n\u251C\u2023 Janrlari: ").concat(serial_1.genre || "Noma'lum", "\n\u251C\u2023 Kanal: ").concat(channelLink, "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\u25B6\uFE0F Kinoning to'liq qismini @").concat(botUsername, " dan tomosha qilishingiz mumkin!\n\n<blockquote expandable>\u26A0\uFE0F ESLATMA:\nBiz yuklayotgan kinolar turli saytlardan olinadi.\n\uD83C\uDFB0 Ba'zi kinolarda kazino, qimor yoki \"pulni ko'paytirib beramiz\" degan reklama chiqishi mumkin.\n\uD83D\uDEAB Bunday reklamalarga aslo ishonmang! Ular firibgarlar va sizni aldaydi.\n\uD83D\uDD1E Ba'zi sahnalar 18+ bo'lishi mumkin \u2013 agar noqulay bo'lsa, ko'rishni to'xtating.</blockquote>");
                            shareText = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Serial nomi: ".concat(serial_1.title, "\n\u251C\u2023 Serial kodi: ").concat(serial_1.code, "\n\u251C\u2023 Serial linki: ").concat(serialDeepLink, "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u25B6\uFE0F Serialning to'liq qismlarini @").concat(botUsername, " dan tomosha qilishingiz mumkin!");
                            keyboard_2 = new grammy_1.InlineKeyboard();
                            if (episodes.length > 0) {
                                episodes.forEach(function (episode, index) {
                                    keyboard_2.text("".concat(episode.episodeNumber), "episode_".concat(serial_1.id, "_").concat(episode.episodeNumber));
                                    // Har 5 ta tugmadan keyin yangi qator
                                    if ((index + 1) % 5 === 0) {
                                        keyboard_2.row();
                                    }
                                });
                                // Agar oxirgi qatorda 5 ta bo'lmasa, yangi qator qo'shish
                                if (episodes.length % 5 !== 0) {
                                    keyboard_2.row();
                                }
                            }
                            // 10. Ulashish va orqaga tugmalari
                            keyboard_2
                                .switchInline('♻️Ulashish', shareText)
                                .row()
                                .text('🔙 Orqaga', 'back_to_main');
                            if (!serial_1.posterFileId) return [3 /*break*/, 16];
                            isVideoFile = serial_1.posterFileId.startsWith('BAAC');
                            posterType = serial_1.posterType || (isVideoFile ? 'video' : 'photo');
                            if (!(posterType === 'video' || isVideoFile)) return [3 /*break*/, 13];
                            return [4 /*yield*/, ctx.replyWithVideo(serial_1.posterFileId, {
                                    caption: caption,
                                    parse_mode: 'HTML',
                                    reply_markup: keyboard_2,
                                })];
                        case 12:
                            _a.sent();
                            return [3 /*break*/, 15];
                        case 13: return [4 /*yield*/, ctx.replyWithPhoto(serial_1.posterFileId, {
                                caption: caption,
                                parse_mode: 'HTML',
                                reply_markup: keyboard_2,
                            })];
                        case 14:
                            _a.sent();
                            _a.label = 15;
                        case 15: return [3 /*break*/, 18];
                        case 16: return [4 /*yield*/, ctx.reply(caption, {
                                parse_mode: 'HTML',
                                reply_markup: keyboard_2,
                            })];
                        case 17:
                            _a.sent();
                            _a.label = 18;
                        case 18: 
                        // 12. Tarix yozish
                        return [4 /*yield*/, this.watchHistoryService.recordSerialWatch(user.id, serial_1.id)];
                        case 19:
                            // 12. Tarix yozish
                            _a.sent();
                            return [3 /*break*/, 22];
                        case 20:
                            error_31 = _a.sent();
                            this.logger.error("\u274C [sendSerialToUser] Error sending serial ".concat(code, ":"));
                            this.logger.error("Message: ".concat((error_31 === null || error_31 === void 0 ? void 0 : error_31.message) || 'No error message'));
                            this.logger.error("Name: ".concat((error_31 === null || error_31 === void 0 ? void 0 : error_31.name) || 'No error name'));
                            this.logger.error("Stack: ".concat((error_31 === null || error_31 === void 0 ? void 0 : error_31.stack) || 'No stack trace'));
                            this.logger.error("Full error: ".concat(JSON.stringify(error_31, Object.getOwnPropertyNames(error_31))));
                            return [4 /*yield*/, ctx.reply("❌ Serial yuklashda xatolik yuz berdi. Iltimos admin bilan bog'laning.").catch(function (err) {
                                    _this.logger.error("Failed to send error message to user:", err);
                                })];
                        case 21:
                            _a.sent();
                            return [3 /*break*/, 22];
                        case 22: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.checkSubscription = function (ctx, contentCode, contentType) {
            return __awaiter(this, void 0, void 0, function () {
                var user, allChannels, externalChannels, mandatoryChannels, isPremium, keyboard_3, message_1, error_32, error_33, keyboard_4, message_2, error_34, userStatuses, statusMap, channelsToShow, externalChannelsToShow, channelCheckPromises, results, publicChannels, privateChannels, privateApprovalChannels, message, keyboard, error_35, error_36;
                var _this = this;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/, false];
                            return [4 /*yield*/, this.userService.findByTelegramId(String(ctx.from.id))];
                        case 1:
                            user = _c.sent();
                            if (!user) {
                                this.logger.error("\u274C User ".concat(ctx.from.id, " topilmadi (checkSubscription)"));
                                return [2 /*return*/, false];
                            }
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findMany({
                                    where: { isActive: true },
                                    orderBy: { order: 'asc' },
                                })];
                        case 2:
                            allChannels = _c.sent();
                            if (!allChannels.length) {
                                return [2 /*return*/, true];
                            }
                            externalChannels = allChannels.filter(function (ch) { return ch.type === 'EXTERNAL'; });
                            mandatoryChannels = allChannels.filter(function (ch) { return ch.type !== 'EXTERNAL'; });
                            isPremium = user.isPremium &&
                                user.premiumExpiresAt &&
                                user.premiumExpiresAt > new Date();
                            if (!isPremium) return [3 /*break*/, 14];
                            if (!(externalChannels.length > 0)) return [3 /*break*/, 13];
                            keyboard_3 = new grammy_1.InlineKeyboard();
                            externalChannels.forEach(function (channel) {
                                keyboard_3
                                    .url("".concat(channel.channelName), channel.channelLink)
                                    .row();
                            });
                            message_1 = "";
                            _c.label = 3;
                        case 3:
                            _c.trys.push([3, 12, , 13]);
                            if (!((_a = ctx.callbackQuery) === null || _a === void 0 ? void 0 : _a.message)) return [3 /*break*/, 9];
                            _c.label = 4;
                        case 4:
                            _c.trys.push([4, 6, , 8]);
                            return [4 /*yield*/, ctx.api.editMessageText(ctx.callbackQuery.message.chat.id, ctx.callbackQuery.message.message_id, message_1, {
                                    parse_mode: 'HTML',
                                    reply_markup: keyboard_3,
                                })];
                        case 5:
                            _c.sent();
                            return [3 /*break*/, 8];
                        case 6:
                            error_32 = _c.sent();
                            // If edit fails, send new message
                            return [4 /*yield*/, ctx.reply(message_1, {
                                    parse_mode: 'HTML',
                                    reply_markup: keyboard_3,
                                })];
                        case 7:
                            // If edit fails, send new message
                            _c.sent();
                            return [3 /*break*/, 8];
                        case 8: return [3 /*break*/, 11];
                        case 9: return [4 /*yield*/, ctx.reply(message_1, {
                                parse_mode: 'HTML',
                                reply_markup: keyboard_3,
                            })];
                        case 10:
                            _c.sent();
                            _c.label = 11;
                        case 11: return [3 /*break*/, 13];
                        case 12:
                            error_33 = _c.sent();
                            this.logger.error("Error showing external channels to premium user:", error_33);
                            return [3 /*break*/, 13];
                        case 13: return [2 /*return*/, true];
                        case 14:
                            if (!!mandatoryChannels.length) return [3 /*break*/, 19];
                            if (!(externalChannels.length > 0)) return [3 /*break*/, 18];
                            keyboard_4 = new grammy_1.InlineKeyboard();
                            externalChannels.forEach(function (channel) {
                                keyboard_4
                                    .url("".concat(channel.channelName), channel.channelLink)
                                    .row();
                            });
                            message_2 = "";
                            _c.label = 15;
                        case 15:
                            _c.trys.push([15, 17, , 18]);
                            return [4 /*yield*/, ctx.reply(message_2, {
                                    parse_mode: 'HTML',
                                    reply_markup: keyboard_4,
                                })];
                        case 16:
                            _c.sent();
                            return [3 /*break*/, 18];
                        case 17:
                            error_34 = _c.sent();
                            this.logger.error("Error showing external channels:", error_34);
                            return [3 /*break*/, 18];
                        case 18: return [2 /*return*/, true];
                        case 19: return [4 /*yield*/, this.prisma.userChannelStatus.findMany({
                                where: { userId: user.id },
                                include: { channel: true },
                            })];
                        case 20:
                            userStatuses = _c.sent();
                            statusMap = new Map();
                            userStatuses.forEach(function (s) {
                                statusMap.set(s.channelId, s.status);
                            });
                            channelsToShow = [];
                            externalChannelsToShow = externalChannels.map(function (ch) { return ({
                                id: ch.id,
                                name: ch.channelName,
                                link: ch.channelLink,
                                type: ch.type,
                            }); });
                            channelCheckPromises = mandatoryChannels.map(function (channel) { return __awaiter(_this, void 0, void 0, function () {
                                var currentStatus, memberPromise, timeoutPromise, member, isJoined, error_37;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            currentStatus = statusMap.get(channel.id);
                                            // PRIVATE_WITH_ADMIN_APPROVAL: so'rov yuborgan bo'lsa yetarli
                                            if (channel.type === 'PRIVATE_WITH_ADMIN_APPROVAL') {
                                                // joined yoki requested bo'lsa OK
                                                if (currentStatus === 'joined' || currentStatus === 'requested') {
                                                    return [2 /*return*/, null];
                                                }
                                                // Aks holda ko'rsatish
                                                return [2 /*return*/, {
                                                        id: channel.id,
                                                        name: channel.channelName,
                                                        link: channel.channelLink,
                                                        type: channel.type,
                                                    }];
                                            }
                                            // PUBLIC va PRIVATE kanallar uchun
                                            if (!channel.channelId) {
                                                // channelId yo'q bo'lsa, faqat database statusga qaraymiz
                                                if (currentStatus === 'joined' || currentStatus === 'requested') {
                                                    return [2 /*return*/, null];
                                                }
                                                return [2 /*return*/, {
                                                        id: channel.id,
                                                        name: channel.channelName,
                                                        link: channel.channelLink,
                                                        type: channel.type,
                                                    }];
                                            }
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            memberPromise = ctx.api.getChatMember(channel.channelId, ctx.from.id);
                                            timeoutPromise = new Promise(function (_, reject) {
                                                return setTimeout(function () { return reject(new Error('API timeout')); }, 5000);
                                            });
                                            return [4 /*yield*/, Promise.race([memberPromise, timeoutPromise])];
                                        case 2:
                                            member = _a.sent();
                                            isJoined = member.status === 'member' ||
                                                member.status === 'administrator' ||
                                                member.status === 'creator' ||
                                                (member.status === 'restricted' && 'is_member' in member && member.is_member);
                                            if (isJoined) {
                                                // Database'ni yangilash (async, kutmaymiz)
                                                this.prisma.userChannelStatus.upsert({
                                                    where: {
                                                        userId_channelId: { userId: user.id, channelId: channel.id },
                                                    },
                                                    create: {
                                                        userId: user.id,
                                                        channelId: channel.id,
                                                        status: 'joined',
                                                        lastUpdated: new Date(),
                                                    },
                                                    update: {
                                                        status: 'joined',
                                                        lastUpdated: new Date(),
                                                    },
                                                }).catch(function (err) { return _this.logger.error("[UserHandler.checkSubscription.joined] DB update failed - User: ".concat(user.id, ", Channel: ").concat(channel.id, ", Error: ").concat(err.message)); });
                                                return [2 /*return*/, null];
                                            }
                                            // PRIVATE kanallar uchun: so'rov yuborgan bo'lsa OK
                                            if (channel.type === 'PRIVATE' && currentStatus === 'requested') {
                                                return [2 /*return*/, null];
                                            }
                                            // Agar qo'shilmagan bo'lsa, ro'yxatga qo'shish
                                            // Database'ni yangilash (async, kutmaymiz)
                                            if (currentStatus !== 'requested') {
                                                this.prisma.userChannelStatus.upsert({
                                                    where: {
                                                        userId_channelId: { userId: user.id, channelId: channel.id },
                                                    },
                                                    create: {
                                                        userId: user.id,
                                                        channelId: channel.id,
                                                        status: 'left',
                                                        lastUpdated: new Date(),
                                                    },
                                                    update: {
                                                        status: 'left',
                                                        lastUpdated: new Date(),
                                                    },
                                                }).catch(function (err) { return _this.logger.error("[UserHandler.checkSubscription.left] DB update failed - User: ".concat(user.id, ", Channel: ").concat(channel.id, ", Error: ").concat(err.message)); });
                                            }
                                            return [2 /*return*/, {
                                                    id: channel.id,
                                                    name: channel.channelName,
                                                    link: channel.channelLink,
                                                    type: channel.type,
                                                }];
                                        case 3:
                                            error_37 = _a.sent();
                                            // API xato bersa yoki timeout bo'lsa, database statusga qarab qaror qabul qilamiz
                                            // Agar bot kanal a'zosi bo'lmasa (403 Forbidden), user qo'shilmagan deb hisoblaymiz
                                            if (error_37.message && error_37.message.includes('403')) {
                                                // PRIVATE kanal uchun requested status qabul qilinadi
                                                if (channel.type === 'PRIVATE' && currentStatus === 'requested') {
                                                    return [2 /*return*/, null];
                                                }
                                                // Boshqa hollarda kanal ko'rsatiladi
                                                return [2 /*return*/, {
                                                        id: channel.id,
                                                        name: channel.channelName,
                                                        link: channel.channelLink,
                                                        type: channel.type,
                                                    }];
                                            }
                                            // Timeout yoki boshqa xatolar uchun: database statusga ishonish mumkin
                                            if (currentStatus === 'joined' || currentStatus === 'requested') {
                                                return [2 /*return*/, null];
                                            }
                                            return [2 /*return*/, {
                                                    id: channel.id,
                                                    name: channel.channelName,
                                                    link: channel.channelLink,
                                                    type: channel.type,
                                                }];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [4 /*yield*/, Promise.all(channelCheckPromises)];
                        case 21:
                            results = _c.sent();
                            // null bo'lmaganlarni channelsToShow ga qo'shamiz
                            results.forEach(function (result, index) {
                                if (result !== null) {
                                    channelsToShow.push(result);
                                }
                            });
                            // Agar barcha kanallarga qo'shilgan yoki so'rov yuborilgan bo'lsa
                            if (channelsToShow.length === 0) {
                                return [2 /*return*/, true];
                            }
                            channelsToShow.forEach(function (ch) {
                            });
                            publicChannels = channelsToShow.filter(function (ch) { return ch.type === 'PUBLIC'; });
                            privateChannels = channelsToShow.filter(function (ch) { return ch.type === 'PRIVATE'; });
                            privateApprovalChannels = channelsToShow.filter(function (ch) { return ch.type === 'PRIVATE_WITH_ADMIN_APPROVAL'; });
                            message = "\u274C Botdan foydalanish uchun quyidagi kanallarga obuna bo'lishingiz yoki so'rov yuborishingiz kerak:\n\n";
                            message += "<blockquote>\uD83D\uDC8E Premium obuna sotib olib, kanallarga obuna bo'lmasdan foydalanishingiz mumkin.</blockquote>";
                            if (contentCode && contentType) {
                                message += "";
                            }
                            // Agar external kanallar bo'lsa, ularga ham e'tibor qarating
                            if (externalChannelsToShow.length > 0) {
                                message += "";
                            }
                            keyboard = new grammy_1.InlineKeyboard();
                            // PUBLIC va PRIVATE kanallar uchun URL tugmalari
                            __spreadArray(__spreadArray([], publicChannels, true), privateChannels, true).forEach(function (channel) {
                                keyboard.url(channel.name, channel.link).row();
                            });
                            // PRIVATE_WITH_ADMIN_APPROVAL uchun so'rov yuborish tugmalari
                            privateApprovalChannels.forEach(function (channel) {
                                keyboard
                                    .text("\uD83D\uDCE4 ".concat(channel.name, " so'rov yuborish"), "request_join_".concat(channel.id))
                                    .row();
                            });
                            // EXTERNAL kanallar uchun URL button (to'g'ridan-to'g'ri saytga o'tadi)
                            if (externalChannelsToShow.length > 0) {
                                externalChannelsToShow.forEach(function (channel) {
                                    keyboard
                                        .url(" ".concat(channel.name), channel.link)
                                        .row();
                                });
                            }
                            keyboard.text('✅ Tekshirish', 'check_subscription').row();
                            keyboard.text('💎 Premium sotib olish', 'show_premium');
                            _c.label = 22;
                        case 22:
                            _c.trys.push([22, 31, , 32]);
                            if (!((_b = ctx.callbackQuery) === null || _b === void 0 ? void 0 : _b.message)) return [3 /*break*/, 28];
                            _c.label = 23;
                        case 23:
                            _c.trys.push([23, 25, , 27]);
                            return [4 /*yield*/, ctx.api.editMessageText(ctx.callbackQuery.message.chat.id, ctx.callbackQuery.message.message_id, message, {
                                    parse_mode: 'HTML',
                                    reply_markup: keyboard,
                                })];
                        case 24:
                            _c.sent();
                            return [3 /*break*/, 27];
                        case 25:
                            error_35 = _c.sent();
                            return [4 /*yield*/, ctx.reply(message, {
                                    parse_mode: 'HTML',
                                    reply_markup: keyboard,
                                })];
                        case 26:
                            _c.sent();
                            return [3 /*break*/, 27];
                        case 27: return [3 /*break*/, 30];
                        case 28: return [4 /*yield*/, ctx.reply(message, {
                                parse_mode: 'HTML',
                                reply_markup: keyboard,
                            })];
                        case 29:
                            _c.sent();
                            _c.label = 30;
                        case 30: return [3 /*break*/, 32];
                        case 31:
                            error_36 = _c.sent();
                            this.logger.error("\u274C Xabar yuborishda XATOLIK:", error_36);
                            this.logger.error("Error: ".concat(error_36 === null || error_36 === void 0 ? void 0 : error_36.message));
                            return [3 /*break*/, 32];
                        case 32: return [2 /*return*/, false];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleCheckSubscription = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var err_1, user, hasAccess, err_2, successMessage, keyboard, sendError_2, fallbackError_1, error_38, replyError_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.callbackQuery || !ctx.from) {
                                this.logger.error("\u274C handleCheckSubscription: ctx.callbackQuery yoki ctx.from yo'q");
                                return [2 /*return*/];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: 'Tekshirilmoqda...' })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            return [3 /*break*/, 4];
                        case 4:
                            _a.trys.push([4, 23, , 28]);
                            return [4 /*yield*/, this.userService.findByTelegramId(String(ctx.from.id))];
                        case 5:
                            user = _a.sent();
                            if (!!user) return [3 /*break*/, 7];
                            this.logger.error("\u274C User ".concat(ctx.from.id, " topilmadi"));
                            return [4 /*yield*/, ctx.reply('❌ Foydalanuvchi topilmadi.')];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                        case 7: return [4 /*yield*/, this.checkSubscription(ctx, 0, 'check')];
                        case 8:
                            hasAccess = _a.sent();
                            if (!(hasAccess === true)) return [3 /*break*/, 22];
                            if (!ctx.callbackQuery.message) return [3 /*break*/, 13];
                            _a.label = 9;
                        case 9:
                            _a.trys.push([9, 11, , 12]);
                            return [4 /*yield*/, ctx.api.deleteMessage(ctx.callbackQuery.message.chat.id, ctx.callbackQuery.message.message_id)];
                        case 10:
                            _a.sent();
                            return [3 /*break*/, 12];
                        case 11:
                            err_2 = _a.sent();
                            return [3 /*break*/, 12];
                        case 12: return [3 /*break*/, 13];
                        case 13:
                            successMessage = '✅ Siz barcha kanallarga qo\'shildingiz!\n\n' +
                                '🎬 Endi botdan foydalanishingiz mumkin.\n\n' +
                                '🔍 Kino yoki serial kodini yuboring.';
                            _a.label = 14;
                        case 14:
                            _a.trys.push([14, 16, , 21]);
                            keyboard = main_menu_keyboard_1.MainMenuKeyboard.getMainMenu(user.isPremium, user.isPremiumBanned);
                            return [4 /*yield*/, ctx.reply(successMessage, keyboard)];
                        case 15:
                            _a.sent();
                            return [3 /*break*/, 21];
                        case 16:
                            sendError_2 = _a.sent();
                            this.logger.error("\u274C\u274C\u274C Success xabar yuborishda XATOLIK:", sendError_2);
                            this.logger.error("Error name: ".concat(sendError_2 === null || sendError_2 === void 0 ? void 0 : sendError_2.name));
                            this.logger.error("Error message: ".concat(sendError_2 === null || sendError_2 === void 0 ? void 0 : sendError_2.message));
                            this.logger.error("Error stack: ".concat(sendError_2 === null || sendError_2 === void 0 ? void 0 : sendError_2.stack));
                            _a.label = 17;
                        case 17:
                            _a.trys.push([17, 19, , 20]);
                            return [4 /*yield*/, ctx.reply(successMessage)];
                        case 18:
                            _a.sent();
                            return [3 /*break*/, 20];
                        case 19:
                            fallbackError_1 = _a.sent();
                            this.logger.error("\u274C Fallback xabar ham yuborilmadi:", fallbackError_1);
                            return [3 /*break*/, 20];
                        case 20: return [3 /*break*/, 21];
                        case 21: return [3 /*break*/, 22];
                        case 22: return [3 /*break*/, 28];
                        case 23:
                            error_38 = _a.sent();
                            this.logger.error("\u274C\u274C\u274C XATOLIK handleCheckSubscription da:", error_38);
                            this.logger.error("Error message: ".concat((error_38 === null || error_38 === void 0 ? void 0 : error_38.message) || 'unknown'));
                            this.logger.error("Error stack: ".concat((error_38 === null || error_38 === void 0 ? void 0 : error_38.stack) || 'no stack'));
                            _a.label = 24;
                        case 24:
                            _a.trys.push([24, 26, , 27]);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi. Qaytadan urinib ko\'ring.')];
                        case 25:
                            _a.sent();
                            return [3 /*break*/, 27];
                        case 26:
                            replyError_1 = _a.sent();
                            this.logger.error("\u274C Xato xabarini yuborib ham bo'lmadi:", replyError_1);
                            return [3 /*break*/, 27];
                        case 27: return [3 /*break*/, 28];
                        case 28: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleRequestJoin = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var match, channelId, user, channel, existingRequest, settings, adminMessage, adminKeyboard, error_39, hasAccess, error_40, error_41;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!ctx.callbackQuery || !ctx.from)
                                return [2 /*return*/];
                            match = (_a = ctx.callbackQuery.data) === null || _a === void 0 ? void 0 : _a.match(/^request_join_(\d+)$/);
                            if (!match)
                                return [2 /*return*/];
                            channelId = parseInt(match[1]);
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 29, , 31]);
                            return [4 /*yield*/, this.userService.findByTelegramId(String(ctx.from.id))];
                        case 2:
                            user = _b.sent();
                            if (!!user) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: '❌ Foydalanuvchi topilmadi.' })];
                        case 3:
                            _b.sent();
                            return [2 /*return*/];
                        case 4: return [4 /*yield*/, this.prisma.mandatoryChannel.findUnique({
                                where: { id: channelId },
                            })];
                        case 5:
                            channel = _b.sent();
                            if (!(!channel || channel.type !== 'PRIVATE_WITH_ADMIN_APPROVAL')) return [3 /*break*/, 7];
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: '❌ Kanal topilmadi yoki noto\'g\'ri tur.' })];
                        case 6:
                            _b.sent();
                            return [2 /*return*/];
                        case 7: return [4 /*yield*/, this.prisma.channelJoinRequest.findUnique({
                                where: {
                                    userId_channelId: {
                                        userId: user.id,
                                        channelId: channelId,
                                    },
                                },
                            })];
                        case 8:
                            existingRequest = _b.sent();
                            if (!existingRequest) return [3 /*break*/, 12];
                            if (!(existingRequest.status === 'PENDING')) return [3 /*break*/, 10];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: '⏳ Sizning so\'rovingiz kutilmoqda. Admin ko\'rib chiqishini kuting.',
                                    show_alert: true
                                })];
                        case 9:
                            _b.sent();
                            return [2 /*return*/];
                        case 10:
                            if (!(existingRequest.status === 'APPROVED')) return [3 /*break*/, 12];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: '✅ Sizning so\'rovingiz allaqachon tasdiqlangan.',
                                    show_alert: true
                                })];
                        case 11:
                            _b.sent();
                            return [2 /*return*/];
                        case 12: 
                        // Create join request
                        return [4 /*yield*/, this.prisma.channelJoinRequest.create({
                                data: {
                                    userId: user.id,
                                    channelId: channelId,
                                    telegramId: String(ctx.from.id),
                                    username: ctx.from.username,
                                    firstName: ctx.from.first_name,
                                    lastName: ctx.from.last_name,
                                    status: 'PENDING',
                                },
                            })];
                        case 13:
                            // Create join request
                            _b.sent();
                            // Update UserChannelStatus to 'requested' so the system knows the user has sent a request
                            return [4 /*yield*/, this.prisma.userChannelStatus.upsert({
                                    where: {
                                        userId_channelId: {
                                            userId: user.id,
                                            channelId: channelId,
                                        },
                                    },
                                    create: {
                                        userId: user.id,
                                        channelId: channelId,
                                        status: 'requested',
                                        lastUpdated: new Date(),
                                    },
                                    update: {
                                        status: 'requested',
                                        lastUpdated: new Date(),
                                    },
                                })];
                        case 14:
                            // Update UserChannelStatus to 'requested' so the system knows the user has sent a request
                            _b.sent();
                            _b.label = 15;
                        case 15:
                            _b.trys.push([15, 19, , 20]);
                            return [4 /*yield*/, this.prisma.botSettings.findFirst()];
                        case 16:
                            settings = _b.sent();
                            if (!(settings === null || settings === void 0 ? void 0 : settings.adminNotificationChat)) return [3 /*break*/, 18];
                            adminMessage = "\uD83D\uDCE4 <b>Yangi kanal qo'shilish so'rovi</b>\n\n" +
                                "\uD83D\uDC64 Foydalanuvchi: ".concat(ctx.from.first_name || '', " ").concat(ctx.from.last_name || '', "\n") +
                                "\uD83C\uDD94 Telegram ID: <code>".concat(ctx.from.id, "</code>\n") +
                                "\uD83D\uDC64 Username: ".concat(ctx.from.username ? '@' + ctx.from.username : 'Yo\'q', "\n") +
                                "\uD83D\uDCF1 Kanal: ".concat(channel.channelName, "\n") +
                                "\uD83D\uDD17 Link: ".concat(channel.channelLink, "\n\n") +
                                "\u23F0 Sana: ".concat(new Date().toLocaleString('uz-UZ'));
                            adminKeyboard = new grammy_1.InlineKeyboard()
                                .text('✅ Tasdiqlash', "approve_join_".concat(user.id, "_").concat(channelId))
                                .text('❌ Rad etish', "reject_join_".concat(user.id, "_").concat(channelId));
                            return [4 /*yield*/, ctx.api.sendMessage(settings.adminNotificationChat, adminMessage, {
                                    parse_mode: 'HTML',
                                    reply_markup: adminKeyboard,
                                })];
                        case 17:
                            _b.sent();
                            _b.label = 18;
                        case 18: return [3 /*break*/, 20];
                        case 19:
                            error_39 = _b.sent();
                            this.logger.error("Failed to send admin notification: ".concat(error_39.message));
                            return [3 /*break*/, 20];
                        case 20: return [4 /*yield*/, ctx.answerCallbackQuery({
                                text: '✅ So\'rov yuborildi! Endi botdan foydalanishingiz mumkin.',
                                show_alert: true
                            })];
                        case 21:
                            _b.sent();
                            _b.label = 22;
                        case 22:
                            _b.trys.push([22, 27, , 28]);
                            return [4 /*yield*/, this.checkSubscription(ctx, 0, 'request')];
                        case 23:
                            hasAccess = _b.sent();
                            if (!(hasAccess && ctx.callbackQuery.message)) return [3 /*break*/, 26];
                            // Agar barcha kanallar bajarilgan bo'lsa, xabarni o'chirish
                            return [4 /*yield*/, ctx.api.deleteMessage(ctx.callbackQuery.message.chat.id, ctx.callbackQuery.message.message_id)];
                        case 24:
                            // Agar barcha kanallar bajarilgan bo'lsa, xabarni o'chirish
                            _b.sent();
                            return [4 /*yield*/, ctx.reply('✅ Barcha kerakli kanallar uchun so\'rovlar yuborildi!\n\n' +
                                    '🎬 Endi botdan foydalanishingiz mumkin.\n\n' +
                                    '🔍 Kino yoki serial kodini yuboring.', main_menu_keyboard_1.MainMenuKeyboard.getMainMenu(user.isPremium, user.isPremiumBanned))];
                        case 25:
                            _b.sent();
                            _b.label = 26;
                        case 26: return [3 /*break*/, 28];
                        case 27:
                            error_40 = _b.sent();
                            this.logger.error("[UserHandler.handleRequestJoin] Failed to update message after request - User: ".concat(ctx.from.id, ", Channel: ").concat(channelId, ", Error: ").concat(error_40.message), error_40.stack);
                            return [3 /*break*/, 28];
                        case 28: return [3 /*break*/, 31];
                        case 29:
                            error_41 = _b.sent();
                            this.logger.error("Error in handleRequestJoin: ".concat(error_41.message));
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: '❌ Xatolik yuz berdi.' })];
                        case 30:
                            _b.sent();
                            return [3 /*break*/, 31];
                        case 31: return [2 /*return*/];
                    }
                });
            });
        };
        // handleExternalChannel o'chirildi - external kanallar endi URL button sifatida ishlatiladi
        UserHandler_1.prototype.handleJoinRequest = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var userId, chatId, channel, user, error_42;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.chatJoinRequest)
                                return [2 /*return*/];
                            userId = ctx.chatJoinRequest.from.id;
                            chatId = String(ctx.chatJoinRequest.chat.id);
                            return [4 /*yield*/, this.channelStatusService.updateStatus(String(userId), chatId, client_1.ChannelStatus.requested)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 9, , 10]);
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findFirst({
                                    where: {
                                        channelId: chatId,
                                        isActive: true,
                                        type: 'PRIVATE'
                                    },
                                })];
                        case 3:
                            channel = _a.sent();
                            if (!channel) return [3 /*break*/, 8];
                            return [4 /*yield*/, this.prisma.user.findUnique({
                                    where: { telegramId: String(userId) },
                                })];
                        case 4:
                            user = _a.sent();
                            if (!user) return [3 /*break*/, 6];
                            // Create or update UserChannelStatus
                            return [4 /*yield*/, this.prisma.userChannelStatus.upsert({
                                    where: {
                                        userId_channelId: {
                                            userId: user.id,
                                            channelId: channel.id,
                                        },
                                    },
                                    create: {
                                        userId: user.id,
                                        channelId: channel.id,
                                        status: 'requested',
                                        lastUpdated: new Date(),
                                    },
                                    update: {
                                        status: 'requested',
                                        lastUpdated: new Date(),
                                    },
                                })];
                        case 5:
                            // Create or update UserChannelStatus
                            _a.sent();
                            _a.label = 6;
                        case 6: return [4 /*yield*/, this.channelService.incrementPendingRequests(channel.id)];
                        case 7:
                            _a.sent();
                            _a.label = 8;
                        case 8: return [3 /*break*/, 10];
                        case 9:
                            error_42 = _a.sent();
                            this.logger.error("Error handling join request: ".concat(error_42.message));
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleChatMemberUpdate = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var update, userId, chatId, oldStatus, newStatus, channel, user, userChannelStatus, wasRequested, wasLeft, isNewMember, error_43, channel, user, updatedChannel, error_44, error_45;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            update = ctx.chatMember || ctx.myChatMember;
                            if (!update)
                                return [2 /*return*/];
                            userId = update.from.id;
                            chatId = String(update.chat.id);
                            oldStatus = update.old_chat_member.status;
                            newStatus = update.new_chat_member.status;
                            if (!(['member', 'administrator', 'creator'].includes(newStatus) &&
                                !['member', 'administrator', 'creator'].includes(oldStatus))) return [3 /*break*/, 12];
                            return [4 /*yield*/, this.channelStatusService.updateStatus(String(userId), chatId, client_1.ChannelStatus.joined)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 11, , 12]);
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findFirst({
                                    where: {
                                        channelId: chatId,
                                        isActive: true,
                                        type: { in: ['PUBLIC', 'PRIVATE'] }
                                    },
                                })];
                        case 3:
                            channel = _a.sent();
                            if (!channel) return [3 /*break*/, 10];
                            return [4 /*yield*/, this.prisma.user.findUnique({
                                    where: { telegramId: String(userId) },
                                })];
                        case 4:
                            user = _a.sent();
                            if (!user) return [3 /*break*/, 10];
                            return [4 /*yield*/, this.prisma.userChannelStatus.findUnique({
                                    where: {
                                        userId_channelId: {
                                            userId: user.id,
                                            channelId: channel.id,
                                        },
                                    },
                                })];
                        case 5:
                            userChannelStatus = _a.sent();
                            wasRequested = (userChannelStatus === null || userChannelStatus === void 0 ? void 0 : userChannelStatus.status) === 'requested';
                            wasLeft = (userChannelStatus === null || userChannelStatus === void 0 ? void 0 : userChannelStatus.status) === 'left';
                            isNewMember = !userChannelStatus || userChannelStatus.status !== 'joined';
                            // Update UserChannelStatus
                            return [4 /*yield*/, this.prisma.userChannelStatus.upsert({
                                    where: {
                                        userId_channelId: {
                                            userId: user.id,
                                            channelId: channel.id,
                                        },
                                    },
                                    create: {
                                        userId: user.id,
                                        channelId: channel.id,
                                        status: 'joined',
                                        lastUpdated: new Date(),
                                    },
                                    update: {
                                        status: 'joined',
                                        lastUpdated: new Date(),
                                    },
                                })];
                        case 6:
                            // Update UserChannelStatus
                            _a.sent();
                            if (!isNewMember) return [3 /*break*/, 8];
                            return [4 /*yield*/, this.channelService.incrementMemberCount(channel.id)];
                        case 7:
                            _a.sent();
                            _a.label = 8;
                        case 8:
                            if (!(wasRequested && channel.type === 'PRIVATE')) return [3 /*break*/, 10];
                            return [4 /*yield*/, this.channelService.decrementPendingRequests(channel.id)];
                        case 9:
                            _a.sent();
                            _a.label = 10;
                        case 10: return [3 /*break*/, 12];
                        case 11:
                            error_43 = _a.sent();
                            this.logger.error("Error handling member join: ".concat(error_43.message));
                            return [3 /*break*/, 12];
                        case 12:
                            if (!(['left', 'kicked', 'banned'].includes(newStatus) &&
                                ['member', 'administrator', 'creator', 'restricted'].includes(oldStatus))) return [3 /*break*/, 25];
                            return [4 /*yield*/, this.channelStatusService.updateStatus(String(userId), chatId, client_1.ChannelStatus.left)];
                        case 13:
                            _a.sent();
                            _a.label = 14;
                        case 14:
                            _a.trys.push([14, 24, , 25]);
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findFirst({
                                    where: {
                                        channelId: chatId,
                                        isActive: true,
                                        type: { in: ['PUBLIC', 'PRIVATE'] }
                                    },
                                })];
                        case 15:
                            channel = _a.sent();
                            if (!channel) return [3 /*break*/, 23];
                            return [4 /*yield*/, this.prisma.user.findUnique({
                                    where: { telegramId: String(userId) },
                                })];
                        case 16:
                            user = _a.sent();
                            if (!user) return [3 /*break*/, 20];
                            // Update status to left
                            return [4 /*yield*/, this.prisma.userChannelStatus.upsert({
                                    where: {
                                        userId_channelId: {
                                            userId: user.id,
                                            channelId: channel.id,
                                        },
                                    },
                                    create: {
                                        userId: user.id,
                                        channelId: channel.id,
                                        status: 'left',
                                        lastUpdated: new Date(),
                                    },
                                    update: {
                                        status: 'left',
                                        lastUpdated: new Date(),
                                    },
                                })];
                        case 17:
                            // Update status to left
                            _a.sent();
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findUnique({
                                    where: { id: channel.id },
                                })];
                        case 18:
                            updatedChannel = _a.sent();
                            if (!(updatedChannel && updatedChannel.currentMembers > 0)) return [3 /*break*/, 20];
                            return [4 /*yield*/, this.prisma.mandatoryChannel.update({
                                    where: { id: channel.id },
                                    data: { currentMembers: { decrement: 1 } },
                                })];
                        case 19:
                            _a.sent();
                            _a.label = 20;
                        case 20:
                            _a.trys.push([20, 22, , 23]);
                            return [4 /*yield*/, ctx.api.sendMessage(userId, "\u26A0\uFE0F Siz <b>".concat(channel.channelName, "</b> kanaldan chiqib ketdingiz.\n\n") +
                                    "Botdan foydalanishda davom etish uchun qayta obuna bo'ling.\n\n" +
                                    "Kanal: ".concat(channel.channelLink), { parse_mode: 'HTML' })];
                        case 21:
                            _a.sent();
                            return [3 /*break*/, 23];
                        case 22:
                            error_44 = _a.sent();
                            return [3 /*break*/, 23];
                        case 23: return [3 /*break*/, 25];
                        case 24:
                            error_45 = _a.sent();
                            this.logger.error("Error handling member leave: ".concat(error_45.message));
                            return [3 /*break*/, 25];
                        case 25: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleMovieCallback = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var code;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.callbackQuery || !('data' in ctx.callbackQuery))
                                return [2 /*return*/];
                            code = parseInt(ctx.callbackQuery.data.replace('movie_', ''));
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.sendMovieToUser(ctx, code)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleSerialCallback = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var code;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.callbackQuery || !('data' in ctx.callbackQuery))
                                return [2 /*return*/];
                            code = parseInt(ctx.callbackQuery.data.replace('serial_', ''));
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.sendSerialToUser(ctx, code)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleEpisodeCallback = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var match, serialId, episodeNumber, hasSubscription, episode, serial, botUsername, field, shareText, serialDeepLink, shareKeyboard, videoCaption, videoData, error_46, error_47;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.callbackQuery || !('data' in ctx.callbackQuery) || !ctx.from)
                                return [2 /*return*/];
                            match = ctx.callbackQuery.data.match(/^episode_(\d+)_(\d+)$/);
                            if (!match)
                                return [2 /*return*/];
                            serialId = parseInt(match[1]);
                            episodeNumber = parseInt(match[2]);
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "".concat(episodeNumber, "-qism yuklanmoqda..."),
                                })];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 18, , 20]);
                            return [4 /*yield*/, this.checkSubscription(ctx, 0, 'episode')];
                        case 3:
                            hasSubscription = _a.sent();
                            if (!hasSubscription) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.episodeService.findBySerialIdAndNumber(serialId, episodeNumber)];
                        case 4:
                            episode = _a.sent();
                            if (!!episode) return [3 /*break*/, 6];
                            return [4 /*yield*/, ctx.reply('❌ Qism topilmadi.')];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                        case 6: return [4 /*yield*/, this.serialService.findById(serialId)];
                        case 7:
                            serial = _a.sent();
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 8:
                            botUsername = (_a.sent()).username;
                            return [4 /*yield*/, this.fieldService.findOne(serial.fieldId)];
                        case 9:
                            field = _a.sent();
                            shareText = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Serial nomi: ".concat(serial.title, "\n\u251C\u2023 Serial kodi: ").concat(serial.code, "\n\u251C\u2023 Qism: ").concat(episodeNumber, "\n\u251C\u2023 Serial linki: https://t.me/").concat(botUsername, "?start=s").concat(serial.code, "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u25B6\uFE0F Serialning to'liq qismlarini @").concat(botUsername, " dan tomosha qilishingiz mumkin!");
                            serialDeepLink = "https://t.me/".concat(botUsername, "?start=s").concat(serial.code);
                            shareKeyboard = new grammy_1.InlineKeyboard()
                                .url("\uD83D\uDCFA Serial kodi: ".concat(serial.code), serialDeepLink)
                                .row()
                                .switchInline('♻️Ulashish', shareText);
                            videoCaption = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Serial nomi : ".concat(serial.title, "\n\u251C\u2023 Serial kodi: ").concat(serial.code, "\n\u251C\u2023 Qism: ").concat(episodeNumber, "\n\u251C\u2023 Janrlari: ").concat(serial.genre || "Noma'lum", "\n\u251C\u2023 Kanal: ").concat((field === null || field === void 0 ? void 0 : field.channelLink) || '@' + ((field === null || field === void 0 ? void 0 : field.name) || 'Kanal'), "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\u25B6\uFE0F Serialning to'liq qismini @").concat(botUsername, " dan tomosha qilishingiz mumkin!\n\n<blockquote expandable>\u26A0\uFE0F ESLATMA:\nBiz yuklayotgan kinolar turli saytlardan olinadi.\n\uD83C\uDFB0 Ba'zi kinolarda kazino, qimor yoki \"pulni ko'paytirib beramiz\" degan reklama chiqishi mumkin.\n\uD83D\uDEAB Bunday reklamalarga aslo ishonmang! Ular firibgarlar va sizni aldaydi.\n\uD83D\uDD1E Ba'zi sahnalar 18+ bo'lishi mumkin \u2013 agar noqulay bo'lsa, ko'rishni to'xtating.</blockquote>").trim();
                            if (!episode.videoFileId) return [3 /*break*/, 11];
                            return [4 /*yield*/, ctx.replyWithVideo(episode.videoFileId, {
                                    caption: videoCaption,
                                    protect_content: true,
                                    parse_mode: 'HTML',
                                    reply_markup: shareKeyboard,
                                })];
                        case 10:
                            _a.sent();
                            return [3 /*break*/, 17];
                        case 11:
                            if (!episode.videoMessageId) return [3 /*break*/, 17];
                            _a.label = 12;
                        case 12:
                            _a.trys.push([12, 15, , 17]);
                            videoData = JSON.parse(episode.videoMessageId);
                            if (!(Array.isArray(videoData) && videoData.length > 0)) return [3 /*break*/, 14];
                            return [4 /*yield*/, ctx.api.copyMessage(ctx.from.id, videoData[0].channelId, videoData[0].messageId, {
                                    protect_content: true,
                                    reply_markup: shareKeyboard,
                                })];
                        case 13:
                            _a.sent();
                            _a.label = 14;
                        case 14: return [3 /*break*/, 17];
                        case 15:
                            error_46 = _a.sent();
                            this.logger.error("[UserHandler.handleEpisodeCallback] Failed to copy video - Serial: ".concat(serialId, ", Episode: ").concat(episodeNumber, ", User: ").concat(ctx.from.id, ", Error: ").concat(error_46.message), error_46.stack);
                            return [4 /*yield*/, ctx.reply('❌ Video yuklashda xatolik.')];
                        case 16:
                            _a.sent();
                            return [3 /*break*/, 17];
                        case 17: return [3 /*break*/, 20];
                        case 18:
                            error_47 = _a.sent();
                            this.logger.error("[UserHandler.handleEpisodeCallback] Error - Serial: ".concat(serialId, ", Episode: ").concat(episodeNumber, ", User: ").concat(ctx.from.id, ", Error: ").concat(error_47.message), error_47.stack);
                            return [4 /*yield*/, ctx.reply('❌ Qism yuklashda xatolik yuz berdi.')];
                        case 19:
                            _a.sent();
                            return [3 /*break*/, 20];
                        case 20: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleMovieEpisodeCallback = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var match, movieId, episodeNumber, hasSubscription, movie, botUsername, field, shareText, movieDeepLink, shareKeyboard, videoCaption, videoData, error_48, episode, videoData, error_49, error_50;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.callbackQuery || !('data' in ctx.callbackQuery) || !ctx.from)
                                return [2 /*return*/];
                            match = ctx.callbackQuery.data.match(/^movie_episode_(\d+)_(\d+)$/);
                            if (!match)
                                return [2 /*return*/];
                            movieId = parseInt(match[1]);
                            episodeNumber = parseInt(match[2]);
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "".concat(episodeNumber, "-qism yuklanmoqda..."),
                                })];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 29, , 31]);
                            return [4 /*yield*/, this.checkSubscription(ctx, 0, 'movie_episode')];
                        case 3:
                            hasSubscription = _a.sent();
                            if (!hasSubscription) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.movieService.findById(movieId)];
                        case 4:
                            movie = _a.sent();
                            if (!!movie) return [3 /*break*/, 6];
                            return [4 /*yield*/, ctx.reply('❌ Kino topilmadi.')];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                        case 6: return [4 /*yield*/, ctx.api.getMe()];
                        case 7:
                            botUsername = (_a.sent()).username;
                            return [4 /*yield*/, this.fieldService.findOne(movie.fieldId)];
                        case 8:
                            field = _a.sent();
                            shareText = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Kino nomi: ".concat(movie.title, "\n\u251C\u2023 Kino kodi: ").concat(movie.code, "\n\u251C\u2023 Qism: ").concat(episodeNumber, "\n\u251C\u2023 Kino linki: https://t.me/").concat(botUsername, "?start=").concat(movie.code, "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u25B6\uFE0F Kinoning to'liq qismini @").concat(botUsername, " dan tomosha qilishingiz mumkin!");
                            movieDeepLink = "https://t.me/".concat(botUsername, "?start=").concat(movie.code);
                            shareKeyboard = new grammy_1.InlineKeyboard()
                                .url("\uD83C\uDFAC Kino kodi: ".concat(movie.code), movieDeepLink)
                                .row()
                                .switchInline('♻️Ulashish', shareText);
                            videoCaption = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Kino nomi : ".concat(movie.title, "\n\u251C\u2023 Kino kodi: ").concat(movie.code, "\n\u251C\u2023 Qism: ").concat(episodeNumber, "\n\u251C\u2023 Janrlari: ").concat(movie.genre || "Noma'lum", "\n\u251C\u2023 Kanal: ").concat((field === null || field === void 0 ? void 0 : field.channelLink) || '@' + ((field === null || field === void 0 ? void 0 : field.name) || 'Kanal'), "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\u25B6\uFE0F Kinoning to'liq qismini @").concat(botUsername, " dan tomosha qilishingiz mumkin!\n\n<blockquote expandable>\u26A0\uFE0F ESLATMA:\nBiz yuklayotgan kinolar turli saytlardan olinadi.\n\uD83C\uDFB0 Ba'zi kinolarda kazino, qimor yoki \"pulni ko'paytirib beramiz\" degan reklama chiqishi mumkin.\n\uD83D\uDEAB Bunday reklamalarga aslo ishonmang! Ular firibgarlar va sizni aldaydi.\n\uD83D\uDD1E Ba'zi sahnalar 18+ bo'lishi mumkin \u2013 agar noqulay bo'lsa, ko'rishni to'xtating.</blockquote>").trim();
                            if (!(episodeNumber === 1)) return [3 /*break*/, 17];
                            if (!movie.videoFileId) return [3 /*break*/, 10];
                            return [4 /*yield*/, ctx.replyWithVideo(movie.videoFileId, {
                                    caption: videoCaption,
                                    protect_content: true,
                                    reply_markup: shareKeyboard,
                                    parse_mode: 'HTML',
                                })];
                        case 9:
                            _a.sent();
                            return [3 /*break*/, 16];
                        case 10:
                            if (!movie.videoMessageId) return [3 /*break*/, 16];
                            _a.label = 11;
                        case 11:
                            _a.trys.push([11, 14, , 16]);
                            videoData = JSON.parse(movie.videoMessageId);
                            if (!(Array.isArray(videoData) && videoData.length > 0)) return [3 /*break*/, 13];
                            return [4 /*yield*/, ctx.api.copyMessage(ctx.from.id, videoData[0].channelId, videoData[0].messageId, {
                                    protect_content: true,
                                    reply_markup: shareKeyboard,
                                    caption: videoCaption,
                                })];
                        case 12:
                            _a.sent();
                            _a.label = 13;
                        case 13: return [3 /*break*/, 16];
                        case 14:
                            error_48 = _a.sent();
                            this.logger.error("[UserHandler.handleMovieEpisodeCallback] Failed to copy movie video - Movie: ".concat(movieId, ", Episode: ").concat(episodeNumber, ", User: ").concat(ctx.from.id, ", Error: ").concat(error_48.message), error_48.stack);
                            return [4 /*yield*/, ctx.reply('❌ Video yuklashda xatolik.')];
                        case 15:
                            _a.sent();
                            return [3 /*break*/, 16];
                        case 16: return [3 /*break*/, 28];
                        case 17: return [4 /*yield*/, this.movieEpisodeService.findByMovieIdAndNumber(movieId, episodeNumber)];
                        case 18:
                            episode = _a.sent();
                            if (!!episode) return [3 /*break*/, 20];
                            return [4 /*yield*/, ctx.reply('❌ Qism topilmadi.')];
                        case 19:
                            _a.sent();
                            return [2 /*return*/];
                        case 20:
                            if (!episode.videoFileId) return [3 /*break*/, 22];
                            return [4 /*yield*/, ctx.replyWithVideo(episode.videoFileId, {
                                    caption: videoCaption,
                                    protect_content: true,
                                    reply_markup: shareKeyboard,
                                    parse_mode: 'HTML',
                                })];
                        case 21:
                            _a.sent();
                            return [3 /*break*/, 28];
                        case 22:
                            if (!episode.videoMessageId) return [3 /*break*/, 28];
                            _a.label = 23;
                        case 23:
                            _a.trys.push([23, 26, , 28]);
                            videoData = JSON.parse(episode.videoMessageId);
                            if (!(Array.isArray(videoData) && videoData.length > 0)) return [3 /*break*/, 25];
                            return [4 /*yield*/, ctx.api.copyMessage(ctx.from.id, videoData[0].channelId, videoData[0].messageId, {
                                    protect_content: true,
                                    reply_markup: shareKeyboard,
                                    caption: videoCaption,
                                    parse_mode: 'HTML',
                                })];
                        case 24:
                            _a.sent();
                            _a.label = 25;
                        case 25: return [3 /*break*/, 28];
                        case 26:
                            error_49 = _a.sent();
                            this.logger.error("[UserHandler.handleMovieEpisodeCallback] Failed to copy movie episode video - Movie: ".concat(movieId, ", Episode: ").concat(episodeNumber, ", User: ").concat(ctx.from.id, ", Error: ").concat(error_49.message), error_49.stack);
                            return [4 /*yield*/, ctx.reply('❌ Video yuklashda xatolik.')];
                        case 27:
                            _a.sent();
                            return [3 /*break*/, 28];
                        case 28: return [3 /*break*/, 31];
                        case 29:
                            error_50 = _a.sent();
                            this.logger.error("[UserHandler.handleMovieEpisodeCallback] Error - Movie: ".concat(movieId, ", Episode: ").concat(episodeNumber, ", User: ").concat(ctx.from.id, ", Error: ").concat(error_50.message), error_50.stack);
                            return [4 /*yield*/, ctx.reply('❌ Qism yuklashda xatolik yuz berdi.')];
                        case 30:
                            _a.sent();
                            return [3 /*break*/, 31];
                        case 31: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleFieldChannelCallback = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var fieldId, field, channelUrl, keyboard, error_51;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.callbackQuery || !('data' in ctx.callbackQuery))
                                return [2 /*return*/];
                            fieldId = parseInt(ctx.callbackQuery.data.replace('field_channel_', ''));
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 7, , 9]);
                            return [4 /*yield*/, this.fieldService.findOne(fieldId)];
                        case 2:
                            field = _a.sent();
                            if (!!field) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: '❌ Field topilmadi.',
                                    show_alert: true,
                                })];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4: return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 5:
                            _a.sent();
                            channelUrl = field.channelLink || "https://t.me/".concat(field.channelId);
                            keyboard = new grammy_1.InlineKeyboard()
                                .url("\uD83D\uDCC1 ".concat(field.name, " kanaliga o'tish"), channelUrl)
                                .row()
                                .text('🔙 Orqaga', 'back_to_main');
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCC1 **".concat(field.name, "**\n\n") +
                                    "Kanalga o'tish uchun quyidagi tugmani bosing:", {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 9];
                        case 7:
                            error_51 = _a.sent();
                            this.logger.error("[UserHandler.handleFieldChannelCallback] Error - FieldID: ".concat(fieldId, ", User: ").concat(ctx.from.id, ", Error: ").concat(error_51.message), error_51.stack);
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: '❌ Xatolik yuz berdi.',
                                    show_alert: true,
                                })];
                        case 8:
                            _a.sent();
                            return [3 /*break*/, 9];
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        UserHandler_1.prototype.handleInlineQuery = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var query, serialMatch, movieMatch, results, code, movie, botUsername, shareLink, field, channelLink, messageText, code, serial, botUsername, shareLink, episodes, field, channelLink, messageText, error_52;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.inlineQuery)
                                return [2 /*return*/];
                            query = ctx.inlineQuery.query.trim();
                            serialMatch = query.match(/^s(\d+)$/i);
                            movieMatch = !serialMatch ? query.match(/^(\d+)$/) : null;
                            results = [];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 12, , 14]);
                            if (!movieMatch) return [3 /*break*/, 5];
                            code = parseInt(movieMatch[1]);
                            return [4 /*yield*/, this.movieService.findByCode(String(code))];
                        case 2:
                            movie = _a.sent();
                            if (!movie) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 3:
                            botUsername = (_a.sent()).username;
                            shareLink = "https://t.me/".concat(botUsername, "?start=").concat(code);
                            return [4 /*yield*/, this.prisma.field.findUnique({
                                    where: { id: movie.fieldId },
                                    select: { channelLink: true, name: true },
                                })];
                        case 4:
                            field = _a.sent();
                            channelLink = (field === null || field === void 0 ? void 0 : field.channelLink) || '@Kanal';
                            messageText = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Kino nomi: ".concat(movie.title, "\n\u251C\u2023 Kino kodi: ").concat(code, "\n\u251C\u2023 Qism: ").concat(movie.totalEpisodes || 1, "\n\u251C\u2023 Janrlari: ").concat(movie.genre || "Noma'lum", "\n\u251C\u2023 Kanal: ").concat(channelLink, "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\u25B6\uFE0F Kinoni tomosha qilish uchun pastdagi havolaga bosing. \u2B07\uFE0F\n").concat(shareLink);
                            results.push({
                                type: 'article',
                                id: "movie_".concat(code),
                                title: "\uD83C\uDFAC ".concat(movie.title),
                                description: "Kod: ".concat(code, " | ").concat(movie.genre || "Janr: noma'lum"),
                                input_message_content: {
                                    message_text: messageText,
                                },
                                reply_markup: {
                                    inline_keyboard: [
                                        [
                                            {
                                                text: '▶️ Tomosha qilish',
                                                url: shareLink,
                                            },
                                        ],
                                    ],
                                },
                            });
                            _a.label = 5;
                        case 5:
                            if (!serialMatch) return [3 /*break*/, 10];
                            code = parseInt(serialMatch[1]);
                            return [4 /*yield*/, this.serialService.findByCode(String(code))];
                        case 6:
                            serial = _a.sent();
                            if (!serial) return [3 /*break*/, 10];
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 7:
                            botUsername = (_a.sent()).username;
                            shareLink = "https://t.me/".concat(botUsername, "?start=s").concat(code);
                            return [4 /*yield*/, this.episodeService.findBySerialId(serial.id)];
                        case 8:
                            episodes = _a.sent();
                            return [4 /*yield*/, this.prisma.field.findUnique({
                                    where: { id: serial.fieldId },
                                    select: { channelLink: true, name: true },
                                })];
                        case 9:
                            field = _a.sent();
                            channelLink = (field === null || field === void 0 ? void 0 : field.channelLink) || '@Kanal';
                            messageText = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Serial nomi: ".concat(serial.title, "\n\u251C\u2023 Serial kodi: ").concat(code, "\n\u251C\u2023 Qism: ").concat(serial.totalEpisodes || episodes.length || 1, "\n\u251C\u2023 Janrlari: ").concat(serial.genre || "Noma'lum", "\n\u251C\u2023 Kanal: ").concat(channelLink, "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\u25B6\uFE0F Serialni tomosha qilish uchun pastdagi havolaga bosing. \u2B07\uFE0F\n").concat(shareLink);
                            results.push({
                                type: 'article',
                                id: "serial_".concat(code),
                                title: "\uD83D\uDCFA ".concat(serial.title),
                                description: "Kod: ".concat(code, " | ").concat(serial.genre || "Janr: noma'lum"),
                                input_message_content: {
                                    message_text: messageText,
                                },
                                reply_markup: {
                                    inline_keyboard: [
                                        [
                                            {
                                                text: '▶️ Tomosha qilish',
                                                url: shareLink,
                                            },
                                        ],
                                    ],
                                },
                            });
                            _a.label = 10;
                        case 10: return [4 /*yield*/, ctx.answerInlineQuery(results, {
                                cache_time: 300,
                                is_personal: true,
                            })];
                        case 11:
                            _a.sent();
                            return [3 /*break*/, 14];
                        case 12:
                            error_52 = _a.sent();
                            this.logger.error("[UserHandler.handleInlineQuery] Error - User: ".concat(ctx.from.id, ", Query: ").concat(ctx.inlineQuery.query, ", Error: ").concat(error_52.message), error_52.stack);
                            return [4 /*yield*/, ctx.answerInlineQuery([])];
                        case 13:
                            _a.sent();
                            return [3 /*break*/, 14];
                        case 14: return [2 /*return*/];
                    }
                });
            });
        };
        return UserHandler_1;
    }());
    __setFunctionName(_classThis, "UserHandler");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserHandler = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserHandler = _classThis;
}();
exports.UserHandler = UserHandler;
