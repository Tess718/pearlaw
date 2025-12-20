const dns = require('dns');
const net = require('net');
const url = require('url');

// Run with: node --env-file=.env debug-network.js

async function debugNetwork() {
  console.log("--- DIANOSTIC: MongoDB Network Checks ---");
  
  const uri = process.env.DATABASE_URI;
  if (!uri) {
    console.error("❌ config: DATABASE_URI is missing.");
    return;
  }

  // 1. Parse URI (Robust Method)
  let hostname;
  try {
      let clean = uri.replace('mongodb://', '').replace('mongodb+srv://', '');
      // Remove user:pass
      if (clean.includes('@')) {
          clean = clean.split('@')[1];
      }
      // Remove query params/path
      clean = clean.split('?')[0].split('/')[0];
      // Handle multiple hosts (comma separated) -> take first one
      clean = clean.split(',')[0];
      // Remove port
      hostname = clean.split(':')[0];
      
      console.log(`✅ config: Parsed hostname: ${hostname}`);
  } catch (e) {
      console.error(`❌ config: Could not parse URI manually. ${e.message}`);
      return;
  }

  // 2. Test DNS Resolution
  console.log(`\n[...] Testing DNS Resolution for ${hostname}...`);
  dns.resolve(hostname, (err, addresses) => {
    if (err) {
      console.error(`❌ DNS: Failed to resolve hostname.`);
      console.error(`   Error: ${err.code}`);
      console.log("   -> CAUSE: Your computer cannot translation the domain name to an IP.");
      console.log("   -> TRY: Change your DNS to Google (8.8.8.8) or Cloudflare (1.1.1.1).");
    } else {
      console.log(`✅ DNS: Resolved to ${JSON.stringify(addresses)}`);
      
      // 3. Test TCP Connection (Firewall)
      const targetHost = addresses[0] || hostname; // use IP if available, else hostname
      // MongoDB SRV usually resolves to other hostnames, but let's try direct connection test if possible,
      // or just rely on the fact that DNS worked.
      
      // Actually SRV records are different. Let's just try to connect to the hostname on 27017 generally
      // even if it's an SRV record, this might fail, but let's try.
      // Better: if it is SRV, we should resolve SRV.
      
      if (uri.includes('+srv')) {
           console.log(`\n[...] Testing SRV Record Resolution...`);
           dns.resolveSrv(`_mongodb._tcp.${hostname}`, (srvErr, addresses) => {
               if (srvErr) {
                   console.error(`❌ SRV: Failed to find SRV records.`);
                   console.error(`   Error: ${srvErr.code}`);
               } else {
                   console.log(`✅ SRV: Found ${addresses.length} shards.`);
                   const shard = addresses[0];
                   checkPort(shard.name, shard.port);
               }
           });
      } else {
          checkPort(hostname, 27017);
      }
    }
  });
}

function checkPort(host, port) {
    console.log(`\n[...] Testing TCP Connection to ${host}:${port}...`);
    const socket = new net.Socket();
    socket.setTimeout(5000);
    
    socket.on('connect', () => {
        console.log(`✅ TCP: Connection successful! (Port ${port} is OPEN)`);
        console.log("   -> CONCLUSION: Network is fine. Credentials might be wrong?");
        socket.destroy();
    });
    
    socket.on('timeout', () => {
        console.error(`❌ TCP: Connection Timed Out.`);
        console.log("   -> CAUSE: Firewall is blocking Port 27017.");
        console.log("   -> TRY: Check local firewall or router settings.");
        socket.destroy();
    });
    
    socket.on('error', (err) => {
        console.error(`❌ TCP: Connection Failed (${err.code}).`);
        console.log(`   -> Message: ${err.message}`);
    });
    
    socket.connect(port, host);
}

debugNetwork();
