// index.test.js
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

describe('Basketball Game Functions', () => {
  // Test 3.1: Player Information
  test('numPointsScored returns correct points for Bukayo Saka', () => {
    expect(numPointsScored('Bukayo Saka')).toBe(14);
  });
  
  test('numPointsScored returns correct points for Marcus Rashford', () => {
    expect(numPointsScored('Marcus Rashford')).toBe(16);
  });
  
  test('shoeSize returns correct size for Bukayo Saka', () => {
    expect(shoeSize('Bukayo Saka')).toBe(10);
  });
  
  test('shoeSize returns 0 for non-existent player', () => {
    expect(shoeSize('Non Existent Player')).toBe(0);
  });
  
  // Test 3.2: Team Information
  test('teamColors returns correct colors for Arsenal FC', () => {
    expect(teamColors('Arsenal FC')).toEqual(['Red', 'White']);
  });
  
  test('teamColors returns correct colors for Manchester United', () => {
    expect(teamColors('Manchester United')).toEqual(['Red', 'Black', 'White']);
  });
  
  test('teamNames returns both team names', () => {
    expect(teamNames()).toEqual(['Arsenal FC', 'Manchester United']);
  });
  
  // Test 3.3: Player Numbers and Stats
  test('playerNumbers returns all player numbers for Arsenal', () => {
    const arsenalNumbers = playerNumbers('Arsenal FC');
    expect(arsenalNumbers).toEqual(expect.arrayContaining([7, 8, 11, 41, 2]));
    expect(arsenalNumbers.length).toBe(5);
  });
  
  test('playerStats returns full stats object', () => {
    const sakaStats = playerStats('Bukayo Saka');
    expect(sakaStats).toHaveProperty('number', 7);
    expect(sakaStats).toHaveProperty('points', 14);
    expect(sakaStats).toHaveProperty('shoe', 10);
  });
  
  // Test 3.4: Advanced Challenge
  test('bigShoeRebounds returns rebounds for player with largest shoe', () => {
    // William Saliba has shoe size 12, rebounds 8
    expect(bigShoeRebounds()).toBe(8);
  });
  
  // Bonus Tests
  test('mostPointsScored returns player with most points', () => {
    // Marcus Rashford has 16 points (highest in our data)
    expect(mostPointsScored()).toBe('Marcus Rashford');
  });
  
  test('winningTeam returns team with most total points', () => {
    // Arsenal: 14+10+12+6+2 = 44
    // Man Utd: 16+12+14+4+1 = 47
    expect(winningTeam()).toBe('Manchester United');
  });
  
  test('playerWithLongestName returns player with longest name', () => {
    // "Gabriel Martinelli" is 17 characters
    expect(playerWithLongestName()).toBe('Gabriel Martinelli');
  });
  
  test('doesLongNameStealATon checks if longest name has most steals', () => {
    // Gabriel Martinelli has 3 steals, but Lisandro Martínez has 5
    expect(doesLongNameStealATon()).toBe(false);
  });
});

