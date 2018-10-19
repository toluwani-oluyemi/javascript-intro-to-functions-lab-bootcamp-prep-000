function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout( string){
<<<<<<< HEAD
  return console.log(string.toUpperCase()) 
=======
  spy = string
  return console.log(string.toUpperCase) 
>>>>>>> 9b873a7cc29b5ee20f3f6c67d843871247490c1b

}

function logWhisper(string){
<<<<<<< HEAD
  console.log(string.toLowerCase())
=======
  spy.HELLO
  console.log(string.toLowerCase)
>>>>>>> 9b873a7cc29b5ee20f3f6c67d843871247490c1b
}

function sayHiToGrandma(string){
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  }
  else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  }
  else (string ==="I love you, Grandma."); {
    return "I love you, too.";
  }

}