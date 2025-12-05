const gameObject = () => {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
};

// ====================
// 1. Retrieve Player Information
// ====================

/**
 * Get points scored by a player
 * @param {string} playerName - Name of the player
 * @returns {number} Points scored
 */
function numPointsScored(playerName) {
    const game = gameObject();
    
    // Check home team
    for (const player in game.home.players) {
        if (player === playerName) {
            return game.home.players[player].points;
        }
    }
    
    // Check away team
    for (const player in game.away.players) {
        if (player === playerName) {
            return game.away.players[player].points;
        }
    }
    
    return 0; // Player not found
}

/**
 * Get shoe size of a player
 * @param {string} playerName - Name of the player
 * @returns {number} Shoe size
 */
function shoeSize(playerName) {
    const game = gameObject();
    
    // Check home team
    for (const player in game.home.players) {
        if (player === playerName) {
            return game.home.players[player].shoe;
        }
    }
    
    // Check away team
    for (const player in game.away.players) {
        if (player === playerName) {
            return game.away.players[player].shoe;
        }
    }
    
    return 0; // Player not found
}

// ====================
// 2. Retrieve Team Information
// ====================

/**
 * Get team colors
 * @param {string} teamName - Name of the team
 * @returns {Array} Array of colors
 */
function teamColors(teamName) {
    const game = gameObject();
    
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    }
    
    return []; // Team not found
}

/**
 * Get all team names
 * @returns {Array} Array of team names
 */
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// ====================
// 3. Retrieve Player Numbers and Stats
// ====================

/**
 * Get all player numbers for a team
 * @param {string} teamName - Name of the team
 * @returns {Array} Array of player numbers
 */
function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    
    if (game.home.teamName === teamName) {
        for (const player in game.home.players) {
            numbers.push(game.home.players[player].number);
        }
    } else if (game.away.teamName === teamName) {
        for (const player in game.away.players) {
            numbers.push(game.away.players[player].number);
        }
    }
    
    return numbers.sort((a, b) => a - b); // Return sorted numbers
}

/**
 * Get all stats for a player
 * @param {string} playerName - Name of the player
 * @returns {Object} Player stats object
 */
function playerStats(playerName) {
    const game = gameObject();
    
    // Check home team
    for (const player in game.home.players) {
        if (player === playerName) {
            return { ...game.home.players[player] };
        }
    }
    
    // Check away team
    for (const player in game.away.players) {
        if (player === playerName) {
            return { ...game.away.players[player] };
        }
    }
    
    return {}; // Player not found
}

// ====================
// 4. Advanced Challenge
// ====================

/**
 * Get rebounds for player with largest shoe size
 * @returns {number} Rebounds
 */
function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let playerWithMaxShoe = null;
    
    // Check all players
    const allPlayers = { ...game.home.players, ...game.away.players };
    
    for (const playerName in allPlayers) {
        const player = allPlayers[playerName];
        if (player.shoe > maxShoeSize) {
            maxShoeSize = player.shoe;
            playerWithMaxShoe = player;
        }
    }
    
    return playerWithMaxShoe ? playerWithMaxShoe.rebounds : 0;
}

// ====================
// BONUS QUESTIONS
// ====================

/**
 * Get player with most points
 * @returns {string} Player name with most points
 */
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = "";
    
    const allPlayers = { ...game.home.players, ...game.away.players };
    
    for (const playerName in allPlayers) {
        const player = allPlayers[playerName];
        if (player.points > maxPoints) {
            maxPoints = player.points;
            topPlayer = playerName;
        }
    }
    
    return topPlayer;
}

/**
 * Get winning team (team with most total points)
 * @returns {string} Winning team name
 */
function winningTeam() {
    const game = gameObject();
    
    let homePoints = 0;
    for (const player in game.home.players) {
        homePoints += game.home.players[player].points;
    }
    
    let awayPoints = 0;
    for (const player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }
    
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

/**
 * Get player with longest name
 * @returns {string} Player with longest name
 */
function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    
    const allPlayers = { ...game.home.players, ...game.away.players };
    
    for (const playerName in allPlayers) {
        if (playerName.length > longestName.length) {
            longestName = playerName;
        }
    }
    
    return longestName;
}

// ====================
// SUPER BONUS CHALLENGE
// ====================

/**
 * Check if player with longest name has most steals
 * @returns {boolean} True if longest name player has most steals
 */
function doesLongNameStealATon() {
    const game = gameObject();
    const allPlayers = { ...game.home.players, ...game.away.players };
    
    // Find player with longest name
    let longestNamePlayer = "";
    for (const playerName in allPlayers) {
        if (playerName.length > longestNamePlayer.length) {
            longestNamePlayer = playerName;
        }
    }
    
    // Find max steals
    let maxSteals = 0;
    for (const playerName in allPlayers) {
        if (allPlayers[playerName].steals > maxSteals) {
            maxSteals = allPlayers[playerName].steals;
        }
    }
    
    // Check if longest name player has max steals
    return allPlayers[longestNamePlayer].steals === maxSteals;
}

// ====================
// EXPORT FUNCTIONS
// ====================

module.exports = {
    gameObject,
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
};
