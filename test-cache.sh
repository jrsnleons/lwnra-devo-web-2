#!/bin/bash

echo "Testing cache timing functionality..."

# Test 1: Check current cache info
echo "=== Current Cache Information ==="
curl -s http://localhost:3000/api/revalidate

echo -e "\n\n=== Manual Cache Clear Test ==="
# Test 2: Clear cache manually
curl -s -X POST http://localhost:3000/api/revalidate

echo -e "\n\nCache tests completed!"
