# Weighted URL Redirect Handler

A lightweight and efficient serverless script for handling weighted URL redirection. This project allows requests to be redirected to different URLs based on predefined weights, making it ideal for load balancing, A/B testing, or targeted routing strategies. Built with modern JavaScript and optimized for serverless environments.

## Overview
This project implements a lightweight, serverless script for handling weighted URL redirection. Requests are redirected to a destination URL selected based on preassigned weights. It’s particularly useful for applications like:

- A/B Testing
- Load Balancing
- Targeted Content Routing

## Features
- **Weighted Redirection**: Define multiple destinations with weights to control traffic distribution.
- **Serverless Ready**: Optimized for deployment in serverless environments (e.g., Cloudflare Workers).
- **Error Handling**: Graceful error handling and debugging logs.

## How It Works
1. Define a list of destination URLs with associated weights.
2. A random number is generated to select a destination based on the weights.
3. The request is redirected to the chosen URL.

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/weighted-url-redirect-handler.git
   cd weighted-url-redirect-handler
