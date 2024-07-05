import json
import random

# List of sample cities with their latitudes and longitudes
cities = [
    {"city": "Johor", "lat": 40.7128, "lng": -74.0060},
    {"city": "Colombo", "lat": 34.0522, "lng": -118.2437},
    {"city": "Kuala Lampur", "lat": 41.8781, "lng": -87.6298},
    {"city": "Kolaka", "lat": 29.7604, "lng": -95.3698},
    {"city": "Kuantan", "lat": 33.4484, "lng": -112.0740},
    # Add more cities as needed
]

# List of telco service providers
providers = ["Dialog", "Mobitel", "Airtel", "Hutch", "Maxis"]

# Function to generate random speeds
def generate_speeds():
    return {
        "upload": round(random.uniform(5, 100), 2),  # Upload speed between 5 Mbps and 100 Mbps
        "download": round(random.uniform(10, 300), 2)  # Download speed between 10 Mbps and 300 Mbps
    }

# Generate a dataset with exactly 1,000 entries
data = []
num_entries = 1000
num_cities = len(cities)
num_providers = len(providers)

for i in range(num_entries):
    city = cities[i % num_cities]
    provider = providers[i % num_providers]
    data.append({
        "city": city["city"],
        "latitude": city["lat"],
        "longitude": city["lng"],
        "provider": provider,
        "speeds": generate_speeds()
    })

# Write the data to a JSON file
with open('telco_data_1000.json', 'w') as file:
    json.dump(data, file, indent=4)

print("Data generation complete. File saved as 'telco_data_1000.json'.")
