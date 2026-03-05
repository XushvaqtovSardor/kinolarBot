"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumRequired = exports.PREMIUM_REQUIRED_KEY = void 0;
var common_1 = require("@nestjs/common");
exports.PREMIUM_REQUIRED_KEY = 'premium_required';
var PremiumRequired = function () { return (0, common_1.SetMetadata)(exports.PREMIUM_REQUIRED_KEY, true); };
exports.PremiumRequired = PremiumRequired;
