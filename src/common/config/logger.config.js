"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerConfig = void 0;
var winston = require("winston");
var winston_daily_rotate_file_1 = require("winston-daily-rotate-file");
var nest_winston_1 = require("nest-winston");
var logDir = 'logs';
var consoleFormat = winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston.format.colorize({ all: true }), winston.format.printf(function (_a) {
    var timestamp = _a.timestamp, level = _a.level, message = _a.message, context = _a.context, trace = _a.trace;
    var contextStr = context ? "[".concat(String(context), "]") : '';
    var traceStr = trace ? "\n".concat(String(trace)) : '';
    return "".concat(String(timestamp), " ").concat(String(level), " ").concat(contextStr, " ").concat(String(message)).concat(traceStr);
}));
var fileFormat = winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston.format.errors({ stack: true }), winston.format.splat(), winston.format.json());
var errorFileTransport = new winston_daily_rotate_file_1.default({
    filename: "".concat(logDir, "/error-%DATE%.log"),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level: 'error',
    format: fileFormat,
});
var combinedFileTransport = new winston_daily_rotate_file_1.default({
    filename: "".concat(logDir, "/combined-%DATE%.log"),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: fileFormat,
});
var debugFileTransport = new winston_daily_rotate_file_1.default({
    filename: "".concat(logDir, "/debug-%DATE%.log"),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '7d',
    level: 'debug',
    format: fileFormat,
});
exports.loggerConfig = nest_winston_1.WinstonModule.createLogger({
    transports: __spreadArray([
        new winston.transports.Console({
            format: consoleFormat,
            level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
        }),
        errorFileTransport,
        combinedFileTransport
    ], (process.env.NODE_ENV !== 'production' ? [debugFileTransport] : []), true),
    exceptionHandlers: [
        new winston.transports.File({
            filename: "".concat(logDir, "/exceptions.log"),
            format: fileFormat,
        }),
    ],
    rejectionHandlers: [
        new winston.transports.File({
            filename: "".concat(logDir, "/rejections.log"),
            format: fileFormat,
        }),
    ],
});
