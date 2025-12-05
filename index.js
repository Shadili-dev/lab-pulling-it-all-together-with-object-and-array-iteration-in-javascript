// index.js

function gameObject() {
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
        "Bismak Biyombo": {
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
}

// Helper function to find player
function findPlayer(playerName) {
  var game = gameObject();
  
  // Check home team
  if (game.home.players[playerName]) {
    return { team: 'home', stats: game.home.players[playerName] };
  }
  
  // Check away team
  if (game.away.players[playerName]) {
    return { team: 'away', stats: game.away.players[playerName] };
  }
  
  return null;
}

// 1. numPointsScored
function numPointsScored(playerName) {
  var player = findPlayer(playerName);
  return player ? player.stats.points : 0;
}

// 2. shoeSize
function shoeSize(playerName) {
  var player = findPlayer(playerName);
  return player ? player.stats.shoe : 0;
}

// 3. teamColors
function teamColors(teamName) {
  var game = gameObject();
  
  if (game.home.teamName === teamName) {
    return game.home.colors;
  } else if (game.away.teamName === teamName) {
    return game.away.colors;
  }
  
  return [];
}

// 4. teamNames
function teamNames() {
  var game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// 5. playerNumbers
function playerNumbers(teamName) {
  var game = gameObject();
  var team = null;
  
  if (game.home.teamName === teamName) {
    team = game.home;
  } else if (game.away.teamName === teamName) {
    team = game.away;
  }
  
  if (!team) return [];
  
  var numbers = [];
  var players = team.players;
  
  for (var playerName in players) {
    if (players.hasOwnProperty(playerName)) {
      numbers.push(players[playerName].number);
    }
  }
  
  return numbers;
}

// 6. playerStats
function playerStats(playerName) {
  var player = findPlayer(playerName);
  return player ? player.stats : {};
}

// 7. bigShoeRebounds
function bigShoeRebounds() {
  var game = gameObject();
  var maxShoeSize = 0;
  var rebounds = 0;
  
  // Check home team
  var homePlayers = game.home.players;
  for (var homePlayer in homePlayers) {
    if (homePlayers.hasOwnProperty(homePlayer)) {
      var player = homePlayers[homePlayer];
      if (player.shoe > maxShoeSize) {
        maxShoeSize = player.shoe;
        rebounds = player.rebounds;
      }
    }
  }
  
  // Check away team
  var awayPlayers = game.away.players;
  for (var awayPlayer in awayPlayers) {
    if (awayPlayers.hasOwnProperty(awayPlayer)) {
      var player = awayPlayers[awayPlayer];
      if (player.shoe > maxShoeSize) {
        maxShoeSize = player.shoe;
        rebounds = player.rebounds;
      }
    }
  }
  
  return rebounds;
}

// Bonus 1: mostPointsScored
function mostPointsScored() {
  var game = gameObject();
  var maxPoints = 0;
  var topScorer = '';
  
  // Check home team
  var homePlayers = game.home.players;
  for (var homePlayer in homePlayers) {
    if (homePlayers.hasOwnProperty(homePlayer)) {
      var player = homePlayers[homePlayer];
      if (player.points > maxPoints) {
        maxPoints = player.points;
        topScorer = homePlayer;
      }
    }
  }
  
  // Check away team
  var awayPlayers = game.away.players;
  for (var awayPlayer in awayPlayers) {
    if (awayPlayers.hasOwnProperty(awayPlayer)) {
      var player = awayPlayers[awayPlayer];
      if (player.points > maxPoints) {
        maxPoints = player.points;
        topScorer = awayPlayer;
      }
    }
  }
  
  return topScorer;
}

// Bonus 2: winningTeam
function winningTeam() {
  var game = gameObject();
  var homePoints = 0;
  var awayPoints = 0;
  
  // Calculate home team points
  var homePlayers = game.home.players;
  for (var homePlayer in homePlayers) {
    if (homePlayers.hasOwnProperty(homePlayer)) {
      homePoints += homePlayers[homePlayer].points;
    }
  }
  
  // Calculate away team points
  var awayPlayers = game.away.players;
  for (var awayPlayer in awayPlayers) {
    if (awayPlayers.hasOwnProperty(awayPlayer)) {
      awayPoints += awayPlayers[awayPlayer].points;
    }
  }
  
  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// Bonus 3: playerWithLongestName
function playerWithLongestName() {
  var game = gameObject();
  var longestName = '';
  var maxLength = 0;
  
  // Check home team
  var homePlayers = game.home.players;
  for (var homePlayer in homePlayers) {
    if (homePlayers.hasOwnProperty(homePlayer)) {
      if (homePlayer.length > maxLength) {
        maxLength = homePlayer.length;
        longestName = homePlayer;
      }
    }
  }
  
  // Check away team
  var awayPlayers = game.away.players;
  for (var awayPlayer in awayPlayers) {
    if (awayPlayers.hasOwnProperty(awayPlayer)) {
      if (awayPlayer.length > maxLength) {
        maxLength = awayPlayer.length;
        longestName = awayPlayer;
      }
    }
  }
  
  return longestName;
}

// Super Bonus: doesLongNameStealATon
function doesLongNameStealATon() {
  var game = gameObject();
  var longestName = playerWithLongestName();
  
  // Find the player with longest name
  var longestNamePlayer = null;
  
  if (game.home.players[longestName]) {
    longestNamePlayer = game.home.players[longestName];
  } else if (game.away.players[longestName]) {
    longestNamePlayer = game.away.players[longestName];
  }
  
  if (!longestNamePlayer) return false;
  
  var longestNameSteals = longestNamePlayer.steals;
  var maxSteals = 0;
  
  // Check all players for max steals
  var homePlayers = game.home.players;
  for (var homePlayer in homePlayers) {
    if (homePlayers.hasOwnProperty(homePlayer)) {
      var player = homePlayers[homePlayer];
      if (player.steals > maxSteals) {
        maxSteals = player.steals;
      }
    }
  }
  
  var awayPlayers = game.away.players;
  for (var awayPlayer in awayPlayers) {
    if (awayPlayers.hasOwnProperty(awayPlayer)) {
      var player = awayPlayers[awayPlayer];
      if (player.steals > maxSteals) {
        maxSteals = player.steals;
      }
    }
  }
  
  return longestNameSteals === maxSteals;
}
