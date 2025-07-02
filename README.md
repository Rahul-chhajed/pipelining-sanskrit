# 🕉️ Sanskrit Speech Pipelining API

A Flask-based backend for **Sanskrit language pipelining** — combining **speech-to-text transcription**, **LLM-powered Sanskrit response generation**, and **text-to-speech synthesis** using **Whisper**, **Gemini**, and **sanskrit-tts**.

---

## 🚀 Features

- 🎙️ **Speech-to-Text (Whisper)**: Transcribes uploaded `.wav` audio (spoken in Sanskrit).
- 🤖 **LLM Response (Gemini API)**: Generates Sanskrit replies in Devanagari script using Google Gemini.
- 🔊 **Text-to-Speech (Node.js + sanskrit-tts)**: Converts Sanskrit Devanagari text into `.mp3` audio.
- 🔄 Clean pipelined architecture with file cleanup and CORS-enabled endpoints.

---

## 📁 Project Structure

|── main.py # Flask backend
├── index.js # Node.js script for TTS
├── uploads/ # Temporary audio uploads
├── outputs/ # Output MP3 files
├── .env # (not committed) for storing Gemini API key
├── requirements.txt # Python dependencies
├── package.json # Node.js dependencies
└── README.md
---

## 🧪 Tech Stack

| Layer               | Tool                                                  |
|---------------------|-------------------------------------------------------|
| Transcription       | [OpenAI Whisper](https://github.com/openai/whisper)   |
| Language Generation | [Google Gemini API](https://ai.google.dev/)           |
| TTS (Text-to-Speech)| [sanskrit-tts](https://www.npmjs.com/package/sanskrit-tts) |
| Backend             | Flask (Python)                                        |
| Audio Handling      | Node.js                                               |

---

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/Rahul-chhajed/pipelining-sanskrit.git
cd pipelining-sanskrit
```

### 2. Python Backend Setup (using uv)

```bash
uv venv

#Activate the virtual environment
# On Linux/macOS:
source .venv/bin/activate
# On Windows:
.venv\Scripts\activate
```

# Install dependencies using uv
```bash
uv pip install -r requirements.txt
```

### Create a .env file in the root directory:
```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Node.js Setup for TTS
```bash
npm install
```

### 4. Run the Flask App
```bash
python main.py
```

##📌 Notes
Whisper model used is large — ensure you have sufficient system resources.
Audio files are removed after processing to save space.
Gemini prompt is hardcoded for Sanskrit responses in Devanagari script.

