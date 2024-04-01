// Code your solutions in this file
for (let age = 30; age < 40; age++) {
console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear","drone","doll"];

function wrapGifts(gifts) {
    for (let i = 0; i <gifts.length; i++) {
        console.log(`wrapped ${gifts[0]} and added a bow!`)
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);

function writeCards( friendArray, activity ) {
    let thankYouCards = []
    for ( let i = 0; i < friendArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${friendArray[i]}, for the wonderful ${activity} gift!` )
    }
    return thankYouCards
  }

  function countDown( nambari ) {
    while ( nambari  > 0 ) {
      console.log( nambari  );
      nambari  -= 1;
    }
    console.log( nambari  );
  }