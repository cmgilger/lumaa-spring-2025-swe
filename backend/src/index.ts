import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const PORT = 4000;

// create instance server 
const app: Application = express();
// middleware to parse incoming requests
app.use(express.json());
// HTTP request logger middleware
app.use(morgan('common'));
// HTTP security middleware
app.use(helmet());
// add rate-limiter
app.use(rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 15, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    message: 'Too many requests from this IP, try again later.',
	// store: ... , // Redis, Memcached, etc. See below.
}));
// add routing for / path
app.get('/', (req: Request, res: Response) => {
    res.json({
        message: "Hello World",
    });
});

// post request
app.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.json({
        message: 'Hello world from post',
        data: req.body,
    });
});

// start express server
app.listen(PORT, ()=> {
    console.log(`Server is starting at port:${PORT}`);
});

export default app;