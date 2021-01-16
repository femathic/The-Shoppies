const quotes = [
  { quote: 'The past can hurt. But the way I see it, you can either run from it or learn from it', who: 'Rafiki, The Lion King' },
  { quote: 'I figure life’s a gift, and I don’t intend on wasting it', who: 'Jack, Titanic' },
  { quote: 'I have a love in my life. It makes me stronger than anything you can imagine', who: 'Barry, Punch-Drunk Love' },
  { quote: 'I’d rather fight with you than make love with anyone else', who: 'Nick Mercer, The Wedding Date' },
  { quote: 'I never look back. It distracts from the now', who: 'Edna Mode, The Incredibles' },
  { quote: 'You are everything I never knew I always wanted', who: 'Alex Whitman, Fools Rush In' },
  { quote: 'No matter what anybody tells you, words and ideas can change the world', who: 'John Keating, Dead Poet’s Society' },
  { quote: 'It’s not who you are underneath, it’s what you do that defines you', who: 'Rachel, Batman Begins' },
  { quote: 'End? No, the journey doesn’t end here. Death is just another path. One that we all must take.', who: 'Gandalf, The Lord of the Rings' },
];
const chosenQuote = quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
export default chosenQuote;
