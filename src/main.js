"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@nestjs/core");
var app_module_1 = require("./app.module");
var logger_config_1 = require("./common/config/logger.config");
var common_1 = require("@nestjs/common");
var path_1 = require("path");
var grammy_bot_module_1 = require("./common/grammy/grammy-bot.module");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var logger, app_1, port, webUrl, grammyBot_1, error_1;
        var _this = this;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    logger = new common_1.Logger('Bootstrap');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, core_1.NestFactory.create(app_module_1.AppModule, {
                            logger: logger_config_1.loggerConfig,
                        })];
                case 2:
                    app_1 = _b.sent();
                    app_1.enableCors({
                        origin: '*',
                        credentials: true,
                    });
                    // Serve static files from public directory
                    app_1.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
                    port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
                    webUrl = process.env.WEB_URL || "http://localhost:".concat(port);
                    return [4 /*yield*/, app_1.listen(port, '0.0.0.0')];
                case 3:
                    _b.sent();
                    logger.log("\u2705 Server is running on: ".concat(webUrl));
                    logger.log("\u2705 Admin panel: ".concat(webUrl, "/admin"));
                    logger.log("\u2705 API docs: ".concat(webUrl, "/api"));
                    grammyBot_1 = app_1.get(grammy_bot_module_1.GrammyBotService);
                    // Start bot in background - don't await
                    grammyBot_1.startBot().catch(function (botError) {
                        logger.error('❌ Failed to initialize Telegram bot');
                        logger.error("Bot Error: ".concat(botError.message));
                    });
                    return [4 /*yield*/, initializeDefaultChannel(app_1)];
                case 4:
                    _b.sent();
                    // Handle graceful shutdown
                    process.on('SIGINT', function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, grammyBot_1.bot.stop()];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_2 = _a.sent();
                                    return [3 /*break*/, 3];
                                case 3: return [4 /*yield*/, app_1.close()];
                                case 4:
                                    _a.sent();
                                    process.exit(0);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    process.on('SIGTERM', function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, grammyBot_1.bot.stop()];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_3 = _a.sent();
                                    return [3 /*break*/, 3];
                                case 3: return [4 /*yield*/, app_1.close()];
                                case 4:
                                    _a.sent();
                                    process.exit(0);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _b.sent();
                    logger.error('❌ Critical error during bootstrap');
                    logger.error("Error: ".concat(error_1.message));
                    logger.error('Stack:', error_1.stack);
                    throw error_1;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function initializeDefaultChannel(app) {
    return __awaiter(this, void 0, void 0, function () {
        var logger, channelLink, channelName_1, ChannelService, PrismaService, prismaService, channelService, existingChannels, channelExists, error_4, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger = new common_1.Logger('DatabaseChannelInit');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    channelLink = process.env.DEFAULT_DATABASE_CHANNEL_LINK;
                    channelName_1 = process.env.DEFAULT_DATABASE_CHANNEL_NAME || 'Default Database';
                    if (!channelLink) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, Promise.resolve().then(function () { return require('./modules/channel/services/channel.service'); })];
                case 2:
                    ChannelService = (_a.sent()).ChannelService;
                    return [4 /*yield*/, Promise.resolve().then(function () { return require('./prisma/prisma.service'); })];
                case 3:
                    PrismaService = (_a.sent()).PrismaService;
                    prismaService = app.get(PrismaService);
                    channelService = new ChannelService(prismaService);
                    return [4 /*yield*/, channelService.findAllDatabase()];
                case 4:
                    existingChannels = _a.sent();
                    channelExists = existingChannels.some(function (ch) { return ch.channelName === channelName_1; });
                    if (channelExists) {
                        return [2 /*return*/];
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_4 = _a.sent();
                    err = error_4;
                    logger.error("\u274C Failed to initialize database channel: ".concat(err.message));
                    logger.error('Database channel error stack:', err.stack);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
bootstrap().catch(function (error) {
    var logger = new common_1.Logger('Bootstrap');
    var err = error;
    logger.error('❌ Application failed to start');
    logger.error("Error: ".concat(err.message));
    logger.error('Stack:', err.stack);
    process.exit(1);
});
