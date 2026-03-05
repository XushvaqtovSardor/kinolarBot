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
exports.BotUpdate = void 0;
var common_1 = require("@nestjs/common");
var BotUpdate = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var BotUpdate = _classThis = /** @class */ (function () {
        function BotUpdate_1(prisma, grammyBot) {
            this.prisma = prisma;
            this.grammyBot = grammyBot;
            this.logger = new common_1.Logger(BotUpdate.name);
        }
        BotUpdate_1.prototype.onModuleInit = function () {
            try {
                this.grammyBot.bot.callbackQuery('check_subscription', this.checkSubscription.bind(this));
            }
            catch (error) {
                this.logger.error('❌ Failed to initialize BotUpdate');
                this.logger.error("Error: ".concat(error.message));
                this.logger.error('Stack:', error.stack);
                throw error;
            }
        };
        BotUpdate_1.prototype.checkSubscription = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var channels, notJoined, _i, channels_1, channel, member, error_1, error_2;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!ctx.from)
                                return [2 /*return*/];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 15, , 16]);
                            return [4 /*yield*/, ctx.answerCallbackQuery()];
                        case 2:
                            _b.sent();
                            return [4 /*yield*/, this.prisma.mandatoryChannel.findMany({
                                    where: { isActive: true },
                                    orderBy: { order: 'asc' },
                                })];
                        case 3:
                            channels = _b.sent();
                            if (!(channels.length === 0)) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.reply("✅ Hech qanday majburiy kanal yo'q!")];
                        case 4:
                            _b.sent();
                            return [2 /*return*/];
                        case 5:
                            notJoined = [];
                            _i = 0, channels_1 = channels;
                            _b.label = 6;
                        case 6:
                            if (!(_i < channels_1.length)) return [3 /*break*/, 11];
                            channel = channels_1[_i];
                            _b.label = 7;
                        case 7:
                            _b.trys.push([7, 9, , 10]);
                            return [4 /*yield*/, ctx.api.getChatMember(channel.channelId, ctx.from.id)];
                        case 8:
                            member = _b.sent();
                            if (!['member', 'administrator', 'creator'].includes(member.status)) {
                                notJoined.push(channel);
                            }
                            return [3 /*break*/, 10];
                        case 9:
                            error_1 = _b.sent();
                            this.logger.error("\u274C Error checking subscription for channel ".concat(channel.channelId, " (").concat(channel.channelName, "):"));
                            this.logger.error("Error: ".concat(error_1.message));
                            this.logger.error("User: ".concat(ctx.from.id));
                            notJoined.push(channel);
                            return [3 /*break*/, 10];
                        case 10:
                            _i++;
                            return [3 /*break*/, 6];
                        case 11:
                            if (!(notJoined.length === 0)) return [3 /*break*/, 13];
                            return [4 /*yield*/, ctx.editMessageText("✅ Siz barcha kanallarga obuna bo'lgansiz!")];
                        case 12:
                            _b.sent();
                            return [3 /*break*/, 14];
                        case 13:
                            this.logger.log("\u26A0\uFE0F User ".concat(ctx.from.id, " needs to subscribe to ").concat(notJoined.length, " channel(s)"));
                            _b.label = 14;
                        case 14: return [3 /*break*/, 16];
                        case 15:
                            error_2 = _b.sent();
                            this.logger.error("\u274C Error in checkSubscription for user ".concat((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id));
                            this.logger.error("Error: ".concat(error_2.message));
                            this.logger.error('Stack:', error_2.stack);
                            return [3 /*break*/, 16];
                        case 16: return [2 /*return*/];
                    }
                });
            });
        };
        return BotUpdate_1;
    }());
    __setFunctionName(_classThis, "BotUpdate");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BotUpdate = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BotUpdate = _classThis;
}();
exports.BotUpdate = BotUpdate;
