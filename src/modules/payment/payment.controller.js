"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
exports.PaymentController = void 0;
var common_1 = require("@nestjs/common");
var PaymentController = function () {
    var _classDecorators = [(0, common_1.Controller)('payment')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createPayment_decorators;
    var _handlePaymeWebhook_decorators;
    var _testWebhook_decorators;
    var _getPaymentStatus_decorators;
    var _checkPremiumStatus_decorators;
    var _getPaymentHistory_decorators;
    var PaymentController = _classThis = /** @class */ (function () {
        function PaymentController_1(paymentService, paymeService, premiumService, grammyBot) {
            this.paymentService = (__runInitializers(this, _instanceExtraInitializers), paymentService);
            this.paymeService = paymeService;
            this.premiumService = premiumService;
            this.grammyBot = grammyBot;
            this.logger = new common_1.Logger(PaymentController.name);
        }
        PaymentController_1.prototype.createPayment = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var payment, paymentLink, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log("\uD83D\uDCDD Creating payment for user ".concat(body.telegramId, ", amount: ").concat(body.amount));
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            if (!body.telegramId || !body.amount) {
                                this.logger.error('❌ Missing required fields: telegramId or amount');
                                throw new common_1.BadRequestException('telegramId and amount are required');
                            }
                            return [4 /*yield*/, this.paymentService.createOnlinePayment({
                                    telegramId: body.telegramId,
                                    amount: body.amount,
                                    duration: body.duration || 30,
                                    provider: 'payme',
                                })];
                        case 2:
                            payment = _a.sent();
                            paymentLink = this.paymeService.generatePaymentLink(payment.id, body.amount);
                            return [2 /*return*/, {
                                    success: true,
                                    paymentId: payment.id,
                                    paymentLink: paymentLink,
                                    amount: body.amount,
                                    duration: body.duration || 30,
                                }];
                        case 3:
                            error_1 = _a.sent();
                            this.logger.error("\u274C Error creating payment for user ".concat(body.telegramId));
                            this.logger.error("Error: ".concat(error_1.message));
                            this.logger.error('Stack:', error_1.stack);
                            throw error_1;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        PaymentController_1.prototype.handlePaymeWebhook = function (headers, body) {
            return __awaiter(this, void 0, void 0, function () {
                var isValid, result, error_2;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.logger.log("\uD83D\uDCE8 Received Payme webhook: ".concat(body.method || 'Unknown method'));
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 5, , 6]);
                            isValid = this.paymeService.verifySignature({ headers: headers });
                            if (!isValid) {
                                this.logger.error('❌ Invalid Payme webhook signature');
                                throw new common_1.BadRequestException('Invalid signature');
                            }
                            return [4 /*yield*/, this.paymeService.handleWebhook(body)];
                        case 2:
                            result = _c.sent();
                            if (!(body.method === 'PerformTransaction')) return [3 /*break*/, 4];
                            this.logger.log("\uD83D\uDCB3 Processing PerformTransaction for order: ".concat((_b = (_a = body.params) === null || _a === void 0 ? void 0 : _a.account) === null || _b === void 0 ? void 0 : _b.order_id));
                            return [4 /*yield*/, this.sendPaymentSuccessNotification(body.params.account.order_id)];
                        case 3:
                            _c.sent();
                            _c.label = 4;
                        case 4: return [2 /*return*/, result];
                        case 5:
                            error_2 = _c.sent();
                            this.logger.error('❌ Error handling Payme webhook');
                            this.logger.error("Error: ".concat(error_2.message));
                            this.logger.error('Stack:', error_2.stack);
                            this.logger.error("Webhook body: ".concat(JSON.stringify(body)));
                            return [2 /*return*/, {
                                    error: {
                                        code: -32400,
                                        message: error_2.message,
                                    },
                                }];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        PaymentController_1.prototype.testWebhook = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var payment, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log("\uD83E\uDDEA Test webhook: paymentId=".concat(body.paymentId, ", status=").concat(body.status));
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 7, , 8]);
                            if (!(body.status === 'success')) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.paymentService.processSuccessfulPayment({
                                    paymentId: body.paymentId,
                                })];
                        case 2:
                            payment = _a.sent();
                            this.logger.log("\u2705 Test payment ".concat(body.paymentId, " processed successfully"));
                            return [4 /*yield*/, this.sendPaymentSuccessNotification(body.paymentId)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    message: 'Payment processed successfully',
                                    payment: payment,
                                }];
                        case 4: return [4 /*yield*/, this.paymentService.markPaymentFailed(body.paymentId, 'Test failure')];
                        case 5:
                            _a.sent();
                            return [2 /*return*/, {
                                    success: false,
                                    message: 'Payment marked as failed',
                                }];
                        case 6: return [3 /*break*/, 8];
                        case 7:
                            error_3 = _a.sent();
                            this.logger.error('Error in test webhook', error_3);
                            throw error_3;
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        PaymentController_1.prototype.getPaymentStatus = function (paymentId) {
            return __awaiter(this, void 0, void 0, function () {
                var payment, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.paymentService.getPaymentById(parseInt(paymentId))];
                        case 1:
                            payment = _a.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    payment: {
                                        id: payment.id,
                                        status: payment.status,
                                        amount: payment.amount,
                                        createdAt: payment.createdAt,
                                        processedAt: payment.processedAt,
                                    },
                                }];
                        case 2:
                            error_4 = _a.sent();
                            this.logger.error('Error getting payment status', error_4);
                            throw error_4;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PaymentController_1.prototype.checkPremiumStatus = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var isPremium, error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.paymentService.checkPremiumStatus(telegramId)];
                        case 1:
                            isPremium = _a.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    isPremium: isPremium,
                                }];
                        case 2:
                            error_5 = _a.sent();
                            this.logger.error('Error checking premium status', error_5);
                            throw error_5;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PaymentController_1.prototype.sendPaymentSuccessNotification = function (paymentId) {
            return __awaiter(this, void 0, void 0, function () {
                var payment, message, error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            return [4 /*yield*/, this.paymentService.getPaymentById(paymentId)];
                        case 1:
                            payment = _a.sent();
                            if (!(payment && payment.user)) return [3 /*break*/, 3];
                            message = "\u2705 To'lov qabul qilindi!\n\uD83C\uDF89 Premium faollashtirildi\n\n\uD83D\uDC8E Premium muddati: ".concat(payment.user.premiumTill ? payment.user.premiumTill.toLocaleDateString('uz-UZ') : 'N/A');
                            return [4 /*yield*/, this.grammyBot.bot.api.sendMessage(payment.user.telegramId, message)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [3 /*break*/, 5];
                        case 4:
                            error_6 = _a.sent();
                            this.logger.error('Error sending payment notification', error_6);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        PaymentController_1.prototype.getPaymentHistory = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var payments, error_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.paymentService.getPaymentHistory(telegramId)];
                        case 1:
                            payments = _a.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    payments: payments.map(function (p) { return ({
                                        id: p.id,
                                        amount: p.amount,
                                        status: p.status,
                                        provider: p.provider,
                                        createdAt: p.createdAt,
                                        processedAt: p.processedAt,
                                    }); }),
                                }];
                        case 2:
                            error_7 = _a.sent();
                            this.logger.error('Error getting payment history', error_7);
                            throw error_7;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return PaymentController_1;
    }());
    __setFunctionName(_classThis, "PaymentController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createPayment_decorators = [(0, common_1.Post)('create'), (0, common_1.HttpCode)(common_1.HttpStatus.OK)];
        _handlePaymeWebhook_decorators = [(0, common_1.Post)('webhook/payme'), (0, common_1.HttpCode)(common_1.HttpStatus.OK)];
        _testWebhook_decorators = [(0, common_1.Post)('webhook/test'), (0, common_1.HttpCode)(common_1.HttpStatus.OK)];
        _getPaymentStatus_decorators = [(0, common_1.Get)('status/:paymentId')];
        _checkPremiumStatus_decorators = [(0, common_1.Get)('premium-status/:telegramId')];
        _getPaymentHistory_decorators = [(0, common_1.Get)('history/:telegramId')];
        __esDecorate(_classThis, null, _createPayment_decorators, { kind: "method", name: "createPayment", static: false, private: false, access: { has: function (obj) { return "createPayment" in obj; }, get: function (obj) { return obj.createPayment; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _handlePaymeWebhook_decorators, { kind: "method", name: "handlePaymeWebhook", static: false, private: false, access: { has: function (obj) { return "handlePaymeWebhook" in obj; }, get: function (obj) { return obj.handlePaymeWebhook; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _testWebhook_decorators, { kind: "method", name: "testWebhook", static: false, private: false, access: { has: function (obj) { return "testWebhook" in obj; }, get: function (obj) { return obj.testWebhook; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPaymentStatus_decorators, { kind: "method", name: "getPaymentStatus", static: false, private: false, access: { has: function (obj) { return "getPaymentStatus" in obj; }, get: function (obj) { return obj.getPaymentStatus; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _checkPremiumStatus_decorators, { kind: "method", name: "checkPremiumStatus", static: false, private: false, access: { has: function (obj) { return "checkPremiumStatus" in obj; }, get: function (obj) { return obj.checkPremiumStatus; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPaymentHistory_decorators, { kind: "method", name: "getPaymentHistory", static: false, private: false, access: { has: function (obj) { return "getPaymentHistory" in obj; }, get: function (obj) { return obj.getPaymentHistory; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PaymentController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PaymentController = _classThis;
}();
exports.PaymentController = PaymentController;
