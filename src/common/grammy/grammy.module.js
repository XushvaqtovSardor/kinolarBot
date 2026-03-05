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
exports.GrammyModule = void 0;
exports.Update = Update;
exports.Hears = Hears;
exports.Command = Command;
exports.Action = Action;
exports.On = On;
exports.Ctx = Ctx;
exports.InjectBot = InjectBot;
var common_1 = require("@nestjs/common");
var grammy_1 = require("grammy");
var GrammyModule = function () {
    var _classDecorators = [(0, common_1.Global)(), (0, common_1.Module)({})];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var GrammyModule = _classThis = /** @class */ (function () {
        function GrammyModule_1() {
        }
        GrammyModule_1.forRoot = function (options) {
            var bot = new grammy_1.Bot(options.token);
            var botProvider = {
                provide: 'BOT_INSTANCE',
                useValue: bot,
            };
            return {
                module: GrammyModule,
                providers: [botProvider],
                exports: [botProvider],
            };
        };
        return GrammyModule_1;
    }());
    __setFunctionName(_classThis, "GrammyModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GrammyModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GrammyModule = _classThis;
}();
exports.GrammyModule = GrammyModule;
function Update() {
    return function (target) {
        Reflect.defineMetadata('is:update:handler', true, target);
        return target;
    };
}
function Hears(text) {
    return function (target, propertyKey, descriptor) {
        var original = descriptor.value;
        descriptor.value = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var ctx = args[0];
            var texts = Array.isArray(text) ? text : [text];
            if (((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text) && texts.includes(ctx.message.text)) {
                return original.apply(this, args);
            }
        };
        return descriptor;
    };
}
function Command(command) {
    return function (target, propertyKey, descriptor) {
        var original = descriptor.value;
        descriptor.value = function () {
            var _a, _b;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var ctx = args[0];
            if ((_b = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.startsWith("/".concat(command))) {
                return original.apply(this, args);
            }
        };
        return descriptor;
    };
}
function Action(action) {
    return function (target, propertyKey, descriptor) {
        var original = descriptor.value;
        descriptor.value = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var ctx = args[0];
            if ((_a = ctx.callbackQuery) === null || _a === void 0 ? void 0 : _a.data) {
                var match = typeof action === 'string'
                    ? ctx.callbackQuery.data === action
                    : action.test(ctx.callbackQuery.data);
                if (match) {
                    if (action instanceof RegExp) {
                        ctx.match = ctx.callbackQuery.data.match(action);
                    }
                    return original.apply(this, args);
                }
            }
        };
        return descriptor;
    };
}
function On(updateType) {
    return function (target, propertyKey, descriptor) {
        var original = descriptor.value;
        descriptor.value = function () {
            var _a, _b, _c;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var ctx = args[0];
            if (updateType === 'text' && ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text)) {
                return original.apply(this, args);
            }
            if (updateType === 'photo' && ((_b = ctx.message) === null || _b === void 0 ? void 0 : _b.photo)) {
                return original.apply(this, args);
            }
            if (updateType === 'video' && ((_c = ctx.message) === null || _c === void 0 ? void 0 : _c.video)) {
                return original.apply(this, args);
            }
        };
        return descriptor;
    };
}
function Ctx() {
    return function (target, propertyKey, parameterIndex) {
    };
}
function InjectBot() {
    return function (target, propertyKey, parameterIndex) {
    };
}
