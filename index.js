// Code your solutions in this file

const gifts = ['teddy bear', 'drone', 'doll'];

function wrap(gifts){
  for (let i = 0; i < gifts.length; i++) {
    
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}


function writeCards(names, event){
    let thank_you = []
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        thank_you.push(message)
}
return thank_you
}

function countDown(int) {
    let x = int
    while (x >= 0) {
        console.log(x)
        x--

}
    
}

