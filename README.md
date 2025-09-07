# Pantry

**Requirements:**
- [Docker](https://www.docker.com/)
- `.env` file with the following:
  - `POSTGRES_USER`
  - `POSTGRES_PASSWORD`
  - `POSTGRES_DB`
  - `POSTGRES_PORT`
  - `POSTGRES_HOST`
  - `POSTGRES_CONNECTION`
  - `API_PORT`

## API
**Start:**
```bash
docker compose up api
```

**Start with forced build:**
```bash
docker compose up --build api
```
