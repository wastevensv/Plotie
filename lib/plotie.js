var genres = [
  {
    title:"love story",
    plotlines:[
      "walks right past their soulmate every day without even knowing it. Until one day, their paths cross",
      "admires their soulmate from afar but fears coming forward"
    ]
  },
  {
    title:"sci-fi epic",
    plotlines:[
      "gets picked up by a group of friendly aliens and explores the universe",
      "must defend earth against swarms of alien invaders",
      "must save the world from the approaching apocalypse"
    ]
  },
  {
    title:"fantastic tale",
    plotlines:[
      "finds a mystical item and goes on a wacky adventure",
      "discovers their latent magical powers and must learn how to control them"
    ]
  }
]
var occupations = ["famous writer", "doctor", "astronaut", "geeky college student"]
var fnames = ["Will", "Julia", "Willow", "Oaky", "Alex", "Rose", "Oliver", "Jenna", "Sue", "Bob", "Alice", "Paul"]
var lnames = ["Mally", "Hammond", "Giffen", "Bier","Noelle","Gentry",""]

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generate() {
    genre = randomItem(genres)
    document.getElementById("genre").innerHTML = genre.title;
    document.getElementById("plotline").innerHTML = randomItem(genre.plotlines);
    document.getElementById("occupation").innerHTML = randomItem(occupations);
    document.getElementById("fname").innerHTML = randomItem(fnames);
    document.getElementById("lname").innerHTML = randomItem(lnames);
}
