# check syntax without executing the code
node --check application.js

# show stack traces for warnings
node --trace-warnings application.js


# set max memory (in MB)
node --max-old-space-size=4096 application.js

# Preload a module before running the application
node --require dotenv/config application.js

# Enable experimental features
node --experimental-modules application.js

# Enable source maps for better stack traces
node --enable-source-maps application.js

# Run in inspect mode for debugging
node --inspect application.js

# Run in inspect mode with a specific port
node --inspect=9229 application.js