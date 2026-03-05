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
exports.GrammyBotModule = exports.GrammyBotService = void 0;
var common_1 = require("@nestjs/common");
var grammy_1 = require("grammy");
var GrammyBotService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var GrammyBotService = _classThis = /** @class */ (function () {
        function GrammyBotService_1() {
            this.logger = new common_1.Logger(GrammyBotService.name);
            var token = process.env.BOT_TOKEN;
            if (!token) {
                this.logger.error('❌ BOT_TOKEN is not defined in environment variables');
                throw new Error('BOT_TOKEN is not defined in  environment variables');
            }
            try {
                this.bot = new grammy_1.Bot(token);
            }
            catch (error) {
                this.logger.error('❌ Failed to create Grammy Bot instance');
                this.logger.error("Error: ".concat(error.message));
                this.logger.error('Stack:', error.stack);
                throw error;
            }
        }
        GrammyBotService_1.prototype.onModuleInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    try {
                        this.bot.catch(function (err) {
                            _this.logger.error('❌ Grammy Bot error caught:');
                            _this.logger.error("Error message: ".concat(err.message || 'Unknown error'));
                            _this.logger.error("Error stack: ".concat(err.stack || 'No stack trace'));
                            if (err.error) {
                                _this.logger.error("Telegram API Error: ".concat(JSON.stringify(err.error)));
                            }
                        });
                        this.bot.use(function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
                            var error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, next()];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_1 = _a.sent();
                                        this.logger.error('❌ Error in middleware:');
                                        this.logger.error("Error: ".concat(error_1.message));
                                        this.logger.error('Stack:', error_1.stack);
                                        this.logger.error("Update that caused error: ".concat(JSON.stringify(ctx.update)));
                                        throw error_1;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    catch (error) {
                        this.logger.error('❌ Failed to initialize GrammyBotService module');
                        this.logger.error("Error: ".concat(error.message));
                        this.logger.error('Stack:', error.stack);
                        throw error;
                    }
                    return [2 /*return*/];
                });
            });
        };
        GrammyBotService_1.prototype.startBot = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    try {
                        this.bot
                            .start({
                            onStart: function (_a) {
                                var username = _a.username;
                                _this.botUsername = username;
                            },
                            drop_pending_updates: false,
                            allowed_updates: [],
                        })
                            .catch(function (error) {
                            _this.logger.error('❌ Bot polling error:');
                            _this.logger.error("Error: ".concat(error.message));
                            _this.logger.error("Error type: ".concat(error.constructor.name));
                            // Don't throw - let bot retry automatically
                            // Retry after 5 seconds
                            setTimeout(function () {
                                _this.startBot().catch(function () {
                                    _this.logger.error('❌ Retry failed');
                                });
                            }, 5000);
                        });
                    }
                    catch (error) {
                        this.logger.error('❌ Failed to start Grammy Bot');
                        this.logger.error("Error type: ".concat(error.constructor.name));
                        this.logger.error("Error message: ".concat(error.message));
                        this.logger.error('Full error:', JSON.stringify(error, null, 2));
                        this.logger.error('Stack:', error.stack);
                        if (error.description) {
                            this.logger.error("Telegram API description: ".concat(error.description));
                        }
                        if (error.error_code) {
                            this.logger.error("Telegram API error code: ".concat(error.error_code));
                        }
                        throw error;
                    }
                    return [2 /*return*/];
                });
            });
        };
        GrammyBotService_1.prototype.getBot = function () {
            return this.bot;
        };
        return GrammyBotService_1;
    }());
    __setFunctionName(_classThis, "GrammyBotService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GrammyBotService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GrammyBotService = _classThis;
}();
exports.GrammyBotService = GrammyBotService;
var GrammyBotModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            providers: [GrammyBotService],
            exports: [GrammyBotService],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var GrammyBotModule = _classThis = /** @class */ (function () {
        function GrammyBotModule_1() {
        }
        return GrammyBotModule_1;
    }());
    __setFunctionName(_classThis, "GrammyBotModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GrammyBotModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GrammyBotModule = _classThis;
}();
exports.GrammyBotModule = GrammyBotModule;
