/*

TODO: send format to dad for him to add new data

Note: If a game is a double (Ex: Oppenheimer), then if the user is PROMPTED with the first double (Ex: Good Will Hunting) and GUESSES the second double (Ex: Interstellar), the game should:
    - show yellow
    - say the user got BOTH actors correct
    - SKIP (aka NOT prompt) the second double

Note: DO NOT ALLOW games to have UNMATCHED PAIRS. Meaning: if one pair exists (Ex: Good Will Hunting), then another pair MUST exist (Ex: Interstellar). Same with groups of 3, 4, or 5 actors (very rare). This all means that games w/ pairs only work if there are "n" actors who have shared "n + 1" movies, where 1 of the "n" is the answer, and the other "n" movies are clues, each with "n" actors as correct links.

*/

const POSSIBLE_GAMES: PossibleGame[] = [
    {
        "movieClues": [
            "Good Will Hunting",
            "Interstellar",
            "Iron Man",
            "Inception",
            "Little Women"
        ],
        "actorClues": [
            ["Matt Damon", "Casey Affleck"],
            ["Matt Damon", "Casey Affleck"],
            ["Robert Downey Jr."],
            ["Cillian Murphy"],
            ["Florence Pugh"]
        ],
        "answer": "Oppenheimer"
    }
];

