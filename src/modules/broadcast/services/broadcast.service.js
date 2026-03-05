"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.BroadcastService = void 0;
var common_1 = require("@nestjs/common");
var client_1 = require("@prisma/client");
var BroadcastService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var BroadcastService = _classThis = /** @class */ (function () {
        function BroadcastService_1(prisma) {
            this.prisma = prisma;
        }
        BroadcastService_1.prototype.create = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.broadcast.create({
                            data: {
                                type: data.type,
                                messageText: data.messageText,
                                createdBy: data.createdBy,
                                mediaFileId: data.mediaFileId,
                                status: 'PENDING',
                            },
                        })];
                });
            });
        };
        BroadcastService_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.broadcast.findMany({
                            orderBy: { createdAt: 'desc' },
                        })];
                });
            });
        };
        BroadcastService_1.prototype.sendBroadcast = function (bot, broadcastId) {
            return __awaiter(this, void 0, void 0, function () {
                var broadcast, users, result, _i, users_1, user, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.broadcast.findUnique({
                                where: { id: broadcastId },
                            })];
                        case 1:
                            broadcast = _a.sent();
                            if (!broadcast) {
                                throw new Error('Broadcast not found');
                            }
                            return [4 /*yield*/, this.getTargetUsers(broadcast.type)];
                        case 2:
                            users = _a.sent();
                            result = {
                                total: users.length,
                                success: 0,
                                failed: 0,
                                failedUsers: [],
                            };
                            return [4 /*yield*/, this.updateStatus(broadcastId, 'IN_PROGRESS')];
                        case 3:
                            _a.sent();
                            _i = 0, users_1 = users;
                            _a.label = 4;
                        case 4:
                            if (!(_i < users_1.length)) return [3 /*break*/, 10];
                            user = users_1[_i];
                            _a.label = 5;
                        case 5:
                            _a.trys.push([5, 8, , 9]);
                            return [4 /*yield*/, this.sendToUser(bot, user.telegramId, broadcast)];
                        case 6:
                            _a.sent();
                            result.success++;
                            return [4 /*yield*/, this.delay(50)];
                        case 7:
                            _a.sent();
                            return [3 /*break*/, 9];
                        case 8:
                            error_1 = _a.sent();
                            result.failed++;
                            result.failedUsers.push(Number(user.telegramId));
                            return [3 /*break*/, 9];
                        case 9:
                            _i++;
                            return [3 /*break*/, 4];
                        case 10: return [4 /*yield*/, this.prisma.broadcast.update({
                                where: { id: broadcastId },
                                data: {
                                    status: 'COMPLETED',
                                    sentCount: result.success,
                                    failedCount: result.failed,
                                    completedAt: new Date(),
                                },
                            })];
                        case 11:
                            _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        BroadcastService_1.prototype.getTargetUsers = function (type) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (type) {
                        case client_1.BroadcastType.ALL:
                            return [2 /*return*/, this.prisma.user.findMany({
                                    where: { isBlocked: false },
                                })];
                        case client_1.BroadcastType.PREMIUM:
                            return [2 /*return*/, this.prisma.user.findMany({
                                    where: {
                                        isPremium: true,
                                        isBlocked: false,
                                    },
                                })];
                        case client_1.BroadcastType.FREE:
                            return [2 /*return*/, this.prisma.user.findMany({
                                    where: {
                                        isPremium: false,
                                        isBlocked: false,
                                    },
                                })];
                        default:
                            return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
                });
            });
        };
        BroadcastService_1.prototype.sendToUser = function (bot, telegramId, broadcast) {
            return __awaiter(this, void 0, void 0, function () {
                var chatId, options;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            chatId = parseInt(telegramId);
                            options = {};
                            if (broadcast.buttonText && broadcast.buttonUrl) {
                                options.reply_markup = {
                                    inline_keyboard: [
                                        [
                                            {
                                                text: broadcast.buttonText,
                                                url: broadcast.buttonUrl,
                                            },
                                        ],
                                    ],
                                };
                            }
                            if (!broadcast.photoFileId) return [3 /*break*/, 2];
                            return [4 /*yield*/, bot.api.sendPhoto(telegramId, broadcast.photoFileId, __assign({ caption: broadcast.messageText || broadcast.message }, options))];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 2:
                            if (!broadcast.videoFileId) return [3 /*break*/, 4];
                            return [4 /*yield*/, bot.api.sendVideo(telegramId, broadcast.videoFileId, __assign({ caption: broadcast.messageText || broadcast.message }, options))];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 4: return [4 /*yield*/, bot.api.sendMessage(telegramId, broadcast.messageText || broadcast.message, options)];
                        case 5:
                            _a.sent();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        BroadcastService_1.prototype.updateStatus = function (broadcastId, status) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.broadcast.update({
                                where: { id: broadcastId },
                                data: { status: status },
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        BroadcastService_1.prototype.delay = function (ms) {
            return new Promise(function (resolve) { return setTimeout(resolve, ms); });
        };
        BroadcastService_1.prototype.getStatistics = function (broadcastId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.broadcast.findUnique({
                            where: { id: broadcastId },
                            select: {
                                sentCount: true,
                                failedCount: true,
                                status: true,
                                createdAt: true,
                                completedAt: true,
                            },
                        })];
                });
            });
        };
        return BroadcastService_1;
    }());
    __setFunctionName(_classThis, "BroadcastService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BroadcastService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BroadcastService = _classThis;
}();
exports.BroadcastService = BroadcastService;
