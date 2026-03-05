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
exports.SerialService = void 0;
var common_1 = require("@nestjs/common");
var SerialService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var SerialService = _classThis = /** @class */ (function () {
        function SerialService_1(prisma, codeGenerator) {
            this.prisma = prisma;
            this.codeGenerator = codeGenerator;
        }
        SerialService_1.prototype.create = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var codeNum;
                return __generator(this, function (_a) {
                    codeNum = typeof data.code === 'string' ? parseInt(data.code) : data.code;
                    return [2 /*return*/, this.prisma.serial.create({
                            data: __assign(__assign({}, data), { code: codeNum, shareLink: this.generateShareLink(String(codeNum)) }),
                            include: {
                                field: true,
                            },
                        })];
                });
            });
        };
        SerialService_1.prototype.findByCode = function (code) {
            return __awaiter(this, void 0, void 0, function () {
                var codeNum;
                return __generator(this, function (_a) {
                    codeNum = parseInt(code);
                    if (isNaN(codeNum))
                        return [2 /*return*/, null];
                    return [2 /*return*/, this.prisma.serial.findUnique({
                            where: { code: codeNum },
                            include: {
                                field: true,
                                episodes: {
                                    orderBy: { episodeNumber: 'asc' },
                                },
                            },
                        })];
                });
            });
        };
        SerialService_1.prototype.findById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.serial.findUnique({
                            where: { id: id },
                            include: {
                                field: true,
                                episodes: {
                                    orderBy: { episodeNumber: 'asc' },
                                },
                            },
                        })];
                });
            });
        };
        SerialService_1.prototype.findNearestAvailableCodes = function (targetCode_1) {
            return __awaiter(this, arguments, void 0, function (targetCode, limit) {
                var availableCodes, offset, upperCode, lowerCode;
                if (limit === void 0) { limit = 5; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            availableCodes = [];
                            offset = 1;
                            _a.label = 1;
                        case 1:
                            if (!(availableCodes.length < limit && offset <= 1000)) return [3 /*break*/, 5];
                            upperCode = targetCode + offset;
                            return [4 /*yield*/, this.codeGenerator.isCodeAvailable(String(upperCode))];
                        case 2:
                            if (_a.sent()) {
                                availableCodes.push(upperCode);
                            }
                            if (!(targetCode - offset > 0)) return [3 /*break*/, 4];
                            lowerCode = targetCode - offset;
                            return [4 /*yield*/, this.codeGenerator.isCodeAvailable(String(lowerCode))];
                        case 3:
                            if (_a.sent()) {
                                availableCodes.push(lowerCode);
                            }
                            _a.label = 4;
                        case 4:
                            offset++;
                            return [3 /*break*/, 1];
                        case 5: return [2 /*return*/, availableCodes
                                .sort(function (a, b) {
                                var distA = Math.abs(a - targetCode);
                                var distB = Math.abs(b - targetCode);
                                return distA - distB;
                            })
                                .slice(0, limit)];
                    }
                });
            });
        };
        SerialService_1.prototype.findAll = function (fieldId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.serial.findMany({
                            where: fieldId ? { fieldId: fieldId } : undefined,
                            include: {
                                field: true,
                                episodes: true,
                            },
                            orderBy: { createdAt: 'desc' },
                        })];
                });
            });
        };
        SerialService_1.prototype.getSerialCount = function (fieldId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.serial.count({
                            where: fieldId ? { fieldId: fieldId } : undefined,
                        })];
                });
            });
        };
        SerialService_1.prototype.update = function (id, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.serial.update({
                            where: { id: id },
                            data: data,
                        })];
                });
            });
        };
        SerialService_1.prototype.delete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.serial.delete({
                            where: { id: id },
                        })];
                });
            });
        };
        SerialService_1.prototype.incrementViews = function (code) {
            return __awaiter(this, void 0, void 0, function () {
                var codeNum;
                return __generator(this, function (_a) {
                    codeNum = parseInt(code);
                    if (isNaN(codeNum))
                        return [2 /*return*/, null];
                    return [2 /*return*/, this.prisma.serial.update({
                            where: { code: codeNum },
                            data: {
                                views: {
                                    increment: 1,
                                },
                            },
                        })];
                });
            });
        };
        SerialService_1.prototype.incrementTotalEpisodes = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.serial.update({
                            where: { id: id },
                            data: {
                                totalEpisodes: {
                                    increment: 1,
                                },
                            },
                        })];
                });
            });
        };
        SerialService_1.prototype.getTopSerials = function () {
            return __awaiter(this, arguments, void 0, function (limit) {
                if (limit === void 0) { limit = 10; }
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.prisma.serial.findMany({
                            take: limit,
                            orderBy: { views: 'desc' },
                            include: {
                                field: true,
                                episodes: true,
                            },
                        })];
                });
            });
        };
        SerialService_1.prototype.search = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var codeQuery;
                return __generator(this, function (_a) {
                    codeQuery = parseInt(query);
                    return [2 /*return*/, this.prisma.serial.findMany({
                            where: {
                                OR: __spreadArray([
                                    { title: { contains: query, mode: 'insensitive' } },
                                    { genre: { contains: query, mode: 'insensitive' } }
                                ], (isNaN(codeQuery) ? [] : [{ code: codeQuery }]), true),
                            },
                            include: {
                                field: true,
                                episodes: true,
                            },
                            take: 20,
                        })];
                });
            });
        };
        SerialService_1.prototype.formatSerialCaption = function (serial) {
            var caption = "#".concat(serial.code, " ").concat(serial.title, "\n\n");
            if (serial.genre)
                caption += "\uD83C\uDFAD \u0416\u0430\u043D\u0440: ".concat(serial.genre, "\n");
            caption += "\uD83D\uDCFA \u049A\u0438\u0441\u043C\u043B\u0430\u0440: ".concat(serial.totalEpisodes, "\n");
            caption += "\uD83D\uDCC1 Field: ".concat(serial.field.name, "\n");
            if (serial.description)
                caption += "\n".concat(serial.description);
            return caption;
        };
        SerialService_1.prototype.generateShareLink = function (code) {
            return "https://t.me/share/url?url=\uD83D\uDCFA \u0421\u0435\u0440\u0438\u0430\u043B: ".concat(code);
        };
        SerialService_1.prototype.postToChannel = function (bot, channelId, serial, posterFileId) {
            return __awaiter(this, void 0, void 0, function () {
                var caption;
                return __generator(this, function (_a) {
                    caption = this.formatSerialCaption(serial);
                    return [2 /*return*/, bot.telegram.sendPhoto(channelId, posterFileId, {
                            caption: caption,
                            reply_markup: {
                                inline_keyboard: [
                                    [
                                        {
                                            text: '📺 Қисмларни кўриш',
                                            callback_data: "view_serial_".concat(serial.code),
                                        },
                                    ],
                                ],
                            },
                        })];
                });
            });
        };
        SerialService_1.prototype.generateEpisodesKeyboard = function (episodes, serialCode) {
            var buttons = [];
            var row = [];
            episodes.forEach(function (episode, index) {
                row.push({
                    text: "".concat(episode.episodeNumber),
                    callback_data: "episode_".concat(serialCode, "_").concat(episode.episodeNumber),
                });
                if ((index + 1) % 5 === 0 || index === episodes.length - 1) {
                    buttons.push(__spreadArray([], row, true));
                    row.length = 0;
                }
            });
            return {
                inline_keyboard: buttons,
            };
        };
        return SerialService_1;
    }());
    __setFunctionName(_classThis, "SerialService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SerialService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SerialService = _classThis;
}();
exports.SerialService = SerialService;
