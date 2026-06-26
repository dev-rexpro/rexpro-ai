# RexPro AI

RexPro AI is a production-ready chatbot application built with a high-performance FastAPI backend and a minimalist, responsive Svelte/Vite frontend. The project is designed with efficiency in mind, optimizing for low-resource environments (such as Hugging Face Spaces or lightweight VPS nodes) by preventing common Out-of-Memory (OOM) errors.

---

## Project Structure

```
rexpro-ai/
├── Dockerfile              # Root multi-stage build file
├── .dockerignore           # Excludes development artifacts from Docker context
├── .gitignore              # Root git ignore patterns
├── backend/                # FastAPI backend source code
│   ├── rexpro_ai/          # Python application source
│   ├── requirements.txt    # Python dependencies
│   └── start.sh            # Production container entrypoint script
└── frontend/               # Svelte/Vite frontend source code
    ├── src/                # Svelte components & logic
    └── package.json        # Frontend dependencies
```

---

## Environment Variables

### Backend Configuration

The backend is configured via environment variables. In local development, these can be set in a `.env` file inside the `backend` or root folder.

| Variable | Description | Default |
|---|---|---|
| `PORT` | Container or server port | `7860` |
| `HOST` | Bind address for uvicorn | `0.0.0.0` |
| `CORS_ALLOW_ORIGIN` | Allowed origin for CORS (separate with commas) | `http://localhost:5173` |
| `REXPRO_SECRET_KEY` | Secret key used for cryptographic signing | *Auto-generated if empty* |
| `USE_SLIM` | When true, skips heavy local ML model cache downloads | `true` |
| `UVICORN_WORKERS` | Number of Uvicorn worker processes | `1` |
| `OMP_NUM_THREADS` | Limits thread count for OpenMP to prevent OOM | `1` |

### Frontend Configuration

The frontend utilizes Vite environment variables, which must be prefixed with `VITE_`.

| Variable | Description | Purpose |
|---|---|---|
| `VITE_API_URL` | Endpoint base URL for the backend API | Set to empty (`""`) in production to use relative URLs (same host), or to the backend URL in dual-origin development. |

---

## Getting Started

### Local Development

To run the application locally in development mode:

1. **Start the Backend**:
   ```bash
   cd backend
   # Set up a python virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   
   # Install dependencies
   pip install --upgrade pip
   pip install -r requirements.txt
   
   # Run development server
   uvicorn rexpro_ai.main:app --host 127.0.0.1 --port 8080 --reload
   ```

2. **Start the Frontend**:
   ```bash
   cd frontend
   # Install node dependencies
   npm install
   
   # Run Vite development server
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## Production Deployment with Docker

To avoid CPU-starvation and memory-exhaustion (OOM) hangs when compiling the Svelte/Vite frontend in resource-restricted cloud environments, the project uses a pre-built static deployment strategy. The frontend is compiled locally, committed to Git, and copied directly into the Docker image.

### Building and Deploying

1. **Build the Frontend Locally**:
   Ensure you are in the `frontend/` directory and run:
   ```bash
   cd frontend
   VITE_API_URL="" npm run build
   ```
   This compiles the static assets into `frontend/build/`. Commit this folder to Git before pushing.

2. **Build the Docker Image**:
   From the root directory:
   ```bash
   docker build -t rexpro-ai:latest .
   ```
   This will create a lightweight Python container and copy the pre-built `frontend/build/` directly, finishing the build in seconds.

3. **Run the Container**:
   ```bash
   docker run -d -p 7860:7860 \
     -e REXPRO_SECRET_KEY="your_secure_random_key" \
     -e CORS_ALLOW_ORIGIN="http://localhost:7860" \
     rexpro-ai:latest
   ```
   The application will be accessible at `http://localhost:7860`.

