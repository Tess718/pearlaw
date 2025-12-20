const { S3Client, ListObjectsCommand } = require('@aws-sdk/client-s3');

// This script expects environment variables to be loaded
// Run with: node --env-file=.env test-s3.js

async function testS3() {
  console.log("--- Testing S3 Connection ---");
  console.log("Endpoint:", process.env.S3_ENDPOINT);
  console.log("Region:", process.env.S3_REGION);
  console.log("Bucket:", process.env.S3_BUCKET);
  
  if (!process.env.S3_ACCESS_KEY_ID || !process.env.S3_SECRET_ACCESS_KEY) {
      console.error("ERROR: Missing Access Key or Secret Key in environment variables.");
      return;
  }

  const client = new S3Client({
    endpoint: process.env.S3_ENDPOINT,
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    forcePathStyle: true, // Required for Supabase
  });

  try {
    console.log("\nAttempting to list objects in bucket...");
    const data = await client.send(new ListObjectsCommand({ Bucket: process.env.S3_BUCKET }));
    console.log("✅ SUCCESS! Connected to S3 bucket.");
    console.log("Object count:", data.Contents?.length || 0);
  } catch (err) {
    console.error("\n❌ ERROR Connecting to S3:");
    console.error("Type:", err.name);
    console.error("Message:", err.message);
    
    if (err.name === 'Refused' || err.code === 'ECONNREFUSED') {
        console.error("\n-> Could not connect to Endpoint. Check the URL.");
    }
  }
}

testS3();
