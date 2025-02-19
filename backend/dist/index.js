"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const PORT = 4000;
// create instance server 
const app = (0, express_1.default)();
// middleware to parse incoming requests
app.use(express_1.default.json());
// HTTP request logger middleware
app.use((0, morgan_1.default)('common'));
// HTTP security middleware
app.use((0, helmet_1.default)());
// add rate-limiter
app.use((0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 15, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    message: 'Too many requests from this IP, try again later.',
    // store: ... , // Redis, Memcached, etc. See below.
}));
// add routing for / path
app.get('/', (req, res) => {
    res.json({
        message: "Hello World",
    });
});
// post request
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Hello world from post',
        data: req.body,
    });
});
// start express server
app.listen(PORT, () => {
    console.log(`Server is starting at port:${PORT}`);
});
exports.default = app;
