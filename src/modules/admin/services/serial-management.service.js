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
exports.SerialManagementService = exports.SerialManagementStep = void 0;
var common_1 = require("@nestjs/common");
var grammy_1 = require("grammy");
var admin_menu_keyboard_1 = require("../keyboards/admin-menu.keyboard");
var session_interface_1 = require("../types/session.interface");
var SerialManagementStep;
(function (SerialManagementStep) {
    SerialManagementStep["CODE"] = "code";
    SerialManagementStep["TITLE"] = "title";
    SerialManagementStep["GENRE"] = "genre";
    SerialManagementStep["DESCRIPTION"] = "description";
    SerialManagementStep["FIELD"] = "field";
    SerialManagementStep["POSTER"] = "poster";
    SerialManagementStep["UPLOADING_EPISODES"] = "uploading_episodes";
    SerialManagementStep["POST_TO_FIELD"] = "post_to_field";
})(SerialManagementStep || (exports.SerialManagementStep = SerialManagementStep = {}));
var SerialManagementService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var SerialManagementService = _classThis = /** @class */ (function () {
        function SerialManagementService_1(serialService, movieService, episodeService, movieEpisodeService, fieldService, channelService, sessionService, grammyBot) {
            this.serialService = serialService;
            this.movieService = movieService;
            this.episodeService = episodeService;
            this.movieEpisodeService = movieEpisodeService;
            this.fieldService = fieldService;
            this.channelService = channelService;
            this.sessionService = sessionService;
            this.grammyBot = grammyBot;
            this.logger = new common_1.Logger(SerialManagementService.name);
        }
        SerialManagementService_1.prototype.buildSerialCaption = function (data) {
            var caption = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n";
            caption += "\u251C\u2023 Serial nomi : ".concat(data.title, "\n");
            caption += "\u251C\u2023 Serial kodi: ".concat(data.code, "\n");
            if (data.isEpisode && data.episodeNumber) {
                caption += "\u251C\u2023 Qism: ".concat(data.episodeNumber, "\n");
            }
            else if (data.totalEpisodes) {
                caption += "\u251C\u2023 Qismlar: ".concat(data.totalEpisodes, "\n");
            }
            if (data.genre) {
                caption += "\u251C\u2023 Janrlari: ".concat(data.genre, "\n");
            }
            if (data.description && !data.isEpisode) {
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
            if (data.isEpisode) {
                caption += "\u25B6\uFE0F Kinoning to'liq qismini @".concat(data.botUsername, " dan tomosha qilishingiz mumkin!\n\n");
            }
            else {
                caption += "\u25B6\uFE0F Serialning to'liq qismlarini @".concat(data.botUsername, " dan tomosha qilishingiz mumkin!\n\n");
            }
            caption += "<blockquote expandable>\u26A0\uFE0F ESLATMA:\n";
            caption += "Biz yuklayotgan kinolar turli saytlardan olinadi.\n";
            caption += "\uD83C\uDFB0 Ba'zi kinolarda kazino, qimor yoki \"pulni ko'paytirib beramiz\" degan reklama chiqishi mumkin.\n";
            caption += "\uD83D\uDEAB Bunday reklamalarga aslo ishonmang! Ular firibgarlar va sizni aldaydi.\n";
            caption += "\uD83D\uDD1E Ba'zi sahnalar 18+ bo'lishi mumkin \u2013 agar noqulay bo'lsa, ko'rishni to'xtating.</blockquote>";
            return caption;
        };
        SerialManagementService_1.prototype.handleNewSerialCode = function (ctx, code) {
            return __awaiter(this, void 0, void 0, function () {
                var existingMovie, nearestCodes, message_1, existingSerial, nearestCodes, message_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.movieService.findByCode(code.toString())];
                        case 1:
                            existingMovie = _a.sent();
                            if (!existingMovie) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.movieService.findNearestAvailableCodes(code, 5)];
                        case 2:
                            nearestCodes = _a.sent();
                            message_1 = "\u274C ".concat(code, " kodi kino uchun ishlatilgan!\n\n\uD83C\uDFAC ").concat(existingMovie.title, "\n\n");
                            if (nearestCodes.length > 0) {
                                message_1 += "✅ Bo'sh kodlar:\n";
                                nearestCodes.forEach(function (c, i) { return (message_1 += "".concat(i + 1, ". ").concat(c, "\n")); });
                            }
                            message_1 += '\n⚠️ Boshqa kod kiriting:';
                            return [4 /*yield*/, ctx.reply(message_1, admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4: return [4 /*yield*/, this.serialService.findByCode(code.toString())];
                        case 5:
                            existingSerial = _a.sent();
                            if (!existingSerial) return [3 /*break*/, 8];
                            return [4 /*yield*/, this.serialService.findNearestAvailableCodes(code, 5)];
                        case 6:
                            nearestCodes = _a.sent();
                            message_2 = "\u274C Kod ".concat(code, " band!\n\n");
                            if (nearestCodes.length > 0) {
                                message_2 += "✅ Bo'sh kodlar:\n";
                                nearestCodes.forEach(function (c, i) { return (message_2 += "".concat(i + 1, ". ").concat(c, "\n")); });
                            }
                            message_2 += '\nBoshqa kod kiriting:';
                            return [4 /*yield*/, ctx.reply(message_2, admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                        case 8:
                            this.sessionService.updateSessionData(ctx.from.id, { code: code });
                            this.sessionService.setStep(ctx.from.id, 1); // TITLE step
                            return [4 /*yield*/, ctx.reply('Serial nomini kiriting:\nMasalan: Game of Thrones', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 9:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SerialManagementService_1.prototype.handleSerialTitle = function (ctx, title) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            this.sessionService.updateSessionData(ctx.from.id, { title: title });
                            this.sessionService.setStep(ctx.from.id, 2); // GENRE step
                            return [4 /*yield*/, ctx.reply('🎭 Janr kiriting:\nMasalan: Drama, Action, Fantasy', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SerialManagementService_1.prototype.handleSerialGenre = function (ctx, genre) {
            return __awaiter(this, void 0, void 0, function () {
                var keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            this.sessionService.updateSessionData(ctx.from.id, { genre: genre });
                            this.sessionService.setStep(ctx.from.id, 3); // DESCRIPTION step
                            keyboard = new grammy_1.Keyboard()
                                .text('Next')
                                .row()
                                .text('❌ Bekor qilish')
                                .resized();
                            return [4 /*yield*/, ctx.reply("📝 Tavsif kiriting:\n\n⏭ O'tkazib yuborish uchun 'Next' yozing", { reply_markup: keyboard })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SerialManagementService_1.prototype.handleSerialDescription = function (ctx, description) {
            return __awaiter(this, void 0, void 0, function () {
                var allFields, message;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            if (description.toLowerCase() === 'next') {
                                this.sessionService.updateSessionData(ctx.from.id, { description: null });
                            }
                            else {
                                this.sessionService.updateSessionData(ctx.from.id, { description: description });
                            }
                            this.sessionService.setStep(ctx.from.id, 4); // FIELD step
                            return [4 /*yield*/, this.fieldService.findAll()];
                        case 1:
                            allFields = _a.sent();
                            if (!(allFields.length === 0)) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply('❌ Hech qanday field topilmadi. Avval field yarating.')];
                        case 2:
                            _a.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [2 /*return*/];
                        case 3:
                            message = '📁 Qaysi fieldni tanlaysiz?\n\n';
                            allFields.forEach(function (field, index) {
                                message += "".concat(index + 1, ". ").concat(field.name, "\n");
                            });
                            message += '\nRaqamini kiriting (masalan: 1)';
                            this.sessionService.updateSessionData(ctx.from.id, { fields: allFields });
                            return [4 /*yield*/, ctx.reply(message, admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SerialManagementService_1.prototype.handleSerialField = function (ctx, fieldIndex, fields) {
            return __awaiter(this, void 0, void 0, function () {
                var selectedField;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            if (!(fieldIndex < 0 || fieldIndex >= fields.length)) return [3 /*break*/, 2];
                            return [4 /*yield*/, ctx.reply("❌ Noto'g'ri raqam. Qaytadan kiriting:")];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2:
                            selectedField = fields[fieldIndex];
                            this.sessionService.updateSessionData(ctx.from.id, {
                                selectedField: selectedField,
                                fieldId: selectedField === null || selectedField === void 0 ? void 0 : selectedField.id,
                            });
                            this.sessionService.setStep(ctx.from.id, 5); // POSTER step
                            return [4 /*yield*/, ctx.reply('🖼 Serial poster rasm yoki videosini yuboring:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SerialManagementService_1.prototype.handleSerialPoster = function (ctx_1, posterFileId_1) {
            return __awaiter(this, arguments, void 0, function (ctx, posterFileId, posterType) {
                if (posterType === void 0) { posterType = 'photo'; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            this.sessionService.updateSessionData(ctx.from.id, {
                                posterFileId: posterFileId,
                                posterType: posterType,
                            });
                            this.sessionService.setStep(ctx.from.id, 6);
                            this.sessionService.updateSessionData(ctx.from.id, {
                                currentEpisode: 1,
                                episodes: [],
                            });
                            return [4 /*yield*/, ctx.reply('📹 1-qism videosini yuboring:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SerialManagementService_1.prototype.handleNewSerialEpisodeVideo = function (ctx, videoFileId, session) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, currentEpisode, episodes, keyboard;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            _a = session.data, currentEpisode = _a.currentEpisode, episodes = _a.episodes;
                            episodes.push({
                                episodeNumber: currentEpisode,
                                videoFileId: videoFileId,
                            });
                            this.sessionService.updateSessionData(ctx.from.id, { episodes: episodes });
                            keyboard = new grammy_1.Keyboard()
                                .text("\u2795 ".concat(currentEpisode + 1, "-qism yuklash"))
                                .row()
                                .text('✅ Tugatish')
                                .row()
                                .text('❌ Bekor qilish')
                                .resized();
                            return [4 /*yield*/, ctx.reply("\u2705 ".concat(currentEpisode, "-qism yuklandi!\n\nDavom ettirasizmi?"), { reply_markup: keyboard })];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SerialManagementService_1.prototype.handleContinueOrFinish = function (ctx, action) {
            return __awaiter(this, void 0, void 0, function () {
                var session, currentEpisode, keyboard;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!session)
                                return [2 /*return*/];
                            if (!action.includes('qism yuklash')) return [3 /*break*/, 2];
                            currentEpisode = session.data.currentEpisode;
                            this.sessionService.updateSessionData(ctx.from.id, {
                                currentEpisode: currentEpisode + 1,
                            });
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCF9 ".concat(currentEpisode + 1, "-qism videosini yuboring:"), admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            if (!(action === '✅ Tugatish')) return [3 /*break*/, 4];
                            keyboard = new grammy_1.Keyboard()
                                .text('✅ Ha, field kanalga tashla')
                                .row()
                                .text("❌ Yo'q, faqat saqlash")
                                .resized();
                            return [4 /*yield*/, ctx.reply('📺 Serial tayyorlandi!\n\nField kanalga tashlansinmi?', {
                                    reply_markup: keyboard,
                                })];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        SerialManagementService_1.prototype.finalizNewSerial = function (ctx, postToField) {
            return __awaiter(this, void 0, void 0, function () {
                var session, _a, code, title, genre, description, fieldId, selectedField, posterFileId, episodes, rating, language, subtitle, existingSerial, dbChannels, episodeData, botInfo, botUsername, _i, episodes_1, ep, videoMessages, _b, dbChannels_1, dbChannel, caption, sentVideo, error_1, serial, _c, episodeData_1, epData, error_2, posterMessageId, caption, keyboard, sentPoster, posterType, error_3;
                var _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!session)
                                return [2 /*return*/];
                            _a = session.data, code = _a.code, title = _a.title, genre = _a.genre, description = _a.description, fieldId = _a.fieldId, selectedField = _a.selectedField, posterFileId = _a.posterFileId, episodes = _a.episodes, rating = _a.rating, language = _a.language, subtitle = _a.subtitle;
                            _f.label = 1;
                        case 1:
                            _f.trys.push([1, 33, , 35]);
                            return [4 /*yield*/, this.serialService.findByCode(code.toString())];
                        case 2:
                            existingSerial = _f.sent();
                            if (!existingSerial) return [3 /*break*/, 4];
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("\u274C ".concat(code, " kodli serial allaqachon yaratilgan!\n\n") +
                                    "\uD83D\uDCFA ".concat(existingSerial.title, "\n") +
                                    "\uD83D\uDCCA Qismlar: ".concat(existingSerial.totalEpisodes), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu('ADMIN'))];
                        case 3:
                            _f.sent();
                            return [2 /*return*/];
                        case 4: return [4 /*yield*/, ctx.reply('⏳ Serial yuklanmoqda...')];
                        case 5:
                            _f.sent();
                            return [4 /*yield*/, this.channelService.findAllDatabase()];
                        case 6:
                            dbChannels = _f.sent();
                            if (!(dbChannels.length === 0)) return [3 /*break*/, 8];
                            return [4 /*yield*/, ctx.reply('❌ Database kanal topilmadi!')];
                        case 7:
                            _f.sent();
                            return [2 /*return*/];
                        case 8:
                            episodeData = [];
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 9:
                            botInfo = _f.sent();
                            botUsername = botInfo.username;
                            _i = 0, episodes_1 = episodes;
                            _f.label = 10;
                        case 10:
                            if (!(_i < episodes_1.length)) return [3 /*break*/, 18];
                            ep = episodes_1[_i];
                            videoMessages = [];
                            _b = 0, dbChannels_1 = dbChannels;
                            _f.label = 11;
                        case 11:
                            if (!(_b < dbChannels_1.length)) return [3 /*break*/, 16];
                            dbChannel = dbChannels_1[_b];
                            _f.label = 12;
                        case 12:
                            _f.trys.push([12, 14, , 15]);
                            caption = this.buildSerialCaption({
                                title: title,
                                code: code,
                                genre: genre,
                                fieldLink: selectedField.channelLink || "https://t.me/".concat((_d = selectedField.channelId) === null || _d === void 0 ? void 0 : _d.replace('@', '').replace('-100', '')),
                                botUsername: botUsername,
                                rating: rating,
                                language: language,
                                subtitle: subtitle,
                                episodeNumber: ep.episodeNumber,
                                isEpisode: true
                            });
                            return [4 /*yield*/, ctx.api.sendVideo(dbChannel.channelId, ep.videoFileId, { caption: caption, parse_mode: "HTML" })];
                        case 13:
                            sentVideo = _f.sent();
                            // ... (davomi)
                            videoMessages.push({
                                channelId: dbChannel.channelId,
                                messageId: sentVideo.message_id,
                            });
                            return [3 /*break*/, 15];
                        case 14:
                            error_1 = _f.sent();
                            this.logger.error("Error uploading to ".concat(dbChannel.channelName, ":"), error_1);
                            return [3 /*break*/, 15];
                        case 15:
                            _b++;
                            return [3 /*break*/, 11];
                        case 16:
                            episodeData.push({
                                episodeNumber: ep.episodeNumber,
                                videoFileId: ep.videoFileId,
                                videoMessageId: JSON.stringify(videoMessages),
                            });
                            _f.label = 17;
                        case 17:
                            _i++;
                            return [3 /*break*/, 10];
                        case 18: return [4 /*yield*/, this.serialService.create({
                                code: code.toString(),
                                title: title,
                                genre: genre,
                                description: description,
                                fieldId: fieldId,
                                posterFileId: posterFileId,
                                totalEpisodes: episodes.length,
                                channelMessageId: 0,
                                language: language || null,
                                rating: rating || null,
                                subtitle: subtitle !== undefined ? subtitle : null,
                            })];
                        case 19:
                            serial = _f.sent();
                            _c = 0, episodeData_1 = episodeData;
                            _f.label = 20;
                        case 20:
                            if (!(_c < episodeData_1.length)) return [3 /*break*/, 25];
                            epData = episodeData_1[_c];
                            _f.label = 21;
                        case 21:
                            _f.trys.push([21, 23, , 24]);
                            return [4 /*yield*/, this.episodeService.create({
                                    serialId: serial.id,
                                    episodeNumber: epData.episodeNumber,
                                    videoFileId: epData.videoFileId,
                                    videoMessageId: epData.videoMessageId,
                                })];
                        case 22:
                            _f.sent();
                            return [3 /*break*/, 24];
                        case 23:
                            error_2 = _f.sent();
                            // Skip if episode already exists (unique constraint error)
                            if (error_2.code === 'P2002') {
                            }
                            else {
                                throw error_2;
                            }
                            return [3 /*break*/, 24];
                        case 24:
                            _c++;
                            return [3 /*break*/, 20];
                        case 25:
                            posterMessageId = 0;
                            if (!postToField) return [3 /*break*/, 31];
                            caption = this.buildSerialCaption({
                                title: title,
                                code: code,
                                genre: genre,
                                fieldLink: selectedField.channelLink || "https://t.me/".concat((_e = selectedField.channelId) === null || _e === void 0 ? void 0 : _e.replace('@', '').replace('-100', '')),
                                botUsername: botUsername,
                                rating: rating,
                                language: language,
                                subtitle: subtitle,
                                totalEpisodes: episodes.length,
                                isEpisode: false
                            });
                            keyboard = new grammy_1.InlineKeyboard().url('✨ Tomosha Qilish', "https://t.me/".concat(this.grammyBot.botUsername, "?start=s").concat(code));
                            sentPoster = void 0;
                            posterType = session.data.posterType || 'photo';
                            if (!(posterType === 'video')) return [3 /*break*/, 27];
                            return [4 /*yield*/, ctx.api.sendVideo(selectedField.channelId, posterFileId, {
                                    caption: caption,
                                    reply_markup: keyboard,
                                    parse_mode: 'HTML',
                                })];
                        case 26:
                            sentPoster = _f.sent();
                            return [3 /*break*/, 29];
                        case 27: return [4 /*yield*/, ctx.api.sendPhoto(selectedField.channelId, posterFileId, {
                                caption: caption,
                                reply_markup: keyboard,
                                parse_mode: 'HTML',
                            })];
                        case 28:
                            sentPoster = _f.sent();
                            _f.label = 29;
                        case 29:
                            posterMessageId = sentPoster.message_id;
                            return [4 /*yield*/, this.serialService.update(serial.id, {
                                    channelMessageId: posterMessageId,
                                })];
                        case 30:
                            _f.sent();
                            _f.label = 31;
                        case 31:
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("\u2705 Serial muvaffaqiyatli yaratildi!\n\n" +
                                    "\uD83D\uDCFA ".concat(title, "\n") +
                                    "\uD83D\uDCF9 Qismlar: ".concat(episodes.length, "\n") +
                                    "\uD83D\uDCE6 Field: ".concat(selectedField.name, "\n") +
                                    (posterMessageId ? "\uD83D\uDD17 Poster Message ID: ".concat(posterMessageId, "\n") : ''), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu('ADMIN'))];
                        case 32:
                            _f.sent();
                            return [3 /*break*/, 35];
                        case 33:
                            error_3 = _f.sent();
                            this.logger.error("[SerialManagementService.createSerial] Error - Admin: ".concat(ctx.from.id, ", Error: ").concat(error_3.message), error_3.stack);
                            return [4 /*yield*/, ctx.reply("\u274C Xatolik: ".concat(error_3.message))];
                        case 34:
                            _f.sent();
                            return [3 /*break*/, 35];
                        case 35: return [2 /*return*/];
                    }
                });
            });
        };
        SerialManagementService_1.prototype.handleAddEpisodeCode = function (ctx, code) {
            return __awaiter(this, void 0, void 0, function () {
                var movie, serial, nextEpisodeNumber, session, nextEpisodeNumber, session;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.movieService.findByCode(code.toString())];
                        case 1:
                            movie = _a.sent();
                            return [4 /*yield*/, this.serialService.findByCode(code.toString())];
                        case 2:
                            serial = _a.sent();
                            if (!(!movie && !serial)) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply('❌ Bu kod bilan kino yoki serial topilmadi!\nBoshqa kod kiriting:', admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4:
                            if (!movie) return [3 /*break*/, 6];
                            nextEpisodeNumber = movie.totalEpisodes + 1;
                            this.sessionService.updateSessionData(ctx.from.id, {
                                contentType: 'movie',
                                movieId: movie.id,
                                movieCode: movie.code,
                                movieTitle: movie.title,
                                movieGenre: movie.genre,
                                movieFieldId: movie.fieldId,
                                movieChannelMessageId: movie.channelMessageId,
                                nextEpisodeNumber: nextEpisodeNumber,
                                addedEpisodes: [],
                                episodesUploaded: 0,
                            });
                            session = this.sessionService.getSession(ctx.from.id);
                            if (session) {
                                session.state = session_interface_1.AdminState.ADDING_EPISODES;
                            }
                            this.sessionService.setStep(ctx.from.id, 1); // VIDEO step
                            return [4 /*yield*/, ctx.reply("\uD83C\uDFAC Kino topildi!\n\n" +
                                    "\uD83C\uDFF7 ".concat(movie.title, "\n") +
                                    "\uD83D\uDCF9 Mavjud qismlar: ".concat(movie.totalEpisodes, "\n\n") +
                                    "\uD83D\uDCF9 ".concat(nextEpisodeNumber, "-qism videosini yuboring:"), admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 5:
                            _a.sent();
                            return [3 /*break*/, 8];
                        case 6:
                            if (!serial) return [3 /*break*/, 8];
                            nextEpisodeNumber = serial.totalEpisodes + 1;
                            this.sessionService.updateSessionData(ctx.from.id, {
                                contentType: 'serial',
                                serialId: serial.id,
                                serialCode: serial.code,
                                serialTitle: serial.title,
                                serialGenre: serial.genre,
                                serialFieldId: serial.fieldId,
                                serialChannelMessageId: serial.channelMessageId,
                                nextEpisodeNumber: nextEpisodeNumber,
                                addedEpisodes: [],
                                episodesUploaded: 0,
                            });
                            session = this.sessionService.getSession(ctx.from.id);
                            if (session) {
                                session.state = session_interface_1.AdminState.ADDING_EPISODES;
                            }
                            this.sessionService.setStep(ctx.from.id, 1); // VIDEO step
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCFA Serial topildi!\n\n" +
                                    "\uD83C\uDFF7 ".concat(serial.title, "\n") +
                                    "\uD83D\uDCF9 Mavjud qismlar: ".concat(serial.totalEpisodes, "\n\n") +
                                    "\uD83D\uDCF9 ".concat(nextEpisodeNumber, "-qism videosini yuboring:"), admin_menu_keyboard_1.AdminKeyboard.getCancelButton())];
                        case 7:
                            _a.sent();
                            _a.label = 8;
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        SerialManagementService_1.prototype.handleExistingContentEpisodeVideo = function (ctx, videoFileId, session) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, nextEpisodeNumber, _c, addedEpisodes, _d, episodesUploaded, contentType, updatedEpisodes, newEpisodesUploaded, keyboard;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            _a = session.data || {}, _b = _a.nextEpisodeNumber, nextEpisodeNumber = _b === void 0 ? 1 : _b, _c = _a.addedEpisodes, addedEpisodes = _c === void 0 ? [] : _c, _d = _a.episodesUploaded, episodesUploaded = _d === void 0 ? 0 : _d, contentType = _a.contentType;
                            updatedEpisodes = __spreadArray(__spreadArray([], addedEpisodes, true), [
                                {
                                    episodeNumber: nextEpisodeNumber,
                                    videoFileId: videoFileId,
                                },
                            ], false);
                            newEpisodesUploaded = episodesUploaded + 1;
                            this.sessionService.updateSessionData(ctx.from.id, {
                                addedEpisodes: updatedEpisodes,
                                nextEpisodeNumber: nextEpisodeNumber + 1,
                                episodesUploaded: newEpisodesUploaded,
                            });
                            keyboard = new grammy_1.Keyboard()
                                .text("\u2795 ".concat(nextEpisodeNumber + 1, "-qism yuklash"))
                                .row()
                                .text('✅ Tugatish')
                                .row()
                                .text('❌ Bekor qilish')
                                .resized();
                            return [4 /*yield*/, ctx.reply("\u2705 ".concat(nextEpisodeNumber, "-qism yuklandi!\n\nDavom ettirasizmi?"), { reply_markup: keyboard })];
                        case 1:
                            _e.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SerialManagementService_1.prototype.finalizeAddingEpisodes = function (ctx, updateField) {
            return __awaiter(this, void 0, void 0, function () {
                var session, _a, contentType, movieId, movieCode, movieTitle, movieGenre, movieFieldId, movieChannelMessageId, serialId, serialCode, serialTitle, serialGenre, serialFieldId, serialChannelMessageId, _b, addedEpisodes, dbChannels, botInfo, botUsername, _i, addedEpisodes_1, ep, videoMessages, _c, dbChannels_2, dbChannel, caption, sentVideo, error_4, allEpisodes, totalEpisodes, field, caption, keyboard, error_5, _d, addedEpisodes_2, ep, videoMessages, _e, dbChannels_3, dbChannel, serialData, caption, sentVideo, error_6, allEpisodes, totalEpisodes, field, serialData, caption, keyboard, error_7, error_8;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            session = this.sessionService.getSession(ctx.from.id);
                            if (!(!session || !session.data)) return [3 /*break*/, 2];
                            return [4 /*yield*/, ctx.reply('❌ Session topilmadi. Qaytadan boshlang.')];
                        case 1:
                            _f.sent();
                            return [2 /*return*/];
                        case 2:
                            _a = session.data, contentType = _a.contentType, movieId = _a.movieId, movieCode = _a.movieCode, movieTitle = _a.movieTitle, movieGenre = _a.movieGenre, movieFieldId = _a.movieFieldId, movieChannelMessageId = _a.movieChannelMessageId, serialId = _a.serialId, serialCode = _a.serialCode, serialTitle = _a.serialTitle, serialGenre = _a.serialGenre, serialFieldId = _a.serialFieldId, serialChannelMessageId = _a.serialChannelMessageId, _b = _a.addedEpisodes, addedEpisodes = _b === void 0 ? [] : _b;
                            if (!(addedEpisodes.length === 0)) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply("❌ Hech qanday qism qo'shilmadi.")];
                        case 3:
                            _f.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [2 /*return*/];
                        case 4:
                            _f.trys.push([4, 54, , 56]);
                            return [4 /*yield*/, ctx.reply('⏳ Qismlar yuklanmoqda...')];
                        case 5:
                            _f.sent();
                            return [4 /*yield*/, this.channelService.findAllDatabase()];
                        case 6:
                            dbChannels = _f.sent();
                            return [4 /*yield*/, ctx.api.getMe()];
                        case 7:
                            botInfo = _f.sent();
                            botUsername = botInfo.username;
                            if (!(contentType === 'movie')) return [3 /*break*/, 28];
                            if (!!movieId) return [3 /*break*/, 9];
                            return [4 /*yield*/, ctx.reply("❌ Kino ma'lumotlari topilmadi.")];
                        case 8:
                            _f.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [2 /*return*/];
                        case 9:
                            _i = 0, addedEpisodes_1 = addedEpisodes;
                            _f.label = 10;
                        case 10:
                            if (!(_i < addedEpisodes_1.length)) return [3 /*break*/, 19];
                            ep = addedEpisodes_1[_i];
                            videoMessages = [];
                            _c = 0, dbChannels_2 = dbChannels;
                            _f.label = 11;
                        case 11:
                            if (!(_c < dbChannels_2.length)) return [3 /*break*/, 16];
                            dbChannel = dbChannels_2[_c];
                            _f.label = 12;
                        case 12:
                            _f.trys.push([12, 14, , 15]);
                            caption = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Kino nomi: ".concat(movieTitle, "\n\u251C\u2023 Kino kodi: ").concat(movieCode, "\n\u251C\u2023 Qism: ").concat(ep.episodeNumber, "\n\u251C\u2023 Janrlari: ").concat(movieGenre || "Noma'lum", "\n\u251C\u2023 Kanal: ").concat(dbChannel.channelLink || 'https://t.me/' + dbChannel.channelName, "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\u25B6\uFE0F Kinoning to'liq qismini https://t.me/").concat(botUsername, "?start=").concat(movieCode, " dan tomosha qilishingiz mumkin!\n\n<blockquote expandable>\u26A0\uFE0F ESLATMA:\nBiz yuklayotgan kinolar turli saytlardan olinadi.\n\uD83C\uDFB0 Ba'zi kinolarda kazino, qimor yoki \"pulni ko'paytirib beramiz\" degan reklama chiqishi mumkin.\n\uD83D\uDEAB Bunday reklamalarga aslo ishonmang! Ular firibgarlar va sizni aldaydi.\n\uD83D\uDD1E Ba'zi sahnalar 18+ bo'lishi mumkin \u2013 agar noqulay bo'lsa, ko'rishni to'xtating.</blockquote>");
                            return [4 /*yield*/, ctx.api.sendVideo(dbChannel.channelId, ep.videoFileId, { caption: caption, parse_mode: 'HTML' })];
                        case 13:
                            sentVideo = _f.sent();
                            videoMessages.push({
                                channelId: dbChannel.channelId,
                                messageId: sentVideo.message_id,
                            });
                            return [3 /*break*/, 15];
                        case 14:
                            error_4 = _f.sent();
                            this.logger.error("[SerialManagementService.uploadMovieEpisodes] Error uploading - Movie: ".concat(movieId, ", Episode: ").concat(ep.episodeNumber, ", Error: ").concat(error_4.message), error_4.stack);
                            return [3 /*break*/, 15];
                        case 15:
                            _c++;
                            return [3 /*break*/, 11];
                        case 16: return [4 /*yield*/, this.movieEpisodeService.create({
                                movieId: movieId,
                                episodeNumber: ep.episodeNumber,
                                videoFileId: ep.videoFileId,
                                videoMessageId: JSON.stringify(videoMessages),
                            })];
                        case 17:
                            _f.sent();
                            _f.label = 18;
                        case 18:
                            _i++;
                            return [3 /*break*/, 10];
                        case 19: return [4 /*yield*/, this.movieEpisodeService.findByMovieId(movieId)];
                        case 20:
                            allEpisodes = _f.sent();
                            totalEpisodes = allEpisodes.length > 0 ? 1 + allEpisodes.length : 1;
                            return [4 /*yield*/, this.movieService.update(movieId, { totalEpisodes: totalEpisodes })];
                        case 21:
                            _f.sent();
                            if (!(updateField && movieChannelMessageId && movieFieldId)) return [3 /*break*/, 26];
                            return [4 /*yield*/, this.fieldService.findOne(movieFieldId)];
                        case 22:
                            field = _f.sent();
                            if (!field) return [3 /*break*/, 26];
                            caption = "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u251C\u2023 Kino nomi: ".concat(movieTitle, "\n\u251C\u2023 Kino kodi: ").concat(movieCode, "\n\u251C\u2023 Qismlar: ").concat(totalEpisodes, "\n\u251C\u2023 Janrlari: ").concat(movieGenre || "Noma'lum", "\n\u251C\u2023 Kanal: ").concat(field.channelLink || '@' + field.name, "\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\u25B6\uFE0F Kinoning to'liq qismlarini https://t.me/").concat(this.grammyBot.botUsername, "?start=").concat(movieCode, " dan tomosha qilishingiz mumkin!\n\n<blockquote expandable>\u26A0\uFE0F ESLATMA:\nBiz yuklayotgan kinolar turli saytlardan olinadi.\n\uD83C\uDFB0 Ba'zi kinolarda kazino, qimor yoki \"pulni ko'paytirib beramiz\" degan reklama chiqishi mumkin.\n\uD83D\uDEAB Bunday reklamalarga aslo ishonmang! Ular firibgarlar va sizni aldaydi.\n\uD83D\uDD1E Ba'zi sahnalar 18+ bo'lishi mumkin \u2013 agar noqulay bo'lsa, ko'rishni to'xtating.</blockquote>");
                            keyboard = new grammy_1.InlineKeyboard().url('✨ Tomosha Qilish', "https://t.me/".concat(this.grammyBot.botUsername, "?start=").concat(movieCode));
                            _f.label = 23;
                        case 23:
                            _f.trys.push([23, 25, , 26]);
                            return [4 /*yield*/, ctx.api.editMessageCaption(field.channelId, movieChannelMessageId, { caption: caption, reply_markup: keyboard, parse_mode: 'HTML' })];
                        case 24:
                            _f.sent();
                            return [3 /*break*/, 26];
                        case 25:
                            error_5 = _f.sent();
                            this.logger.error('Error updating movie field channel poster:', error_5);
                            return [3 /*break*/, 26];
                        case 26:
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("\u2705 Qismlar muvaffaqiyatli qo'shildi!\n\n" +
                                    "\uD83C\uDFAC ".concat(movieTitle, "\n") +
                                    "\uD83D\uDCF9 Jami qismlar: ".concat(totalEpisodes, "\n") +
                                    "\u2795 Qo'shildi: ".concat(addedEpisodes.length, " ta"), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu('ADMIN'))];
                        case 27:
                            _f.sent();
                            return [3 /*break*/, 53];
                        case 28:
                            if (!(contentType === 'serial')) return [3 /*break*/, 51];
                            if (!!serialId) return [3 /*break*/, 30];
                            return [4 /*yield*/, ctx.reply("❌ Serial ma'lumotlari topilmadi.")];
                        case 29:
                            _f.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [2 /*return*/];
                        case 30:
                            _d = 0, addedEpisodes_2 = addedEpisodes;
                            _f.label = 31;
                        case 31:
                            if (!(_d < addedEpisodes_2.length)) return [3 /*break*/, 41];
                            ep = addedEpisodes_2[_d];
                            videoMessages = [];
                            _e = 0, dbChannels_3 = dbChannels;
                            _f.label = 32;
                        case 32:
                            if (!(_e < dbChannels_3.length)) return [3 /*break*/, 38];
                            dbChannel = dbChannels_3[_e];
                            _f.label = 33;
                        case 33:
                            _f.trys.push([33, 36, , 37]);
                            return [4 /*yield*/, this.serialService.findById(serialId)];
                        case 34:
                            serialData = _f.sent();
                            caption = this.buildSerialCaption({
                                title: serialTitle,
                                code: serialCode,
                                genre: serialGenre || "Noma'lum",
                                fieldLink: dbChannel.channelLink || dbChannel.channelId,
                                botUsername: botUsername,
                                rating: (serialData === null || serialData === void 0 ? void 0 : serialData.rating) || undefined,
                                language: (serialData === null || serialData === void 0 ? void 0 : serialData.language) || undefined,
                                subtitle: (serialData === null || serialData === void 0 ? void 0 : serialData.subtitle) !== null ? serialData === null || serialData === void 0 ? void 0 : serialData.subtitle : undefined,
                                episodeNumber: ep.episodeNumber,
                                isEpisode: true
                            });
                            return [4 /*yield*/, ctx.api.sendVideo(dbChannel.channelId, ep.videoFileId, { caption: caption, parse_mode: 'HTML' })];
                        case 35:
                            sentVideo = _f.sent();
                            videoMessages.push({
                                channelId: dbChannel.channelId,
                                messageId: sentVideo.message_id,
                            });
                            return [3 /*break*/, 37];
                        case 36:
                            error_6 = _f.sent();
                            this.logger.error("[SerialManagementService.uploadEpisodes] Error uploading - Serial: ".concat(serialId, ", Episode: ").concat(ep.episodeNumber, ", Error: ").concat(error_6.message), error_6.stack);
                            return [3 /*break*/, 37];
                        case 37:
                            _e++;
                            return [3 /*break*/, 32];
                        case 38: return [4 /*yield*/, this.episodeService.create({
                                serialId: serialId,
                                episodeNumber: ep.episodeNumber,
                                videoFileId: ep.videoFileId,
                                videoMessageId: JSON.stringify(videoMessages),
                            })];
                        case 39:
                            _f.sent();
                            _f.label = 40;
                        case 40:
                            _d++;
                            return [3 /*break*/, 31];
                        case 41: return [4 /*yield*/, this.episodeService.findBySerialId(serialId)];
                        case 42:
                            allEpisodes = _f.sent();
                            totalEpisodes = allEpisodes.length;
                            return [4 /*yield*/, this.serialService.update(serialId, { totalEpisodes: totalEpisodes })];
                        case 43:
                            _f.sent();
                            if (!(updateField && serialChannelMessageId && serialFieldId)) return [3 /*break*/, 49];
                            return [4 /*yield*/, this.fieldService.findOne(serialFieldId)];
                        case 44:
                            field = _f.sent();
                            if (!field) return [3 /*break*/, 49];
                            return [4 /*yield*/, this.serialService.findById(serialId)];
                        case 45:
                            serialData = _f.sent();
                            caption = this.buildSerialCaption({
                                title: serialTitle,
                                code: serialCode,
                                genre: serialGenre || "Noma'lum",
                                fieldLink: field.channelLink || '@' + field.name,
                                botUsername: this.grammyBot.botUsername,
                                rating: (serialData === null || serialData === void 0 ? void 0 : serialData.rating) || undefined,
                                language: (serialData === null || serialData === void 0 ? void 0 : serialData.language) || undefined,
                                subtitle: (serialData === null || serialData === void 0 ? void 0 : serialData.subtitle) !== null ? serialData === null || serialData === void 0 ? void 0 : serialData.subtitle : undefined,
                                totalEpisodes: totalEpisodes,
                                isEpisode: false
                            });
                            keyboard = new grammy_1.InlineKeyboard().url('✨ Tomosha Qilish', "https://t.me/".concat(this.grammyBot.botUsername, "?start=s").concat(serialCode));
                            _f.label = 46;
                        case 46:
                            _f.trys.push([46, 48, , 49]);
                            return [4 /*yield*/, ctx.api.editMessageCaption(field.channelId, serialChannelMessageId, { caption: caption, reply_markup: keyboard, parse_mode: 'HTML' })];
                        case 47:
                            _f.sent();
                            return [3 /*break*/, 49];
                        case 48:
                            error_7 = _f.sent();
                            this.logger.error('Error updating serial field channel poster:', error_7);
                            return [3 /*break*/, 49];
                        case 49:
                            this.sessionService.clearSession(ctx.from.id);
                            return [4 /*yield*/, ctx.reply("\u2705 Qismlar muvaffaqiyatli qo'shildi!\n\n" +
                                    "\uD83D\uDCFA ".concat(serialTitle, "\n") +
                                    "\uD83D\uDCF9 Jami qismlar: ".concat(totalEpisodes, "\n") +
                                    "\u2795 Qo'shildi: ".concat(addedEpisodes.length, " ta"), admin_menu_keyboard_1.AdminKeyboard.getAdminMainMenu('ADMIN'))];
                        case 50:
                            _f.sent();
                            return [3 /*break*/, 53];
                        case 51: return [4 /*yield*/, ctx.reply("❌ Noto'g'ri content turi.")];
                        case 52:
                            _f.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            _f.label = 53;
                        case 53: return [3 /*break*/, 56];
                        case 54:
                            error_8 = _f.sent();
                            this.logger.error("[SerialManagementService.finalizeEpisodes] Error - SerialID: ".concat(serialId, ", Error: ").concat(error_8.message), error_8.stack);
                            return [4 /*yield*/, ctx.reply("\u274C Xatolik: ".concat((error_8 === null || error_8 === void 0 ? void 0 : error_8.message) || "Noma'lum xatolik"))];
                        case 55:
                            _f.sent();
                            this.sessionService.clearSession(ctx.from.id);
                            return [3 /*break*/, 56];
                        case 56: return [2 /*return*/];
                    }
                });
            });
        };
        return SerialManagementService_1;
    }());
    __setFunctionName(_classThis, "SerialManagementService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SerialManagementService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SerialManagementService = _classThis;
}();
exports.SerialManagementService = SerialManagementService;
