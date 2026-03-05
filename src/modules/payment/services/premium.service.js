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
exports.PremiumService = void 0;
var common_1 = require("@nestjs/common");
var PremiumService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PremiumService = _classThis = /** @class */ (function () {
        function PremiumService_1(prisma) {
            this.prisma = prisma;
        }
        PremiumService_1.prototype.activatePremium = function (userId, durationDays) {
            return __awaiter(this, void 0, void 0, function () {
                var expiresAt;
                return __generator(this, function (_a) {
                    expiresAt = new Date();
                    expiresAt.setDate(expiresAt.getDate() + durationDays);
                    return [2 /*return*/, this.prisma.user.update({
                            where: { id: userId },
                            data: {
                                isPremium: true,
                                premiumExpiresAt: expiresAt,
                            },
                        })];
                });
            });
        };
        PremiumService_1.prototype.deactivatePremium = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.user.update({
                            where: { id: userId },
                            data: {
                                isPremium: false,
                                premiumExpiresAt: null,
                            },
                        })];
                });
            });
        };
        PremiumService_1.prototype.checkPremiumStatus = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                var user, now, isExpired;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.user.findUnique({
                                where: { id: userId },
                                select: {
                                    isPremium: true,
                                    premiumExpiresAt: true,
                                },
                            })];
                        case 1:
                            user = _a.sent();
                            if (!user || !user.isPremium) {
                                return [2 /*return*/, { isPremium: false, isExpired: false, expiresAt: null }];
                            }
                            now = new Date();
                            isExpired = user.premiumExpiresAt && user.premiumExpiresAt < now;
                            if (!isExpired) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.deactivatePremium(userId)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, {
                                    isPremium: false,
                                    isExpired: true,
                                    expiresAt: user.premiumExpiresAt,
                                }];
                        case 3: return [2 /*return*/, {
                                isPremium: true,
                                isExpired: false,
                                expiresAt: user.premiumExpiresAt,
                            }];
                    }
                });
            });
        };
        PremiumService_1.prototype.getPremiumUsers = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.user.findMany({
                            where: { isPremium: true },
                            select: {
                                id: true,
                                telegramId: true,
                                firstName: true,
                                lastName: true,
                                username: true,
                                premiumExpiresAt: true,
                            },
                        })];
                });
            });
        };
        PremiumService_1.prototype.getPremiumSettings = function () {
            return __awaiter(this, void 0, void 0, function () {
                var settings;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.premiumSettings.findFirst()];
                        case 1:
                            settings = _a.sent();
                            if (!!settings) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.prisma.premiumSettings.create({
                                    data: {
                                        monthlyPrice: 50000,
                                        threeMonthPrice: 120000,
                                        sixMonthPrice: 200000,
                                        yearlyPrice: 350000,
                                        cardNumber: '8600 1234 5678 9012',
                                        cardHolder: 'ADMIN NAME',
                                        description: "Premium xususiyatlari: \n• Reklama yo'q\n• Cheksiz prosmotr",
                                    },
                                })];
                        case 2:
                            settings = _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/, settings];
                    }
                });
            });
        };
        PremiumService_1.prototype.getSettings = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.getPremiumSettings()];
                });
            });
        };
        PremiumService_1.prototype.updatePremiumSettings = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var settings;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.premiumSettings.findFirst()];
                        case 1:
                            settings = _a.sent();
                            if (!settings) {
                                return [2 /*return*/, this.prisma.premiumSettings.create({
                                        data: {
                                            monthlyPrice: data.monthlyPrice || 0,
                                            threeMonthPrice: data.threeMonthPrice || 0,
                                            sixMonthPrice: data.sixMonthPrice || 0,
                                            yearlyPrice: data.yearlyPrice || 0,
                                            currency: 'UZS',
                                            cardNumber: data.cardNumber || '',
                                            cardHolder: data.cardHolder || '',
                                            description: data.description || '',
                                        },
                                    })];
                            }
                            return [2 /*return*/, this.prisma.premiumSettings.update({
                                    where: { id: settings.id },
                                    data: data,
                                })];
                    }
                });
            });
        };
        PremiumService_1.prototype.checkExpiredPremiums = function () {
            return __awaiter(this, void 0, void 0, function () {
                var now, expiredUsers, _i, expiredUsers_1, user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            now = new Date();
                            return [4 /*yield*/, this.prisma.user.findMany({
                                    where: {
                                        isPremium: true,
                                        premiumExpiresAt: {
                                            lt: now,
                                        },
                                    },
                                })];
                        case 1:
                            expiredUsers = _a.sent();
                            _i = 0, expiredUsers_1 = expiredUsers;
                            _a.label = 2;
                        case 2:
                            if (!(_i < expiredUsers_1.length)) return [3 /*break*/, 5];
                            user = expiredUsers_1[_i];
                            return [4 /*yield*/, this.deactivatePremium(user.id)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [2 /*return*/, expiredUsers.length];
                    }
                });
            });
        };
        PremiumService_1.prototype.updatePrices = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.updatePremiumSettings(data)];
                });
            });
        };
        PremiumService_1.prototype.updateCardInfo = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.updatePremiumSettings(data)];
                });
            });
        };
        return PremiumService_1;
    }());
    __setFunctionName(_classThis, "PremiumService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PremiumService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PremiumService = _classThis;
}();
exports.PremiumService = PremiumService;
