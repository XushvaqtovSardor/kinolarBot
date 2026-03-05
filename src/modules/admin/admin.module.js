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
exports.AdminModule = void 0;
var common_1 = require("@nestjs/common");
var admin_service_1 = require("./services/admin.service");
var session_service_1 = require("./services/session.service");
var serial_management_service_1 = require("./services/serial-management.service");
var admin_guard_1 = require("./guards/admin.guard");
var roles_guard_1 = require("./guards/roles.guard");
var prisma_module_1 = require("../../prisma/prisma.module");
var content_module_1 = require("../content/content.module");
var field_module_1 = require("../field/field.module");
var channel_module_1 = require("../channel/channel.module");
var grammy_bot_module_1 = require("../../common/grammy/grammy-bot.module");
var AdminModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                prisma_module_1.PrismaModule,
                content_module_1.ContentModule,
                field_module_1.FieldModule,
                channel_module_1.ChannelModule,
                grammy_bot_module_1.GrammyBotModule,
            ],
            providers: [
                admin_service_1.AdminService,
                session_service_1.SessionService,
                serial_management_service_1.SerialManagementService,
                admin_guard_1.AdminGuard,
                roles_guard_1.RolesGuard,
            ],
            exports: [
                admin_service_1.AdminService,
                session_service_1.SessionService,
                serial_management_service_1.SerialManagementService,
                admin_guard_1.AdminGuard,
                roles_guard_1.RolesGuard,
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AdminModule = _classThis = /** @class */ (function () {
        function AdminModule_1() {
        }
        return AdminModule_1;
    }());
    __setFunctionName(_classThis, "AdminModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AdminModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AdminModule = _classThis;
}();
exports.AdminModule = AdminModule;
