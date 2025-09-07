# Pantry

**Requirements:**
- [Docker](https://www.docker.com/)
- `.env` file with the database connection settings:
  - `POSTGRES_USER`
  - `POSTGRES_PASSWORD`
  - `POSTGRES_DB`
  - `POSTGRES_PORT`
  - `POSTGRES_HOST`

## API
**Start:**
```bash
docker compose up api
```

**Start with forced build:**
```bash
docker compose up --build api
```
