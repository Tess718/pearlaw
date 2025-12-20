const mongoose = require('mongoose');

// Run with: node --env-file=.env test-mongo.js

async function testMongo() {
  console.log("--- Testing MongoDB Connection ---");
  const uri = process.env.DATABASE_URI;
  
  if (!uri) {
    console.error("❌ ERROR: DATABASE_URI is missing in .env");
    return;
  }
  
  // Mask the password for logging
  const maskedUri = uri.replace(/(:)([^:@]+)(@)/, '$1*****$3');
  console.log("URI:", maskedUri);

  try {
    console.log("Attempting to connect...");
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    console.log("✅ SUCCESS! Connected to MongoDB.");
    console.log("State:", mongoose.connection.readyState);
    await mongoose.disconnect();
  } catch (err) {
    console.error("\n❌ ERROR Connecting to MongoDB:");
    console.error("Name:", err.name);
    console.error("Message:", err.message);
    
    if (err.message.includes('ENOTFOUND')) {
        console.error("\n-> DNS Error: Could not resolve hostname. Check your internet or DNS settings.");
    } else if (err.message.includes('ETIMEDOUT')) {
        console.error("\n-> Timeout Error: Firewall/Whitelist issue. Check MongoDB Atlas 'Network Access'.");
    }
  }
}

testMongo();
