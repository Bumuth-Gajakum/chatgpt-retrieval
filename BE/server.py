from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import os
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/chat', methods=['POST'])
def chat():
    prompt = request.json.get('prompt')
    if not prompt:
        return jsonify({"error": "No prompt provided"}), 400

    try:
        # Call the Python script with the prompt
        result = subprocess.run(
            ["python", "app.py", prompt],
            capture_output=True,
            text=True,
            check=True
        )

        response_text = result.stdout.strip()
        print(f"Script output: {response_text}")
        return jsonify(response=response_text)

    except subprocess.CalledProcessError as e:
        error_output = e.stderr.strip()
        print(f"Error calling subprocess: {error_output}")
        return jsonify({"error": "Failed to process prompt", "details": error_output}), 500

    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return jsonify({"error": "An unexpected error occurred", "details": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