/*

const POSSIBLE_GAMES: PossibleGame[] = [
  {
      "movieClues": [
          "Good Will Hunting",
          "Interstellar",
          "Iron Man",
          "Inception",
          "Little Women"
      ],
      "actorClues": [
          ["Matt Damon", "Casey Affleck"],
          ["Matt Damon", "Casey Affleck"],
          ["Robert Downey Jr."],
          ["Cillian Murphy"],
          ["Florence Pugh"]
      ],
      "answer": "Oppenheimer"
  }, {
      "movieClues": [                         
          "M*A*S*H",                             
          "The Jerk",                     
          "Good Will Hunting",           
          "Michael Clayton",             
          "Fight Club"
      ],             
          "actorClues": [                         
          ["Donald Sutherland"],                 
          ["Carl Reiner"],                               
          ["Matt Damon"],                         
          ["George Clooney"],                             
          ["Brad Pitt"]                           
      ],     
      "answer": "Ocean's Eleven"                             
  },{
      "movieClues": [                 
          "Good Will Hunting",                           
          "Love, Actually",                       
          "Mrs. Doubtfire",                       
          "Les Miserables",                       
          "Sophie's Choice"                       
      ],
      "actorClues": [                 
          ["Stellan Skarsgard"],                         
          ["Colin Firth"],                               
          ["Pierce Brosnan"],                             
          ["Amanda Seyfried"],                           
          ["Meryl Streep"]                       
      ],     
      "answer": "Mamma Mia"                   
  }, {
      "movieClues": [                         
          "Reservoir Dogs",                       
          "No Way Out",           
          "The Green Mile",                               
          "Die Hard",     
          "Good Will Hunting"                     
      ],     
      "actorClues": [                         
          ["Steve Buscemi"],                             
          ["Will Patton"],                               
          ["Michael Clark Duncan"],                               
          ["Bruce Willis"],                               
          ["Ben Affleck"]                         
      ],     
      "answer": "Armageddon"                 
  }, {
      "movieClues": [                         
          "Die Hard",                             
          "Saving Mr. Banks",                             
          "Schindler's List",                             
          "Pirates of the Caribbean",                             
          "Four Weddings and a Funeral"                           
      ],     
      "actorClues": [                 
          ["Alan Rickman"],                               
          ["Emma Thompson"],                             
          ["Liam Neeson"],                               
          ["Keira Knightley"],                           
          ["Hugh Grant"]                         
      ],     
      "answer": "Love, Actually"                             
  }, {
      "movieClues": [                         
          "Sleepless in Seattle",                         
          "Star Wars",                           
          "Pulp Fiction",                         
          "Goodfellas",                           
          "No Way Out"                   
      ],     
      "actorClues": [                         
          ["Gaby Hoffman"],                               
          ["James Earl Jones"],                           
          ["Frank Whaley"],                               
          ["Ray Liotta"],                         
          ["Kevin Costner"]                       
      ],     
      "answer": "Field of Dreams"                             
  }, {
      "movieClues": [                         
          "The Firm",                             
          "Pulp Fiction",                         
          "Field of Dreams",                             
          "My Cousin Vinny",                             
          "Awakenings"                   
      ],     
      "actorClues": [                 
          ["Paul Sorvino"],                               
          ["Samuel L. Jackson"],                         
          ["Ray Liotta"],                         
          ["Joe Pesci"],                         
          ["Robert de Niro"]                             
      ],     
      "answer": "Goodfellas"                 
  }, {
      "movieClues": [                 
          "Forrest Gump",                         
          "The Firm",             
          "Titanic",                             
          "Mystic River",                         
          "Forrest Gump"                         
      ],     
      "actorClues": [                         
          ["Gary Sinise"],                               
          ["Ed Harris"],                         
          ["Bill Paxton"],                               
          ["Kevin Bacon"],                               
          ["Tom Hanks"]                   
      ],     
      "answer": "Apollo 13"                           
  }, {
      "movieClues": [                         
          "Less Than Zero",                               
          "Scent of a Woman",                             
          "Ferris Bueller's Day Off",                             
          "As Good As It Gets",                           
          "Titanic"                       
      ],     
      "actorClues": [                         
          ["Jami Gertz"],                         
          ["Philip Seymour Hoffman"],                             
          ["Alan Ruck"],                         
          ["Helen Hunt"],                         
          ["Bill Paxton"]                         
      ],     
      "answer": "Twister"                     
  }, {
      "movieClues": [                         
          "Steel Magnolias",                             
          "Witness",                             
          "Top Secret!",                         
          "The Sure Thing",                               
          "Mission: Impossible"                           
      ],     
      "actorClues": [                         
          ["Tom Skerritt"],                               
          ["Kelly McGillis"],                             
          ["Val Kilmer"],                         
          ["Anthony Edwards"],                           
          ["Tom Cruise"]                 
      ],     
      "answer": "Top Gun"                     
  }, {
      "movieClues": [                 
          "Diner",                               
          "The Secret of My Success",                             
          "Brokeback Mountain",                           
          "When Harry Met Sally",                         
          "When Harry Met Sally"                         
      ],     
      "actorClues": [                 
          ["Daniel Stern"],                               
          ["Helen Slater"],                               
          ["Jake Gyllenhaal"],                           
          ["Billy Crystal", "Bruno Kirby"],                               
          ["Billy Crystal", "Bruno Kirby"]                       
      ],     
      "answer": "City Slickers"                       
  }, {
      "movieClues": [                         
          "The Godfather",                               
          "You've Got Mail",                             
          "The Birdcage",         
          "Clueless",                             
          "You've Got Mail"                       
      ],     
      "actorClues": [                 
          ["Abe Vigoda"],                         
          ["Meg Ryan"],                           
          ["Nathan Lane"],                               
          ["Dan Hedaya"],                         
          ["Tom Hanks"]                   
      ],     
      "answer": "Joe vs. the Volcano"                 
  }, {
      "movieClues": [                         
          "Apocalypse Now",                               
          "Major League",                         
          "No Way Out",                           
          "Fatal Attraction",                             
          "Splash "               
      ],     
      "actorClues": [                 
          ["Martin Sheen"],                               
          ["Charlie Sheen"],                             
          ["Sean Young"],                         
          ["Michael Douglas"],                           
          ["Daryl Hannah"]                       
      ],     
      "answer": "Wall Street"                         
  }, {
      "movieClues": [                         
          "Apocalypse Now",                               
          "Titanic",                             
          "Good Will Hunting",                           
          "The Shining",                         
          "Up In The Air"                 
      ],     
      "actorClues": [                 
          ["Martin Sheen"],                               
          ["Leonardo DiCaprio"],                         
          ["Matt Damon"],                         
          ["Jack Nicholson"],                             
          ["Vera Farmiga"]                       
      ],     
      "answer": "The Departed"                       
  }, {
      "movieClues": [                         
          "Ocean's Eleven",                               
          "The Town",                             
          "Ocean's Eleven",                               
          "Mrs. Doubtfire",                               
          "Gross Pointe Blank"                   
      ],     
      "actorClues": [                 
          ["Matt Damon", "Ben Affleck"],                         
          ["Matt Damon", "Ben Affleck"],                               
          ["Casey Affleck"],                             
          ["Robin Williams"],                             
          ["Minnie Driver"]               
      ],     
      "answer": "Good Will Hunting"           
  }, {
      "movieClues": [                         
          "Misery",                               
          "Rocky",                               
          "Annie Hall",                           
          "Apocalypse Now",                               
          "Dog Day Afternoon"                     
      ],     
      "actorClues": [                 
          ["James Caan"],                         
          ["Talia Shire"],                               
          ["Diane Keaton"],                               
          ["Robert Duvall"],                             
          ["Al Pacino"]                   
      ],     
      "answer": "The Godfather"                       
  }, {
      "movieClues": [                         
          "Sleepless in Seattle",                         
          "The Martian",                         
          "The Fast and the Furious",                             
          "Dazed and Confused",                           
          "The Brothers McMullen"         
      ],     
      "actorClues": [                         
          ["Tom Hanks"],                         
          ["Matt Damon"],                         
          ["Vin Diesel"],                         
          ["Adam Goldberg"],                             
          ["Ed Burns"]                   
      ],     
      "answer": "Saving Private Ryan"                         
  }, {
      "movieClues": [                         
          "Dumb and Dumber",                             
          "Molly's Game",                         
          "Bridesmaids",                         
          "12 Years a Slave",                             
          "The Bourne Identity"                           
      ],     
      "actorClues": [                         
          ["Jeff Daniels"],                               
          ["Jessica Chastain"],                           
          ["Kirsten Wiig"],                               
          ["Chiwetel Ejiofor"],                           
          ["Matt Damon"]                 
      ],     
      "answer": "The Martian"                         
  }, {
      "movieClues": [                 
          "Ocean's Eleven",                               
          "The Flamingo Kid",                             
          "Speed",                               
          "Encino Man",                           
          "Hustle and Flow"                       
      ],     
      "actorClues": [                 
          ["Don Cheadle"],                               
          ["Matt Dillon"],                               
          ["Sandra Bullock"],                             
          ["Brendan Fraser"],                             
          ["Terrence Howard"]                             
      ],     
      "answer": "Crash"                       
  }, {
      "movieClues": [                         
          "Apollo 13",                           
          "Steel Magnolias",                             
          "The Princess Bride",                           
          "The Sixth Sense",                             
          "Apollo 13"                     
      ],     
      "actorClues": [         
          ["Gary Sinise"],                               
          ["Sally Field"],                               
          ["Robin Wright"],                               
          ["Haley Joel Osment"],                         
          ["Tom Hanks"]                   
      ],     
      "answer": "Forrest Gump"                       
  }, {
      "movieClues": [                         
          "Adaptation",                           
          "Being John Malkovich",                         
          "Being John Malkovich",                         
          "Reservoir Dogs",                               
          "Pulp Fiction"                         
      ],     
      "actorClues": [                 
          ["Nicolas Cage"],                               
          ["John Malkovich", "John Cusack"],                             
          ["John Malkovich", "John Cusack"],                     
          ["Steve Buscemi"],                             
          ["Ving Rhames"]                         
      ],     
      "answer": "Con Air"                     
  }, {
      "movieClues": [                 
          "Get Out",                             
          "42",                           
          "Akeelah and the Bee",                         
          "Creed",                               
          "12 Years a Slave"                             
      ],     
      "actorClues": [                 
          ["Daniel Kaluuya"],                             
          ["Chadwick Boseman"],                           
          ["Angela Bassett"],                             
          ["Michael B. Jordan"],                         
          ["Lupita Nyong'o"]                             
      ],     
      "answer": "Black Panther"                       
  }, {
      "movieClues": [                         
          "Black Panther",                               
          "The Martian",                         
          "Inglorious Basterds",                         
          "The Fabelmans",                               
          "Steve Jobs"           
      ],     
      "actorClues": [                 
          ["Lupita Nyong'o"],                             
          ["Chiwetel Ejiofor"],                           
          ["Brad Pitt"],                         
          ["Paul Dano"],                         
          ["Michael Fassbender"]                 
      ],     
      "answer": "12 Years a Slave"                   
  }, {
      "movieClues": [                 
          "Mamma Mia",                           
          "The Insider",                         
          "Wolverine",                           
          "The Intern",                           
          "Borat"                 
      ],     
      "actorClues": [                 
          ["Amanda Seyfried"],                           
          ["Russell Crowe"],                             
          ["Hugh Jackman"],                       
          ["Anne Hathaway"],                             
          ["Sasha Baron Cohen"]                           
      ],     
      "answer": "Les Miserables"                     
  }, {
      "movieClues": [                 
          "Jerry Maguire",                               
          "The Departed",                         
          "About Last Night",                             
          "Footloose",                           
          "Stand By Me"                   
      ],     
      "actorClues": [                 
          ["Tom Cruise"],                 
          ["Jack Nicholson"],                             
          ["Demi Moore"],                         
          ["Kevin Bacon"],                               
          ["Kiefer Sutherland"]                   
      ],     
      "answer": "A Few Good Men"                     
  }, {
      "movieClues": [                 
          "Ordinary People",                             
          "Pulp Fiction",                         
          "The Truman Show",                             
          "Wild Things",                         
          "True Romance"                 
      ],     
      "actorClues": [                         
          ["Timothy Hutton"],                             
          ["Uma Thurman"],                               
          ["Noah Emmerich"],                             
          ["Matt Dillon"],                               
          ["Michael Rapaport"]                   
      ],     
      "answer": "Beautiful Girls"                     
  }, {
      "movieClues": [                         
          "The Producers",                               
          "Awakenings",                           
          "Quiz Show",                           
          "Unforgiven",                           
          "Parenthood"                   
      ],     
      "actorClues": [                 
          ["Nathan Lane"],                               
          ["Robin Williams"],                             
          ["Hank Azaria"],                               
          ["Gene Hackman"],                               
          ["Dianne Wiest"]                       
      ],     
      "answer": "The Birdcage"                       
  }, {
      "movieClues": [                         
          "The Revenant",                         
          "Pulp Fiction",                         
          "13 Going On 30",                               
          "Enchanted",                           
          "Philadelphia"                 
      ],     
      "actorClues": [                 
          ["Leonardo DiCaprio"],                         
          ["Christopher Walken"],                         
          ["Jennifer Garner"],                           
          ["Amy Adams"],                         
          ["Tom Hanks"]   
      ],     
      "answer": "Catch Me If You Can"                         
  }, {
      "movieClues": [                         
          "Eyes Wide Shut",                               
          "Cold Mountain",                               
          "Air",                         
          "Cars",                         
          "Stand By Me"           
      ],     
      "actorClues": [                         
          ["Tom Cruise"],                         
          ["Renee Zellweger"],                           
          ["Jay Mohr"],                           
          ["Bonnie Hunt"],                               
          ["Jerry O'Connell"]                     
      ],     
      "answer": "Jerry Maguire"                       
  }, {
      "movieClues": [                         
          "Mask",                         
          "Honeymoon in Vegas",                           
          "Do the Right Thing",                           
          "Steel Magnolias",                             
          "Say Anything"                 
      ],     
      "actorClues": [                         
          ["Cher"],                               
          ["Nicolas Cage"],                               
          ["Danny Aiello"],                               
          ["Olympia Dukakis"],                           
          ["John Mahoney"]                       
      ],     
      "answer": "Moonstruck"                 
  }, {
      "movieClues": [                         
          "Fast Times at Ridgemont High",                         
          "The Shawshank Redemption",                             
          "Diner",                               
          "Boyz N the Hood",                             
          "Pollock"               
      ],     
      "actorClues": [                         
          ["Sean Penn"],                         
          ["Tim Robbins"],                               
          ["Kevin Bacon"],                               
          ["Laurence Fishburne"],                         
          ["Marcia Gay Harden"]                           
      ],     
      "answer": "Mystic River"                       
  }, {
      "movieClues": [                         
          "The Jerk",                             
          "Animal House",                         
          "Joker",                               
          "Speed",                               
          "Hannah and Her Sisters"                       
      ],     
      "actorClues": [                         
          ["Steve Martin"],                               
          ["Tom Hulce"],                         
          ["Joaquin Phoenix"],                           
          ["Keanu Reeves"],                               
          ["Dianne Wiest"]               
      ],     
      "answer": "Parenthood"                 
  }, {
      "movieClues": [                         
          "Saturday Night Fever",                         
          "Goodfellas",                           
          "Die Hard",                             
          "Kill Bill, Volume 1",                         
          "Dave"         
      ],     
      "actorClues": [                 
          ["John Travolta"],                             
          ["Samuel L Jackson"],                           
          ["Bruce Willis"],                               
          ["Uma Thurman"],                               
          ["Ving Rhames"]                 
      ],     
      "answer": "Pulp Fiction"                       
  }, {
      "movieClues": [                         
          "Disclosure",                           
          "Young Guns",                           
          "The Breakfast Club",                           
          "Wayne's World",                               
          "WarGames"                     
      ],     
      "actorClues": [                 
          ["Demi Moore"],                         
          ["Emilio Estevez"],                             
          ["Judd Nelson"],                               
          ["Rob Lowe"],                           
          ["Ally Sheedy"]                         
      ],     
      "answer": "St. Elmo's Fire"                             
  }, {
      "movieClues": [                         
          "My Best Friend's Wedding",                             
          "Postcards From the Edge",                             
          "Moonstruck",                           
          "Norma Rae",                           
          "Splash"                       
      ],     
      "actorClues": [                         
          ["Julia Roberts"],                             
          ["Shirley Maclaine"],                           
          ["Olympia Dukakis"],                           
          ["Sally Field"],                               
          ["Daryl Hannah"]                               
      ],     
      "answer": "Steel Magnolias"                             
  }, {
      "movieClues": [                 
          "Pump Up the Volume",                           
          "Boyhood",                             
          "Speed",                               
          "The Mexican",                         
          "Saving Private Ryan"                   
      ],     
      "actorClues": [                         
          ["Christian Slater"],                           
          ["Patricia Arquette"],                         
          ["Dennis Hopper"],                             
          ["Brad Pitt"],                         
          ["Tom Sizemore"]               
      ],     
      "answer": "True Romance"                       
  }, {
      "movieClues": [
          "Good Will Hunting",
          "Love, Actually",
          "Mrs. Doubtfire",
          "Les Miserables",
          "Sophie's Choice"
      ],
      "actorClues": [
          ["Stellan Skarsgard"],
          ["Colin Firth"],
          ["Pierce Brosnan"],
          ["Amanda Seyfried"],
          ["Meryl Streep"]
      ],
      "answer": "Mamma Mia!"
  } 
];

*/

export default POSSIBLE_GAMES;