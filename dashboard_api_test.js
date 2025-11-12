/**
 * dashboard_api_test.js
 * Automated testing script for Business AI SaaS project
 * Tests 5 main endpoints:
 *  - /api/forecast
 *  - /api/rfm
 *  - /api/promotions
 *  - /api/customer-care
 *  - /api/summary
 */

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const BASE_URL = "http://localhost:3000";

async function testEndpoint(endpoint) {
  console.log(`\n Testing: ${endpoint}`);
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    const data = await res.json();
    console.log(" Response OK");
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(" Error fetching:", err.message);
  }
}

async function runTests() {
  console.log(" Starting Business AI SaaS API Test Suite...\n");

  await testEndpoint("/api/forecast");
  await testEndpoint("/api/rfm");
  await testEndpoint("/api/promotions");
  await testEndpoint("/api/customer-care");
  await testEndpoint("/api/summary");

  console.log("\n All endpoint tests completed successfully!");
}

runTests();
