import allUsers from "./FakeData.js";

const mostPopularMovie = (name) => {
  //I will be using DFS
  // initilize a stack with the first username
  const stack = [name];
  // initilize a set to keep track of names "visited" already
  let visited = new Set([name]);
  //initalize an obj to keep track of the number of times a movie appears
  const movieCount = {};

  // while we stil have names in the stack,
  //grab the last name added and include their movies in the count
  while (stack.length) {
    let name = stack.pop();
    let currentUser = allUsers[name];

    for (let i = 0; i < currentUser.movies.length; i++) {
      let currentMovie = currentUser.movies[i];
      if (!movieCount[currentMovie]) movieCount[currentMovie] = 0;
      movieCount[currentMovie]++;
    }

    // iterate through the current user's friends and if we havent seen them before,
    // add them to the stack so they can be searched later
    for (let i = 0; i < currentUser.friends.length; i++) {
      let currentFriend = currentUser.friends[i];
      if (!visited.has(currentFriend)) {
        visited.add(currentFriend);
        stack.push(currentFriend);
      }
    }
  }

  //initilize a variable with the first moive counted,
  //and if we see a movie with a higher count,
  //change the value of the variable to be that new movie
  let mostPopular = allUsers[name].movies[0];
  for (let key in movieCount) {
    if (movieCount[key] > movieCount[mostPopular]) mostPopular = key;
  }

  console.log(movieCount);
  console.log(`${mostPopular} is the most popular movie!`);

  return mostPopular;
};
// test runs
// the test run's also display the object that tracks the movie counts
// comment out line 43 to remove it.

mostPopularMovie("User 21");
// mostPopularMovie("User 19");
// mostPopularMovie("User 3");
