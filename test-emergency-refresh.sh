#!/bin/bash

echo "🧪 Testing Emergency Refresh Endpoints..."
echo "========================================"

BASE_URL="http://localhost:3000"

echo ""
echo "1️⃣  Testing Cache Status (GET /api/revalidate)"
echo "------------------------------------------------"
curl -s $BASE_URL/api/revalidate | jq -r '.message, .timeUntilRefresh, .automaticRefresh'

echo ""
echo "2️⃣  Testing Simple Emergency Refresh (POST /api/refresh-now)"
echo "-------------------------------------------------------------"
curl -s -X POST $BASE_URL/api/refresh-now | jq -r '.message, .instruction'

echo ""
echo "3️⃣  Testing Secure Emergency Refresh (POST /api/emergency-refresh)"
echo "-------------------------------------------------------------------"
curl -s -X POST $BASE_URL/api/emergency-refresh \
  -H "Content-Type: application/json" \
  -d '{"secret":"emergency-refresh-2025"}' | jq -r '.message, .note // .hint'

echo ""
echo "4️⃣  Testing Original Revalidate (POST /api/revalidate)"
echo "-------------------------------------------------------"
curl -s -X POST $BASE_URL/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{}' | jq -r '.message, .instruction'

echo ""
echo "✅ All endpoint tests completed!"
echo ""
echo "📖 Usage Summary:"
echo "• /api/refresh-now (POST) - Quick emergency refresh, no auth"
echo "• /api/emergency-refresh (POST) - Secure refresh with secret"
echo "• /api/revalidate (GET) - Check cache status"
echo "• /api/revalidate (POST) - Standard refresh"
