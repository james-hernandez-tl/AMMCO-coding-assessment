const allUsers = {
  "User 1": {
    name: "User 1",
    friends: ["User 2", "User 3"],
    movies: ["Movie 1", "Movie 2", "Movie 7", "Movie 8"],
  },
  "User 2": {
    name: "User 2",
    friends: ["User 1", "User 4"],
    movies: ["Movie 2", "Movie 3", "Movie 6", "Movie 7"],
  },
  "User 3": {
    name: "User 3",
    friends: ["User 1", "User 5"],
    movies: ["Movie 3", "Movie 4", "Movie 7", "Movie 8"],
  },
  "User 4": {
    name: "User 4",
    friends: ["User 2", "User 6"],
    movies: ["Movie 4", "Movie 5", "Movie 8", "Movie 9"],
  },
  "User 5": {
    name: "User 5",
    friends: ["User 3", "User 7"],
    movies: ["Movie 5", "Movie 6", "Movie 1", "Movie 2"],
  },
  "User 6": {
    name: "User 6",
    friends: ["User 4", "User 8"],
    movies: ["Movie 6", "Movie 7", "Movie 8", "Movie 9"],
  },
  "User 7": {
    name: "User 7",
    friends: ["User 5", "User 9"],
    movies: ["Movie 7", "Movie 8", "Movie 1", "Movie 2"],
  },
  "User 8": {
    name: "User 8",
    friends: ["User 6", "User 10"],
    movies: ["Movie 8", "Movie 9", "Movie 6", "Movie 7"],
  },
  "User 9": {
    name: "User 9",
    friends: ["User 7", "User 1"],
    movies: ["Movie 9", "Movie 10", "Movie 4", "Movie 5"],
  },
  "User 10": {
    name: "User 10",
    friends: ["User 8", "User 2"],
    movies: ["Movie 10", "Movie 1", "Movie 4", "Movie 5"],
  },
  "User 11": {
    name: "User 11",
    friends: ["User 12", "User 13"],
    movies: ["Movie 11", "Movie 12", "Movie 17", "Movie 18"],
  },
  "User 12": {
    name: "User 12",
    friends: ["User 11", "User 14"],
    movies: ["Movie 12", "Movie 13", "Movie 18", "Movie 19"],
  },
  "User 13": {
    name: "User 13",
    friends: ["User 11", "User 15"],
    movies: [
      "Movie 13",
      "Movie 14",
      "Movie 19",
      "Movie 20",
      "Movie 14",
      "Movie 15",
      "Movie 20",
      "Movie 11",
    ],
  },
  "User 14": {
    name: "User 14",
    friends: ["User 12", "User 16"],
    movies: ["Movie 14", "Movie 15", "Movie 20", "Movie 11"],
  },
  "User 15": {
    name: "User 15",
    friends: ["User 13", "User 17"],
    movies: ["Movie 15", "Movie 16", "Movie 12", "Movie 13"],
  },
  "User 16": {
    name: "User 16",
    friends: ["User 14", "User 18"],
    movies: ["Movie 16", "Movie 17", "Movie 13", "Movie 14"],
  },
  "User 17": {
    name: "User 17",
    friends: ["User 15", "User 19"],
    movies: ["Movie 17", "Movie 18", "Movie 14", "Movie 15"],
  },
  "User 18": {
    name: "User 18",
    friends: ["User 16", "User 20"],
    movies: ["Movie 18", "Movie 19", "Movie 15", "Movie 16"],
  },
  "User 19": {
    name: "User 19",
    friends: ["User 17", "User 11"],
    movies: [
      "Movie 19",
      "Movie 20",
      "Movie 16",
      "Movie 17",
      "Movie 14",
      "Movie 15",
      "Movie 20",
      "Movie 11",
    ],
  },
  "User 20": {
    name: "User 20",
    friends: ["User 18", "User 12"],
    movies: ["Movie 20", "Movie 11", "Movie 17", "Movie 18"],
  },
  "User 21": {
    name: "User 21",
    friends: ["User 22", "User 23"],
    movies: ["Movie 21", "Movie 22", "Movie 27", "Movie 28"],
  },
  "User 22": {
    name: "User 22",
    friends: ["User 21", "User 24"],
    movies: ["Movie 22", "Movie 23", "Movie 28", "Movie 29"],
  },
  "User 23": {
    name: "User 23",
    friends: ["User 21", "User 25"],
    movies: [
      "Movie 23",
      "Movie 24",
      "Movie 29",
      "Movie 30",
      "Movie 28",
      "Movie 29",
      "Movie 25",
      "Movie 26",
    ],
  },
  "User 24": {
    name: "User 24",
    friends: ["User 22", "User 26"],
    movies: [
      "Movie 24",
      "Movie 25",
      "Movie 30",
      "Movie 21",
      "Movie 28",
      "Movie 29",
      "Movie 26",
    ],
  },
  "User 25": {
    name: "User 25",
    friends: ["User 23", "User 27"],
    movies: ["Movie 25", "Movie 26", "Movie 22", "Movie 23"],
  },
  "User 26": {
    name: "User 26",
    friends: ["User 24", "User 28"],
    movies: ["Movie 26", "Movie 27", "Movie 23", "Movie 24"],
  },
  "User 27": {
    name: "User 27",
    friends: ["User 25", "User 29"],
    movies: ["Movie 27", "Movie 28", "Movie 24", "Movie 25"],
  },
  "User 28": {
    name: "User 28",
    friends: ["User 26", "User 30"],
    movies: ["Movie 28", "Movie 29", "Movie 25", "Movie 26"],
  },
  "User 29": {
    name: "User 29",
    friends: ["User 27", "User 21"],
    movies: ["Movie 29", "Movie 30", "Movie 26", "Movie 27"],
  },
  "User 30": {
    name: "User 30",
    friends: ["User 28", "User 22"],
    movies: ["Movie 30", "Movie 21", "Movie 27", "Movie 28"],
  },
};

export default allUsers;
