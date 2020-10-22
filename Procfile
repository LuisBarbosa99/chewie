cp .env.example .env
adonis key:generate
release: ENV_SILENT=true node ace migration:run --force
web: ENV_SILENT=true npm start