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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminHandler = void 0;
var common_1 = require("@nestjs/common");
var grammy_1 = require("grammy");
var client_1 = require("@prisma/client");
var session_interface_1 = require("./types/session.interface");
var admin_menu_keyboard_1 = require("./keyboards/admin-menu.keyboard");
var AdminHandler = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AdminHandler = _classThis = /** @class */ (function () {
        function AdminHandler_1(adminService, userService, movieService, serialService, serialManagementService, fieldService, paymentService, watchHistoryService, broadcastService, channelService, sessionService, premiumService, settingsService, grammyBot, prisma) {
            this.adminService = adminService;
            this.userService = userService;
            this.movieService = movieService;
            this.serialService = serialService;
            this.serialManagementService = serialManagementService;
            this.fieldService = fieldService;
            this.paymentService = paymentService;
            this.watchHistoryService = watchHistoryService;
            this.broadcastService = broadcastService;
            this.channelService = channelService;
            this.sessionService = sessionService;
            this.premiumService = premiumService;
            this.settingsService = settingsService;
            this.grammyBot = grammyBot;
            this.prisma = prisma;
            this.logger = new common_1.Logger(AdminHandler.name);
            this.isDevelopment = process.env.NODE_ENV !== 'production';
        }
        AdminHandler_1.prototype.onModuleInit = function () {
            try {
                this.registerHandlers();
            }
            catch (error) {
                this.logger.error("[AdminHandler.onModuleInit] Failed to initialize - ".concat(error.message), error.stack);
                throw error;
            }
        };
        AdminHandler_1.prototype.registerHandlers = function () {
            var _this = this;
            var bot = this.grammyBot.bot;
            bot.command('admin', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin, error_1;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 6, , 8]);
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _b.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.handleAdminStart(ctx, admin)];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, ctx.reply('❌ Siz admin emassiz!')];
                        case 4:
                            _b.sent();
                            _b.label = 5;
                        case 5: return [3 /*break*/, 8];
                        case 6:
                            error_1 = _b.sent();
                            this.logger.error("\u274C Error in /admin command for user ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id));
                            this.logger.error("Error: ".concat(error_1.message));
                            this.logger.error('Stack:', error_1.stack);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.').catch(function () { })];
                        case 7:
                            _b.sent();
                            return [3 /*break*/, 8];
                        case 8: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('📊 Statistika', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_2;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            return [4 /*yield*/, this.withRoleCheck([client_1.AdminRole.MANAGER, client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.showStatistics(ctx)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                }); }); })(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_2 = _b.sent();
                            this.logger.error("[AdminHandler.statisticsHandler] Error - Admin: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_2.message));
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.').catch(function () { })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('🔙 Orqaga', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_3;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.handleBack.bind(this))(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_3 = _b.sent();
                            this.logger.error("[AdminHandler.backHandler] Error - Admin: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_3.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('❌ Bekor qilish', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_4;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.handleCancel.bind(this))(ctx)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_4 = _b.sent();
                            this.logger.error("[AdminHandler.cancelHandler] Error - Admin: ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id, ", Error: ").concat(error_4.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('🎬 Kino yuklash', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.startMovieCreation.bind(this))(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_5 = _a.sent();
                            this.logger.error("\u274C Error in movie upload handler: ".concat(error_5.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('📺 Serial yuklash', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.startSerialCreation.bind(this))(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_6 = _a.sent();
                            this.logger.error("\u274C Error in serial upload handler: ".concat(error_6.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('🆕 Yangi serial yaratish', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.startNewSerialCreation.bind(this))(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_7 = _a.sent();
                            this.logger.error("\u274C Error in new serial handler: ".concat(error_7.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears("➕ Mavjud kino/serialga qism qo'shish", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.startAddingEpisode.bind(this))(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_8 = _a.sent();
                            this.logger.error("\u274C Error in add episode handler: ".concat(error_8.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('📹 Kinoga video biriktirish', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_9;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.startVideoAttachment.bind(this))(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_9 = _a.sent();
                            this.logger.error("\u274C Error in video attachment handler: ".concat(error_9.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('📁 Fieldlar', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_10;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.openFieldsMenu.bind(this))(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_10 = _a.sent();
                            this.logger.error("\u274C Error in fields menu handler: ".concat(error_10.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears("➕ Field qo'shish", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_11;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.startAddingField.bind(this))(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_11 = _a.sent();
                            this.logger.error("\u274C Error in add field handler: ".concat(error_11.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears("📋 Fieldlar ro'yxati", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_12;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.showFieldsList.bind(this))(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_12 = _a.sent();
                            this.logger.error("\u274C Error in fields list handler: ".concat(error_12.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('📢 Majburiy kanallar', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_13;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withRoleCheck([client_1.AdminRole.MANAGER, client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.showMandatoryChannels(ctx)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                }); }); })(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_13 = _a.sent();
                            this.logger.error("\u274C Error in mandatory channels handler: ".concat(error_13.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears("➕ Majburiy kanal qo'shish", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_14;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withRoleCheck([client_1.AdminRole.MANAGER, client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.startAddMandatoryChannel(ctx)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                }); }); })(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_14 = _a.sent();
                            this.logger.error("\u274C Error in add mandatory channel handler: ".concat(error_14.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears("📊 Tarixni ko'rish", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_15;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withRoleCheck([client_1.AdminRole.MANAGER, client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.showChannelHistory(ctx)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                }); }); })(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_15 = _a.sent();
                            this.logger.error("\u274C Error in channel history handler: ".concat(error_15.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears("📋 Hammasini ko'rish", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_16;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withRoleCheck([client_1.AdminRole.MANAGER, client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.showAllChannelsHistory(ctx)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                }); }); })(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_16 = _a.sent();
                            this.logger.error("\u274C Error in all channels history handler: ".concat(error_16.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears("� Qayta yangilash", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_17;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.showAllChannelsHistory.bind(this))(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_17 = _a.sent();
                            this.logger.error("\u274C Error in refresh history handler: ".concat(error_17.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears("�🔍 Link bo'yicha qidirish", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_18;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.startSearchChannelByLink.bind(this))(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_18 = _a.sent();
                            this.logger.error("\u274C Error in search channel handler: ".concat(error_18.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('💾 Database kanallar', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin, error_19;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 7]);
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply('❌ Siz admin emassiz!')];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3: return [4 /*yield*/, this.showDatabaseChannels(ctx)];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 5:
                            error_19 = _a.sent();
                            this.logger.error("\u274C Error in database channels handler: ".concat(error_19.message));
                            this.logger.error('Stack:', error_19.stack);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.').catch(function () { })];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears("➕ Database kanal qo'shish", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_20;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withAdminCheck(this.startAddDatabaseChannel.bind(this))(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_20 = _a.sent();
                            this.logger.error("\u274C Error in add database channel handler: ".concat(error_20.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears("💳 To'lovlar", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_21;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.showPaymentsMenu(ctx)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                }); }); })(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_21 = _a.sent();
                            this.logger.error("\u274C Error in payments menu handler: ".concat(error_21.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears("📥 Yangi to'lovlar", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_22;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.showPendingPayments(ctx)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                }); }); })(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_22 = _a.sent();
                            this.logger.error("\u274C Error in pending payments handler: ".concat(error_22.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('✅ Tasdiqlangan', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var error_23;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.showApprovedPayments(ctx)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                }); }); })(ctx)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_23 = _a.sent();
                            this.logger.error("\u274C Error in approved payments handler: ".concat(error_23.message));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.hears('❌ Rad etilgan', this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showRejectedPayments(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears("📊 To'lov statistikasi", this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showPaymentStatistics(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears('🚫 Premium banned users', this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showPremiumBannedUsersMenu(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears('👥 Adminlar', this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showAdminsList(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears('⚙️ Sozlamalar', this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showSettings(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears('📣 Reklama yuborish', this.withAdminCheck(this.startBroadcast.bind(this)));
            bot.hears('🌐 Web Panel', this.withRoleCheck([client_1.AdminRole.MANAGER, client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showWebPanel(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears('👥 Barcha foydalanuvchilar', this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showAllUsers(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears('🚫 Foydalanuvchini bloklash', this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.startBlockUser(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears('✅ Blokdan ochish', this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.startUnblockUser(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears("👥 Hamma userlarni ko'rish", this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showAllPremiumBannedUsers(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears('🔍 Qidirish', this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.startSearchPremiumBannedUser(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears("💳 To'lovlar menyusiga qaytish", this.withRoleCheck([client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showPaymentsMenu(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears("🗑️ Kontent o'chirish", this.withRoleCheck([client_1.AdminRole.MANAGER, client_1.AdminRole.SUPERADMIN], function (ctx, admin) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.startDeleteContent(ctx)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }));
            bot.hears('🗑️ Tarixni tozalash', this.withAdminCheck(this.clearChannelHistory.bind(this)));
            bot.callbackQuery(/^field_detail_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.showFieldDetail(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('back_to_fields', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.backToFieldsList(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^delete_field_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.deleteField(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^delete_mandatory_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.deleteMandatoryChannel(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^confirm_delete_db_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.confirmDeleteDatabaseChannel(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^delete_db_channel_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.deleteDatabaseChannel(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^goto_db_channel_(.+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.gotoDbChannel(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('show_delete_db_channels', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.showDeleteDatabaseChannels(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('show_db_channels_menu', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.showDatabaseChannels(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('back_to_db_channels', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.showDatabaseChannels(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^approve_payment_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.approvePayment(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^reject_payment_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.rejectPayment(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^approve_join_(\d+)_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.approveJoinRequest(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^reject_join_(\d+)_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.rejectJoinRequest(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('view_join_requests', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.viewJoinRequests(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('cancel_premiere', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 5];
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery('❌ Bekor qilindi')];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, ctx.reply("❌ Premyera e'loni bekor qilindi", admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('confirm_telegram_premium_broadcast', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.confirmTelegramPremiumBroadcast(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('cancel_telegram_premium_broadcast', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 5];
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery('❌ Bekor qilindi')];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, ctx.reply('❌ Telegram Premium yuborish bekor qilindi', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^confirm_block_user_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.confirmBlockUser(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('cancel_block_user', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 5];
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery('❌ Bekor qilindi')];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, ctx.reply('❌ Bloklash bekor qilindi', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^confirm_unblock_user_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.confirmUnblockUser(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('cancel_unblock_user', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 5];
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery('❌ Bekor qilindi')];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, ctx.reply('❌ Blokdan ochish bekor qilindi', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^confirm_unban_premium_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.confirmUnbanPremiumUser(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('cancel_unban_premium', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.cancelUnbanPremium(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^confirm_delete_movie_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.confirmDeleteMovie(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^confirm_delete_serial_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.confirmDeleteSerial(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('cancel_delete_content', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.cancelDeleteContent(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^send_to_field_(movie|serial)_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.sendToFieldChannel(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^broadcast_premiere_(movie|serial)_(\d+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.broadcastPremiereToUsers(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('confirm_clear_history', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.confirmClearHistory(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('cancel_clear_history', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.answerCallbackQuery('❌ Bekor qilindi')];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, ctx.reply('❌ Tarixni tozalash bekor qilindi.', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('add_new_admin', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.startAddingAdmin(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^delete_admin_(.+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.deleteAdmin(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^select_admin_role_(ADMIN|MANAGER|SUPERADMIN)_(.+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.handleRoleSelection(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('edit_prices', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.startEditingPrices(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('edit_card', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.startEditingCard(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('edit_contact', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.startEditingContactMessage(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('back_to_admin_menu', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.backToAdminMenu(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('broadcast_premiere', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.startPremiereBroadcast(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('broadcast_telegram_premium', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.startTelegramPremiumBroadcast(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^broadcast_(all|premium|free)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.handleBroadcastType(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            // Genre selection callbacks
            bot.callbackQuery(/^toggle_genre_(.+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.handleGenreToggle(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('manual_genre_input', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.startManualGenreInput(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('finish_genre_selection', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.finishGenreSelection(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            // Description metadata callbacks
            bot.callbackQuery('desc_manual_input', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.startDescriptionManualInput(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('desc_next', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.finishDescriptionStep(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('desc_rating', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.startRatingInput(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('desc_language', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.showLanguageOptions(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^select_lang_(.+)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.handleLanguageSelection(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('desc_subtitle', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.showSubtitleOptions(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^select_subtitle_(yes|no)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.handleSubtitleSelection(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery(/^remove_desc_(rating|language|subtitle)$/, function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.removeDescriptionMetadata(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('subtitle_back', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.callbackQuery('desc_language_back', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            bot.on('message:photo', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
                var admin, session;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!ctx.from) return [3 /*break*/, 2];
                            return [4 /*yield*/, next()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 3:
                            admin = _a.sent();
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!(admin && session)) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.handlePhoto(ctx)];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 5: return [4 /*yield*/, next()];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            }); });
            bot.on('message:video', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
                var admin, session;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!ctx.from) return [3 /*break*/, 2];
                            return [4 /*yield*/, next()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 3:
                            admin = _a.sent();
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!(admin && session)) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.handleVideoMessage(ctx)];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 5: return [4 /*yield*/, next()];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            }); });
            bot.on('message:text', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
                var admin, session;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!ctx.from) return [3 /*break*/, 2];
                            return [4 /*yield*/, next()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 3:
                            admin = _a.sent();
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!(admin && session)) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.handleSessionText(ctx)];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 5: return [4 /*yield*/, next()];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            }); });
        };
        AdminHandler_1.prototype.getAdmin = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, error_24;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            if (!ctx.from)
                                return [2 /*return*/, null];
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 1:
                            admin = _a.sent();
                            return [2 /*return*/, admin];
                        case 2:
                            error_24 = _a.sent();
                            this.logger.error('❌ Error in getAdmin:');
                            this.logger.error("Error: ".concat((error_24 === null || error_24 === void 0 ? void 0 : error_24.message) || 'Unknown'));
                            console.error('getAdmin error:', error_24);
                            return [2 /*return*/, null];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.withAdminCheck = function (handler) {
            var _this = this;
            return function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin, error_25, replyError_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 9]);
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, handler(ctx)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [3 /*break*/, 9];
                        case 4:
                            error_25 = _a.sent();
                            this.logger.error('❌ Error in withAdminCheck wrapper:');
                            this.logger.error("Handler error: ".concat((error_25 === null || error_25 === void 0 ? void 0 : error_25.message) || 'Unknown error'));
                            this.logger.error("Error name: ".concat((error_25 === null || error_25 === void 0 ? void 0 : error_25.name) || 'N/A'));
                            this.logger.error("Error stack: ".concat((error_25 === null || error_25 === void 0 ? void 0 : error_25.stack) || 'N/A'));
                            console.error('Full error object:', error_25);
                            _a.label = 5;
                        case 5:
                            _a.trys.push([5, 7, , 8]);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.')];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 8];
                        case 7:
                            replyError_1 = _a.sent();
                            this.logger.error('Failed to send error reply:', replyError_1);
                            return [3 /*break*/, 8];
                        case 8: return [3 /*break*/, 9];
                        case 9: return [2 /*return*/];
                    }
                });
            }); };
        };
        // Role-based permission checker
        AdminHandler_1.prototype.withRoleCheck = function (requiredRoles, handler) {
            var _this = this;
            return function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var admin, error_26, errorType, errorMsg, errorName, replyError_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 7, , 12]);
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply('❌ Siz admin emassiz!')];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            if (!!requiredRoles.includes(admin.role)) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.reply('❌ Bu funksiya uchun sizda ruxsat yo\'q!\n\n' +
                                    '💡 Sizning rolingiz: ' + admin.role + '\n' +
                                    '📋 Bu funksiya faqat ' + requiredRoles.join(' yoki ') + ' uchun.')];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                        case 5:
                            this.logger.log("\uD83D\uDD10 Calling handler for admin: ".concat(admin.telegramId, ", role: ").concat(admin.role));
                            return [4 /*yield*/, handler(ctx, admin)];
                        case 6:
                            _a.sent();
                            this.logger.log("\u2705 Handler completed successfully for admin: ".concat(admin.telegramId));
                            return [3 /*break*/, 12];
                        case 7:
                            error_26 = _a.sent();
                            this.logger.error('❌❌❌ WRAPPER_ERROR_CAUGHT ❌❌❌');
                            errorType = typeof error_26;
                            errorMsg = (error_26 === null || error_26 === void 0 ? void 0 : error_26.message) || 'NO_MESSAGE';
                            errorName = (error_26 === null || error_26 === void 0 ? void 0 : error_26.name) || 'NO_NAME';
                            this.logger.error("WRAPPER_ERROR | TYPE=".concat(errorType, " | NAME=").concat(errorName, " | MSG=").concat(errorMsg));
                            if (error_26 === null || error_26 === void 0 ? void 0 : error_26.stack) {
                                this.logger.error('WRAPPER_STACK:');
                                this.logger.error(String(error_26.stack));
                            }
                            _a.label = 8;
                        case 8:
                            _a.trys.push([8, 10, , 11]);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.')];
                        case 9:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 10:
                            replyError_2 = _a.sent();
                            this.logger.error("WRAPPER_REPLY_ERROR=".concat(replyError_2 === null || replyError_2 === void 0 ? void 0 : replyError_2.message));
                            return [3 /*break*/, 11];
                        case 11: return [3 /*break*/, 12];
                        case 12: return [2 /*return*/];
                    }
                });
            }); };
        };
        AdminHandler_1.prototype.handleAdminStart = function (ctx, admin) {
            return __awaiter(this, void 0, void 0, function () {
                var welcomeMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.sessionService.clearSession(ctx.from.id);
                            welcomeMessage = "\uD83D\uDC4B Assalomu alaykum, ".concat(admin.username || 'Admin', "!\n\n\uD83D\uDD10 Siz admin panelidasiz.");
                            return [4 /*yield*/, ctx.reply(welcomeMessage, admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleBack = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply('🏠 Asosiy menyu', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleCancel = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply('❌ Bekor qilindi.', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showStatistics = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, _a, userStats, paymentStats, activeUsers, newUsers, message, keyboard, error_27;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _b.sent();
                            if (!admin)
                                return [2 /*return*/];
                            _b.label = 2;
                        case 2:
                            _b.trys.push([2, 5, , 7]);
                            return [4 /*yield*/, Promise.all([
                                    this.userService.getUserStatistics(),
                                    this.paymentService.getStatistics(),
                                    this.watchHistoryService.getActiveUsers(30),
                                    this.watchHistoryService.getNewUsers(30),
                                ])];
                        case 3:
                            _a = _b.sent(), userStats = _a[0], paymentStats = _a[1], activeUsers = _a[2], newUsers = _a[3];
                            message = "\n\uD83D\uDCCA **BOT STATISTIKASI**\n\n\uD83D\uDC65 **Foydalanuvchilar:**\n\u251C Jami: ".concat(userStats.totalUsers, "\n\u251C Premium: ").concat(userStats.premiumUsers, "\n\u251C Bloklangan: ").concat(userStats.blockedUsers, "\n\u2514 Faol (30 kun): ").concat(activeUsers, "\n\n\uD83D\uDCB0 **To'lovlar:**\n\u251C Jami: ").concat(paymentStats.totalPayments, "\n\u251C Tasdiqlangan: ").concat(paymentStats.approvedCount, "\n\u251C Rad etilgan: ").concat(paymentStats.rejectedCount, "\n\u2514 Kutilmoqda: ").concat(paymentStats.pendingCount, "\n\n\uD83D\uDCC8 **Yangi foydalanuvchilar (30 kun):** ").concat(newUsers, "\n      ");
                            keyboard = new grammy_1.Keyboard()
                                .text('👥 Barcha foydalanuvchilar')
                                .row()
                                .text('🚫 Foydalanuvchini bloklash')
                                .text('✅ Blokdan ochish')
                                .row()
                                .text('🔙 Orqaga')
                                .resized();
                            return [4 /*yield*/, ctx.reply(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 4:
                            _b.sent();
                            return [3 /*break*/, 7];
                        case 5:
                            error_27 = _b.sent();
                            this.logger.error('Error showing statistics:', error_27);
                            return [4 /*yield*/, ctx.reply('❌ Statistikani olishda xatolik yuz berdi.')];
                        case 6:
                            _b.sent();
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startMovieCreation = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!(!admin || !ctx.from)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Sizda admin huquqi yo'q.")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            this.sessionService.createSession(ctx.from.id, session_interface_1.AdminState.CREATING_MOVIE);
                            return [4 /*yield*/, ctx.reply('🎬 Kino yuklash boshlandi!\n\n' +
                                    '1️⃣ Kino kodini kiriting:\n' +
                                    "⚠️ Kod FAQAT raqamlardan iborat bo'lishi kerak!\n" +
                                    'Masalan: 12345', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handlePhoto = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, admin, photo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from || !ctx.message || !('photo' in ctx.message))
                                return [2 /*return*/];
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!session)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            photo = ctx.message.photo[ctx.message.photo.length - 1];
                            if (!(session.state === session_interface_1.AdminState.CREATING_MOVIE &&
                                session.step === session_interface_1.MovieCreateStep.PHOTO)) return [3 /*break*/, 3];
                            this.sessionService.updateSessionData(ctx.from.id, {
                                posterFileId: photo.file_id,
                                posterType: 'photo',
                            });
                            this.sessionService.setStep(ctx.from.id, session_interface_1.MovieCreateStep.VIDEO);
                            return [4 /*yield*/, ctx.reply('🎬 Endi kino videosini yuboring:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            if (!(session.state === session_interface_1.AdminState.CREATING_SERIAL &&
                                session.step === session_interface_1.SerialCreateStep.PHOTO)) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.serialManagementService.handleSerialPoster(ctx, photo.file_id, 'photo')];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleVideoMessage = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, video, video;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from || !ctx.message || !('video' in ctx.message))
                                return [2 /*return*/];
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!session)
                                return [2 /*return*/];
                            if (!(session.state === session_interface_1.AdminState.CREATING_MOVIE &&
                                session.step === session_interface_1.MovieCreateStep.PHOTO)) return [3 /*break*/, 2];
                            video = ctx.message.video;
                            this.sessionService.updateSessionData(ctx.from.id, {
                                posterFileId: video.file_id,
                                posterType: 'video',
                            });
                            this.sessionService.setStep(ctx.from.id, session_interface_1.MovieCreateStep.VIDEO);
                            return [4 /*yield*/, ctx.reply('🎬 Endi kino videosini yuboring:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2:
                            if (!(session.state === session_interface_1.AdminState.CREATING_SERIAL &&
                                session.step === session_interface_1.SerialCreateStep.PHOTO)) return [3 /*break*/, 4];
                            video = ctx.message.video;
                            return [4 /*yield*/, this.serialManagementService.handleSerialPoster(ctx, video.file_id, 'video')];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4:
                            if (!(session.state === session_interface_1.AdminState.CREATING_MOVIE &&
                                session.step === session_interface_1.MovieCreateStep.VIDEO)) return [3 /*break*/, 6];
                            return [4 /*yield*/, this.handleMovieVideo(ctx)];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                        case 6:
                            if (!(session.state === session_interface_1.AdminState.CREATING_SERIAL && session.step === 6)) return [3 /*break*/, 8];
                            return [4 /*yield*/, this.serialManagementService.handleNewSerialEpisodeVideo(ctx, ctx.message.video.file_id, session)];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                        case 8:
                            if (!(session.state === session_interface_1.AdminState.ADDING_EPISODES && session.step === 1)) return [3 /*break*/, 10];
                            return [4 /*yield*/, this.serialManagementService.handleExistingContentEpisodeVideo(ctx, ctx.message.video.file_id, session)];
                        case 9:
                            _a.sent();
                            return [2 /*return*/];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.buildMovieCaption = function (data) {
            var caption = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n";
            caption += "\u251C\u2023 Kino nomi : ".concat(data.title, "\n");
            caption += "\u251C\u2023 Kino kodi: ".concat(data.code, "\n");
            caption += "\u251C\u2023 Qism: ".concat(data.episodeCount || 1, "\n");
            if (data.genre) {
                caption += "\u251C\u2023 Janrlari: ".concat(data.genre, "\n");
            }
            if (data.description) {
                // Limit description to 200 characters
                var shortDesc = data.description.length > 200
                    ? data.description.substring(0, 200) + '...'
                    : data.description;
                caption += "\u251C\u2023 Tavsif: ".concat(shortDesc, "\n");
            }
            if (data.rating) {
                caption += "\u251C\u2023 \u2B50 Rating: ".concat(data.rating, "\n");
            }
            if (data.language) {
                caption += "\u251C\u2023 \uD83C\uDF10 Til: #".concat(data.language.replace(/\s+/g, ''), "\n");
            }
            if (data.subtitle !== undefined) {
                caption += "\u251C\u2023 \uD83D\uDCDD Subtitle: ".concat(data.subtitle ? 'Ha✅' : 'Yo\'q', "\n");
            }
            caption += "\u251C\u2023 Kanal: ".concat(data.fieldLink, "\n");
            caption += "\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n";
            caption += "\u25B6\uFE0F Kinoning to'liq qismini @".concat(data.botUsername, " dan tomosha qilishingiz mumkin!\n\n");
            caption += "<blockquote expandable>\u26A0\uFE0F ESLATMA:\n";
            caption += "Biz yuklayotgan kinolar turli saytlardan olinadi.\n";
            caption += "\uD83C\uDFB0 Ba'zi kinolarda kazino, qimor yoki \"pulni ko'paytirib beramiz\" degan reklama chiqishi mumkin.\n";
            caption += "\uD83D\uDEAB Bunday reklamalarga aslo ishonmang! Ular firibgarlar va sizni aldaydi.\n";
            caption += "\uD83D\uDD1E Ba'zi sahnalar 18+ bo'lishi mumkin \u2013 agar noqulay bo'lsa, ko'rishni to'xtating.</blockquote>";
            return caption;
        };
        AdminHandler_1.prototype.handleMovieVideo = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, admin, video, data, dbChannels_2, videoMessages, _i, dbChannels_1, dbChannel, field_1, botInfo_1, botUsername_1, fieldLink_1, dbCaption, sentVideo, error_28, field, botInfo, botUsername, fieldLink, caption, keyboard, sentPoster, successMessage_1, error_29;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!ctx.from || !ctx.message || !('video' in ctx.message))
                                return [2 /*return*/];
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!session ||
                                session.state !== session_interface_1.AdminState.CREATING_MOVIE ||
                                session.step !== session_interface_1.MovieCreateStep.VIDEO) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _c.sent();
                            if (!admin)
                                return [2 /*return*/];
                            video = ctx.message.video;
                            data = session.data;
                            _c.label = 2;
                        case 2:
                            _c.trys.push([2, 23, , 25]);
                            return [4 /*yield*/, this.channelService.findAllDatabase()];
                        case 3:
                            dbChannels_2 = _c.sent();
                            if (!(dbChannels_2.length === 0)) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.reply('❌ Hech qanday database kanal topilmadi. Avval database kanal yarating.')];
                        case 4:
                            _c.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [2 /*return*/];
                        case 5: return [4 /*yield*/, ctx.reply('⏳ Kino yuklanmoqda, iltimos kuting...')];
                        case 6:
                            _c.sent();
                            videoMessages = [];
                            _i = 0, dbChannels_1 = dbChannels_2;
                            _c.label = 7;
                        case 7:
                            if (!(_i < dbChannels_1.length)) return [3 /*break*/, 13];
                            dbChannel = dbChannels_1[_i];
                            _c.label = 8;
                        case 8:
                            _c.trys.push([8, 11, , 12]);
                            field_1 = data.selectedField;
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 9:
                            botInfo_1 = _c.sent();
                            botUsername_1 = botInfo_1.username || 'bot';
                            fieldLink_1 = field_1.channelLink || 'https://t.me/' + ((_a = field_1.channelId) === null || _a === void 0 ? void 0 : _a.replace('@', '').replace('-100', ''));
                            dbCaption = this.buildMovieCaption({
                                title: data.title,
                                code: data.code,
                                episodeCount: data.episodeCount,
                                genre: data.genre,
                                description: data.description,
                                rating: data.rating,
                                language: data.language,
                                subtitle: data.subtitle,
                                fieldLink: fieldLink_1,
                                botUsername: botUsername_1,
                            });
                            return [4 /*yield*/, ctx.api.sendVideo(dbChannel.channelId, video.file_id, {
                                    caption: dbCaption,
                                    parse_mode: 'HTML',
                                })];
                        case 10:
                            sentVideo = _c.sent();
                            videoMessages.push({
                                channelId: dbChannel.channelId,
                                messageId: sentVideo.message_id,
                            });
                            return [3 /*break*/, 12];
                        case 11:
                            error_28 = _c.sent();
                            this.logger.error("Error sending to database channel ".concat(dbChannel.channelName, ":"), error_28);
                            return [3 /*break*/, 12];
                        case 12:
                            _i++;
                            return [3 /*break*/, 7];
                        case 13:
                            if (!(videoMessages.length === 0)) return [3 /*break*/, 15];
                            return [4 /*yield*/, ctx.reply("❌ Videoni hech qanday kanalga yuklash imkoni bo'lmadi. Botni kanallarga admin qiling.")];
                        case 14:
                            _c.sent();
                            return [2 /*return*/];
                        case 15:
                            field = data.selectedField;
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 16:
                            botInfo = _c.sent();
                            botUsername = botInfo.username || 'bot';
                            fieldLink = field.channelLink || 'https://t.me/' + ((_b = field.channelId) === null || _b === void 0 ? void 0 : _b.replace('@', '').replace('-100', ''));
                            caption = this.buildMovieCaption({
                                title: data.title,
                                code: data.code,
                                episodeCount: data.episodeCount,
                                genre: data.genre,
                                description: data.description,
                                rating: data.rating,
                                language: data.language,
                                subtitle: data.subtitle,
                                fieldLink: fieldLink,
                                botUsername: botUsername,
                            });
                            keyboard = new grammy_1.InlineKeyboard().url('✨ Tomosha Qilish', "https://t.me/".concat(this.grammyBot.botUsername, "?start=").concat(data.code));
                            sentPoster = void 0;
                            if (!(data.posterType === 'video')) return [3 /*break*/, 18];
                            return [4 /*yield*/, ctx.api.sendVideo(field.channelId, data.posterFileId, {
                                    caption: caption,
                                    reply_markup: keyboard,
                                    parse_mode: 'HTML',
                                })];
                        case 17:
                            sentPoster = _c.sent();
                            return [3 /*break*/, 20];
                        case 18: return [4 /*yield*/, ctx.api.sendPhoto(field.channelId, data.posterFileId, {
                                caption: caption,
                                reply_markup: keyboard,
                                parse_mode: 'HTML',
                            })];
                        case 19:
                            sentPoster = _c.sent();
                            _c.label = 20;
                        case 20: return [4 /*yield*/, this.movieService.create({
                                code: data.code,
                                title: data.title,
                                genre: data.genre,
                                description: data.description,
                                rating: data.rating,
                                language: data.language,
                                subtitle: data.subtitle,
                                fieldId: field.id,
                                posterFileId: data.posterFileId,
                                videoFileId: video.file_id,
                                channelMessageId: sentPoster.message_id,
                                videoMessageId: JSON.stringify(videoMessages),
                            })];
                        case 21:
                            _c.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            successMessage_1 = "\u2705 Kino muvaffaqiyatli yuklandi!\n\n";
                            successMessage_1 += "\uD83D\uDCE6 Field kanal: ".concat(field.name, "\n");
                            successMessage_1 += "\uD83D\uDD17 Poster Message ID: ".concat(sentPoster.message_id, "\n\n");
                            successMessage_1 += "\uD83D\uDCF9 Video yuklangan kanallar:\n";
                            videoMessages.forEach(function (vm, i) {
                                var channel = dbChannels_2.find(function (ch) { return ch.channelId === vm.channelId; });
                                successMessage_1 += "".concat(i + 1, ". ").concat((channel === null || channel === void 0 ? void 0 : channel.channelName) || vm.channelId, " - Message ID: ").concat(vm.messageId, "\n");
                            });
                            return [4 /*yield*/, ctx.reply(successMessage_1, admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 22:
                            _c.sent();
                            return [3 /*break*/, 25];
                        case 23:
                            error_29 = _c.sent();
                            this.logger.error('Error uploading movie:', error_29);
                            return [4 /*yield*/, ctx.reply("\u274C Xatolik yuz berdi. Botni barcha kanallarga admin qiling va qaytadan urinib ko'ring.\n\nXatolik: ".concat(error_29.message))];
                        case 24:
                            _c.sent();
                            return [3 /*break*/, 25];
                        case 25: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleSessionText = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var text, session, admin, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!ctx.from || !ctx.message || !('text' in ctx.message))
                                return [2 /*return*/];
                            text = ctx.message.text;
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!session || text.startsWith('/') || text.includes('�'))
                                return [2 /*return*/];
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _b.sent();
                            if (!admin)
                                return [2 /*return*/];
                            if (!(text === '❌ Bekor qilish')) return [3 /*break*/, 3];
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply('❌ Bekor qilindi.', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3:
                            _a = session.state;
                            switch (_a) {
                                case session_interface_1.AdminState.CREATING_MOVIE: return [3 /*break*/, 4];
                                case session_interface_1.AdminState.CREATING_SERIAL: return [3 /*break*/, 6];
                                case session_interface_1.AdminState.ADDING_EPISODES: return [3 /*break*/, 8];
                                case session_interface_1.AdminState.ATTACHING_VIDEO: return [3 /*break*/, 10];
                                case session_interface_1.AdminState.ADDING_FIELD: return [3 /*break*/, 12];
                                case session_interface_1.AdminState.ADD_DATABASE_CHANNEL: return [3 /*break*/, 14];
                                case session_interface_1.AdminState.ADD_MANDATORY_CHANNEL: return [3 /*break*/, 16];
                                case session_interface_1.AdminState.ADD_ADMIN: return [3 /*break*/, 18];
                                case session_interface_1.AdminState.EDIT_PREMIUM_PRICES: return [3 /*break*/, 20];
                                case session_interface_1.AdminState.EDIT_CARD_INFO: return [3 /*break*/, 22];
                                case session_interface_1.AdminState.EDIT_CONTACT_MESSAGE: return [3 /*break*/, 24];
                                case session_interface_1.AdminState.BROADCASTING: return [3 /*break*/, 26];
                                case session_interface_1.AdminState.SEARCH_CHANNEL_BY_LINK: return [3 /*break*/, 28];
                                case session_interface_1.AdminState.APPROVE_PAYMENT: return [3 /*break*/, 30];
                                case session_interface_1.AdminState.REJECT_PAYMENT: return [3 /*break*/, 32];
                                case session_interface_1.AdminState.BROADCAST_PREMIERE: return [3 /*break*/, 34];
                                case session_interface_1.AdminState.BROADCAST_TELEGRAM_PREMIUM: return [3 /*break*/, 36];
                                case session_interface_1.AdminState.BLOCK_USER: return [3 /*break*/, 38];
                                case session_interface_1.AdminState.UNBLOCK_USER: return [3 /*break*/, 40];
                                case session_interface_1.AdminState.UNBAN_PREMIUM_USER: return [3 /*break*/, 42];
                                case session_interface_1.AdminState.DELETE_CONTENT: return [3 /*break*/, 44];
                            }
                            return [3 /*break*/, 46];
                        case 4: return [4 /*yield*/, this.handleMovieCreationSteps(ctx, text, session)];
                        case 5:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 6: return [4 /*yield*/, this.handleSerialCreationSteps(ctx, text, session)];
                        case 7:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 8: return [4 /*yield*/, this.handleAddingEpisodesSteps(ctx, text, session)];
                        case 9:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 10: return [4 /*yield*/, this.handleVideoAttachmentSteps(ctx, text, session)];
                        case 11:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 12: return [4 /*yield*/, this.handleFieldCreationSteps(ctx, text, session)];
                        case 13:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 14: return [4 /*yield*/, this.handleDatabaseChannelCreationSteps(ctx, text, session)];
                        case 15:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 16: return [4 /*yield*/, this.handleMandatoryChannelCreationSteps(ctx, text, session)];
                        case 17:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 18: return [4 /*yield*/, this.handleAdminCreationSteps(ctx, text, session)];
                        case 19:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 20: return [4 /*yield*/, this.handlePriceEditingSteps(ctx, text, session)];
                        case 21:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 22: return [4 /*yield*/, this.handleCardEditingSteps(ctx, text, session)];
                        case 23:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 24: return [4 /*yield*/, this.handleContactMessageEditing(ctx, text, session)];
                        case 25:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 26: return [4 /*yield*/, this.handleBroadcastMessage(ctx, text, session)];
                        case 27:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 28: return [4 /*yield*/, this.searchChannelByLink(ctx, text)];
                        case 29:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 30: return [4 /*yield*/, this.handleApprovePaymentSteps(ctx, text, session)];
                        case 31:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 32: return [4 /*yield*/, this.handleRejectPaymentSteps(ctx, text, session)];
                        case 33:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 34: return [4 /*yield*/, this.handlePremiereBroadcastSteps(ctx, text, session)];
                        case 35:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 36: return [4 /*yield*/, this.handleTelegramPremiumBroadcastSteps(ctx, text, session)];
                        case 37:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 38: return [4 /*yield*/, this.handleBlockUserSteps(ctx, text, session)];
                        case 39:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 40: return [4 /*yield*/, this.handleUnblockUserSteps(ctx, text, session)];
                        case 41:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 42: return [4 /*yield*/, this.handleUnbanPremiumUserSteps(ctx, text, session)];
                        case 43:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 44: return [4 /*yield*/, this.handleDeleteContentSteps(ctx)];
                        case 45:
                            _b.sent();
                            return [3 /*break*/, 47];
                        case 46: return [3 /*break*/, 47];
                        case 47: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleMovieCreationSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var data, _a, code, isAvailable, nearestCodes, message_1, genres, genreString, keyboard, keyboard, rating, language, allFields, message_2, fieldIndex, userFields;
                var _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            data = session.data || {};
                            _a = session.step;
                            switch (_a) {
                                case session_interface_1.MovieCreateStep.CODE: return [3 /*break*/, 1];
                                case session_interface_1.MovieCreateStep.TITLE: return [3 /*break*/, 9];
                                case session_interface_1.MovieCreateStep.GENRE: return [3 /*break*/, 11];
                                case session_interface_1.MovieCreateStep.DESCRIPTION: return [3 /*break*/, 16];
                                case session_interface_1.MovieCreateStep.FIELD: return [3 /*break*/, 32];
                            }
                            return [3 /*break*/, 36];
                        case 1:
                            code = parseInt(text);
                            if (!(isNaN(code) || code <= 0)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Kod faqat raqamlardan iborat bo'lishi kerak!\nMasalan: 12345\n\nIltimos, qaytadan kiriting:", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 2:
                            _f.sent();
                            return [2 /*return*/];
                        case 3: return [4 /*yield*/, this.movieService.isCodeAvailable(code)];
                        case 4:
                            isAvailable = _f.sent();
                            if (!!isAvailable) return [3 /*break*/, 7];
                            return [4 /*yield*/, this.movieService.findNearestAvailableCodes(code, 5)];
                        case 5:
                            nearestCodes = _f.sent();
                            message_1 = "\u274C Kechirasiz, ".concat(code, " kodi band!\n\n");
                            if (nearestCodes.length > 0) {
                                message_1 += "✅ Eng yaqin bo'sh kodlar:\n";
                                nearestCodes.forEach(function (c, i) {
                                    message_1 += "".concat(i + 1, ". ").concat(c, "\n");
                                });
                                message_1 +=
                                    '\nYuqoridagi kodlardan birini tanlang yoki boshqa kod kiriting:';
                            }
                            else {
                                message_1 += 'Boshqa kod kiriting:';
                            }
                            return [4 /*yield*/, ctx.reply(message_1, admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 6:
                            _f.sent();
                            return [2 /*return*/];
                        case 7:
                            this.sessionService.updateSessionData(ctx.from.id, { code: code });
                            this.sessionService.setStep(ctx.from.id, session_interface_1.MovieCreateStep.TITLE);
                            return [4 /*yield*/, ctx.reply('Kino nomini kiriting:\nMasalan: Avatar 2', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 8:
                            _f.sent();
                            return [3 /*break*/, 36];
                        case 9:
                            this.sessionService.updateSessionData(ctx.from.id, { title: text });
                            this.sessionService.setStep(ctx.from.id, session_interface_1.MovieCreateStep.GENRE);
                            // Initialize empty genre selection
                            this.sessionService.updateSessionData(ctx.from.id, {
                                selectedGenres: [],
                            });
                            // Show genre selection UI
                            return [4 /*yield*/, this.showGenreSelection(ctx)];
                        case 10:
                            // Show genre selection UI
                            _f.sent();
                            return [3 /*break*/, 36];
                        case 11:
                            if (!((_b = session.data) === null || _b === void 0 ? void 0 : _b.manualGenreInput)) return [3 /*break*/, 13];
                            genres = this.parseManualGenreInput(text);
                            genreString = this.formatGenresWithHashtags(genres);
                            this.sessionService.updateSessionData(ctx.from.id, {
                                genre: genreString,
                                manualGenreInput: undefined,
                                selectedGenres: undefined,
                            });
                            this.sessionService.setStep(ctx.from.id, session_interface_1.MovieCreateStep.DESCRIPTION);
                            keyboard = new grammy_1.Keyboard()
                                .text('Next')
                                .row()
                                .text('❌ Bekor qilish');
                            return [4 /*yield*/, ctx.reply("\u2705 Janrlar saqlandi: ".concat(genreString, "\n\n") +
                                    "\uD83D\uDCDD Tavsif kiriting:\n\n\u23ED O'tkazib yuborish uchun 'Next' yozing", { reply_markup: keyboard.resized() })];
                        case 12:
                            _f.sent();
                            return [3 /*break*/, 15];
                        case 13:
                            // Fallback: old text-based genre input (shouldn't reach here normally)
                            this.sessionService.updateSessionData(ctx.from.id, { genre: text });
                            this.sessionService.setStep(ctx.from.id, session_interface_1.MovieCreateStep.DESCRIPTION);
                            keyboard = new grammy_1.Keyboard()
                                .text('Next')
                                .row()
                                .text('❌ Bekor qilish');
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCDD Tavsif kiriting:\n\n\u23ED O'tkazib yuborish uchun 'Next' yozing", { reply_markup: keyboard.resized() })];
                        case 14:
                            _f.sent();
                            _f.label = 15;
                        case 15: return [3 /*break*/, 36];
                        case 16:
                            if (!((_c = session.data) === null || _c === void 0 ? void 0 : _c.descriptionInputMode)) return [3 /*break*/, 19];
                            // Manual description text input
                            this.sessionService.updateSessionData(ctx.from.id, {
                                description: text,
                                descriptionInputMode: undefined,
                            });
                            return [4 /*yield*/, ctx.reply('✅ Tavsif saqlandi!', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 17:
                            _f.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 18:
                            _f.sent();
                            return [2 /*return*/];
                        case 19:
                            if (!((_d = session.data) === null || _d === void 0 ? void 0 : _d.ratingInputMode)) return [3 /*break*/, 24];
                            rating = text.trim();
                            if (!!/^\d+(\.\d+)?$/.test(rating)) return [3 /*break*/, 21];
                            return [4 /*yield*/, ctx.reply("❌ Noto'g'ri format!\n\nFaqat raqam kiriting (masalan: 6.5, 8, 9.2)", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 20:
                            _f.sent();
                            return [2 /*return*/];
                        case 21:
                            this.sessionService.updateSessionData(ctx.from.id, {
                                rating: rating,
                                ratingInputMode: undefined,
                            });
                            return [4 /*yield*/, ctx.reply("\u2705 Rating saqlandi: ".concat(rating), admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 22:
                            _f.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 23:
                            _f.sent();
                            return [2 /*return*/];
                        case 24:
                            if (!((_e = session.data) === null || _e === void 0 ? void 0 : _e.languageInputMode)) return [3 /*break*/, 27];
                            language = text.trim();
                            this.sessionService.updateSessionData(ctx.from.id, {
                                language: language,
                                languageInputMode: undefined,
                            });
                            return [4 /*yield*/, ctx.reply("\u2705 Til saqlandi: ".concat(language), admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 25:
                            _f.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 26:
                            _f.sent();
                            return [2 /*return*/];
                        case 27:
                            // Old flow fallback (shouldn't normally reach here)
                            if (text.toLowerCase() === 'next') {
                                this.sessionService.updateSessionData(ctx.from.id, {
                                    description: null,
                                });
                            }
                            else {
                                this.sessionService.updateSessionData(ctx.from.id, {
                                    description: text,
                                });
                            }
                            this.sessionService.setStep(ctx.from.id, session_interface_1.MovieCreateStep.FIELD);
                            return [4 /*yield*/, this.fieldService.findAll()];
                        case 28:
                            allFields = _f.sent();
                            if (!(allFields.length === 0)) return [3 /*break*/, 30];
                            return [4 /*yield*/, ctx.reply('❌ Hech qanday field topilmadi. Avval field yarating.')];
                        case 29:
                            _f.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [2 /*return*/];
                        case 30:
                            message_2 = '📁 Qaysi fieldni tanlaysiz?\n\n';
                            allFields.forEach(function (field, index) {
                                message_2 += "".concat(index + 1, ". ").concat(field.name, "\n");
                            });
                            message_2 += '\nRaqamini kiriting (masalan: 1)';
                            this.sessionService.updateSessionData(ctx.from.id, {
                                fields: allFields,
                            });
                            return [4 /*yield*/, ctx.reply(message_2, admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 31:
                            _f.sent();
                            return [3 /*break*/, 36];
                        case 32:
                            fieldIndex = parseInt(text) - 1;
                            userFields = session.data.fields;
                            if (!(isNaN(fieldIndex) ||
                                fieldIndex < 0 ||
                                fieldIndex >= userFields.length)) return [3 /*break*/, 34];
                            return [4 /*yield*/, ctx.reply("❌ Noto'g'ri raqam. Iltimos qaytadan kiriting:")];
                        case 33:
                            _f.sent();
                            return [2 /*return*/];
                        case 34:
                            this.sessionService.updateSessionData(ctx.from.id, {
                                selectedField: userFields[fieldIndex],
                            });
                            this.sessionService.setStep(ctx.from.id, session_interface_1.MovieCreateStep.PHOTO);
                            return [4 /*yield*/, ctx.reply('📸 Endi kino rasmi yoki vediosini yuboring:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 35:
                            _f.sent();
                            return [3 /*break*/, 36];
                        case 36: return [2 /*return*/];
                    }
                });
            });
        };
        // ============ GENRE SELECTION METHODS ============
        AdminHandler_1.prototype.getAvailableGenres = function () {
            return [
                'Action',
                'Comedy',
                'Drama',
                'Horror',
                'Thriller',
                'Science Fiction',
                'Fantasy',
                'Romance',
                'Animation',
                'Documentary',
            ];
        };
        AdminHandler_1.prototype.showGenreSelection = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, selectedGenres, availableGenres, keyboard, unselectedGenres, message;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!session)
                                return [2 /*return*/];
                            selectedGenres = ((_a = session.data) === null || _a === void 0 ? void 0 : _a.selectedGenres) || [];
                            availableGenres = this.getAvailableGenres();
                            keyboard = new grammy_1.InlineKeyboard();
                            // First row: Manual input and Next buttons
                            keyboard
                                .text("✍️ Qo'lda kirish", 'manual_genre_input')
                                .text('➡️ Davom etish', 'finish_genre_selection')
                                .row();
                            unselectedGenres = availableGenres.filter(function (g) { return !selectedGenres.includes(g); });
                            unselectedGenres.forEach(function (genre, index) {
                                keyboard.text(genre, "toggle_genre_".concat(genre));
                                if (index % 2 === 1)
                                    keyboard.row(); // 2 buttons per row
                            });
                            if (unselectedGenres.length % 2 !== 0)
                                keyboard.row();
                            // Selected genres with X button
                            if (selectedGenres.length > 0) {
                                selectedGenres.forEach(function (genre) {
                                    keyboard.text("".concat(genre, " \u274C"), "toggle_genre_".concat(genre)).row();
                                });
                            }
                            message = "\n\uD83C\uDFAD **Janr tanlang**\n\n".concat(selectedGenres.length > 0 ? "\u2705 Tanlangan: ".concat(selectedGenres.join(', ')) : '⚠️ Hech qanday janr tanlanmagan', "\n\n\uD83D\uDCA1 **Qanday ishlaydi:**\n\u2022 Janrni tanlash uchun tugmani bosing\n\u2022 Tanlanganlarni o'chirish uchun \u274C belgisini bosing\n\u2022 Bir nechta janr tanlashingiz mumkin\n\u2022 \"Qo'lda kirish\" - o'zingiz yozasiz\n\u2022 \"Davom etish\" - tugatsiz va davom eting\n    ").trim();
                            if (!ctx.callbackQuery) return [3 /*break*/, 2];
                            return [4 /*yield*/, ctx.editMessageText(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, ctx.reply(message, {
                                parse_mode: 'Markdown',
                                reply_markup: keyboard,
                            })];
                        case 3:
                            _b.sent();
                            _b.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleGenreToggle = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var match, genre, session, selectedGenres;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!ctx.from || !ctx.callbackQuery)
                                return [2 /*return*/];
                            match = ctx.callbackQuery.data.match(/^toggle_genre_(.+)$/);
                            if (!match)
                                return [2 /*return*/];
                            genre = match[1];
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!session)
                                return [2 /*return*/];
                            selectedGenres = ((_a = session.data) === null || _a === void 0 ? void 0 : _a.selectedGenres) || [];
                            if (!selectedGenres.includes(genre)) return [3 /*break*/, 2];
                            // Remove genre
                            selectedGenres = selectedGenres.filter(function (g) { return g !== genre; });
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "\u274C ".concat(genre, " olib tashlandi"),
                                })];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            // Add genre
                            selectedGenres.push(genre);
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "\u2705 ".concat(genre, " tanlandi"),
                                })];
                        case 3:
                            _b.sent();
                            _b.label = 4;
                        case 4:
                            this.sessionService.updateSessionData(ctx.from.id, { selectedGenres: selectedGenres });
                            return [4 /*yield*/, this.showGenreSelection(ctx)];
                        case 5:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startManualGenreInput = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var instructions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            instructions = "\n\u270D\uFE0F **Qo'lda janr kiriting**\n\n\uD83D\uDCDD **Qoidalar:**\n1. Har bir so'z alohida janr sifatida qo'shiladi\n2. Qavs ichiga yozsangiz, bir janr bo'ladi\n3. Bo'sh joy bilan ajratib yozing\n\n\uD83D\uDCCC **Misollar:**\n\u2022 `love magic creatures` \u2192 #love #magic #creatures\n\u2022 `(computer animated) fantasy` \u2192 #computer-animated #fantasy\n\u2022 `action (martial arts)` \u2192 #action #martial-arts\n\n\uD83D\uDCAC Endi janrlarni yozing:\n    ".trim();
                            this.sessionService.updateSessionData(ctx.from.id, {
                                manualGenreInput: true,
                            });
                            return [4 /*yield*/, ctx.editMessageText(instructions, {
                                    parse_mode: 'Markdown',
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.formatGenresWithHashtags = function (genres) {
            return genres.map(function (genre) { return "#".concat(genre.replace(/\\s+/g, '')); }).join(' ');
        };
        AdminHandler_1.prototype.parseManualGenreInput = function (text) {
            var genres = [];
            var currentPos = 0;
            while (currentPos < text.length) {
                // Skip whitespace
                while (currentPos < text.length && text[currentPos] === ' ') {
                    currentPos++;
                }
                if (currentPos >= text.length)
                    break;
                // Check for parentheses
                if (text[currentPos] === '(') {
                    var closePos = text.indexOf(')', currentPos);
                    if (closePos !== -1) {
                        var genreText = text.substring(currentPos + 1, closePos).trim();
                        if (genreText) {
                            // Replace spaces with hyphens for multi-word genres
                            genres.push(genreText.replace(/\\s+/g, '-'));
                        }
                        currentPos = closePos + 1;
                    }
                    else {
                        // No closing parenthesis, treat as regular word
                        var spacePos = text.indexOf(' ', currentPos);
                        var word = spacePos === -1
                            ? text.substring(currentPos)
                            : text.substring(currentPos, spacePos);
                        if (word && word !== '(') {
                            genres.push(word.replace(/[()]/g, ''));
                        }
                        currentPos = spacePos === -1 ? text.length : spacePos + 1;
                    }
                }
                else {
                    // Regular word
                    var spacePos = text.indexOf(' ', currentPos);
                    var word = spacePos === -1
                        ? text.substring(currentPos)
                        : text.substring(currentPos, spacePos);
                    if (word) {
                        genres.push(word);
                    }
                    currentPos = spacePos === -1 ? text.length : spacePos + 1;
                }
            }
            return genres;
        };
        AdminHandler_1.prototype.finishGenreSelection = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, selectedGenres, genreString;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!session)
                                return [2 /*return*/];
                            selectedGenres = ((_a = session.data) === null || _a === void 0 ? void 0 : _a.selectedGenres) || [];
                            if (!(selectedGenres.length === 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "⚠️ Kamida bitta janr tanlang yoki 'Qo'lda kirish'dan foydalaning!",
                                    show_alert: true,
                                })];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                        case 2: return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 3:
                            _b.sent();
                            genreString = this.formatGenresWithHashtags(selectedGenres);
                            this.sessionService.updateSessionData(ctx.from.id, {
                                genre: genreString,
                                selectedGenres: undefined, // Clear the selection
                                manualGenreInput: undefined,
                            });
                            if (!(session.state === session_interface_1.AdminState.CREATING_MOVIE)) return [3 /*break*/, 6];
                            this.sessionService.setStep(ctx.from.id, session_interface_1.MovieCreateStep.DESCRIPTION);
                            return [4 /*yield*/, ctx.editMessageText("\u2705 Janrlar tanlandi: ".concat(genreString))];
                        case 4:
                            _b.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 5:
                            _b.sent();
                            return [3 /*break*/, 9];
                        case 6:
                            if (!(session.state === session_interface_1.AdminState.CREATING_SERIAL)) return [3 /*break*/, 9];
                            this.sessionService.setStep(ctx.from.id, session_interface_1.SerialCreateStep.DESCRIPTION);
                            return [4 /*yield*/, ctx.editMessageText("\u2705 Janrlar tanlandi: ".concat(genreString))];
                        case 7:
                            _b.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 8:
                            _b.sent();
                            _b.label = 9;
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        // ============ DESCRIPTION METADATA METHODS ============
        AdminHandler_1.prototype.showDescriptionPanel = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, _a, description, rating, language, subtitle, keyboard, subtitleText, message, error_30;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!session)
                                return [2 /*return*/];
                            _a = session.data || {}, description = _a.description, rating = _a.rating, language = _a.language, subtitle = _a.subtitle;
                            keyboard = new grammy_1.InlineKeyboard();
                            // First row: Manual input and Next
                            keyboard
                                .text("✍️ Qo'lda kiritish", 'desc_manual_input')
                                .text('➡️ Next', 'desc_next')
                                .row();
                            // Second row: Available options (only show if not selected)
                            if (!rating)
                                keyboard.text('⭐ Rating', 'desc_rating');
                            if (!language)
                                keyboard.text('🌐 Til', 'desc_language');
                            if (subtitle === undefined)
                                keyboard.text('📝 Subtitle', 'desc_subtitle');
                            if (!rating || !language || subtitle === undefined) {
                                keyboard.row();
                            }
                            // Show selected items with remove buttons
                            if (rating) {
                                keyboard.text("\u2B50 Rating: ".concat(rating, " \u274C"), 'remove_desc_rating').row();
                            }
                            if (language) {
                                keyboard.text("\uD83C\uDF10 Til: ".concat(language, " \u274C"), 'remove_desc_language').row();
                            }
                            if (subtitle !== undefined) {
                                subtitleText = subtitle ? 'Ha✅' : "Yo'q";
                                keyboard.text("\uD83D\uDCDD Subtitle: ".concat(subtitleText, " \u274C"), 'remove_desc_subtitle').row();
                            }
                            message = "\uD83D\uDCDD **Tavsif va qo'shimcha ma'lumotlar**\n\n";
                            if (description) {
                                message += "\uD83D\uDCC4 Tavsif: ".concat(description.substring(0, 100)).concat(description.length > 100 ? '...' : '', "\n\n");
                            }
                            message += "\uD83D\uDCA1 **Tanlangan ma'lumotlar:**\n";
                            if (rating)
                                message += "\u2B50 Rating: ".concat(rating, "\n");
                            if (language)
                                message += "\uD83C\uDF10 Til: ".concat(language, "\n");
                            if (subtitle !== undefined)
                                message += "\uD83D\uDCDD Subtitle: ".concat(subtitle ? 'Ha✅' : "Yo'q", "\n");
                            if (!rating && !language && subtitle === undefined && !description) {
                                message += "_Hech narsa tanlanmagan_\n";
                            }
                            message += "\n\uD83D\uDCCC **Amallar:**\n";
                            message += "\u2022 Qo'lda kiritish - tavsif matnini yozing\n";
                            message += "\u2022 Rating - kinoning reytingini kiriting\n";
                            message += "\u2022 Til - kino tilini tanlang\n";
                            message += "\u2022 Subtitle - subtitr mavjudligini belgilang\n";
                            message += "\u2022 Next - keyingi qadamga o'ting";
                            if (!ctx.callbackQuery) return [3 /*break*/, 6];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 5]);
                            return [4 /*yield*/, ctx.editMessageText(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            error_30 = _b.sent();
                            return [4 /*yield*/, ctx.reply(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 4:
                            _b.sent();
                            return [3 /*break*/, 5];
                        case 5: return [3 /*break*/, 8];
                        case 6: return [4 /*yield*/, ctx.reply(message, {
                                parse_mode: 'Markdown',
                                reply_markup: keyboard,
                            })];
                        case 7:
                            _b.sent();
                            _b.label = 8;
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startDescriptionManualInput = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            this.sessionService.updateSessionData(ctx.from.id, {
                                descriptionInputMode: true,
                            });
                            return [4 /*yield*/, ctx.editMessageText("\u270D\uFE0F **Tavsif kiriting:**\n\n" +
                                    "\uD83D\uDCDD Kino haqida to'liq ma'lumot yozing.\n" +
                                    "Tavsifni yozganingizdan keyin avtomatik qabul qilinadi.", { parse_mode: 'Markdown' })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startRatingInput = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            this.sessionService.updateSessionData(ctx.from.id, {
                                ratingInputMode: true,
                            });
                            return [4 /*yield*/, ctx.editMessageText("\u2B50 **Rating kiriting:**\n\n" +
                                    "\uD83D\uDCCA Kino reytingini kiriting (masalan: 6.5, 8, 9.2)\n\n" +
                                    "\uD83D\uDCA1 Faqat raqam va nuqta ishlatiladi.", { parse_mode: 'Markdown' })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showLanguageOptions = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            keyboard = new grammy_1.InlineKeyboard()
                                .text("✍️ Qo'lda kiritish", 'select_lang_manual')
                                .row()
                                .text('🇺🇿 O\'zbek', 'select_lang_uzbek')
                                .text('🇷🇺 Rus', 'select_lang_rus')
                                .row()
                                .text('🇬🇧 Ingliz', 'select_lang_ingliz')
                                .row()
                                .text('🔙 Orqaga', 'desc_language_back');
                            return [4 /*yield*/, ctx.editMessageText("\uD83C\uDF10 **Til tanlang:**\n\n" +
                                    "Kino qaysi tilda ekanligini belgilang.", {
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
        AdminHandler_1.prototype.handleLanguageSelection = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var match, langKey, languageMap, language;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from || !ctx.callbackQuery)
                                return [2 /*return*/];
                            match = ctx.callbackQuery.data.match(/^select_lang_(.+)$/);
                            if (!match)
                                return [2 /*return*/];
                            langKey = match[1];
                            if (!(langKey === 'manual')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            this.sessionService.updateSessionData(ctx.from.id, {
                                languageInputMode: true,
                            });
                            return [4 /*yield*/, ctx.editMessageText("\uD83C\uDF10 **Til nomini kiriting:**\n\n" +
                                    "\uD83D\uDCDD Kino tilini yozing (masalan: Koreys, Turk, va h.k.)", { parse_mode: 'Markdown' })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            if (!(langKey === 'back')) return [3 /*break*/, 6];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                        case 6:
                            languageMap = {
                                uzbek: "O'zbek",
                                rus: 'Rus',
                                ingliz: 'Ingliz',
                            };
                            language = languageMap[langKey] || langKey;
                            this.sessionService.updateSessionData(ctx.from.id, {
                                language: language,
                            });
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "\u2705 Til tanlandi: ".concat(language),
                                })];
                        case 7:
                            _a.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 8:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showSubtitleOptions = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            keyboard = new grammy_1.InlineKeyboard()
                                .text('✅ Ha', 'select_subtitle_yes')
                                .text('❌ Yo\'q', 'select_subtitle_no')
                                .row()
                                .text('🔙 Orqaga', 'subtitle_back');
                            return [4 /*yield*/, ctx.editMessageText("\uD83D\uDCDD **Subtitle mavjudmi?**\n\n" +
                                    "Kinoda subtitr borligini belgilang.", {
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
        AdminHandler_1.prototype.handleSubtitleSelection = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var match, hasSubtitle;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from || !ctx.callbackQuery)
                                return [2 /*return*/];
                            match = ctx.callbackQuery.data.match(/^select_subtitle_(yes|no)$/);
                            if (!match)
                                return [2 /*return*/];
                            hasSubtitle = match[1] === 'yes';
                            this.sessionService.updateSessionData(ctx.from.id, {
                                subtitle: hasSubtitle,
                            });
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: hasSubtitle ? '✅ Subtitle: Ha' : '❌ Subtitle: Yo\'q',
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.removeDescriptionMetadata = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var match, field, updateData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from || !ctx.callbackQuery)
                                return [2 /*return*/];
                            match = ctx.callbackQuery.data.match(/^remove_desc_(rating|language|subtitle)$/);
                            if (!match)
                                return [2 /*return*/];
                            field = match[1];
                            updateData = {};
                            if (!(field === 'rating')) return [3 /*break*/, 2];
                            updateData.rating = undefined;
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: '🗑 Rating o\'chirildi' })];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 2:
                            if (!(field === 'language')) return [3 /*break*/, 4];
                            updateData.language = undefined;
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: '🗑 Til o\'chirildi' })];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 4:
                            if (!(field === 'subtitle')) return [3 /*break*/, 6];
                            updateData.subtitle = undefined;
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: '🗑 Subtitle o\'chirildi' })];
                        case 5:
                            _a.sent();
                            _a.label = 6;
                        case 6:
                            this.sessionService.updateSessionData(ctx.from.id, updateData);
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.finishDescriptionStep = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, allFields, message;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: '✅ Davom etamiz' })];
                        case 1:
                            _a.sent();
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!session)
                                return [2 /*return*/];
                            // Move to FIELD selection step
                            if (session.state === session_interface_1.AdminState.CREATING_MOVIE) {
                                this.sessionService.setStep(ctx.from.id, session_interface_1.MovieCreateStep.FIELD);
                            }
                            else if (session.state === session_interface_1.AdminState.CREATING_SERIAL) {
                                this.sessionService.setStep(ctx.from.id, session_interface_1.SerialCreateStep.FIELD);
                            }
                            return [4 /*yield*/, this.fieldService.findAll()];
                        case 2:
                            allFields = _a.sent();
                            if (!(allFields.length === 0)) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.editMessageText('❌ Hech qanday field topilmadi. Avval field yarating.')];
                        case 3:
                            _a.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [2 /*return*/];
                        case 4:
                            message = '📁 Qaysi fieldni tanlaysiz?\n\n';
                            allFields.forEach(function (field, index) {
                                message += "".concat(index + 1, ". ").concat(field.name, "\n");
                            });
                            message += '\nRaqamini kiriting (masalan: 1)';
                            this.sessionService.updateSessionData(ctx.from.id, {
                                fields: allFields,
                            });
                            return [4 /*yield*/, ctx.editMessageText(message)];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, ctx.reply(message, admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        // ============ END DESCRIPTION METADATA METHODS ============
        AdminHandler_1.prototype.startSerialCreation = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!(!admin || !ctx.from)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Sizda admin huquqi yo'q.")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            keyboard = new grammy_1.Keyboard()
                                .text('🆕 Yangi serial yaratish')
                                .row()
                                .text("➕ Mavjud kino/serialga qism qo'shish")
                                .row()
                                .text('❌ Bekor qilish')
                                .resized();
                            return [4 /*yield*/, ctx.reply('📺 Serial boshqaruvi\n\nQaysi amalni bajarmoqchisiz?\n\n' +
                                    '• Yangi serial yaratish\n' +
                                    "• Kino yoki serialga yangi qism qo'shish", {
                                    reply_markup: keyboard,
                                })];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startNewSerialCreation = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!(!admin || !ctx.from)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Sizda admin huquqi yo'q.")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            this.sessionService.createSession(ctx.from.id, session_interface_1.AdminState.CREATING_SERIAL);
                            this.sessionService.updateSessionData(ctx.from.id, { isNewSerial: true });
                            return [4 /*yield*/, ctx.reply('📺 Yangi serial yaratish boshlandi!\n\n' +
                                    '1️⃣ Serial kodini kiriting:\n' +
                                    "⚠️ Kod FAQAT raqamlardan iborat bo'lishi kerak!\n" +
                                    'Masalan: 12345', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startAddingEpisode = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!(!admin || !ctx.from)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Sizda admin huquqi yo'q.")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            this.sessionService.createSession(ctx.from.id, session_interface_1.AdminState.ADDING_EPISODES);
                            this.sessionService.setStep(ctx.from.id, session_interface_1.AddEpisodeStep.CODE);
                            this.sessionService.updateSessionData(ctx.from.id, {
                                isAddingEpisode: true,
                            });
                            return [4 /*yield*/, ctx.reply("📺 Kino yoki Serialga qism qo'shish\n\n" +
                                    '🔢 Kino yoki serial kodini kiriting:\n' +
                                    "⚠️ Kod raqamlardan iborat bo'lishi kerak", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startVideoAttachment = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!(!admin || !ctx.from)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Sizda admin huquqi yo'q.")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            this.sessionService.createSession(ctx.from.id, session_interface_1.AdminState.ATTACHING_VIDEO);
                            return [4 /*yield*/, ctx.reply('📹 Kinoga video biriktirish boshlandi!\n\n' + '🔢 Kino kodini kiriting:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.openFieldsMenu = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Sizda admin huquqi yo'q.")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3: return [4 /*yield*/, ctx.reply('📁 Fieldlar bolimi', admin_menu_keyboard_1.AdminKeyboard.getFieldManagementMenu())];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startAddingField = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            this.sessionService.createSession(ctx.from.id, session_interface_1.AdminState.ADDING_FIELD);
                            return [4 /*yield*/, ctx.reply('📝 Field nomini kiriting:\nMasalan: Yangi kinolar', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showFieldsList = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, fields, message, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.fieldService.findAll()];
                        case 2:
                            fields = _a.sent();
                            if (!(fields.length === 0)) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply('📂 Hech qanday field topilmadi.')];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4:
                            message = '📋 Mavjud fieldlar:\n\n';
                            fields.forEach(function (field, index) {
                                message += "".concat(index + 1, ". ").concat(field.name, "\n");
                            });
                            message += "\n👇 Batafsil ma'lumot olish uchun raqamni bosing:";
                            keyboard = new grammy_1.InlineKeyboard();
                            fields.forEach(function (field, index) {
                                keyboard.text(String(index + 1), "field_detail_".concat(field.id));
                                if ((index + 1) % 5 === 0)
                                    keyboard.row();
                            });
                            return [4 /*yield*/, ctx.reply(message, { reply_markup: keyboard })];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showFieldDetail = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var fieldId, field, admin, message, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fieldId = parseInt(ctx.match[1]);
                            return [4 /*yield*/, this.fieldService.findOne(fieldId)];
                        case 1:
                            field = _a.sent();
                            if (!!field) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: '❌ Field topilmadi' })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 4:
                            admin = _a.sent();
                            message = "\n\uD83D\uDCC1 **Field Ma'lumotlari**\n\uD83C\uDFF7 Nomi: ".concat(field.name, "\n\uD83C\uDD94 ID: ").concat(field.id, "\n\uD83D\uDCE2 Kanal ID: ").concat(field.channelId, "\n\uD83D\uDD17 Kanal linki: ").concat(field.channelLink || "Yo'q", "\n\uD83D\uDCC5 Yaratilgan: ").concat(field.createdAt.toLocaleDateString('uz-UZ'), "\n\u2705 Faol: ").concat(field.isActive ? 'Ha' : "Yo'q", "\n    ").trim();
                            keyboard = new grammy_1.InlineKeyboard();
                            // Faqat SUPERADMIN o'chirish tugmasini ko'ra oladi
                            if ((admin === null || admin === void 0 ? void 0 : admin.role) === 'SUPERADMIN') {
                                keyboard.text("🗑 O'chirish", "delete_field_".concat(field.id)).row();
                            }
                            keyboard.text('🔙 Orqaga', 'back_to_fields');
                            return [4 /*yield*/, ctx.editMessageText(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.backToFieldsList = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.showFieldsList(ctx)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.deleteField = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, fieldId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            if (!(admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "❌ Faqat SUPERADMIN fieldlarni o'chira oladi!",
                                    show_alert: true,
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            fieldId = parseInt(ctx.match[1]);
                            return [4 /*yield*/, this.fieldService.delete(fieldId)];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: '✅ Field ochirildi' })];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, ctx.editMessageText('✅ Field muvaffaqiyatli ochirildi')];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showMandatoryChannels = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, channels, keyboard_1, message, inlineKeyboard, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.channelService.findAllMandatory()];
                        case 2:
                            channels = _a.sent();
                            if (!(channels.length === 0)) return [3 /*break*/, 4];
                            keyboard_1 = new grammy_1.Keyboard()
                                .text("➕ Majburiy kanal qo'shish")
                                .row()
                                .text('🔙 Orqaga')
                                .resized();
                            return [4 /*yield*/, ctx.reply("📢 Hech qanday majburiy kanal yo'q.", {
                                    reply_markup: keyboard_1,
                                })];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4:
                            message = '📢 Majburiy kanallar:\n\n';
                            channels.forEach(function (ch, i) {
                                message += "".concat(i + 1, ". ").concat(ch.channelName, "\n");
                                message += "   Link: ".concat(ch.channelLink, "\n");
                                message += "   \uD83D\uDC65 A'zolar: ".concat(ch.currentMembers);
                                if (ch.memberLimit) {
                                    message += " / ".concat(ch.memberLimit);
                                }
                                else {
                                    message += ' (Limitsiz)';
                                }
                                if (ch.type === 'PRIVATE' && ch.pendingRequests > 0) {
                                    message += "\n   \u23F3 Kutilayotgan: ".concat(ch.pendingRequests);
                                }
                                message += '\n\n';
                            });
                            inlineKeyboard = new grammy_1.InlineKeyboard();
                            // Faqat SUPERADMIN o'chirish tugmalarini ko'ra oladi
                            if (admin.role === 'SUPERADMIN') {
                                channels.forEach(function (ch) {
                                    inlineKeyboard
                                        .text("\uD83D\uDDD1 ".concat(ch.channelName), "delete_mandatory_".concat(ch.id))
                                        .row();
                                });
                            }
                            // So'rovlarni ko'rish tugmasini qo'shish
                            inlineKeyboard.text('📋 So\'rovlarni ko\'rish', 'view_join_requests').row();
                            return [4 /*yield*/, ctx.reply(message, { reply_markup: inlineKeyboard })];
                        case 5:
                            _a.sent();
                            keyboard = new grammy_1.Keyboard()
                                .text("➕ Majburiy kanal qo'shish")
                                .text("📊 Tarixni ko'rish")
                                .row()
                                .text('🔙 Orqaga')
                                .resized();
                            return [4 /*yield*/, ctx.reply("Yangi kanal qo'shish:", { reply_markup: keyboard })];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startAddMandatoryChannel = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.sessionService.startSession(Number(admin.telegramId), session_interface_1.AdminState.ADD_MANDATORY_CHANNEL)];
                        case 2:
                            _a.sent();
                            keyboard = new grammy_1.Keyboard()
                                .text('🌐 Public kanal')
                                .text('🔒 Private kanal')
                                .row()
                                .text('🔗 Boshqa link')
                                .row()
                                .text('❌ Bekor qilish')
                                .resized();
                            return [4 /*yield*/, ctx.reply('📝 Kanal turini tanlang:\n\n' +
                                    '🌐 Public kanal - Ochiq kanal (ID/username + link)\n' +
                                    '🔒 Private kanal - Yopiq kanal (ID + link)\n' +
                                    '🔗 Boshqa link - Instagram, YouTube va boshqalar\n\n' +
                                    "❌ Bekor qilish uchun 'Bekor qilish' tugmasini bosing", { reply_markup: keyboard })];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.deleteMandatoryChannel = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, channelId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            if (!(admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "❌ Faqat SUPERADMIN kanallarni o'chira oladi!",
                                    show_alert: true,
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            channelId = parseInt(ctx.match[1]);
                            return [4 /*yield*/, this.channelService.delete(channelId)];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: '✅ Majburiy kanal ochirildi' })];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, this.showMandatoryChannels(ctx)];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showChannelHistory = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            keyboard = new grammy_1.Keyboard()
                                .text("📋 Hammasini ko'rish")
                                .text("🔍 Link bo'yicha qidirish")
                                .row()
                                .text('🔙 Orqaga')
                                .resized();
                            return [4 /*yield*/, ctx.reply('📊 Majburiy kanallar tarixi:\n\n' + 'Tanlang:', {
                                    reply_markup: keyboard,
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showAllChannelsHistory = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, channels, message, activeChannels, inactiveChannels, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            // Avval barcha kanallar statistikasini yangilash
                            return [4 /*yield*/, ctx.reply('⏳ Statistika yangilanmoqda...')];
                        case 2:
                            // Avval barcha kanallar statistikasini yangilash
                            _a.sent();
                            return [4 /*yield*/, this.channelService.recalculateAllChannelsStats()];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.channelService.findAllWithHistory()];
                        case 4:
                            channels = _a.sent();
                            if (!(channels.length === 0)) return [3 /*break*/, 6];
                            return [4 /*yield*/, ctx.reply('📊 Hech qanday kanal topilmadi.', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                        case 6:
                            message = '📊 <b>Majburiy kanallar tarixi (Yangilandi):</b>\n\n';
                            activeChannels = channels.filter(function (ch) { return ch.isActive; });
                            inactiveChannels = channels.filter(function (ch) { return !ch.isActive; });
                            if (activeChannels.length > 0) {
                                message += '✅ <b>Faol kanallar:</b>\n\n';
                                activeChannels.forEach(function (ch, index) {
                                    message += "".concat(index + 1, ". <b>").concat(ch.channelName, "</b>\n");
                                    message += "   \uD83D\uDD17 ".concat(ch.channelLink, "\n");
                                    // Kanal turi
                                    if (ch.type === 'PUBLIC') {
                                        message += "   \uD83D\uDCC1 Turi: \uD83C\uDF10 <b>Public</b> (Ochiq kanal)\n";
                                    }
                                    else if (ch.type === 'PRIVATE') {
                                        message += "   \uD83D\uDCC1 Turi: \uD83D\uDD12 <b>Private</b> (Tasdiq asosida)\n";
                                    }
                                    else {
                                        message += "   \uD83D\uDCC1 Turi: ".concat(ch.type, "\n");
                                    }
                                    // A'zolar soni
                                    message += "   \uD83D\uDC65 A'zolar: <b>".concat(ch.currentMembers, "</b>");
                                    if (ch.memberLimit) {
                                        message += " / ".concat(ch.memberLimit);
                                        var percentage = ((ch.currentMembers / ch.memberLimit) *
                                            100).toFixed(1);
                                        message += " (\uD83D\uDCCA ".concat(percentage, "%)");
                                    }
                                    else {
                                        message += ' (♾️ Cheksiz)';
                                    }
                                    message += '\n';
                                    // Private kanal uchun kutilayotgan so'rovlar
                                    if (ch.type === 'PRIVATE') {
                                        message += "   \u23F3 Kutilayotgan so'rovlar: <b>".concat(ch.pendingRequests, "</b>\n");
                                    }
                                    message += "   \uD83D\uDCC5 Qo'shilgan: ".concat(new Date(ch.createdAt).toLocaleDateString('uz-UZ'), "\n\n");
                                });
                            }
                            if (inactiveChannels.length > 0) {
                                message +=
                                    "\n❌ <b>Nofaol kanallar (limit to'lgan yoki o'chirilgan):</b>\n\n";
                                inactiveChannels.forEach(function (ch, index) {
                                    message += "".concat(index + 1, ". <b>").concat(ch.channelName, "</b>\n");
                                    message += "   \uD83D\uDD17 ".concat(ch.channelLink, "\n");
                                    if (ch.type === 'PUBLIC') {
                                        message += "   \uD83D\uDCC1 Turi: \uD83C\uDF10 Public\n";
                                    }
                                    else if (ch.type === 'PRIVATE') {
                                        message += "   \uD83D\uDCC1 Turi: \uD83D\uDD12 Private\n";
                                    }
                                    message += "   \uD83D\uDC65 Jami qo'shilganlar: <b>".concat(ch.currentMembers, "</b>");
                                    if (ch.memberLimit) {
                                        message += " / ".concat(ch.memberLimit);
                                    }
                                    message += '\n';
                                    message += "   \uD83D\uDCC5 Qo'shilgan: ".concat(new Date(ch.createdAt).toLocaleDateString('uz-UZ'), "\n\n");
                                });
                            }
                            message += '\n📌 <i>Eslatma:</i>\n';
                            message += '• Public - Ochiq kanal, to\'g\'ridan-to\'g\'ri qo\'shilish\n';
                            message += '• Private - So\'rov yuborish va admin tasdiqini kutish\n';
                            message += '• Statistika har safar yangilanadi\n';
                            keyboard = new grammy_1.Keyboard()
                                .text("🔄 Qayta yangilash")
                                .text("🔍 Link bo'yicha qidirish")
                                .row()
                                .text('🗑️ Tarixni tozalash')
                                .row()
                                .text('🔙 Orqaga')
                                .resized();
                            return [4 /*yield*/, ctx.reply(message, {
                                    parse_mode: 'HTML',
                                    reply_markup: keyboard,
                                })];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startSearchChannelByLink = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.sessionService.startSession(Number(admin.telegramId), session_interface_1.AdminState.SEARCH_CHANNEL_BY_LINK)];
                        case 2:
                            _a.sent();
                            keyboard = new grammy_1.Keyboard().text('❌ Bekor qilish').resized();
                            return [4 /*yield*/, ctx.reply('🔍 Kanal linkini yuboring:\n\n' +
                                    'Misol: https://t.me/mychannel\n\n' +
                                    "❌ Bekor qilish uchun 'Bekor qilish' tugmasini bosing", { reply_markup: keyboard })];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.searchChannelByLink = function (ctx, link) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, channel, message, isReallyActive, inactiveReason, percentage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.channelService.findByLink(link)];
                        case 2:
                            channel = _a.sent();
                            if (!!channel) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply("❌ Bunday link bilan kanal topilmadi.\n\nIltimos, to'g'ri link yuboring.", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4:
                            this.sessionService.clearSession(ctx.from.id);
                            message = "\uD83D\uDCCA <b>Kanal ma'lumotlari:</b>\n\n";
                            message += "\uD83D\uDCE2 <b>".concat(channel.channelName, "</b>\n");
                            message += "\uD83D\uDD17 ".concat(channel.channelLink, "\n");
                            message += "\uD83D\uDCC1 Turi: ".concat(channel.type === 'PUBLIC' ? 'Public' : channel.type === 'PRIVATE' ? 'Private' : 'Boshqa', "\n");
                            isReallyActive = channel.isActive;
                            inactiveReason = '';
                            if (channel.memberLimit && channel.currentMembers >= channel.memberLimit) {
                                isReallyActive = false;
                                inactiveReason = " (Limit to'lgan)";
                            }
                            message += "\uD83D\uDCCA Holat: ".concat(isReallyActive ? '✅ Faol' : '❌ Nofaol').concat(inactiveReason, "\n");
                            message += "\uD83D\uDC65 A'zolar: ".concat(channel.currentMembers);
                            if (channel.memberLimit) {
                                message += " / ".concat(channel.memberLimit);
                                percentage = ((channel.currentMembers / channel.memberLimit) *
                                    100).toFixed(1);
                                message += " (".concat(percentage, "%)");
                            }
                            else {
                                message += ' (Cheksiz)';
                            }
                            message += '\n';
                            if (channel.type === 'PRIVATE' && channel.pendingRequests > 0) {
                                message += "\u23F3 Kutilayotgan so'rovlar: ".concat(channel.pendingRequests, "\n");
                            }
                            message += "\uD83D\uDCC5 Qo'shilgan: ".concat(new Date(channel.createdAt).toLocaleDateString('uz-UZ'), "\n");
                            if (!channel.isActive && !inactiveReason) {
                                message += "\n\u26A0\uFE0F Qayd: Kanal database'da nofaol deb belgilangan.";
                            }
                            return [4 /*yield*/, ctx.reply(message, {
                                    parse_mode: 'HTML',
                                })];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, ctx.reply('Tanlang:', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showDatabaseChannels = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, channels, keyboard_2, message_3, inlineKeyboard_1, keyboard, error_31;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin) {
                                return [2 /*return*/];
                            }
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 8, , 10]);
                            return [4 /*yield*/, this.channelService.findAllDatabase()];
                        case 3:
                            channels = _a.sent();
                            if (!(channels.length === 0)) return [3 /*break*/, 5];
                            keyboard_2 = new grammy_1.Keyboard()
                                .text("➕ Database kanal qo'shish")
                                .row()
                                .text('🔙 Orqaga')
                                .resized();
                            return [4 /*yield*/, ctx.reply("💾 Hech qanday database kanal yo'q.", {
                                    reply_markup: keyboard_2,
                                })];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                        case 5:
                            message_3 = '💾 Database kanallar:\n\n';
                            channels.forEach(function (ch, i) {
                                message_3 += "".concat(i + 1, ". ").concat(ch.channelName, "\n");
                                message_3 += "   \uD83C\uDD94 ID: ".concat(ch.channelId, "\n");
                                if (ch.channelLink) {
                                    message_3 += "   \uD83D\uDD17 Link: ".concat(ch.channelLink, "\n");
                                }
                                message_3 += "\n";
                            });
                            message_3 += "\n📌 Amallarni tanlang:";
                            inlineKeyboard_1 = new grammy_1.InlineKeyboard();
                            // Kanalga o'tish tugmalari
                            channels.forEach(function (ch, i) {
                                inlineKeyboard_1.text("".concat(i + 1), "goto_db_channel_".concat(ch.channelId));
                                if ((i + 1) % 3 === 0) {
                                    inlineKeyboard_1.row();
                                }
                            });
                            if (channels.length % 3 !== 0) {
                                inlineKeyboard_1.row();
                            }
                            // O'chirish tugmasi faqat SUPERADMIN uchun
                            if (admin.role === 'SUPERADMIN') {
                                inlineKeyboard_1.text("🗑 Kanal o'chirish", 'show_delete_db_channels').row();
                            }
                            return [4 /*yield*/, ctx.reply(message_3, {
                                    reply_markup: inlineKeyboard_1,
                                })];
                        case 6:
                            _a.sent();
                            keyboard = new grammy_1.Keyboard()
                                .text("➕ Database kanal qo'shish")
                                .row()
                                .text('🔙 Orqaga')
                                .resized();
                            return [4 /*yield*/, ctx.reply('Boshqaruv:', { reply_markup: keyboard })];
                        case 7:
                            _a.sent();
                            return [3 /*break*/, 10];
                        case 8:
                            error_31 = _a.sent();
                            this.logger.error("Error showing database channels: ".concat(error_31.message));
                            this.logger.error('Stack:', error_31.stack);
                            return [4 /*yield*/, ctx.reply('❌ Database kanallarni yuklashda xatolik yuz berdi.').catch(function () { })];
                        case 9:
                            _a.sent();
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showDeleteDatabaseChannels = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, error_32, channels, message, inlineKeyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            error_32 = _a.sent();
                            return [3 /*break*/, 5];
                        case 5: return [4 /*yield*/, this.channelService.findAllDatabase()];
                        case 6:
                            channels = _a.sent();
                            if (!(channels.length === 0)) return [3 /*break*/, 8];
                            return [4 /*yield*/, ctx.reply("📭 Database kanallar yo'q.\n\n🔙 Asosiy menyuga qaytish uchun /admin ni bosing.", {
                                    reply_markup: new grammy_1.InlineKeyboard().text('🔄 Yangilash', 'show_db_channels_menu'),
                                })];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                        case 8:
                            message = '🗑 Database kanallarni o\'chirish:\n\n';
                            channels.forEach(function (ch, i) {
                                message += "".concat(i + 1, ". ").concat(ch.channelName, "\n");
                                message += "   \uD83C\uDD94 ID: ".concat(ch.channelId, "\n");
                                if (ch.channelLink) {
                                    message += "   \uD83D\uDD17 Link: ".concat(ch.channelLink, "\n");
                                }
                                message += "\n";
                            });
                            message += "\n⚠️ O'chirmoqchi bo'lgan kanalni tanlang:";
                            inlineKeyboard = new grammy_1.InlineKeyboard();
                            channels.forEach(function (ch) {
                                inlineKeyboard
                                    .text("\uD83D\uDDD1 ".concat(ch.channelName), "confirm_delete_db_".concat(ch.id))
                                    .row();
                            });
                            inlineKeyboard.text('🔙 Orqaga', 'show_db_channels_menu').row();
                            return [4 /*yield*/, ctx.reply(message, {
                                    reply_markup: inlineKeyboard,
                                })];
                        case 9:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.gotoDbChannel = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, channelId, chat, channelLink, inviteLink, error_33, keyboard, error_34;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 2:
                            _a.sent();
                            channelId = ctx.match[1];
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 13, , 15]);
                            return [4 /*yield*/, this.grammyBot.bot.api.getChat(channelId)];
                        case 4:
                            chat = _a.sent();
                            channelLink = '';
                            if (!('username' in chat && chat.username)) return [3 /*break*/, 5];
                            channelLink = "https://t.me/".concat(chat.username);
                            return [3 /*break*/, 8];
                        case 5:
                            _a.trys.push([5, 7, , 8]);
                            return [4 /*yield*/, this.grammyBot.bot.api.exportChatInviteLink(channelId)];
                        case 6:
                            inviteLink = _a.sent();
                            channelLink = inviteLink;
                            return [3 /*break*/, 8];
                        case 7:
                            error_33 = _a.sent();
                            this.logger.error('Error getting invite link:', error_33);
                            return [3 /*break*/, 8];
                        case 8:
                            if (!channelLink) return [3 /*break*/, 10];
                            keyboard = new grammy_1.InlineKeyboard().url("📱 Kanalga o'tish", channelLink);
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCE2 Kanal: ".concat(chat.title, "\n\n") +
                                    "Quyidagi tugma orqali kanalga o'tishingiz mumkin:", { reply_markup: keyboard })];
                        case 9:
                            _a.sent();
                            return [3 /*break*/, 12];
                        case 10: return [4 /*yield*/, ctx.reply('❌ Kanal linkini olishda xatolik yuz berdi.\n' +
                                "Kanal ID: `".concat(channelId, "`\n\n") +
                                "Kanalga qo'lda kirish uchun ID dan foydalaning.", { parse_mode: 'Markdown' })];
                        case 11:
                            _a.sent();
                            _a.label = 12;
                        case 12: return [3 /*break*/, 15];
                        case 13:
                            error_34 = _a.sent();
                            this.logger.error('Error getting channel:', error_34);
                            return [4 /*yield*/, ctx.reply('❌ Kanalga ulanishda xatolik yuz berdi.\n' +
                                    'Botning kanalda admin ekanligiga ishonch hosil qiling.')];
                        case 14:
                            _a.sent();
                            return [3 /*break*/, 15];
                        case 15: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startAddDatabaseChannel = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.sessionService.startSession(Number(admin.telegramId), session_interface_1.AdminState.ADD_DATABASE_CHANNEL)];
                        case 2:
                            _a.sent();
                            keyboard = new grammy_1.Keyboard().text('❌ Bekor qilish').resized();
                            return [4 /*yield*/, ctx.reply('📝 Database kanalning ID sini yuboring:\n\n' +
                                    'Masalan: -1001234567890\n\n' +
                                    "❌ Bekor qilish uchun 'Bekor qilish' tugmasini bosing", { reply_markup: keyboard })];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.confirmDeleteDatabaseChannel = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, error_35, channelId, channel, message, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            error_35 = _a.sent();
                            return [3 /*break*/, 5];
                        case 5:
                            channelId = parseInt(ctx.match[1]);
                            return [4 /*yield*/, this.prisma.databaseChannel.findUnique({
                                    where: { id: channelId },
                                    include: {
                                        fields: true,
                                    },
                                })];
                        case 6:
                            channel = _a.sent();
                            if (!!channel) return [3 /*break*/, 9];
                            return [4 /*yield*/, ctx.reply('❌ Kanal topilmadi!')];
                        case 7:
                            _a.sent();
                            return [4 /*yield*/, this.showDeleteDatabaseChannels(ctx)];
                        case 8:
                            _a.sent();
                            return [2 /*return*/];
                        case 9:
                            message = "\u26A0\uFE0F DIQQAT: Database kanalini o'chirish!\n\n";
                            message += "\uD83D\uDCE2 Kanal: ".concat(channel.channelName, "\n");
                            message += "\uD83C\uDD94 ID: ".concat(channel.channelId, "\n");
                            if (channel.channelLink) {
                                message += "\uD83D\uDD17 Link: ".concat(channel.channelLink, "\n");
                            }
                            if (channel.fields.length > 0) {
                                message += "\n\uD83D\uDCC1 Bog'liq fieldlar: ".concat(channel.fields.length, " ta\n");
                                message += "   (Fieldlarning bog'lanishi tozalanadi)\n";
                            }
                            message += "\n\u2757\uFE0F Bu amalni ortga qaytarib bo'lmaydi!\n";
                            message += "\nRostdan ham o'chirmoqchimisiz?";
                            keyboard = new grammy_1.InlineKeyboard()
                                .text('✅ Ha, o\'chirish', "delete_db_channel_".concat(channelId))
                                .text('❌ Bekor qilish', 'show_delete_db_channels')
                                .row();
                            return [4 /*yield*/, ctx.reply(message, {
                                    reply_markup: keyboard,
                                })];
                        case 10:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.deleteDatabaseChannel = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, error_36, channelId, channel, channelName, error_37;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            if (!(admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "❌ Faqat SUPERADMIN database kanallarni o'chira oladi!",
                                    show_alert: true,
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: '⏳ O\'chirilmoqda...' })];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            error_36 = _a.sent();
                            return [3 /*break*/, 6];
                        case 6:
                            channelId = parseInt(ctx.match[1]);
                            _a.label = 7;
                        case 7:
                            _a.trys.push([7, 13, , 15]);
                            return [4 /*yield*/, this.prisma.databaseChannel.findUnique({
                                    where: { id: channelId },
                                })];
                        case 8:
                            channel = _a.sent();
                            if (!!channel) return [3 /*break*/, 10];
                            return [4 /*yield*/, ctx.reply('❌ Kanal topilmadi!')];
                        case 9:
                            _a.sent();
                            return [2 /*return*/];
                        case 10:
                            channelName = channel.channelName;
                            // O'chirish
                            return [4 /*yield*/, this.channelService.deleteDatabaseChannel(channelId)];
                        case 11:
                            // O'chirish
                            _a.sent();
                            return [4 /*yield*/, ctx.reply("\u2705 **Database kanal o'chirildi!**\n\n" +
                                    "\uD83D\uDCE2 Kanal: ".concat(channelName, "\n") +
                                    "\uD83C\uDD94 ID: `".concat(channel.channelId, "`"), { parse_mode: 'Markdown' })];
                        case 12:
                            _a.sent();
                            // Yangilangan ro'yxatni ko'rsatish
                            setTimeout(function () {
                                _this.showDeleteDatabaseChannels(ctx);
                            }, 1000);
                            return [3 /*break*/, 15];
                        case 13:
                            error_37 = _a.sent();
                            this.logger.error("Error deleting database channel ".concat(channelId, ":"), error_37);
                            return [4 /*yield*/, ctx.reply('❌ **O\'chirishda xatolik yuz berdi!**\n\n' +
                                    "Xatolik: ".concat(error_37.message), { parse_mode: 'Markdown' })];
                        case 14:
                            _a.sent();
                            return [3 /*break*/, 15];
                        case 15: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showPaymentsMenu = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            if (ctx.from) {
                                this.sessionService.clearSession(ctx.from.id);
                            }
                            return [4 /*yield*/, ctx.reply("💳 To'lovlar bo'limi", admin_menu_keyboard_1.AdminKeyboard.getPaymentManagementMenu())];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showPendingPayments = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, payments, _i, payments_1, payment, message, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.paymentService.findPending()];
                        case 2:
                            payments = _a.sent();
                            if (!(payments.length === 0)) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply("📥 Yangi to'lovlar yo'q.")];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4:
                            _i = 0, payments_1 = payments;
                            _a.label = 5;
                        case 5:
                            if (!(_i < payments_1.length)) return [3 /*break*/, 8];
                            payment = payments_1[_i];
                            message = "\n\uD83D\uDCB3 **To'lov #".concat(payment.id, "**\n\uD83D\uDC64 Foydalanuvchi: ").concat(payment.user.firstName || 'N/A', "\n\uD83D\uDCB0 Summa: ").concat(payment.amount, " ").concat(payment.currency, "\n\uD83D\uDCC5 Davomiyligi: ").concat(payment.duration, " kun\n\uD83D\uDD50 Sana: ").concat(payment.createdAt.toLocaleString('uz-UZ'), "\n      ");
                            keyboard = new grammy_1.InlineKeyboard()
                                .text('✅ Tasdiqlash', "approve_payment_".concat(payment.id))
                                .text('❌ Rad etish', "reject_payment_".concat(payment.id));
                            return [4 /*yield*/, ctx.api.sendPhoto(ctx.chat.id, payment.receiptFileId, {
                                    caption: message,
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7:
                            _i++;
                            return [3 /*break*/, 5];
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showApprovedPayments = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, payments, message;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.paymentService.findByStatus('APPROVED')];
                        case 2:
                            payments = _a.sent();
                            if (!(payments.length === 0)) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply("✅ Tasdiqlangan to'lovlar yo'q.")];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4:
                            message = "✅ **Tasdiqlangan to'lovlar:**\n\n";
                            payments.slice(0, 20).forEach(function (payment, index) {
                                message += "".concat(index + 1, ". \uD83D\uDC64 ").concat(payment.user.firstName || 'N/A', "\n");
                                message += "   \uD83D\uDCB0 ".concat(payment.amount, " ").concat(payment.currency, "\n");
                                message += "   \uD83D\uDCC5 ".concat(payment.createdAt.toLocaleDateString('uz-UZ'), "\n\n");
                            });
                            if (payments.length > 20) {
                                message += "\n... va yana ".concat(payments.length - 20, " ta");
                            }
                            return [4 /*yield*/, ctx.reply(message, { parse_mode: 'Markdown' })];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showRejectedPayments = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, payments, message;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.paymentService.findByStatus('REJECTED')];
                        case 2:
                            payments = _a.sent();
                            if (!(payments.length === 0)) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply("❌ Rad etilgan to'lovlar yo'q.")];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4:
                            message = "❌ **Rad etilgan to'lovlar:**\n\n";
                            payments.slice(0, 20).forEach(function (payment, index) {
                                message += "".concat(index + 1, ". \uD83D\uDC64 ").concat(payment.user.firstName || 'N/A', "\n");
                                message += "   \uD83D\uDCB0 ".concat(payment.amount, " ").concat(payment.currency, "\n");
                                message += "   \uD83D\uDCC5 ".concat(payment.createdAt.toLocaleDateString('uz-UZ'), "\n\n");
                            });
                            if (payments.length > 20) {
                                message += "\n... va yana ".concat(payments.length - 20, " ta");
                            }
                            return [4 /*yield*/, ctx.reply(message, { parse_mode: 'Markdown' })];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showPaymentStatistics = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, stats, message;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.paymentService.getStatistics()];
                        case 2:
                            stats = _a.sent();
                            message = "\n\uD83D\uDCCA **To'lovlar statistikasi**\n\n\uD83D\uDCE6 Jami to'lovlar: ".concat(stats.totalPayments, "\n\u2705 Tasdiqlangan: ").concat(stats.approvedCount, "\n\u274C Rad etilgan: ").concat(stats.rejectedCount, "\n\u23F3 Kutilmoqda: ").concat(stats.pendingCount, "\n\n\uD83D\uDCB0 Jami summa: ").concat(stats.totalRevenue || 0, " UZS\n    ").trim();
                            return [4 /*yield*/, ctx.reply(message, { parse_mode: 'Markdown' })];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.approvePayment = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, paymentId, payment, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 2:
                            _a.sent();
                            paymentId = parseInt(ctx.match[1]);
                            return [4 /*yield*/, this.paymentService.findById(paymentId)];
                        case 3:
                            payment = _a.sent();
                            if (!!payment) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.reply("❌ To'lov topilmadi.")];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                        case 5:
                            this.sessionService.startSession(ctx.from.id, session_interface_1.AdminState.APPROVE_PAYMENT);
                            this.sessionService.updateSessionData(ctx.from.id, {
                                paymentId: paymentId,
                                userId: payment.userId,
                                amount: payment.amount,
                            });
                            keyboard = new grammy_1.Keyboard()
                                .text('30 kun (1 oy)')
                                .text('90 kun (3 oy)')
                                .row()
                                .text('180 kun (6 oy)')
                                .text('365 kun (1 yil)')
                                .row()
                                .text('❌ Bekor qilish')
                                .resized();
                            return [4 /*yield*/, ctx.reply("\uD83D\uDC8E **Premium berish**\n\n" +
                                    "\uD83D\uDC64 Foydalanuvchi: ".concat(payment.user.firstName, "\n") +
                                    "\uD83D\uDCB0 Summa: ".concat(payment.amount.toLocaleString(), " UZS\n\n") +
                                    "\uD83D\uDCC5 Necha kunlik premium berasiz?\n" +
                                    "Kunlar sonini yozing yoki pastdagi tugmalardan tanlang:", { parse_mode: 'Markdown', reply_markup: keyboard })];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.rejectPayment = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, paymentId, payment, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 2:
                            _a.sent();
                            paymentId = parseInt(ctx.match[1]);
                            return [4 /*yield*/, this.paymentService.findById(paymentId)];
                        case 3:
                            payment = _a.sent();
                            if (!!payment) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.reply("❌ To'lov topilmadi.")];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                        case 5:
                            this.sessionService.startSession(ctx.from.id, session_interface_1.AdminState.REJECT_PAYMENT);
                            this.sessionService.updateSessionData(ctx.from.id, {
                                paymentId: paymentId,
                                userId: payment.userId,
                            });
                            keyboard = new grammy_1.Keyboard()
                                .text("Noto'g'ri chek")
                                .text('Pul tushmagan')
                                .row()
                                .text('Boshqa sabab')
                                .text('❌ Bekor qilish')
                                .resized();
                            return [4 /*yield*/, ctx.reply("\u274C **To'lovni rad etish**\n\n" +
                                    "\uD83D\uDC64 Foydalanuvchi: ".concat(payment.user.firstName, "\n") +
                                    "\uD83D\uDCB0 Summa: ".concat(payment.amount.toLocaleString(), " UZS\n\n") +
                                    "\uD83D\uDCDD Rad etish sababini yozing:", { parse_mode: 'Markdown', reply_markup: keyboard })];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.approveJoinRequest = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, match, userId, channelId, joinRequest, channel, user, error_38, error_39;
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _e.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 2:
                            _e.sent();
                            match = (_b = (_a = ctx.callbackQuery) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.match(/^approve_join_(\d+)_(\d+)$/);
                            if (!match)
                                return [2 /*return*/];
                            userId = parseInt(match[1]);
                            channelId = parseInt(match[2]);
                            _e.label = 3;
                        case 3:
                            _e.trys.push([3, 18, , 20]);
                            return [4 /*yield*/, this.prisma.channelJoinRequest.findUnique({
                                    where: {
                                        userId_channelId: {
                                            userId: userId,
                                            channelId: channelId,
                                        },
                                    },
                                })];
                        case 4:
                            joinRequest = _e.sent();
                            if (!!joinRequest) return [3 /*break*/, 6];
                            return [4 /*yield*/, ctx.editMessageText("❌ So'rov topilmadi.")];
                        case 5:
                            _e.sent();
                            return [2 /*return*/];
                        case 6:
                            if (!(joinRequest.status !== 'PENDING')) return [3 /*break*/, 8];
                            return [4 /*yield*/, ctx.editMessageText("\u274C So'rov allaqachon ".concat(joinRequest.status === 'APPROVED' ? 'tasdiqlangan' : 'rad etilgan', "."))];
                        case 7:
                            _e.sent();
                            return [2 /*return*/];
                        case 8: 
                        // Update join request status
                        return [4 /*yield*/, this.prisma.channelJoinRequest.update({
                                where: {
                                    userId_channelId: {
                                        userId: userId,
                                        channelId: channelId,
                                    },
                                },
                                data: {
                                    status: 'APPROVED',
                                    processedAt: new Date(),
                                    processedBy: String(ctx.from.id),
                                },
                            })];
                        case 9:
                            // Update join request status
                            _e.sent();
                            // Update UserChannelStatus to 'joined' since the admin has approved
                            return [4 /*yield*/, this.prisma.userChannelStatus.upsert({
                                    where: {
                                        userId_channelId: {
                                            userId: userId,
                                            channelId: channelId,
                                        },
                                    },
                                    create: {
                                        userId: userId,
                                        channelId: channelId,
                                        status: 'joined',
                                        lastUpdated: new Date(),
                                    },
                                    update: {
                                        status: 'joined',
                                        lastUpdated: new Date(),
                                    },
                                })];
                        case 10:
                            // Update UserChannelStatus to 'joined' since the admin has approved
                            _e.sent();
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findUnique({
                                    where: { id: channelId },
                                })];
                        case 11:
                            channel = _e.sent();
                            return [4 /*yield*/, this.prisma.user.findUnique({
                                    where: { id: userId },
                                })];
                        case 12:
                            user = _e.sent();
                            if (!(user && channel)) return [3 /*break*/, 16];
                            _e.label = 13;
                        case 13:
                            _e.trys.push([13, 15, , 16]);
                            return [4 /*yield*/, ctx.api.sendMessage(user.telegramId, "\u2705 Sizning ".concat(channel.channelName, " kanaliga qo'shilish so'rovingiz tasdiqlandi!\n\n") +
                                    "Endi botdan foydalanishingiz mumkin. /start ni bosing.")];
                        case 14:
                            _e.sent();
                            return [3 /*break*/, 16];
                        case 15:
                            error_38 = _e.sent();
                            this.logger.error("Failed to notify user ".concat(user.telegramId, ": ").concat(error_38.message));
                            return [3 /*break*/, 16];
                        case 16: return [4 /*yield*/, ctx.editMessageText(((_d = (_c = ctx.callbackQuery) === null || _c === void 0 ? void 0 : _c.message) === null || _d === void 0 ? void 0 : _d.text) + '\n\n✅ So\'rov tasdiqlandi!')];
                        case 17:
                            _e.sent();
                            return [3 /*break*/, 20];
                        case 18:
                            error_39 = _e.sent();
                            this.logger.error("Error approving join request: ".concat(error_39.message));
                            return [4 /*yield*/, ctx.reply("❌ So'rovni tasdiqlashda xatolik yuz berdi.")];
                        case 19:
                            _e.sent();
                            return [3 /*break*/, 20];
                        case 20: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.rejectJoinRequest = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, match, userId, channelId, joinRequest, channel, user, error_40, error_41;
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _e.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 2:
                            _e.sent();
                            match = (_b = (_a = ctx.callbackQuery) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.match(/^reject_join_(\d+)_(\d+)$/);
                            if (!match)
                                return [2 /*return*/];
                            userId = parseInt(match[1]);
                            channelId = parseInt(match[2]);
                            _e.label = 3;
                        case 3:
                            _e.trys.push([3, 18, , 20]);
                            return [4 /*yield*/, this.prisma.channelJoinRequest.findUnique({
                                    where: {
                                        userId_channelId: {
                                            userId: userId,
                                            channelId: channelId,
                                        },
                                    },
                                })];
                        case 4:
                            joinRequest = _e.sent();
                            if (!!joinRequest) return [3 /*break*/, 6];
                            return [4 /*yield*/, ctx.editMessageText("❌ So'rov topilmadi.")];
                        case 5:
                            _e.sent();
                            return [2 /*return*/];
                        case 6:
                            if (!(joinRequest.status !== 'PENDING')) return [3 /*break*/, 8];
                            return [4 /*yield*/, ctx.editMessageText("\u274C So'rov allaqachon ".concat(joinRequest.status === 'APPROVED' ? 'tasdiqlangan' : 'rad etilgan', "."))];
                        case 7:
                            _e.sent();
                            return [2 /*return*/];
                        case 8: 
                        // Update join request status
                        return [4 /*yield*/, this.prisma.channelJoinRequest.update({
                                where: {
                                    userId_channelId: {
                                        userId: userId,
                                        channelId: channelId,
                                    },
                                },
                                data: {
                                    status: 'REJECTED',
                                    processedAt: new Date(),
                                    processedBy: String(ctx.from.id),
                                    rejectedReason: 'Admin tomonidan rad etildi',
                                },
                            })];
                        case 9:
                            // Update join request status
                            _e.sent();
                            // Update UserChannelStatus to 'left' since the request was rejected
                            return [4 /*yield*/, this.prisma.userChannelStatus.upsert({
                                    where: {
                                        userId_channelId: {
                                            userId: userId,
                                            channelId: channelId,
                                        },
                                    },
                                    create: {
                                        userId: userId,
                                        channelId: channelId,
                                        status: 'left',
                                        lastUpdated: new Date(),
                                    },
                                    update: {
                                        status: 'left',
                                        lastUpdated: new Date(),
                                    },
                                })];
                        case 10:
                            // Update UserChannelStatus to 'left' since the request was rejected
                            _e.sent();
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findUnique({
                                    where: { id: channelId },
                                })];
                        case 11:
                            channel = _e.sent();
                            return [4 /*yield*/, this.prisma.user.findUnique({
                                    where: { id: userId },
                                })];
                        case 12:
                            user = _e.sent();
                            if (!(user && channel)) return [3 /*break*/, 16];
                            _e.label = 13;
                        case 13:
                            _e.trys.push([13, 15, , 16]);
                            return [4 /*yield*/, ctx.api.sendMessage(user.telegramId, "\u274C Sizning ".concat(channel.channelName, " kanaliga qo'shilish so'rovingiz rad etildi.\n\n") +
                                    "Agar savol bo'lsa, admin bilan bog'laning.")];
                        case 14:
                            _e.sent();
                            return [3 /*break*/, 16];
                        case 15:
                            error_40 = _e.sent();
                            this.logger.error("Failed to notify user ".concat(user.telegramId, ": ").concat(error_40.message));
                            return [3 /*break*/, 16];
                        case 16: return [4 /*yield*/, ctx.editMessageText(((_d = (_c = ctx.callbackQuery) === null || _c === void 0 ? void 0 : _c.message) === null || _d === void 0 ? void 0 : _d.text) + '\n\n❌ So\'rov rad etildi!')];
                        case 17:
                            _e.sent();
                            return [3 /*break*/, 20];
                        case 18:
                            error_41 = _e.sent();
                            this.logger.error("Error rejecting join request: ".concat(error_41.message));
                            return [4 /*yield*/, ctx.reply("❌ So'rovni rad etishda xatolik yuz berdi.")];
                        case 19:
                            _e.sent();
                            return [3 /*break*/, 20];
                        case 20: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.viewJoinRequests = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, requests, message, keyboard, _i, _a, _b, index, req, user, channel, error_42;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _c.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 2:
                            _c.sent();
                            _c.label = 3;
                        case 3:
                            _c.trys.push([3, 13, , 15]);
                            return [4 /*yield*/, this.prisma.channelJoinRequest.findMany({
                                    where: { status: 'PENDING' },
                                    orderBy: { requestedAt: 'desc' },
                                    take: 20, // Faqat oxirgi 20 ta
                                })];
                        case 4:
                            requests = _c.sent();
                            if (!(requests.length === 0)) return [3 /*break*/, 6];
                            return [4 /*yield*/, ctx.reply('📋 Hozirda kutilayotgan kanalga qo\'shilish so\'rovlari yo\'q.')];
                        case 5:
                            _c.sent();
                            return [2 /*return*/];
                        case 6:
                            message = '📋 <b>Kanalga qo\'shilish so\'rovlari:</b>\n\n';
                            keyboard = new grammy_1.InlineKeyboard();
                            _i = 0, _a = requests.entries();
                            _c.label = 7;
                        case 7:
                            if (!(_i < _a.length)) return [3 /*break*/, 11];
                            _b = _a[_i], index = _b[0], req = _b[1];
                            return [4 /*yield*/, this.prisma.user.findUnique({
                                    where: { id: req.userId },
                                })];
                        case 8:
                            user = _c.sent();
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findUnique({
                                    where: { id: req.channelId },
                                })];
                        case 9:
                            channel = _c.sent();
                            if (!user || !channel)
                                return [3 /*break*/, 10];
                            message += "".concat(index + 1, ". \uD83D\uDC64 ").concat(req.firstName || '', " ").concat(req.lastName || '', "\n");
                            message += "   \uD83C\uDD94 ID: <code>".concat(req.telegramId, "</code>\n");
                            message += "   \uD83D\uDC64 Username: ".concat(req.username ? '@' + req.username : 'Yo\'q', "\n");
                            message += "   \uD83D\uDCF1 Kanal: ".concat(channel.channelName, "\n");
                            message += "   \u23F0 Sana: ".concat(req.requestedAt.toLocaleString('uz-UZ'), "\n\n");
                            keyboard
                                .text("\u2705 ".concat(index + 1), "approve_join_".concat(req.userId, "_").concat(req.channelId))
                                .text("\u274C ".concat(index + 1), "reject_join_".concat(req.userId, "_").concat(req.channelId))
                                .row();
                            _c.label = 10;
                        case 10:
                            _i++;
                            return [3 /*break*/, 7];
                        case 11: return [4 /*yield*/, ctx.reply(message, {
                                parse_mode: 'HTML',
                                reply_markup: keyboard,
                            })];
                        case 12:
                            _c.sent();
                            return [3 /*break*/, 15];
                        case 13:
                            error_42 = _c.sent();
                            this.logger.error("Error viewing join requests: ".concat(error_42.message));
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 14:
                            _c.sent();
                            return [3 /*break*/, 15];
                        case 15: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showAdminsList = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, admins, message_4, keyboard_3, currentAdmin_1, deletableAdmins, error_43;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!(!admin || admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Sizda admin boshqarish huquqi yo'q.")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            _a.trys.push([3, 7, , 9]);
                            return [4 /*yield*/, this.adminService.findAll()];
                        case 4:
                            admins = _a.sent();
                            message_4 = '👥 **Adminlar royxati:**\n\n';
                            if (admins.length === 0) {
                                message_4 += "Hozircha adminlar yo'q.\n\n";
                            }
                            else {
                                admins.forEach(function (a, i) {
                                    var _a;
                                    var roleEmoji = a.role === 'SUPERADMIN' ? '👑' : a.role === 'MANAGER' ? '👨‍💼' : '👥';
                                    var creatorInfo = a.createdBy === ((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id.toString())
                                        ? ' (✅ Siz yaratdingiz)'
                                        : '';
                                    message_4 += "".concat(i + 1, ". ").concat(roleEmoji, " @").concat(a.username || 'N/A').concat(creatorInfo, "\n");
                                    message_4 += "   \uD83D\uDCCB Rol: ".concat(a.role, "\n");
                                    message_4 += "   \uD83C\uDD94 ID: `".concat(a.telegramId, "`\n");
                                    message_4 += "   \uD83D\uDCC5 Qo'shilgan: ".concat(a.createdAt.toLocaleDateString('uz-UZ'), "\n\n");
                                });
                            }
                            keyboard_3 = new grammy_1.InlineKeyboard();
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(ctx.from.id.toString())];
                        case 5:
                            currentAdmin_1 = _a.sent();
                            deletableAdmins = admins.filter(function (a) {
                                var _a, _b;
                                if (a.telegramId === ((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id.toString()))
                                    return false;
                                if (a.createdBy === ((_b = ctx.from) === null || _b === void 0 ? void 0 : _b.id.toString()))
                                    return true;
                                if (currentAdmin_1 && a.createdAt > currentAdmin_1.createdAt)
                                    return true;
                                return false;
                            });
                            if (deletableAdmins.length > 0) {
                                deletableAdmins.forEach(function (a) {
                                    var roleEmoji = a.role === 'SUPERADMIN' ? '👑' : a.role === 'MANAGER' ? '👨‍💼' : '👥';
                                    keyboard_3
                                        .text("\uD83D\uDDD1 ".concat(roleEmoji, " ").concat(a.username || a.telegramId), "delete_admin_".concat(a.telegramId))
                                        .row();
                                });
                            }
                            keyboard_3.text("➕ Admin qo'shish", 'add_new_admin').row();
                            keyboard_3.text('🔙 Orqaga', 'back_to_admin_menu');
                            return [4 /*yield*/, ctx.reply(message_4, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard_3,
                                })];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 9];
                        case 7:
                            error_43 = _a.sent();
                            this.logger.error('❌ Error showing admins list');
                            this.logger.error("Error details: ".concat(error_43.message));
                            this.logger.error('Stack:', error_43.stack);
                            return [4 /*yield*/, ctx.reply("❌ Adminlar royxatini ko'rsatishda xatolik yuz berdi.\n\n" +
                                    "Iltimos, qayta urinib ko'ring.").catch(function () { })];
                        case 8:
                            _a.sent();
                            return [3 /*break*/, 9];
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startAddingAdmin = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!(!admin || admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "❌ Sizda admin qo'shish huquqi yo'q.",
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.sessionService.startSession(ctx.from.id, session_interface_1.AdminState.ADD_ADMIN)];
                        case 4:
                            _a.sent();
                            keyboard = new grammy_1.Keyboard().text('❌ Bekor qilish').resized();
                            return [4 /*yield*/, ctx.reply('📝 Yangi admin Telegram ID sini yuboring:\n\n' +
                                    'Masalan: 123456789\n\n' +
                                    "❌ Bekor qilish uchun 'Bekor qilish' tugmasini bosing", { reply_markup: keyboard })];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.deleteAdmin = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, adminTelegramId, adminToDelete, currentAdmin, canDelete, error_44;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _b.sent();
                            if (!(!admin || admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "❌ Sizda admin o'chirish huquqi yo'q.",
                                })];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3:
                            _b.trys.push([3, 22, , 24]);
                            adminTelegramId = ctx.match[1];
                            if (!(adminTelegramId === ((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id.toString()))) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "❌ O'zingizni o'chira olmaysiz!",
                                    show_alert: true,
                                })];
                        case 4:
                            _b.sent();
                            return [2 /*return*/];
                        case 5: return [4 /*yield*/, this.adminService.getAdminByTelegramId(adminTelegramId)];
                        case 6:
                            adminToDelete = _b.sent();
                            if (!!adminToDelete) return [3 /*break*/, 8];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: '❌ Admin topilmadi.',
                                    show_alert: true,
                                })];
                        case 7:
                            _b.sent();
                            return [2 /*return*/];
                        case 8: return [4 /*yield*/, this.adminService.getAdminByTelegramId(ctx.from.id.toString())];
                        case 9:
                            currentAdmin = _b.sent();
                            if (!!currentAdmin) return [3 /*break*/, 11];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: '❌ Xatolik yuz berdi.',
                                    show_alert: true,
                                })];
                        case 10:
                            _b.sent();
                            return [2 /*return*/];
                        case 11:
                            if (!(adminToDelete.role === 'SUPERADMIN')) return [3 /*break*/, 16];
                            if (!(adminToDelete.createdBy === ctx.from.id.toString())) return [3 /*break*/, 12];
                            return [3 /*break*/, 15];
                        case 12:
                            if (!(adminToDelete.createdAt > currentAdmin.createdAt)) return [3 /*break*/, 13];
                            return [3 /*break*/, 15];
                        case 13: return [4 /*yield*/, ctx.answerCallbackQuery({
                                text: "❌ Siz faqat o'zingiz yaratgan yoki o'zingizdan keyin qo'shilgan SUPERADMINlarni o'chira olasiz!",
                                show_alert: true,
                            })];
                        case 14:
                            _b.sent();
                            return [2 /*return*/];
                        case 15: return [3 /*break*/, 18];
                        case 16:
                            canDelete = adminToDelete.createdBy === ctx.from.id.toString() ||
                                adminToDelete.createdAt > currentAdmin.createdAt;
                            if (!!canDelete) return [3 /*break*/, 18];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "❌ Siz faqat o'zingiz yaratgan yoki o'zingizdan keyin qo'shilgan adminlarni o'chira olasiz!",
                                    show_alert: true,
                                })];
                        case 17:
                            _b.sent();
                            return [2 /*return*/];
                        case 18: return [4 /*yield*/, this.adminService.deleteAdmin(adminTelegramId)];
                        case 19:
                            _b.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: '✅ Admin ochirildi' })];
                        case 20:
                            _b.sent();
                            return [4 /*yield*/, ctx.editMessageText('✅ Admin muvaffaqiyatli ochirildi!')];
                        case 21:
                            _b.sent();
                            setTimeout(function () {
                                _this.showAdminsList(ctx);
                            }, 1000);
                            return [3 /*break*/, 24];
                        case 22:
                            error_44 = _b.sent();
                            this.logger.error('Error deleting admin:', error_44);
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "❌ Admin o'chirishda xatolik yuz berdi.",
                                    show_alert: true,
                                })];
                        case 23:
                            _b.sent();
                            return [3 /*break*/, 24];
                        case 24: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleRoleSelection = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, match, role, telegramId, session, username, canAddAdmin, canDeleteContent, roleNames, error_45, errorMessage;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _b.sent();
                            if (!(!admin || admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "❌ Sizda admin qo'shish huquqi yo'q.",
                                })];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3:
                            match = ctx.callbackQuery.data.match(/^select_admin_role_(ADMIN|MANAGER|SUPERADMIN)_(.+)$/);
                            if (!!match) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: "❌ Noto'g'ri ma'lumot" })];
                        case 4:
                            _b.sent();
                            return [2 /*return*/];
                        case 5:
                            role = match[1];
                            telegramId = match[2];
                            session = this.sessionService.getSession(ctx.from.id);
                            username = ((_a = session === null || session === void 0 ? void 0 : session.data) === null || _a === void 0 ? void 0 : _a.username) || telegramId;
                            this.logger.log("\uD83D\uDCDD Creating admin: ID=".concat(telegramId, ", Username=").concat(username, ", Role=").concat(role));
                            _b.label = 6;
                        case 6:
                            _b.trys.push([6, 10, , 13]);
                            canAddAdmin = role === 'SUPERADMIN';
                            canDeleteContent = role === 'SUPERADMIN' || role === 'MANAGER';
                            return [4 /*yield*/, this.adminService.createAdmin({
                                    telegramId: String(telegramId), // Ensure it's a string
                                    username: username,
                                    role: role,
                                    canAddAdmin: canAddAdmin,
                                    canDeleteContent: canDeleteContent,
                                    createdBy: ctx.from.id.toString(),
                                })];
                        case 7:
                            _b.sent();
                            this.logger.log("\u2705 Admin created successfully: ".concat(telegramId, " (@").concat(username, ")"));
                            this.sessionService.clearSession(ctx.from.id);
                            roleNames = {
                                ADMIN: '👥 Admin',
                                MANAGER: '👨‍💼 Manager',
                                SUPERADMIN: '👑 SuperAdmin',
                            };
                            return [4 /*yield*/, ctx.editMessageText("\u2705 *".concat(roleNames[role], " muvaffaqiyatli qo'shildi!*\n\n") +
                                    "\uD83D\uDC64 Foydalanuvchi: @".concat(username, "\n") +
                                    "\uD83C\uDD94 Telegram ID: `".concat(telegramId, "`\n") +
                                    "\uD83D\uDCCB Rol: ".concat(roleNames[role]), { parse_mode: 'Markdown' })];
                        case 8:
                            _b.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: "✅ Admin qo'shildi!" })];
                        case 9:
                            _b.sent();
                            setTimeout(function () {
                                _this.showAdminsList(ctx);
                            }, 2000);
                            return [3 /*break*/, 13];
                        case 10:
                            error_45 = _b.sent();
                            this.logger.error("\u274C Failed to create admin: ".concat(telegramId));
                            this.logger.error("Error details: ".concat(error_45.message));
                            this.logger.error("Error stack:", error_45.stack);
                            return [4 /*yield*/, ctx.answerCallbackQuery({
                                    text: "❌ Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
                                }).catch(function () { })];
                        case 11:
                            _b.sent();
                            errorMessage = error_45.code === 'P2002'
                                ? "\u274C Bu admin allaqachon mavjud!\n\nTelegram ID: `".concat(telegramId, "`")
                                : "\u274C Admin qo'shishda xatolik:\n\n".concat(error_45.message);
                            return [4 /*yield*/, ctx.reply(errorMessage, {
                                    parse_mode: 'Markdown',
                                }).catch(function () { })];
                        case 12:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 13];
                        case 13: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showSettings = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, premiumSettings, botSettings, message, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!(!admin || admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Sizda sozlamalarni o'zgartirish huquqi yo'q.")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3: return [4 /*yield*/, this.premiumService.getSettings()];
                        case 4:
                            premiumSettings = _a.sent();
                            return [4 /*yield*/, this.settingsService.getSettings()];
                        case 5:
                            botSettings = _a.sent();
                            message = "\n\u2699\uFE0F **BOT SOZLAMALARI**\n\n\uD83D\uDC8E **Premium narxlar:**\n\u251C 1 oy: ".concat(premiumSettings.monthlyPrice, " ").concat(premiumSettings.currency, "\n\u251C 3 oy: ").concat(premiumSettings.threeMonthPrice, " ").concat(premiumSettings.currency, "\n\u251C 6 oy: ").concat(premiumSettings.sixMonthPrice, " ").concat(premiumSettings.currency, "\n\u2514 1 yil: ").concat(premiumSettings.yearlyPrice, " ").concat(premiumSettings.currency, "\n\n\uD83D\uDCB3 **Karta ma'lumotlari:**\n\u251C Raqam: ").concat(premiumSettings.cardNumber, "\n\u2514 Egasi: ").concat(premiumSettings.cardHolder, "\n\n\uD83D\uDCF1 **Bot ma'lumotlari:**\n\u251C Support: @").concat(botSettings.supportUsername, "\n\u2514 Admin chat: ").concat(botSettings.adminNotificationChat, "\n    ");
                            keyboard = new grammy_1.InlineKeyboard()
                                .text("💰 Narxlarni o'zgartirish", 'edit_prices')
                                .row()
                                .text("💳 Karta ma'lumotlarini o'zgartirish", 'edit_card')
                                .row()
                                .text("📞 Aloqa bo'limini tahrirlash", 'edit_contact')
                                .row()
                                .text('🔙 Orqaga', 'back_to_admin_menu');
                            return [4 /*yield*/, ctx.reply(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startEditingPrices = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!(!admin || admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: "❌ Ruxsat yo'q" })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.sessionService.startSession(ctx.from.id, session_interface_1.AdminState.EDIT_PREMIUM_PRICES)];
                        case 4:
                            _a.sent();
                            keyboard = new grammy_1.Keyboard().text('❌ Bekor qilish').resized();
                            return [4 /*yield*/, ctx.reply("💰 1 oylik premium narxini kiriting (so'mda):\n\n" +
                                    'Masalan: 25000\n\n' +
                                    "❌ Bekor qilish uchun 'Bekor qilish' tugmasini bosing", { reply_markup: keyboard })];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startEditingCard = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!(!admin || admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: "❌ Ruxsat yo'q" })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.sessionService.startSession(ctx.from.id, session_interface_1.AdminState.EDIT_CARD_INFO)];
                        case 4:
                            _a.sent();
                            keyboard = new grammy_1.Keyboard().text('❌ Bekor qilish').resized();
                            return [4 /*yield*/, ctx.reply('💳 Yangi karta raqamini kiriting:\n\n' +
                                    'Masalan: 8600 1234 5678 9012\n\n' +
                                    "❌ Bekor qilish uchun 'Bekor qilish' tugmasini bosing", { reply_markup: keyboard })];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startEditingContactMessage = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, settings, currentMessage, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!(!admin || admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.answerCallbackQuery({ text: "❌ Ruxsat yo'q" })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.sessionService.startSession(ctx.from.id, session_interface_1.AdminState.EDIT_CONTACT_MESSAGE)];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.settingsService.getSettings()];
                        case 5:
                            settings = _a.sent();
                            currentMessage = settings.contactMessage || 'Hozircha matn kiritilmagan';
                            keyboard = new grammy_1.Keyboard().text('❌ Bekor qilish').resized();
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCDE **Aloqa bo'limi matnini kiriting:**\n\n" +
                                    "Hozirgi matn:\n".concat(currentMessage, "\n\n") +
                                    "Yangi matnni yuboring (Markdown formatida):\n" +
                                    "Masalan:\n" +
                                    "\uD83D\uDCDE **Aloqa**\\n\\n" +
                                    "Savollaringiz bo'lsa murojaat qiling:\\n" +
                                    "\uD83D\uDC64 Admin: @username\\n" +
                                    "\uD83D\uDCF1 Telefon: +998901234567\n\n" +
                                    "❌ Bekor qilish uchun 'Bekor qilish' tugmasini bosing", {
                                    reply_markup: keyboard,
                                    parse_mode: 'Markdown',
                                })];
                        case 6:
                            _a.sent();
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleContactMessageEditing = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, error_46;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 5, , 7]);
                            return [4 /*yield*/, this.settingsService.updateContactMessage(text)];
                        case 3:
                            _a.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("✅ Aloqa bo'limi matni muvaffaqiyatli yangilandi!\n\n" +
                                    'Userlar endi "📞 Aloqa" tugmasini bosganida yangi matnni ko\'rishadi.', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 5:
                            error_46 = _a.sent();
                            this.logger.error('Error updating contact message:', error_46);
                            return [4 /*yield*/, ctx.reply("❌ Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.backToAdminMenu = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            return [4 /*yield*/, ctx.editMessageText('🏠 Asosiy menyu')];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, ctx.reply('👨‍💼 Admin panel', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startBroadcast = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, message, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!(!admin || admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Sizda reklama yuborish huquqi yo'q.")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            message = "\n\uD83D\uDCE3 **Reklama yuborish**\n\nQaysi guruhga xabar yubormoqchisiz?\n    ".trim();
                            keyboard = new grammy_1.InlineKeyboard()
                                .text('📢 Hammaga', 'broadcast_all')
                                .row()
                                .text('💎 Faqat Premium', 'broadcast_premium')
                                .text('🆓 Faqat Oddiy', 'broadcast_free')
                                .row()
                                .text('🎬 Kino premyera', 'broadcast_premiere')
                                .row()
                                .text('⭐️ Telegram Premium', 'broadcast_telegram_premium')
                                .row()
                                .text('🔙 Orqaga', 'back_to_admin_menu');
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
        AdminHandler_1.prototype.handleBroadcastType = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var callbackData, broadcastType, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.callbackQuery || !('data' in ctx.callbackQuery) || !ctx.from)
                                return [2 /*return*/];
                            callbackData = ctx.callbackQuery.data;
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            broadcastType = callbackData.replace('broadcast_', '').toUpperCase();
                            this.sessionService.startSession(ctx.from.id, 'BROADCASTING');
                            this.sessionService.updateSessionData(ctx.from.id, { broadcastType: broadcastType });
                            keyboard = new grammy_1.Keyboard().text('❌ Bekor qilish').resized();
                            return [4 /*yield*/, ctx.reply("📝 Yubormoqchi bo'lgan xabaringizni yuboring:\n\n" +
                                    "(Matn, rasm yoki video bo'lishi mumkin)", { reply_markup: keyboard })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showWebPanel = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, webPanelUrl, adminPanelUrl, keyboard, error_47;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!!admin) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply('❌ Siz admin emassiz!')];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            _a.trys.push([3, 5, , 7]);
                            webPanelUrl = process.env.WEB_PANEL_URL ||
                                "http://localhost:".concat(process.env.PORT || 3001);
                            adminPanelUrl = "".concat(webPanelUrl, "/admin?token=").concat(admin.telegramId);
                            keyboard = new grammy_1.InlineKeyboard()
                                .url("🌐 Admin Panelga o'tish", adminPanelUrl)
                                .row()
                                .text('🔙 Orqaga', 'back_to_admin_menu');
                            return [4 /*yield*/, ctx.reply("\uD83C\uDF10 Web Admin Panel\n\n" +
                                    "\uD83D\uDC64 Admin: ".concat(admin.username || admin.telegramId, "\n") +
                                    "\uD83D\uDD10 Rol: ".concat(admin.role, "\n\n") +
                                    "Quyidagi tugmani bosib admin panelga o'ting:", {
                                    reply_markup: keyboard,
                                })];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 5:
                            error_47 = _a.sent();
                            this.logger.error('Error showing web panel:', error_47);
                            this.logger.error('Error stack:', error_47 === null || error_47 === void 0 ? void 0 : error_47.stack);
                            this.logger.error('Error message:', error_47 === null || error_47 === void 0 ? void 0 : error_47.message);
                            return [4 /*yield*/, ctx.reply('❌ Web panel linkini yaratishda xatolik yuz berdi.')];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleFieldCreationSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, _a, channelId, channelLink, data, error_48, errorMsg;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _c.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            _a = session.step;
                            switch (_a) {
                                case 0: return [3 /*break*/, 2];
                                case 1: return [3 /*break*/, 4];
                                case 2: return [3 /*break*/, 8];
                            }
                            return [3 /*break*/, 15];
                        case 2:
                            this.sessionService.updateSessionData(ctx.from.id, { name: text });
                            this.sessionService.nextStep(ctx.from.id);
                            return [4 /*yield*/, ctx.reply('📝 Kanal ID sini yuboring:\n\nMasalan: -1001234567890', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 3:
                            _c.sent();
                            return [3 /*break*/, 15];
                        case 4:
                            channelId = text.trim();
                            if (!!channelId.startsWith('-')) return [3 /*break*/, 6];
                            return [4 /*yield*/, ctx.reply("❌ Kanal ID noto'g'ri formatda!\n\nKanal ID '-' belgisi bilan boshlanishi kerak.\nMasalan: -1001234567890", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 5:
                            _c.sent();
                            return [2 /*return*/];
                        case 6:
                            this.sessionService.updateSessionData(ctx.from.id, { channelId: channelId });
                            this.sessionService.nextStep(ctx.from.id);
                            return [4 /*yield*/, ctx.reply('🔗 Kanal linkini yuboring:\n\nMasalan: https://t.me/+abcd1234', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 7:
                            _c.sent();
                            return [3 /*break*/, 15];
                        case 8:
                            channelLink = text.trim();
                            data = session.data;
                            _c.label = 9;
                        case 9:
                            _c.trys.push([9, 12, , 14]);
                            return [4 /*yield*/, this.fieldService.create({
                                    name: data.name,
                                    channelId: data.channelId,
                                    channelLink: channelLink,
                                })];
                        case 10:
                            _c.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply('✅ Field muvaffaqiyatli yaratildi!', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 11:
                            _c.sent();
                            return [3 /*break*/, 14];
                        case 12:
                            error_48 = _c.sent();
                            this.logger.error('Failed to create field:', error_48.message || error_48);
                            errorMsg = ((_b = error_48.message) === null || _b === void 0 ? void 0 : _b.includes('Unique constraint'))
                                ? "❌ Bu field nomi yoki kanal ID allaqachon mavjud!"
                                : "❌ Field yaratishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.";
                            return [4 /*yield*/, ctx.reply(errorMsg, admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 13:
                            _c.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 14];
                        case 14: return [3 /*break*/, 15];
                        case 15: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleDatabaseChannelCreationSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, _a, channelId, existingChannel, channelName_1, channelLink, chat, getChatError_1, linkInfo, error_49, channelName, data, error_50;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _b.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            _a = session.step;
                            switch (_a) {
                                case 0: return [3 /*break*/, 2];
                                case 1: return [3 /*break*/, 18];
                            }
                            return [3 /*break*/, 27];
                        case 2:
                            channelId = text.trim();
                            if (!!channelId.startsWith('-')) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply("❌ Kanal ID noto'g'ri formatda!\n\nKanal  ID '-' belgisi bilan boshlanishi kerak.\nMasalan: -1001234567890", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 3:
                            _b.sent();
                            return [2 /*return*/];
                        case 4:
                            _b.trys.push([4, 15, , 17]);
                            return [4 /*yield*/, this.channelService.findDatabaseChannelByChannelId(channelId)];
                        case 5:
                            existingChannel = _b.sent();
                            if (!existingChannel) return [3 /*break*/, 7];
                            return [4 /*yield*/, ctx.reply("\u26A0\uFE0F Bu kanal allaqachon database kanallar    ro'yxatida mavjud!\n\n" +
                                    "\uD83D\uDCE2 ".concat(existingChannel.channelName, "\n") +
                                    "\uD83C\uDD94 ".concat(channelId, "\n") +
                                    "".concat(existingChannel.channelLink ? "\uD83D\uDD17 ".concat(existingChannel.channelLink) : ''), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 6:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [2 /*return*/];
                        case 7:
                            channelLink = void 0;
                            _b.label = 8;
                        case 8:
                            _b.trys.push([8, 10, , 12]);
                            return [4 /*yield*/, ctx.api.getChat(channelId)];
                        case 9:
                            chat = _b.sent();
                            channelName_1 = 'title' in chat ? chat.title : channelId;
                            if ('username' in chat && chat.username) {
                                channelLink = "https://t.me/".concat(chat.username);
                            }
                            return [3 /*break*/, 12];
                        case 10:
                            getChatError_1 = _b.sent();
                            // Bot can't access the chat - ask admin to provide channel name
                            this.sessionService.updateSessionData(ctx.from.id, { channelId: channelId });
                            this.sessionService.nextStep(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("\u26A0\uFE0F Bot bu kanalga kira olmadi.\n\n" +
                                    "Bu quyidagi sabablarga ko'ra bo'lishi mumkin:\n" +
                                    "\u2022 Bot kanalda admin emas\n" +
                                    "\u2022 Kanal ID noto'g'ri\n\n" +
                                    "\uD83D\uDCDD Agar kanal to'g'ri bo'lsa, botni kanalga admin qiling va kanal nomini kiriting:", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 11:
                            _b.sent();
                            return [2 /*return*/];
                        case 12: return [4 /*yield*/, this.channelService.createDatabaseChannel({
                                channelId: channelId,
                                channelName: channelName_1,
                                channelLink: channelLink,
                                isActive: true,
                            })];
                        case 13:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            linkInfo = channelLink ? "\n\uD83D\uDD17 ".concat(channelLink) : '';
                            return [4 /*yield*/, ctx.reply("\u2705 Database kanal muvaffaqiyatli qo'shildi!\n\n\uD83D\uDCE2 ".concat(channelName_1, "\n\uD83C\uDD94 ").concat(channelId).concat(linkInfo), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 14:
                            _b.sent();
                            return [3 /*break*/, 17];
                        case 15:
                            error_49 = _b.sent();
                            this.logger.error('Failed to get channel info or create channel');
                            this.logger.error("Error message: ".concat(error_49.message));
                            this.logger.error("Error stack: ".concat(error_49.stack));
                            return [4 /*yield*/, ctx.reply("❌ Kanal ma'lumotlarini olishda xatolik yuz berdi.\n\n" +
                                    "Xatolik: ".concat(error_49.message, "\n\n") +
                                    "Botning kanalda admin ekanligiga ishonch hosil qiling va qaytadan urinib ko'ring.", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 16:
                            _b.sent();
                            return [3 /*break*/, 17];
                        case 17: return [3 /*break*/, 27];
                        case 18:
                            channelName = text.trim();
                            if (!!channelName) return [3 /*break*/, 20];
                            return [4 /*yield*/, ctx.reply("❌ Kanal nomi bo'sh bo'lishi mumkin emas!", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 19:
                            _b.sent();
                            return [2 /*return*/];
                        case 20:
                            data = session.data;
                            _b.label = 21;
                        case 21:
                            _b.trys.push([21, 24, , 26]);
                            return [4 /*yield*/, this.channelService.createDatabaseChannel({
                                    channelId: data.channelId,
                                    channelName: channelName,
                                    channelLink: undefined,
                                    isActive: true,
                                })];
                        case 22:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("\u2705 Database kanal muvaffaqiyatli qo'shildi!\n\n" +
                                    "\uD83D\uDCE2 ".concat(channelName, "\n") +
                                    "\uD83C\uDD94 ".concat(data.channelId, "\n\n") +
                                    "\u26A0\uFE0F Bot kanalga kirish huquqiga ega emas. Videolarni yuklash uchun botni kanalga admin qiling.", admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 23:
                            _b.sent();
                            return [3 /*break*/, 26];
                        case 24:
                            error_50 = _b.sent();
                            this.logger.error('Failed to create database channel manually:', error_50);
                            return [4 /*yield*/, ctx.reply("\u274C Kanal yaratishda xatolik: ".concat(error_50.message), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 25:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 26];
                        case 26: return [3 /*break*/, 27];
                        case 27: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleMandatoryChannelCreationSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, _a, channelType, channelLink, data, chat, botMember, channelName, keyboard_4, error_51, channelId, channelName, username, channelIdentifier, chat, botMember, error_52, keyboard, input, sessionData, step3Input, step3Data, error_53, limitNumber;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _b.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            _a = session.step;
                            switch (_a) {
                                case 0: return [3 /*break*/, 2];
                                case 1: return [3 /*break*/, 9];
                                case 2: return [3 /*break*/, 36];
                                case 3: return [3 /*break*/, 45];
                            }
                            return [3 /*break*/, 57];
                        case 2:
                            channelType = void 0;
                            if (!(text === '🌐 Public kanal')) return [3 /*break*/, 4];
                            channelType = 'PUBLIC';
                            this.sessionService.updateSessionData(ctx.from.id, { channelType: channelType });
                            this.sessionService.nextStep(ctx.from.id);
                            return [4 /*yield*/, ctx.reply('🔗 Kanal linkini yuboring:\n\nMasalan: https://t.me/mychannel', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 8];
                        case 4:
                            if (!(text === '🔒 Private kanal')) return [3 /*break*/, 6];
                            channelType = client_1.ChannelType.PRIVATE;
                            this.sessionService.updateSessionData(ctx.from.id, { channelType: channelType });
                            this.sessionService.nextStep(ctx.from.id);
                            return [4 /*yield*/, ctx.reply('🔗 Kanal invite linkini yuboring:\n\nMasalan: https://t.me/+abc123xyz', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 5:
                            _b.sent();
                            return [3 /*break*/, 8];
                        case 6:
                            if (!(text === '🔗 Boshqa link')) return [3 /*break*/, 8];
                            channelType = client_1.ChannelType.EXTERNAL;
                            this.sessionService.updateSessionData(ctx.from.id, { channelType: channelType });
                            this.sessionService.nextStep(ctx.from.id); // Go to step 1
                            this.sessionService.nextStep(ctx.from.id); // Then skip to step 2
                            return [4 /*yield*/, ctx.reply('📝 Kanal/Guruh nomini kiriting:\n\nMasalan: Instagram Sahifam, YouTube Kanal', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 7:
                            _b.sent();
                            _b.label = 8;
                        case 8: return [3 /*break*/, 57];
                        case 9:
                            channelLink = text.trim();
                            data = session.data;
                            if (!data.waitingForPrivateChannelId) return [3 /*break*/, 20];
                            if (!!channelLink.startsWith('-')) return [3 /*break*/, 11];
                            return [4 /*yield*/, ctx.reply("❌ Kanal ID noto'g'ri formatda!\n\n" +
                                    "Kanal ID '-' belgisi bilan boshlanishi kerak.\n" +
                                    'Masalan: -1001234567890', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 10:
                            _b.sent();
                            return [2 /*return*/];
                        case 11:
                            _b.trys.push([11, 17, , 19]);
                            return [4 /*yield*/, ctx.api.getChat(channelLink)];
                        case 12:
                            chat = _b.sent();
                            return [4 /*yield*/, ctx.api.getChatMember(channelLink, ctx.me.id)];
                        case 13:
                            botMember = _b.sent();
                            if (!(botMember.status !== 'administrator' &&
                                botMember.status !== 'creator')) return [3 /*break*/, 15];
                            return [4 /*yield*/, ctx.reply('❌ Bot kanalda admin emas!\n\n' +
                                    "Iltimos, botni kanalga admin qiling va qayta urinib ko'ring.", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 14:
                            _b.sent();
                            return [2 /*return*/];
                        case 15:
                            channelName = 'title' in chat ? chat.title : channelLink;
                            this.sessionService.updateSessionData(ctx.from.id, {
                                channelId: channelLink,
                                channelName: channelName,
                                waitingForPrivateChannelId: false,
                            });
                            this.sessionService.nextStep(ctx.from.id);
                            keyboard_4 = new grammy_1.Keyboard()
                                .text('♾️ Cheksiz')
                                .text('🔢 Limitli')
                                .row()
                                .text('❌ Bekor qilish')
                                .resized();
                            return [4 /*yield*/, ctx.reply('🔢 Kanal uchun limitni tanlang:\n\n' +
                                    "♾️ Cheksiz - Kanal doim majburiy bo'ladi (admin o'chirmaguncha)\n" +
                                    "🔢 Limitli - Ma'lum sondagi a'zolar qo'shilgandan keyin avtomatik o'chiriladi\n\n" +
                                    'Tanlang:', { reply_markup: keyboard_4 })];
                        case 16:
                            _b.sent();
                            return [3 /*break*/, 19];
                        case 17:
                            error_51 = _b.sent();
                            this.logger.error('Failed to verify private channel', error_51);
                            return [4 /*yield*/, ctx.reply('❌ Kanal topilmadi yoki bot admin emas!\n\n' +
                                    '✅ Botning kanalda admin ekanligiga ishonch hosil qiling.\n' +
                                    "✅ Kanal ID to'g'ri ekanligiga ishonch hosil qiling.", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 18:
                            _b.sent();
                            return [3 /*break*/, 19];
                        case 19: return [2 /*return*/];
                        case 20:
                            if (!!channelLink.startsWith('https://t.me/')) return [3 /*break*/, 22];
                            return [4 /*yield*/, ctx.reply("❌ Link noto'g'ri formatda!\n\nLink 'https://t.me/' bilan boshlanishi kerak.\nMasalan: https://t.me/mychannel yoki https://t.me/+abc123", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 21:
                            _b.sent();
                            return [2 /*return*/];
                        case 22:
                            _b.trys.push([22, 32, , 34]);
                            channelId = void 0;
                            channelName = void 0;
                            if (!(channelLink.includes('/+') ||
                                channelLink.includes('/joinchat/'))) return [3 /*break*/, 24];
                            return [4 /*yield*/, ctx.reply("🔒 Private kanal uchun ID kerak bo'ladi.\n\n" +
                                    '📱 Kanal ID sini olish uchun:\n' +
                                    '1️⃣ Kanalga @userinfobot ni admin qiling\n' +
                                    '2️⃣ Kanalda biror xabar yuboring\n' +
                                    '3️⃣ Bot sizga kanal ID sini beradi\n\n' +
                                    '🆔 Kanal ID sini yuboring:\n' +
                                    'Masalan: -1001234567890', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 23:
                            _b.sent();
                            this.sessionService.updateSessionData(ctx.from.id, {
                                channelLink: channelLink,
                                waitingForPrivateChannelId: true,
                            });
                            return [2 /*return*/]; // Stay on step 1
                        case 24:
                            username = channelLink.split('/').pop();
                            if (!!username) return [3 /*break*/, 26];
                            return [4 /*yield*/, ctx.reply("❌ Link noto'g'ri formatda!", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 25:
                            _b.sent();
                            return [2 /*return*/];
                        case 26:
                            channelIdentifier = username.startsWith('@')
                                ? username
                                : "@".concat(username);
                            return [4 /*yield*/, ctx.api.getChat(channelIdentifier)];
                        case 27:
                            chat = _b.sent();
                            channelId = String(chat.id);
                            channelName = 'title' in chat ? chat.title : channelIdentifier;
                            return [4 /*yield*/, ctx.api.getChatMember(channelId, ctx.me.id)];
                        case 28:
                            botMember = _b.sent();
                            if (!(botMember.status !== 'administrator' &&
                                botMember.status !== 'creator')) return [3 /*break*/, 30];
                            return [4 /*yield*/, ctx.reply('❌ Bot kanalda admin emas!\n\n' +
                                    "Iltimos, botni kanalga admin qiling va qayta urinib ko'ring.", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 29:
                            _b.sent();
                            return [2 /*return*/];
                        case 30:
                            this.sessionService.updateSessionData(ctx.from.id, {
                                channelId: channelId,
                                channelName: channelName,
                                channelLink: channelLink,
                            });
                            _b.label = 31;
                        case 31: return [3 /*break*/, 34];
                        case 32:
                            error_52 = _b.sent();
                            this.logger.error('Failed to get channel info', error_52);
                            return [4 /*yield*/, ctx.reply('❌ Kanal topilmadi yoki bot admin emas!\n\n' +
                                    '✅ Botning kanalda admin ekanligiga ishonch hosil qiling.\n' +
                                    "✅ Kanal linki to'g'ri ekanligiga ishonch hosil qiling.", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 33:
                            _b.sent();
                            return [2 /*return*/];
                        case 34:
                            this.sessionService.nextStep(ctx.from.id);
                            keyboard = new grammy_1.Keyboard()
                                .text('♾️ Cheksiz')
                                .text('🔢 Limitli')
                                .row()
                                .text('❌ Bekor qilish')
                                .resized();
                            return [4 /*yield*/, ctx.reply('🔢 Kanal uchun limitni tanlang:\n\n' +
                                    "♾️ Cheksiz - Kanal doim majburiy bo'ladi (admin o'chirmaguncha)\n" +
                                    "🔢 Limitli - Ma'lum sondagi a'zolar qo'shilgandan keyin avtomatik o'chiriladi\n\n" +
                                    'Tanlang:', { reply_markup: keyboard })];
                        case 35:
                            _b.sent();
                            return [3 /*break*/, 57];
                        case 36:
                            input = text.trim();
                            sessionData = session.data;
                            if (!(sessionData.channelType === client_1.ChannelType.EXTERNAL)) return [3 /*break*/, 38];
                            this.sessionService.updateSessionData(ctx.from.id, {
                                channelName: input,
                            });
                            this.sessionService.nextStep(ctx.from.id);
                            return [4 /*yield*/, ctx.reply('🔗 Linkni yuboring:\n\nMasalan:\n- https://instagram.com/username\n- https://youtube.com/@channel\n- https://facebook.com/page', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 37:
                            _b.sent();
                            return [3 /*break*/, 44];
                        case 38:
                            if (!(input === '♾️ Cheksiz')) return [3 /*break*/, 40];
                            return [4 /*yield*/, this.createChannelWithLimit(ctx, admin, sessionData, null)];
                        case 39:
                            _b.sent();
                            return [3 /*break*/, 44];
                        case 40:
                            if (!(input === '🔢 Limitli')) return [3 /*break*/, 42];
                            this.sessionService.nextStep(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("🔢 Nechta a'zo qo'shilgandan keyin kanal o'chirilsin?\n\n" +
                                    'Masalan: 1000\n\n' +
                                    'Faqat raqam kiriting:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 41:
                            _b.sent();
                            return [3 /*break*/, 44];
                        case 42: return [4 /*yield*/, ctx.reply("❌ Noto'g'ri tanlov! Tugmalardan birini bosing.", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 43:
                            _b.sent();
                            _b.label = 44;
                        case 44: return [3 /*break*/, 57];
                        case 45:
                            step3Input = text.trim();
                            step3Data = session.data;
                            if (!(step3Data.channelType === client_1.ChannelType.EXTERNAL)) return [3 /*break*/, 52];
                            _b.label = 46;
                        case 46:
                            _b.trys.push([46, 49, , 51]);
                            return [4 /*yield*/, this.channelService.createMandatoryChannel({
                                    channelId: step3Input,
                                    channelName: step3Data.channelName,
                                    channelLink: step3Input,
                                    type: client_1.ChannelType.EXTERNAL,
                                    isActive: true,
                                    memberLimit: null,
                                })];
                        case 47:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("\u2705 Tashqi link muvaffaqiyatli qo'shildi!\n\n" +
                                    "\uD83D\uDCE2 ".concat(step3Data.channelName, "\n") +
                                    "\uD83D\uDD17 ".concat(step3Input, "\n") +
                                    "\uD83D\uDCC1 Turi: Tashqi link", admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 48:
                            _b.sent();
                            return [3 /*break*/, 51];
                        case 49:
                            error_53 = _b.sent();
                            this.logger.error('Failed to create external channel', error_53);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 50:
                            _b.sent();
                            return [3 /*break*/, 51];
                        case 51: return [3 /*break*/, 56];
                        case 52:
                            limitNumber = parseInt(step3Input);
                            if (!(isNaN(limitNumber) || limitNumber <= 0)) return [3 /*break*/, 54];
                            return [4 /*yield*/, ctx.reply("❌ Noto'g'ri format! Musbat son kiriting.\n\nMasalan: 1000", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 53:
                            _b.sent();
                            return [2 /*return*/];
                        case 54: return [4 /*yield*/, this.createChannelWithLimit(ctx, admin, step3Data, limitNumber)];
                        case 55:
                            _b.sent();
                            _b.label = 56;
                        case 56: return [3 /*break*/, 57];
                        case 57: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.createChannelWithLimit = function (ctx, admin, data, memberLimit) {
            return __awaiter(this, void 0, void 0, function () {
                var limitText, error_54;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 5]);
                            return [4 /*yield*/, this.channelService.createMandatoryChannel({
                                    channelId: data.channelId,
                                    channelName: data.channelName,
                                    channelLink: data.channelLink,
                                    type: data.channelType,
                                    isActive: true,
                                    memberLimit: memberLimit,
                                })];
                        case 1:
                            _a.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            limitText = memberLimit === null ? 'Cheksiz' : "Limit: ".concat(memberLimit, " ta a'zo");
                            return [4 /*yield*/, ctx.reply("\u2705 Majburiy kanal muvaffaqiyatli qo'shildi!\n\n" +
                                    "\uD83D\uDCE2 ".concat(data.channelName, "\n") +
                                    "\uD83D\uDD17 ".concat(data.channelLink, "\n") +
                                    "\uD83D\uDCC1 Turi: ".concat(data.channelType === 'PUBLIC' ? 'Public kanal' : 'Private kanal', "\n") +
                                    "\uD83D\uDD22 ".concat(limitText), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            error_54 = _a.sent();
                            this.logger.error('Failed to create mandatory channel', error_54);
                            return [4 /*yield*/, ctx.reply("❌ Kanal qo'shishda xatolik yuz berdi.\n\nBotning kanalda admin ekanligiga ishonch hosil qiling.", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleAdminCreationSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, telegramId, username, userFound, chatId, user, error_55, statusText, message, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            telegramId = text.trim();
                            if (!(!telegramId || telegramId.length > 100 || /[\s\n\r;']/.test(telegramId))) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Noto'g'ri format!\n\nIltimos, to'g'ri Telegram ID yoki @username kiriting.\n\nMasalan: 123456789 yoki @username", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            // Agar @ bilan boshlansa, @ ni olib tashlaymiz
                            if (telegramId.startsWith('@')) {
                                telegramId = telegramId.substring(1);
                            }
                            userFound = false;
                            _a.label = 4;
                        case 4:
                            _a.trys.push([4, 6, , 7]);
                            chatId = /^\d+$/.test(telegramId) ? parseInt(telegramId, 10) : telegramId;
                            return [4 /*yield*/, ctx.api.getChat(chatId)];
                        case 5:
                            user = _a.sent();
                            username = 'username' in user ? user.username : undefined;
                            userFound = true;
                            this.logger.log("\u2705 User info fetched successfully for ".concat(telegramId).concat(username ? ' (@' + username + ')' : ''));
                            return [3 /*break*/, 7];
                        case 6:
                            error_55 = _a.sent();
                            // Agar foydalanuvchi topilmasa, ID/username bilan davom etamiz
                            this.logger.warn("\u26A0\uFE0F Cannot get user info for ".concat(telegramId, ": ").concat(error_55.message));
                            this.logger.warn('Proceeding with admin creation anyway...');
                            username = telegramId;
                            return [3 /*break*/, 7];
                        case 7:
                            // Session ma'lumotlarini saqlaymiz
                            this.sessionService.updateSessionData(ctx.from.id, {
                                telegramId: telegramId,
                                username: username || String(telegramId),
                            });
                            statusText = userFound
                                ? '✅ Foydalanuvchi topildi:'
                                : '⚠️ Foydalanuvchi ma\'lumoti olinmadi (bot bilan muloqot qilmagan bo\'lishi mumkin):';
                            message = "\n\uD83D\uDC64 **Admin qo'shish**\n\n".concat(statusText, "\n\uD83C\uDD94 ").concat(username ? '@' + username : telegramId, "\n\uD83C\uDD94 ID: ").concat(telegramId, "\n\n\uD83D\uDCBC **Rol tanlang:**\n\n\uD83D\uDC65 **ADMIN**\n\u251C Kino va serial yuklash\n\u251C Statistikani ko'rish\n\u2514 Fieldlarni boshqarish\n\n\uD83D\uDC68\u200D\uD83D\uDCBC **MANAGER**\n\u251C Admin qila oladigan barcha narsa\n\u251C Majburiy kanallar boshqarish\n\u251C Database kanallar boshqarish\n\u2514 To'lovlarni boshqarish\n\n\uD83D\uDC51 **SUPERADMIN**\n\u251C Manager qila oladigan barcha narsa\n\u251C Adminlar boshqarish\n\u251C Reklama yuborish\n\u251C Bot sozlamalari\n\u2514 To'liq nazorat\n\nQaysi rol berasiz?\n    ").trim();
                            keyboard = new grammy_1.InlineKeyboard()
                                .text('👥 Admin', "select_admin_role_ADMIN_".concat(telegramId))
                                .row()
                                .text('👨‍💼 Manager', "select_admin_role_MANAGER_".concat(telegramId))
                                .row()
                                .text('👑 SuperAdmin', "select_admin_role_SUPERADMIN_".concat(telegramId));
                            return [4 /*yield*/, ctx.reply(message, {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard,
                                })];
                        case 8:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handlePriceEditingSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, price, _a, data, error_56;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _b.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            price = parseInt(text);
                            if (!(isNaN(price) || price <= 0)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Narx noto'g'ri formatda!\n\nIltimos, faqat raqam kiriting.\nMasalan: 25000", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3:
                            _a = session.step;
                            switch (_a) {
                                case 0: return [3 /*break*/, 4];
                                case 1: return [3 /*break*/, 6];
                                case 2: return [3 /*break*/, 8];
                                case 3: return [3 /*break*/, 10];
                            }
                            return [3 /*break*/, 17];
                        case 4:
                            this.sessionService.updateSessionData(ctx.from.id, {
                                monthlyPrice: price,
                            });
                            this.sessionService.nextStep(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("💰 3 oylik premium narxini kiriting (so'mda):\n\nMasalan: 70000", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 5:
                            _b.sent();
                            return [3 /*break*/, 17];
                        case 6:
                            this.sessionService.updateSessionData(ctx.from.id, {
                                threeMonthPrice: price,
                            });
                            this.sessionService.nextStep(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("💰 6 oylik premium narxini kiriting (so'mda):\n\nMasalan: 130000", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 7:
                            _b.sent();
                            return [3 /*break*/, 17];
                        case 8:
                            this.sessionService.updateSessionData(ctx.from.id, {
                                sixMonthPrice: price,
                            });
                            this.sessionService.nextStep(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("💰 1 yillik premium narxini kiriting (so'mda):\n\nMasalan: 250000", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 9:
                            _b.sent();
                            return [3 /*break*/, 17];
                        case 10:
                            data = session.data;
                            _b.label = 11;
                        case 11:
                            _b.trys.push([11, 14, , 16]);
                            return [4 /*yield*/, this.premiumService.updatePrices({
                                    monthlyPrice: data.monthlyPrice,
                                    threeMonthPrice: data.threeMonthPrice,
                                    sixMonthPrice: data.sixMonthPrice,
                                    yearlyPrice: price,
                                })];
                        case 12:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply('✅ Narxlar muvaffaqiyatli yangilandi!', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 13:
                            _b.sent();
                            return [3 /*break*/, 16];
                        case 14:
                            error_56 = _b.sent();
                            this.logger.error('Failed to update prices', error_56);
                            return [4 /*yield*/, ctx.reply('❌ Narxlarni yangilashda xatolik yuz berdi.', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 15:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 16];
                        case 16: return [3 /*break*/, 17];
                        case 17: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleCardEditingSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, _a, data, error_57;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _b.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            _a = session.step;
                            switch (_a) {
                                case 0: return [3 /*break*/, 2];
                                case 1: return [3 /*break*/, 4];
                            }
                            return [3 /*break*/, 11];
                        case 2:
                            this.sessionService.updateSessionData(ctx.from.id, {
                                cardNumber: text.trim(),
                            });
                            this.sessionService.nextStep(ctx.from.id);
                            return [4 /*yield*/, ctx.reply('💳 Karta egasining ismini kiriting:\n\nMasalan: AZIZ KHAMIDOV', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 11];
                        case 4:
                            data = session.data;
                            _b.label = 5;
                        case 5:
                            _b.trys.push([5, 8, , 10]);
                            return [4 /*yield*/, this.premiumService.updateCardInfo({
                                    cardNumber: data.cardNumber,
                                    cardHolder: text.trim(),
                                })];
                        case 6:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("✅ Karta ma'lumotlari muvaffaqiyatli yangilandi!", admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 7:
                            _b.sent();
                            return [3 /*break*/, 10];
                        case 8:
                            error_57 = _b.sent();
                            this.logger.error('Failed to update card info', error_57);
                            return [4 /*yield*/, ctx.reply("❌ Karta ma'lumotlarini yangilashda xatolik yuz berdi.", admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 9:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 10];
                        case 10: return [3 /*break*/, 11];
                        case 11: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleAddingEpisodesSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, code, data, currentEpisodeNumber, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            if (!(session.step === session_interface_1.AddEpisodeStep.CODE)) return [3 /*break*/, 5];
                            code = parseInt(text);
                            if (!(isNaN(code) || code <= 0)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Kod faqat raqamlardan iborat bo'lishi kerak!\nMasalan: 12345\n\nIltimos, qaytadan kiriting:", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3: return [4 /*yield*/, this.serialManagementService.handleAddEpisodeCode(ctx, code)];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                        case 5:
                            if (!(session.step === session_interface_1.AddEpisodeStep.VIDEO)) return [3 /*break*/, 13];
                            if (!text.includes('qism yuklash')) return [3 /*break*/, 7];
                            data = session.data;
                            currentEpisodeNumber = data.nextEpisodeNumber;
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCF9 ".concat(currentEpisodeNumber, "-qism videosini yuboring:"), admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 6:
                            _a.sent();
                            return [2 /*return*/];
                        case 7:
                            if (!(text === '✅ Tugatish')) return [3 /*break*/, 9];
                            keyboard = new grammy_1.Keyboard()
                                .text('✅ Ha')
                                .row()
                                .text("❌ Yo'q")
                                .resized();
                            return [4 /*yield*/, ctx.reply('📺 Qismlar tayyorlandi!\n\nField kanalga tashlansinmi?', { reply_markup: keyboard })];
                        case 8:
                            _a.sent();
                            return [2 /*return*/];
                        case 9:
                            if (!(text === '✅ Ha')) return [3 /*break*/, 11];
                            return [4 /*yield*/, this.serialManagementService.finalizeAddingEpisodes(ctx, true)];
                        case 10:
                            _a.sent();
                            return [2 /*return*/];
                        case 11:
                            if (!(text === "❌ Yo'q")) return [3 /*break*/, 13];
                            return [4 /*yield*/, this.serialManagementService.finalizeAddingEpisodes(ctx, false)];
                        case 12:
                            _a.sent();
                            return [2 /*return*/];
                        case 13: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleSerialCreationSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, _a, code, existingSerial, existingMovie, nearestCodes, message_5, nearestCodes, codesList, data, genres, genreString, serialKeyboard, serialKeyboard, rating, language, allFields, message_6, fieldIndex, userFields;
                var _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _f.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            if (!(session.step === 6)) return [3 /*break*/, 7];
                            if (!(text.includes('qism yuklash') || text === '✅ Tugatish')) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.serialManagementService.handleContinueOrFinish(ctx, text)];
                        case 2:
                            _f.sent();
                            return [2 /*return*/];
                        case 3:
                            if (!(text === '✅ Ha, field kanalga tashla')) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.serialManagementService.finalizNewSerial(ctx, true)];
                        case 4:
                            _f.sent();
                            return [2 /*return*/];
                        case 5:
                            if (!(text === "❌ Yo'q, faqat saqlash")) return [3 /*break*/, 7];
                            return [4 /*yield*/, this.serialManagementService.finalizNewSerial(ctx, false)];
                        case 6:
                            _f.sent();
                            return [2 /*return*/];
                        case 7:
                            _a = session.step;
                            switch (_a) {
                                case session_interface_1.SerialCreateStep.CODE: return [3 /*break*/, 8];
                                case session_interface_1.SerialCreateStep.TITLE: return [3 /*break*/, 20];
                                case session_interface_1.SerialCreateStep.GENRE: return [3 /*break*/, 24];
                                case session_interface_1.SerialCreateStep.DESCRIPTION: return [3 /*break*/, 29];
                                case session_interface_1.SerialCreateStep.FIELD: return [3 /*break*/, 45];
                            }
                            return [3 /*break*/, 49];
                        case 8:
                            code = parseInt(text);
                            if (!(isNaN(code) || code <= 0)) return [3 /*break*/, 10];
                            return [4 /*yield*/, ctx.reply("❌ Kod faqat raqamlardan iborat bo'lishi kerak!\nMasalan: 12345\n\nIltimos, qaytadan kiriting:", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 9:
                            _f.sent();
                            return [2 /*return*/];
                        case 10: return [4 /*yield*/, this.serialService.findByCode(code.toString())];
                        case 11:
                            existingSerial = _f.sent();
                            return [4 /*yield*/, this.movieService.findByCode(code.toString())];
                        case 12:
                            existingMovie = _f.sent();
                            if (!existingMovie) return [3 /*break*/, 15];
                            return [4 /*yield*/, this.movieService.findNearestAvailableCodes(code, 5)];
                        case 13:
                            nearestCodes = _f.sent();
                            message_5 = "\u274C ".concat(code, " kodi kino uchun ishlatilgan!\n\n\uD83C\uDFAC ").concat(existingMovie.title, "\n\n");
                            if (nearestCodes.length > 0) {
                                message_5 += "✅ Bo'sh kodlar:\n";
                                nearestCodes.forEach(function (c, i) { return (message_5 += "".concat(i + 1, ". ").concat(c, "\n")); });
                            }
                            message_5 += '\n⚠️ Serial uchun boshqa kod tanlang:';
                            return [4 /*yield*/, ctx.reply(message_5, admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 14:
                            _f.sent();
                            return [2 /*return*/];
                        case 15:
                            if (!existingSerial) return [3 /*break*/, 18];
                            return [4 /*yield*/, this.serialService.findNearestAvailableCodes(code, 5)];
                        case 16:
                            nearestCodes = _f.sent();
                            codesList = nearestCodes.length > 0
                                ? "\n\n\uD83D\uDCCB Eng yaqin bo'sh kodlar:\n".concat(nearestCodes.map(function (c) { return "\u2022 ".concat(c); }).join('\n'))
                                : '';
                            return [4 /*yield*/, ctx.reply("\u274C ".concat(code, " kodi allaqachon ishlatilmoqda!\n\n") +
                                    "\uD83D\uDCFA ".concat(existingSerial.title, "\n") +
                                    "\uD83C\uDFAD Janr: ".concat(existingSerial.genre, "\n") +
                                    "\uD83D\uDCCA Qismlar: ".concat(existingSerial.totalEpisodes) +
                                    codesList +
                                    "\n\n\u26A0\uFE0F Boshqa kod kiriting:", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 17:
                            _f.sent();
                            return [2 /*return*/];
                        case 18:
                            this.sessionService.updateSessionData(ctx.from.id, { code: code });
                            this.sessionService.setStep(ctx.from.id, session_interface_1.SerialCreateStep.TITLE);
                            return [4 /*yield*/, ctx.reply('Serial nomini kiriting:\nMasalan: Game of Thrones', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 19:
                            _f.sent();
                            return [3 /*break*/, 49];
                        case 20:
                            if (!(text === "➕ Yangi qism qo'shish")) return [3 /*break*/, 22];
                            data = session.data;
                            this.sessionService.updateSessionData(ctx.from.id, {
                                isAddingEpisode: true,
                                serialId: data.existingSerial.id,
                                nextEpisode: data.existingSerial.totalEpisodes + 1,
                            });
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCF9 Serial \"".concat(data.existingSerial.title, "\" uchun ").concat(data.existingSerial.totalEpisodes + 1, "-qism videosini yuboring:"), admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 21:
                            _f.sent();
                            return [2 /*return*/];
                        case 22:
                            this.sessionService.updateSessionData(ctx.from.id, { title: text });
                            this.sessionService.setStep(ctx.from.id, session_interface_1.SerialCreateStep.GENRE);
                            // Initialize empty genre selection
                            this.sessionService.updateSessionData(ctx.from.id, {
                                selectedGenres: [],
                            });
                            // Show genre selection UI
                            return [4 /*yield*/, this.showGenreSelection(ctx)];
                        case 23:
                            // Show genre selection UI
                            _f.sent();
                            return [3 /*break*/, 49];
                        case 24:
                            if (!((_b = session.data) === null || _b === void 0 ? void 0 : _b.manualGenreInput)) return [3 /*break*/, 26];
                            genres = this.parseManualGenreInput(text);
                            genreString = this.formatGenresWithHashtags(genres);
                            this.sessionService.updateSessionData(ctx.from.id, {
                                genre: genreString,
                                manualGenreInput: undefined,
                                selectedGenres: undefined,
                            });
                            this.sessionService.setStep(ctx.from.id, session_interface_1.SerialCreateStep.DESCRIPTION);
                            serialKeyboard = new grammy_1.Keyboard()
                                .text('Next')
                                .row()
                                .text('❌ Bekor qilish')
                                .resized();
                            return [4 /*yield*/, ctx.reply("\u2705 Janrlar saqlandi: ".concat(genreString, "\n\n") +
                                    "\uD83D\uDCDD Tavsif kiriting:\n\n\u23ED O'tkazib yuborish uchun 'Next' yozing", { reply_markup: serialKeyboard })];
                        case 25:
                            _f.sent();
                            return [3 /*break*/, 28];
                        case 26:
                            // Fallback: old text-based genre input
                            this.sessionService.updateSessionData(ctx.from.id, { genre: text });
                            this.sessionService.setStep(ctx.from.id, session_interface_1.SerialCreateStep.DESCRIPTION);
                            serialKeyboard = new grammy_1.Keyboard()
                                .text('Next')
                                .row()
                                .text('❌ Bekor qilish')
                                .resized();
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCDD Tavsif kiriting:\n\n\u23ED O'tkazib yuborish uchun 'Next' yozing", { reply_markup: serialKeyboard })];
                        case 27:
                            _f.sent();
                            _f.label = 28;
                        case 28: return [3 /*break*/, 49];
                        case 29:
                            if (!((_c = session.data) === null || _c === void 0 ? void 0 : _c.descriptionInputMode)) return [3 /*break*/, 32];
                            // Manual description text input
                            this.sessionService.updateSessionData(ctx.from.id, {
                                description: text,
                                descriptionInputMode: undefined,
                            });
                            return [4 /*yield*/, ctx.reply('✅ Tavsif saqlandi!', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 30:
                            _f.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 31:
                            _f.sent();
                            return [2 /*return*/];
                        case 32:
                            if (!((_d = session.data) === null || _d === void 0 ? void 0 : _d.ratingInputMode)) return [3 /*break*/, 37];
                            rating = text.trim();
                            if (!!/^\d+(\.\d+)?$/.test(rating)) return [3 /*break*/, 34];
                            return [4 /*yield*/, ctx.reply("❌ Noto'g'ri format!\n\nFaqat raqam kiriting (masalan: 6.5, 8, 9.2)", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 33:
                            _f.sent();
                            return [2 /*return*/];
                        case 34:
                            this.sessionService.updateSessionData(ctx.from.id, {
                                rating: rating,
                                ratingInputMode: undefined,
                            });
                            return [4 /*yield*/, ctx.reply("\u2705 Rating saqlandi: ".concat(rating), admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 35:
                            _f.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 36:
                            _f.sent();
                            return [2 /*return*/];
                        case 37:
                            if (!((_e = session.data) === null || _e === void 0 ? void 0 : _e.languageInputMode)) return [3 /*break*/, 40];
                            language = text.trim();
                            this.sessionService.updateSessionData(ctx.from.id, {
                                language: language,
                                languageInputMode: undefined,
                            });
                            return [4 /*yield*/, ctx.reply("\u2705 Til saqlandi: ".concat(language), admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 38:
                            _f.sent();
                            return [4 /*yield*/, this.showDescriptionPanel(ctx)];
                        case 39:
                            _f.sent();
                            return [2 /*return*/];
                        case 40:
                            // Old flow fallback (shouldn't normally reach here)
                            if (text.toLowerCase() === 'next') {
                                this.sessionService.updateSessionData(ctx.from.id, {
                                    description: null,
                                });
                            }
                            else {
                                this.sessionService.updateSessionData(ctx.from.id, {
                                    description: text,
                                });
                            }
                            this.sessionService.setStep(ctx.from.id, session_interface_1.SerialCreateStep.FIELD);
                            return [4 /*yield*/, this.fieldService.findAll()];
                        case 41:
                            allFields = _f.sent();
                            if (!(allFields.length === 0)) return [3 /*break*/, 43];
                            return [4 /*yield*/, ctx.reply('❌ Hech qanday field topilmadi. Avval field yarating.')];
                        case 42:
                            _f.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [2 /*return*/];
                        case 43:
                            message_6 = '📁 Qaysi fieldni tanlaysiz?\n\n';
                            allFields.forEach(function (field, index) {
                                message_6 += "".concat(index + 1, ". ").concat(field.name, "\n");
                            });
                            message_6 += '\nRaqamini kiriting (masalan: 1)';
                            this.sessionService.updateSessionData(ctx.from.id, {
                                fields: allFields,
                            });
                            return [4 /*yield*/, ctx.reply(message_6, admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 44:
                            _f.sent();
                            return [3 /*break*/, 49];
                        case 45:
                            fieldIndex = parseInt(text) - 1;
                            userFields = session.data.fields;
                            if (!(isNaN(fieldIndex) ||
                                fieldIndex < 0 ||
                                fieldIndex >= userFields.length)) return [3 /*break*/, 47];
                            return [4 /*yield*/, ctx.reply("❌ Noto'g'ri raqam. Iltimos qaytadan kiriting:")];
                        case 46:
                            _f.sent();
                            return [2 /*return*/];
                        case 47:
                            this.sessionService.updateSessionData(ctx.from.id, {
                                selectedField: userFields[fieldIndex],
                                fieldId: userFields[fieldIndex].id,
                            });
                            this.sessionService.setStep(ctx.from.id, session_interface_1.SerialCreateStep.PHOTO);
                            return [4 /*yield*/, ctx.reply('🖼 Serial rasmini (poster) yoki vedio yuboring:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 48:
                            _f.sent();
                            return [3 /*break*/, 49];
                        case 49: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleVideoAttachmentSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, code, movie;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            code = parseInt(text);
                            if (!(isNaN(code) || code <= 0)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Kod faqat raqamlardan iborat bo'lishi kerak!\nMasalan: 12345\n\nIltimos, qaytadan kiriting:", admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3: return [4 /*yield*/, this.movieService.findByCode(code.toString())];
                        case 4:
                            movie = _a.sent();
                            if (!!movie) return [3 /*break*/, 6];
                            return [4 /*yield*/, ctx.reply('❌ Bu kod bilan kino topilmadi!\n\nBoshqa kod kiriting:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                        case 6:
                            if (!movie.videoFileId) return [3 /*break*/, 8];
                            return [4 /*yield*/, ctx.reply("\u274C Bu kinoda allaqachon video bor!\n\n\uD83C\uDFAC ".concat(movie.title, "\n\nBoshqa kod kiriting:"), admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                        case 8:
                            this.sessionService.updateSessionData(ctx.from.id, {
                                movieId: movie.id,
                                movieCode: code,
                                movieTitle: movie.title,
                            });
                            this.sessionService.nextStep(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCF9 \"".concat(movie.title, "\" kinosi uchun video yuboring:"), admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 9:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleBroadcastMessage = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, broadcastType, message, users, premiumUsers, premiumIds_1, successCount, failCount, _i, users_1, user, error_58, error_59;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            broadcastType = session.data.broadcastType;
                            message = ctx.message;
                            return [4 /*yield*/, ctx.reply('📤 Xabar yuborilmoqda... Iltimos kuting.')];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 22, , 24]);
                            users = void 0;
                            if (!(broadcastType === 'PREMIUM')) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.premiumService.getPremiumUsers()];
                        case 4:
                            users = _a.sent();
                            return [3 /*break*/, 10];
                        case 5:
                            if (!(broadcastType === 'FREE')) return [3 /*break*/, 8];
                            return [4 /*yield*/, this.userService.findAll()];
                        case 6:
                            users = _a.sent();
                            return [4 /*yield*/, this.premiumService.getPremiumUsers()];
                        case 7:
                            premiumUsers = _a.sent();
                            premiumIds_1 = premiumUsers.map(function (u) { return u.id; });
                            users = users.filter(function (u) { return !premiumIds_1.includes(u.id); });
                            return [3 /*break*/, 10];
                        case 8: return [4 /*yield*/, this.userService.findAll()];
                        case 9:
                            users = _a.sent();
                            _a.label = 10;
                        case 10:
                            successCount = 0;
                            failCount = 0;
                            _i = 0, users_1 = users;
                            _a.label = 11;
                        case 11:
                            if (!(_i < users_1.length)) return [3 /*break*/, 20];
                            user = users_1[_i];
                            _a.label = 12;
                        case 12:
                            _a.trys.push([12, 18, , 19]);
                            if (!message) return [3 /*break*/, 14];
                            return [4 /*yield*/, ctx.api.copyMessage(user.telegramId, ctx.chat.id, message.message_id, { protect_content: false })];
                        case 13:
                            _a.sent();
                            return [3 /*break*/, 16];
                        case 14: return [4 /*yield*/, ctx.api.sendMessage(user.telegramId, text)];
                        case 15:
                            _a.sent();
                            _a.label = 16;
                        case 16:
                            successCount++;
                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 50); })];
                        case 17:
                            _a.sent();
                            return [3 /*break*/, 19];
                        case 18:
                            error_58 = _a.sent();
                            failCount++;
                            this.logger.error("Failed to send to user ".concat(user.telegramId, ":"), error_58);
                            return [3 /*break*/, 19];
                        case 19:
                            _i++;
                            return [3 /*break*/, 11];
                        case 20:
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("\u2705 Xabar yuborish yakunlandi!\n\n" +
                                    "\uD83D\uDCCA Jami: ".concat(users.length, "\n") +
                                    "\u2705 Yuborildi: ".concat(successCount, "\n") +
                                    "\u274C Xato: ".concat(failCount), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 21:
                            _a.sent();
                            return [3 /*break*/, 24];
                        case 22:
                            error_59 = _a.sent();
                            this.logger.error('Broadcasting error:', error_59);
                            return [4 /*yield*/, ctx.reply('❌ Xabar yuborishda xatolik yuz berdi.', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 23:
                            _a.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 24];
                        case 24: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleApprovePaymentSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, _a, paymentId, userId, amount, durationDays, payment, expiresDate, error_60, error_61;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _b.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            _a = session.data, paymentId = _a.paymentId, userId = _a.userId, amount = _a.amount;
                            if (!(text === '30 kun (1 oy)')) return [3 /*break*/, 2];
                            durationDays = 30;
                            return [3 /*break*/, 7];
                        case 2:
                            if (!(text === '90 kun (3 oy)')) return [3 /*break*/, 3];
                            durationDays = 90;
                            return [3 /*break*/, 7];
                        case 3:
                            if (!(text === '180 kun (6 oy)')) return [3 /*break*/, 4];
                            durationDays = 180;
                            return [3 /*break*/, 7];
                        case 4:
                            if (!(text === '365 kun (1 yil)')) return [3 /*break*/, 5];
                            durationDays = 365;
                            return [3 /*break*/, 7];
                        case 5:
                            durationDays = parseInt(text);
                            if (!(isNaN(durationDays) || durationDays <= 0)) return [3 /*break*/, 7];
                            return [4 /*yield*/, ctx.reply("❌ Noto'g'ri format! Kunlar sonini kiriting (masalan: 30) yoki pastdagi tugmalardan tanlang.")];
                        case 6:
                            _b.sent();
                            return [2 /*return*/];
                        case 7:
                            _b.trys.push([7, 15, , 17]);
                            return [4 /*yield*/, this.paymentService.approve(paymentId, admin.id, durationDays)];
                        case 8:
                            _b.sent();
                            return [4 /*yield*/, this.paymentService.findById(paymentId)];
                        case 9:
                            payment = _b.sent();
                            _b.label = 10;
                        case 10:
                            _b.trys.push([10, 12, , 13]);
                            expiresDate = new Date();
                            expiresDate.setDate(expiresDate.getDate() + durationDays);
                            return [4 /*yield*/, this.grammyBot.bot.api.sendMessage(payment.user.telegramId, "\u2705 **To'lovingiz tasdiqlandi!**\n\n" +
                                    "\uD83D\uDC8E Premium: Faol\n" +
                                    "\u23F1 Muddati: ".concat(durationDays, " kun\n") +
                                    "\uD83D\uDCC5 Tugash sanasi: ".concat(expiresDate.toLocaleDateString('uz-UZ'), "\n\n") +
                                    "\uD83C\uDF89 Endi barcha imkoniyatlardan foydalanishingiz mumkin!", { parse_mode: 'Markdown' })];
                        case 11:
                            _b.sent();
                            return [3 /*break*/, 13];
                        case 12:
                            error_60 = _b.sent();
                            this.logger.error('Error notifying user:', error_60);
                            return [3 /*break*/, 13];
                        case 13:
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("\u2705 To'lov tasdiqlandi!\n\n" +
                                    "\uD83D\uDC64 Foydalanuvchi: ".concat(payment.user.firstName, "\n") +
                                    "\uD83D\uDC8E Premium muddati: ".concat(durationDays, " kun\n") +
                                    "\uD83D\uDCB0 Summa: ".concat(amount.toLocaleString(), " UZS"), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 14:
                            _b.sent();
                            return [3 /*break*/, 17];
                        case 15:
                            error_61 = _b.sent();
                            this.logger.error('Error approving payment:', error_61);
                            return [4 /*yield*/, ctx.reply("❌ To'lovni tasdiqlashda xatolik yuz berdi.", admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 16:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 17];
                        case 17: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleRejectPaymentSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, _a, paymentId, userId, reason, payment, updatedUser, banCount, message, error_62, error_63;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _b.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            _a = session.data, paymentId = _a.paymentId, userId = _a.userId;
                            reason = text;
                            if (!(text === "Noto'g'ri chek")) return [3 /*break*/, 2];
                            reason = "Yuborilgan chek noto'g'ri yoki o'qib bo'lmaydi";
                            return [3 /*break*/, 5];
                        case 2:
                            if (!(text === 'Pul tushmagan')) return [3 /*break*/, 3];
                            reason = "To'lov hali kartaga tushmagan";
                            return [3 /*break*/, 5];
                        case 3:
                            if (!(text === 'Boshqa sabab')) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.reply('📝 Rad etish sababini yozing:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 4:
                            _b.sent();
                            return [2 /*return*/];
                        case 5:
                            _b.trys.push([5, 17, , 19]);
                            return [4 /*yield*/, this.paymentService.reject(paymentId, admin.id, reason)];
                        case 6:
                            _b.sent();
                            return [4 /*yield*/, this.paymentService.findById(paymentId)];
                        case 7:
                            payment = _b.sent();
                            return [4 /*yield*/, this.prisma.user.update({
                                    where: { id: payment.userId },
                                    data: { premiumBanCount: { increment: 1 } },
                                })];
                        case 8:
                            updatedUser = _b.sent();
                            banCount = updatedUser.premiumBanCount;
                            _b.label = 9;
                        case 9:
                            _b.trys.push([9, 14, , 15]);
                            message = '';
                            if (!(banCount === 1)) return [3 /*break*/, 10];
                            message =
                                "\u274C **To'lovingiz rad etildi**\n\n" +
                                    "\uD83D\uDCDD Sabab: ".concat(reason, "\n\n") +
                                    "\u26A0\uFE0F **Ogohlantirish!**\n" +
                                    "Siz to'lov qilishda yolg'on ma'lumotlardan foydalandingiz. Agar bu holat yana takrorlansa, botning bu funksiyasi siz uchun butunlay yopiladi.\n\n" +
                                    "\uD83D\uDEA8 Ogohlantirish: 1/2";
                            return [3 /*break*/, 12];
                        case 10:
                            if (!(banCount >= 2)) return [3 /*break*/, 12];
                            return [4 /*yield*/, this.prisma.user.update({
                                    where: { id: payment.userId },
                                    data: {
                                        isPremiumBanned: true,
                                        premiumBannedAt: new Date(),
                                    },
                                })];
                        case 11:
                            _b.sent();
                            message =
                                "\u274C **To'lovingiz rad etildi**\n\n" +
                                    "\uD83D\uDCDD Sabab: ".concat(reason, "\n\n") +
                                    "\uD83D\uDEAB **Premium'dan foydalanish bloklandi!**\n" +
                                    "Siz botda yolg'on to'lov ma'lumotlarini ishlatganingiz uchun Premium'dan endi foydalana olmaysiz.\n\n" +
                                    "\u2139\uFE0F Blokni faqat admin ochishi mumkin.";
                            _b.label = 12;
                        case 12: return [4 /*yield*/, this.grammyBot.bot.api.sendMessage(payment.user.telegramId, message, { parse_mode: 'Markdown' })];
                        case 13:
                            _b.sent();
                            return [3 /*break*/, 15];
                        case 14:
                            error_62 = _b.sent();
                            this.logger.error('Error notifying user:', error_62);
                            return [3 /*break*/, 15];
                        case 15:
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("\u274C To'lov rad etildi!\n\n" +
                                    "\uD83D\uDC64 Foydalanuvchi: ".concat(payment.user.firstName, "\n") +
                                    "\uD83D\uDCDD Sabab: ".concat(reason, "\n") +
                                    "\u26A0\uFE0F Ogohlantirish: ".concat(banCount, "/2") +
                                    (banCount >= 2 ? '\n\n🚫 Foydalanuvchi premiumdan bloklandi!' : ''), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 16:
                            _b.sent();
                            return [3 /*break*/, 19];
                        case 17:
                            error_63 = _b.sent();
                            this.logger.error('Error rejecting payment:', error_63);
                            return [4 /*yield*/, ctx.reply("❌ To'lovni rad etishda xatolik yuz berdi.", admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu(admin.role))];
                        case 18:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 19];
                        case 19: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startPremiereBroadcast = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, adminError_1, error_64, replyError_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 10, , 15]);
                            if (!ctx.callbackQuery) return [3 /*break*/, 2];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            admin = void 0;
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 4:
                            admin = _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            adminError_1 = _a.sent();
                            this.logger.error('Error fetching admin:', adminError_1);
                            console.error('ADMIN ERROR:', adminError_1);
                            if (adminError_1 instanceof Error) {
                                this.logger.error('Error message:', adminError_1.message);
                                this.logger.error('Error stack:', adminError_1.stack);
                            }
                            throw adminError_1;
                        case 6:
                            if (!!admin) return [3 /*break*/, 8];
                            return [4 /*yield*/, ctx.reply('⛔️ Admin topilmadi.')];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                        case 8:
                            this.sessionService.startSession(ctx.from.id, session_interface_1.AdminState.BROADCAST_PREMIERE);
                            this.sessionService.updateSessionData(ctx.from.id, {});
                            return [4 /*yield*/, ctx.reply('🎬 Kino yoki serial kodini kiriting:\n\nMasalan: 2, 57, 100', {
                                    reply_markup: {
                                        keyboard: [[{ text: '❌ Bekor qilish' }]],
                                        resize_keyboard: true,
                                    },
                                })];
                        case 9:
                            _a.sent();
                            return [3 /*break*/, 15];
                        case 10:
                            error_64 = _a.sent();
                            this.logger.error('Error starting premiere broadcast:', error_64);
                            console.error('PREMIERE ERROR:', error_64);
                            if (error_64 instanceof Error) {
                                this.logger.error('Error message:', error_64.message);
                                this.logger.error('Error name:', error_64.name);
                                this.logger.error('Error stack:', error_64.stack);
                            }
                            else {
                                this.logger.error('Non-Error object thrown:', typeof error_64, error_64);
                            }
                            _a.label = 11;
                        case 11:
                            _a.trys.push([11, 13, , 14]);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 12:
                            _a.sent();
                            return [3 /*break*/, 14];
                        case 13:
                            replyError_3 = _a.sent();
                            this.logger.error('Could not send error reply:', replyError_3);
                            return [3 /*break*/, 14];
                        case 14: return [3 /*break*/, 15];
                        case 15: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handlePremiereBroadcastSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, code, codeNumber, content, contentType, field, episodesCount, botInfo, botUsername, keyboard, channelLink, caption, messageText, posterType, error_65;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 25, , 27]);
                            if (!(text === '❌ Bekor qilish')) return [3 /*break*/, 3];
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 1:
                            admin = _a.sent();
                            return [4 /*yield*/, ctx.reply('❌ Bekor qilindi', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'))];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            code = text.trim();
                            if (!(!code || isNaN(Number(code)))) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.reply("❌ Noto'g'ri format! Faqat raqam kiriting:\n\nMasalan: 2, 57, 100")];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                        case 5:
                            codeNumber = parseInt(code);
                            content = void 0;
                            contentType = void 0;
                            return [4 /*yield*/, this.movieService.findByCode(code)];
                        case 6:
                            content = _a.sent();
                            if (!content) return [3 /*break*/, 7];
                            contentType = 'movie';
                            return [3 /*break*/, 9];
                        case 7: return [4 /*yield*/, this.serialService.findByCode(code)];
                        case 8:
                            content = _a.sent();
                            if (content) {
                                contentType = 'serial';
                            }
                            _a.label = 9;
                        case 9:
                            if (!!content) return [3 /*break*/, 11];
                            return [4 /*yield*/, ctx.reply('❌ Kontent topilmadi!\n\nQayta kiriting yoki ❌ Bekor qilish tugmasini bosing:')];
                        case 10:
                            _a.sent();
                            return [2 /*return*/];
                        case 11: return [4 /*yield*/, this.fieldService.findOne(content.fieldId)];
                        case 12:
                            field = _a.sent();
                            episodesCount = content.totalEpisodes || 0;
                            if (!(contentType === 'serial' && episodesCount === 0)) return [3 /*break*/, 14];
                            return [4 /*yield*/, this.prisma.episode.count({
                                    where: { serialId: content.id }
                                })];
                        case 13:
                            episodesCount = _a.sent();
                            return [3 /*break*/, 16];
                        case 14:
                            if (!(contentType === 'movie' && episodesCount === 0)) return [3 /*break*/, 16];
                            return [4 /*yield*/, this.prisma.movieEpisode.count({
                                    where: { movieId: content.id }
                                })];
                        case 15:
                            episodesCount = _a.sent();
                            _a.label = 16;
                        case 16: return [4 /*yield*/, ctx.api.getMe()];
                        case 17:
                            botInfo = _a.sent();
                            botUsername = botInfo.username || 'bot';
                            keyboard = new grammy_1.InlineKeyboard()
                                .text('📢 Ha, field kanalga yuborish', "send_to_field_".concat(contentType, "_").concat(codeNumber))
                                .row()
                                .text('👥 Faqat foydalanuvchilarga', "broadcast_premiere_".concat(contentType, "_").concat(codeNumber))
                                .row()
                                .text('❌ Bekor qilish', 'cancel_premiere');
                            channelLink = (field === null || field === void 0 ? void 0 : field.channelLink) || '';
                            if (!channelLink && (field === null || field === void 0 ? void 0 : field.name)) {
                                channelLink = "@".concat(field.name);
                            }
                            else if (!channelLink) {
                                channelLink = '@Kanal';
                            }
                            caption = '╭────────────────────\n' +
                                "\u251C\u2023  ".concat(contentType === 'serial' ? 'Serial' : 'Kino', " nomi : ").concat(content.title, "\n") +
                                "\u251C\u2023  ".concat(contentType === 'serial' ? 'Serial' : 'Kino', " kodi: ").concat(contentType === 'serial' ? '' : '').concat(content.code, "\n") +
                                "\u251C\u2023  Qism: ".concat(episodesCount, "\n") +
                                "\u251C\u2023  Janrlari: ".concat(content.genre || "Noma'lum", "\n") +
                                "\u251C\u2023  Kanal: ".concat(channelLink, "\n") +
                                '╰────────────────────\n' +
                                "\u25B6\uFE0F ".concat(contentType === 'serial' ? 'Serialning' : 'Kinoning', " to'liq qismini @").concat(botUsername, " dan tomosha qilishingiz mumkin!");
                            messageText = "🎬 Premyera e'loni\n\n" + caption + '\n\n📢 Bu kontentni qayerga yubormoqchisiz?';
                            posterType = 'photo';
                            if (content.posterFileId) {
                                // Video file IDs start with 'BAAC', photo file IDs start with 'AgAC'
                                posterType = content.posterFileId.startsWith('BAAC') ? 'video' : 'photo';
                            }
                            if (!content.posterFileId) return [3 /*break*/, 22];
                            if (!(posterType === 'video')) return [3 /*break*/, 19];
                            return [4 /*yield*/, ctx.replyWithVideo(content.posterFileId, {
                                    caption: messageText,
                                    reply_markup: keyboard,
                                })];
                        case 18:
                            _a.sent();
                            return [3 /*break*/, 21];
                        case 19: return [4 /*yield*/, ctx.replyWithPhoto(content.posterFileId, {
                                caption: messageText,
                                reply_markup: keyboard,
                            })];
                        case 20:
                            _a.sent();
                            _a.label = 21;
                        case 21: return [3 /*break*/, 24];
                        case 22: return [4 /*yield*/, ctx.reply(messageText, {
                                reply_markup: keyboard,
                            })];
                        case 23:
                            _a.sent();
                            _a.label = 24;
                        case 24:
                            this.sessionService.updateSession(ctx.from.id, {
                                state: session_interface_1.AdminState.BROADCAST_PREMIERE,
                                data: {
                                    contentType: contentType,
                                    code: codeNumber,
                                    caption: caption,
                                    poster: content.posterFileId,
                                    posterType: posterType,
                                    fieldId: content.fieldId,
                                    title: content.title,
                                    genre: content.genre,
                                    fieldChannelId: field === null || field === void 0 ? void 0 : field.channelId,
                                    fieldChannelLink: channelLink,
                                    databaseChannelId: field === null || field === void 0 ? void 0 : field.databaseChannelId,
                                },
                            });
                            return [3 /*break*/, 27];
                        case 25:
                            error_65 = _a.sent();
                            this.logger.error('❌ Error handling premiere broadcast steps');
                            if (error_65) {
                                this.logger.error("Error message: ".concat((error_65 === null || error_65 === void 0 ? void 0 : error_65.message) || 'N/A'));
                                this.logger.error("Error name: ".concat((error_65 === null || error_65 === void 0 ? void 0 : error_65.name) || 'N/A'));
                                if (error_65 === null || error_65 === void 0 ? void 0 : error_65.stack) {
                                    this.logger.error("Error stack: ".concat(error_65.stack));
                                }
                                if (error_65 === null || error_65 === void 0 ? void 0 : error_65.response) {
                                    this.logger.error("API Response: ".concat(JSON.stringify(error_65.response)));
                                }
                                this.logger.error("Full error: ".concat(JSON.stringify(error_65, Object.getOwnPropertyNames(error_65))));
                            }
                            else {
                                this.logger.error('Error object is undefined or null');
                            }
                            return [4 /*yield*/, ctx.reply("❌ Xatolik yuz berdi. Qaytadan urinib ko'ring.").catch(function () { })];
                        case 26:
                            _a.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 27];
                        case 27: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.confirmPremiereBroadcast = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, _a, caption, poster, contentType, code, users, botInfo, botUsername, successCount, failCount, statusMsg, _i, users_2, user, deepLink, keyboard, error_66, admin, error_67;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 23, , 25]);
                            return [4 /*yield*/, ctx.answerCallbackQuery('📤 Yuborilmoqda...')];
                        case 1:
                            _b.sent();
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!(!session || !session.data)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Ma'lumot topilmadi. Qaytadan urinib ko'ring.")];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3:
                            _a = session.data, caption = _a.caption, poster = _a.poster, contentType = _a.contentType, code = _a.code;
                            return [4 /*yield*/, this.prisma.user.findMany({
                                    where: { isBlocked: false },
                                })];
                        case 4:
                            users = _b.sent();
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 5:
                            botInfo = _b.sent();
                            botUsername = botInfo.username || 'bot';
                            successCount = 0;
                            failCount = 0;
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 6:
                            _b.sent();
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCE4 Yuborish boshlandi...\n\n\uD83D\uDC65 Jami: ".concat(users.length, "\n\u2705 Yuborildi: 0\n\u274C Xatolik: 0"))];
                        case 7:
                            statusMsg = _b.sent();
                            _i = 0, users_2 = users;
                            _b.label = 8;
                        case 8:
                            if (!(_i < users_2.length)) return [3 /*break*/, 19];
                            user = users_2[_i];
                            _b.label = 9;
                        case 9:
                            _b.trys.push([9, 17, , 18]);
                            deepLink = "https://t.me/".concat(botUsername, "?start=").concat(contentType, "_").concat(code);
                            keyboard = {
                                inline_keyboard: [[{ text: '▶️ Tomosha qilish', url: deepLink }]],
                            };
                            if (!poster) return [3 /*break*/, 11];
                            return [4 /*yield*/, ctx.api.sendPhoto(user.telegramId, poster, {
                                    caption: caption,
                                    reply_markup: keyboard,
                                })];
                        case 10:
                            _b.sent();
                            return [3 /*break*/, 13];
                        case 11: return [4 /*yield*/, ctx.api.sendMessage(user.telegramId, caption, {
                                reply_markup: keyboard,
                            })];
                        case 12:
                            _b.sent();
                            _b.label = 13;
                        case 13:
                            successCount++;
                            if (!(successCount % 10 === 0)) return [3 /*break*/, 15];
                            return [4 /*yield*/, ctx.api.editMessageText(ctx.chat.id, statusMsg.message_id, "\uD83D\uDCE4 Yuborilmoqda...\n\n\uD83D\uDC65 Jami: ".concat(users.length, "\n\u2705 Yuborildi: ").concat(successCount, "\n\u274C Xatolik: ").concat(failCount))];
                        case 14:
                            _b.sent();
                            _b.label = 15;
                        case 15: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 35); })];
                        case 16:
                            _b.sent();
                            return [3 /*break*/, 18];
                        case 17:
                            error_66 = _b.sent();
                            failCount++;
                            this.logger.error("Error sending to user ".concat(user.telegramId, ":"), error_66);
                            return [3 /*break*/, 18];
                        case 18:
                            _i++;
                            return [3 /*break*/, 8];
                        case 19: return [4 /*yield*/, ctx.api.editMessageText(ctx.chat.id, statusMsg.message_id, "\u2705 Yuborish tugadi!\n\n\uD83D\uDC65 Jami: ".concat(users.length, "\n\u2705 Yuborildi: ").concat(successCount, "\n\u274C Xatolik: ").concat(failCount))];
                        case 20:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 21:
                            admin = _b.sent();
                            return [4 /*yield*/, ctx.reply("✅ Premyera e'loni yuborildi!", admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'))];
                        case 22:
                            _b.sent();
                            return [3 /*break*/, 25];
                        case 23:
                            error_67 = _b.sent();
                            this.logger.error('Error confirming premiere broadcast:', error_67);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 24:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 25];
                        case 25: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startTelegramPremiumBroadcast = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, adminError_2, premiumUserCount, dbError_1, error_68, replyError_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 14, , 19]);
                            if (!ctx.callbackQuery) return [3 /*break*/, 2];
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            admin = void 0;
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 4:
                            admin = _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            adminError_2 = _a.sent();
                            this.logger.error('Error fetching admin:', adminError_2);
                            console.error('ADMIN ERROR (Telegram Premium):', adminError_2);
                            if (adminError_2 instanceof Error) {
                                this.logger.error('Error message:', adminError_2.message);
                                this.logger.error('Error stack:', adminError_2.stack);
                            }
                            throw adminError_2;
                        case 6:
                            if (!!admin) return [3 /*break*/, 8];
                            return [4 /*yield*/, ctx.reply('⛔️ Admin topilmadi.')];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                        case 8:
                            premiumUserCount = 0;
                            _a.label = 9;
                        case 9:
                            _a.trys.push([9, 11, , 12]);
                            return [4 /*yield*/, this.prisma.user.count({
                                    where: {
                                        hasTelegramPremium: true,
                                        isBlocked: false,
                                    },
                                })];
                        case 10:
                            premiumUserCount = _a.sent();
                            return [3 /*break*/, 12];
                        case 11:
                            dbError_1 = _a.sent();
                            this.logger.error('Database error counting premium users:', dbError_1);
                            return [3 /*break*/, 12];
                        case 12:
                            this.sessionService.startSession(ctx.from.id, session_interface_1.AdminState.BROADCAST_TELEGRAM_PREMIUM);
                            this.sessionService.updateSessionData(ctx.from.id, {});
                            return [4 /*yield*/, ctx.reply("\u2B50\uFE0F Telegram Premium foydalanuvchilarga xabar yuborish\n\n" +
                                    "\uD83D\uDC65 Telegram Premium foydalanuvchilar soni: ".concat(premiumUserCount, "\n\n") +
                                    "\uD83D\uDCDD Yubormoqchi bo'lgan xabaringizni kiriting:", {
                                    reply_markup: {
                                        keyboard: [[{ text: '❌ Bekor qilish' }]],
                                        resize_keyboard: true,
                                    },
                                })];
                        case 13:
                            _a.sent();
                            return [3 /*break*/, 19];
                        case 14:
                            error_68 = _a.sent();
                            this.logger.error('Error starting Telegram Premium broadcast:', error_68);
                            console.error('TELEGRAM PREMIUM ERROR:', error_68);
                            if (error_68 instanceof Error) {
                                this.logger.error('Error message:', error_68.message);
                                this.logger.error('Error name:', error_68.name);
                                this.logger.error('Error stack:', error_68.stack);
                            }
                            else {
                                this.logger.error('Non-Error object thrown:', typeof error_68, error_68);
                            }
                            _a.label = 15;
                        case 15:
                            _a.trys.push([15, 17, , 18]);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 16:
                            _a.sent();
                            return [3 /*break*/, 18];
                        case 17:
                            replyError_4 = _a.sent();
                            this.logger.error('Could not send error reply:', replyError_4);
                            return [3 /*break*/, 18];
                        case 18: return [3 /*break*/, 19];
                        case 19: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleTelegramPremiumBroadcastSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, message, telegramPremiumUsers, error_69;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 8]);
                            if (!(text === '❌ Bekor qilish')) return [3 /*break*/, 3];
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 1:
                            admin = _a.sent();
                            return [4 /*yield*/, ctx.reply('❌ Bekor qilindi', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'))];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            message = text;
                            return [4 /*yield*/, this.prisma.user.findMany({
                                    where: {
                                        hasTelegramPremium: true,
                                        isBlocked: false,
                                    },
                                })];
                        case 4:
                            telegramPremiumUsers = _a.sent();
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCE4 Quyidagi xabar barcha Telegram Premium foydalanuvchilarga yuboriladi:\n\n" +
                                    "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n".concat(message, "\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n") +
                                    "\uD83D\uDC65 Qabul qiluvchilar: ".concat(telegramPremiumUsers.length, " ta\n\n") +
                                    "Tasdiqlaysizmi?", {
                                    reply_markup: {
                                        inline_keyboard: [
                                            [
                                                {
                                                    text: '✅ Tasdiqlash',
                                                    callback_data: 'confirm_telegram_premium_broadcast',
                                                },
                                                {
                                                    text: '❌ Bekor qilish',
                                                    callback_data: 'cancel_telegram_premium_broadcast',
                                                },
                                            ],
                                        ],
                                    },
                                })];
                        case 5:
                            _a.sent();
                            this.sessionService.updateSession(ctx.from.id, {
                                state: session_interface_1.AdminState.BROADCAST_TELEGRAM_PREMIUM,
                                data: {
                                    message: message,
                                    userCount: telegramPremiumUsers.length,
                                },
                            });
                            return [3 /*break*/, 8];
                        case 6:
                            error_69 = _a.sent();
                            this.logger.error('Error handling Telegram Premium broadcast steps:', error_69);
                            return [4 /*yield*/, ctx.reply("❌ Xatolik yuz berdi. Qaytadan urinib ko'ring.")];
                        case 7:
                            _a.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 8];
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.confirmTelegramPremiumBroadcast = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, message, telegramPremiumUsers, successCount, failCount, statusMsg, _i, telegramPremiumUsers_1, user, error_70, admin, error_71;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 19, , 21]);
                            return [4 /*yield*/, ctx.answerCallbackQuery('📤 Yuborilmoqda...')];
                        case 1:
                            _a.sent();
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!(!session || !session.data)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Ma'lumot topilmadi. Qaytadan urinib ko'ring.")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            message = session.data.message;
                            return [4 /*yield*/, this.prisma.user.findMany({
                                    where: {
                                        hasTelegramPremium: true,
                                        isBlocked: false,
                                    },
                                })];
                        case 4:
                            telegramPremiumUsers = _a.sent();
                            successCount = 0;
                            failCount = 0;
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCE4 Yuborish boshlandi...\n\n\uD83D\uDC65 Jami: ".concat(telegramPremiumUsers.length, "\n\u2705 Yuborildi: 0\n\u274C Xatolik: 0"))];
                        case 6:
                            statusMsg = _a.sent();
                            _i = 0, telegramPremiumUsers_1 = telegramPremiumUsers;
                            _a.label = 7;
                        case 7:
                            if (!(_i < telegramPremiumUsers_1.length)) return [3 /*break*/, 15];
                            user = telegramPremiumUsers_1[_i];
                            _a.label = 8;
                        case 8:
                            _a.trys.push([8, 13, , 14]);
                            return [4 /*yield*/, ctx.api.sendMessage(user.telegramId, message, {
                                    parse_mode: 'HTML',
                                })];
                        case 9:
                            _a.sent();
                            successCount++;
                            if (!(successCount % 10 === 0)) return [3 /*break*/, 11];
                            return [4 /*yield*/, ctx.api.editMessageText(ctx.chat.id, statusMsg.message_id, "\uD83D\uDCE4 Yuborilmoqda...\n\n\uD83D\uDC65 Jami: ".concat(telegramPremiumUsers.length, "\n\u2705 Yuborildi: ").concat(successCount, "\n\u274C Xatolik: ").concat(failCount))];
                        case 10:
                            _a.sent();
                            _a.label = 11;
                        case 11: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 35); })];
                        case 12:
                            _a.sent();
                            return [3 /*break*/, 14];
                        case 13:
                            error_70 = _a.sent();
                            failCount++;
                            this.logger.error("Error sending to user ".concat(user.telegramId, ":"), error_70);
                            return [3 /*break*/, 14];
                        case 14:
                            _i++;
                            return [3 /*break*/, 7];
                        case 15: return [4 /*yield*/, ctx.api.editMessageText(ctx.chat.id, statusMsg.message_id, "\u2705 Yuborish tugadi!\n\n\uD83D\uDC65 Jami: ".concat(telegramPremiumUsers.length, "\n\u2705 Yuborildi: ").concat(successCount, "\n\u274C Xatolik: ").concat(failCount))];
                        case 16:
                            _a.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 17:
                            admin = _a.sent();
                            return [4 /*yield*/, ctx.reply('✅ Xabar Telegram Premium foydalanuvchilarga yuborildi!', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'))];
                        case 18:
                            _a.sent();
                            return [3 /*break*/, 21];
                        case 19:
                            error_71 = _a.sent();
                            this.logger.error('Error confirming Telegram Premium broadcast:', error_71);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 20:
                            _a.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 21];
                        case 21: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showAllUsers = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, users_3, dbError_2, message_7, err_1, errString, replyErr_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Multiple logging methods for debugging
                            console.log('===== showAllUsers FUNCTION CALLED =====');
                            this.logger.log('===== showAllUsers FUNCTION CALLED =====');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 13, , 18]);
                            // Step 1: Get admin
                            console.log('STEP 1: Getting admin...');
                            this.logger.log('STEP 1: Getting admin...');
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 2:
                            admin = _a.sent();
                            if (!!admin) return [3 /*break*/, 4];
                            console.log('STEP 1 FAILED: No admin found');
                            this.logger.warn('STEP 1 FAILED: No admin found');
                            return [4 /*yield*/, ctx.reply('❌ Siz admin emassiz!')];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4:
                            console.log("STEP 1 SUCCESS: Admin found - ".concat(admin.telegramId));
                            this.logger.log("STEP 1 SUCCESS: Admin found - ".concat(admin.telegramId));
                            // Step 2: Fetch users from database
                            console.log('STEP 2: Fetching users from database...');
                            this.logger.log('STEP 2: Fetching users from database...');
                            _a.label = 5;
                        case 5:
                            _a.trys.push([5, 7, , 8]);
                            return [4 /*yield*/, this.prisma.user.findMany({
                                    take: 50,
                                    orderBy: [{ createdAt: 'desc' }],
                                })];
                        case 6:
                            users_3 = _a.sent();
                            console.log("STEP 2 SUCCESS: Found ".concat(users_3.length, " users"));
                            this.logger.log("STEP 2 SUCCESS: Found ".concat(users_3.length, " users"));
                            return [3 /*break*/, 8];
                        case 7:
                            dbError_2 = _a.sent();
                            console.log('STEP 2 FAILED: Database error');
                            console.log('DB_ERROR:', dbError_2);
                            this.logger.error('STEP 2 FAILED: Database error');
                            this.logger.error("DB_ERROR: ".concat((dbError_2 === null || dbError_2 === void 0 ? void 0 : dbError_2.message) || 'Unknown'));
                            throw dbError_2;
                        case 8:
                            if (!(users_3.length === 0)) return [3 /*break*/, 10];
                            console.log('No users found in database');
                            return [4 /*yield*/, ctx.reply('❌ Foydalanuvchilar topilmadi.')];
                        case 9:
                            _a.sent();
                            return [2 /*return*/];
                        case 10:
                            // Step 3: Send users to Telegram
                            console.log('STEP 3: Sending users to Telegram...');
                            this.logger.log('STEP 3: Sending users to Telegram...');
                            message_7 = "\uD83D\uDC65 BARCHA FOYDALANUVCHILAR (".concat(users_3.length, " ta):\n\n");
                            users_3.forEach(function (user, index) {
                                var num = index + 1;
                                var status = user.isBlocked ? '🚫' : user.isPremium ? '💎' : '👤';
                                var username = user.username ? "@".concat(user.username) : 'Username yoq';
                                var name = user.firstName || 'Ism yoq';
                                message_7 += "".concat(num, ". ").concat(status, " ").concat(name, " (").concat(username, ")\n");
                                message_7 += "   ID: ".concat(user.telegramId, "\n");
                                if (user.hasTelegramPremium) {
                                    message_7 += "   \u2B50\uFE0F Telegram Premium\n";
                                }
                                message_7 += "\n";
                                // Send in chunks of 20 to avoid message length limit
                                if (num % 20 === 0 && num < users_3.length) {
                                    ctx.reply(message_7).catch(function (e) {
                                        console.log("Failed to send chunk: ".concat(e.message));
                                    });
                                    message_7 = "\uD83D\uDC65 DAVOMI (".concat(num + 1, "-").concat(Math.min(num + 20, users_3.length), "):\n\n");
                                }
                            });
                            if (!(message_7.length > 50)) return [3 /*break*/, 12];
                            console.log('Sending final chunk...');
                            return [4 /*yield*/, ctx.reply(message_7)];
                        case 11:
                            _a.sent();
                            _a.label = 12;
                        case 12: return [3 /*break*/, 18];
                        case 13:
                            err_1 = _a.sent();
                            // Maximum error logging with all possible methods
                            console.log('!!!!! ERROR IN showAllUsers !!!!!');
                            console.log('Error object:', err_1);
                            console.log('Error type:', typeof err_1);
                            console.log('Error message:', err_1 === null || err_1 === void 0 ? void 0 : err_1.message);
                            console.log('Error name:', err_1 === null || err_1 === void 0 ? void 0 : err_1.name);
                            console.log('Error stack:', err_1 === null || err_1 === void 0 ? void 0 : err_1.stack);
                            this.logger.error('!!!!! ERROR IN showAllUsers !!!!!');
                            this.logger.error('Error type: ' + typeof err_1);
                            this.logger.error('Error message: ' + ((err_1 === null || err_1 === void 0 ? void 0 : err_1.message) || 'NO MESSAGE'));
                            this.logger.error('Error name: ' + ((err_1 === null || err_1 === void 0 ? void 0 : err_1.name) || 'NO NAME'));
                            if (err_1 === null || err_1 === void 0 ? void 0 : err_1.stack) {
                                this.logger.error('Stack trace:');
                                this.logger.error(String(err_1.stack));
                            }
                            try {
                                errString = JSON.stringify(err_1, Object.getOwnPropertyNames(err_1));
                                console.log('Error JSON:', errString);
                                this.logger.error('Error JSON: ' + errString);
                            }
                            catch (jsonErr) {
                                console.log('Cannot stringify error');
                                this.logger.error('Cannot stringify error');
                            }
                            _a.label = 14;
                        case 14:
                            _a.trys.push([14, 16, , 17]);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.')];
                        case 15:
                            _a.sent();
                            return [3 /*break*/, 17];
                        case 16:
                            replyErr_1 = _a.sent();
                            console.log('Failed to send error reply:', replyErr_1);
                            this.logger.error('Failed to send error reply: ' + (replyErr_1 === null || replyErr_1 === void 0 ? void 0 : replyErr_1.message));
                            return [3 /*break*/, 17];
                        case 17: return [3 /*break*/, 18];
                        case 18: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startBlockUser = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, error_72;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 5]);
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            this.sessionService.startSession(ctx.from.id, session_interface_1.AdminState.BLOCK_USER);
                            this.sessionService.updateSessionData(ctx.from.id, {});
                            return [4 /*yield*/, ctx.reply('🚫 **Foydalanuvchini bloklash**\n\n' +
                                    'Bloklash uchun foydalanuvchining username yoki Telegram ID raqamini kiriting:\n\n' +
                                    '📝 Username: @username yoki username\n' +
                                    '🆔 Telegram ID: 123456789\n\n' +
                                    'Ikkalasidan birini kiriting.', {
                                    parse_mode: 'Markdown',
                                    reply_markup: {
                                        keyboard: [[{ text: '❌ Bekor qilish' }]],
                                        resize_keyboard: true,
                                    },
                                })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            error_72 = _a.sent();
                            this.logger.error('Error starting block user:', error_72);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleBlockUserSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, isNumeric, user, telegramId, username, error_73;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 13, , 15]);
                            if (!(text === '❌ Bekor qilish')) return [3 /*break*/, 3];
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 1:
                            admin = _b.sent();
                            return [4 /*yield*/, ctx.reply('❌ Bekor qilindi', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'))];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3:
                            isNumeric = /^\d+$/.test(text.trim());
                            user = void 0;
                            if (!isNumeric) return [3 /*break*/, 5];
                            telegramId = text.trim();
                            return [4 /*yield*/, this.prisma.user.findFirst({
                                    where: { telegramId: telegramId },
                                })];
                        case 4:
                            user = _b.sent();
                            return [3 /*break*/, 7];
                        case 5:
                            username = text.startsWith('@') ? text.substring(1) : text;
                            return [4 /*yield*/, this.prisma.user.findFirst({
                                    where: { username: username },
                                })];
                        case 6:
                            user = _b.sent();
                            _b.label = 7;
                        case 7:
                            if (!!user) return [3 /*break*/, 9];
                            return [4 /*yield*/, ctx.reply('❌ Foydalanuvchi topilmadi!\n\n' +
                                    "Iltimos, to'g'ri username yoki Telegram ID kiriting:")];
                        case 8:
                            _b.sent();
                            return [2 /*return*/];
                        case 9:
                            if (!user.isBlocked) return [3 /*break*/, 11];
                            return [4 /*yield*/, ctx.reply("\u26A0\uFE0F Bu foydalanuvchi allaqachon bloklangan!\n\n" +
                                    "\uD83D\uDC64 Ism: ".concat(user.firstName || "Noma'lum", "\n") +
                                    "\uD83D\uDCDD Username: @".concat(user.username, "\n") +
                                    "\uD83D\uDEAB Bloklangan sana: ".concat(((_a = user.blockedAt) === null || _a === void 0 ? void 0 : _a.toLocaleString('uz-UZ')) || "Noma'lum"))];
                        case 10:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [2 /*return*/];
                        case 11: return [4 /*yield*/, ctx.reply("\u26A0\uFE0F **Tasdiqlash**\n\n" +
                                "Haqiqatdan ham quyidagi foydalanuvchini bloklaysizmi?\n\n" +
                                "\uD83D\uDC64 Ism: ".concat(user.firstName || "Noma'lum", "\n") +
                                "\uD83D\uDCDD Username: @".concat(user.username, "\n") +
                                "\uD83C\uDD94 Telegram ID: `".concat(user.telegramId, "`\n") +
                                "\uD83D\uDCC5 Ro'yxatdan o'tgan: ".concat(user.createdAt.toLocaleString('uz-UZ'), "\n\n") +
                                "Bu foydalanuvchi botdan qaytib foydalana olmaydi!", {
                                parse_mode: 'Markdown',
                                reply_markup: {
                                    inline_keyboard: [
                                        [
                                            {
                                                text: '✅ Ha, bloklash',
                                                callback_data: "confirm_block_user_".concat(user.id),
                                            },
                                            {
                                                text: "❌ Yo'q",
                                                callback_data: 'cancel_block_user',
                                            },
                                        ],
                                    ],
                                },
                            })];
                        case 12:
                            _b.sent();
                            this.sessionService.updateSession(ctx.from.id, {
                                state: session_interface_1.AdminState.BLOCK_USER,
                                data: { userId: user.id, username: user.username },
                            });
                            return [3 /*break*/, 15];
                        case 13:
                            error_73 = _b.sent();
                            this.logger.error('Error handling block user steps:', error_73);
                            return [4 /*yield*/, ctx.reply("❌ Xatolik yuz berdi. Qaytadan urinib ko'ring.")];
                        case 14:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 15];
                        case 15: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.confirmBlockUser = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, _a, userId, username, user, admin, error_74;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 8, , 10]);
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _b.sent();
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!(!session || !session.data || !session.data.userId)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Ma'lumot topilmadi. Qaytadan urinib ko'ring.")];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3:
                            _a = session.data, userId = _a.userId, username = _a.username;
                            return [4 /*yield*/, this.prisma.user.update({
                                    where: { id: userId },
                                    data: {
                                        isBlocked: true,
                                        blockedAt: new Date(),
                                        blockReason: "Admin tomonidan bloklangan: ".concat(ctx.from.username || ctx.from.id),
                                    },
                                })];
                        case 4:
                            user = _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 5:
                            _b.sent();
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 6:
                            admin = _b.sent();
                            return [4 /*yield*/, ctx.reply("\u2705 Foydalanuvchi bloklandi!\n\n" +
                                    "\uD83D\uDC64 Ism: ".concat(user.firstName || "Noma'lum", "\n") +
                                    "\uD83D\uDCDD Username: @".concat(username, "\n") +
                                    "\uD83D\uDEAB Bloklangan sana: ".concat(new Date().toLocaleString('uz-UZ')), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'))];
                        case 7:
                            _b.sent();
                            return [3 /*break*/, 10];
                        case 8:
                            error_74 = _b.sent();
                            this.logger.error('Error confirming block user:', error_74);
                            this.logger.error('Error details:', {
                                message: error_74 === null || error_74 === void 0 ? void 0 : error_74.message,
                                stack: error_74 === null || error_74 === void 0 ? void 0 : error_74.stack,
                                code: error_74 === null || error_74 === void 0 ? void 0 : error_74.code,
                            });
                            return [4 /*yield*/, ctx.reply("❌ Xatolik yuz berdi. Admin bilan bog'laning.")];
                        case 9:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startUnblockUser = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, error_75;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 5]);
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            this.sessionService.startSession(ctx.from.id, session_interface_1.AdminState.UNBLOCK_USER);
                            this.sessionService.updateSessionData(ctx.from.id, {});
                            return [4 /*yield*/, ctx.reply('✅ **Foydalanuvchini blokdan ochish**\n\n' +
                                    'Blokdan ochish uchun foydalanuvchining username yoki Telegram ID raqamini kiriting:\n\n' +
                                    '📝 Username: @username yoki username\n' +
                                    '🆔 Telegram ID: 123456789\n\n' +
                                    'Ikkalasidan birini kiriting.', {
                                    parse_mode: 'Markdown',
                                    reply_markup: {
                                        keyboard: [[{ text: '❌ Bekor qilish' }]],
                                        resize_keyboard: true,
                                    },
                                })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            error_75 = _a.sent();
                            this.logger.error('Error starting unblock user:', error_75);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleUnblockUserSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, isNumeric, user, telegramId, username, error_76;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 13, , 15]);
                            if (!(text === '❌ Bekor qilish')) return [3 /*break*/, 3];
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 1:
                            admin = _b.sent();
                            return [4 /*yield*/, ctx.reply('❌ Bekor qilindi', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'))];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3:
                            isNumeric = /^\d+$/.test(text.trim());
                            user = void 0;
                            if (!isNumeric) return [3 /*break*/, 5];
                            telegramId = text.trim();
                            return [4 /*yield*/, this.prisma.user.findFirst({
                                    where: { telegramId: telegramId },
                                })];
                        case 4:
                            user = _b.sent();
                            return [3 /*break*/, 7];
                        case 5:
                            username = text.startsWith('@') ? text.substring(1) : text;
                            return [4 /*yield*/, this.prisma.user.findFirst({
                                    where: { username: username },
                                })];
                        case 6:
                            user = _b.sent();
                            _b.label = 7;
                        case 7:
                            if (!!user) return [3 /*break*/, 9];
                            return [4 /*yield*/, ctx.reply('❌ Foydalanuvchi topilmadi!\n\n' +
                                    "Iltimos, to'g'ri username yoki Telegram ID kiriting:")];
                        case 8:
                            _b.sent();
                            return [2 /*return*/];
                        case 9:
                            if (!!user.isBlocked) return [3 /*break*/, 11];
                            return [4 /*yield*/, ctx.reply("\u26A0\uFE0F Bu foydalanuvchi bloklanmagan!\n\n" +
                                    "\uD83D\uDC64 Ism: ".concat(user.firstName || "Noma'lum", "\n") +
                                    "\uD83D\uDCDD Username: @".concat(user.username, "\n") +
                                    "\u2705 Holati: Faol")];
                        case 10:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [2 /*return*/];
                        case 11: return [4 /*yield*/, ctx.reply("\u26A0\uFE0F **Tasdiqlash**\n\n" +
                                "Haqiqatdan ham quyidagi foydalanuvchini blokdan ochasizmi?\n\n" +
                                "\uD83D\uDC64 Ism: ".concat(user.firstName || "Noma'lum", "\n") +
                                "\uD83D\uDCDD Username: @".concat(user.username, "\n") +
                                "\uD83C\uDD94 Telegram ID: `".concat(user.telegramId, "`\n") +
                                "\uD83D\uDEAB Bloklangan: ".concat(((_a = user.blockedAt) === null || _a === void 0 ? void 0 : _a.toLocaleString('uz-UZ')) || "Noma'lum", "\n") +
                                "\uD83D\uDCDD Sabab: ".concat(user.blockReason || "Noma'lum", "\n\n") +
                                "Bu foydalanuvchi qayta botdan foydalana oladi!", {
                                parse_mode: 'Markdown',
                                reply_markup: {
                                    inline_keyboard: [
                                        [
                                            {
                                                text: '✅ Ha, ochish',
                                                callback_data: "confirm_unblock_user_".concat(user.id),
                                            },
                                            {
                                                text: "❌ Yo'q",
                                                callback_data: 'cancel_unblock_user',
                                            },
                                        ],
                                    ],
                                },
                            })];
                        case 12:
                            _b.sent();
                            this.sessionService.updateSession(ctx.from.id, {
                                state: session_interface_1.AdminState.UNBLOCK_USER,
                                data: { userId: user.id, username: user.username },
                            });
                            return [3 /*break*/, 15];
                        case 13:
                            error_76 = _b.sent();
                            this.logger.error('Error handling unblock user steps:', error_76);
                            return [4 /*yield*/, ctx.reply("❌ Xatolik yuz berdi. Qaytadan urinib ko'ring.")];
                        case 14:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 15];
                        case 15: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.confirmUnblockUser = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, _a, userId, username, user, admin, error_77;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 8, , 10]);
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _b.sent();
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!(!session || !session.data || !session.data.userId)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Ma'lumot topilmadi. Qaytadan urinib ko'ring.")];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3:
                            _a = session.data, userId = _a.userId, username = _a.username;
                            return [4 /*yield*/, this.prisma.user.update({
                                    where: { id: userId },
                                    data: {
                                        isBlocked: false,
                                        blockedAt: null,
                                        blockReason: null,
                                    },
                                })];
                        case 4:
                            user = _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 5:
                            _b.sent();
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 6:
                            admin = _b.sent();
                            return [4 /*yield*/, ctx.reply("\u2705 Foydalanuvchi blokdan ochildi!\n\n" +
                                    "\uD83D\uDC64 Ism: ".concat(user.firstName || "Noma'lum", "\n") +
                                    "\uD83D\uDCDD Username: @".concat(username, "\n") +
                                    "\u2705 Holati: Faol\n" +
                                    "\uD83D\uDCC5 Sana: ".concat(new Date().toLocaleString('uz-UZ')), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'))];
                        case 7:
                            _b.sent();
                            return [3 /*break*/, 10];
                        case 8:
                            error_77 = _b.sent();
                            this.logger.error('Error confirming unblock user:', error_77);
                            this.logger.error('Error details:', {
                                message: error_77 === null || error_77 === void 0 ? void 0 : error_77.message,
                                stack: error_77 === null || error_77 === void 0 ? void 0 : error_77.stack,
                                code: error_77 === null || error_77 === void 0 ? void 0 : error_77.code,
                            });
                            return [4 /*yield*/, ctx.reply("❌ Xatolik yuz berdi. Admin bilan bog'laning.")];
                        case 9:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showPremiumBannedUsersMenu = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, keyboard, error_78;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 5]);
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            if (ctx.from) {
                                this.sessionService.updateSessionData(ctx.from.id, {
                                    menuContext: 'premium_banned',
                                });
                            }
                            keyboard = new grammy_1.Keyboard()
                                .text("👥 Hamma userlarni ko'rish")
                                .text('🔍 Qidirish')
                                .row()
                                .text("💳 To'lovlar menyusiga qaytish");
                            return [4 /*yield*/, ctx.reply('🚫 **Premium banned users**\n\n' +
                                    "Yolg'on to'lov ma'lumotlarini ishlatgan va premium'dan bloklangan foydalanuvchilar.", {
                                    parse_mode: 'Markdown',
                                    reply_markup: keyboard.resized(),
                                })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            error_78 = _a.sent();
                            this.logger.error('Error showing premium banned users menu:', error_78);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.showAllPremiumBannedUsers = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, bannedUsers, message_8, error_79;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 8]);
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.prisma.user.findMany({
                                    where: { isPremiumBanned: true },
                                    orderBy: { premiumBannedAt: 'desc' },
                                    take: 50,
                                })];
                        case 2:
                            bannedUsers = _a.sent();
                            if (!(bannedUsers.length === 0)) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply("✅ Premium'dan bloklangan foydalanuvchilar yo'q.")];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4:
                            message_8 = '🚫 **Premium banned users** (50 ta):\n\n';
                            bannedUsers.forEach(function (user, index) {
                                var username = user.username ? "@".concat(user.username) : "Username yo'q";
                                var name = user.firstName || "Ism yo'q";
                                var banDate = user.premiumBannedAt
                                    ? user.premiumBannedAt.toLocaleDateString('uz-UZ')
                                    : "Noma'lum";
                                message_8 += "".concat(index + 1, ". ").concat(name, " (").concat(username, ")\n");
                                message_8 += "   ID: `".concat(user.telegramId, "`\n");
                                message_8 += "   \u26A0\uFE0F Ogohlantirish: ".concat(user.premiumBanCount, "/2\n");
                                message_8 += "   \uD83D\uDCC5 Ban sanasi: ".concat(banDate, "\n\n");
                            });
                            message_8 +=
                                '\n🔍 Foydalanuvchini qidirish uchun "Qidirish" tugmasini bosing.';
                            return [4 /*yield*/, ctx.reply(message_8, { parse_mode: 'Markdown' })];
                        case 5:
                            _a.sent();
                            return [3 /*break*/, 8];
                        case 6:
                            error_79 = _a.sent();
                            this.logger.error('Error showing all premium banned users:', error_79);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 7:
                            _a.sent();
                            return [3 /*break*/, 8];
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startSearchPremiumBannedUser = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, error_80;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 5]);
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            this.sessionService.startSession(ctx.from.id, session_interface_1.AdminState.UNBAN_PREMIUM_USER);
                            this.sessionService.updateSessionData(ctx.from.id, { step: 'search' });
                            return [4 /*yield*/, ctx.reply('🔍 Foydalanuvchini qidirish\n\n' +
                                    'Username (@ belgisisiz) yoki User ID ni kiriting:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            error_80 = _a.sent();
                            this.logger.error('Error starting search premium banned user:', error_80);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleUnbanPremiumUserSteps = function (ctx, text, session) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, step, user, username, username_display, banDate, error_81;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 9, , 11]);
                            return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _b.sent();
                            if (!admin || !ctx.from)
                                return [2 /*return*/];
                            step = ((_a = session.data) === null || _a === void 0 ? void 0 : _a.step) || 'search';
                            if (!(step === 'search')) return [3 /*break*/, 8];
                            user = null;
                            username = text.replace('@', '');
                            return [4 /*yield*/, this.prisma.user.findFirst({
                                    where: {
                                        OR: [{ username: username }, { telegramId: text }],
                                    },
                                })];
                        case 2:
                            user = _b.sent();
                            if (!!user) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply('❌ Foydalanuvchi topilmadi.\n\n' +
                                    'Qaytadan kiriting yoki bekor qiling:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 3:
                            _b.sent();
                            return [2 /*return*/];
                        case 4:
                            if (!!user.isPremiumBanned) return [3 /*break*/, 6];
                            return [4 /*yield*/, ctx.reply("⚠️ Bu foydalanuvchi premium'dan bloklanmagan.\n\n" +
                                    'Boshqa foydalanuvchini qidiring:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 5:
                            _b.sent();
                            return [2 /*return*/];
                        case 6:
                            username_display = user.username
                                ? "@".concat(user.username)
                                : "Username yo'q";
                            banDate = user.premiumBannedAt
                                ? user.premiumBannedAt.toLocaleDateString('uz-UZ')
                                : "Noma'lum";
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCCB **Foydalanuvchi topildi:**\n\n" +
                                    "\uD83D\uDC64 Ism: ".concat(user.firstName || "Noma'lum", "\n") +
                                    "\uD83D\uDCDD Username: ".concat(username_display, "\n") +
                                    "\uD83C\uDD94 ID: `".concat(user.telegramId, "`\n") +
                                    "\u26A0\uFE0F Ogohlantirish: ".concat(user.premiumBanCount, "/2\n") +
                                    "\uD83D\uDCC5 Ban sanasi: ".concat(banDate, "\n\n") +
                                    "\u2753 Haqiqatdan ham bu foydalanuvchini premium ban'dan ochmoqchimisiz?", {
                                    parse_mode: 'Markdown',
                                    reply_markup: {
                                        inline_keyboard: [
                                            [
                                                {
                                                    text: '✅ Ha, ochish',
                                                    callback_data: "confirm_unban_premium_".concat(user.id),
                                                },
                                                { text: "❌ Yo'q", callback_data: 'cancel_unban_premium' },
                                            ],
                                        ],
                                    },
                                })];
                        case 7:
                            _b.sent();
                            this.sessionService.updateSessionData(ctx.from.id, {
                                step: 'confirm',
                                userId: user.id,
                                username: user.username,
                            });
                            _b.label = 8;
                        case 8: return [3 /*break*/, 11];
                        case 9:
                            error_81 = _b.sent();
                            this.logger.error('Error handling unban premium user steps:', error_81);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 10:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 11];
                        case 11: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.confirmUnbanPremiumUser = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, _a, userId, username, user, error_82, admin, error_83;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 12, , 14]);
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _b.sent();
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!(!session || !session.data || !session.data.userId)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Ma'lumot topilmadi. Qaytadan urinib ko'ring.")];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3:
                            _a = session.data, userId = _a.userId, username = _a.username;
                            return [4 /*yield*/, this.prisma.user.update({
                                    where: { id: userId },
                                    data: {
                                        isPremiumBanned: false,
                                        premiumBannedAt: null,
                                        premiumBanCount: 0, // Reset counter
                                    },
                                })];
                        case 4:
                            user = _b.sent();
                            _b.label = 5;
                        case 5:
                            _b.trys.push([5, 7, , 8]);
                            return [4 /*yield*/, this.grammyBot.bot.api.sendMessage(user.telegramId, '✅ **Yaxshi xabar!**\n\n' +
                                    'Sizning premium ban blokingiz ochildi. Endi premium sotib olishingiz mumkin.\n\n' +
                                    "💡 Iltimos, to'g'ri to'lov ma'lumotlarini yuboring.", { parse_mode: 'Markdown' })];
                        case 6:
                            _b.sent();
                            return [3 /*break*/, 8];
                        case 7:
                            error_82 = _b.sent();
                            this.logger.error('Error notifying user:', error_82);
                            return [3 /*break*/, 8];
                        case 8:
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 9:
                            _b.sent();
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 10:
                            admin = _b.sent();
                            return [4 /*yield*/, ctx.reply("\u2705 Foydalanuvchi premium ban'dan ochildi!\n\n" +
                                    "\uD83D\uDC64 Ism: ".concat(user.firstName || "Noma'lum", "\n") +
                                    "\uD83D\uDCDD Username: @".concat(username || "Noma'lum", "\n") +
                                    "\uD83D\uDD13 Ochilgan sana: ".concat(new Date().toLocaleString('uz-UZ')), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'))];
                        case 11:
                            _b.sent();
                            return [3 /*break*/, 14];
                        case 12:
                            error_83 = _b.sent();
                            this.logger.error('Error confirming unban premium user:', error_83);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 13:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 14];
                        case 14: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.cancelUnbanPremium = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, error_84;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 2:
                            _a.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 3:
                            admin = _a.sent();
                            return [4 /*yield*/, ctx.reply('❌ Bekor qilindi.', admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'))];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            error_84 = _a.sent();
                            this.logger.error('Error canceling unban premium:', error_84);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.startDeleteContent = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            if (!(admin.role !== 'SUPERADMIN' && !admin.canDeleteContent)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Sizda kontent o'chirish huquqi yo'q!")];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            this.sessionService.createSession(ctx.from.id, session_interface_1.AdminState.DELETE_CONTENT);
                            return [4 /*yield*/, ctx.reply("🗑️ **Kontent o'chirish**\n\n" +
                                    '🔢 Kino yoki serial kodini kiriting:\n\n' +
                                    '**Misol:** 100, 200, 350\n\n' +
                                    '⚠️ **Ogohlantirish:**\n' +
                                    '• Bu amal qaytarilmaydi!\n' +
                                    "• Barcha qismlar va tarix o'chiriladi\n" +
                                    "• Kod bo'sh holatga qaytadi", { parse_mode: 'Markdown', reply_markup: { remove_keyboard: true } })];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.handleDeleteContentSteps = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, text, codeMatch, code, movie, serial, error_85;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!session || session.state !== session_interface_1.AdminState.DELETE_CONTENT)
                                return [2 /*return*/];
                            text = (_b = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.trim();
                            if (!text)
                                return [2 /*return*/];
                            codeMatch = text.match(/^(\d+)$/);
                            if (!!codeMatch) return [3 /*break*/, 2];
                            return [4 /*yield*/, ctx.reply("❌ Noto'g'ri format!\n\n" + 'Faqat raqam kiriting, masalan: 100, 200')];
                        case 1:
                            _c.sent();
                            return [2 /*return*/];
                        case 2:
                            code = codeMatch[1];
                            _c.label = 3;
                        case 3:
                            _c.trys.push([3, 12, , 14]);
                            return [4 /*yield*/, this.prisma.movie.findUnique({
                                    where: { code: parseInt(code) },
                                })];
                        case 4:
                            movie = _c.sent();
                            return [4 /*yield*/, this.prisma.serial.findUnique({
                                    where: { code: parseInt(code) },
                                })];
                        case 5:
                            serial = _c.sent();
                            if (!movie) return [3 /*break*/, 7];
                            return [4 /*yield*/, this.deleteMovieByCode(ctx, code)];
                        case 6:
                            _c.sent();
                            return [3 /*break*/, 11];
                        case 7:
                            if (!serial) return [3 /*break*/, 9];
                            return [4 /*yield*/, this.deleteSerialByCode(ctx, code)];
                        case 8:
                            _c.sent();
                            return [3 /*break*/, 11];
                        case 9: return [4 /*yield*/, ctx.reply("\u274C ".concat(code, " kodli kontent topilmadi!"))];
                        case 10:
                            _c.sent();
                            _c.label = 11;
                        case 11: return [3 /*break*/, 14];
                        case 12:
                            error_85 = _c.sent();
                            this.logger.error('Error deleting content:', error_85);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi: ' + error_85.message)];
                        case 13:
                            _c.sent();
                            return [3 /*break*/, 14];
                        case 14:
                            this.sessionService.clearSession(ctx.from.id);
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.deleteMovieByCode = function (ctx, code) {
            return __awaiter(this, void 0, void 0, function () {
                var movie, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.movie.findUnique({
                                where: { code: parseInt(code) },
                                include: { episodes: true },
                            })];
                        case 1:
                            movie = _a.sent();
                            if (!!movie) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("\u274C ".concat(code, " kodli kino topilmadi!"))];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            keyboard = new grammy_1.InlineKeyboard()
                                .text("\u2705 Ha, o'chirish", "confirm_delete_movie_".concat(code))
                                .text('❌ Bekor qilish', 'cancel_delete_content');
                            return [4 /*yield*/, ctx.reply("\u26A0\uFE0F **Tasdiqlash kerak!**\n\n" +
                                    "\uD83C\uDFAC Kino: ".concat(movie.title, "\n") +
                                    "\uD83C\uDD94 Kod: ".concat(code, "\n") +
                                    "\uD83D\uDCF9 Qismlar: ".concat(movie.episodes.length, "\n\n") +
                                    "Bu kinoni va unga bog'langan barcha ma'lumotlarni o'chirmoqchimisiz?", { parse_mode: 'Markdown', reply_markup: keyboard })];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.deleteSerialByCode = function (ctx, code) {
            return __awaiter(this, void 0, void 0, function () {
                var serial, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.serial.findUnique({
                                where: { code: parseInt(code) },
                                include: { episodes: true },
                            })];
                        case 1:
                            serial = _a.sent();
                            if (!!serial) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("\u274C ".concat(code, " kodli serial topilmadi!"))];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            keyboard = new grammy_1.InlineKeyboard()
                                .text("\u2705 Ha, o'chirish", "confirm_delete_serial_".concat(code))
                                .text('❌ Bekor qilish', 'cancel_delete_content');
                            return [4 /*yield*/, ctx.reply("\u26A0\uFE0F **Tasdiqlash kerak!**\n\n" +
                                    "\uD83D\uDCFA Serial: ".concat(serial.title, "\n") +
                                    "\uD83C\uDD94 Kod: ".concat(code, "\n") +
                                    "\uD83D\uDCF9 Qismlar: ".concat(serial.episodes.length, "\n\n") +
                                    "Bu serialni va unga bog'langan barcha ma'lumotlarni o'chirmoqchimisiz?", { parse_mode: 'Markdown', reply_markup: keyboard })];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.confirmDeleteMovie = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var code, movie, error_86, error_87, admin, error_88;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            code = ctx.match[1];
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 20, , 22]);
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 2:
                            _d.sent();
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 3:
                            _d.sent();
                            return [4 /*yield*/, this.prisma.movie.findUnique({
                                    where: { code: parseInt(code) },
                                    include: {
                                        episodes: true,
                                        field: {
                                            include: {
                                                databaseChannel: true,
                                            },
                                        },
                                    },
                                })];
                        case 4:
                            movie = _d.sent();
                            if (!!movie) return [3 /*break*/, 6];
                            return [4 /*yield*/, ctx.reply("\u274C ".concat(code, " kodli kino topilmadi!"))];
                        case 5:
                            _d.sent();
                            return [2 /*return*/];
                        case 6:
                            if (!(movie.channelMessageId && ((_a = movie.field) === null || _a === void 0 ? void 0 : _a.channelId))) return [3 /*break*/, 10];
                            _d.label = 7;
                        case 7:
                            _d.trys.push([7, 9, , 10]);
                            return [4 /*yield*/, ctx.api.deleteMessage(movie.field.channelId, movie.channelMessageId)];
                        case 8:
                            _d.sent();
                            return [3 /*break*/, 10];
                        case 9:
                            error_86 = _d.sent();
                            return [3 /*break*/, 10];
                        case 10:
                            if (!(movie.channelMessageId && ((_c = (_b = movie.field) === null || _b === void 0 ? void 0 : _b.databaseChannel) === null || _c === void 0 ? void 0 : _c.channelId))) return [3 /*break*/, 14];
                            _d.label = 11;
                        case 11:
                            _d.trys.push([11, 13, , 14]);
                            return [4 /*yield*/, ctx.api.deleteMessage(movie.field.databaseChannel.channelId, movie.channelMessageId)];
                        case 12:
                            _d.sent();
                            return [3 /*break*/, 14];
                        case 13:
                            error_87 = _d.sent();
                            return [3 /*break*/, 14];
                        case 14: return [4 /*yield*/, this.prisma.movieEpisode.deleteMany({
                                where: { movieId: movie.id },
                            })];
                        case 15:
                            _d.sent();
                            return [4 /*yield*/, this.prisma.watchHistory.deleteMany({
                                    where: { movieId: movie.id },
                                })];
                        case 16:
                            _d.sent();
                            return [4 /*yield*/, this.prisma.movie.delete({
                                    where: { id: movie.id },
                                })];
                        case 17:
                            _d.sent();
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 18:
                            admin = _d.sent();
                            return [4 /*yield*/, ctx.reply("\u2705 **Kino muvaffaqiyatli o'chirildi!**\n\n" +
                                    "\uD83C\uDFAC Nomi: ".concat(movie.title, "\n") +
                                    "\uD83C\uDD94 Kod: ".concat(code, "\n") +
                                    "\uD83D\uDCF9 O'chirilgan qismlar: ".concat(movie.episodes.length, "\n") +
                                    "\uD83D\uDCE4 Kanallardan o'chirildi: ".concat(movie.channelMessageId ? 'Ha' : "Yo'q", "\n\n") +
                                    "Kod endi bo'sh va qayta ishlatilishi mumkin.", {
                                    parse_mode: 'Markdown',
                                    reply_markup: admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'),
                                })];
                        case 19:
                            _d.sent();
                            return [3 /*break*/, 22];
                        case 20:
                            error_88 = _d.sent();
                            this.logger.error('Error confirming delete movie:', error_88);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi: ' + error_88.message)];
                        case 21:
                            _d.sent();
                            return [3 /*break*/, 22];
                        case 22: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.confirmDeleteSerial = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var code, serial, error_89, error_90, admin, error_91;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            code = ctx.match[1];
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 20, , 21]);
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 2:
                            _d.sent();
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 3:
                            _d.sent();
                            return [4 /*yield*/, this.prisma.serial.findUnique({
                                    where: { code: parseInt(code) },
                                    include: {
                                        episodes: true,
                                        field: {
                                            include: {
                                                databaseChannel: true,
                                            },
                                        },
                                    },
                                })];
                        case 4:
                            serial = _d.sent();
                            if (!!serial) return [3 /*break*/, 6];
                            return [4 /*yield*/, ctx.reply("\u274C ".concat(code, " kodli serial topilmadi!"))];
                        case 5:
                            _d.sent();
                            return [2 /*return*/];
                        case 6:
                            if (!(serial.channelMessageId && ((_a = serial.field) === null || _a === void 0 ? void 0 : _a.channelId))) return [3 /*break*/, 10];
                            _d.label = 7;
                        case 7:
                            _d.trys.push([7, 9, , 10]);
                            return [4 /*yield*/, ctx.api.deleteMessage(serial.field.channelId, serial.channelMessageId)];
                        case 8:
                            _d.sent();
                            return [3 /*break*/, 10];
                        case 9:
                            error_89 = _d.sent();
                            return [3 /*break*/, 10];
                        case 10:
                            if (!(serial.channelMessageId && ((_c = (_b = serial.field) === null || _b === void 0 ? void 0 : _b.databaseChannel) === null || _c === void 0 ? void 0 : _c.channelId))) return [3 /*break*/, 14];
                            _d.label = 11;
                        case 11:
                            _d.trys.push([11, 13, , 14]);
                            return [4 /*yield*/, ctx.api.deleteMessage(serial.field.databaseChannel.channelId, serial.channelMessageId)];
                        case 12:
                            _d.sent();
                            return [3 /*break*/, 14];
                        case 13:
                            error_90 = _d.sent();
                            return [3 /*break*/, 14];
                        case 14: return [4 /*yield*/, this.prisma.episode.deleteMany({
                                where: { serialId: serial.id },
                            })];
                        case 15:
                            _d.sent();
                            return [4 /*yield*/, this.prisma.watchHistory.deleteMany({
                                    where: { serialId: serial.id },
                                })];
                        case 16:
                            _d.sent();
                            return [4 /*yield*/, this.prisma.serial.delete({
                                    where: { id: serial.id },
                                })];
                        case 17:
                            _d.sent();
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 18:
                            admin = _d.sent();
                            return [4 /*yield*/, ctx.reply("\u2705 **Serial muvaffaqiyatli o'chirildi!**\n\n" +
                                    "\uD83D\uDCFA Nomi: ".concat(serial.title, "\n") +
                                    "\uD83C\uDD94 Kod: ".concat(code, "\n") +
                                    "\uD83D\uDCF9 O'chirilgan qismlar: ".concat(serial.episodes.length, "\n") +
                                    "\uD83D\uDCE4 Kanallardan o'chirildi: ".concat(serial.channelMessageId ? 'Ha' : "Yo'q", "\n\n") +
                                    "Kod endi bo'sh va qayta ishlatilishi mumkin.", {
                                    parse_mode: 'Markdown',
                                    reply_markup: admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'),
                                })];
                        case 19:
                            _d.sent();
                            return [3 /*break*/, 21];
                        case 20:
                            error_91 = _d.sent();
                            this.logger.error('Error confirming delete serial:', error_91);
                            return [3 /*break*/, 21];
                        case 21: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.cancelDeleteContent = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, error_92;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 2:
                            _a.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 3:
                            admin = _a.sent();
                            return [4 /*yield*/, ctx.reply("❌ O'chirish bekor qilindi.", admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'))];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            error_92 = _a.sent();
                            this.logger.error('Error canceling delete:', error_92);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.clearChannelHistory = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var admin, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdmin(ctx)];
                        case 1:
                            admin = _a.sent();
                            if (!admin)
                                return [2 /*return*/];
                            if (!(admin.role !== 'SUPERADMIN')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply('❌ Faqat SuperAdmin tarixni tozalashi mumkin!')];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                        case 3:
                            keyboard = new grammy_1.InlineKeyboard()
                                .text('✅ Ha, tozalash', 'confirm_clear_history')
                                .text('❌ Bekor qilish', 'cancel_clear_history');
                            return [4 /*yield*/, ctx.reply('⚠️ **Tasdiqlash kerak!**\n\n' +
                                    "Barcha majburiy kanallar tarixi o'chiriladi:\n" +
                                    "• Nofaol kanallar o'chiriladi\n" +
                                    '• Faol kanallar saqlanadi\n' +
                                    "• A'zolar va statistika tozalanadi\n\n" +
                                    'Davom etishni xohlaysizmi?', { parse_mode: 'Markdown', reply_markup: keyboard })];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.confirmClearHistory = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var result, admin, error_93;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 7, , 9]);
                            return [4 /*yield*/, ctx.answerCallbackQuery('🗑️ Tozalanmoqda...')];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.prisma.mandatoryChannel.deleteMany({
                                    where: { isActive: false },
                                })];
                        case 3:
                            result = _a.sent();
                            return [4 /*yield*/, this.prisma.mandatoryChannel.updateMany({
                                    where: { isActive: true },
                                    data: {
                                        currentMembers: 0,
                                        pendingRequests: 0,
                                    },
                                })];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 5:
                            admin = _a.sent();
                            return [4 /*yield*/, ctx.reply('✅ **Tarix muvaffaqiyatli tozalandi!**\n\n' +
                                    "\uD83D\uDDD1\uFE0F O'chirilgan nofaol kanallar: ".concat(result.count, "\n") +
                                    '📊 Faol kanallar statistikasi tozalandi\n\n' +
                                    'Tarix qaytadan boshlanadi.', {
                                    parse_mode: 'Markdown',
                                    reply_markup: admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'),
                                })];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 9];
                        case 7:
                            error_93 = _a.sent();
                            this.logger.error('Error clearing channel history:', error_93);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi: ' + error_93.message)];
                        case 8:
                            _a.sent();
                            return [3 /*break*/, 9];
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.sendToFieldChannel = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, _a, contentType, code, poster, posterType, fieldId, title, genre, targetChannelId, targetChannelName, targetChannelLink, field, botInfo, botUsername, formattedCaption, deepLink, keyboard, admin, error_94, error_95;
                var _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 22, , 24]);
                            return [4 /*yield*/, ctx.answerCallbackQuery('📤 Field kanalga yuborilmoqda...')];
                        case 1:
                            _d.sent();
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!(!session || !session.data)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Ma'lumot topilmadi.")];
                        case 2:
                            _d.sent();
                            return [2 /*return*/];
                        case 3:
                            _a = session.data, contentType = _a.contentType, code = _a.code, poster = _a.poster, posterType = _a.posterType, fieldId = _a.fieldId, title = _a.title, genre = _a.genre;
                            targetChannelId = null;
                            targetChannelName = null;
                            targetChannelLink = null;
                            if (!fieldId) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.prisma.field.findUnique({
                                    where: { id: fieldId },
                                    include: { databaseChannel: true },
                                })];
                        case 4:
                            field = _d.sent();
                            if (field) {
                                targetChannelId = ((_b = field.databaseChannel) === null || _b === void 0 ? void 0 : _b.channelId) || field.channelId;
                                targetChannelName = ((_c = field.databaseChannel) === null || _c === void 0 ? void 0 : _c.channelName) || field.name;
                                targetChannelLink = field.channelLink || "https://t.me/".concat(targetChannelId === null || targetChannelId === void 0 ? void 0 : targetChannelId.replace('@', '').replace('-100', ''));
                            }
                            _d.label = 5;
                        case 5:
                            if (!!targetChannelId) return [3 /*break*/, 7];
                            return [4 /*yield*/, ctx.reply("❌ Field kanal topilmadi!")];
                        case 6:
                            _d.sent();
                            return [2 /*return*/];
                        case 7:
                            _d.trys.push([7, 19, , 21]);
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 8:
                            botInfo = _d.sent();
                            botUsername = botInfo.username || 'bot';
                            formattedCaption = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 ".concat(contentType === 'serial' ? 'Serial' : 'Kino', " nomi : ").concat(title || 'Noma\'lum', "\n\u251C\u2023 ").concat(contentType === 'serial' ? 'Serial' : 'Kino', " kodi: ").concat(contentType === 'serial' ? '' : '').concat(code, "\n\u251C\u2023 Janrlari: ").concat(genre || 'Janr ko\'rsatilmadi', "\n\u251C\u2023 Kanal: ").concat(targetChannelLink, "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\u25B6\uFE0F ").concat(contentType === 'serial' ? 'Serialni' : 'Kinoni', " to'liq qismini @").concat(botUsername, " dan tomosha qilishingiz mumkin!\n\n<blockquote expandable>\u26A0\uFE0F ESLATMA:\nBiz yuklayotgan kinolar turli saytlardan olinadi. \n\uD83C\uDFB0 Ba\u2019zi kinolarda kazino, qimor yoki \u201Cpulni ko\u2018paytirib beramiz\u201D degan reklama chiqishi mumkin. \n\uD83D\uDEAB Bunday reklamalarga aslo ishonmang! Ular firibgarlar va sizni aldaydi. \n\uD83D\uDD1E Ba\u2019zi sahnalar 18+ bo\u2018lishi mumkin \u2013 agar noqulay bo\u2018lsa, ko\u2018rishni to\u2018xtating.</blockquote>");
                            deepLink = "https://t.me/".concat(botUsername, "?start=").concat(contentType === 'serial' ? '' : '').concat(code);
                            keyboard = new grammy_1.InlineKeyboard().url('▶️ Tomosha qilish', deepLink);
                            if (!poster) return [3 /*break*/, 13];
                            if (!(posterType === 'video')) return [3 /*break*/, 10];
                            return [4 /*yield*/, ctx.api.sendVideo(targetChannelId, poster, {
                                    caption: formattedCaption,
                                    reply_markup: keyboard,
                                    parse_mode: "HTML"
                                })];
                        case 9:
                            _d.sent();
                            return [3 /*break*/, 12];
                        case 10: return [4 /*yield*/, ctx.api.sendPhoto(targetChannelId, poster, {
                                caption: formattedCaption,
                                reply_markup: keyboard,
                                parse_mode: "HTML"
                            })];
                        case 11:
                            _d.sent();
                            _d.label = 12;
                        case 12: return [3 /*break*/, 15];
                        case 13: return [4 /*yield*/, ctx.api.sendMessage(targetChannelId, formattedCaption, {
                                reply_markup: keyboard,
                                parse_mode: "HTML"
                            })];
                        case 14:
                            _d.sent();
                            _d.label = 15;
                        case 15: return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                reply_markup: { inline_keyboard: [] },
                            })];
                        case 16:
                            _d.sent();
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 17:
                            admin = _d.sent();
                            return [4 /*yield*/, ctx.reply('✅ Field kanalga yuborildi!\n\n' +
                                    "\uD83D\uDCE2 Kanal: ".concat(targetChannelName, "\n") +
                                    "\uD83C\uDFAC Kontent: ".concat(contentType === 'movie' ? 'Kino' : 'Serial', "\n") +
                                    "\uD83C\uDD94 Kod: ".concat(code), {
                                    reply_markup: admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'),
                                })];
                        case 18:
                            _d.sent();
                            return [3 /*break*/, 21];
                        case 19:
                            error_94 = _d.sent();
                            this.logger.error('Error sending to field channel:', error_94);
                            return [4 /*yield*/, ctx.reply('❌ Field kanalga yuborishda xatolik: ' + error_94.message)];
                        case 20:
                            _d.sent();
                            return [3 /*break*/, 21];
                        case 21:
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 24];
                        case 22:
                            error_95 = _d.sent();
                            this.logger.error('Error in sendToFieldChannel:', error_95);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 23:
                            _d.sent();
                            return [3 /*break*/, 24];
                        case 24: return [2 /*return*/];
                    }
                });
            });
        };
        AdminHandler_1.prototype.broadcastPremiereToUsers = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var session, _a, poster, posterType, contentType, code, title, genre, fieldChannelLink, users, botInfo, botUsername, formattedCaption, successCount, failCount, statusMsg, _i, users_4, user, deepLink, keyboard, error_96, admin, error_97;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 26, , 28]);
                            return [4 /*yield*/, ctx.answerCallbackQuery('📤 Foydalanuvchilarga yuborilmoqda...')];
                        case 1:
                            _b.sent();
                            return [4 /*yield*/, ctx.editMessageReplyMarkup({
                                    reply_markup: { inline_keyboard: [] },
                                })];
                        case 2:
                            _b.sent();
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!(!session || !session.data)) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply("❌ Ma'lumot topilmadi.")];
                        case 3:
                            _b.sent();
                            return [2 /*return*/];
                        case 4:
                            _a = session.data, poster = _a.poster, posterType = _a.posterType, contentType = _a.contentType, code = _a.code, title = _a.title, genre = _a.genre, fieldChannelLink = _a.fieldChannelLink;
                            return [4 /*yield*/, this.prisma.user.findMany({
                                    where: { isBlocked: false },
                                })];
                        case 5:
                            users = _b.sent();
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 6:
                            botInfo = _b.sent();
                            botUsername = botInfo.username || 'bot';
                            formattedCaption = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 ".concat(contentType === 'serial' ? 'Serial' : 'Kino', " nomi : ").concat(title || 'Noma\'lum', "\n\u251C\u2023 ").concat(contentType === 'serial' ? 'Serial' : 'Kino', " kodi: ").concat(contentType === 'serial' ? '' : '').concat(code, "\n\u251C\u2023 Janrlari: ").concat(genre || 'Janr ko\'rsatilmadi', "\n\u251C\u2023 Kanal: ").concat(fieldChannelLink || '@Kanal', "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\u25B6\uFE0F ").concat(contentType === 'serial' ? 'Serialni' : 'Kinoni', " to'liq qismini @").concat(botUsername, " dan tomosha qilishingiz mumkin!\n\n<blockquote expandable>\u26A0\uFE0F ESLATMA:\nBiz yuklayotgan kinolar turli saytlardan olinadi. \n\uD83C\uDFB0 Ba'zi kinolarda kazino, qimor yoki \"pulni ko'paytirib beramiz\" degan reklama chiqishi mumkin. \n\uD83D\uDEAB Bunday reklamalarga aslo ishonmang! Ular firibgarlar va sizni aldaydi. \n\uD83D\uDD1E Ba'zi sahnalar 18+ bo'lishi mumkin \u2013 agar noqulay bo'lsa, ko'rishni to'xtating.</blockquote>");
                            successCount = 0;
                            failCount = 0;
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCE4 Yuborish boshlandi...\n\n\uD83D\uDC65 Jami: ".concat(users.length, "\n\u2705 Yuborildi: 0\n\u274C Xatolik: 0"))];
                        case 7:
                            statusMsg = _b.sent();
                            _i = 0, users_4 = users;
                            _b.label = 8;
                        case 8:
                            if (!(_i < users_4.length)) return [3 /*break*/, 22];
                            user = users_4[_i];
                            _b.label = 9;
                        case 9:
                            _b.trys.push([9, 20, , 21]);
                            deepLink = "https://t.me/".concat(botUsername, "?start=").concat(contentType === 'serial' ? 's' : '').concat(code);
                            keyboard = new grammy_1.InlineKeyboard().url('▶️ Tomosha qilish', deepLink);
                            if (!poster) return [3 /*break*/, 14];
                            if (!(posterType === 'video')) return [3 /*break*/, 11];
                            return [4 /*yield*/, ctx.api.sendVideo(user.telegramId, poster, {
                                    caption: formattedCaption,
                                    reply_markup: keyboard,
                                    parse_mode: 'HTML',
                                })];
                        case 10:
                            _b.sent();
                            return [3 /*break*/, 13];
                        case 11: return [4 /*yield*/, ctx.api.sendPhoto(user.telegramId, poster, {
                                caption: formattedCaption,
                                reply_markup: keyboard,
                                parse_mode: 'HTML',
                            })];
                        case 12:
                            _b.sent();
                            _b.label = 13;
                        case 13: return [3 /*break*/, 16];
                        case 14: return [4 /*yield*/, ctx.api.sendMessage(user.telegramId, formattedCaption, {
                                reply_markup: keyboard,
                                parse_mode: 'HTML',
                            })];
                        case 15:
                            _b.sent();
                            _b.label = 16;
                        case 16:
                            successCount++;
                            if (!(successCount % 50 === 0)) return [3 /*break*/, 18];
                            return [4 /*yield*/, ctx.api.editMessageText(statusMsg.chat.id, statusMsg.message_id, "\uD83D\uDCE4 Yuborish davom etmoqda...\n\n\uD83D\uDC65 Jami: ".concat(users.length, "\n\u2705 Yuborildi: ").concat(successCount, "\n\u274C Xatolik: ").concat(failCount))];
                        case 17:
                            _b.sent();
                            _b.label = 18;
                        case 18: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 50); })];
                        case 19:
                            _b.sent();
                            return [3 /*break*/, 21];
                        case 20:
                            error_96 = _b.sent();
                            failCount++;
                            this.logger.error("Failed to send to user ".concat(user.telegramId, ":"), error_96);
                            return [3 /*break*/, 21];
                        case 21:
                            _i++;
                            return [3 /*break*/, 8];
                        case 22: return [4 /*yield*/, ctx.api.editMessageText(statusMsg.chat.id, statusMsg.message_id, "\u2705 **Yuborish yakunlandi!**\n\n" +
                                "\uD83D\uDC65 Jami: ".concat(users.length, "\n") +
                                "\u2705 Yuborildi: ".concat(successCount, "\n") +
                                "\u274C Xatolik: ".concat(failCount), { parse_mode: 'Markdown' })];
                        case 23:
                            _b.sent();
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(String(ctx.from.id))];
                        case 24:
                            admin = _b.sent();
                            return [4 /*yield*/, ctx.reply("🎉 Premyera e'loni muvaffaqiyatli yuborildi!", admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu((admin === null || admin === void 0 ? void 0 : admin.role) || 'ADMIN'))];
                        case 25:
                            _b.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 28];
                        case 26:
                            error_97 = _b.sent();
                            this.logger.error('Error in broadcastPremiereToUsers:', error_97);
                            return [4 /*yield*/, ctx.reply('❌ Xatolik yuz berdi.')];
                        case 27:
                            _b.sent();
                            return [3 /*break*/, 28];
                        case 28: return [2 /*return*/];
                    }
                });
            });
        };
        return AdminHandler_1;
    }());
    __setFunctionName(_classThis, "AdminHandler");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AdminHandler = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AdminHandler = _classThis;
}();
exports.AdminHandler = AdminHandler;
