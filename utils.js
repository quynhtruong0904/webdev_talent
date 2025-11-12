const fs = require("fs");

function readJSON(path) {
  try {
    return JSON.parse(fs.readFileSync(path, "utf-8"));
  } catch (err) {
    console.error("Error reading JSON file:", err);
    return [];
  }
}

function writeJSON(path, data) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
    console.log(" Data saved:", path);
  } catch (err) {
    console.error(" Error writing JSON file:", err);
  }
}

function formatDate(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

module.exports = { readJSON, writeJSON, formatDate };
