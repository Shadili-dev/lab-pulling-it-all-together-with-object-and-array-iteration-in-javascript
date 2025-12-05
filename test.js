const {
    numPointsScored,
    shoeSize,
    teamColors,
    teamNames,
    playerNumbers,
    playerStats,
    bigShoeRebounds,
    mostPointsScored,
    winningTeam,
    playerWithLongestName,
    doesLongNameStealATon
} = require('./index.js');

console.log('=== Testing NBA Stats Functions ===\n');

// Test 1: numPointsScored
console.log('1. numPointsScored("Ben Gordon"):', numPointsScored("Ben Gordon"), '✓ Expected: 33');

// Test 2: shoeSize
console.log('2. shoeSize("Mason Plumlee"):', shoeSize("Mason Plumlee"), '✓ Expected: 19');

// Test 3: teamColors
console.log('3. teamColors("Brooklyn Nets"):', teamColors("Brooklyn Nets"), '✓ Expected: ["Black", "White"]');

// Test 4: teamNames
console.log('4. teamNames():', teamNames(), '✓ Expected: ["Brooklyn Nets", "Charlotte Hornets"]');

// Test 5: playerNumbers
console.log('5. playerNumbers("Charlotte Hornets"):', playerNumbers("Charlotte Hornets"), '✓ Expected sorted jersey numbers');

// Test 6: playerStats
console.log('6. playerStats("Alan Anderson"):', JSON.stringify(playerStats("Alan Anderson")).substring(0, 50) + '...');

// Test 7: bigShoeRebounds
console.log('7. bigShoeRebounds():', bigShoeRebounds(), '✓ Should return rebounds for player with largest shoe');

// Test 8: mostPointsScored
console.log('8. mostPointsScored():', mostPointsScored(), '✓ Player with most points');

// Test 9: winningTeam
console.log('9. winningTeam():', winningTeam(), '✓ Team with most total points');

// Test 10: playerWithLongestName
console.log('10. playerWithLongestName():', playerWithLongestName(), '✓ Player with longest name');

// Test 11: doesLongNameStealATon
console.log('11. doesLongNameStealATon():', doesLongNameStealATon(), '✓ Check if longest name player has most steals');

console.log('\n=== All tests completed ===');
