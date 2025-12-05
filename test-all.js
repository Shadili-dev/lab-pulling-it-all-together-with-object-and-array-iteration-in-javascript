console.log("🏀 COMPREHENSIVE OBJECT BALL TEST 🏀\n");
console.log("Testing all 11 functions...\n");

// Helper function for assertions
function assert(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected) || 
      (typeof actual === 'string' && actual === expected) ||
      (typeof actual === 'number' && actual === expected)) {
    console.log("✅ PASS:", testName);
    return true;
  } else {
    console.log("❌ FAIL:", testName);
    console.log("   Expected:", expected);
    console.log("   Got:", actual);
    return false;
  }
}

console.log("=== REQUIRED FUNCTIONS (7) ===");
var passed = 0;
var total = 0;

// Test 1: numPointsScored
total++;
if (assert(numPointsScored('Alan Anderson'), 22, "numPointsScored('Alan Anderson')")) passed++;

// Test 2: shoeSize
total++;
if (assert(shoeSize('Mason Plumlee'), 19, "shoeSize('Mason Plumlee')")) passed++;

// Test 3: teamColors
total++;
if (assert(teamColors('Brooklyn Nets'), ["Black", "White"], "teamColors('Brooklyn Nets')")) passed++;

// Test 4: teamNames
total++;
var expectedTeams = ["Brooklyn Nets", "Charlotte Hornets"];
if (assert(teamNames(), expectedTeams, "teamNames()")) passed++;

// Test 5: playerNumbers
total++;
var netsNumbers = playerNumbers('Brooklyn Nets').sort(function(a, b) { return a - b; });
var expectedNetsNumbers = [0, 1, 11, 30, 31];
if (assert(netsNumbers, expectedNetsNumbers, "playerNumbers('Brooklyn Nets')")) passed++;

// Test 6: playerStats
total++;
var benGordonStats = playerStats('Ben Gordon');
if (benGordonStats && benGordonStats.points === 33) {
  console.log("✅ PASS: playerStats('Ben Gordon') has 33 points");
  passed++;
} else {
  console.log("❌ FAIL: playerStats('Ben Gordon')");
}

// Test 7: bigShoeRebounds
total++;
if (assert(bigShoeRebounds(), 12, "bigShoeRebounds()")) passed++;

console.log("\n=== BONUS FUNCTIONS (4) ===");

// Test 8: mostPointsScored
total++;
if (assert(mostPointsScored(), "Ben Gordon", "mostPointsScored()")) passed++;

// Test 9: winningTeam
total++;
if (assert(winningTeam(), "Brooklyn Nets", "winningTeam()")) passed++;

// Test 10: playerWithLongestName
total++;
if (assert(playerWithLongestName(), "Brendan Haywood", "playerWithLongestName()")) passed++;

// Test 11: doesLongNameStealATon
total++;
if (assert(doesLongNameStealATon(), true, "doesLongNameStealATon()")) passed++;

console.log("\n=== SUMMARY ===");
console.log("Passed: " + passed + "/" + total);
console.log("Score: " + Math.round((passed/total)*100) + "%");

if (passed === total) {
  console.log("\n🎉 EXCELLENT! All functions working correctly!");
  console.log("Ready for submission!");
} else {
  console.log("\n⚠️  Some tests failed. Check the errors above.");
}
