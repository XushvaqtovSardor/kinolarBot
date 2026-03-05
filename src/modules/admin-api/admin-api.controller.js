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
exports.AdminApiController = void 0;
var common_1 = require("@nestjs/common");
var admin_api_guard_1 = require("./admin-api.guard");
var client_1 = require("@prisma/client");
var AdminApiController = function () {
    var _classDecorators = [(0, common_1.Controller)('api/admin'), (0, common_1.UseGuards)(admin_api_guard_1.AdminApiGuard)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getMe_decorators;
    var _getStatistics_decorators;
    var _getAdmins_decorators;
    var _createAdmin_decorators;
    var _deleteAdmin_decorators;
    var _getUsers_decorators;
    var _getUser_decorators;
    var _blockUser_decorators;
    var _unblockUser_decorators;
    var _getFields_decorators;
    var _createField_decorators;
    var _deleteField_decorators;
    var _getMandatoryChannels_decorators;
    var _createMandatoryChannel_decorators;
    var _deleteMandatoryChannel_decorators;
    var _getDatabaseChannels_decorators;
    var _createDatabaseChannel_decorators;
    var _deleteDatabaseChannel_decorators;
    var _getMovies_decorators;
    var _createMovie_decorators;
    var _deleteMovie_decorators;
    var _getSerials_decorators;
    var _createSerial_decorators;
    var _deleteSerial_decorators;
    var _deleteMovieByCode_decorators;
    var _deleteSerialByCode_decorators;
    var _getPendingPayments_decorators;
    var _getApprovedPayments_decorators;
    var _getRejectedPayments_decorators;
    var _getPaymentStatistics_decorators;
    var _approvePayment_decorators;
    var _rejectPayment_decorators;
    var _getPremiumBannedUsers_decorators;
    var _unbanPremiumUser_decorators;
    var AdminApiController = _classThis = /** @class */ (function () {
        function AdminApiController_1(adminService, userService, fieldService, channelService, movieService, serialService, paymentService, prisma) {
            this.adminService = (__runInitializers(this, _instanceExtraInitializers), adminService);
            this.userService = userService;
            this.fieldService = fieldService;
            this.channelService = channelService;
            this.movieService = movieService;
            this.serialService = serialService;
            this.paymentService = paymentService;
            this.prisma = prisma;
            this.logger = new common_1.Logger(AdminApiController.name);
        }
        AdminApiController_1.prototype.getMe = function (req) {
            this.logger.log("\uD83D\uDC64 Admin ".concat(req.admin.telegramId, " accessed /me endpoint"));
            return req.admin;
        };
        AdminApiController_1.prototype.getStatistics = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, userStats, paymentStats, moviesCount, serialsCount, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.log('📊 Statistics endpoint accessed');
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all([
                                    this.userService.getUserStatistics(),
                                    this.paymentService.getStatistics(),
                                    this.movieService.getMovieCount(),
                                    this.serialService.getSerialCount(),
                                ])];
                        case 2:
                            _a = _b.sent(), userStats = _a[0], paymentStats = _a[1], moviesCount = _a[2], serialsCount = _a[3];
                            return [2 /*return*/, {
                                    totalUsers: userStats.totalUsers || 0,
                                    activeUsers: userStats.activeUsers || 0,
                                    premiumUsers: userStats.premiumUsers || 0,
                                    totalMovies: moviesCount || 0,
                                    totalSerials: serialsCount || 0,
                                    pendingPayments: paymentStats.pending || 0,
                                    approvedPayments: paymentStats.approved || 0,
                                    rejectedPayments: paymentStats.rejected || 0,
                                    users: userStats,
                                    payments: paymentStats,
                                }];
                        case 3:
                            error_1 = _b.sent();
                            this.logger.error('❌ Error fetching statistics');
                            this.logger.error("Error: ".concat(error_1.message));
                            this.logger.error('Stack:', error_1.stack);
                            throw error_1;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        AdminApiController_1.prototype.getAdmins = function (req) {
            return __awaiter(this, void 0, void 0, function () {
                var isSuperAdmin;
                return __generator(this, function (_a) {
                    this.logger.log("\uD83D\uDCCB Get admins requested by ".concat(req.admin.telegramId));
                    try {
                        isSuperAdmin = req.admin.role === client_1.AdminRole.SUPERADMIN;
                        if (!isSuperAdmin) {
                            this.logger.warn("\u26A0\uFE0F Non-superadmin ".concat(req.admin.telegramId, " tried to view admins"));
                            throw new common_1.HttpException('Only SuperAdmin can view admins', common_1.HttpStatus.FORBIDDEN);
                        }
                        return [2 /*return*/, this.adminService.findAll()];
                    }
                    catch (error) {
                        this.logger.error("\u274C Error in getAdmins: ".concat(error.message));
                        throw error;
                    }
                    return [2 /*return*/];
                });
            });
        };
        AdminApiController_1.prototype.createAdmin = function (req, body) {
            return __awaiter(this, void 0, void 0, function () {
                var isSuperAdmin, result, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log("\u2795 Create admin requested: ".concat(body.telegramId, " by ").concat(req.admin.telegramId));
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            isSuperAdmin = req.admin.role === client_1.AdminRole.SUPERADMIN;
                            if (!isSuperAdmin) {
                                this.logger.warn("\u26A0\uFE0F Non-superadmin ".concat(req.admin.telegramId, " tried to create admin"));
                                throw new common_1.HttpException('Only SuperAdmin can create admins', common_1.HttpStatus.FORBIDDEN);
                            }
                            return [4 /*yield*/, this.adminService.createAdmin({
                                    telegramId: body.telegramId,
                                    username: body.username,
                                    role: body.role,
                                    createdBy: req.admin.telegramId,
                                })];
                        case 2:
                            result = _a.sent();
                            this.logger.log("\u2705 Admin ".concat(body.telegramId, " created successfully"));
                            return [2 /*return*/, result];
                        case 3:
                            error_2 = _a.sent();
                            this.logger.error("\u274C Error creating admin: ".concat(error_2.message));
                            throw error_2;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        AdminApiController_1.prototype.deleteAdmin = function (req, telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var isSuperAdmin, adminToDelete, currentAdmin, canDelete, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log("\uD83D\uDDD1\uFE0F Delete admin requested: ".concat(telegramId, " by ").concat(req.admin.telegramId));
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            isSuperAdmin = req.admin.role === client_1.AdminRole.SUPERADMIN;
                            if (!isSuperAdmin) {
                                this.logger.warn("\u26A0\uFE0F Non-superadmin ".concat(req.admin.telegramId, " tried to delete admin"));
                                throw new common_1.HttpException('Only SuperAdmin can delete admins', common_1.HttpStatus.FORBIDDEN);
                            }
                            if (telegramId === req.admin.telegramId) {
                                throw new common_1.HttpException('Cannot delete yourself', common_1.HttpStatus.BAD_REQUEST);
                            }
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(telegramId)];
                        case 2:
                            adminToDelete = _a.sent();
                            if (!adminToDelete) {
                                throw new common_1.HttpException('Admin not found', common_1.HttpStatus.NOT_FOUND);
                            }
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(req.admin.telegramId)];
                        case 3:
                            currentAdmin = _a.sent();
                            if (!currentAdmin) {
                                throw new common_1.HttpException('Current admin not found', common_1.HttpStatus.NOT_FOUND);
                            }
                            canDelete = adminToDelete.createdBy === req.admin.telegramId ||
                                adminToDelete.createdAt > currentAdmin.createdAt;
                            if (!canDelete) {
                                throw new common_1.HttpException('You can only delete admins you created or admins created after you', common_1.HttpStatus.FORBIDDEN);
                            }
                            return [2 /*return*/, this.adminService.deleteAdmin(telegramId)];
                        case 4:
                            error_3 = _a.sent();
                            this.logger.error("\u274C Error deleting admin: ".concat(error_3.message));
                            throw error_3;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AdminApiController_1.prototype.getUsers = function () {
            return __awaiter(this, void 0, void 0, function () {
                var users, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log('📋 Get all users requested');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.userService.getAllUsers()];
                        case 2:
                            users = _a.sent();
                            this.logger.log("\u2705 Successfully fetched ".concat(users.length, " users"));
                            return [2 /*return*/, users];
                        case 3:
                            error_4 = _a.sent();
                            this.logger.error("\u274C Error fetching users: ".concat(error_4.message));
                            this.logger.error('Stack:', error_4.stack);
                            throw error_4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        AdminApiController_1.prototype.getUser = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log("\uD83D\uDCCB Get user ".concat(telegramId, " requested"));
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.userService.findByTelegramId(telegramId)];
                        case 2: return [2 /*return*/, _a.sent()];
                        case 3:
                            error_5 = _a.sent();
                            this.logger.error("\u274C Error fetching user ".concat(telegramId, ": ").concat(error_5.message));
                            throw error_5;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        AdminApiController_1.prototype.blockUser = function (telegramId, body) {
            return __awaiter(this, void 0, void 0, function () {
                var result, result, error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log("\uD83D\uDEAB ".concat(body.block !== false ? 'Blocking' : 'Unblocking', " user ").concat(telegramId));
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            if (!(body.block === false)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.userService.unblockUser(telegramId)];
                        case 2:
                            result = _a.sent();
                            this.logger.log("\u2705 User ".concat(telegramId, " unblocked successfully"));
                            return [2 /*return*/, result];
                        case 3: return [4 /*yield*/, this.userService.blockUser(telegramId, body.reason)];
                        case 4:
                            result = _a.sent();
                            this.logger.log("\u2705 User ".concat(telegramId, " blocked successfully"));
                            return [2 /*return*/, result];
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            error_6 = _a.sent();
                            this.logger.error("\u274C Error blocking/unblocking user ".concat(telegramId, ": ").concat(error_6.message));
                            throw error_6;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        AdminApiController_1.prototype.unblockUser = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var result, error_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log("\u2705 Unblocking user ".concat(telegramId));
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.userService.unblockUser(telegramId)];
                        case 2:
                            result = _a.sent();
                            this.logger.log("\u2705 User ".concat(telegramId, " unblocked successfully"));
                            return [2 /*return*/, result];
                        case 3:
                            error_7 = _a.sent();
                            this.logger.error("\u274C Error unblocking user ".concat(telegramId, ": ").concat(error_7.message));
                            throw error_7;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        AdminApiController_1.prototype.getFields = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.fieldService.findAll()];
                });
            });
        };
        AdminApiController_1.prototype.createField = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var link, channelId, match;
                return __generator(this, function (_a) {
                    link = (body.channelLink || '').trim();
                    if (link.startsWith('@') || link.startsWith('-100')) {
                        channelId = link;
                    }
                    else {
                        match = link.match(/(?:https?:\/\/)?t\.me\/([^/?#]+)/i);
                        if (match === null || match === void 0 ? void 0 : match[1]) {
                            channelId = '@' + match[1];
                        }
                    }
                    if (!channelId) {
                        throw new common_1.BadRequestException("Kanal linki noto'g'ri. Masalan: https://t.me/kanal_nomi yoki @kanal_nomi");
                    }
                    return [2 /*return*/, this.fieldService.create({
                            name: body.name,
                            channelId: channelId,
                            channelLink: body.channelLink,
                        })];
                });
            });
        };
        AdminApiController_1.prototype.deleteField = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.fieldService.delete(+id)];
                });
            });
        };
        AdminApiController_1.prototype.getMandatoryChannels = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.channelService.findAll()];
                });
            });
        };
        AdminApiController_1.prototype.createMandatoryChannel = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var channelId, match;
                return __generator(this, function (_a) {
                    channelId = body.channelId;
                    if (!channelId && body.channelLink) {
                        match = body.channelLink.match(/t\.me\/([^/?]+)/);
                        if (match) {
                            channelId = '@' + match[1];
                        }
                        else {
                            channelId = body.channelLink;
                        }
                    }
                    return [2 /*return*/, this.channelService.create(channelId, body.channelName, body.channelLink, body.order)];
                });
            });
        };
        AdminApiController_1.prototype.deleteMandatoryChannel = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.channelService.delete(+id)];
                });
            });
        };
        AdminApiController_1.prototype.getDatabaseChannels = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.channelService.findAllDatabase()];
                });
            });
        };
        AdminApiController_1.prototype.createDatabaseChannel = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.channelService.createDatabaseChannel({
                            channelId: body.channelId,
                            channelName: body.channelName,
                            isActive: true,
                        })];
                });
            });
        };
        AdminApiController_1.prototype.deleteDatabaseChannel = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.channelService.deleteDatabaseChannel(+id)];
                });
            });
        };
        AdminApiController_1.prototype.getMovies = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.movieService.findAll()];
                });
            });
        };
        AdminApiController_1.prototype.createMovie = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.movieService.create(body)];
                });
            });
        };
        AdminApiController_1.prototype.deleteMovie = function (req, id) {
            return __awaiter(this, void 0, void 0, function () {
                var canDelete;
                return __generator(this, function (_a) {
                    canDelete = req.admin.role === client_1.AdminRole.SUPERADMIN || req.admin.canDeleteContent;
                    if (!canDelete) {
                        throw new common_1.HttpException('No permission to delete content', common_1.HttpStatus.FORBIDDEN);
                    }
                    return [2 /*return*/, this.movieService.delete(+id)];
                });
            });
        };
        AdminApiController_1.prototype.getSerials = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.serialService.findAll()];
                });
            });
        };
        AdminApiController_1.prototype.createSerial = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.serialService.create(body)];
                });
            });
        };
        AdminApiController_1.prototype.deleteSerial = function (req, id) {
            return __awaiter(this, void 0, void 0, function () {
                var canDelete;
                return __generator(this, function (_a) {
                    canDelete = req.admin.role === client_1.AdminRole.SUPERADMIN || req.admin.canDeleteContent;
                    if (!canDelete) {
                        throw new common_1.HttpException('No permission to delete content', common_1.HttpStatus.FORBIDDEN);
                    }
                    return [2 /*return*/, this.serialService.delete(+id)];
                });
            });
        };
        AdminApiController_1.prototype.deleteMovieByCode = function (req, code) {
            return __awaiter(this, void 0, void 0, function () {
                var canDelete, movie, deletedFromFieldChannel, deletedFromDatabaseChannel;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            canDelete = req.admin.role === client_1.AdminRole.SUPERADMIN || req.admin.canDeleteContent;
                            if (!canDelete) {
                                throw new common_1.HttpException('No permission to delete content', common_1.HttpStatus.FORBIDDEN);
                            }
                            return [4 /*yield*/, this.prisma.movie.findUnique({
                                    where: { code: parseInt(code) },
                                    include: {
                                        episodes: true,
                                        field: {
                                            include: {
                                                databaseChannel: true,
                                            },
                                        },
                                    },
                                })];
                        case 1:
                            movie = _d.sent();
                            if (!movie) {
                                throw new common_1.NotFoundException("Movie with code ".concat(code, " not found"));
                            }
                            deletedFromFieldChannel = false;
                            if (movie.channelMessageId && ((_a = movie.field) === null || _a === void 0 ? void 0 : _a.channelId)) {
                                try {
                                    deletedFromFieldChannel = true;
                                }
                                catch (error) { }
                            }
                            deletedFromDatabaseChannel = false;
                            if (movie.channelMessageId && ((_c = (_b = movie.field) === null || _b === void 0 ? void 0 : _b.databaseChannel) === null || _c === void 0 ? void 0 : _c.channelId)) {
                                try {
                                    deletedFromDatabaseChannel = true;
                                }
                                catch (error) { }
                            }
                            return [4 /*yield*/, this.prisma.movieEpisode.deleteMany({
                                    where: { movieId: movie.id },
                                })];
                        case 2:
                            _d.sent();
                            return [4 /*yield*/, this.prisma.watchHistory.deleteMany({
                                    where: { movieId: movie.id },
                                })];
                        case 3:
                            _d.sent();
                            return [4 /*yield*/, this.prisma.movie.delete({
                                    where: { id: movie.id },
                                })];
                        case 4:
                            _d.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    message: "Movie \"".concat(movie.title, "\" (code: ").concat(code, ") deleted successfully"),
                                    deletedEpisodes: movie.episodes.length,
                                    deletedFromChannels: movie.channelMessageId ? 'Yes' : 'No',
                                }];
                    }
                });
            });
        };
        AdminApiController_1.prototype.deleteSerialByCode = function (req, code) {
            return __awaiter(this, void 0, void 0, function () {
                var canDelete, serial, deletedFromChannels;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            canDelete = req.admin.role === client_1.AdminRole.SUPERADMIN || req.admin.canDeleteContent;
                            if (!canDelete) {
                                throw new common_1.HttpException('No permission to delete content', common_1.HttpStatus.FORBIDDEN);
                            }
                            return [4 /*yield*/, this.prisma.serial.findUnique({
                                    where: { code: parseInt(code) },
                                    include: {
                                        episodes: true,
                                        field: {
                                            include: {
                                                databaseChannel: true,
                                            },
                                        },
                                    },
                                })];
                        case 1:
                            serial = _a.sent();
                            if (!serial) {
                                throw new common_1.NotFoundException("Serial with code ".concat(code, " not found"));
                            }
                            deletedFromChannels = false;
                            if (serial.channelMessageId) {
                                deletedFromChannels = true;
                            }
                            return [4 /*yield*/, this.prisma.episode.deleteMany({
                                    where: { serialId: serial.id },
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.prisma.watchHistory.deleteMany({
                                    where: { serialId: serial.id },
                                })];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.prisma.serial.delete({
                                    where: { id: serial.id },
                                })];
                        case 4:
                            _a.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    message: "Serial \"".concat(serial.title, "\" (code: ").concat(code, ") deleted successfully"),
                                    deletedEpisodes: serial.episodes.length,
                                    deletedFromChannels: deletedFromChannels ? 'Yes' : 'No',
                                }];
                    }
                });
            });
        };
        AdminApiController_1.prototype.getPendingPayments = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.paymentService.findPending()];
                });
            });
        };
        AdminApiController_1.prototype.getApprovedPayments = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.paymentService.findByStatus('APPROVED')];
                });
            });
        };
        AdminApiController_1.prototype.getRejectedPayments = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.paymentService.findByStatus('REJECTED')];
                });
            });
        };
        AdminApiController_1.prototype.getPaymentStatistics = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.paymentService.getStatistics()];
                });
            });
        };
        AdminApiController_1.prototype.approvePayment = function (req, id, body) {
            return __awaiter(this, void 0, void 0, function () {
                var hasPermission, admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.adminService.hasPermission(req.admin.telegramId, 'APPROVE_PAYMENTS')];
                        case 1:
                            hasPermission = _a.sent();
                            if (!hasPermission) {
                                throw new common_1.HttpException('No permission to approve payments', common_1.HttpStatus.FORBIDDEN);
                            }
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(req.admin.telegramId)];
                        case 2:
                            admin = _a.sent();
                            return [2 /*return*/, this.paymentService.approve(+id, admin.id, body.durationDays)];
                    }
                });
            });
        };
        AdminApiController_1.prototype.rejectPayment = function (req, id, body) {
            return __awaiter(this, void 0, void 0, function () {
                var hasPermission, admin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.adminService.hasPermission(req.admin.telegramId, 'APPROVE_PAYMENTS')];
                        case 1:
                            hasPermission = _a.sent();
                            if (!hasPermission) {
                                throw new common_1.HttpException('No permission to reject payments', common_1.HttpStatus.FORBIDDEN);
                            }
                            return [4 /*yield*/, this.adminService.getAdminByTelegramId(req.admin.telegramId)];
                        case 2:
                            admin = _a.sent();
                            return [2 /*return*/, this.paymentService.reject(+id, admin.id, body.reason)];
                    }
                });
            });
        };
        AdminApiController_1.prototype.getPremiumBannedUsers = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.userService.getPremiumBannedUsers()];
                });
            });
        };
        AdminApiController_1.prototype.unbanPremiumUser = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.userService.unbanFromPremium(telegramId)];
                });
            });
        };
        return AdminApiController_1;
    }());
    __setFunctionName(_classThis, "AdminApiController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getMe_decorators = [(0, common_1.Get)('me')];
        _getStatistics_decorators = [(0, common_1.Get)('stats')];
        _getAdmins_decorators = [(0, common_1.Get)('admins')];
        _createAdmin_decorators = [(0, common_1.Post)('admins')];
        _deleteAdmin_decorators = [(0, common_1.Delete)('admins/:telegramId')];
        _getUsers_decorators = [(0, common_1.Get)('users')];
        _getUser_decorators = [(0, common_1.Get)('users/:telegramId')];
        _blockUser_decorators = [(0, common_1.Put)('users/:telegramId/block')];
        _unblockUser_decorators = [(0, common_1.Put)('users/:telegramId/unblock')];
        _getFields_decorators = [(0, common_1.Get)('fields')];
        _createField_decorators = [(0, common_1.Post)('fields')];
        _deleteField_decorators = [(0, common_1.Delete)('fields/:id')];
        _getMandatoryChannels_decorators = [(0, common_1.Get)('channels/mandatory')];
        _createMandatoryChannel_decorators = [(0, common_1.Post)('channels/mandatory')];
        _deleteMandatoryChannel_decorators = [(0, common_1.Delete)('channels/mandatory/:id')];
        _getDatabaseChannels_decorators = [(0, common_1.Get)('channels/database')];
        _createDatabaseChannel_decorators = [(0, common_1.Post)('channels/database')];
        _deleteDatabaseChannel_decorators = [(0, common_1.Delete)('channels/database/:id')];
        _getMovies_decorators = [(0, common_1.Get)('movies')];
        _createMovie_decorators = [(0, common_1.Post)('movies')];
        _deleteMovie_decorators = [(0, common_1.Delete)('movies/:id')];
        _getSerials_decorators = [(0, common_1.Get)('serials')];
        _createSerial_decorators = [(0, common_1.Post)('serials')];
        _deleteSerial_decorators = [(0, common_1.Delete)('serials/:id')];
        _deleteMovieByCode_decorators = [(0, common_1.Delete)('movies/code/:code')];
        _deleteSerialByCode_decorators = [(0, common_1.Delete)('serials/code/:code')];
        _getPendingPayments_decorators = [(0, common_1.Get)('payments/pending')];
        _getApprovedPayments_decorators = [(0, common_1.Get)('payments/approved')];
        _getRejectedPayments_decorators = [(0, common_1.Get)('payments/rejected')];
        _getPaymentStatistics_decorators = [(0, common_1.Get)('payments/statistics')];
        _approvePayment_decorators = [(0, common_1.Put)('payments/:id/approve')];
        _rejectPayment_decorators = [(0, common_1.Put)('payments/:id/reject')];
        _getPremiumBannedUsers_decorators = [(0, common_1.Get)('users/premium-banned')];
        _unbanPremiumUser_decorators = [(0, common_1.Put)('users/:telegramId/unban-premium')];
        __esDecorate(_classThis, null, _getMe_decorators, { kind: "method", name: "getMe", static: false, private: false, access: { has: function (obj) { return "getMe" in obj; }, get: function (obj) { return obj.getMe; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getStatistics_decorators, { kind: "method", name: "getStatistics", static: false, private: false, access: { has: function (obj) { return "getStatistics" in obj; }, get: function (obj) { return obj.getStatistics; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAdmins_decorators, { kind: "method", name: "getAdmins", static: false, private: false, access: { has: function (obj) { return "getAdmins" in obj; }, get: function (obj) { return obj.getAdmins; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createAdmin_decorators, { kind: "method", name: "createAdmin", static: false, private: false, access: { has: function (obj) { return "createAdmin" in obj; }, get: function (obj) { return obj.createAdmin; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteAdmin_decorators, { kind: "method", name: "deleteAdmin", static: false, private: false, access: { has: function (obj) { return "deleteAdmin" in obj; }, get: function (obj) { return obj.deleteAdmin; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getUsers_decorators, { kind: "method", name: "getUsers", static: false, private: false, access: { has: function (obj) { return "getUsers" in obj; }, get: function (obj) { return obj.getUsers; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getUser_decorators, { kind: "method", name: "getUser", static: false, private: false, access: { has: function (obj) { return "getUser" in obj; }, get: function (obj) { return obj.getUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _blockUser_decorators, { kind: "method", name: "blockUser", static: false, private: false, access: { has: function (obj) { return "blockUser" in obj; }, get: function (obj) { return obj.blockUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _unblockUser_decorators, { kind: "method", name: "unblockUser", static: false, private: false, access: { has: function (obj) { return "unblockUser" in obj; }, get: function (obj) { return obj.unblockUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getFields_decorators, { kind: "method", name: "getFields", static: false, private: false, access: { has: function (obj) { return "getFields" in obj; }, get: function (obj) { return obj.getFields; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createField_decorators, { kind: "method", name: "createField", static: false, private: false, access: { has: function (obj) { return "createField" in obj; }, get: function (obj) { return obj.createField; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteField_decorators, { kind: "method", name: "deleteField", static: false, private: false, access: { has: function (obj) { return "deleteField" in obj; }, get: function (obj) { return obj.deleteField; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getMandatoryChannels_decorators, { kind: "method", name: "getMandatoryChannels", static: false, private: false, access: { has: function (obj) { return "getMandatoryChannels" in obj; }, get: function (obj) { return obj.getMandatoryChannels; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createMandatoryChannel_decorators, { kind: "method", name: "createMandatoryChannel", static: false, private: false, access: { has: function (obj) { return "createMandatoryChannel" in obj; }, get: function (obj) { return obj.createMandatoryChannel; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteMandatoryChannel_decorators, { kind: "method", name: "deleteMandatoryChannel", static: false, private: false, access: { has: function (obj) { return "deleteMandatoryChannel" in obj; }, get: function (obj) { return obj.deleteMandatoryChannel; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getDatabaseChannels_decorators, { kind: "method", name: "getDatabaseChannels", static: false, private: false, access: { has: function (obj) { return "getDatabaseChannels" in obj; }, get: function (obj) { return obj.getDatabaseChannels; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createDatabaseChannel_decorators, { kind: "method", name: "createDatabaseChannel", static: false, private: false, access: { has: function (obj) { return "createDatabaseChannel" in obj; }, get: function (obj) { return obj.createDatabaseChannel; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteDatabaseChannel_decorators, { kind: "method", name: "deleteDatabaseChannel", static: false, private: false, access: { has: function (obj) { return "deleteDatabaseChannel" in obj; }, get: function (obj) { return obj.deleteDatabaseChannel; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getMovies_decorators, { kind: "method", name: "getMovies", static: false, private: false, access: { has: function (obj) { return "getMovies" in obj; }, get: function (obj) { return obj.getMovies; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createMovie_decorators, { kind: "method", name: "createMovie", static: false, private: false, access: { has: function (obj) { return "createMovie" in obj; }, get: function (obj) { return obj.createMovie; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteMovie_decorators, { kind: "method", name: "deleteMovie", static: false, private: false, access: { has: function (obj) { return "deleteMovie" in obj; }, get: function (obj) { return obj.deleteMovie; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getSerials_decorators, { kind: "method", name: "getSerials", static: false, private: false, access: { has: function (obj) { return "getSerials" in obj; }, get: function (obj) { return obj.getSerials; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createSerial_decorators, { kind: "method", name: "createSerial", static: false, private: false, access: { has: function (obj) { return "createSerial" in obj; }, get: function (obj) { return obj.createSerial; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteSerial_decorators, { kind: "method", name: "deleteSerial", static: false, private: false, access: { has: function (obj) { return "deleteSerial" in obj; }, get: function (obj) { return obj.deleteSerial; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteMovieByCode_decorators, { kind: "method", name: "deleteMovieByCode", static: false, private: false, access: { has: function (obj) { return "deleteMovieByCode" in obj; }, get: function (obj) { return obj.deleteMovieByCode; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteSerialByCode_decorators, { kind: "method", name: "deleteSerialByCode", static: false, private: false, access: { has: function (obj) { return "deleteSerialByCode" in obj; }, get: function (obj) { return obj.deleteSerialByCode; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPendingPayments_decorators, { kind: "method", name: "getPendingPayments", static: false, private: false, access: { has: function (obj) { return "getPendingPayments" in obj; }, get: function (obj) { return obj.getPendingPayments; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getApprovedPayments_decorators, { kind: "method", name: "getApprovedPayments", static: false, private: false, access: { has: function (obj) { return "getApprovedPayments" in obj; }, get: function (obj) { return obj.getApprovedPayments; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getRejectedPayments_decorators, { kind: "method", name: "getRejectedPayments", static: false, private: false, access: { has: function (obj) { return "getRejectedPayments" in obj; }, get: function (obj) { return obj.getRejectedPayments; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPaymentStatistics_decorators, { kind: "method", name: "getPaymentStatistics", static: false, private: false, access: { has: function (obj) { return "getPaymentStatistics" in obj; }, get: function (obj) { return obj.getPaymentStatistics; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _approvePayment_decorators, { kind: "method", name: "approvePayment", static: false, private: false, access: { has: function (obj) { return "approvePayment" in obj; }, get: function (obj) { return obj.approvePayment; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _rejectPayment_decorators, { kind: "method", name: "rejectPayment", static: false, private: false, access: { has: function (obj) { return "rejectPayment" in obj; }, get: function (obj) { return obj.rejectPayment; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPremiumBannedUsers_decorators, { kind: "method", name: "getPremiumBannedUsers", static: false, private: false, access: { has: function (obj) { return "getPremiumBannedUsers" in obj; }, get: function (obj) { return obj.getPremiumBannedUsers; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _unbanPremiumUser_decorators, { kind: "method", name: "unbanPremiumUser", static: false, private: false, access: { has: function (obj) { return "unbanPremiumUser" in obj; }, get: function (obj) { return obj.unbanPremiumUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AdminApiController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AdminApiController = _classThis;
}();
exports.AdminApiController = AdminApiController;
