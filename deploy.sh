#!/bin/bash

# Ensure script stops on first error
set -e

echo "🚀 Starting Deployment Process..."

# Add local node binary to PATH
export PATH="$(dirname "$0")/node-v20.10.0-darwin-arm64/bin:$PATH"

# Check if npm is installed

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not found. Please install Node.js and npm."
    exit 1
fi


echo "🚀 Starting Deployment Process to Vercel..."

# Vercel handles the build automatically, so we just trigger the deploy.
# We pass --prod to ensure it goes to the production environment.

echo "📢 Deploying to Vercel Production..."

# Use npx vercel. This will trigger login if not logged in.
npx vercel login

npx vercel --prod

echo "✅ Deployment initiated. Check the URL above!"


