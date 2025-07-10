# Start with inspector (listen on default port  9229)

node --inspect ${APP_ENTRY_FILE:-application.js}

# Break on first line of application
node --inspect-brk ${APP_ENTRY_FILE:-application.js}

# Specify a custom port
node --inspect=9229 ${APP_ENTRY_FILE:-application.js}

# Enable remote debugging (be careful with this in production)
node --inspect=0.0.0.0:9229 ${APP_ENTRY_FILE:-application.js}

