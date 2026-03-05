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
exports.ChannelStatusService = void 0;
var common_1 = require("@nestjs/common");
var client_1 = require("@prisma/client");
var ChannelStatusService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ChannelStatusService = _classThis = /** @class */ (function () {
        function ChannelStatusService_1(prisma) {
            this.prisma = prisma;
            this.logger = new common_1.Logger(ChannelStatusService.name);
        }
        ChannelStatusService_1.prototype.updateStatus = function (userTelegramId, channelTelegramId, status) {
            return __awaiter(this, void 0, void 0, function () {
                var user, channel, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            return [4 /*yield*/, this.prisma.user.findUnique({
                                    where: { telegramId: userTelegramId },
                                })];
                        case 1:
                            user = _a.sent();
                            if (!user) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findFirst({
                                    where: { channelId: channelTelegramId, isActive: true },
                                })];
                        case 2:
                            channel = _a.sent();
                            if (!channel) {
                                return [2 /*return*/];
                            }
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
                                        status: status,
                                        lastUpdated: new Date(),
                                    },
                                    update: {
                                        status: status,
                                        lastUpdated: new Date(),
                                    },
                                })];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _a.sent();
                            this.logger.error("Error updating status for user ".concat(userTelegramId, ", channel ").concat(channelTelegramId, ":"), error_1);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        ChannelStatusService_1.prototype.getUserChannelStatuses = function (userTelegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var user, channels;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.user.findUnique({
                                where: { telegramId: userTelegramId },
                            })];
                        case 1:
                            user = _a.sent();
                            if (!user) {
                                return [2 /*return*/, []];
                            }
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findMany({
                                    where: { isActive: true },
                                    orderBy: { order: 'asc' },
                                    include: {
                                        userStatuses: {
                                            where: { userId: user.id },
                                        },
                                    },
                                })];
                        case 2:
                            channels = _a.sent();
                            return [2 /*return*/, channels.map(function (channel) {
                                    var _a;
                                    return ({
                                        channelId: channel.id,
                                        channelTelegramId: channel.channelId,
                                        channelName: channel.channelName,
                                        channelType: channel.type,
                                        channelLink: channel.channelLink,
                                        status: ((_a = channel.userStatuses[0]) === null || _a === void 0 ? void 0 : _a.status) || client_1.ChannelStatus.left,
                                    });
                                })];
                    }
                });
            });
        };
        ChannelStatusService_1.prototype.canUserAccessBot = function (userTelegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var statuses, nonExternalStatuses, externalStatuses, user, canAccess;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getUserChannelStatuses(userTelegramId)];
                        case 1:
                            statuses = _a.sent();
                            nonExternalStatuses = statuses.filter(function (s) { return s.channelType !== 'EXTERNAL'; });
                            externalStatuses = statuses.filter(function (s) { return s.channelType === 'EXTERNAL'; });
                            return [4 /*yield*/, this.prisma.user.findUnique({
                                    where: { telegramId: userTelegramId },
                                })];
                        case 2:
                            user = _a.sent();
                            canAccess = nonExternalStatuses.every(function (s) {
                                // For all channel types including PRIVATE_WITH_ADMIN_APPROVAL,
                                // user must have joined or sent a request
                                return (s.status === client_1.ChannelStatus.joined ||
                                    s.status === client_1.ChannelStatus.requested);
                            });
                            return [2 /*return*/, {
                                    canAccess: canAccess,
                                    statuses: __spreadArray(__spreadArray([], nonExternalStatuses.map(function (s) { return ({
                                        channelId: s.channelId,
                                        channelName: s.channelName,
                                        channelLink: s.channelLink,
                                        channelType: s.channelType,
                                        status: s.status,
                                    }); }), true), externalStatuses.map(function (s) { return ({
                                        channelId: s.channelId,
                                        channelName: s.channelName,
                                        channelLink: s.channelLink,
                                        channelType: s.channelType,
                                        status: client_1.ChannelStatus.left,
                                    }); }), true),
                                }];
                    }
                });
            });
        };
        ChannelStatusService_1.prototype.syncUserChannelStatuses = function (userTelegramId, api) {
            return __awaiter(this, void 0, void 0, function () {
                var user, channels, _i, channels_1, channel, member, newStatus, existingStatus, error_2, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 14, , 15]);
                            return [4 /*yield*/, this.prisma.user.findUnique({
                                    where: { telegramId: userTelegramId },
                                })];
                        case 1:
                            user = _a.sent();
                            if (!user) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findMany({
                                    where: { isActive: true },
                                })];
                        case 2:
                            channels = _a.sent();
                            _i = 0, channels_1 = channels;
                            _a.label = 3;
                        case 3:
                            if (!(_i < channels_1.length)) return [3 /*break*/, 13];
                            channel = channels_1[_i];
                            // EXTERNAL va channelId bo'lmagan kanallar uchun API tekshirish yo'q
                            if (channel.type === 'EXTERNAL' || !channel.channelId) {
                                return [3 /*break*/, 12];
                            }
                            // PRIVATE_WITH_ADMIN_APPROVAL uchun faqat database statusga qaraymiz
                            if (channel.type === 'PRIVATE_WITH_ADMIN_APPROVAL') {
                                return [3 /*break*/, 12];
                            }
                            _a.label = 4;
                        case 4:
                            _a.trys.push([4, 11, , 12]);
                            return [4 /*yield*/, api.getChatMember(channel.channelId, parseInt(userTelegramId))];
                        case 5:
                            member = _a.sent();
                            newStatus = void 0;
                            if (!(member.status === 'member' ||
                                member.status === 'administrator' ||
                                member.status === 'creator' ||
                                (member.status === 'restricted' &&
                                    'is_member' in member &&
                                    member.is_member))) return [3 /*break*/, 6];
                            newStatus = client_1.ChannelStatus.joined;
                            return [3 /*break*/, 9];
                        case 6:
                            if (!(member.status === 'left' || member.status === 'kicked')) return [3 /*break*/, 8];
                            return [4 /*yield*/, this.prisma.userChannelStatus.findUnique({
                                    where: {
                                        userId_channelId: {
                                            userId: user.id,
                                            channelId: channel.id,
                                        },
                                    },
                                })];
                        case 7:
                            existingStatus = _a.sent();
                            if ((existingStatus === null || existingStatus === void 0 ? void 0 : existingStatus.status) === client_1.ChannelStatus.requested) {
                                return [3 /*break*/, 12]; // So'rov yuborilgan statusni saqlab qolish
                            }
                            newStatus = client_1.ChannelStatus.left;
                            return [3 /*break*/, 9];
                        case 8:
                            newStatus = client_1.ChannelStatus.left;
                            _a.label = 9;
                        case 9: return [4 /*yield*/, this.updateStatus(userTelegramId, channel.channelId, newStatus)];
                        case 10:
                            _a.sent();
                            return [3 /*break*/, 12];
                        case 11:
                            error_2 = _a.sent();
                            this.logger.error("Error checking channel ".concat(channel.channelName, " for user ").concat(userTelegramId, ":"), error_2 instanceof Error ? error_2.message : String(error_2));
                            return [3 /*break*/, 12];
                        case 12:
                            _i++;
                            return [3 /*break*/, 3];
                        case 13: return [3 /*break*/, 15];
                        case 14:
                            error_3 = _a.sent();
                            this.logger.error("Error syncing statuses for user ".concat(userTelegramId, ":"), error_3);
                            return [3 /*break*/, 15];
                        case 15: return [2 /*return*/];
                    }
                });
            });
        };
        return ChannelStatusService_1;
    }());
    __setFunctionName(_classThis, "ChannelStatusService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ChannelStatusService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ChannelStatusService = _classThis;
}();
exports.ChannelStatusService = ChannelStatusService;
