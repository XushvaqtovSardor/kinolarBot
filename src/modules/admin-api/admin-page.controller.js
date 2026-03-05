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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPageController = void 0;
var common_1 = require("@nestjs/common");
var path_1 = require("path");
var AdminPageController = function () {
    var _classDecorators = [(0, common_1.Controller)('admin')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getLoginPage_decorators;
    var _getDashboardPage_decorators;
    var _getDashboardPageWithExtension_decorators;
    var _getDashboardCss_decorators;
    var _getDashboardJs_decorators;
    var AdminPageController = _classThis = /** @class */ (function () {
        function AdminPageController_1() {
            __runInitializers(this, _instanceExtraInitializers);
        }
        AdminPageController_1.prototype.getLoginPage = function (res) {
            return res.sendFile((0, path_1.join)(__dirname, '..', '..', '..', 'public', 'admin', 'index.html'));
        };
        AdminPageController_1.prototype.getDashboardPage = function (res) {
            return res.sendFile((0, path_1.join)(__dirname, '..', '..', '..', 'public', 'admin', 'dashboard.html'));
        };
        AdminPageController_1.prototype.getDashboardPageWithExtension = function (res) {
            return res.sendFile((0, path_1.join)(__dirname, '..', '..', '..', 'public', 'admin', 'dashboard.html'));
        };
        AdminPageController_1.prototype.getDashboardCss = function (res) {
            res.setHeader('Content-Type', 'text/css');
            return res.sendFile((0, path_1.join)(__dirname, '..', '..', '..', 'public', 'admin', 'dashboard.css'));
        };
        AdminPageController_1.prototype.getDashboardJs = function (res) {
            res.setHeader('Content-Type', 'application/javascript');
            return res.sendFile((0, path_1.join)(__dirname, '..', '..', '..', 'public', 'admin', 'dashboard.js'));
        };
        return AdminPageController_1;
    }());
    __setFunctionName(_classThis, "AdminPageController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getLoginPage_decorators = [(0, common_1.Get)()];
        _getDashboardPage_decorators = [(0, common_1.Get)('dashboard')];
        _getDashboardPageWithExtension_decorators = [(0, common_1.Get)('dashboard.html')];
        _getDashboardCss_decorators = [(0, common_1.Get)('dashboard.css')];
        _getDashboardJs_decorators = [(0, common_1.Get)('dashboard.js')];
        __esDecorate(_classThis, null, _getLoginPage_decorators, { kind: "method", name: "getLoginPage", static: false, private: false, access: { has: function (obj) { return "getLoginPage" in obj; }, get: function (obj) { return obj.getLoginPage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getDashboardPage_decorators, { kind: "method", name: "getDashboardPage", static: false, private: false, access: { has: function (obj) { return "getDashboardPage" in obj; }, get: function (obj) { return obj.getDashboardPage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getDashboardPageWithExtension_decorators, { kind: "method", name: "getDashboardPageWithExtension", static: false, private: false, access: { has: function (obj) { return "getDashboardPageWithExtension" in obj; }, get: function (obj) { return obj.getDashboardPageWithExtension; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getDashboardCss_decorators, { kind: "method", name: "getDashboardCss", static: false, private: false, access: { has: function (obj) { return "getDashboardCss" in obj; }, get: function (obj) { return obj.getDashboardCss; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getDashboardJs_decorators, { kind: "method", name: "getDashboardJs", static: false, private: false, access: { has: function (obj) { return "getDashboardJs" in obj; }, get: function (obj) { return obj.getDashboardJs; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AdminPageController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AdminPageController = _classThis;
}();
exports.AdminPageController = AdminPageController;
