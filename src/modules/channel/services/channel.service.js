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
exports.ChannelService = void 0;
var common_1 = require("@nestjs/common");
var ChannelService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ChannelService = _classThis = /** @class */ (function () {
        function ChannelService_1(prisma) {
            this.prisma = prisma;
            this.logger = new common_1.Logger(ChannelService.name);
        }
        ChannelService_1.prototype.create = function (channelId, channelName, channelLink, order) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.mandatoryChannel.create({
                            data: {
                                channelId: channelId,
                                channelName: channelName,
                                channelLink: channelLink,
                                order: order || 0,
                            },
                        })];
                });
            });
        };
        ChannelService_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.mandatoryChannel.findMany({
                            where: { isActive: true },
                            orderBy: { order: 'asc' },
                            select: {
                                id: true,
                                createdAt: true,
                                channelId: true,
                                channelLink: true,
                                isActive: true,
                                type: true,
                                channelName: true,
                                order: true,
                                memberLimit: true,
                                currentMembers: true,
                                pendingRequests: true,
                            },
                        })];
                });
            });
        };
        ChannelService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.mandatoryChannel.findUnique({
                            where: { id: id },
                        })];
                });
            });
        };
        ChannelService_1.prototype.update = function (id, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.mandatoryChannel.update({
                            where: { id: id },
                            data: data,
                        })];
                });
            });
        };
        ChannelService_1.prototype.delete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.mandatoryChannel.update({
                            where: { id: id },
                            data: { isActive: false },
                        })];
                });
            });
        };
        ChannelService_1.prototype.reorder = function (ids) {
            return __awaiter(this, void 0, void 0, function () {
                var updates;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            updates = ids.map(function (id, index) {
                                return _this.prisma.mandatoryChannel.update({
                                    where: { id: id },
                                    data: { order: index },
                                });
                            });
                            return [4 /*yield*/, this.prisma.$transaction(updates)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ChannelService_1.prototype.findAllMandatory = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.mandatoryChannel.findMany({
                            where: { isActive: true },
                            orderBy: { order: 'asc' },
                            select: {
                                id: true,
                                createdAt: true,
                                channelId: true,
                                channelLink: true,
                                isActive: true,
                                type: true,
                                channelName: true,
                                order: true,
                                memberLimit: true,
                                currentMembers: true,
                                pendingRequests: true,
                            },
                        })];
                });
            });
        };
        ChannelService_1.prototype.findAllDatabase = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.databaseChannel.findMany({
                            where: { isActive: true },
                            orderBy: { createdAt: 'desc' },
                        })];
                });
            });
        };
        ChannelService_1.prototype.findDatabaseChannelByChannelId = function (channelId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.databaseChannel.findUnique({
                            where: { channelId: channelId },
                        })];
                });
            });
        };
        ChannelService_1.prototype.createDatabaseChannel = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.prisma.databaseChannel.create({
                            data: {
                                channelId: data.channelId,
                                channelName: data.channelName,
                                channelLink: data.channelLink,
                                isActive: (_a = data.isActive) !== null && _a !== void 0 ? _a : true,
                            },
                        })];
                });
            });
        };
        ChannelService_1.prototype.createMandatoryChannel = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.prisma.mandatoryChannel.create({
                            data: {
                                channelId: data.channelId || null,
                                channelName: data.channelName,
                                channelLink: data.channelLink,
                                type: data.type,
                                isActive: (_a = data.isActive) !== null && _a !== void 0 ? _a : true,
                                memberLimit: data.memberLimit,
                                currentMembers: 0,
                                pendingRequests: 0,
                                order: 0,
                            },
                        })];
                });
            });
        };
        ChannelService_1.prototype.incrementMemberCount = function (channelId) {
            return __awaiter(this, void 0, void 0, function () {
                var channel, updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.mandatoryChannel.findUnique({
                                where: { id: channelId },
                            })];
                        case 1:
                            channel = _a.sent();
                            if (!channel)
                                return [2 /*return*/, null];
                            return [4 /*yield*/, this.prisma.mandatoryChannel.update({
                                    where: { id: channelId },
                                    data: {
                                        currentMembers: { increment: 1 },
                                    },
                                })];
                        case 2:
                            updated = _a.sent();
                            if (!(updated.memberLimit !== null &&
                                updated.currentMembers >= updated.memberLimit)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.prisma.mandatoryChannel.update({
                                    where: { id: channelId },
                                    data: { isActive: false },
                                })];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/, updated];
                    }
                });
            });
        };
        ChannelService_1.prototype.incrementPendingRequests = function (channelId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.mandatoryChannel.update({
                            where: { id: channelId },
                            data: {
                                pendingRequests: { increment: 1 },
                            },
                        })];
                });
            });
        };
        ChannelService_1.prototype.decrementPendingRequests = function (channelId) {
            return __awaiter(this, void 0, void 0, function () {
                var channel;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.mandatoryChannel.findUnique({
                                where: { id: channelId },
                            })];
                        case 1:
                            channel = _a.sent();
                            if (!channel || channel.pendingRequests <= 0)
                                return [2 /*return*/, null];
                            return [2 /*return*/, this.prisma.mandatoryChannel.update({
                                    where: { id: channelId },
                                    data: {
                                        pendingRequests: { decrement: 1 },
                                    },
                                })];
                    }
                });
            });
        };
        ChannelService_1.prototype.deleteDatabaseChannel = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        // Birinchi bog'liq Field larni tozalash
                        return [4 /*yield*/, this.prisma.field.updateMany({
                                where: { databaseChannelId: id },
                                data: { databaseChannelId: null },
                            })];
                        case 1:
                            // Birinchi bog'liq Field larni tozalash
                            _a.sent();
                            // Database kanalning o'zini to'liq o'chirish
                            return [2 /*return*/, this.prisma.databaseChannel.delete({
                                    where: { id: id },
                                })];
                    }
                });
            });
        };
        ChannelService_1.prototype.checkSubscription = function (userId, api) {
            return __awaiter(this, void 0, void 0, function () {
                var channels, notSubscribed, _i, channels_1, channel, member, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.mandatoryChannel.findMany({
                                where: { isActive: true },
                                orderBy: { order: 'asc' },
                            })];
                        case 1:
                            channels = _a.sent();
                            notSubscribed = [];
                            _i = 0, channels_1 = channels;
                            _a.label = 2;
                        case 2:
                            if (!(_i < channels_1.length)) return [3 /*break*/, 7];
                            channel = channels_1[_i];
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            return [4 /*yield*/, api.getChatMember(channel.channelId, userId)];
                        case 4:
                            member = _a.sent();
                            if (!['member', 'administrator', 'creator'].includes(member.status)) {
                                notSubscribed.push({
                                    channelId: channel.channelId,
                                    channelName: channel.channelName,
                                    channelLink: channel.channelLink,
                                });
                            }
                            return [3 /*break*/, 6];
                        case 5:
                            error_1 = _a.sent();
                            notSubscribed.push({
                                channelId: channel.channelId,
                                channelName: channel.channelName,
                                channelLink: channel.channelLink,
                            });
                            return [3 /*break*/, 6];
                        case 6:
                            _i++;
                            return [3 /*break*/, 2];
                        case 7: return [2 /*return*/, {
                                isSubscribed: notSubscribed.length === 0,
                                notSubscribedChannels: notSubscribed,
                            }];
                    }
                });
            });
        };
        ChannelService_1.prototype.checkUserSubscriptionStatus = function (userId, api, joinRequestCache) {
            return __awaiter(this, void 0, void 0, function () {
                var allChannels, unsubscribedChannels, subscribedChannels, _i, allChannels_1, channel, cacheKey, hasPendingRequest, member, isSubscribed, hasAccess, user, userChannelStatus, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.mandatoryChannel.findMany({
                                where: { isActive: true },
                                orderBy: { order: 'asc' },
                            })];
                        case 1:
                            allChannels = _a.sent();
                            unsubscribedChannels = [];
                            subscribedChannels = [];
                            _i = 0, allChannels_1 = allChannels;
                            _a.label = 2;
                        case 2:
                            if (!(_i < allChannels_1.length)) return [3 /*break*/, 22];
                            channel = allChannels_1[_i];
                            if (channel.type === 'EXTERNAL') {
                                unsubscribedChannels.push({
                                    id: channel.id,
                                    channelId: channel.channelId,
                                    channelName: channel.channelName,
                                    channelLink: channel.channelLink,
                                    type: channel.type,
                                    isExternal: true,
                                });
                                return [3 /*break*/, 21];
                            }
                            cacheKey = "".concat(userId, "_").concat(channel.channelId);
                            hasPendingRequest = joinRequestCache.has(cacheKey);
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 20, , 21]);
                            return [4 /*yield*/, api.getChatMember(channel.channelId, userId)];
                        case 4:
                            member = _a.sent();
                            isSubscribed = member.status === 'member' ||
                                member.status === 'administrator' ||
                                member.status === 'creator' ||
                                (member.status === 'restricted' &&
                                    'is_member' in member &&
                                    member.is_member);
                            if (isSubscribed && hasPendingRequest) {
                                joinRequestCache.delete(cacheKey);
                            }
                            hasAccess = isSubscribed || (hasPendingRequest && channel.type === 'PRIVATE');
                            if ((member.status === 'left' || member.status === 'kicked') &&
                                !hasAccess) {
                                if (hasPendingRequest) {
                                    joinRequestCache.delete(cacheKey);
                                }
                                unsubscribedChannels.push({
                                    id: channel.id,
                                    channelId: channel.channelId,
                                    channelName: channel.channelName,
                                    channelLink: channel.channelLink,
                                    type: channel.type,
                                    status: member.status,
                                    isExternal: false,
                                });
                                return [3 /*break*/, 21];
                            }
                            if (!hasAccess) return [3 /*break*/, 18];
                            if (!(isSubscribed && (channel.type === 'PUBLIC' || channel.type === 'PRIVATE'))) return [3 /*break*/, 17];
                            return [4 /*yield*/, this.prisma.user.findUnique({
                                    where: { telegramId: String(userId) },
                                })];
                        case 5:
                            user = _a.sent();
                            if (!user) return [3 /*break*/, 17];
                            return [4 /*yield*/, this.prisma.userChannelStatus.findUnique({
                                    where: {
                                        userId_channelId: {
                                            userId: user.id,
                                            channelId: channel.id,
                                        },
                                    },
                                })];
                        case 6:
                            userChannelStatus = _a.sent();
                            if (!!userChannelStatus) return [3 /*break*/, 9];
                            return [4 /*yield*/, this.incrementMemberCount(channel.id)];
                        case 7:
                            _a.sent();
                            // Create the status
                            return [4 /*yield*/, this.prisma.userChannelStatus.create({
                                    data: {
                                        userId: user.id,
                                        channelId: channel.id,
                                        status: 'joined',
                                        lastUpdated: new Date(),
                                    },
                                })];
                        case 8:
                            // Create the status
                            _a.sent();
                            return [3 /*break*/, 17];
                        case 9:
                            if (!(userChannelStatus.status === 'requested')) return [3 /*break*/, 14];
                            // User was in pending state and now joined
                            return [4 /*yield*/, this.incrementMemberCount(channel.id)];
                        case 10:
                            // User was in pending state and now joined
                            _a.sent();
                            if (!(channel.type === 'PRIVATE')) return [3 /*break*/, 12];
                            return [4 /*yield*/, this.decrementPendingRequests(channel.id)];
                        case 11:
                            _a.sent();
                            _a.label = 12;
                        case 12: 
                        // Update status to joined
                        return [4 /*yield*/, this.prisma.userChannelStatus.update({
                                where: {
                                    userId_channelId: {
                                        userId: user.id,
                                        channelId: channel.id,
                                    },
                                },
                                data: {
                                    status: 'joined',
                                    lastUpdated: new Date(),
                                },
                            })];
                        case 13:
                            // Update status to joined
                            _a.sent();
                            return [3 /*break*/, 17];
                        case 14:
                            if (!(userChannelStatus.status === 'left')) return [3 /*break*/, 17];
                            // User rejoined after leaving
                            return [4 /*yield*/, this.incrementMemberCount(channel.id)];
                        case 15:
                            // User rejoined after leaving
                            _a.sent();
                            return [4 /*yield*/, this.prisma.userChannelStatus.update({
                                    where: {
                                        userId_channelId: {
                                            userId: user.id,
                                            channelId: channel.id,
                                        },
                                    },
                                    data: {
                                        status: 'joined',
                                        lastUpdated: new Date(),
                                    },
                                })];
                        case 16:
                            _a.sent();
                            _a.label = 17;
                        case 17:
                            subscribedChannels.push({
                                id: channel.id,
                                channelId: channel.channelId,
                                channelName: channel.channelName,
                                type: channel.type,
                                isSubscribed: isSubscribed,
                                hasPendingRequest: hasPendingRequest && !isSubscribed,
                            });
                            return [3 /*break*/, 19];
                        case 18:
                            unsubscribedChannels.push({
                                id: channel.id,
                                channelId: channel.channelId,
                                channelName: channel.channelName,
                                channelLink: channel.channelLink,
                                type: channel.type,
                                status: member.status,
                                isExternal: false,
                            });
                            _a.label = 19;
                        case 19: return [3 /*break*/, 21];
                        case 20:
                            error_2 = _a.sent();
                            if (hasPendingRequest) {
                                joinRequestCache.delete(cacheKey);
                            }
                            unsubscribedChannels.push({
                                id: channel.id,
                                channelId: channel.channelId,
                                channelName: channel.channelName,
                                channelLink: channel.channelLink,
                                type: channel.type,
                                status: 'not_member',
                                isExternal: false,
                            });
                            return [3 /*break*/, 21];
                        case 21:
                            _i++;
                            return [3 /*break*/, 2];
                        case 22: return [2 /*return*/, {
                                allChannels: allChannels,
                                unsubscribedChannels: unsubscribedChannels,
                                subscribedChannels: subscribedChannels,
                                totalChannels: allChannels.length,
                                unsubscribedCount: unsubscribedChannels.length,
                                subscribedCount: subscribedChannels.length,
                                canAccessBot: unsubscribedChannels.filter(function (ch) { return !ch.isExternal; }).length === 0,
                            }];
                    }
                });
            });
        };
        ChannelService_1.prototype.hasNewChannels = function (userId, lastCheckDate) {
            return __awaiter(this, void 0, void 0, function () {
                var newChannels;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.mandatoryChannel.count({
                                where: {
                                    isActive: true,
                                    createdAt: {
                                        gt: lastCheckDate,
                                    },
                                },
                            })];
                        case 1:
                            newChannels = _a.sent();
                            return [2 /*return*/, newChannels > 0];
                    }
                });
            });
        };
        ChannelService_1.prototype.findAllWithHistory = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.mandatoryChannel.findMany({
                            orderBy: [
                                { isActive: 'desc' }, // Active kanallar birinchi
                                { createdAt: 'desc' }, // Eng yangilar birinchi
                            ],
                            select: {
                                id: true,
                                createdAt: true,
                                channelId: true,
                                channelLink: true,
                                isActive: true,
                                type: true,
                                channelName: true,
                                order: true,
                                memberLimit: true,
                                currentMembers: true,
                                pendingRequests: true,
                            },
                        })];
                });
            });
        };
        /**
         * Real-time database'dan a'zolar sonini hisoblash
         * Bu funksiya UserChannelStatus jadvalidagi ma'lumotlardan foydalanadi
         */
        ChannelService_1.prototype.recalculateChannelStats = function (channelId) {
            return __awaiter(this, void 0, void 0, function () {
                var memberCount, pendingCount, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            return [4 /*yield*/, this.prisma.userChannelStatus.count({
                                    where: {
                                        channelId: channelId,
                                        status: 'joined',
                                    },
                                })];
                        case 1:
                            memberCount = _a.sent();
                            return [4 /*yield*/, this.prisma.userChannelStatus.count({
                                    where: {
                                        channelId: channelId,
                                        status: 'requested',
                                    },
                                })];
                        case 2:
                            pendingCount = _a.sent();
                            // Database'ni yangilash
                            return [4 /*yield*/, this.prisma.mandatoryChannel.update({
                                    where: { id: channelId },
                                    data: {
                                        currentMembers: memberCount,
                                        pendingRequests: pendingCount,
                                    },
                                })];
                        case 3:
                            // Database'ni yangilash
                            _a.sent();
                            return [2 /*return*/, { memberCount: memberCount, pendingCount: pendingCount }];
                        case 4:
                            error_3 = _a.sent();
                            this.logger.error("Error recalculating stats for channel ".concat(channelId, ":"), error_3);
                            return [2 /*return*/, null];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Barcha kanallar uchun statistikani qayta hisoblash
         */
        ChannelService_1.prototype.recalculateAllChannelsStats = function () {
            return __awaiter(this, void 0, void 0, function () {
                var channels, results, _i, channels_2, channel, stats, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 7]);
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findMany({
                                    where: { isActive: true },
                                })];
                        case 1:
                            channels = _a.sent();
                            results = [];
                            _i = 0, channels_2 = channels;
                            _a.label = 2;
                        case 2:
                            if (!(_i < channels_2.length)) return [3 /*break*/, 5];
                            channel = channels_2[_i];
                            return [4 /*yield*/, this.recalculateChannelStats(channel.id)];
                        case 3:
                            stats = _a.sent();
                            if (stats) {
                                results.push(__assign({ channelName: channel.channelName }, stats));
                            }
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [2 /*return*/, results];
                        case 6:
                            error_4 = _a.sent();
                            this.logger.error('Error recalculating all channels stats:', error_4);
                            return [2 /*return*/, []];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        ChannelService_1.prototype.findByLink = function (link) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.mandatoryChannel.findFirst({
                            where: {
                                channelLink: {
                                    contains: link,
                                    mode: 'insensitive',
                                },
                            },
                            select: {
                                id: true,
                                createdAt: true,
                                channelId: true,
                                channelLink: true,
                                isActive: true,
                                type: true,
                                channelName: true,
                                order: true,
                                memberLimit: true,
                                currentMembers: true,
                                pendingRequests: true,
                            },
                        })];
                });
            });
        };
        return ChannelService_1;
    }());
    __setFunctionName(_classThis, "ChannelService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ChannelService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ChannelService = _classThis;
}();
exports.ChannelService = ChannelService;
