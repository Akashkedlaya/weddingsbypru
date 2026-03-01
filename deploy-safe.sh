#!/bin/bash

echo "🏗️  Building..."
npm run build

if [ $? -eq 0 ]; then
    echo "📦 Uploading website files (excluding images)..."
    aws s3 sync dist/ s3://weddingsbypru.com/ --exclude "images/*"
    
    echo "✅ Deployment complete!"
    echo "🌐 Site: http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com"
else
    echo "❌ Build failed!"
    exit 1
fi
