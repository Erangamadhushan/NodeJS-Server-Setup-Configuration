# check syntax without executing the code
node --check application.js

# show stack traces for warnings
node --trace-warnings application.js

# set max memory (in MB)
node --max-old-space-size=4096 application.js

# Preload a module before running the application
node --require dotenv/config application.js