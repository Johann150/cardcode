# What is this?
This page generates a table to encode letters of a specific alphabet into a deck of cards.

# How it works
The card deck used for this purpose uses french cards and three jokers. At least one of the jokers must be distinguishable from the other two.

The cards are ordered first by their rank and then by their colour. The two jokers are first, but the order of the jokers must be decided by oneself.

To encode different characters (lots of them!) there has to be a big number of arrangements. But just combining every card with every other card will after time reduce the number of arrangements possible. And it would also make it hard to achieve some arrangements that depend on distance of card pairs between one another, because then the encoding might require a gap in the middle which is of course not possible. For these reasons I chose to use arrangements of pairs of cards.

The normal storage of a deck of cards in a pack permits these states: A card can be
* turned upside down.
* turned on its backface.
* turned both upside down and on its backface.
* neither of those.

In combination with the order of two cards in a pair throughout the deck, the posibility of 32 arrangements per pair of cards arises. This enables an alphabet of all letters (albeit only in one case) and some punctuation symbols. I made the decision to use the symbols `␣`(a space), `.`, `,`, `&`, `!` and `?`.<br>
Through combining these symbols, other symbols could be achieved, e.g. `..` could become a colon (`:`) or `.,` could become a semicolon (`;`).

The arrangements that arise are now computed by a bit of JavaScript and put into a table that also lists the corresponding symbol. (There is also a running total of the number of arrangements on the lefthand side.)

Now you might notice that some - in fact most of the cards can not be used in this scheme. This is because it is not discernable for all cards wethere they are right side up or upside down, e.g. most of the Diamond colour cards. They could of course still be turned on their backface.

Making the best of these yet unused cards, the maximum number of arrangements is 4 for each pair of cards. This is of course a drastical reduction compared to the previous method. Therefore it would be smarter to use combinations of five cards which would allow for 32 combinations each. This way we can gain an additional five characters which is of course almost nothing when compared to the previous combinations.

But we have not exhausted all combination posibilies, because the order of the cards can also be changed.
The number of arrangements that can be achieved with `n` cards when now also respecting the order of the cards is `n! * 2^n`. Now for simplicity it would be nice to be able to use the same alphabet with 32 characters. So to solve [`32=n!*2^n`](https://www.wolframalpha.com/input/?i=32%3Dn!*2%5En) the closest whole number is 3. So we will be using combinations of 3 cards giving us 48 arrangements each.

Now this is not compatible with our alphabet, but if we split these up into two sections which the first takes 32 combinatios, the other has 16 combinations. Putting two 3-card-groups together, we can get 3 letters from 6 cards.
