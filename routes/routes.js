const userRoutes = require('./users');
const bookRoutes = require('./books');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('Welcome to the development server for this project');
    });

    userRoutes(app, fs);
    bookRoutes(app, fs);
};

module.exports = appRouter;