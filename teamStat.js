const team = {
    _players: [
      { firstName: "Jordan", lastName: "Michel", age: 54 }, 
      {firstName: 'Shak', lastName: 'Onil', age: 60}, 
      {firstName: 'Stephan', lastName: 'Carry', age: 28}],
    _games: [
      {opponent: 'Bulls', teamPoints: 20, opponentPoints:15},
      {opponent: 'Rayenr', teamPoints: 40, opponentPoints:23},
      {opponent: 'Wolf', teamPoints: 15, opponentPoints:78}
    ],
 
     get players () {
       return this._players
       },
     get games (){
       return this._games
     },

     addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName : newFirstName,
        lastName : newLastName,
        age : newAge,
      };
     this.players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent : newOpponent,
        teamPoints : newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game)
    }
};

team.addGame('Titans', 100, 98)
console.log(team)
