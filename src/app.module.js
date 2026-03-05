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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var app_controller_1 = require("./app.controller");
var bot_module_1 = require("./bot/bot.module");
var prisma_module_1 = require("./prisma/prisma.module");
var language_module_1 = require("./modules/language/language.module");
var admin_module_1 = require("./modules/admin/admin.module");
var field_module_1 = require("./modules/field/field.module");
var channel_module_1 = require("./modules/channel/channel.module");
var content_module_1 = require("./modules/content/content.module");
var payment_module_1 = require("./modules/payment/payment.module");
var user_module_1 = require("./modules/user/user.module");
var broadcast_module_1 = require("./modules/broadcast/broadcast.module");
var settings_module_1 = require("./modules/settings/settings.module");
var user_handlers_module_1 = require("./modules/user/user-handlers.module");
var admin_handlers_module_1 = require("./modules/admin/admin-handlers.module");
var admin_api_module_1 = require("./modules/admin-api/admin-api.module");
var grammy_bot_module_1 = require("./common/grammy/grammy-bot.module");
var AppModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                prisma_module_1.PrismaModule,
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                }),
                grammy_bot_module_1.GrammyBotModule,
                language_module_1.LanguageModule,
                admin_module_1.AdminModule,
                field_module_1.FieldModule,
                channel_module_1.ChannelModule,
                content_module_1.ContentModule,
                payment_module_1.PaymentModule,
                user_module_1.UserModule,
                broadcast_module_1.BroadcastModule,
                settings_module_1.SettingsModule,
                admin_handlers_module_1.AdminHandlersModule,
                user_handlers_module_1.UserHandlersModule,
                admin_api_module_1.AdminApiModule,
                bot_module_1.BotModule,
            ],
            controllers: [app_controller_1.AppController],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AppModule = _classThis = /** @class */ (function () {
        function AppModule_1() {
        }
        return AppModule_1;
    }());
    __setFunctionName(_classThis, "AppModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
}();
exports.AppModule = AppModule;
