# Wecare Duplicate - Medical Examination Management

>This project is a medical examination management system with integrated AI for disease prediction.

## Project Structure

- `backend/` - Django backend API
- `frontend/` - Frontend (likely React + Vite)
- `disease-prediction-service/` - AI disease prediction microservice (Python)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/tanvo-0574/wecare_duplicate.git
cd wecare_duplicate
```

---

### 2. Backend Setup (Django)

```bash
cd backend
# Create and activate a virtual environment (optional but recommended)
python -m venv venv
venv\Scripts\activate  # On Windows
# or
source venv/bin/activate  # On macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start the development server
python manage.py runserver
```
The backend will be available at `http://127.0.0.1:8000/`.

---

### 3. Disease Prediction Service Setup

```bash
cd ../disease-prediction-service
# (Optional) Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate  # On Windows
# or
source venv/bin/activate  # On macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Start the service
python app.py
```
The service will be available at `http://127.0.0.1:5000/` (or as specified in `app.py`).

---

### 4. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```
The frontend will be available at the address shown in the terminal (usually `http://localhost:5173/`).

---

## Notes
- Ensure Python 3.8+ and Node.js 16+ are installed.
- Configure environment variables as needed for each service.
- For production, further configuration is required (e.g., CORS, security, deployment).

---

## Contact
For questions or support, please contact the repository owner.
