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
exports.UserService = void 0;
var common_1 = require("@nestjs/common");
var client_1 = require("@prisma/client");
var UserService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var UserService = _classThis = /** @class */ (function () {
        function UserService_1(prisma) {
            this.prisma = prisma;
            this.logger = new common_1.Logger(UserService.name);
        }
        UserService_1.prototype.findOrCreate = function (telegramId, data) {
            return __awaiter(this, void 0, void 0, function () {
                var user, language;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.user.findUnique({
                                where: { telegramId: telegramId },
                            })];
                        case 1:
                            user = _a.sent();
                            if (!!user) return [3 /*break*/, 3];
                            language = this.mapLanguageCode(data.languageCode);
                            return [4 /*yield*/, this.prisma.user.create({
                                    data: {
                                        telegramId: telegramId,
                                        firstName: data.firstName,
                                        lastName: data.lastName,
                                        username: data.username,
                                        language: language,
                                    },
                                })];
                        case 2:
                            user = _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/, user];
                    }
                });
            });
        };
        UserService_1.prototype.findByTelegramId = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.user.findUnique({
                            where: { telegramId: telegramId },
                        })];
                });
            });
        };
        UserService_1.prototype.updateLanguage = function (telegramId, language) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.user.update({
                            where: { telegramId: telegramId },
                            data: { language: language },
                        })];
                });
            });
        };
        UserService_1.prototype.blockUser = function (telegramId, reason) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.user.update({
                            where: { telegramId: telegramId },
                            data: {
                                isBlocked: true,
                                blockedAt: new Date(),
                                blockReason: reason,
                            },
                        })];
                });
            });
        };
        UserService_1.prototype.unblockUser = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.user.update({
                            where: { telegramId: telegramId },
                            data: {
                                isBlocked: false,
                                blockedAt: null,
                                blockReason: null,
                            },
                        })];
                });
            });
        };
        UserService_1.prototype.warnUser = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.user.update({
                            where: { telegramId: telegramId },
                            data: {
                                warningCount: {
                                    increment: 1,
                                },
                            },
                        })];
                });
            });
        };
        UserService_1.prototype.resetWarnings = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.user.update({
                            where: { telegramId: telegramId },
                            data: {
                                warningCount: 0,
                            },
                        })];
                });
            });
        };
        UserService_1.prototype.getAllUsers = function () {
            return __awaiter(this, void 0, void 0, function () {
                var users, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this.logger.log('📋 Fetching all users from database...');
                            return [4 /*yield*/, this.prisma.user.findMany({
                                    orderBy: { createdAt: 'desc' },
                                })];
                        case 1:
                            users = _a.sent();
                            this.logger.log("\u2705 Successfully fetched ".concat(users.length, " users"));
                            return [2 /*return*/, users];
                        case 2:
                            error_1 = _a.sent();
                            this.logger.error("\u274C Error in getAllUsers: ".concat(error_1.message));
                            this.logger.error('Stack:', error_1.stack);
                            throw error_1;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        UserService_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.getAllUsers()];
                });
            });
        };
        UserService_1.prototype.getUserStatistics = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, totalUsers, premiumUsers, blockedUsers, activeUsers;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Promise.all([
                                this.prisma.user.count(),
                                this.prisma.user.count({ where: { isPremium: true } }),
                                this.prisma.user.count({ where: { isBlocked: true } }),
                                this.prisma.user.count({
                                    where: {
                                        lastActivity: {
                                            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
                                        },
                                    },
                                }),
                            ])];
                        case 1:
                            _a = _b.sent(), totalUsers = _a[0], premiumUsers = _a[1], blockedUsers = _a[2], activeUsers = _a[3];
                            return [2 /*return*/, {
                                    totalUsers: totalUsers,
                                    premiumUsers: premiumUsers,
                                    blockedUsers: blockedUsers,
                                    activeUsers: activeUsers,
                                }];
                    }
                });
            });
        };
        UserService_1.prototype.updateLastActivity = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.user.update({
                            where: { telegramId: telegramId },
                            data: { lastActivity: new Date() },
                        })];
                });
            });
        };
        UserService_1.prototype.getPremiumBannedUsers = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.user.findMany({
                            where: { isPremiumBanned: true },
                            orderBy: { premiumBannedAt: 'desc' },
                        })];
                });
            });
        };
        UserService_1.prototype.unbanFromPremium = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.user.update({
                            where: { telegramId: telegramId },
                            data: {
                                isPremiumBanned: false,
                                premiumBannedAt: null,
                                premiumBanCount: 0,
                            },
                        })];
                });
            });
        };
        UserService_1.prototype.mapLanguageCode = function (languageCode) {
            if (!languageCode)
                return client_1.Language.UZ;
            var code = languageCode.toLowerCase();
            if (code.startsWith('ru'))
                return client_1.Language.RU;
            if (code.startsWith('en'))
                return client_1.Language.EN;
            return client_1.Language.UZ;
        };
        return UserService_1;
    }());
    __setFunctionName(_classThis, "UserService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserService = _classThis;
}();
exports.UserService = UserService;
