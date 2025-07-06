const process = require('process');
// Access a single environment variable
const nodeEnv = process.env.NODE_ENV || 'development';
console.log(`Running in ${nodeEnv} mode`);

// Access multiple variables with destructuring
const { PORT = 3000, HOST = 'localhost' } = process.env;
console.log(`Server running at http://${HOST}:${PORT}`);

// Check if running in  production mode
if(process.env.NODE_ENV === 'production') {
    console.log('Production mode: Optimizations enabled');
}