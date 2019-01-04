const all_quotes = [
  {
    author: "Gilbert Wakefield",
    quote:
      "Truth can never suffer from argument and inquiry; but may be essentally injured by the tyrannous interference of her pretended advocates. Impede her energies by the pains and penalties of law, and, like the Fame of , she will creep along the ground, diminutive in stature, and shrunk with apprehension: give free scope to all her tendencies, and she will soon collect her might, dilate herself to the fullness of her dimensions, and reach the stars.\n"
  },
  {
    author: "Angela of Foligno",
    quote:
      "No one can be saved without divine light. Divine light causes us to begin and to make progress, and it leads us to the summit of perfection. Therefore if you want to begin and to receive this divine light, pray. If you have begun to make progress and want this light to be intensified within you, pray. And if you have reached the summit of perfection, and want to be superillumined so as to remain in that state, pray.\n"
  },
  {
    author: "Laurence Binyon",
    quote:
      "They shall grow not old, as we that are left grow old:Age shall not weary them, nor the years condemn.At the going down of the sun and in the morningWe will remember them."
  },
  {
    author: "Michel Aflaq",
    quote:
      "Europe is as fearful of Islam today as she has been in the past. She now knows that the strength of Islam (which in the past expressed that of the Arabs) has been reborn and has appeared in a new form: Arab nationalism.\n"
  },
  {
    author: "Br�tal Legend",
    quote: "I summon the forces of monumental disaster!"
  },
  {
    author: "Lexiphanicism",
    quote:
      "I may be incurably lexiphanic�but lexiphanicism for its own sake is not my style.\n"
  },
  {
    author: "The Andromeda Strain (film)",
    quote:
      "Hello, Ops. This is Major Manchek, Scoop Control A-12. We need a fly-by over Piedmont, New Mexico. Infrared, a FLIR scan, all sectors, film to come direct to Scoop. Assign Gunner Wilson. If he's not  some place."
  },
  {
    author: "Howard Safir",
    quote:
      "He's had a tough life. As is not unusual in Jewish families - if you've ever seen the movie Avalon - I think somebody's cut the turkey on Uncle Louis a few years ago... That doesn't change my view of him when I was young and he was a detective.\n"
  },
  {
    author: "Delight",
    quote:
      "All in heaven take joy in sharing their delights and blessings with others."
  },
  { author: "Fairness", quote: "All's fair in love and war." },
  {
    author: "George Moore (novelist)",
    quote: "The wrong way always seems the more reasonable.\n"
  },
  {
    author: "The Man Who Was Thursday",
    quote: "Sunday would say he was anybody."
  },
  {
    author: "Epic of Evolution",
    quote:
      "The epic of evolution not only unifies the natural and social sciences; it bridges science and religion, fact and value, and it smoothly blends the scientifically objective with the culturally relative. The epic also addresses humanity�s most pressing questions. If as a species we are to understand and solve our common problems, if we are to guide our story�s unfolding, we need to understand, in the deep and human way that only story can convey, both our evolutionary past and our future options. We need the epic.\n"
  },
  {
    author: "Mordechai Ben-Ari",
    quote:
      "Social Darwinism and eugenics are unscientific in two aspects. First, they commit the  which is the assumption that what is, must be. The fact that the natural environment selects for reproductive advantage does not mean that we, as humans, should be forcibly selecting people according to some preconceived notions. The second nonscientific aspect of these movements was their narrow interpretation of the meaning of fitness. In evolution, this simply means fitness to survive and reproduce, not fitness according to some externally imposed criteria.Darwin himself never engaged in these speculations, nor did he support these perversions of his theory.\n"
  },
  {
    author: "School of Rock",
    quote:
      "Those who can�t do, teach. And those who can�t teach, teach gym.  (Variation of  quote and earlier quoted verbatim in )"
  },
  {
    author: "Demagogue",
    quote:
      " A demagogue must be neither an educated nor an honest man; he has to be an ignoramus and a rogue.\n"
  },
  {
    author: "Betsy DeVos",
    quote:
      "I have decided to stop taking offense at the suggestion that we are buying influence. Now I simply concede the point. They are right. We do expect something in return. We expect to foster a conservative governing philosophy consisting of limited government and respect for traditional American virtues.\n"
  },
  {
    author: "The Joker",
    quote:
      "\"The guy goes into the hospital, okay? His wife's just had a baby and he can't wait to see them both. So he meets the doctor and he says, 'Oh, Doc, I've been so worried. How are they?' And the doctor smiles and says, 'They're fine. Just fine. Your wife's delivered a healthy baby boy and they're both in tip-top form. You're one lucky guy.' So the guy rushes into the maternity ward with his flowers. But it's empty. His wife's bed is empty. 'Doc?' He says and turns around and the doctor and all the nurses wave their arms and scream in his face. 'April fools! Your wife's dead and the baby's a spastic!!'\" (he executes an asylum orderly with a gunshot to the head) \"Get it? Oh what a senseless waste of human life!\""
  },
  {
    author: "Lynda Gratton",
    quote:
      " is a defining, all-consuming part of our lives. Now, more than ever, the speed at which the nature of work is changing is having an extraordinary impact on working lives everywhere."
  },
  {
    author: "Jimmy Stewart",
    quote: "Never treat your audience as customers, always as partners."
  },
  {
    author: "Phenomenology (philosophy)",
    quote:
      " lack of charity toward the instrument metaphor is not arbitrary. It represents his disenchantment with the assumption that knowledge is power and that method is the means to this end. ...   conception of method, like , is linked to this idea of knowledge as an instrument of power. ... The same could be said of .  can rightly claim that the instrument metaphor pervades the epistemological tradition he is seeking to transcend.\n"
  },
  {
    author: "Richie Sambora",
    quote:
      "For me, success is being able to give back to your friends, your family, your community, those in need and the world entire."
  },
  {
    author: "Katherine Mansfield",
    quote:
      "It's an infernal nuisance to love Life as I do. I seem to love it more as time goes on rather than less. It never becomes a habit to me. It's always a marvel."
  },
  {
    author: "Choir",
    quote:
      "It�s singing and rugby. And I don�t do the rugby. I always sang in school choirs and went on tours to other countries. I have always loved it. It�s a very communal thing, and you really connect with people.\n"
  },
  {
    author: "John Keble",
    quote:
      "The trivial round, the common task,Would furnish all we ought to ask.\n"
  },
  { author: "Adventures in the Screen Trade", quote: "NOBODY KNOWS ANYTHING." },
  {
    author: "Teitur Lassen",
    quote:
      "Teitur Lassen speaks for the broken-hearted, who, for the most part, may be too timid to speak for themselves. His first effort is shamelessly honest and hints at very beautiful things to come.\n"
  },
  {
    author: "Jersey Boys",
    quote:
      "Thank you, ladies and gentlemen. We're the Variety Trio. () ...three, four! () And now, a new discovery of mine, little Frankie Casteluccio."
  },
  {
    author: "Michikazu Kobayashi",
    quote:
      "We should reveal the transition to QT and the nature of QT. Statistical quantities are useful in order to investigate the transition and the nature of QT. Here we list the possible statistical quantities."
  },
  {
    author: "Wanted (2009 film)",
    quote:
      "You have to give answers to your head of bullets, how much i use i dont have to give answers [Threatning to Talpade]"
  },
  { author: "Lex Donaldson", quote: "p. 127." },
  {
    author: "Speed of light",
    quote:
      "The laws of economics are subject to the laws of physics. The physical processes that govern this planet and the continued life upon it place as stringent an upper limit on economic growth as the speed of light does on our knowledge of the universe.\n"
  },
  {
    author: "Thrushes",
    quote:
      "And hark! how blithe the throstle sings!  He, too, is no mean preacher:Come forth into the light of things,  Let Nature be your teacher.\n"
  },
  {
    author: "Kevin Dockery (author)",
    quote:
      "The physical layout of the P90 is very unusual the first time an operator sees it. The grips underneath the weapon are oddly curved with elongated holes above them to allow the fingers to wrap over the grip. Once the weapon is picked up, the style of holding the weapon dictated by the layout of the grips becomes automatic."
  },
  {
    author: "Teleology",
    quote:
      "The synthesis of , , and  that  achieved was based on a teleological approach to nature, one that gave primacy to functional purpose over structural affinity.\n"
  },
  {
    author: "Joe Hisaishi",
    quote:
      "I actually don't like playing the piano or conducting the orchestra.There is always an exchange of energies,which is not even.It's one against 80.\n"
  },
  {
    author: "Fletch Lives",
    quote:
      " Over the years, I found Mr. Underhill's credit card to be a useful tool, much like Underhill himself."
  },
  {
    author: "Richard Pryor",
    quote:
      " showed us all that one little person can make a whole bunch of noise without so much as a whisper. She showed the world that the color of your skin shouldn't determine what part of the bus you sit in... as you ride through life.\n"
  },
  { author: "Lakshmi", quote: "Every woman is an emanation of you.\n" },
  { author: "Love's Labour's Lost", quote: "A high hope for a low heaven.\n" },
  {
    author: "Dirty Grandpa",
    quote:
      "I haven't had sex in 15 years, Jason, and I want to fuck, fuck, fuck, fuck, fuck!"
  },
  {
    author: "Abiotic component",
    quote:
      "When I was a student, back in the days when mammoths roamed the earth, ecologists tended to believe that the character of living systems was largely determined by abiotic factors. This means influences such as local climate, geology or the availability of nutrients. But it now seems that this belief arose from the study of depleted ecosystems. The rules they derived now appear to have described not the world in its natural state, but the world of our creation. We now know that living systems which retain their large carnivores and large herbivores often behave in radically different ways from those which have lost them.\n"
  },
  {
    author: "Outrageous Fortune (film)",
    quote:
      "This guy in the morgue.....whoever he is.....he's got a.....does the phrase  mean anything to you?"
  },
  {
    author: "Kaliopate Tavola",
    quote:
      "Democracy is a means of achieving a higher level of individual and collective gratification, welfare, peace, stability and prosperity. It is not an end in itself! Practitioners of democracy in the Pacific should therefore be pragmatic in their approach. An idealistic and a purist approach is, I believe, misplaced.\n"
  },
  {
    author: "Samantha Barks",
    quote:
      "My perfect  would be a chilled, calming day, nothing too taxing. I try to watch films at the cinema whenever I can, or I go for a walk down by the river. and I might then try out a new restaurant we�ve heard about. I�m  and I love it that there are so many places in  with great veggie food. I�ve got my own little fan group who call themselves the Sprouts, because of my obsession with , and theyre a fantastic group of girls that I chat to all the time. Otherwise  this is embarrassing to admit  Richard and I will play . Its a side of me that not a lot of people know about but I was a big games girl when I was a teenager and computer games are my guilty pleasure.\n"
  },
  {
    author: "Molly Worthen",
    quote:
      "Listening continuously and taking notes for an hour is an unusual cognitive experience for most young people. Professors should embrace � and even advertise � lecture courses as an exercise in mindfulness and attention building, a mental workout that counteracts the junk food of nonstop social media.\n"
  },
  {
    author: "Louis Armstrong",
    quote:
      "The Brick House was one of the toughest joints I ever played in ... Guys would drink and fight one another like circle saws. Bottles would come flying over the bandstand like crazy and there was lots of plain common shooting and cutting. But somehow all that jive didn't faze me at all. I was so  to have some place to blow my horn.\n"
  },
  {
    author: "Francis George",
    quote:
      "In the long run, any attempt to reduce the complexity of the relations among the sacred, the properly secular, and the profane is doomed to failure, although each such effort can cause great human hardship in the short run. But in both the short and the long run, the Church, or the synagogue, or the mosque or the temple, is where you go when you want to be connected to the One who relates to everyone and every people. If the Church is where one goes to be truly free, how does the Church contribute to our understanding of who we are and what we should do in the activities that shape the world we live in, that fill the theater of secularity?\n"
  },
  { author: "Choha", quote: "A raging thrown from the decka block of ice.\n" },
  {
    author: "Contrition",
    quote:
      "My sacrifice, O God, is a broken spirit. A broken and contrite heart you will not despise.\n"
  },
  {
    author: "Brother Lawrence",
    quote:
      "The greater perfection a soul aspires after, the more dependent it is upon Divine Grace.\n"
  },
  {
    author: "Walter Winchell",
    quote:
      "Gossip is the art of saying nothing in a way that leaves practically nothing unsaid."
  },
  {
    author: "Ars�ne Wenger",
    quote:
      "In my job, you expect to suffer. That's why when I go to hell one day, it will be less painful for me than you, because I'm used to suffering.\n"
  },
  {
    author: "Intersectionality",
    quote:
      "It is important to challenge the idea held by many critics--some Marxists among them--that the Black feminist concept of intersectionality is just about the  of racism, sexism and other forms of oppression on an individual level. The Black feminist tradition has always been tied to collective struggle against oppression--against slavery, segregation, racism, , poverty, , the systematic rape of Black women and the systematic  of Black men.\n"
  },
  {
    author: "2013 Los Angeles International Airport shooting",
    quote:
      'An unemployed motorcycle mechanic who gunned down airport screening officers at Los Angeles International Airport in a 2013 attack that sent passengers running for their lives pleaded guilty Tuesday to murder and 10 other charges....He was armed with a  he had purchased seven months earlier.Officers found a handwritten note and ammunition in a duffel bag Ciancia had dropped.Ciancia, who was living in the Los Angeles area after growing up in Pennsville, N.J., said in the note that he wanted to kill at least one TSA officer but hoped to kill more."If you want to play that game where you pretend that every American is a terrorist, you\'re going to learn what a self-fulfilling prophecy is," his note said, according to court documents.The note added, "I want to instill fear in your traitorous minds. I want it to always be in the back of your head just how easy it is to take a weapon to the beginning of your Nazi checkpoints."\n'
  },
  {
    author: "Worldliness",
    quote:
      "Freedom from the world  is, in principle, not asceticism, but rather a distance from the world for which all participation in things worldly takes place in the attitude of �as if not.� ( 7:29-31)\n"
  },
  {
    author: "Alan Grayson",
    quote:
      "I look forward to an honest debate with Governor Palin on the issues, in the unlikely event that she ever learns anything about them.\n"
  },
  {
    author: "Gustave Nadaud",
    quote:
      "They tell me every day is there Not more nor less than  gay;In shining robes and garments fair The people walk upon their way.One gazes there on castle walls As grand as those of Babylon,A bishop and two generals! What joy to be in Carcassonne! Ah! might I but see Carcassonne!\n"
  },
  {
    author: "Massad Ayoob",
    quote:
      "There was some brilliant use of polymer applied, and the result is a physically large pistol which, with magazine removed, weighs only 20.5 ounces on my scale. That�s less than the weight of a snub-nose Colt Detective Special, but depending on the magazine, the Five-seveN carries ten, twenty, or even thirty rounds of 5.7mm, compared to six rounds of .38 Special in the snubbie."
  },
  {
    author: "Farewell, My Lovely (1975 film)",
    quote: " She gave me a smile I could feel in my hip pocket."
  },
  {
    author: "Paul Harvey",
    quote:
      "Hello Americans, I'm Paul Harvey. You know what the news is -- in a minute, you're going to hear the  of the story."
  },
  {
    author: "Max Horkheimer",
    quote:
      "The endeavor of scientific research to see events in their more general connection in order to determine their laws, is a legitimate and useful occupation. Any protest against such efforts, in the name of freefom from restrictive conditions, would be fruitless if science did not na�vely identify the abstractions called rules and laws with the actually efficacious forces, and confuse the probability that B will follow A with the actual effort make B follow A.\n"
  },
  {
    author: "Gary Zukav",
    quote: "Summary of the new physics and the old physics: (p.41)"
  },
  {
    author: "Henri Cartier-Bresson",
    quote:
      "For me, the great myth is the Greek myth of Antaeus, who had to touch Earth to regain his strength. I know I must always keep in contact with the concrete, concrete reality, the small incident and the small, specific truth, which might have wide reverberations.\n"
  },
  {
    author: "National anthem",
    quote:
      "Every state must have its anthem, flag and coat of arms � or must it? This package, now taken for granted, became the worldwide standard only about a century ago, when the European habits and traditions began to spread across the globe � and not all countries have these symbols.\n"
  },
  {
    author: "Gabriel",
    quote:
      "And in the sixth month the angel Gabriel was sent from God unto a city of Galilee, named Nazareth,  To a virgin espoused to a man whose name was Joseph, of the house of David; and the virgin's name  Mary.  And the angel came in unto her, and said, Hail,  highly favoured, the Lord  with thee: blessed  thou among women.  And when she saw , she was troubled at his saying, and cast in her mind what manner of salutation this should be.  And the angel said unto her, Fear not, Mary: for thou hast found favour with God.  And, behold, thou shalt conceive in thy womb, and bring forth a son, and shalt call his name JESUS.  He shall be great, and shall be called the Son of the Highest: and the Lord God shall give unto him the throne of his father David:  And he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end.  Then said Mary unto the angel, How shall this be, seeing I know not a man?  And the angel answered and said unto her, The Holy Ghost shall come upon thee, and the power of the Highest shall overshadow thee: therefore also that holy thing which shall be born of thee shall be called the Son of God.  And, behold, thy cousin Elisabeth, she hath also conceived a son in her old age: and this is the sixth month with her, who was called barren.  For with God nothing shall be impossible.  And Mary said, Behold the handmaid of the Lord; be it unto me according to thy word. And the angel departed from her.\n"
  },
  {
    author: "The Adventures of Buckaroo Banzai Across the 8th Dimension",
    quote: "Evil! Pure and simple, from the 8th Dimension! Get 'em!"
  },
  {
    author: "Futurama: Into the Wild Green Yonder",
    quote: "Stop making your point so ineffectively!"
  },
  {
    author: "Heather Wilson",
    quote:
      "You knew what you were doing. You knew that shock and indecency creates a buzz that moves market share and lines your pockets.\n"
  },
  {
    author: "The Greatest Story Ever Told",
    quote:
      "Go now, and teach all nations. Make it your first care to love one another and to find the kingdom of God, and all things shall be yours without me asking. Do not fret then for tomorrow; leave tomorrow to fret over its own needs, for today... today's troubles are enough. And lo, I am with you always, even onto the end of the world..."
  },
  {
    author: "David A. Clarke Jr.",
    quote:
      " is the steadfast leader our nation needs. He has spoken passionately to me of his belief in our American system of justice, and he speaks to the values that are at the foundation of our social contract. Throughout his campaign, and over many years before, he has consistently and constantly raised his voice � not only in defense of the character of the American police officer, but the need for all people to feel they are being treated fairly and respectfully by law enforcement.You see, Donald Trump understands that what can make our nation safe again is a recommitment to a system of justice in which no government official, not even those who have fought their way to the marble and granite halls of Washington; no private citizen, not even Hillary Clinton; and no group of people, despite the fervor with which they press forward their grievances, can claim privilege above the law. It cannot happen in the United States.\n"
  },
  {
    author: "Abraham Foxman",
    quote:
      'We are deeply troubled by the �s continual repression of its people. Particularly painful, with its unavoidable connections to history, is the order requiring all Hindus in Afghanistan to wear an identity label on their clothing. This is an extension of the Taliban�s policy of religious intolerance and a stark reminder of the exclusionary tactics employed by the Nazis as a precursor to genocide. The Taliban rulers in Afghanistan have adopted a policy that more than 60 years ago spelled the beginning of the end for six million Jews. The Holocaust began with the ostracizing of the Jewish people and their forced separation from society, which can be the only purpose of labeling "others" as outsiders. In Nazi-occupied Europe, the badge of shame was the yellow Star of David worn as a patch. In Afghanistan, the Taliban rulers today are ordering Hindus to wear a similar label to enable Muslims to identify them. This is a clearly a policy founded on intolerance, mistrust and religious hatred. One would hope that we have learned from history. Following the recent desecration ofstatutes in Afghanistan, it has now progressed to marking people. We cannot help but ask, "What comes next?" We call on the international community and all religious leaders to immediately speak out against this practice.\n'
  },
  {
    author: "Emma Roberts",
    quote:
      "I don't really have time [to babysit my twin cousins]. And, well, I actually have my  babysitter sometimes.\n"
  },
  {
    author: "Marek Edelman",
    quote:
      "Man is evil, by nature man is a beast.  People have to be educated from childhood, from kindergarten, that there should be no hatred.\n"
  },
  {
    author: "Piano Sonata No. 31 (Beethoven)",
    quote:
      "If you take a piece like Op. 110 of Beethoven, that whole introduction to the slow movement, in the space of something like six measures, are some 22 or 23 different instructions by Beethoven on how to play those six bars. And each time you play, it is an opportunity to get closer to what you think is the combined intention of that. I don�t think of that as surpassing Beethoven. These people are some of the most singular in the history of mankind. These are giants of human expression, of human awareness, and I think it would be a little arrogant to think of going beyond them.\n"
  },
  {
    author: "Israel Zangwill",
    quote:
      "How full and rich a worldTheirs to inhabit is�Sweet scent of grass and bloom,Playmates� glad symphony,Cool touch of western wind,Sunshine�s divine caress.How should they know or feelThey are in darkness?But, oh, the miracle!If a Redeemer came,Laid finger on their eyes�One touch and what a world,New-born in loveliness!"
  },
  {
    author: "Wu Cherng-dean",
    quote:
      "I'd like them (Mainland Chinese) to live here (Kinmen) too. I hope someday they can buy property here and their children could come to school here."
  },
  {
    author: "Success",
    quote:
      "Champions aren't made in gyms, champions are made from something they have deep inside them � a desire, a dream, a vision. They have to have last-minute stamina, they have to be a little faster, they have to have the skill and the will. But the will must be stronger than the skill.\n"
  },
  {
    author: "Graeme Leung",
    quote:
      "If we continue to pardon or excuse the wrongdoers who commit acts of criminality in unsettling an elected government, we don't have any guarantee, do we, that this kind of exercise won't be repeated in the future.\n"
  },
  {
    author: "Hans Christian �rsted",
    quote:
      "The agreement of this law with nature will be better seen by the repetition of experiments than by a long explanation."
  },
  {
    author: "Germantown, Maryland",
    quote:
      "WalletHub, a finance website that rates things and places, named Germantown as the second most diverse city in the country... Germantown is not an incorporated city but is administered by the Montgomery County government.\n"
  },
  {
    author: "The Phoenix (1982 TV series)",
    quote:
      "Long ago, in a remote corner of the world, ancient astronauts landed from a distant planet with a gift for mankind...the Phoenix. For a thousand years, he has waited...suspended in time. Now, he's awakened to complete his mission. He searches for his partner, Mira. For only she knows his ultimate assignment on Earth. Dependent on the sun for his trek for survival, endowed with a superior intelligence, he has fully developed the powers of the human mind. Relentlessly pursued by those who seek to control him, he must stay free. The Phoenix."
  },
  {
    author: "Tony Judt",
    quote:
      "We no longer have political movements. While thousands of us may come together for a rally or march, we are bound together on such occasions by a single shared interest. Any effort to convert such interests into collective goals is usually undermined by the fragmented individualism of our concerns. Laudable goals�fighting climate change, opposing war, advocating public healthcare or penalizing bankers�are united by nothing more than the expression of emotion. In our political as in our economic lives, we have become consumers: choosing from a broad gamut of competing objectives, we find it hard to imagine ways or reasons to combine these into a coherent whole. We must do better than this."
  },
  {
    author: "Twice-Told Tales (film)",
    quote:
      "Your daughter is a fine specimen, too, isn't she father? A specimen of the most deadly thing that was ever given life."
  },
  { author: "12 Monkeys", quote: "All I see are dead people." },
  {
    author: "William Kapell",
    quote:
      "Music isn't enough. Performers aren't enough. There must be someone that loves music as much as life. For you, and remember this always, those of us with something urgent to say, we give everything.\n"
  },
  {
    author: "Shammai",
    quote:
      "Make the study of the  your chief occupation; speak little, but accomplish much; and receive every man with a friendly countenance.\n"
  },
  {
    author: "Joe the Plumber",
    quote:
      "At a state level, it's up to them. I don't want it to be a federal thing. I personally still think it's wrong. People don't understand the dictionary� it's called queer. Queer means strange and unusual. It's not like a slur, like you would call a white person a honky or something like that. You know, God is pretty explicit in what we're supposed to do � what man and woman are for. Now, at the same time, we're supposed to love everybody and accept people, and preach against the sins. I've had some friends that are actually homosexual. And, I mean, they know where I stand, and they know that I wouldn't have them anywhere near my children. But at the same time, they're people, and they're going to do their thing.\n"
  },
  {
    author: "Diary of a Wimpy Kid",
    quote:
      "The only reason I agreed to do this at all is that I figure later on when I'm rich and famous, I'll have better things to do than answer people's stupid questions all day long. Ok, how about I take the blame for you."
  },
  {
    author: "Jackie Speier",
    quote:
      "Leo Ryan's life and his deeds are about a life that was so much more than Guyana.  He was relentless in his search for answers, answers that were not readily available by just asking questions...We remember him today because his story is so much like those of most Americans; we want to believe the best and we sometimes hear the worst.\n"
  },
  {
    author: "Fawn M. Brodie",
    quote:
      "A man's memory is bound to be a distortion of his past in accordance with his present interests, and the most faithful autobiography is likely to mirror less what a man was than what he has become.\n"
  },
  {
    author: "William Brett, 1st Viscount Esher",
    quote:
      "It seems to me that whenever circumstances arise in the ordinary business of life in which, if two persons were ordinarily honest and careful, the one of them would make a promise to the other, it may properly be inferred that both of them understood that such a promise was given and accepted.\n"
  },
  {
    author: "Abraham Kuyper",
    quote:
      "Oh, no single piece of our mental world is to be hermetically sealed off from the rest, and there is not a square inch in the whole domain of our human existence over which Christ, who is Sovereign over , does not cry: �Mine!�\n"
  },
  {
    author: "William Rootes, 1st Baron Rootes",
    quote:
      "No other man-made device since the shields and lances of the ancient knights fulfills a man's ego like an automobile.\n"
  },
  {
    author: "M. H. Abrams",
    quote:
      "It's amazing how, age after age, in country after country, and in all languages,  emerges as incomparable."
  },
  {
    author: "Croesus",
    quote:
      "In peace the sons bury their fathers, but in war the fathers bury their sons.\n"
  },
  {
    author: "Bernard Jenkin",
    quote:
      "Strategy is a constant reconciling of possibilities, means and ends.\n"
  },
  {
    author: "Gurren Lagann",
    quote:
      "Do the impossible, see the invisible. / Row! Row! Fight the power! / Touch the untouchable, break the unbreakable/ Row! Row! Fight the power!\n"
  },
  {
    author: "Demon",
    quote:
      "The demons have always effected that all those who ever so little strived to live by  and shun vice be hated.\n"
  },
  {
    author: "Ashley Tisdale",
    quote:
      "I want people to know that I�m a real person, and that I�ve been through normal situations, like crushes and heartbreaks.\n"
  },
  {
    author: "Count Dracula (1970 film)",
    quote:
      "One of my race crossed the Danube a destroyed the Turkish host.Though sometimes beaten back he came again and again then at the end he came again for he alone could triumph.This was a Dracula indeed."
  },
  {
    author: "The Horse in the Gray Flannel Suit",
    quote:
      "You knew Helen's medal for good. One more like that it's the glue factory - for both of us."
  },
  {
    author: "Telecommunication",
    quote:
      "Information systems, at any level of complexity above that of speech, necessarily involve technologies such as printing, telecommunications, or computers. However, to information science technical potentialities and constraints are of importance mainly in that they affect the social relations concerned.\n"
  },
  {
    author: "Sterling Hayden",
    quote:
      "Your mind flies free and you see yourself as an actor, condemned to a treadmill wherein men and women conspire to breathe life into a screenplay that allegedly depicts life as it was in the old wild West."
  },
  { author: "Prince of Persia: Warrior Within", quote: "DIE, YOU BASTARD!" },
  {
    author: "Hafsat Abiola",
    quote:
      "Unlike the small community, where every person lives in the illusion of having the same ideals, beliefs, and values as everyone else, in the larger context of plural communities �&nbsp;be it in country, continent, or globe � we live in the illusion of absolute difference."
  },
  {
    author: "Shankar-Ehsaan-Loy",
    quote: "Shankar-Ehsaan-Loy are doing some nice songs.\n"
  },
  {
    author: "Theft",
    quote:
      "Well, well, be it so, thou strongest thief of all,For thou hast stolen my will, and made it thine.\n"
  },
  {
    author: "The Getaway (1994 film)",
    quote: "It's been my experience that having friends is overrated."
  },
  {
    author: "David Frith",
    quote:
      "He soon made his name as a distinctly awkward fast left-arm bowler whose pounding run to the wicket was filled with menace.\n"
  },
  {
    author: "Micrographia",
    quote:
      "As in , the most natural way of beginning is from a Mathematical ; so is the same method in Observations and  the most genuine, simple, and instructive. ...And in  Enquiries, we must endevour to follow Nature in the more  and  ways she treads in the most  and , to trace her steps, and be acquainted with her manner of walking there, before we venture our selves into the multitude of  she has in  nature; lest, being unable to distinguish and judge of our way, we quickly lose both  our Guide, and  too, and are left to wander in the  of groundless opinions; wanting both , that , and , that , which should direct our proceedings."
  },
  {
    author: "Timur",
    quote:
      "Then the Prince Muhammad Sultan said: 'The whole country of India is full of gold and jewels, and in it there are seventeen mines of gold and silver, diamond and ruby and emerald and tin and steel and copper and quicksilver, etc., and of the plants which grow there are those fit for making wearing apparel, and aromatic plants, and the sugar-cane, and it is a country which is always green and verdant, and the whole aspect of the country is pleasant and delightful. Now, since the inhabitants are chiefly polytheists and infidels and idolators and worshippers of the sun, by the order of Allah and his prophet, it is right for us to conquer them.\n"
  },
  {
    author: "Ed Harcourt",
    quote:
      "Who's to say that every performer should be a good actor? Why can't you just be yourself?\n"
  },
  {
    author: "Mama (2013 film)",
    quote:
      "You know,  and , they  real hard, but sometimes they mess things up.&nbsp; You  Daddy  you, right?"
  },
  {
    author: "Richard Grafton",
    quote:
      "Thirty dayes hath Nouember,Aprill, June and September,February hath xxviii alone,And all the rest haue xxxi.\n"
  },
  {
    author: "Kathy Najimy",
    quote:
      "First and foremost, I'm a feminist. And basically that stems from a strong belief that all people and creatures deserve equal opportunity, rights and respect.\n"
  },
  {
    author: "Never Let Me Go (2010 film)",
    quote:
      " It's been two weeks since I lost him. I've been given my notice now. My first donation is in a month's time. I come here and imagine that this is the spot where everything I've lost since my childhood has washed out. I tell myself, if that were true, and I waited long enough, then a tiny figure would appear on the horizon across the field, and gradually get larger until I'd see it was Tommy. He'd wave and maybe call. I don't let the fantasy go beyond that. I can't let it. I remind myself I was lucky to have had any time with him at all. What I'm not sure about is if our lives have been so different from the lives of the people we save. We all complete. Maybe none of us really understand what we've lived through, or feel we've had enough time."
  },
  {
    author: "Walker Evans",
    quote:
      "It is the way to educate your eyes, and more. Stare, pry, listen, eavesdrop.\n"
  },
  {
    author: "Marissa Mayer",
    quote:
      "I think I�ve always thought of culture as DNA.  I don�t know a lot about genetics, but I understand some of it and I think that what you really want are the genes that are positive to hyper-express themselves in culture.\n"
  },
  {
    author: "Samuel Bowles",
    quote:
      'The second dimension is called "command," and it refers to those aspects of economic relationships that involve power, coercion, hierarchy, subordination, or authority. In capitalist (and many other) societies, command is a central aspect of the workplace, the household, and the government. It concerns relations among nations, classes, races, men, women, and other groups in society as well.\n'
  },
  {
    author: "Ed Harcourt",
    quote:
      "Who's to say that every performer should be a good actor? Why can't you just be yourself?\n"
  },
  {
    author: "Mama (2013 film)",
    quote:
      "You know,  and , they  real hard, but sometimes they mess things up.&nbsp; You  Daddy  you, right?"
  },
  {
    author: "Richard Grafton",
    quote:
      "Thirty dayes hath Nouember,Aprill, June and September,February hath xxviii alone,And all the rest haue xxxi.\n"
  },
  {
    author: "Kathy Najimy",
    quote:
      "First and foremost, I'm a feminist. And basically that stems from a strong belief that all people and creatures deserve equal opportunity, rights and respect.\n"
  },
  {
    author: "Never Let Me Go (2010 film)",
    quote:
      " It's been two weeks since I lost him. I've been given my notice now. My first donation is in a month's time. I come here and imagine that this is the spot where everything I've lost since my childhood has washed out. I tell myself, if that were true, and I waited long enough, then a tiny figure would appear on the horizon across the field, and gradually get larger until I'd see it was Tommy. He'd wave and maybe call. I don't let the fantasy go beyond that. I can't let it. I remind myself I was lucky to have had any time with him at all. What I'm not sure about is if our lives have been so different from the lives of the people we save. We all complete. Maybe none of us really understand what we've lived through, or feel we've had enough time."
  },
  {
    author: "Walker Evans",
    quote:
      "It is the way to educate your eyes, and more. Stare, pry, listen, eavesdrop.\n"
  },
  {
    author: "Marissa Mayer",
    quote:
      "I think I�ve always thought of culture as DNA.  I don�t know a lot about genetics, but I understand some of it and I think that what you really want are the genes that are positive to hyper-express themselves in culture.\n"
  },
  {
    author: "Samuel Bowles",
    quote:
      'The second dimension is called "command," and it refers to those aspects of economic relationships that involve power, coercion, hierarchy, subordination, or authority. In capitalist (and many other) societies, command is a central aspect of the workplace, the household, and the government. It concerns relations among nations, classes, races, men, women, and other groups in society as well.\n'
  },
  {
    author: "Ed Koch",
    quote:
      "It is not possible to remake the world. You can fix parts, but you can't remake the world.\n"
  },
  {
    author: "Madhouse (1974 film)",
    quote: "Now I must play the final scene, the death of Dr Death!"
  },
  {
    author: "William McDougall",
    quote:
      "Among all the disputes and uncertainties of the ethnographers about the races of Europe, one fact stands out clearly � namely, that we can distinguish a race of northerly distribution and origin, characterized physically by fair color of hair and skin and eyes, by tall stature and dolichocephaly (i.e. long shape of head), and mentally by great independence of character, individual initiative, and tenacity of will. Many names have been used to denote this type, ... . It is also called the Nordic type.\n"
  },
  { author: "Beauty", quote: "Things are beautiful if you love them.\n" },
  {
    author: "Florence Foster Jenkins",
    quote:
      "People may say I can't sing, but no one can ever say I didn't sing.\n"
  },
  {
    author: "Ali (film)",
    quote:
      "One thousand dollars to the man who brings me 's toupee, dead or alive."
  },
  {
    author: "Lauren Bacall",
    quote:
      "Losing Bogey was horrible, obviously. Because he was young. And because he gave me my life. I wouldn't have had a � I don't know what would have happened to me if I hadn't met him � I would have had a completely different kind of life. He changed me, he gave me everything. And he was an extraordinary man."
  },
  {
    author: "Wag the Dog",
    quote:
      "Can't have a war without an enemy...You could have one, but it would be a very dull war..."
  },
  {
    author: "Neil Harbisson",
    quote:
      "I don't feel that I'm using technology, I don't feel that I'm wearing technology, I feel that I am technology."
  },
  {
    author: "Ventseslav Konstantinov",
    quote:
      "It is only logical for the translator to become a part of the world of the author.\n"
  },
  {
    author: "Pyongyang",
    quote:
      "It has already become easier to imagine  with a  statue than to imagine Pyongyang without one.\n"
  },
  { author: "Harbinger Down", quote: "Terror is just beneath the surface." },
  {
    author: "Fang Lizhi",
    quote: "Marxism-Leninism is a worn-out dress that should be thrown away."
  },
  { author: "Artist", quote: "It was Homer who gave laws to the artist.\n" },
  { author: "Kumar Sangakkara", quote: "Interviewer" },
  { author: "The Fortune Cookie", quote: " Great president, lousy lawyer." },
  {
    author: "Zoolander",
    quote:
      "Rufus, Brint, and Meekus were like brothers to me.  And when I say brother, I don't mean like an actual brother, but I mean it like the way black people use it, which is more meaningful, I think.  If there's anything that this horrible tragedy can teach us, it's that a male model's life is a precious, precious commodity.  Just because we have chiseled abs and stunning features, it doesn't mean that we, too, can't not die in a freak gasoline fight accident."
  },
  {
    author: "DC Showcase: The Spectre",
    quote:
      "[] Sometimes, there isn't a hell of a lot of satisfaction in my job. It's hard watching talented, beautiful people throw their lives away for nothing... But this is a town where fame and fortune too easily bring out the worst in people. When that happens, I'm here to avenge... That's my secret... I am The Spectre."
  },
  {
    author: "Aloysius Pieris",
    quote:
      "A �discerning person� (), according to the , is someone perpetually mindful or watchful of God working in all things and at all times. Ever conscious of God�s Love, which is God�s Will, a vigilant Christian is never taken unawares by circumstances. In the  discourses of the Gospels, Jesus advises us to read the cosmic signs that announce God�s recurrent visitations and thus remain watchful and awake every hour of the day and night, that is to say, remain perpetually mindful. Hence there is no better description of biblical spirituality than ceaseless vigilance or perpetual mindfulness.\n"
  },
  {
    author: "Hop (film)",
    quote:
      "Fred, I think you and I got off the wrong foot. You said some things, I flooded some things. Let's start over, okay? People are the best people of all the people in the world"
  },
  {
    author: "Charles Wolfe",
    quote:
      "Slowly and sadly we laid him down, From the field of his fame fresh and gory;We carved not a line, and we raised not a stone, But we left him alone with his glory.\n"
  },
  {
    author: "Carboxylic acid",
    quote:
      "Carboxylic acids are useful reagents and synthetic precursors. The two simplest ones are manufactured on a large scale industrially. Formic acid is employed in the tanning process in the manufacture of leather and in the preparation of latex rubber. It is synthesized effi ciently by the reaction of powdered sodium hydroxide with carbon monoxide under pres sure. This transformation proceeds by nucleophilic addition followed by protonation.\n"
  },
  {
    author: "Prophecy (film)",
    quote:
      " Described as the most potent neurotoxin of the post-World War II age. Used from 1948 to 1956 in pulping processes as a cheap and effective caustic agent that prevents algae from forming on waterlogged timber. It is also known for its mutagenic properties, concentrating in the bodies of fish and plankton-eating crustacea, affecting the fetal development of everything that ingests it. The ratio of toxin to blood level is 30% higher in the developing fetus than in the host. It was discovered, after extensive testing, that it is the only mutagen that jumps the placental barrier, concentrating in fetal blood cells, where it adheres to the DNA and corrupts the chromosomes."
  },
  {
    author: "Blazing Saddles",
    quote:
      "Gentlemen, affairs of state must take precedent over... affairs of state."
  },
  {
    author: "Zoolander",
    quote:
      "Rufus, Brint, and Meekus were like brothers to me.  And when I say brother, I don't mean like an actual brother, but I mean it like the way black people use it, which is more meaningful, I think.  If there's anything that this horrible tragedy can teach us, it's that a male model's life is a precious, precious commodity.  Just because we have chiseled abs and stunning features, it doesn't mean that we, too, can't not die in a freak gasoline fight accident."
  },
  {
    author: "DC Showcase: The Spectre",
    quote:
      "[] Sometimes, there isn't a hell of a lot of satisfaction in my job. It's hard watching talented, beautiful people throw their lives away for nothing... But this is a town where fame and fortune too easily bring out the worst in people. When that happens, I'm here to avenge... That's my secret... I am The Spectre."
  },
  {
    author: "Aloysius Pieris",
    quote:
      "A �discerning person� (), according to the , is someone perpetually mindful or watchful of God working in all things and at all times. Ever conscious of God�s Love, which is God�s Will, a vigilant Christian is never taken unawares by circumstances. In the  discourses of the Gospels, Jesus advises us to read the cosmic signs that announce God�s recurrent visitations and thus remain watchful and awake every hour of the day and night, that is to say, remain perpetually mindful. Hence there is no better description of biblical spirituality than ceaseless vigilance or perpetual mindfulness.\n"
  },
  {
    author: "Hop (film)",
    quote:
      "Fred, I think you and I got off the wrong foot. You said some things, I flooded some things. Let's start over, okay? People are the best people of all the people in the world"
  },
  {
    author: "Charles Wolfe",
    quote:
      "Slowly and sadly we laid him down, From the field of his fame fresh and gory;We carved not a line, and we raised not a stone, But we left him alone with his glory.\n"
  },
  {
    author: "Carboxylic acid",
    quote:
      "Carboxylic acids are useful reagents and synthetic precursors. The two simplest ones are manufactured on a large scale industrially. Formic acid is employed in the tanning process in the manufacture of leather and in the preparation of latex rubber. It is synthesized effi ciently by the reaction of powdered sodium hydroxide with carbon monoxide under pres sure. This transformation proceeds by nucleophilic addition followed by protonation.\n"
  },
  {
    author: "Prophecy (film)",
    quote:
      " Described as the most potent neurotoxin of the post-World War II age. Used from 1948 to 1956 in pulping processes as a cheap and effective caustic agent that prevents algae from forming on waterlogged timber. It is also known for its mutagenic properties, concentrating in the bodies of fish and plankton-eating crustacea, affecting the fetal development of everything that ingests it. The ratio of toxin to blood level is 30% higher in the developing fetus than in the host. It was discovered, after extensive testing, that it is the only mutagen that jumps the placental barrier, concentrating in fetal blood cells, where it adheres to the DNA and corrupts the chromosomes."
  },
  {
    author: "Blazing Saddles",
    quote:
      "Gentlemen, affairs of state must take precedent over... affairs of state."
  },
  {
    author: "The Poseidon Adventure (1972 film)",
    quote:
      "At midnight on New Year's Eve, the , en route from New York to Athens, met with disaster and was lost. There were only a handful of survivors. This is their story....."
  },
  {
    author: "Kiran Desai",
    quote:
      "The Indian diaspora is a wonderful place to write from and I am lucky to be part of it.\n"
  },
  {
    author: "Psychiatric hospital",
    quote:
      "I do not oppose the insane asylum�but I abhor and condemn the cutthroat system that robs man of his reason, drives him to insanity and makes the lunatic asylum an indispensable adjunct to every civilized community.\n"
  },
  { author: "Horror Island", quote: "Arleen Grady" },
  {
    author: "The Falklands Play",
    quote:
      "Only one thing makes war justified and lawful, only one thing. When it's a struggle for law against force, for people's laws, their language and way of life. Everything that makes them what they are against a brutal effort to impose on them a life and language and laws which are not theirs and they ."
  },
  {
    author: "Vasil Levski",
    quote:
      "We are to have one flag, and on it the words: Holy and Pure Republic."
  },
  {
    author: "Peter W. Schramm",
    quote:
      "[T]he , is not only the most powerful and the most prosperous country on earth, but the most free and the most just. Then I do my best to tell them how and why this is so. And I teach them about the principles from which those blessings of liberty flow. I invite them to consider whether they can have any greater honor than to pass undiminished to their children and grandchildren this great inheritance of freedom."
  },
  {
    author: "Mumps",
    quote:
      "Mumps has been recognized as a common childhood illness since the time of  in the fifth century BC. In 1790, central nervous system involvement was described by Hamilton and, in 1860, sensorineural deafness by Toynebee. By the 1940s, mumps was garnering mounting concern as a cause of painful , , and  that was substantially affecting troop mobilization.\n"
  },
  {
    author: "Muhammad bin Bakhtiyar Khalji",
    quote:
      "The fame of his bravery and news of his plundering raids spread abroad, attracting to his standard a body of Khalji warriors then found hanging about all over Hindustan. His exploits were reported to Qutbuddin Aibak, who sent him a robe of honour and appointed him to invade Bihar as the Sultan�s general in 1202 C.E.15 Ikhtiyaruddin Bakhtiyar Khalji conquered extensively in Bihar and Bengal but then died unhonoured and unsung.\n"
  },
  {
    author: "Four Sided Triangle",
    quote: "An empty mind... and a new beginning!"
  },
  {
    author: "Shibboleth",
    quote:
      "The simple fact is that people do not  the reliability of  content by its grammatical purity, a shibboleth that is meaningless to them. They judge it by other measures, such as the grasp of the subject matter that the author displays, or the respect that the author has earned from other members of the community."
  },
  {
    author: "Upbuilding Discourses in Various Spirits",
    quote:
      "Regret must be an action with a collected mind, so it can be spoken about for upbuilding, so it may of itself give birth to new life, so that it does not become an event whose mournful legacy is a sorrowful mood; repentance in the sense of freedom with the stamp of eternity must have its time, yes, even its time for preparation.\n"
  },
  {
    author: "Sania Mirza",
    quote: "The most difficult element is perhaps the lack of  in my ."
  },
  {
    author: "Right-wing socialism",
    quote:
      "�Conservative� or �right-wing socialism� can be defined as that type in which institutional aggression is employed to maintain the social status quo and the privileges certain people or groups enjoy. The fundamental objective of right-wing socialism is to keep things as they are by preventing the free exercise entrepreneurship and creative human action from disrupting the pre-established framework of social organization.\n"
  },
  {
    author: "Lokesh Chandra",
    quote:
      "In conclusion, we can say that the Indonesian literati had access to all branches of Sanskrit learning and they put these disciplines to the best of use in the emergence of their own creative literature.\n"
  },
  {
    author: "Hummingbirds",
    quote:
      "And the humming-bird that hung  Like a jewel up amongThe tilted honeysuckle horns  They mesmerized and swungIn the palpitating air,  Drowsed with odors strange and rare,And, with whispered laughter, slipped awayAnd left him hanging there.\n"
  },
  {
    author: "Mazovia",
    quote:
      "Hey Pole, knowresolute Mazovians;Ready for a fight.In war and in peaceBeside their short height,Laughing, they can beat.\n"
  },
  {
    author: "Chulalongkorn",
    quote:
      "Failure to follow this advice, he said, might lead our clan to disappear.\n"
  },
  {
    author: "Bats",
    quote:
      "The sun was set; the night came on apace,And falling dews bewet around the place;The bat takes airy rounds on leathern wings,And the hoarse owl his woeful dirges sings.\n"
  },
  {
    author: "Dances with Wolves",
    quote:
      "It was hard to know how to feel. I had never been in a battle like this one. This had not been a fight for territory or riches or to make men free. This battle had no ego. It had been fought to preserve the food stores that would see us through winter, to protect the lives of women and children and loved ones only a few feet away. I felt a pride I had never felt before."
  },
  {
    author: "Elizabeth Bowes-Lyon",
    quote:
      "I am glad we have been bombed. Now we can look the East End in the eye.\n"
  },
  {
    author: "Viktor Frankl",
    quote:
      "A thought transfixed me: for the first time in my life I saw the truth as it is set into song by so many poets, proclaimed as the final wisdom by so many thinkers. The truth � that love is the ultimate and the highest goal to which man can aspire. "
  },
  {
    author: "Fernand Braudel",
    quote:
      "For four or five centuries, Islam was the most brilliant civilization in the Old World. (...) At its higher level the golden age of Muslim civilization was both an immense scientific success and a exceptional revival of ancient philosophy. These was not its only triumphs; literature was another: but they eclipse the rest. First, science: it was there that the Saracens (...) made the most original contributions. These, in brief, were nothing less than trigonometry and algebra (with its significantly Arab name). (...) Equally distinguished were Islam's mathematical geographers, its astronomical observatories and instruments (...). The Muslims also deserve high marks for optics, for  (...) and for pharmacy. More than half the remedies and healing aids used by the West came from Islam (...). Muslim medical skill was incontestable. (...) In the field of philosophy, what took place was rediscovery - a return, essentially of the peripatetic philosophy. The scope of this rediscovery, however, was not limited to copying and handling on, valuable as that undoubtely was. It also involved continuing, elucidating and creating.\n"
  },
  {
    author: "Christie Brinkley",
    quote:
      'My mom was always my biggest teacher, my inspiration, my role model. My mom was just the most amazing person. She was like a bon vivant in that she just lived each day to the fullest. As soon as I became a vegetarian, she became a vegetarian. I was actually inspired by a book she was reading that I picked up off the nightstand when I was about 13. It was a  book [] and it had a very graphic scene of the slaughterhouses in Chicago. So I read that and I said, "I love animals. I don\'t want to be a part of that system."\n'
  },
  {
    author: "Sujit Choudhry",
    quote:
      "Be nimble, entrepreneurial, opportunistic, and highly cost-effective.\n"
  },
  {
    author: "Marek Edelman",
    quote:
      "To be a Jew means always being with the oppressed and never the oppressors.\n"
  },
  {
    author: "Gardiner Spring",
    quote:
      "The evidence of our acceptance in the Beloved rises in proportion to our love, to our repentance, to our humility, to our faith, to our self-denial, to our delight in duty. Other evidence than this the Bible knows not � God has not given.\n"
  },
  {
    author: "Derek Abbott",
    quote:
      "One can justify solar-hydrogen simply on grounds of economic resource viability without any green agenda."
  },
  {
    author: "Charles Lamb",
    quote:
      "I have been trying all my life to like Scotchmen, and am obliged to desist from the experiment in despair.\n"
  },
  {
    author: "Christopher Nolan",
    quote:
      "You take an objective approach at times to get you through things, and you take a subjective approach at other times, and that allows you to find an emotional experience for the audience."
  },
  {
    author: "Arthur H. Robinson",
    quote:
      "The assumption that effective  technique and its evaluation is based in part on some subjective artistic or aesthetic sense on the part of the cartographer and map reader is somewhat disconcerting. For example, E. Raisz claims that the �effective use of lines or colors requires artistic judgment,� and J.K. Wright explains that the suitability of a symbol �depends on the map maker's taste and sense of harmony.� Throughout the literature there are numerous similar assertions regarding the assumed subjective aesthetic and artistic content of cartography.\n"
  },
  {
    author: "Pushing Tin",
    quote: "If you ever want to sleep at night, don't marry a beautiful girl."
  },
  { author: "The Fortune Cookie", quote: " Great lawyer, lousy dresser." },
  {
    author: "Alfred Stieglitz",
    quote:
      "AS A KID I WAS PROMISED an America - An America I believed in - and I insist on living - and dying - in that America, even I have to create it myself.\n"
  },
  {
    author: "Henrik Larsson",
    quote:
      "You have to look beyond race because as a human being you have to experience the person from the inside first\n"
  },
  {
    author: "American Pie (film)",
    quote:
      "You realize we're all going to go to college as virgins. They probably have special dorms for people like us."
  },
  {
    author: "Jonathan M. Sewall",
    quote:
      "No pent-up Utica contracts your powers,But the whole boundless continent is yours.\n"
  },
  {
    author: "Best Laid Plans (1999 film)",
    quote: "I only wanted to get laid, instead I'm getting fucked."
  },
  {
    author: "Liam Neeson",
    quote:
      "There are 4,000 mosques in the city (Istanbul). Some are just stunning, and it really makes me think about becoming a Muslim.\n"
  },
  {
    author: "Alvin and the Chipmunks: The Squeakquel",
    quote:
      "I'm not going anywhere without Daaa...!  ...aaaydream believer, and the homecoming queen... "
  },
  {
    author: "Maya the Bee (2014 film)",
    quote:
      'Maya, not so fast! I forgot to tell you the most important bee saying of all: "You should always wait for Willy!"'
  },
  {
    author: "Belarus",
    quote:
      "The Communist-Fascists, who are managers of the press, remove unwanted editors and monopolize the printing base, as it is widely practiced today in Belarus.\n"
  },
  {
    author: "John Singer Sargent",
    quote: "Every time I paint a portrait I lose a friend.\n"
  },
  {
    author: "Grandiose delusions",
    quote:
      "I don't have delusions of grandeur, I have an actual recipe for grandeur."
  },
  {
    author: "Soybean",
    quote:
      "Corn is an efficient way to get energy calories off the land and soybeans are an efficient way of getting protein off the land, so we've designed a food system that produces a lot of cheap corn and soybeans resulting in a lot of cheap fast food.\n"
  },
  {
    author: "Solon",
    quote:
      "Men keep their agreements when it is an advantage to both parties not to break them; and I shall so frame my laws that it will be evident to the Athenians that it will be for their interest to observe them.\n"
  },
  {
    author: "Abstract expressionism",
    quote:
      "There is no unity or organisation or even aesthetic unity [in Abstract Expressionism / , but we do have a very strong bond in our defense, but we also are strongest in our own individual identity. Our effort, I think, is all shooting off in independent directions. And the artists themselves will not admit to the existence of the New York School. They won't admit to any classification, and most of those painters known as Abstract Expressionists are the first to say they are not.\n"
  },
  {
    author: "Jean de Florette",
    quote:
      "I'll never sell the house where my mother was born, and where I hope to live forever until I die as a rich man! We can get by quite well on four thousand francs! I'll buy a mule, a load of miner's tools, and some dynamite to blast this damn rock! In a year I'll pay off the mortgage, and we'll be set!"
  },
  {
    author: "Cloudy with a Chance of Meatballs (film)",
    quote: "Come on, Steve. We've got a diem to carpe!"
  },
  {
    author: "D minor",
    quote:
      'The shadows in the courtyard grew longer, and finally the hot day gave way to slate- gray dusk and a moonlit night. The talk was still going on when, quite suddenly, a young violinist appeared on a balcony above the courtyard. There was a hush as, high above us, he struck up the first great D minor chords of Bach\'s Chaconne. All at once, and with utter certainty, I had found my link with the center. The moonlit Altmuhl Valley below would have been reason enough for a romantic transfiguration; but that was not it. The clear phrases of the Chaconne touched me like a cool wind, breaking through the mist and revealing the towering structures beyond. There had always been a path to the central order in the language of music, in philosophy and in religion, today no less than in Plato\'s day and in Bach\'s. That I now knew from my own experIence.We spent the rest of the night around campfires and in our tents on a meadow above the castle, giving full rein to our romantic and poetic sentiments. The young musician, himself a student, sat near our group and played minuets by Mozart and Beethoven interspersed with old folk songs; I tried to accompany him on my guitar. Otherwise, he proved a very gay young fellow and was reluctant to discuss his solemn rendering of the Chaconne. When pressed, he came back at us with "Do you know the key of the trumpets of Jericho?" "No." "D minor [d-moll] also, of course." "Why?" "Because they d-moll-ished the walls!" He escaped our wrath only by taking to his heels.\n'
  },
  {
    author: "Godwin, Earl of Wessex",
    quote:
      "Sir king, I have been often accused of harbouring traitorous designs against you, but, as God in heaven is just and true, may this morsel of bread choke me if even in thought I have ever been false to you.\n"
  },
  {
    author: "Snowpiercer",
    quote:
      "You ever been to the tail section? Do you have any idea what went on back there? When we boarded? It was chaos. Yeah, we didn't freeze to death, but we didn't have time to be thankful. Wilford's soldiers came and they took everything. A thousand people in an iron box. No food, no water... After a month, we ate the weak... You know what I hate about myself? I know what people taste like. I know that babies taste best... There was a woman. She was hiding with her baby. And some men with knives came. They killed her and they took her baby. And then an old man-no relation, just an old man-stepped forward and he said, \"Give me the knife.\" And everyone thought he'd kill the baby himself. But he took the knife and he cut off his arm. And he said, \"Eat this, if you're so hungry. Eat this, just leave the baby.\" I had never seen anything like that. And the men put down their knives... You've probably guessed who that old man was. That baby was Edgar. And I was the man with the knife. I killed Edgar's mother... And then one by one, other people in the tail section started cutting off arms and legs and offering them. It was like a miracle. And I wanted to. I tried, it's... A month later, Wilford's soldiers brought those protein blocks. We've been eatin' that shit ever since. 18 years I've hated Wilford. 18 years I've waited for this moment. And now I'm here... Open the gate. Please."
  },
  {
    author: "Garrett Hardin",
    quote:
      "A finite world can support only a finite population; therefore, population growth must eventually equal zero.\n"
  },
  {
    author: "Julie Christie",
    quote:
      "All women are aware of that moment when suddenly the boys don�t look at you. It�s a fairly common thing, when suddenly you no longer attract that instant male attention because of the way you look. I never really knew how to enjoy beauty, but it took the form of a subconscious arrogance, expecting things, all muddled up with celebrity.\n"
  },
  {
    author: "Visual art education",
    quote:
      "Fine Art then, records by  the glorious works of good men, whilst it holds those of bad men up to our abhorrence � it gives to posterity their images, either on the tinted canvass or the sculptured marble � it imitates the beautiful effects of nature as seen in the glowing landscape or the rising storm, and perpetuates the appearance of those beauteous  of the seasons � flowers and fruits, which, though fading whilst the painter catches their tints, yet live after decay by and through his genius. Industrial Art, on the contrary, aims at , by and through that power which is given to the artist for the investigation of the beautiful in nature; and in transferring it to the loom, the printing machine, the potter's wheel, or the metal worker's mould, he  nature in a new form, adapting it to his purpose by an intelligence arising out of his knowledge as an artist and as a workman. In short, the adaptation of the natural type to a new material compels him to , almost , as well as  �  as well as  � design as well as \n"
  },
  {
    author: "Aphorisms",
    quote:
      "We frequently fall into error and folly, Dr. Johnson tells us, �not because the true principles of action are not known, but because, for a time, they are not remembered.� To compress, therefore, the great and obvious rules of life into brief sentences which are not easily forgotten is, as he said, to confer a real benefit upon us.\n"
  },
  {
    author: "Nicholas Kazanas",
    quote:
      "That most mainstream philologists will react unfavourably to this thesis I take for granted. I know well in myself the force of habit and of attachment to deep-rooted notions that reacts more through emotional outbursts than cool rationality. I repeat that the issue of origins, of when and how, is one not for philologists but for archaeologists and experts in related fields. We owe it, other than to the peoples of India who, I think, have long been wronged (by their own faults no less than foreign influences), to truth itself, which is the primary concern of all of us, to consider this thesis without prejudice.\n"
  },
  {
    author: "Beetlejuice (TV show)",
    quote:
      "NO! I'VE BEEN TURNED INTO A LEAN, MEAN, CLEANING MACHINE! HEEELLLP!!"
  },
  {
    author: "Strictly Ballroom",
    quote: "I have to help Wayne with his bogo pogo."
  },
  {
    author: "Epistle of Jude",
    quote:
      "In a similar way,  and the surrounding towns gave themselves up to sexual immorality and perversion.\n"
  },
  { author: "July 19", quote: "2  June 30, 2005 08:16 (UTC)" },
  {
    author: "Jean Giraudoux",
    quote:
      "In wartime a man is called a hero. It doesn't make him any braver, and he runs for his life. But at least it's a hero who is running away."
  },
  {
    author: "Aphorisms",
    quote:
      "We frequently fall into error and folly, Dr. Johnson tells us, �not because the true principles of action are not known, but because, for a time, they are not remembered.� To compress, therefore, the great and obvious rules of life into brief sentences which are not easily forgotten is, as he said, to confer a real benefit upon us.\n"
  },
  {
    author: "Nicholas Kazanas",
    quote:
      "That most mainstream philologists will react unfavourably to this thesis I take for granted. I know well in myself the force of habit and of attachment to deep-rooted notions that reacts more through emotional outbursts than cool rationality. I repeat that the issue of origins, of when and how, is one not for philologists but for archaeologists and experts in related fields. We owe it, other than to the peoples of India who, I think, have long been wronged (by their own faults no less than foreign influences), to truth itself, which is the primary concern of all of us, to consider this thesis without prejudice.\n"
  },
  {
    author: "Beetlejuice (TV show)",
    quote:
      "NO! I'VE BEEN TURNED INTO A LEAN, MEAN, CLEANING MACHINE! HEEELLLP!!"
  },
  {
    author: "Strictly Ballroom",
    quote: "I have to help Wayne with his bogo pogo."
  },
  {
    author: "Epistle of Jude",
    quote:
      "In a similar way,  and the surrounding towns gave themselves up to sexual immorality and perversion.\n"
  },
  { author: "July 19", quote: "2  June 30, 2005 08:16 (UTC)" },
  {
    author: "Jean Giraudoux",
    quote:
      "In wartime a man is called a hero. It doesn't make him any braver, and he runs for his life. But at least it's a hero who is running away."
  },
  {
    author: "Richard Holt Hutton",
    quote:
      "We believe that to the great body of the reading public the name of  first became known, if indeed it has yet become known, through the announcement of his death; the announcement being accompanied in a few of the papers by a brief sketch of his life and works. Boole's researches were not of a nature to be appreciated by the multitude, and he never condescended to those arts by which less gifted men have won for themselves while living a more splendid reputation.\n"
  },
  {
    author: "Bernard Kerik",
    quote: "Political criticism is our enemies' best friend.\n"
  },
  {
    author: "Harold Innis",
    quote:
      "A change in the type of medium implies a change in the type of appraisal and hence makes it difficult for one civilization to understand another."
  },
  {
    author: "The Endless Summer",
    quote:
      'When Corky does something strange everybody for 50 yards knows all about it. "Hey did you guys see that El Rollo, boy it was a beauty!" Yeah big deal Corky.'
  },
  {
    author: "Jackson C. Frank",
    quote:
      "Don't look back, over your shoulder! Keep your eye on freedom shore! Because you know the brave man with you, also pays for the wages of war.\n"
  },
  {
    author: "W. (film)",
    quote: "You disappoint me, junior. You deeply disappoint me."
  },
  {
    author: "The Phantom of the Opera (1962 film)",
    quote:
      "I am going to teach you to sing, Christine. I am going to give you a new voice! A voice so wonderful that theatres all over the world will be filled with your admirers. You will be the greatest star the opera has ever known. Greater than the greatest! And when you sing, Christine, you will be singing only... for me."
  },
  {
    author: "Handshake",
    quote:
      "Do you know where the handshake comes from? In ancient times it was a way to prove to a stranger that you did not carry weapons. Yes, offer your open hand to show that you did not have bad intentions. I wonder if the viruses know it.\n"
  },
  {
    author: "Richard Holt Hutton",
    quote:
      "We believe that to the great body of the reading public the name of  first became known, if indeed it has yet become known, through the announcement of his death; the announcement being accompanied in a few of the papers by a brief sketch of his life and works. Boole's researches were not of a nature to be appreciated by the multitude, and he never condescended to those arts by which less gifted men have won for themselves while living a more splendid reputation.\n"
  },
  {
    author: "Bernard Kerik",
    quote: "Political criticism is our enemies' best friend.\n"
  },
  {
    author: "Harold Innis",
    quote:
      "A change in the type of medium implies a change in the type of appraisal and hence makes it difficult for one civilization to understand another."
  },
  {
    author: "The Endless Summer",
    quote:
      'When Corky does something strange everybody for 50 yards knows all about it. "Hey did you guys see that El Rollo, boy it was a beauty!" Yeah big deal Corky.'
  },
  {
    author: "Jackson C. Frank",
    quote:
      "Don't look back, over your shoulder! Keep your eye on freedom shore! Because you know the brave man with you, also pays for the wages of war.\n"
  },
  {
    author: "W. (film)",
    quote: "You disappoint me, junior. You deeply disappoint me."
  },
  {
    author: "The Phantom of the Opera (1962 film)",
    quote:
      "I am going to teach you to sing, Christine. I am going to give you a new voice! A voice so wonderful that theatres all over the world will be filled with your admirers. You will be the greatest star the opera has ever known. Greater than the greatest! And when you sing, Christine, you will be singing only... for me."
  },
  {
    author: "Handshake",
    quote:
      "Do you know where the handshake comes from? In ancient times it was a way to prove to a stranger that you did not carry weapons. Yes, offer your open hand to show that you did not have bad intentions. I wonder if the viruses know it.\n"
  },
  {
    author: "Jeff Wayne's Musical Version of The War of the Worlds",
    quote:
      "A vast crowd buffered me towards the already packed steamer. I looked up enviously at those safely on board � straight into the eyes of my beloved Carrie! At sight of me she began to fight her way along the packed deck to the gangplank. At that very moment it was raised, and I caught a last glimpse of her despairing face as the crowd swept me away from her."
  },
  {
    author: "Harrison Birtwistle",
    quote:
      "Composing's not voluntary, you know.  There's no choice, you're not free.  You're landed with an idea and you have responsibility to that idea.\n"
  },
  {
    author: "John Sullivan Dwight",
    quote:
      "'T is loving and servingThe Highest and Best!'T is onwards! unswerving,And that is true rest.\n"
  },
  {
    author: "The Ladykillers",
    quote:
      "There is a wheelbarrow out there, would you mind fetching it please. The major has a train to catch."
  },
  {
    author: "T. Rex",
    quote:
      "I was dancing when I was twelve I was dancing when I was aaah I danced myself right out the womb Is it strange to dance so soon\n"
  },
  {
    author: "Will Carleton",
    quote:
      "I don't complain of Betsy or any of her acts,Exceptin' when we 've quarreled and told each other facts."
  },
  {
    author: "Bhakti movement",
    quote:
      "But Islam was never accepted as a dharma by mainstream Hinduism. It was only in the fourteenth century of the Christian era that we meet the so-called Nirguna school of bhakti or santamata, founded by Kabir, which started treating Islam as a way of worship and even equating it with Hindu Dharma - Rama with Rahim, Veda with Kateb (Kit�b, the Book or Quran) Kashi with Ka'ba, Pandit with Mullah, Temple Bells with Azan, and so on. Quite a bit of this equating was done for ridiculing the rituals of both Islam and Hinduism, and proclaiming that the spiritual secret was known only to the sadguru, the True Teacher like Kabir. For the rest, the bulk of the santamata literature is Vaishnavite derived from the Puranas, particularly the Bh�gavata-pur�Na. The only variation is the mention of a few sufis like Mansur Al-Hallaj, Abu Yazid (Bayazid) and Adham Sultan, who were hardly sufis like those we meet in the latter day silsilas (orders). It is significant that none of the sufis from the silsilas finds place in this literature.... The main-stream Bhakti Movement which was wide-spread among Hindus including those belonging to most of the lower castes, always looked down upon the santamata, even when the latter became increasingly more and more Hindu except for its incongruent streaks of monotheism, prophetism (guruv�da) and anti-Brahminism. It is significant that no adherent of any school of Santamata is known to have converted to Islam. What we know is that some converts to Islam joined its ranks, notably Dadu and Sadhna. So the doctrine of sarva-dharma-samabh�va cannot be attributed to the santamata. What we find in santamata is not equal respect for all religions but equal contempt for all rituals and institutions, whether Hindu or Islamic.\n"
  },
  {
    author: "Cowboy Bebop: The Movie",
    quote:
      "Before this life of yours ends, tell me something: Is my memory still left on titan? Am I living in the real world? Or is this just a dream that these butterflies are showing me? Are they a part of the dream?"
  },
  {
    author: "Ali Raymi",
    quote:
      "I been around as far as life existed, 40 is just what humans recognize as my age. Skipping Theology, age will not be an issue.\n"
  },
  {
    author: "Catalysis",
    quote:
      "Catalysts are used in the production of a large variety of chemicals and fuels, as demonstrated by the fact that catalyst-based manufacturing accounts for about 60% of chemical products and 90% of processes (Senkan 2001). These numbers will likely increase in the future, con sidering all the advantages of a catalytic process: it requires only small amount of a �smart� molecule to produce a large quantity of the desired compound; the catalyst usually allows operation under mild reaction conditions; also the economic benefits of an efficient catalytic process are enormous since it is less capital-intensive, has lower operating costs, produces products of higher purity and fewer by-products. In addition, catalysts provide important environmental benefits.\n"
  },
  {
    author: "Yang Cheng-wu",
    quote:
      "It (referendum by Kinmen County residents which voted against the establishment of casinos in Kinmen) showed that Kinmen folks were thinking about development (of the county) in the long term, instead of being shortsighted and allowing themselves to be lured by profits (from casinos) close at hand."
  },
  { author: "The Princess Diaries", quote: "Somebody sat on me again." },
  {
    author: "Dark City (1998 film)",
    quote: "Hey, you happen to know the way to Shell Beach?"
  },
  {
    author: "Division of labor",
    quote:
      "The error in positivism is that it takes as its standard of truth the contingently given division of labor, that between the science and social praxis as well as that within science itself, and allows no theory that could reveal the division of labor to be itself derivative and mediated and thus strip it of its false authority.\n"
  },
  {
    author: "Tsangyang Gyatso, 6th Dalai Lama",
    quote: "I know her body's softness"
  },
  {
    author: "The United States of Leland",
    quote:
      "It covers my eyes. It's all I can see. Say there's some kids playing baseball. All I see is the one kid they won't let play because he tells corny jokes and no one thinks they're funny. Or I see a boy and a girl in love and kissing, you know. I just see that they're gonna be one of those sad old couples one day who just cheats on each other and can't even look each other in the eye. And I feel it. I feel all of their sadness. I feel it probably worse than that sad old couple or that corny kid will ever feel it."
  },
  {
    author: "Robert Payne Smith",
    quote:
      'The books of men have their day and grow obsolete. God\'s word is like Himself, "the same yesterday, to-day, and forever."\n'
  },
  {
    author: "Hamid Karzai",
    quote:
      "We must not turn away when we hear the cries of the hungry. We must not stand by when we see the killing and terrorizing of the innocent. We should not wait until hundreds and, in some cases, thousands of our fellow human beings have died as occurred in Afghanistan, before we act.\n"
  },
  {
    author: "George MacDonald Fraser",
    quote:
      "...only those who have been really dry know that there is no drink like chaggle water, brackish, chlorinated, with a fine earthy silt at the bottom, pure Gunga Din juice.  We hated it and would have sold our souls for it.\n"
  },
  {
    author: "David Bohm",
    quote:
      "The notion that all these fragments are separately existent is evidently an illusion, and this illusion cannot do other than lead to endless conflict and confusion."
  },
  {
    author: "Anonymous",
    quote:
      "Anyone can catch your eye, but it takes someone truly special to catch your heart."
  },
  {
    author: "Helmut Koester",
    quote:
      "This book is dedicated to the memory of my teacher . He encouraged me more than thirty years ago to deal more intensively with the extra-canonical writings from the early Christian period. His unwavering insistence upon the consistent application of the historical-critical method and his emphasis upon the investigation of early Christian literature in the context of the history of religions must remain basic commitments of New Testament scholarship.\n"
  },
  {
    author: "Bernhard Riemann",
    quote:
      ". Finite, Representable. . Infinite, System of Notions lying at the limit of the representable.\n"
  },
  {
    author: "Foreigner (band)",
    quote:
      "I was inside looking outsideThe millions of facesBut still I'm alone.Waiting, hours of waiting,Paying a penance,I was longing for home."
  },
  {
    author: "Lord of the Flies (1990 film)",
    quote:
      "It doesn't matter who's in charge. We've just gotta work together. First we build a camp."
  },
  { author: "The Mummy's Hand", quote: "Andoheb " },
  {
    author: "The Rapture (film)",
    quote:
      "Sharon, don't you understand what's going on? The world's a disaster. We have no power to make it better. You hate your job; you hate your life; but you want to feel special. Instead of letting me do that, you're rushing off to something that's not even there."
  },
  {
    author: "Rafael Hern�ndez Col�n",
    quote: "To the trenches! ( in Spanish)\n"
  },
  {
    author: "Chela Sandoval",
    quote:
      ' puts it this way: because "class instinct is subjective and spontaneous," the class instinct of the middle classes and "" must undergo a painful and "revolutionary" transformation in order to become oppositional�that is, in order to become aligned with the methodology of the oppressed.\n'
  },
  {
    author: "The Avengers (2012 film)",
    quote:
      " Raise the mizzenmast, jib the top-sails.  That man is playing ! He thought we wouldn't notice... but we did."
  },
  {
    author: "Bill de Blasio",
    quote:
      " I have a real respect, and a real anger and sadness at the same time. I don�t think I�ve ever been able to do the math on exactly what it all means.\n"
  },
  {
    author: "Five Nights at Freddy's: Sister Location",
    quote: "Don't hold it against us."
  },
  {
    author: "Brian Fair",
    quote:
      "I became a  many years ago after listening to � �Meat Is Murder.� It opened my eyes to the painful lives of animals raised for food, and I knew I wanted no part of that.\n"
  },
  { author: "Corporations", quote: "Cities are immortal.\n" },
  {
    author: "Angels in the Outfield (1994 film)",
    quote: "There's a thing called \"talent\". They don't have it."
  },
  {
    author: "Peter Kruse",
    quote:
      "Reducing complexity by order formation is the number one skill needed by all leaders in the twenty-first century\n"
  },
  {
    author: "Stephen R. L. Clark",
    quote:
      "Those who still eat flesh when they could do otherwise have no claim to be serious moralists.\n"
  },
  {
    author: "Richard Koch",
    quote:
      " strategy should not be a grand and sweeping overview. It should be more like an under view, a peek beneath the covers to look in great detail at what is going on.\n"
  },
  {
    author: "Dorothy Allison",
    quote:
      "I want to have adventures and take enormous risks and be everything they say we are and not give a damn what anyone says."
  },
  {
    author: "John Jacob Astor",
    quote:
      "The first hundred thousand�that was hard to get; but afterwards it was easy to make more.\n"
  },
  {
    author: "Along Came a Spider (film)",
    quote: "I am living proof, that a mind is a terrible thing."
  },
  {
    author: "William Fitzsimmons",
    quote: "Ready or not, I'm not what you wanted, I'm what you got."
  },
  {
    author: "Dixy Lee Ray",
    quote:
      "Beware of averages. The average person has one breast and one testicle."
  },
  {
    author: "Fundamentalist Christianity",
    quote:
      "Any hope that America would finally grow up vanished with the rise of fundamentalist Christianity. Fundamentalism, with its born-again regression, its pink-and-gold concept of heaven, its , its rambunctious good cheer... its ... its puerile hymns... and its faith-healing... are made to order for King Kid America.\n"
  },
  { author: "Walter Rodney", quote: "p. 22." },
  {
    author: "Hubert Selby, Jr.",
    quote:
      "A cigarette only takes a certain amount of time to smoke and though this takes time it seems to take less and less with each one and you can only smoke so many, there comes a time when you have to stop, when you just cant light the next one . . . at least not for a while."
  },
  {
    author: "Peggy Noonan",
    quote:
      "The Democrats had long labeled the impeachment debate a distraction from the urgent business of a great nation. But the Republicans argued that the pursuit of justice is the business of a great nation. In winning this point, they caught the falling flag, producing a triumph for the rule of law, a reassertion of the belief that no man is above it, and a rebuke for an arrogance that had grown imperial.\n"
  },
  {
    author: "Arkady Rosengolts",
    quote:
      "Sedov ('s son) spoke a lot about the necessity of the maximum, the closest possible connections with , inasmuch as, in Trotsky's opinion, Tukhachevsky and the military group were to be the decisive force of the counter-revolutionary action. During the conversation it was also revealed that Trotsky entertained fears regarding Tukhachevsky 's Bonapartist tendencies. In the course of one conversation Sedov said that Trotsky in this respect even expressed the fear that if Tukhachevsky successfully accomplished a military coup, it was possible that he would not allow Trotsky into Moscow. . . . Trotsky therefore proposed that during the coup d'etat we should everywhere place our own people, people who would be faithful to Trotskyism and who could be relied upon as regards vigilance.\n"
  },
  {
    author: "Invader (artist)",
    quote: 'the word "street art" did not even exist yet'
  },
  {
    author: "Len Deighton",
    quote: "Progress is man�s indifference to the lessons of history.\n"
  },
  {
    author: "Smalltalk",
    quote:
      "Smalltalk is dangerous. It is a drug. My advice to you would be don�t try it; it could ruin your life. Once you take the time to learn it (to REALLY learn it) you will see that there is nothing out there (yet) to touch it. Of course, like all drugs, how dangerous it is depends on your character. It may be that once you�ve got to this stage you�ll find it difficult (if not impossible) to �go back� to other languages and, if you are forced to, you might become an embittered character constantly muttering acerbic comments under your breath. Who knows, you may even have to quit the software industry altogether because nothing else lives up to your new expectations.\n"
  },
  { author: "Starr", quote: ", drummer for The Beatles" },
  {
    author: "Social contract",
    quote:
      "In the social contract approach, the search for justice is confined to the citizens of a particular sovereign state, who can be imagined to be in a contractual relation with each other. As a result of this methodology, the people whose views are brought into any specific assessment are citizens of some particular sovereign state for which the pursuit of justice is under discussion. We may demand that the citizens of each sovereign state view citizens of other states (or even stateless people) with compassion, respect and sympathy, satisfying some requirements of �minimal humanitarianism� (as both John Rawls and Thomas Nagel have argued), but �the principles of justice� arrived at for any particular sovereign state would not have any application beyond the limited domain of a specific state.\n"
  },
  {
    author: "Distrust",
    quote:
      "Three things a wise man will not trust,The wind, the sunshine of an April day,And woman's plighted faith.\n"
  },
  {
    author: "Alexander Melamid",
    quote:
      "... There's a machine which is called , which is a structure. And artist fits in this only because he or she is needed for this structure. If for example the History of Art needs some parallel lines, there is an individual who makes parallel lines. And this individual fits into this machine which works by itself; it doesn't care about people or anything else, it just goes by itself.\n"
  },
  {
    author: "Teitur Lassen",
    quote:
      "He's utterly melodic and hopelessly romantic, and when he performs live, he robs the air from your lungs.  Oh, and he's devoid of any charisma or star power whatsoever.\n"
  },
  {
    author: "Serendipity",
    quote:
      "Serendipity is putting a quarter in the gumball machine and having three pieces come rattling out instead of one � all red.\n"
  },
  {
    author: "Hendrik Verwoerd",
    quote:
      "Must  and European in future develop as intermixed communities, or as communities separated from one another in so far as this is practically possible? If the reply is �intermingled communities�, then the following must be understood. There will be competition and conflict everywhere. So long as the points of contact are still comparatively few, as is the case now, friction and conflict will be few and less evident. The more this intermixing develops, however, the stronger the conflict will become. In such a conflict, the Europeans will, at least for a long time, hold the stronger position, and the Bantu be the defeated party in every phase of the struggle. This must cause to rise in him an increasing sense of resentment and revenge.\n"
  },
  {
    author: "Business process",
    quote:
      " is the organizing logic for business processes and IT infrastructure reflecting the integration and standardization requirements of a company's operation model... The key to effective enterprise architecture is to identify the processes, data, technology, and customer interfaces that take the operating model from vision to reality.\n"
  },
  {
    author: "Hermann Samuel Reimarus",
    quote:
      'That which is absurd and impossible, that which in any other history would be called falsehood, deception, outrage and cruelty, cannot be made reasonable, righteous, and true by the added words: "Thus saith the Lord."\n'
  },
  {
    author: "2013 Los Angeles International Airport shooting",
    quote:
      'Federal prosecutors will seek the death penalty against the man charged in the deadly 2013 shooting at Los Angeles International Airport, according to court documents filed Friday...."Defendant Paul Anthony Ciancia acted with the intent that his crimes would strike fear in the hearts of Transportation Security Administration employees," prosecutors wrote. "By committing his crimes on a weekday morning in a crowded terminal at one of the busiest airports in the world Ciancia terrorized numerous airline passengers and airport employees."...Authorities allege Ciancia was dropped off outside the airport, carrying a , five loaded magazines and a trove of ammunition.\n'
  },
  {
    author: "Love & Basketball (film)",
    quote:
      "It's a trip, you know? When you're a kid, you... you see the life you want and it never crosses your mind that it's not gonna turn out that way."
  },
  {
    author: "Henry Thomas Buckle",
    quote:
      "And, notwithstanding a few exceptions, we do undoubtedly find that the most truly eminent men have had not only their affections, but also their intellect, greatly influenced by women. I will go even farther; and I will venture to say that those who have not undergone that influence betray a something incomplete and mutilated. We detect, even in their genius, a certain frigidity of tone; and we look in vain for that burning fire, that gushing and spontaneous nature with which our ideas of genius are indissolubly associated. Therefore, it is, that those who are most anxious that the boundaries of knowledge should be enlarged, ought to be most eager that the influence of women should be increased, in order that every resource of the human mind may be at once and quickly brought into play.\n"
  },
  {
    author: "Hansel & Gretel: Witch Hunters",
    quote: "The curse of hunger for crawling things. I fucking hate that one."
  },
  {
    author: "Worldliness",
    quote:
      "Freedom from the world  is, in principle, not asceticism, but rather a distance from the world for which all participation in things worldly takes place in the attitude of �as if not.� ( 7:29-31)\n"
  },
  {
    author: "The Fantastic Journey",
    quote:
      "Lost in the Devil's Triangle, trapped in a dimension with beings from the future and from other worlds, a party of adventurers journeys through zones of time back to their own time. Varian, a man from the 23rd century, possessing awesome powers. From 1977, Fred, a young doctor just out of medical school. Scott Jordan, the 13-year-old son of a famous scientist. Liana, daughter of an Atlantean father and an extraterrestrial mother. And Jonathan Willaway, rebel scientist from the 1960s. Together they face the frightening unknown on...the fantastic journey."
  },
  {
    author: "Walk Hard: The Dewey Cox Story",
    quote: '"YOU CAN TAKE THE CHILDREN BUT YOU LEAVE ME MY MONKEY!!!"'
  },
  {
    author: "Jill Vogel",
    quote:
      "People vote because they want a job and want the economy expand. Whether it�s energy infrastructure or whether it�s the port or whether it�s �I�m willing to work with this president.� I�m proud. I�m willing to stand up for this president and I�m willing to say �I will work with this administration on any single issue that helps Virginia.� That�s where Ed Gillespie is. That�s where I am. That�s where John Adams is. And guess what? People go: �Yeah, I want that for my state. I don�t want that position where the other side is which is nothing.� So I think that has resonated, and I think it�s working in Virginia and that�s why President Trump got elected�it�s because people are sick and tired of this politics of no.\n"
  },
  {
    author: "Javad Alizadeh",
    quote:
      "The  of our close friends and relatives proves that how close the death is to us!\n"
  },
  {
    author: "Muhammad bin Qasim",
    quote:
      "Muhammad Kasim fixed a  upon all the subjects, according to the laws of the Prophet.  Those who embraced the Muhammadan faith were exempted from , the tribute, and the poll-tax, and from those who did not change their creed a tax was exacted according to three grades.  The first grade was of great men, and each of these was to pay , equal to forty-eight dirams in weight, the second grade twenty-four dirams, and the lowest grade twelve dirams.  It was ordered that all who should become Musulmans at once should be exempted from the payment, but those who were desirous of their old persuasion must pay the tribute and poll-tax. Some showed an inclination to abide by their creed, and some having resolved upon paying tribute, held by the faith of their forefathers, but their lands and property were not taken from them...\n"
  },
  {
    author: "William T. Stearn",
    quote:
      "The progress of , as of other sciences, comes from the interaction of so many factors that undue emphasis on any one can give a very distorted impression of the whole, but certainly among the most important of these for any given period are the prevailing ideas and intellectual attitudes, the assumptions and stimuli of the time, for often upon them depends the extent to which a particular study attracts an unbroken succession of men of industry and originality intent on building a system of knowledge and communicating it successfully to others of like mind.\n"
  },
  {
    author: "Al-Shabaab",
    quote:
      "We will continue to hunt other MPs if they do not leave the apostate organisation [parliament].\n"
  },
  {
    author: "Abdullah II of Jordan",
    quote: "Radicalisation thrives on economic insecurity and exclusion."
  },
  {
    author: "Jean-Baptiste Say",
    quote: "the most useless profusion in the midst of the most urgent wants."
  },
  {
    author: "Billy Corgan",
    quote:
      "We have a problem with any labels that people try to hang on us, because all it does is drag you down."
  },
  {
    author: "Chennai Mathematical Institute",
    quote:
      "In the winter of 2008, Jenifer and I visited Chennai Mathematical Institute. This remarkable Institute is the creation of . It is a unique blend of an  style  college with  Indian guru one-on-one teaching, adding , ,  and  to its maths curriculum. Only in India could an  with no  or  , who spends all his spare time  classical south Indian music, have been the catalyst for such a unique educational .\n"
  },
  {
    author: "Ayelet Waldman",
    quote:
      "I tend to approach giving interviews with the same sense of circumspection and restraint as I approach my writing. That is to say, virtually none.\n"
  },
  {
    author: "World government",
    quote:
      "Influential individuals and groups are pressing for global economic co-operation, global taxes to support the backward territories, a global army and a world government, even for a world-wide moral consciousness. Whatever the future prospects of these recommendations, there is no doubt that the tactics, the methods, the announced aims, fall under the category of ...\n"
  },
  {
    author: "Jacob Mendes Da Costa",
    quote:
      "I think that the cultivation of the humane letters has the most distinct bearing on the cultivation and appreciation of science. Science is nothing without imagination; and imagination is most readily kept fresh by literature. What little good there is a mere descriptive person, and in the small facts which with painful toil he accumulates. But let these facts be welded together by thought, their bearing traced by imagination, experiments devised by the mind projecting itself in advance of them, and the plodder is likely to become the great discoverer.\n"
  },
  {
    author: "Last Chance to See",
    quote:
      "It [seeing an aye-aye] was the kind of moment about which it is hard not to feel completely dizzy."
  },
  {
    author: "Endoplasmic reticulum",
    quote:
      "The evidence already discussed stresses the role played by the endoplasmic reticulum and the Golgi complex in the production and processing of secretory proteins. The stress put on secretion leads, however, to an apparent impasse. Since every eukaryotic cell possesses both an endoplasmic reticulum and a Golgi complex, it follows that all eukaryotic cells secrete proteins or that the organs of the secretory pathway have additional, perhaps more general and more important functions than secretion, which have been ignored or are still unknown.\n"
  },
  {
    author: "Emily Deschanel",
    quote:
      " It just changed my life, to see that film. When I saw it, I pledged to become vegetarian immediately, with the plan of becoming . My goal was always to become vegan, but it was a longer road. I envy the kids going vegan now; they have so many different resources. I think, at first, it struck me from an animal perspective, but the argument for the environment and for your own health also struck a cord with me. So it hit me on three different levels.\n"
  },
  {
    author: "Dixy Lee Ray",
    quote:
      "Beware of averages. The average person has one breast and one testicle."
  },
  {
    author: "Philosophy",
    quote:
      "Philosophy that satisfies its own intention, and does not childishly skip behind its own history and the real one, has its lifeblood in the resistance against the common practices of today and what they serve, against the justification of what happens to be the case.\n"
  },
  {
    author: "Ted 2",
    quote:
      "Sittin' out here in a public, jerkin' off? Where do you think you are, Red Lobster?"
  },
  {
    author: "Mark Leckey",
    quote:
      "See, we assemble. , , , and . Here, here. Here, we exist. In the streets. And houses, in cars, and fields. As ever-present as sunshine.\n"
  },
  {
    author: "Arthur Koestler",
    quote:
      'If time is treated in modern physics as a dimension on a par with the dimensions of space, why should we a priori exclude the possibility that we are pulled as well as pushed along its axis?  The future has, after all, as much or as little reality as the past, and there is nothing logically inconceivable in introducing, as a working hypothesis, an element of finality, supplementary to the element of causality, into our equations. It betrays a great lack of imagination to believe that the concept of "purpose" must necessarily be associated with some anthropomorphic deity.\n'
  },
  {
    author: "Obsolescence",
    quote:
      "The application of  to thought itself has the same merit as its application to consumer goods; the new is not only shoddier than the old, it fuels an obsolete social system that staves off its replacement by manufacturing the illusion that it is perpetually new.\n"
  },
  {
    author: "Hamsters",
    quote:
      "Hamsters have a reputation for biting, which we feel is a defamation of character.\n"
  },
  {
    author: "Xenogears",
    quote:
      '"But its power goes beyond what is necessary... Does one really need the power to destroy everything?"'
  },
  { author: "Elizabeth Haydon", quote: "Rhapsody father" },
  {
    author: "Gulf War",
    quote: " is an economic giant, a political dwarf, and a military .\n"
  },
  {
    author: "Timo K. Mukka",
    quote:
      "It was told that when God long ago created Sipirja he settled it by the river and trampled the path nearby the houses: go wanderer, stay a while but not longer! In the houses of Sipirja people speak their own language so that no stranger can understand what they say; it remains unexplained. They are like mute, armless, eyeless and there is not heart in any one�s chest, only the possessed and lashed flesh. When a stranger comes to the village of Sipirja, they despise him like an animal and they laugh at his speech, and all the old painful things and injustices which everyone has suffered sometimes are exposed. Children and old hags stare after him when he has left, they imitate his speech and the way how he walked and moved his arm, and they say: a creature like that! so ugly! They ask the stranger inside and they fill his cup with delicious coffee and urge to drink, but when he is gone they speak about him with despise: a creature like that!\n"
  },
  {
    author: "Muhammad Ilyas Qadri",
    quote: "Practice himself in order persuade others."
  },
  {
    author: "Vilayanur S. Ramachandran",
    quote:
      'Your "conscious life" is an elaborate after-the-fact rationalization of things you really do for other reasons.\n'
  },
  {
    author: "The Deadly Bees",
    quote: " I've made this especially for you, Vicki."
  },
  {
    author: "Rudolph the Red-Nosed Reindeer (TV special)",
    quote:
      "Now, don't any of you worry your heads about Santa 'cause Mrs. Claus will have him plenty fattened up by Christmas Eve. It's always the same story.  I  this Christmassy time of year. Especially when everything is running happy and smooth like it is this season. Nothing like that year of the big snowstorm.  I don't know what we would've done without Rudolph to pull us through. Anyway.... hmmm, Rudolph? Could it be that some of you are not acquainted with the story of Rudolph? Well, pull up an ice block and lend an ear. Now you know how Santa uses these flying reindeer to pull his sleigh. You know Dasher and Dancer and Prancer and Vixen, Comet and Cupid and Donner and Blitzen.  But do you recall the most famous reindeer of all?"
  },
  { author: "Lev Vygotsky", quote: '"Through others, we become ourselves."\n' },
  { author: "A Touch of Frost", quote: "Mrs Compton" },
  {
    author: "Pablo Casals",
    quote:
      "This is the greatest honour I have ever received in my life. Peace has always been my greatest concern."
  },
  {
    author: "Director (business)",
    quote:
      "I do not wish in any way to depart from the principle that a wrongdoing director, whether he be morally or legally wrong, should be made liable for the highest amount which could have been obtained from the property wrongly taken by him while it was in his hands.\n"
  },
  {
    author: "On Golden Pond (1981 film)",
    quote: " Wanna dance or would you rather just suck face?"
  },
  {
    author: "Kylie Minogue",
    quote:
      "I can understand why people would want to stay on the road because you create your own bubble. You almost don�t live in the real world. Just to have the things that are with you is fine.\n"
  },
  {
    author: "James Goldsmith",
    quote: "When a man marries his mistress, he creates a vacancy.\n"
  },
  { author: "Betsy's Wedding", quote: " I'm a cop, and you're... not." },
  {
    author: "Threat",
    quote:
      'What does a claimant need to show in order to succeed on a theory of  by threat? The Restatement Second suggests four requirements.\' First, there must be a threat. Second, the threat must be of a kind that the law condemns. Third, the threat must induce the victim\'s manifestation of assent. Fourth, the threat mustbe sufficiently grave to justify the victim\'s assent.  First, what is a threat? Though the Restatement Second attempts no definition, it may be of interest to consider that question in passing here. To begin with, a threat is a manifestation of an intent to do or not to do something in the future ("I\'ll break your arm" or "I\'ll break our contract"). But a promise is also a manifestation to do something in the future. Suppose a contractor says to a landowner, "I\'ll build the house." That is a promise. How does a threat differ from such a promise? Ordinarily, at least, a significant difference between a threat and any other statement of  is that a threat manifests an intention to do or not to do something that is less desirable from the promisee\'s point of view than if the alternative were the case. Suppose that after the landowner has gotten the contractor to agree to build the house, the contractor says, "I will not build the house." You would call that a threat because his not building the house is less desirable from the landowner\'s point of view than his building it. Or suppose I say, "I\'ll give you a kiss." You might well ask, " or a promise?" And I would say that the answer depends on you: I have made a statement of intention, and whether it is the kind of a statement that is described here as a threat depends on whether my kissing you is less desirable from your point of view than my not kissing you.\n'
  },
  {
    author: "Scott L. Montgomery",
    quote:
      "How many talks have you sat through where the researcher qua [as] person just didn't show up: no anecdotes, no personal details, no emotion or enthusiasm, no humor (intentional, that is), no real contact with the audience � in other words, no performance. [...] They may satisfy the second two requirements mentioned above � accuracy and nonadvocacy � but they fail in the first and, in some ways, the most important.\n"
  },
  {
    author: "Ismail Merchant",
    quote:
      "It should be a good story� speak about a time and place that is permanent. It should capture something wonderful with some great characters whether it's set in the past or in the future."
  },
  {
    author: "Classical music",
    quote:
      "We consider classical music to be the epitome and quintessence of our culture, because it is that culture�s clearest, most significant gesture and expression. In this music we possess the heritage of classical antiquity and Christianity, a spirit of serenely cheerful and brave piety, a superbly chivalric morality. For in the final analysis every important cultural gesture comes down to a morality, a model for  concentrated into a gesture.\n"
  },
  {
    author: "ELEMENTAL, The Power of Illuminated Love",
    quote:
      "The greater puzzle of universal wisdom and beauty that we have strived to honor through our work includes the profound legacies of world artistic and spiritual traditions, the innate integrity of human communities where people seek to live in social harmony, and that regenerative stream of life sustained upon the earth itself as it spins through the cosmos to the music of the spheres. It also embraces such simple and yet essential things as the psychic nourishment received from family and friends while growing up; and the welcoming kindness received from �strangers� when venturing forth into the world.\n"
  },
  {
    author: "Hamid Karzai",
    quote:
      "We have no other choice, we have no power to stop the [U.S.] planes, if we could, if I could we would stop them and bring them down, ... If we had a chelak, we would throw it and stop the American aircraft. We have no radar to stop them in the sky, we have no planes, ... I wish I could intercept the planes that are going to bomb Afghan villages, but that�s not in my hands.\n"
  },
  {
    author: "Turbo (film)",
    quote:
      "We're going to Indianapolis, Chet. Don't you worry your chubby little face about that."
  },
  {
    author: "Blushing",
    quote:
      "So sweet the blush of bashfulness,E'en pity scarce can wish it less!\n"
  },
  {
    author: "Richard Koch",
    quote:
      "Marketing, and the whole firm, should devote extraordinary endeavour towards delighting, keeping for ever and expanding the sales to the 20 per cent of customers who provide 80 per cent.\n"
  },
  {
    author: "If Only (film)",
    quote:
      "I love Miss Andrews, everyone does. If I was just a few years older."
  },
  {
    author: "The Spirit Is Willing",
    quote:
      "The first picture to face the biggest problem of our time: the sex life of ghosts!"
  },
  {
    author: "Stevie Wonder",
    quote:
      "Sometimes I think I would love to see just to see the beauty of flowers and trees and birds and the earth and grass. &nbsp;Being as I've never seen, I don't know what it's like to see. So in a sense I'm complete."
  },
  {
    author: "Intimacy",
    quote:
      "The member of a culture purposely avoids the relationship of intimacy; he wants the object somehow depicted and fictionalized. He is embarrassed when this is taken out of its context of proper sentiments and presented bare, for he feels that this is a reintrusion of that world which his whole conscious effort has sought to banish. Forms and conventions are the ladder of ascent. And hence the speechlessness of the man of culture when he beholds the barbarian tearing aside some veil which is half adornment, half concealment.\n"
  },
  {
    author: "Joanna Newsom",
    quote:
      "What�s redacted will repeat,and you cannot learn that you burn when you touch the heat,so we touch the heat,and we cut facsimiles of love and death(just separate holes in sheetswhere you cannot breathe, and you cannot see).\n"
  },
  {
    author: "A. R. Ammons",
    quote:
      "The world has so many poems in it, it has never seemed to me very smart to force one more upon the world. If there isn�t one there to write, you just leave it alone."
  },
  {
    author: "Tactics Ogre",
    quote:
      "Chapter 2 (Law): Who can know if the path we choose is right or wrong? I will fear no reproach. For man is a creature of sorrow and regret, and ever will be."
  },
  {
    author: "Serialism",
    quote:
      "A composer's awareness of the plurality of functions of his own tools forms the basis for his responsibility just as, in everyday life, every man's responsibility begins with the recognition of the multiplicity of human races, conditions, needs, and ideals. I would go as far as to say (as my anger comes back) that any attempt to codify musical reality into a kind of imitation grammar (I refer mainly to the efforts associated with the ) is a brand of fetishism which shares with  and racism the tendency to reduce live processes to immobile, labeled objects, the tendency to deal with formalities rather than substance.  describes (though to illustrate a different point) a captain at sea, his ship reduced to a frail raft without sails, who, by enforcing a meticulous protocol on his crew, is able to distract them from nostalgia for a safe harbor and from the desire for a destination.\n"
  },
  { author: "Jim Ede", quote: "There should be a  in every university.\n" },
  {
    author: "Isidore Isou",
    quote:
      "From the point of view of photography, I'll smite the picture with sun rays. I'll take old stock shots and scratch them; I'll claw at them so that unknown beauty sees the light of day. I shall sculpt flowers upon the film stock."
  },
  {
    author: "William Ralph Inge",
    quote:
      "The old civilisation, with all the brilliant qualities which make many moderns regret its destruction, rested on too narrow a base. The woman and the slave were left out, the woman especially by the Greeks, and the slave by the Romans.\n"
  },
  {
    author: "The Wedding Date",
    quote:
      " The hardest thing is loving someone and then having the courage to let them love you back. But if you know her shit and she knows yours, and at the end of the day if you still would rather give up than try, nothings ever going to be worth it. Maybe think about it this way... you go back, you get to spend the rest of your life having really great makeup sex."
  },
  {
    author: "Masti Venkatesha Iyengar",
    quote:
      "Ramu is our youngest child. He does not know how to write. The only thing he knows is to scribble on the slate. When the slate is covered with lines, he asks me to look at what he has written. Writing for him is nothing but scribbling. If, with some luck, one of the lines turns out to be letter, it�s not his fault. [[w:Brahma}Brahma]]�s writing is no different. Unpredictability is its characteristic. Not even one ina thousand is good. If one turns out to be good it�s not my fault. My wife was convinced that all this was . She did not pay any attention to it.\n"
  },
  {
    author: "Owain Owain",
    quote:
      "And teachers will be promoted from being the deliverers of facts to being being guides - guiding their peoples through rich and valued experiences offered by the computer.\n"
  },
  {
    author: "Pauline Kael",
    quote:
      "Unlike storybook heroes and heroines but like many actual heroes and heroines,  was something of a social outcast. (As  noted, it was the people with irregular and embarrassing histories who were often the heroes of the Resistance in the Second World War; the proper middle-class people may have felt they had too much to lose.)\n"
  },
  {
    author: "Ben Croshaw",
    quote:
      "When she meets a powerful man she's more likely to try and blow him away than blow him off. Stop that erection right now, you sick, sick boy. Stop it! Concentrate, that's how! ()"
  },
  {
    author: "Michael Drayton",
    quote:
      "Oh, when shall English menWith such acts fill a pen,Or England breed againSuch a King Harry?\n"
  },
  {
    author: "Armen Alchian",
    quote:
      'By this I refer to the fact that at the same time several people may each possess some portion of the rights to use the land. A may possess the right to grow wheat on it. B may possess the right to walk across it. C may possess the right to dump ashes and smoke on it. D may possess the right to fly an airplane over it. E may have the right to subject it to vibrations consequent to the use of some neighboring equipment. And each of these rights may be transferable. In sum, private property rights to various partitioned uses of land are "owned" by different persons.\n'
  },
  {
    author: "Richard Hooker",
    quote:
      "Of Law there can be no less acknowledged than that her seat is the bosom of God, her voice the harmony of the world. All things in heaven and earth do her homage,�the very least as feeling her care, and the greatest as not exempted from her power.\n"
  },
  {
    author: "Thomas Ken",
    quote:
      "All praise to thee, my God, this night,For all the blessings of the light;Keep me, O keep me, King of Kings,Beneath thy own almighty wings.\n"
  },
  { author: "Ace Combat", quote: "AWACS SkyEye:" },
  {
    author: "Sheets of sound",
    quote:
      "\"As he learned harmonically from Davis and Monk, and developed his mechanical skills, a new more confident Coltrane emerged. He has used long lines and multinoted figures within these lines, but in 1958 he started playing sections that might be termed 'sheets of sound'.\"\n"
  },
  {
    author: "Jakob Hurt",
    quote:
      "If we can't be a great nation in population we can be a great nation in spirit!\n"
  },
  {
    author: "Blood Diamond (film)",
    quote:
      "You know I once had this buddy named Maboko. We used to hunt bushmeat together as kids. Now baboons, baboons they were the hardest to catch. We'd always find them by the smell of their shit and that's how we learned to track your black terrorists in Angola: by the smell of your shit. It's not the same as a baboon's but after you skin it the flesh of a baboon isn't all that different than a man's you know. I tell you, I can track anything. Risk my life like that again and I'll peel you face back off your head."
  },
  {
    author: "Daniela Sea",
    quote:
      "But I don't believe that  is just binary, and I never have, so that's what pulls me to sometimes politically identify as a , because I'm a feminist, and I feel like women are still so suppressed. I don't feel like we've come that far. But I also feel like there are people all along the spectrum, so in that sense, I feel like I would be more bisexual or just, you know, open-ended.\n"
  },
  {
    author: "Harry Markowitz",
    quote:
      "A great man who wrote and spoke great speeches as the leader of a great cause: Great., Great. Great!,\n"
  },
  {
    author: "Robert Ashley",
    quote:
      "This fact, the surfacing of structure in an undeliberate action, is too big to take on here, but it was enough to convince me that the structuralists�the advocates of planning music before you hear or care what the plan gives you�were right: do not rely on unplanned music; it comes out as though it were planned, but planned by someone you cross the street to avoid.\n"
  },
  {
    author: "Howard Zahniser",
    quote:
      "The fact is that it is the land that has made us all Americans, and the moral is that it is the land which must be preserved to save our Americanism.  Soil erosion, forest exploitation, and wildlife destruction are more insidious anti-American activities than Communism, Fascism, or foreign propagandizing.\n"
  },
  {
    author: "Quentin Reynolds",
    quote: "Short on glamour and long on tragedy.\n"
  },
  {
    author: "Claude Rains",
    quote:
      "God felt sorry for actors, so he gave them a place in the sun and a lot of money.  All they had to sacrifice was their talent.\n"
  },
  {
    author: "Ashleigh Brilliant",
    quote:
      "People sometimes ask me what I think of the world today � as if 10,000 published Thoughts do not provide sufficient enlightenment on that subject.  But let me not shrink from an honest answer.  In world affairs. I am an optimist.  Despite attention-grabbing headlines about the latest shocking incidents, and worrisome developments resulting from the fact that nationalism is still trumping internationalism, I believe that overall the people being born today, in whatever countries and circumstances, have a better chance than ever before of living worthwhile lives.  At nearly 84, I'm sorry science hasn't yet invalidated the concept of mortality � but that, I'm sure, is coming.  And, in the meantime, as inhabitants of this small planet, perhaps with most of our worst times behind us, I'm confident that we can, in general, find much to be thankful for.\n"
  },
  {
    author: "Modernity",
    quote:
      "That teaching of modern metaphysics ... exhorts man to feel comparatively little esteem for the truly thinking portion of himself and to honor the active and willing part of himself with all his devotion.\n"
  },
  {
    author: "Nancy Grace",
    quote:
      "On [defense lawyers]: \"They lie, they cheat, they'll say anything. They walk a thin line that I don't even want to get near. Like in the  case. They knew the whole time he did it, because he knew where her body was, and they used that as a bargaining chip to improve his situation. But when that didn't work [the police found the body on their own], they proceeded to drag the Van Dams through the mud. It's disgusting. Some people argue that the prosecution just wants to get a conviction. What joy would I get out of sending the wrong person to jail?\"\n"
  },
  {
    author: "Cambridge",
    quote:
      "Cambridge was a joy. Tediously. People reading books in a posh place. It was my fantasy. I loved it. I miss it still.\n"
  },
  {
    author: "Frans de Waal",
    quote:
      "Our societies are constructed around the interface between those two, so we need both actually."
  },
  {
    author: "Orest Subtelny",
    quote:
      "At a time when even the most impoverished and underdeveloped states in the third world enjoy full sovereignty, Ukraine has practically none. This great discrepancy is a historical puzzle, one that calls for an examination of the often overlooked and even more frequently misunderstood past of Ukraine and the Ukrainians.\n"
  },
  {
    author: "Menachem Elon",
    quote:
      "the Basic Law: Human Dignity and Liberty enacted in by the Knesset in 1992, to anchor in a Basic Law the values of the State of Israel as a  two strands � the Jewish heritage and the democratic tradition... and it is the task of the courts to interweave them into the synthesis indicated by the Basic Law\n"
  },
  {
    author: "Dogma (film)",
    quote:
      "No pleasure, no rapture, no exquisite sin greater... than central air."
  },
  {
    author: "The Cat Creeps (1946 film)",
    quote:
      "A THRILL a Minute...A SHIVER a Second...As An Unseen KILLER Stalks Thru the Night!"
  },
  {
    author: "John Howard Yoder",
    quote:
      'A dichotomy between the religious and the social must be imported into the []; it cannot be found there. The "cross" of Jesus was a political punishment; and when Christians are made to suffer by government it is usually because because of the practical import of their faith, and the doubt they cast upon the rulers\' claim to be "Benefactor."\n'
  },
  {
    author: "Paul West (poet)",
    quote:
      "Humanism, it seems, is almost impossible in America where material progress is part of the national romance whereas in Europe such progress is relished because it feels nice.\n"
  },
  {
    author: "Sheaf theory",
    quote:
      "The purpose of sheaf theory is quite general: it is to obtain global information from local information, or else to define �obstructions� which characterize the fact that a local property does not hold globally any more: for example a manifold is not always orientable, or a differential equation can be locally solvable, but not globally.\n"
  },
  {
    author: "Narcissism",
    quote:
      "According to recent  criticism, Narcissus has replaced  as the  of our time. Narcissism is now seen to be at the root of everything from the ill-fated  with   to the enthralled mass  of state-of-the-art products and the ' of the  and '.\n"
  },
  { author: "Hot Rod (film)", quote: "Life's Short, Stunt it!" },
  {
    author: "The Last Seduction",
    quote:
      "As far as you're concerned any sex we had is entirely a product of your imagination."
  },
  {
    author: "Uniform civil code",
    quote:
      "One wonders how long it will take for the  of the day to implement the mandate of the framers of the  Constitution under Article 44. ... There is no justification in delaying indefinitely the introduction of a uniform personal law.\n"
  },
  {
    author: "Surfing",
    quote: "It was so big [the wave], it didn't even know we were there.\n"
  },
  {
    author: "Robert Owen",
    quote:
      "The advanced members of the medical profession know that the health of society is not to be obtained or maintained by medicines; � that it is far better, far more easy and far wiser, to adopt substantive measures to prevent disease of body or mind, than to allow substantive measure to remain continually to generate causes to produce physical and mental disorders."
  },
  {
    author: "Indra Nooyi",
    quote:
      'The CEO has to think long-term and needs to understand the way public and private sectors are coming together and work constructively within that framework. CEOs need to make the phrase "think global and act local" more than a cliche?'
  },
  {
    author: "William Cullen Bryant",
    quote:
      "So live, that when thy summons comes to joinThe innumerable caravan which movesTo that mysterious realm, where each shall takeHis chamber in the silent halls of death,Thou go not, like the quarry-slave at night,Scourged to his dungeon, but, sustained and soothedBy an unfaltering trust, approach thy graveLike one who wraps the drapery of his couchAbout him, and lies down to pleasant dreams.\n"
  },
  {
    author: "Categorical imperative",
    quote:
      "Greatness loves itself, and all healthy instincts decline to flagellate themselves daily with the whip of altruism. What is great must will to do more than its mere duty&nbsp;; it must give, make others happy, and, be it at the cost of itself, its own wellbeing, its own money or life, it must will to pour forth its blessing over others, to the extent even of self-sacrifice�but not, as Christianity demands, from unegoistic motives; the impulse must come from a sense of pleasure, from overflowing energy, from need of bloodletting, so as to unburden the full heart. All acts then derived from conscience and duty, or done with a wry countenance out of obedience to the Categorical Imperative, seem to the great man, from his point of view, through this very fact contemptible, even as he has an unsurmountable prejudice against men and nations who are always prating of those words, conscience and duty.\n"
  },
  {
    author: "Ralph Nader",
    quote:
      "Up against the corporate government, voters find themselves asked to choose between look-alike candidates from two parties vying to see who takes the marching orders from their campaign paymasters and their future employers. The money of vested interest nullifies genuine voter choice and trust."
  },
  {
    author: "Helen Schucman",
    quote:
      "I am a very careless person in some ways, I lose everything. But I never lost anything of this Course. People would would stop me in the subway and say, �Miss, you forgot your something or other, and hand it back to me.� Taxis would honk their horns, you know and say, �You left something in the back seat.� My secretary would say, �Are you sure this belongs in this case report, it doesn't sound right?� It was impossible to lose this Course, and I tried. But it...followed me around in an odd kind of way. People would send it back to me, anything. And I always got it back. We never lost anything, which is incredible.\n"
  },
  {
    author: "Tarzan and the Amazons",
    quote: "Every time men bring guns, men bring trouble."
  },
  {
    author: "Silk",
    quote:
      " owned silk . The  achievement does not typically consist in providing more silk stockings for queens but in bringing them within the reach of factory girls in return for steadily decreasing amount of efforts.\n"
  },
  { author: "Dermot Healy", quote: "I'm always fascinated by ." },
  {
    author: "Shibboleth",
    quote:
      "Shibboleth is a use of language regarded as distinctive of a particular group."
  },
  {
    author: "Hafez al-Assad",
    quote:
      "Death a thousand times to the hired Muslim Brothers, Death a thousand times to the Muslim Brothers, the criminal Brothers, the corrupt Brothers.\n"
  },
  {
    author: "Wan Azizah Wan Ismail",
    quote:
      "We must also remember that we did not win (2018 Malaysian general election) easily, and after becoming the government, we need to do what is best for the people. It is not impossible for us to lose the nation's leadership if we slack and repeat the mistakes of the past government."
  },
  {
    author: "The Closing of the American Mind",
    quote:
      "Ancient political philosophy was almost entirely in the service of philosophy, of making the world safer for philosophy.\n"
  },
  {
    author: "Albert Howard",
    quote:
      "The prophet is always at the mercy of events; nevertheless, I venture to conclude this book with the forecast that at least half the illnesses of mankind will disappear once our food supplies are raised from fertile soil and consumed in a fresh condition.\n"
  },
  {
    author: "Godwin, Earl of Wessex",
    quote:
      "Sir king, I have been often accused of harbouring traitorous designs against you, but, as God in heaven is just and true, may this morsel of bread choke me if even in thought I have ever been false to you.\n"
  },
  {
    author: "The Land Unknown",
    quote:
      "We're not going to dig our way out of here through human flesh. Not Maggie's, Hunter's, not even yours."
  },
  {
    author: "Mo Brooks",
    quote:
      "I want to be real clear about one thing: America will suffer a debilitating insolvency if we continue on this path. We have been warned, but there are too many Congressmen and Senators who either lack the economic understanding or the political backbone to do what it takes to put the nation back on a sound financial footing. Washington's reckless spending habits have us on a path to destroy what took two centuries of sacrifice to build.\n"
  },
  {
    author: "Coneheads (film)",
    quote:
      " The frightening statistics of young earthlings mangling themselves in internal combustion vehicles on the night of prom ritual makes me insist that you use maximum safety awareness, return at the predesignated time coordinates, and, in fact, take my car.  Its reinforced alloy superstructure is far superior to that of your broken down, rusted out shitbox."
  },
  {
    author: "Helen H. Gardener",
    quote:
      "Women are indebted today for their emancipation from a position of hopeless degradation, not to their religion nor to Jehovah, but to the justice and honor of the men who have defied his commands.  That she does not crouch today where St. Paul tried to bind her, she owes to the men who are grand and brave enough to ignore St. Paul, and rise superior to his God.\n"
  },
  {
    author: "Hannah Cohoon",
    quote:
      "I received a draft of a beautiful Tree penciled on a large sheet of white paper bearing ripe fruit I saw it plainly it looked very singular and   curious to me. I have since learned that this tree grows in the Spirit Land. Afterwards the spirit showed me plainly the branches, leaves, and fruit presented or drawn upon paper. The leaves were checked or (unreadable) and the same color you see here. I entreated Mother Ann to tell me the name of this tree which she did Oct 1st 4th hour PM by moving the hand of a medium to write twice over Your Tree is the Tree of Life.\n"
  },
  {
    author: "B�la H. B�n�thy",
    quote:
      "The degree to which they are a community is marked by the degree of effort they devote to attain their purpose, the degree of their commitment to it, and the degree of their commitment to each other.\n"
  },
  {
    author: "Regina Spektor",
    quote:
      "Power to the people  We don't want it  We want pleasure  And the TVs try to rape us  And I guess that they're succeeding  And we're going to these meetings  But we're not doing any meeting  And we're trying to be faithful, but we're  Cheating, cheating, cheating\n"
  },
  {
    author: "John the Evangelist",
    quote:
      "So we ought to support such men, that we may be fellow workers in the truth.\n"
  },
  {
    author: "Yule",
    quote:
      "The grate had been removed from the wide overwhelming fireplace, to make way for a fire of wood, in the midst of which was an enormous log glowing and blazing, and sending forth a vast volume of light and heat; this I understood was the Yule-log, which the Squire was particular in having brought in and illumined on a Christmas eve, according to ancient custom.\n"
  },
  {
    author: "The Rolling Stones",
    quote:
      "I saw her today at the reception.In her glass was a bleeding man.She was practiced at the art of deception;I could tell by her blood-stained hands.\n"
  },
  {
    author: "Benedetto Croce",
    quote:
      " is produced not by the mere caprice of , but by  .&nbsp; It is the primary  of the  .\n"
  },
  {
    author: "Margaret Ball",
    quote:
      "Savaric never let reality interfere with his assumption that he and his ways were naturally superior to anyone else�s way of doing things and that everybody else in the world was either a dolt or a weakling.\n"
  },
  {
    author: "Gilbert Wakefield",
    quote:
      "Truth can never suffer from argument and inquiry; but may be essentally injured by the tyrannous interference of her pretended advocates. Impede her energies by the pains and penalties of law, and, like the Fame of , she will creep along the ground, diminutive in stature, and shrunk with apprehension: give free scope to all her tendencies, and she will soon collect her might, dilate herself to the fullness of her dimensions, and reach the stars.\n"
  },
  {
    author: "Robert Heller",
    quote:
      "What goes wrong [in long-range planning] is that sensible anticipation gets converted into foolish numbers: and their validity always hinges on large loose assumptions.\n"
  },
  {
    author: "Joseph Trapp",
    quote:
      "Arms and the man I sing who first from TroyCame to the Italian and Lavinian shores,Exiled by fate; much tossed on land and seaBy power divine and cruel Juno's rage;Much too in war he suffered, till he rearedA city and to Latium brought his gods:Whence sprung the Latin progeny, the kingsOf Alba, and the walls of towering Rome.\n"
  },
  {
    author: "Brigadoon",
    quote:
      "Why do people have to lose things to find out what they really mean?"
  },
  {
    author: "Dave Marsh",
    quote:
      "By the RIAA's terms, we commit piracy every time we share files on the Internet. In reality, the RIAA pirated almost all the 400 million CDs sold in America last year, since the people who made the music didn't get paid for them.\n"
  },
  {
    author: "Aim� C�saire",
    quote:
      "First we must study how colonization works to decivilize the colonizer, to brutalize him in the true sense of the word, to degrade him, to awaken him to buried instincts, to covetousness, violence, race hatred, and moral relativism; and we must show that each time a head is cut off or an eye put out in Vietnam and in France they accept the fact, each time a little girl is raped and in France they accept the fact, each time a Madagascan is tortured and in France they accept the fact, civilization acquires another dead weight, a universal regression takes place, a gangrene sets in, a center of infection begins to spread; and that at the end of all these treaties that have been violated, all these lies that have been propagated, all these punitive expeditions that have been tolerated, all these prisoners who have been tied up and interrogated, all these patriots who have been tortured, at the end of all the racial pride that has been encouraged, all the boastfulness that has been displayed, a poison has been instilled into the veins of Europe and, slowly but surely, the continent proceeds toward savagery.\n"
  },
  {
    author: "Zero (Mega Man)",
    quote:
      "\"I never cared about justice, and I don't recall ever calling myself a hero... I have always only fought for the people I believe in. I won't hesitate... If an enemy appears in front of me, I will destroy it!\""
  },
  {
    author: "G�rard de Nerval",
    quote:
      "They will return, these Gods you have never stopped longing for. Time will bring back the order of ancient days.\n"
  },
  {
    author: "Simon van der Meer",
    quote:
      "Above all, it's creative thinking that lies at the basis of discoveries. You must dare to think differently, see things from different sides, in order to come across fortuitous new ideas frequently. You should develop even the most stupid ideas and when you do this systematically, there will always come something useful out of it.\n"
  },
  {
    author: "James Baldwin",
    quote:
      "I don't like people who like me because I'm a Negro; neither do I like people who find in the same accident grounds for contempt. I love America more than any other country in the world, and, exactly for this reason, I insist on the right to criticize her perpetually. I think all theories are suspect, that the finest principles may have to be modified, or may even be pulverized by the demands of life, and that one must find, therefore, one's own moral center and move through the world hoping that this center will guide one aright."
  },
  {
    author: "Cherie Priest",
    quote:
      "�What was it like?� Zeke asked, changing the subject as much as he was willing to. �Fighting in the war, I mean?�He grumbled, �It was war, you dumb kid. Everybody I liked got killed, and most of the folks I'd just as soon have shot made it out with medals on their chests. It wasn�t fair and it sure as hell wasn�t any fun. And Jesus knows it�s been going on way too long.�\n"
  },
  {
    author: "Marlan Scully",
    quote:
      "Getting up any cliff is like a physics problem -- you just got to hold on, try everything, and stick with it."
  },
  {
    author: "Lala Sukuna",
    quote:
      '(on the Indian presence in his country): "Let us not ignore the fact that there is another community settled here in our midst. I refer to the Indians. They have increased more rapidly than we. They have become producers on our soil. They are continuously striving to better themselves. Although they are a different race, yet we are each a unit in the British Empire. They have shouldered many burdens that have helped Fiji onward. We have derived much money from them by way of rents. A large proportion of our prosperity is derived from their labour."'
  },
  {
    author: "Alfred Kinsey",
    quote:
      "The history of medicine proves that in so far as man seeks to know himself and face his whole nature, he has become free from bewildered fear, despondent shame, or arrant hypocrisy. As long as sex is dealt with in the current confusion of ignorance and sophistication, denial and indulgence, suppression and stimulation, punishment and exploitation, secrecy and display, it will be associated with a duplicity and indecency that lead neither to intellectual honesty nor human dignity."
  },
  {
    author: "Carl Linnaeus",
    quote:
      "The Lord himself hath led him with his own Almighty hand. He hath caused him to spring from a trunk without root, and planted him again in a distant and more delightful spot, and caused him to rise up to a considerable tree. Inspired him with an inclination for science so passionate as to become the most gratifying of all others. Given him all the means he could either wish for, or enjoy, of attaining the objects he had in view. Favoured him in such a manner that even the not obtaining of what he wished for, ultimately turned out to his great advantage. Caused him to be received into favour by the ; by the greatest men in the kingdom; and by the Royal Family. Given him an advantageous and honourable post, the very one that, above all others in the world, he had wished for. Given him the wife for whom he most wished, and who managed his household affairs whilst he was engaged in laborious studies. Given him children who have turned out good and virtuous. Given him a son for his successor in office. Given him the largest collection of plants that ever existed in the world, and his greatest delight. Given him lands and other property, so that though there has been nothing superfluous, nothing has he wanted. Honoured him with the titles of  and with  Protected him from fire. Preserved his life above 60 years. Permitted him to visit his secret council-chambers. Permitted him to see more of the creation than any mortal before him. Given him greater knowledge of natural history than any one had hitherto acquired. The Lord hath been with him whithersoever he hath walked, and hath cut off all his enemies from before him, and hath made him a name, like the name of the great men that are in the earth. 1 Chron. xvn. 8.\n"
  },
  {
    author: "Eckhart Tolle",
    quote:
      "When you lose touch with inner stillness, you lose touch with yourself."
  },
  {
    author: "William Henry Ashurst (judge)",
    quote:
      "Paper currency, guarded by proper regulations and restrictions, is the life of commerce.\n"
  },
  {
    author: "John Rabe",
    quote:
      "It is not until we tour the city that we learn the extent of destruction. We come across corpses every 100 to 200 yards. The bodies of civilians that I examined had bullet holes in their backs. These people had been presumably fleeing and were shot from behind.\n"
  },
  {
    author: "Edwin Grant Conklin",
    quote:
      " is not found in atoms or molecules or genes as such, but in organization; not in symbiosis but in .\n"
  },
  {
    author: "Lillian Smith (author)",
    quote:
      "The human heart dares not stay away too long from that which hurt it most. There is a return journey to anguish that few of us are released from making.\n"
  },
  {
    author: "George Villiers, 2nd Duke of Buckingham",
    quote:
      "Kisses are but like sands of gold and silver, found upon the ground which are not worth much themselves but as they promise a mine near too be dig'd.\n"
  },
  {
    author: "Pineapples",
    quote:
      "�There's a book here in which I read about the trial of a Jew, who took a child of four years old and cut off the fingers from both hands, and then crucified him on the wall, hammered nails into him and crucified him, and afterwards, when he was tried, he said that the child died soon, within four hours. That was �soon�! He said the child moaned, kept on moaning and he stood admiring it. That's nice!��Nice?��Nice; I sometimes imagine that it was I who crucified him. He would hang there moaning and I would sit opposite him eating pineapple compote. I am awfully fond of pineapple compote. Do you like it?�Alyosha looked at her in silence. Her pale, sallow face was suddenly contorted, her eyes burned.�You know, when I read about that Jew I shook with sobs all night. I kept fancying how the little thing cried and moaned (a child of four years old understands, you know), and all the while the thought of pineapple compote haunted me. In the morning I wrote a letter to a certain person, begging him particularly to come and see me. He came and I suddenly told him all about the child and the pineapple compote. All about it, all, and said that it was nice. He laughed and said it really was nice. Then he got up and went away. He was only here five minutes. Did he despise me? Did he despise me? Tell me, tell me, Alyosha, did he despise me or not?� She sat up on the couch, with flashing eyes.\n"
  },
  {
    author: "The Sting",
    quote: "No sense being a grifter if its the same as bein' a citizen."
  },
  {
    author: "The Black Cat (1934 film)",
    quote:
      " Oh, it's nothing. Only an accident in the road below. I want you to stay in this room all day tomorrow Karen. You are the very core and meaning of my life. No one shall take you from me. Not even Vitus, not even your father."
  },
  {
    author: "S. S. Van Dine",
    quote:
      "A fairy tale in terms of blood�a world in anamorphosis�a perversion of all rationality. It's unthinkable, senseless, like black magic and sorcery and thaumaturgy. It�s downright demented.\n"
  },
  {
    author: "Milw0rm",
    quote: '"Putting the power back in the hands of the people."'
  },
  {
    author: "Carefulness",
    quote:
      "No, no, he cannot long hold out these pangs;The incessant care and labour of his mindHath wrought the mure, that should confine it in,So thin that life looks through and will break out.\n"
  },
  {
    author: "Mario Bunge",
    quote:
      "In academia much bogus knowledge is tolerated in the name of academic freedom � which is like allowing for the sale of contaminated food in the name of free enterprise. I submit that such tolerance is suicidal: that the serious students must be protected against the �anything goes� crowd.\n"
  },
  {
    author: "Amiri Baraka",
    quote:
      "The Black Artist's role in America is to aid in the destruction of America as he knows it. His role is to report and reflect so precisely the nature of the society, and of himself, in that society, that other men will be moved by the exactness of his rendering, and if they are black men, grow strong through this moving, having seen their own strength, and weakness, and if they are white men, tremble, curse, and go mad, because they will be drenched with the filth of their evil.\n"
  },
  {
    author: "Thomas Charles Lethbridge",
    quote:
      ". . . if scientists could get rid of the mental block which prevents them investigating a vast subject right under their noses, they could soon learn a great deal more than my wife and I are capable of doing.\n"
  },
  {
    author: "Tea Party movement",
    quote:
      "People ask me if I'm the father of the Tea Party movement. I was the spark [...] that started it. If being the lightning rod that started the Tea Party is what's written on my tombstone, I'll be very happy.\n"
  },
  {
    author: "Marina Warner",
    quote:
      "When virtue is pictured as innocence and innocence equated with childlikeness, the implication is obviously that knowledge and experience are no longer media of goodness, but have become in themselves contaminating.  This is a very despairing outlook, in its way as black as 's original sin, for it supposes that original goodness will in all likelihood be defiled It surrenders the attempt to represent virtue in a mature phase.\n"
  },
  {
    author: "Fried Green Tomatoes",
    quote:
      "It like to have killed us all. But not a one took it as hard as Idgie. Everyone thought she'd die right along with him. Night after night, she stayed by the river. Big George was the only soul she'd let near her, and he watched over her night and day. You know, a heart can be broken, but it still keeps a-beating just the same."
  },
  {
    author: "George Linley",
    quote:
      "Ever of thee I'm fondly dreaming,Thy gentle voice my spirit can cheer.\n"
  },
  {
    author: "True Grit (1969 film)",
    quote:
      "I'm going! And it's not because you say I can't, and it's not because you say I can. I paid good cash money to be here, and I'm on my own business! Now, we'll have no more talk about it."
  },
  {
    author: "Richard Cohen (author)",
    quote:
      "Now that you have seen how I help people transition from homosexual to straight, you can buy my new book or you can purchase my therapeutic tapes, and don�t forget my hope and healing videos. I�m also available for speaking engagements. And, of course, I take credit cards. God bless. Amen. Be straight.\n"
  },
  {
    author: "Ariel Pink",
    quote:
      "All we have is the past, but for people of the future, there's not even going to be a history there. The history of recorded music has turned into a flat fucking screen of an iTunes playlist. I'm preserving something that's going extinct! That's all rock'n'roll has been since day one. It's all necrophilia.\n"
  },
  {
    author: "Sarva Dharma Sama Bhava",
    quote:
      "The confusion has by now become very widespread, and is symbolized by the sanctimonious slogan of sarva-dharma-samabhava. This slogan was coined by Mahatma Gandhi and included in his Mangala Prabhata as one of the sixteen mahavratas. The result was an unprecedented appeasement of Islam starting with the Mahatma�s support of the Khilafat movement. The Mahatma had believed sincerely that he could touch the heart of Islam and win over the Muslims to nationalism by paying handsome tributes to the Quran and the Prophet... In the final upshot, he had to pay the price with his own life, and the nation had to suffer partition of the motherland.\n"
  },
  {
    author: "Desiderius Erasmus",
    quote:
      "You venerate the saints, and you take pleasure in touching their relics. But you disregard their greatest legacy, the example of a blameless life. No devotion is more pleasing to Mary than the imitation of Mary's humility. No devotion is more acceptable and proper to the saints than striving to imitate their virtues.\n"
  },
  {
    author: "Enki",
    quote:
      "From  till , may the  of Ezina be . People should  to the yoke of Ezina. Whoever has , whoever has , whoever has , whoever has  shall take a seat at the  of whoever has , and pass his time there.\n"
  },
  { author: "Mass shootings in the United States", quote: "mass shootings" },
  {
    author: "United States territorial acquisitions",
    quote:
      "Our well-founded claim, grounded on continuity, has greatly strengthened, during the same period, by the rapid advance of our population toward the territory�its great increase, especially in the valley of the Mississippi�as well as the greatly increased facility of passing to the territory by more accessible routes, and the far stronger and rapidly-swelling tide of population that has recently commenced flowing into it.\n"
  },
  {
    author: "Messenger",
    quote:
      'He who lives to God rests in his \'s , and is trying to get rid of his old  � to him every , every bereavement, every , will come charged with , and death itself will be no longer the "king of terrors," but the messenger of .\n'
  },
  {
    author: "Lionel Tertis",
    quote:
      "We had no sooner taken our seats in the railway carriage and the train was beginning to move slowly out of the station when the guard came along the corridor and presented me with my viola! The porter had spotted it, reclining in its case all alone on the platform seat where Lillian and I had been busily engaged in conversation, run along the platform, and thrust it into the hands of the guard through the luggage van window as the train was moving off. Such was my absorption in Lillian that I could even forget the existence of my beloved and precious viola which had meant so much to me for so many years."
  },
  {
    author: "Kurt von Hammerstein-Equord",
    quote:
      "I am ashamed to have belonged in an army, that witnessed and tolerated all the crimes.\n"
  },
  {
    author: "Lou Ye",
    quote:
      "I have the feeling there are two dates in history when the whole world seemed to be working together perfectly to achieve certain things, when it beat to the pulse of chaotic events that erupted everywhere simultaneously, as if by chance: 1969 and 1989.\n"
  },
  {
    author: "Matriarchy",
    quote:
      "In Amazon societies, women were mothers and their society's only warriors; mothers and their society's only hunters; mothers and their society's only political and religious leaders. No division of labor based on sex seems to have existed in such societies. Although Amazon leaders existed and queens were elected, the societies seem to have been...ones in which any woman could aspire to and achieve full human expression."
  },
  {
    author: "Dmitri Volkogonov",
    quote:
      'The only thing I can be proud of�the greatest merit of my life�is that I was able to fundamentally alter my views."'
  },
  {
    author: "Indian mathematics",
    quote:
      "We owe a lot to the Indians who taught us how to count, without which no worthwhile scientific discovery could have been made.\n"
  },
  {
    author: "The Poseidon Adventure (1972 film)",
    quote:
      "At midnight on New Year's Eve, the , en route from New York to Athens, met with disaster and was lost. There were only a handful of survivors. This is their story....."
  },
  {
    author: "John Burdett",
    quote:
      "Have you seen anything strange about him?Strange? He insists on inhabiting an melting earth - isn't that strange enough without splitting hairs?He seems to be two different people. His personality switches from second to second. I heard something about it a long time ago.....what was it again?\n"
  },
  {
    author: "Eve",
    quote:
      "We may eat of the fruit of the trees of the garden: But of the fruit of the tree which is in the midst of the garden, God hath said, Ye shall not eat of it, neither shall ye touch it, lest ye die."
  },
  {
    author: "George Augustus Henry Sala",
    quote:
      "England is surrounded by enemies�by real enemies who hate her. Why? Because she tries to be honest; and she tries to be free.\n"
  },
  { author: "Mike Tomlin", quote: "Iron sharpens iron." },
  {
    author: "Ricardo Semler",
    quote:
      "I always come back to variations of the question that my son asked me when he was three. We were sitting in a jacuzzi, and he said, \"Dad, why do we exist?\" There is no other question. Nobody has any other question. We have variations of this one question, from three onwards. So when you spend time in a company, in a bureaucracy, in an organization and you're saying, boy -- how many people do you know who on their death beds said, boy, I wish I had spent more time at the office? So there's a whole thing of having the courage now -- not in a week, not in two months, not when you find out you have something -- to say, no, what am I doing this for? Stop everything. Let me do something else. And it will be okay, it will be much better than what you're doing, if you're stuck in a process.\n"
  },
  {
    author: "Hermann Samuel Reimarus",
    quote:
      'That which is absurd and impossible, that which in any other history would be called falsehood, deception, outrage and cruelty, cannot be made reasonable, righteous, and true by the added words: "Thus saith the Lord."\n'
  },
  {
    author: "Penelope (2006 film)",
    quote:
      "What? I'm being her mother! That's what mothers do with daughters; they talk about how to look prettier."
  },
  {
    author: "Eugene Kennedy",
    quote:
      "The real test of friendship is: can you literally do nothing with the other person? Can you enjoy those moments of life that are utterly simple?\n"
  },
  {
    author: "Chris Buck",
    quote:
      "Anna and Elsa's parents didn't die. Yes, there was a shipwreck, but they were at sea a little bit longer than we think they were because the mother was pregnant, and she gave birth on the boat, to a little boy. They get shipwrecked, and somehow they really washed way far away from the Scandinavian waters, and they end up in the jungle. They end up building a tree house and a leopard kills them, so their baby boy is raised by gorillas.\n"
  },
  {
    author: "Futurama: Into the Wild Green Yonder",
    quote: "Stop making your point so ineffectively!"
  },
  {
    author: "Ideal",
    quote:
      "As soon as the higher ideal is put before us, all false ideals will fade away as the stars fade away when they meet the sun.\n"
  },
  {
    author: "Mark E. Smith",
    quote:
      "I was in Cardiff recently. You should see the shops there. They�re fantastic. I had this breakfast in Cardiff; I could have eaten it every day. All the food was great. Manchester � the food, the shops � has always been crap.\n"
  },
  {
    author: "Zenon Pylyshyn",
    quote:
      "[A computer program for Task A qua an explanatory model and how a human cognizer actually carries out Task A are equivalent in the strong sense when it can be shown that]... the model and the organism are carrying out the same process.\n"
  },
  {
    author: "Alan Sugar",
    quote:
      "If you take care of your character, your reputation will take care of itself.\n"
  },
  {
    author: "Friday the 13th Part VIII: Jason Takes Manhattan",
    quote:
      "It's like this... we live in claustrophobia, the land of steel and concrete. Trapped by dark waters. There is no escape. Nor do we want it. We've come to thrive on it and each other. You can't get the adrenaline pumping without the terror, good people. I love this town."
  },
  {
    author: "Herbert Fingarette",
    quote:
      'The moral and spiritual achievements of man do not depend on tricks or luck or on esoteric spells or on any purely external agency. One\'s spiritual condition depends on the "stuff" one has to begin with, on the amout and quality of study and good hard work one puts into "shaping" it. Spiritual nobility calls for persistence and effort. "First the difficult..." (6:20) "His burden is heavy and his course is long." (8:7)'
  },
  {
    author: "Anne Morrow Lindbergh",
    quote:
      'He was naming the groups that were pro-war. No one minds his naming the British or the Administration. But to name "Jew" is un-American � even if it is done without hate or even criticism. Why?'
  },
  {
    author: "Captain America: The First Avenger",
    quote:
      "General Patton has said that wars are fought with weapons, but they are won by men."
  },
  {
    author: "Jack Herer",
    quote:
      "Growing hemp as nature designed it is vital to our urgent need to reduce greenhouse gases and ensure the survival of our planet.\n"
  },
  {
    author: "Richard Bartle",
    quote:
      "If anyone samples this for a hardcore techno dance track I shall expect a royalty.\n"
  },
  {
    author: "20 Million Miles to Earth",
    quote:
      "You better tell them we're in a hurry and to roll up the red tape and put it into a drawer until this thing is over!"
  },
  { author: "Star Wars", quote: " ()" },
  {
    author: "Luther Burbank",
    quote:
      "The plant laboratories in which this wonderful and vitally essential transformation is effected are chiefly located in the leaf of the plant... the thoughtful person must regard this structure�the most ordinary green leaf of tree or shrub or vine or the tiniest blade of grass�as in some respects the most wonderful thing in the world."
  },
  {
    author: "Alfred D. Chandler, Jr.",
    quote:
      "Multi-unit business enterprise replaced small traditional enterprise when administrative coordination permitted greater , lower costs, and higher profits than coordination by market mechanisms.\n"
  },
  {
    author: "Saving Private Ryan",
    quote:
      "You see, when...when you end up killing one of your men, you tell yourself it happened so you could save the lives of two or three or ten others. Maybe a hundred others."
  },
  {
    author: "Washington Irving",
    quote:
      "Luxury spreads its ample board before their eyes; but they are excluded from the banquet. Plenty revels over the fields; but they are starving in the midst of its abundance: the whole wilderness has blossomed into a garden; but they feel as reptiles that infest it.\n"
  },
  {
    author: "Swann's Way",
    quote:
      "M. Legrandin was one of that class of men who, apart from a scientific career in which they may well have proved brilliantly successful, have acquired an entirely different kind of culture, literary or artistic, of which they make no use in the specialised work of their profession, but by which their conversation profits. More �literary� than many �men of letters� (we were not aware at this period that M. Legrandin had a distinct reputation as a writer, and so were greatly astonished to find that a well-known composer had set some verses of his to music), endowed with a greater ease in execution than many painters, they imagine that the life they are obliged to lead is not that for which they are really fitted, and they bring to their regular occupations either a fantastic indifference or a sustained and lofty application, scornful, bitter, and conscientious.\n"
  },
  {
    author: "Austrians",
    quote: "Austrians have a wonderful sense of humor, Germans, not so much.\n"
  },
  {
    author: "Harry Connick, Jr.",
    quote: " Hookers, drugs. We�re playing the field right now.\n"
  },
  {
    author: "Saul Bellow",
    quote:
      'I discovered that rejections are not altogether a bad thing. They teach a writer to rely on his own judgment and to say in his heart of hearts, "To hell with you."'
  },
  {
    author: "Hamsters",
    quote:
      "The general rule among hamsters appears to be bite first and ask questions afterward.\n"
  },
  {
    author: "Haj Amin al-Husseini",
    quote:
      "Arise, o sons of Arabia. Fight for your sacred rights. Slaughter Jews wherever you find them. Their spilled blood pleases Allah, our history and religion. That will save our honor.\n"
  },
  {
    author: "January 13",
    quote: "3  15:42, 6 January 2009 (UTC) with a lean toward 4."
  },
  {
    author: "Georges Cuvier",
    quote:
      "To spread healthy ideas among even the lowest classes of people, to remove men from the influence of prejudice and passion, to make reason the arbiter and supreme guide of public opinion; that is the essential goal of the sciences; that is how science will contribute to the advancement of civilization, and that is what deserves protection of governments who want to insure the stability of their power.\n"
  },
  {
    author: "Abu Nuwas",
    quote:
      "You, mad to expect repentance,Tear your robe all you want;I will never repent!\n"
  },
  {
    author: "Thomas � Kempis",
    quote:
      "It is easier not to speak a word at all than to speak more words than we should.\n"
  },
  {
    author: "Hydroboration�oxidation reaction",
    quote:
      "The facile reactions of olefins and dienes with various hydroborating agents makes a variety of organoboranes readily available. Organoboranes tolerate many functional groups and are formed in a stereospecific manner. The boron atom in these organoboranes can be readily substituted with a variety of functional groups.\n"
  },
  {
    author: "Fumito Ueda",
    quote:
      "I was honestly concerned people might have forgotten or given up or whatnot, but the reaction so far has been very positive. I'm very overwhelmed, very thankful, very grateful. I also feel like those fans and their passion has helped me and the team to continue moving on, heads down, to keep pushing and working hard. That's fueling our motivation at this point.\n"
  },
  {
    author: "Franz Kline",
    quote:
      "If I feel a painting I'm working on doesn't have imagery or emotion, I paint it out and work over it until it does."
  },
  {
    author: "Orpheus",
    quote:
      "Hard rocks he soften'd with persuasive song,And sooth'd the rivers as they roll'd along.Yon beeches tall, that bloom near Zona, stillRemain memorials of his vocal skill:His lays Pieria's listening trees admire,And move in measures to his melting lyre.\n"
  },
  {
    author: "28 Days Later",
    quote:
      "No, see, this is a really shit idea. You know why? Because it's really  a shit idea."
  },
  {
    author: "Theodore Watts-Dunton",
    quote:
      "A sonnet is a wave of melodyFrom heaving waters of the impassion'd soul.\n"
  },
  {
    author: "Arjuna Ranatunga",
    quote:
      "Sports officials must work with more responsibility to develop sports. Even under the good governance government some Sports Ministry officials don't carry out their duties properly as they are influenced by money and power. It is always sports clubs, institutions and sports personnel who pay the price for all misconducts of officials. To change this trend sports authority must take the necessary steps.\n"
  },
  {
    author: "Balasaraswati",
    quote:
      "Although she was blind by that time, she was the best critique of my dance. If there is any one I would like to known, I would like to be remembered as Danam�s granddaughter.\n"
  },
  { author: "Grease 2", quote: "Not weird weird, but like exciting ." },
  {
    author: "Natural law",
    quote:
      "But if justice be a natural principle, then it is necessarily an immutable one; and can no more be changed"
  },
  {
    author: "Alice Moore Hubbard",
    quote: "Robert Ingersoll was humorist, iconoclast and lover of humanity."
  },
  {
    author: "Brick (film)",
    quote:
      "You set that poor kid up! You held Dode like a card 'till you could play him."
  },
  {
    author: "Laurent Clerc",
    quote:
      "Science is a most useful thing for us all. It is one of the most useful ornaments of man. There is no dress which embellishes the body more than science does the mind.\n"
  },
  { author: "Leonard H. Courtney", quote: "More information is available at " },
  { author: "Peter Rabbit (film)", quote: "Never stopped me before." },
  {
    author: "The Land Unknown",
    quote:
      "It is true that you can't live among beasts without becoming one. It is just as true that you can't live among human beings without becoming affected by their humanity."
  },
  {
    author: "Jeremy Rifkin",
    quote:
      "The real story of how the west was won bears little resemblance to the storybook accounts handed down to generations of young Americans. Behind the facade of frontier heroism and cowboy bravado, of civilizing forces and homespun values, lies a quite different tale: a saga of  and genocide, of forced enclosures of land and people, and the expropriation of an entire subcontinent for the exclusive benefit of a privileged few.\n"
  },
  {
    author: "Paul Blobel",
    quote:
      "Out of the total number of the persons designated for the execution, fifteen men were led in each case to the brink of the mass grave where they had to kneel down, their faces turned towards the grave. When the men were ready for the execution one of my leaders who was in charge of this execution squad gave the order to shoot. Since they were kneeling on the brink of the mass grave, the victims fell, as a rule, at once into the mass grave.\n"
  },
  {
    author: "The Treasure of the Sierra Madre",
    quote:
      " Ain't it always his burros that won't march in line...What was in your head when you offered to carry his goods for him that he couldn't manage by himself. He knew what he was doin' when he turned 'em over to us. Mighty cute of him, wasn't it?"
  },
  {
    author: "Jorge Majfud",
    quote: "We call reality  to madness that remains  and madness to reality "
  },
  {
    author: "Dud Dudley",
    quote:
      "After I had made a second blast and tryal the fesibility of making iron with pitcole and sea-cole I found by my new invention, the quality to be good and profitable, but the quantity did not exceed above 3 tuns per week.\n"
  },
  {
    author: "Bruce Feirstein",
    quote:
      "Today's Real Man is probably closest to  or  in spirit; he realizes that while birds, flowers, poetry, and small children do not add to the quality of life in quite the same manner as a Super Bowl and six-pack of Budweiser, he's learned to appreciate them anyway.\n"
  },
  {
    author: "Occupy Wall Street",
    quote:
      "Ordinary people reclaiming rights which should always have been theirs. I can't think of any reason why as a population we should be expected to stand by and see a gross reduction in the living standards of ourselves and our kids, possibly for generations, when the people who have got us into this have been rewarded for it � they've certainly not been punished in any way because they're too big to fail. I think that the Occupy movement is, in one sense, the public saying that they should be the ones to decide who's too big to fail. As an anarchist, I believe that power should be given to the people whose lives this is actually affecting.\n"
  },
  {
    author: "Astrophysics",
    quote:
      "The greatest astronomers of the first half of the 20th century were the astrophysicists. For example, , , , and  elucidated the physical nature of  using the new quantum theories of , nuclear and particle physics. In recent decades, about half of the prizes of the American Astronomical Society are awarded for work in astrophysics and half in astronomy.\n"
  },
  {
    author: "Dick Gregory",
    quote:
      "I personally would say that the quickest way to wipe out a group of people is to put them on a  diet. One of the tragedies is that the very folks in the black community who are most sophisticated in terms of the political realities in this country are nonetheless advocates of �soul food.� They will lay down a heavy rap on genocide in America with regard to black folks, then walk into a soul food restaurant and help the genocide along.\n"
  },
  {
    author: "Futurama: Into the Wild Green Yonder",
    quote:
      "Six, seven, eight; lock the gate. One, two, three; turn the key. Thirty, fifty, ten; my dirty shifty friend?"
  },
  {
    author: "Teresa Nielsen Hayden",
    quote: "My own personal theory is that this is the very dawn of the world."
  },
  { author: "Morris Udall", quote: "The  have spoken � the bastards.\n" },
  {
    author: "Edward Smith (physician)",
    quote:
      "As a general definition, it may be stated that a  is a substance which, when introduced into the body, supplies material which renews some structure or maintains some vital process; and it is distinguished from a medicine in that the latter modifies some vital action, but does not supply the material which sustains such action.\n"
  },
  {
    author: "Charles Henry Webb",
    quote:
      "I send thee a shell from the ocean-beach;But listen thou well, for my shell hath speech.Hold to thine earAnd plain thou'lt hearTales of ships.\n"
  },
  {
    author: "The Third Man",
    quote:
      "I never knew the old Vienna before the war with its Strauss music, its glamour and easy charm. Constantinople suited me better. I really got to know it in the classic period of the Black Market. We'd run anything if people wanted it enough - mmm - had the money to pay. Of course, a situation like that does tempt amateurs but you know they can't stay the course like a professional. Now the city - it's divided into four zones, you know, each occupied by a power: the American, the British, the Russian and the French. But the center of the city that's international policed by an International Patrol. One member of each of the four powers. Wonderful! What a hope they had! All strangers to the place and none of them could speak the same language. Except a sort of smattering of German. Good fellows on the whole, did their best you know. Vienna doesn't really look any worse than a lot of other European cities. Bombed about a bit. Oh, I was gonna tell you, wait, I was gonna tell you about Holly Martins, an American. Came all the way here to visit a friend of his. The name is Lime, Harry Lime. Now Martins was broke and Lime had offered him, some sort, I don't know, some sort of job. Anyway, there he was, poor chap. Happy as a lark and without a cent.\n"
  },
  {
    author: "Mike Cernovich",
    quote:
      "When I said Trump, then given a 1% change of winning the GOP primary, would win the entire election, people called me crazy. Even friends told me to keep my opinions to myself, as clearly I wasn�t smart enough to talk policy. Today those friends are quiet when they need to issue apologies.\n"
  },
  {
    author: "K-19: The Widowmaker",
    quote:
      "Under no circumstances will I abandon my boat or my crew to the enemy."
  },
  {
    author: "Omen III: The Final Conflict",
    quote:
      "Most people confuse evil with their own trivial lusts and perversions. Now, true evil is as pure as innocence."
  },
  {
    author: "They Live",
    quote: "Brother, life's a bitch, and she's back in heat."
  },
  {
    author: "Research",
    quote:
      "It is a good thing for a research scientist to discard a pet hypothesis every day before breakfast.\n"
  },
  {
    author: "Silencer (firearms)",
    quote: "The silencer will silence any cocksucker with something to say.\n"
  },
  {
    author: "Courage",
    quote:
      "Courage, the highest gift, that scorns to bendTo mean devices for a sordid end.Courage�an independent spark from Heaven's bright throne,By which the soul stands raised, triumphant high, alone.Great in itself, not praises of the crowd,Above all vice, it stoops not to be proud.Courage, the mighty attribute of powers above,By which those great in war, are great in love.The spring of all brave acts is seated here,As falsehoods draw their sordid birth from fear.\n"
  },
  {
    author: "Henry J. Heinz",
    quote:
      "A wide  awaited the  of food products who would set purity and  above everything else in their preparation.\n"
  },
  {
    author: "Elite theory",
    quote:
      " indicates that economic elites and organized groups representing business interests have substantial independent impacts on U.S. government policy, while average citizens and mass-based interest groups have little or no independent influence. The results provide substantial support for theories of Economic-Elite Domination and for theories of Biased Pluralism, but not for theories of Majoritarian Electoral Democracy or Majoritarian Pluralism.\n"
  },
  {
    author: "Halo 3",
    quote:
      "How could I have known the Parasite would follow?! Undoubtedly this is the Heretics' doing. A final, bitter curse. Clear evidence of treachery long hidden. So far are we along the path, that I must strain to hear the clumsy patter of their feet. Know this my brothers: They may foul the way with their charred and broken bones, but they will not stop the Journey."
  },
  {
    author: "Joan Maragall",
    quote:
      "Come in, enter, the door is wide open! It is you yourselves who have opened it with the fire and iron of your hatred:[-] By destroying this church, you have restored the Church, the Church that was founded for you, the poor, the oppressed , the desperate...it is you, with your poverty, your rebellion and your despair, who have rammed down the door, it is you who have breached her stout and solid walls, and you who have re-conquered her. Fire has built, blasphemy has purified, hatred of Christ has returned Christ to his house"
  },
  {
    author: "Peter Sellars",
    quote:
      "I think of the classical world as a cancer patient or an AIDS patient. You know you have a limited life span. The question you now might want to ask is what would be the most important things to do now with your remaining years. I would like to think that that type of prioritizing could happen with museums, symphony orchestras, opera companies. Things really are urgent right now, and what we're doing somehow has to matter, has to make a contribution.\n"
  },
  {
    author: "Rik Mayall",
    quote:
      "I was brought up to be a good boy and proud of myself so I suppress all the things about me that are bad"
  },
  {
    author: "The Pyramid (film)",
    quote: " They ended up imprisoning their own god!"
  },
  {
    author: "Human penis",
    quote:
      "He mounted and reclined on the nearer side, his swollen penis harder than horn, and meanwhile pulling up the bottom edge of the garment; there he met legs that bristled with thick rough hair.\n"
  },
  {
    author: "Junebug",
    quote:
      "All I really want is for Johnny to love me like he did in High School."
  },
  {
    author: "Paranormal Activity 2",
    quote:
      "We just can't let this affect us that much. If we do that, the terrorists win."
  },
  { author: "Godzilla (1998 film)", quote: ' It\'s "Tatopolous!"' },
  {
    author: "Solitude",
    quote:
      "While God created Adam, who was alone, He said, 'It is not good for man to be alone. He also created a woman, from the earth, as He had created Adam himself, and called her Lilith. Adam and Lilith immediately began to fight. She said, 'I will not lie below,' and he said, 'I will not lie beneath you, but only on top. For you are fit only to be in the bottom position, while I am to be the superior one.' Lilith responded, 'We are equal to each other inasmuch as we were both created from the earth.' But they would not listen to one another. When Lilith saw this, she pronounced the Ineffable Name and flew away into the air.\n"
  },
  {
    author: "The History of India, as Told by Its Own Historians",
    quote:
      "The few glimpses we have, even among the short Extracts in this single volume, of Hind�s slain for disputing with Muhammadans, of general prohibitions against processions, worship, and ablutions, and of other intolerant measures, of idols mutilated, of temples razed, of forcible conversions and marriages, of proscriptions and confiscations, of murders and massacres, and of the sensuality and drunkenness of the tyrants who enjoined them, show us that this picture is not overcharged, and it is much to be regretted that we are left to draw it for ourselves from out the mass of ordinary occurrences, recorded by writers who seem to sympathize with no virtues, and to abhor no vices. Other nations exhibit the same atrocities, but they are at least spoken of, by some, with indignation and disgust.\n"
  },
  { author: "Dazed and Confused", quote: " Alright, alright, alright!" },
  {
    author: "Sanford I. Weill",
    quote:
      "It's the new management's job to look at the world as it changes, and how do we look at change and take advantage of change, rather than put our head in the ground.\n"
  },
  {
    author: "Duarte Barbosa",
    quote:
      "The enthusiastic soldiers, who, in the thirteenth and fourteenth centuries, spread the faith of Islam among the timid race of Bengal, made forcible conversions by the sword, and, penetrating the dense forests of the Eastern frontier, planted the crescent in the villages of Sylhet.  Tradition still preserves the names of Adam Shahid, Shah Halal Mujarrad, and Karmfarma Sahib, as three of the most successful of these enthusiasts.\n"
  },
  {
    author: "Mulayam Singh Yadav",
    quote:
      "Not even a bird shall be able to enter Ayodhya. ... We will crush them.\n"
  },
  {
    author: "L�on Rosenfeld",
    quote:
      "Each word is a singularity, or is connected with a singularity, in our way of understanding existence.\n"
  },
  {
    author: "Undercover Mosque",
    quote:
      "We love the people of  and we hate the people of kufr, we hate the kuffaar.\n"
  },
  {
    author: "Brian Leiter",
    quote:
      " involve a mistake about their origin: agents think that the ideology arose because of its responsiveness to  relevant considerations (e.g., evidence, reasons, etc.), when, in fact, it arose only because it was responsive to the interests of the dominant economic class in the existing economic system."
  },
  { author: "Pok�mon", quote: "TIME" },
  {
    author: "Xenocide",
    quote:
      "Every day all people judge all other people. The question is whether we judge wisely."
  },
  {
    author: "Ernst Hanfstaengl",
    quote: "Tell him the Reichstag is burning.\n"
  },
  {
    author: "The Henpecked Duck",
    quote:
      "Observe closely. Nothing up here...  ...nothing up here...  ...and nothing up here. "
  },
  {
    author: "Charles Seymour Robinson",
    quote:
      '"No man can come to Christ except the Father draw him." If he comes asking, that proves he comes drawn.\n'
  },
  {
    author: "Super Metroid",
    quote:
      "When Samus made her way to the research facility, she found the building in ruins and the Metroid larva was nowhere to be found. Out from the darkness came a group of Zebesian space pirates and their leader, Ridley, who had the Metroid larva in tow. The pirates fled to a rebuilt planet Zebes and Samus followed them, resolving to finish them off and save the hatchling.\n"
  },
  { author: "Peter Rabbit (film)", quote: "Never stopped me before." },
  {
    author: "The Land Unknown",
    quote:
      "It is true that you can't live among beasts without becoming one. It is just as true that you can't live among human beings without becoming affected by their humanity."
  },
  {
    author: "Jeremy Rifkin",
    quote:
      "The real story of how the west was won bears little resemblance to the storybook accounts handed down to generations of young Americans. Behind the facade of frontier heroism and cowboy bravado, of civilizing forces and homespun values, lies a quite different tale: a saga of  and genocide, of forced enclosures of land and people, and the expropriation of an entire subcontinent for the exclusive benefit of a privileged few.\n"
  },
  {
    author: "Paul Blobel",
    quote:
      "Out of the total number of the persons designated for the execution, fifteen men were led in each case to the brink of the mass grave where they had to kneel down, their faces turned towards the grave. When the men were ready for the execution one of my leaders who was in charge of this execution squad gave the order to shoot. Since they were kneeling on the brink of the mass grave, the victims fell, as a rule, at once into the mass grave.\n"
  },
  {
    author: "The Treasure of the Sierra Madre",
    quote:
      " Ain't it always his burros that won't march in line...What was in your head when you offered to carry his goods for him that he couldn't manage by himself. He knew what he was doin' when he turned 'em over to us. Mighty cute of him, wasn't it?"
  },
  {
    author: "Jorge Majfud",
    quote: "We call reality  to madness that remains  and madness to reality "
  },
  {
    author: "Dud Dudley",
    quote:
      "After I had made a second blast and tryal the fesibility of making iron with pitcole and sea-cole I found by my new invention, the quality to be good and profitable, but the quantity did not exceed above 3 tuns per week.\n"
  },
  {
    author: "Bruce Feirstein",
    quote:
      "Today's Real Man is probably closest to  or  in spirit; he realizes that while birds, flowers, poetry, and small children do not add to the quality of life in quite the same manner as a Super Bowl and six-pack of Budweiser, he's learned to appreciate them anyway.\n"
  },
  {
    author: "Occupy Wall Street",
    quote:
      "Ordinary people reclaiming rights which should always have been theirs. I can't think of any reason why as a population we should be expected to stand by and see a gross reduction in the living standards of ourselves and our kids, possibly for generations, when the people who have got us into this have been rewarded for it � they've certainly not been punished in any way because they're too big to fail. I think that the Occupy movement is, in one sense, the public saying that they should be the ones to decide who's too big to fail. As an anarchist, I believe that power should be given to the people whose lives this is actually affecting.\n"
  },
  {
    author: "Astrophysics",
    quote:
      "The greatest astronomers of the first half of the 20th century were the astrophysicists. For example, , , , and  elucidated the physical nature of  using the new quantum theories of , nuclear and particle physics. In recent decades, about half of the prizes of the American Astronomical Society are awarded for work in astrophysics and half in astronomy.\n"
  },
  {
    author: "Dick Gregory",
    quote:
      "I personally would say that the quickest way to wipe out a group of people is to put them on a  diet. One of the tragedies is that the very folks in the black community who are most sophisticated in terms of the political realities in this country are nonetheless advocates of �soul food.� They will lay down a heavy rap on genocide in America with regard to black folks, then walk into a soul food restaurant and help the genocide along.\n"
  },
  {
    author: "Futurama: Into the Wild Green Yonder",
    quote:
      "Six, seven, eight; lock the gate. One, two, three; turn the key. Thirty, fifty, ten; my dirty shifty friend?"
  },
  {
    author: "Teresa Nielsen Hayden",
    quote: "My own personal theory is that this is the very dawn of the world."
  },
  { author: "Morris Udall", quote: "The  have spoken � the bastards.\n" },
  {
    author: "Edward Smith (physician)",
    quote:
      "As a general definition, it may be stated that a  is a substance which, when introduced into the body, supplies material which renews some structure or maintains some vital process; and it is distinguished from a medicine in that the latter modifies some vital action, but does not supply the material which sustains such action.\n"
  },
  {
    author: "Charles Henry Webb",
    quote:
      "I send thee a shell from the ocean-beach;But listen thou well, for my shell hath speech.Hold to thine earAnd plain thou'lt hearTales of ships.\n"
  },
  {
    author: "The Third Man",
    quote:
      "I never knew the old Vienna before the war with its Strauss music, its glamour and easy charm. Constantinople suited me better. I really got to know it in the classic period of the Black Market. We'd run anything if people wanted it enough - mmm - had the money to pay. Of course, a situation like that does tempt amateurs but you know they can't stay the course like a professional. Now the city - it's divided into four zones, you know, each occupied by a power: the American, the British, the Russian and the French. But the center of the city that's international policed by an International Patrol. One member of each of the four powers. Wonderful! What a hope they had! All strangers to the place and none of them could speak the same language. Except a sort of smattering of German. Good fellows on the whole, did their best you know. Vienna doesn't really look any worse than a lot of other European cities. Bombed about a bit. Oh, I was gonna tell you, wait, I was gonna tell you about Holly Martins, an American. Came all the way here to visit a friend of his. The name is Lime, Harry Lime. Now Martins was broke and Lime had offered him, some sort, I don't know, some sort of job. Anyway, there he was, poor chap. Happy as a lark and without a cent.\n"
  },
  {
    author: "Mike Cernovich",
    quote:
      "When I said Trump, then given a 1% change of winning the GOP primary, would win the entire election, people called me crazy. Even friends told me to keep my opinions to myself, as clearly I wasn�t smart enough to talk policy. Today those friends are quiet when they need to issue apologies.\n"
  },
  {
    author: "K-19: The Widowmaker",
    quote:
      "Under no circumstances will I abandon my boat or my crew to the enemy."
  },
  {
    author: "Omen III: The Final Conflict",
    quote:
      "Most people confuse evil with their own trivial lusts and perversions. Now, true evil is as pure as innocence."
  },
  {
    author: "They Live",
    quote: "Brother, life's a bitch, and she's back in heat."
  },
  {
    author: "Research",
    quote:
      "It is a good thing for a research scientist to discard a pet hypothesis every day before breakfast.\n"
  },
  {
    author: "Silencer (firearms)",
    quote: "The silencer will silence any cocksucker with something to say.\n"
  },
  {
    author: "Courage",
    quote:
      "Courage, the highest gift, that scorns to bendTo mean devices for a sordid end.Courage�an independent spark from Heaven's bright throne,By which the soul stands raised, triumphant high, alone.Great in itself, not praises of the crowd,Above all vice, it stoops not to be proud.Courage, the mighty attribute of powers above,By which those great in war, are great in love.The spring of all brave acts is seated here,As falsehoods draw their sordid birth from fear.\n"
  },
  {
    author: "Henry J. Heinz",
    quote:
      "A wide  awaited the  of food products who would set purity and  above everything else in their preparation.\n"
  },
  {
    author: "Elite theory",
    quote:
      " indicates that economic elites and organized groups representing business interests have substantial independent impacts on U.S. government policy, while average citizens and mass-based interest groups have little or no independent influence. The results provide substantial support for theories of Economic-Elite Domination and for theories of Biased Pluralism, but not for theories of Majoritarian Electoral Democracy or Majoritarian Pluralism.\n"
  },
  {
    author: "Halo 3",
    quote:
      "How could I have known the Parasite would follow?! Undoubtedly this is the Heretics' doing. A final, bitter curse. Clear evidence of treachery long hidden. So far are we along the path, that I must strain to hear the clumsy patter of their feet. Know this my brothers: They may foul the way with their charred and broken bones, but they will not stop the Journey."
  },
  {
    author: "Joan Maragall",
    quote:
      "Come in, enter, the door is wide open! It is you yourselves who have opened it with the fire and iron of your hatred:[-] By destroying this church, you have restored the Church, the Church that was founded for you, the poor, the oppressed , the desperate...it is you, with your poverty, your rebellion and your despair, who have rammed down the door, it is you who have breached her stout and solid walls, and you who have re-conquered her. Fire has built, blasphemy has purified, hatred of Christ has returned Christ to his house"
  },
  {
    author: "Peter Sellars",
    quote:
      "I think of the classical world as a cancer patient or an AIDS patient. You know you have a limited life span. The question you now might want to ask is what would be the most important things to do now with your remaining years. I would like to think that that type of prioritizing could happen with museums, symphony orchestras, opera companies. Things really are urgent right now, and what we're doing somehow has to matter, has to make a contribution.\n"
  },
  {
    author: "Rik Mayall",
    quote:
      "I was brought up to be a good boy and proud of myself so I suppress all the things about me that are bad"
  },
  {
    author: "The Pyramid (film)",
    quote: " They ended up imprisoning their own god!"
  },
  {
    author: "Human penis",
    quote:
      "He mounted and reclined on the nearer side, his swollen penis harder than horn, and meanwhile pulling up the bottom edge of the garment; there he met legs that bristled with thick rough hair.\n"
  },
  {
    author: "Junebug",
    quote:
      "All I really want is for Johnny to love me like he did in High School."
  },
  {
    author: "Paranormal Activity 2",
    quote:
      "We just can't let this affect us that much. If we do that, the terrorists win."
  },
  { author: "Godzilla (1998 film)", quote: ' It\'s "Tatopolous!"' },
  {
    author: "Solitude",
    quote:
      "While God created Adam, who was alone, He said, 'It is not good for man to be alone. He also created a woman, from the earth, as He had created Adam himself, and called her Lilith. Adam and Lilith immediately began to fight. She said, 'I will not lie below,' and he said, 'I will not lie beneath you, but only on top. For you are fit only to be in the bottom position, while I am to be the superior one.' Lilith responded, 'We are equal to each other inasmuch as we were both created from the earth.' But they would not listen to one another. When Lilith saw this, she pronounced the Ineffable Name and flew away into the air.\n"
  },
  {
    author: "The History of India, as Told by Its Own Historians",
    quote:
      "The few glimpses we have, even among the short Extracts in this single volume, of Hind�s slain for disputing with Muhammadans, of general prohibitions against processions, worship, and ablutions, and of other intolerant measures, of idols mutilated, of temples razed, of forcible conversions and marriages, of proscriptions and confiscations, of murders and massacres, and of the sensuality and drunkenness of the tyrants who enjoined them, show us that this picture is not overcharged, and it is much to be regretted that we are left to draw it for ourselves from out the mass of ordinary occurrences, recorded by writers who seem to sympathize with no virtues, and to abhor no vices. Other nations exhibit the same atrocities, but they are at least spoken of, by some, with indignation and disgust.\n"
  },
  { author: "Dazed and Confused", quote: " Alright, alright, alright!" },
  {
    author: "Sanford I. Weill",
    quote:
      "It's the new management's job to look at the world as it changes, and how do we look at change and take advantage of change, rather than put our head in the ground.\n"
  },
  {
    author: "Duarte Barbosa",
    quote:
      "The enthusiastic soldiers, who, in the thirteenth and fourteenth centuries, spread the faith of Islam among the timid race of Bengal, made forcible conversions by the sword, and, penetrating the dense forests of the Eastern frontier, planted the crescent in the villages of Sylhet.  Tradition still preserves the names of Adam Shahid, Shah Halal Mujarrad, and Karmfarma Sahib, as three of the most successful of these enthusiasts.\n"
  },
  {
    author: "Mulayam Singh Yadav",
    quote:
      "Not even a bird shall be able to enter Ayodhya. ... We will crush them.\n"
  },
  {
    author: "L�on Rosenfeld",
    quote:
      "Each word is a singularity, or is connected with a singularity, in our way of understanding existence.\n"
  },
  {
    author: "Undercover Mosque",
    quote:
      "We love the people of  and we hate the people of kufr, we hate the kuffaar.\n"
  },
  {
    author: "Brian Leiter",
    quote:
      " involve a mistake about their origin: agents think that the ideology arose because of its responsiveness to  relevant considerations (e.g., evidence, reasons, etc.), when, in fact, it arose only because it was responsive to the interests of the dominant economic class in the existing economic system."
  },
  { author: "Pok�mon", quote: "TIME" },
  {
    author: "Xenocide",
    quote:
      "Every day all people judge all other people. The question is whether we judge wisely."
  },
  {
    author: "Ernst Hanfstaengl",
    quote: "Tell him the Reichstag is burning.\n"
  },
  {
    author: "The Henpecked Duck",
    quote:
      "Observe closely. Nothing up here...  ...nothing up here...  ...and nothing up here. "
  },
  {
    author: "Charles Seymour Robinson",
    quote:
      '"No man can come to Christ except the Father draw him." If he comes asking, that proves he comes drawn.\n'
  },
  {
    author: "Super Metroid",
    quote:
      "When Samus made her way to the research facility, she found the building in ruins and the Metroid larva was nowhere to be found. Out from the darkness came a group of Zebesian space pirates and their leader, Ridley, who had the Metroid larva in tow. The pirates fled to a rebuilt planet Zebes and Samus followed them, resolving to finish them off and save the hatchling.\n"
  },
  { author: "Peter Rabbit (film)", quote: "Never stopped me before." },
  {
    author: "The Land Unknown",
    quote:
      "It is true that you can't live among beasts without becoming one. It is just as true that you can't live among human beings without becoming affected by their humanity."
  },
  {
    author: "Jeremy Rifkin",
    quote:
      "The real story of how the west was won bears little resemblance to the storybook accounts handed down to generations of young Americans. Behind the facade of frontier heroism and cowboy bravado, of civilizing forces and homespun values, lies a quite different tale: a saga of  and genocide, of forced enclosures of land and people, and the expropriation of an entire subcontinent for the exclusive benefit of a privileged few.\n"
  },
  {
    author: "Paul Blobel",
    quote:
      "Out of the total number of the persons designated for the execution, fifteen men were led in each case to the brink of the mass grave where they had to kneel down, their faces turned towards the grave. When the men were ready for the execution one of my leaders who was in charge of this execution squad gave the order to shoot. Since they were kneeling on the brink of the mass grave, the victims fell, as a rule, at once into the mass grave.\n"
  },
  {
    author: "The Treasure of the Sierra Madre",
    quote:
      " Ain't it always his burros that won't march in line...What was in your head when you offered to carry his goods for him that he couldn't manage by himself. He knew what he was doin' when he turned 'em over to us. Mighty cute of him, wasn't it?"
  },
  {
    author: "Jorge Majfud",
    quote: "We call reality  to madness that remains  and madness to reality "
  },
  {
    author: "Dud Dudley",
    quote:
      "After I had made a second blast and tryal the fesibility of making iron with pitcole and sea-cole I found by my new invention, the quality to be good and profitable, but the quantity did not exceed above 3 tuns per week.\n"
  },
  {
    author: "Bruce Feirstein",
    quote:
      "Today's Real Man is probably closest to  or  in spirit; he realizes that while birds, flowers, poetry, and small children do not add to the quality of life in quite the same manner as a Super Bowl and six-pack of Budweiser, he's learned to appreciate them anyway.\n"
  },
  {
    author: "Occupy Wall Street",
    quote:
      "Ordinary people reclaiming rights which should always have been theirs. I can't think of any reason why as a population we should be expected to stand by and see a gross reduction in the living standards of ourselves and our kids, possibly for generations, when the people who have got us into this have been rewarded for it � they've certainly not been punished in any way because they're too big to fail. I think that the Occupy movement is, in one sense, the public saying that they should be the ones to decide who's too big to fail. As an anarchist, I believe that power should be given to the people whose lives this is actually affecting.\n"
  },
  {
    author: "Astrophysics",
    quote:
      "The greatest astronomers of the first half of the 20th century were the astrophysicists. For example, , , , and  elucidated the physical nature of  using the new quantum theories of , nuclear and particle physics. In recent decades, about half of the prizes of the American Astronomical Society are awarded for work in astrophysics and half in astronomy.\n"
  },
  {
    author: "Dick Gregory",
    quote:
      "I personally would say that the quickest way to wipe out a group of people is to put them on a  diet. One of the tragedies is that the very folks in the black community who are most sophisticated in terms of the political realities in this country are nonetheless advocates of �soul food.� They will lay down a heavy rap on genocide in America with regard to black folks, then walk into a soul food restaurant and help the genocide along.\n"
  },
  {
    author: "Futurama: Into the Wild Green Yonder",
    quote:
      "Six, seven, eight; lock the gate. One, two, three; turn the key. Thirty, fifty, ten; my dirty shifty friend?"
  },
  {
    author: "Teresa Nielsen Hayden",
    quote: "My own personal theory is that this is the very dawn of the world."
  },
  { author: "Morris Udall", quote: "The  have spoken � the bastards.\n" },
  {
    author: "Edward Smith (physician)",
    quote:
      "As a general definition, it may be stated that a  is a substance which, when introduced into the body, supplies material which renews some structure or maintains some vital process; and it is distinguished from a medicine in that the latter modifies some vital action, but does not supply the material which sustains such action.\n"
  },
  {
    author: "Charles Henry Webb",
    quote:
      "I send thee a shell from the ocean-beach;But listen thou well, for my shell hath speech.Hold to thine earAnd plain thou'lt hearTales of ships.\n"
  },
  {
    author: "The Third Man",
    quote:
      "I never knew the old Vienna before the war with its Strauss music, its glamour and easy charm. Constantinople suited me better. I really got to know it in the classic period of the Black Market. We'd run anything if people wanted it enough - mmm - had the money to pay. Of course, a situation like that does tempt amateurs but you know they can't stay the course like a professional. Now the city - it's divided into four zones, you know, each occupied by a power: the American, the British, the Russian and the French. But the center of the city that's international policed by an International Patrol. One member of each of the four powers. Wonderful! What a hope they had! All strangers to the place and none of them could speak the same language. Except a sort of smattering of German. Good fellows on the whole, did their best you know. Vienna doesn't really look any worse than a lot of other European cities. Bombed about a bit. Oh, I was gonna tell you, wait, I was gonna tell you about Holly Martins, an American. Came all the way here to visit a friend of his. The name is Lime, Harry Lime. Now Martins was broke and Lime had offered him, some sort, I don't know, some sort of job. Anyway, there he was, poor chap. Happy as a lark and without a cent.\n"
  },
  {
    author: "Mike Cernovich",
    quote:
      "When I said Trump, then given a 1% change of winning the GOP primary, would win the entire election, people called me crazy. Even friends told me to keep my opinions to myself, as clearly I wasn�t smart enough to talk policy. Today those friends are quiet when they need to issue apologies.\n"
  },
  {
    author: "K-19: The Widowmaker",
    quote:
      "Under no circumstances will I abandon my boat or my crew to the enemy."
  },
  {
    author: "Omen III: The Final Conflict",
    quote:
      "Most people confuse evil with their own trivial lusts and perversions. Now, true evil is as pure as innocence."
  },
  {
    author: "They Live",
    quote: "Brother, life's a bitch, and she's back in heat."
  },
  {
    author: "Research",
    quote:
      "It is a good thing for a research scientist to discard a pet hypothesis every day before breakfast.\n"
  },
  {
    author: "Silencer (firearms)",
    quote: "The silencer will silence any cocksucker with something to say.\n"
  },
  {
    author: "Courage",
    quote:
      "Courage, the highest gift, that scorns to bendTo mean devices for a sordid end.Courage�an independent spark from Heaven's bright throne,By which the soul stands raised, triumphant high, alone.Great in itself, not praises of the crowd,Above all vice, it stoops not to be proud.Courage, the mighty attribute of powers above,By which those great in war, are great in love.The spring of all brave acts is seated here,As falsehoods draw their sordid birth from fear.\n"
  },
  {
    author: "Henry J. Heinz",
    quote:
      "A wide  awaited the  of food products who would set purity and  above everything else in their preparation.\n"
  },
  {
    author: "Elite theory",
    quote:
      " indicates that economic elites and organized groups representing business interests have substantial independent impacts on U.S. government policy, while average citizens and mass-based interest groups have little or no independent influence. The results provide substantial support for theories of Economic-Elite Domination and for theories of Biased Pluralism, but not for theories of Majoritarian Electoral Democracy or Majoritarian Pluralism.\n"
  },
  {
    author: "Halo 3",
    quote:
      "How could I have known the Parasite would follow?! Undoubtedly this is the Heretics' doing. A final, bitter curse. Clear evidence of treachery long hidden. So far are we along the path, that I must strain to hear the clumsy patter of their feet. Know this my brothers: They may foul the way with their charred and broken bones, but they will not stop the Journey."
  },
  {
    author: "Joan Maragall",
    quote:
      "Come in, enter, the door is wide open! It is you yourselves who have opened it with the fire and iron of your hatred:[-] By destroying this church, you have restored the Church, the Church that was founded for you, the poor, the oppressed , the desperate...it is you, with your poverty, your rebellion and your despair, who have rammed down the door, it is you who have breached her stout and solid walls, and you who have re-conquered her. Fire has built, blasphemy has purified, hatred of Christ has returned Christ to his house"
  },
  {
    author: "Peter Sellars",
    quote:
      "I think of the classical world as a cancer patient or an AIDS patient. You know you have a limited life span. The question you now might want to ask is what would be the most important things to do now with your remaining years. I would like to think that that type of prioritizing could happen with museums, symphony orchestras, opera companies. Things really are urgent right now, and what we're doing somehow has to matter, has to make a contribution.\n"
  },
  {
    author: "Rik Mayall",
    quote:
      "I was brought up to be a good boy and proud of myself so I suppress all the things about me that are bad"
  },
  {
    author: "The Pyramid (film)",
    quote: " They ended up imprisoning their own god!"
  },
  {
    author: "Human penis",
    quote:
      "He mounted and reclined on the nearer side, his swollen penis harder than horn, and meanwhile pulling up the bottom edge of the garment; there he met legs that bristled with thick rough hair.\n"
  },
  {
    author: "Junebug",
    quote:
      "All I really want is for Johnny to love me like he did in High School."
  },
  {
    author: "Paranormal Activity 2",
    quote:
      "We just can't let this affect us that much. If we do that, the terrorists win."
  },
  { author: "Godzilla (1998 film)", quote: ' It\'s "Tatopolous!"' },
  {
    author: "Solitude",
    quote:
      "While God created Adam, who was alone, He said, 'It is not good for man to be alone. He also created a woman, from the earth, as He had created Adam himself, and called her Lilith. Adam and Lilith immediately began to fight. She said, 'I will not lie below,' and he said, 'I will not lie beneath you, but only on top. For you are fit only to be in the bottom position, while I am to be the superior one.' Lilith responded, 'We are equal to each other inasmuch as we were both created from the earth.' But they would not listen to one another. When Lilith saw this, she pronounced the Ineffable Name and flew away into the air.\n"
  },
  {
    author: "The History of India, as Told by Its Own Historians",
    quote:
      "The few glimpses we have, even among the short Extracts in this single volume, of Hind�s slain for disputing with Muhammadans, of general prohibitions against processions, worship, and ablutions, and of other intolerant measures, of idols mutilated, of temples razed, of forcible conversions and marriages, of proscriptions and confiscations, of murders and massacres, and of the sensuality and drunkenness of the tyrants who enjoined them, show us that this picture is not overcharged, and it is much to be regretted that we are left to draw it for ourselves from out the mass of ordinary occurrences, recorded by writers who seem to sympathize with no virtues, and to abhor no vices. Other nations exhibit the same atrocities, but they are at least spoken of, by some, with indignation and disgust.\n"
  },
  { author: "Dazed and Confused", quote: " Alright, alright, alright!" },
  {
    author: "Sanford I. Weill",
    quote:
      "It's the new management's job to look at the world as it changes, and how do we look at change and take advantage of change, rather than put our head in the ground.\n"
  },
  {
    author: "Duarte Barbosa",
    quote:
      "The enthusiastic soldiers, who, in the thirteenth and fourteenth centuries, spread the faith of Islam among the timid race of Bengal, made forcible conversions by the sword, and, penetrating the dense forests of the Eastern frontier, planted the crescent in the villages of Sylhet.  Tradition still preserves the names of Adam Shahid, Shah Halal Mujarrad, and Karmfarma Sahib, as three of the most successful of these enthusiasts.\n"
  },
  {
    author: "Mulayam Singh Yadav",
    quote:
      "Not even a bird shall be able to enter Ayodhya. ... We will crush them.\n"
  },
  {
    author: "L�on Rosenfeld",
    quote:
      "Each word is a singularity, or is connected with a singularity, in our way of understanding existence.\n"
  },
  {
    author: "Undercover Mosque",
    quote:
      "We love the people of  and we hate the people of kufr, we hate the kuffaar.\n"
  },
  {
    author: "Brian Leiter",
    quote:
      " involve a mistake about their origin: agents think that the ideology arose because of its responsiveness to  relevant considerations (e.g., evidence, reasons, etc.), when, in fact, it arose only because it was responsive to the interests of the dominant economic class in the existing economic system."
  },
  { author: "Pok�mon", quote: "TIME" },
  {
    author: "Xenocide",
    quote:
      "Every day all people judge all other people. The question is whether we judge wisely."
  },
  {
    author: "Ernst Hanfstaengl",
    quote: "Tell him the Reichstag is burning.\n"
  },
  {
    author: "The Henpecked Duck",
    quote:
      "Observe closely. Nothing up here...  ...nothing up here...  ...and nothing up here. "
  },
  {
    author: "Charles Seymour Robinson",
    quote:
      '"No man can come to Christ except the Father draw him." If he comes asking, that proves he comes drawn.\n'
  },
  {
    author: "Super Metroid",
    quote:
      "When Samus made her way to the research facility, she found the building in ruins and the Metroid larva was nowhere to be found. Out from the darkness came a group of Zebesian space pirates and their leader, Ridley, who had the Metroid larva in tow. The pirates fled to a rebuilt planet Zebes and Samus followed them, resolving to finish them off and save the hatchling.\n"
  },
  {
    author: "Ellen Sturgis Hooper",
    quote:
      "I slept, and dreamed that life was Beauty;I woke, and found that life was Duty.Was thy dream then a shadowy lie?Toil on, poor heart, unceasingly;And thou shalt find thy dream to beA truth and noonday light to thee.\n"
  },
  {
    author: "The Quatermass Xperiment",
    quote: "There's no room for personal feelings in science, Judith!"
  },
  {
    author: "Richard Wilbur",
    quote: "the spirit's right  Oasis, light incarnate."
  },
  {
    author: "Hammurabi",
    quote:
      "If any one owe a debt for a loan, and a storm prostrates the , or the harvest fail, or the grain does not grow for lack of water; in that year he need not give his  any grain, he washes his debt-tablet in water and pays no rent for this year.\n"
  },
  {
    author: "Coach Carter",
    quote:
      " You really need to consider the message you're sending these boys by ending the lockout. It's the same message that we as a culture send to our professional athletes; and that is that they are above the law. If these boys cannot honor the simple rules of a basketball contract, how long do you think it will be before they're out there breaking the law? I played ball here at Richmond High 30 years ago. It was the same thing then; some of my teammates went to prison, some of them even ended up dead. If you vote to end the lockout, you won't have to terminate me; I'll quit."
  },
  {
    author: "The Last Starfighter",
    quote:
      " I'm sorry, it was an accident. I didn't mean to step on your, uh, whatever that is."
  },
  {
    author: "Geostorm",
    quote:
      "This was my life's work, Max. You know, they said it was impossible, but we pulled it off. And it worked perfectly, without failing, day after day, year after year, so what do people do with it? Turn it into a gun."
  },
  {
    author: "John DeWitt",
    quote:
      "No free government under Heaven, with a well disciplined militia was ever yet subdued by mercenary troups.\n"
  },
  {
    author: "Thomas Cole",
    quote:
      "It has not been in vain: the good, the enlightened of all ages and nations have found pleasure and consolation in the beauty of the rural earth."
  },
  {
    author: "Philip Birnbaum",
    quote:
      "The moon, appearing every month in several phases, is symbolic of the Jewish people whose history has assumed a variety of phases.  Like the moon, they reappear aftern being eclipsed.\n"
  },
  {
    author: "Alex Kozinski",
    quote:
      "Just to prove that even the silliest idea can be pursued to its illogical conclusion, Legal Realism spawned Critical Legal Studies.\n"
  },
  {
    author: "1915 (film)",
    quote: "100 Years After The Armenian Genocide You Can't Escape The Past"
  },
  {
    author: "Alan Grayson",
    quote:
      " is a has-been hypocrite loser, who craves attention. His right-wing lunacy sounds like , extolling the virtues of . Limbaugh actually was more lucid when he was a drug addict. If America ever did 1% of what he wanted us to do, then we'd all need pain killers.\n"
  },
  {
    author: "Robert Stanley Weir",
    quote:
      "God keep our land glorious and free!  O Canada, we stand on guard for thee.  O Canada, we stand on guard for thee."
  },
  {
    author: "A. Philip Randolph",
    quote:
      "If the Church, white or black, is to express the true philosophy of Jesus Christ, Himself a worker, it will not lend itself to the creed of oppressive capitalism which would deny to the servant his just hire.\n"
  },
  {
    author: "Ip Man 2",
    quote:
      "I didn't come here today to prove which is better, Chinese or Western boxing. All people have different status in life, I don't believe that one person's integrity is worth more than the others. I hope that we can start to respect each other."
  },
  {
    author: "John Anderson (Australian politician)",
    quote:
      "They (the Greens) are a home for people who in the 1950s would have joined the Communist Party. They are watermelons many of them - green on the outside and very, very, very red on the inside.\n"
  },
  {
    author: "Val Logsdon Fitch",
    quote:
      "But mainly I learned, in approaching the measurement of new phenomena, not just to consider using existing apparatus but to allow the mind to wander freely and invent new ways of doing the job."
  },
  {
    author: "The Sting",
    quote: "No sense being a grifter if its the same as bein' a citizen."
  },
  {
    author: "Illinois",
    quote:
      "There was an old woman in Illinois who missed some of her chickens, and couldn't imagine what had become of them. Someone suggested that they had been carried off by a skunk; so she told her husband he must sit up that night and shoot the 'critter.' The old man sat up all night, and next morning came in with two pet rabbits. 'Thar,' said he, 'your chickens are all safe; thar's two of them skunks I killed!' 'Them ain't skunks,' said the old woman; them's my pet rabbits; you allers was a fool!' 'Well, then,' returned the old man, 'if them ain't skunks I don't know a skunk when I sees it.'\n"
  },
  {
    author: "John Lydon",
    quote:
      "It�s a record that I still can play to this day, and still hear new things."
  },
  { author: "Ring Lardner", quote: " (1920), " },
  {
    author: "A Very Harold & Kumar 3D Christmas",
    quote:
      "Koreans have killed his mother and now his tree. Christmas is ruined."
  },
  { author: "Anita Harding", quote: "At least I won't have to buy .\n" },
  { author: "Irving Chernev", quote: "Don't fiddle while Byrne roams!\n" },
  {
    author: "C. A. R. Hoare",
    quote:
      "There is nothing a mere scientist can say that will stand against the flood of a hundred million dollars. But there is one quality that cannot be purchased in this way � and that is reliability. The price of reliability is the pursuit of the utmost simplicity. It is a price which the very rich find most hard to pay."
  },
  {
    author: "Paul Otellini",
    quote:
      "The best of Intel computing is coming to smartphones. Our efforts with Lenovo and Motorola Mobility will help to establish Intel processors in smartphones and provide a solid foundation from which to build in 2012 and into the future.\n"
  },
  { author: "Howard Carter", quote: "everywhere the glint of gold" },
  {
    author: "Anthony Stewart Head",
    quote:
      "And to get that much talent in the show�and to keep it constant and consistent�I think is a remarkable feat.\n"
  },
  {
    author: "Julia Roberts",
    quote:
      'The first time I felt I was famous was when I went to the movies with my mom. I had gone to the loo, and someone in the bathroom said in a very loud voice, "Girl in stall No. 1 were you in "Mystic Pizza?" I paused and I said, yeah that was me.\n'
  },
  {
    author: "Barry McCaffrey",
    quote:
      "The situation is perilous, uncertain, and extreme � but far from hopeless.  are a rock. This is the most competent and brilliantly led military in a tactical and operational sense that we have ever fielded.\n"
  },
  {
    author: "Sofia Rotaru",
    quote:
      "20.02.94, Kyiv, 18:15 a boy from the crowd:- Sofia Mihailovna, how many languages do you speak?"
  },
  {
    author: "William Ernest Henley",
    quote:
      "You played and sang a snatch of song,A song that all-too well we knew;But whither had flown the ancient wrong;And was it really I and you?O, since the end of life's to liveAnd pay in pence the common debt,What should it cost us to forgiveWhose daily task is to forget?\n"
  },
  {
    author: "Langlands program",
    quote:
      "The functoriality conjecture is at the heart of the Langlands program and will undoubtedly remain as a challenge to number theorists for many decades to come. Shortly after formulating his program, however, Langlands proposed to test it in two interdependent settings.  The first was the framework of , already understood by  as a natural setting for a non-abelian generalization of the Shimura- theory of complex multiplication. The second was the phenomenon of endoscopy, which can be seen alternatively as a classification of the  to the stabilization of the trace formula or as an  to prove the functoriality conjecture in some of the most interesting cases. After three decades of research, much of it by Langlands and his associates, these two closely related experiments are coming to a successful close, at least for classical groups, thanks in large part to the recent proof of the so-called  by , , and especially .\n"
  },
  {
    author: "Worry",
    quote:
      "Anxious care rests upon a basis of heathen worldly-mindedness and of heathen misunderstanding of the character of God.\n"
  },
  {
    author: "Mirjana Markovic",
    quote:
      "In one of his many public statements, the leader of the Bosnian Serbs, Montenegrin , said the Serbs in the past period, when everyone was on their side, had been subjected to \"genocidal extermination\" whereas now, over the last year, when so many are against them, they are suffering the least. Of all the innumerable absurdities and untruths that have been uttered, this statement truly takes the cake. For more than forty years  was inhabited by Bosnians, and we did not distinguish between Serbs, Muslim, and Croats, or at least such distinctions were not paramount in their mutual relations. Throughout that period, to the best of the Yugoslav and world public's knowledge, there were no detenction camps for Serbs in Bosnia, no brothels for Serbs women, no Serbian children had their throat cut. (...) But according to Karadzic, the Serbs were somehow unhappy then. And now, in war, with so many dead, (...) now, according to their leader, the time has come when they are suffering the least. (...) Ethnically pure states are an impossibility in today's world, and it is ridiculous to try to create and maintain such a state, even when there is just one nation.\n"
  },
  {
    author: "Harmeet Dhillon",
    quote:
      'We see the same lack of critical thinking and inconsistency in our privacy with regard to government spying and Fourth Amendment and search and seizure issues. There are a number of issues where Americans � and I have to say conservatives � are like sheep, and they�re sheep being led to the slaughter without critically examining what it is that the government is doing and what it is that their government is allowing big corporations that are "too big to fail" to do to us. This is no different than the mortgage crisis, and some other crises in our country where some companies are just too big to fail, and they have spread so much money in so many people�s pockets on both sides of the aisle that there�s nobody left to speak for the consumers.\n'
  },
  {
    author: "Neil Simon",
    quote:
      "There are two million interesting people in New York and only seventy-eight in Los Angeles.\n"
  },
  { author: "August 16", quote: "2  05:40, 12 August 2009 (UTC)" },
  {
    author: "Subcomandante Marcos",
    quote:
      "La libertad es como la ma�ana. Hay quienes esperan dormidos a que llegue, pero hay quienes desvelan y caminan la noche para alcanzarla.\n"
  },
  {
    author: "Beau Geste (1939 film)",
    quote:
      " It looks like a piece of sky that has become solid, with sunlight imprisoned in it. Cold sunlight, cold as the unhappiness it has brought so many people."
  },
  {
    author: "China Mi�ville",
    quote:
      "We have watched mutant creatures crawl from sewers into cold flat starlight and whisper shyly to each other, drawing maps and messages in faecal mud.  I have sat with the wind at my side and seen cruel things, wicked things.  My scars and bonestubs itch. I am forgetting the weight, the sweep, the motion of wings. If I were not garuda I would pray. But I will not obeise myself before arrogant spirits.\n"
  },
  {
    author: "Austin Lounge Lizards",
    quote: "If I never had existed... would you still remember me?"
  },
  {
    author: "Surrealism",
    quote:
      "The more I look at most of the art movements, it's all occultism, when you get down to it. The  were openly talking about being magicians.\n"
  },
  {
    author: "Henri Michaux",
    quote:
      "A man who knows neither how to travel nor how to keep a journal has put together this travel journal. But at the moment of signing he is suddenly afraid. So he casts the first stone. Here.\n"
  },
  {
    author: "John Derbyshire",
    quote:
      "Unbelievers may think - all right, we do think - Christianity is only slightly less nutty than Islam; but Christianity is ours. We've got along with it for several centuries; and the relationship between Western unbelievers and Western Christians, if not always polite, is stable and comfortable. Can we fit Islam in like that?"
  },
  {
    author: "Lu Jiuyuan",
    quote:
      "Even if the Heaven and Earth were destroyed, the Universal Reason would still be there.\n"
  },
  { author: "Thomas Lipton", quote: "The World's best loser\n" },
  { author: "May 7", quote: "2  00:56, 6 May 2009 (UTC)" },
  {
    author: "A-Haunting We Will Go (1942 film)",
    quote: " Well, here's another nice predicament you've gotten me into."
  },
  {
    author: "Jean de Florette",
    quote:
      "I'll never sell the house where my mother was born, and where I hope to live forever until I die as a rich man! We can get by quite well on four thousand francs! I'll buy a mule, a load of miner's tools, and some dynamite to blast this damn rock! In a year I'll pay off the mortgage, and we'll be set!"
  },
  {
    author: "N.T. Wright",
    quote:
      'Our task as image-bearing, God-loving, Christ-shaped, Spirit-filled Christians, following Christ and shaping our world, is to announce redemption to a world that has discovered its fallenness, to announce healing to a world that has discovered its brokenness, to proclaim love and trust to a world that knows only exploitation, fear and suspicion...The gospel of Jesus points us and indeed urges us to be at the leading edge of the whole culture, articulating in story and music and art and philosophy and education and poetry and politics and theology and even--heaven help us--Biblical studies, a worldview that will mount the historically-rooted Christian challenge to both modernity and postmodernity, leading the way...with joy and humor and gentleness and good judgment and true wisdom. I believe if we face the question, "if not now, then when?" if we are grasped by this vision we may also hear the question, "if not us, then who?" And if the gospel of Jesus is not the key to this task, then what is?'
  },
  {
    author: "A Very Harold & Kumar 3D Christmas",
    quote:
      "Koreans have killed his mother and now his tree. Christmas is ruined."
  },
  {
    author: "Observe and Report",
    quote:
      "Sit the fuck down do you hear me you sit the fuck down. Don't fucking talk back to me. That's what the fuck I thought you little asshole."
  },
  {
    author: "Nudity",
    quote:
      "I honestly don't understand the big fuss made over nudity and sex in films. It's silly. On TV, the children can watch people murdering each other, which is a very unnatural thing, but they can't watch two people in the very natural process of making love. Now, really, that doesn't make any sense, does it?\n"
  },
  {
    author: "Harold Lloyd",
    quote:
      "I used old comic clothes stuff in the early days. I had the big shoes, I had the tight clothes, in fact I played several different characters. I played one called Willie Work; he used to have wide shoulders, a little cat mustache, a high hat. Another one was called Lonesome Luke, and his clothes were tight with a little funny hat; he had a funny little mustache. But when I adopted the glasses, it more or less put me in a different category because I became a human being. He was a kid that you would meet next door, across the street, but at the same time I could still do all the crazy things that we did before, but you believed them. They were natural and the romance could be believable.\n"
  },
  {
    author: "Muhammad Ilyas Qadri",
    quote: "I must strive to reform myself and people of the entire world."
  },
  {
    author: "Beno�t Minisini",
    quote:
      '"When you are doing something, you have against you every people doing the same thing, every people doing the opposite thing, and the very large majority of people doing nothing."\n'
  },
  {
    author: "John Cleveland",
    quote:
      "Like an ambassador that beds a queenWith the nice caution of a sword between.\n"
  },
  {
    author: "Dan le Sac Vs Scroobius Pip",
    quote:
      "Thou shalt not put musicians and recording artists on ridiculous pedestals, no matter how great they are or were."
  },
  {
    author: "The Two Jakes",
    quote:
      "You can follow the action, which gets you good pictures. You can follow your instincts, which'll probably get you in trouble. Or, you can follow the money, which nine times out of ten will get you closer to the truth."
  },
  {
    author: "Cinderella (2015 film)",
    quote:
      " Just because it's what's done doesn't mean it's what should be done."
  },
  {
    author: "Henry Way Kendall",
    quote:
      "While science and technology play critical roles in sustaining modern civilization, they are not part of our culture in the sense that they are not commonly studied or well comprehended. Neither the potential nor the limitations of science are understood so that what can be achieved and what is beyond reach are not comprehended. The line between science and magic becomes blurred so that public judgments on technical issues can be erratic or badly flawed. It frequently appears that some people will believe almost anything. Thus judgments can be manipulated or warped by unscrupulous groups. Distortions or outright falsehoods can come to be accepted as fact.\n"
  },
  {
    author: "S. H. Raza",
    quote:
      "I didn't become a French painter or a European one. I remained an Indian painter through the years. That was always in my heart and I am very glad that I was able to come back here again.\""
  },
  {
    author: "Susannah Constantine",
    quote:
      "Generally speaking Scottish women are pretty good. Look at  and  � you've got two fabulously well-dressed women in different ways."
  },
  {
    author: "Brigitte Gabriel",
    quote:
      "In , there is no difference between the state and the religion.  The religion  the state, the state is the religion.\n"
  },
  {
    author: "Oswald Pohl",
    quote:
      "What can I say? If I knew in 1934 what I know now, I would have remained in the navy. I didn't know that this was going to happen and I didn't know that Germany was going to lose the war and be in ruins.\n"
  },
  {
    author: "4D Man",
    quote: "Look, he's not a magician. He's not invisible. He can't fly."
  },
  {
    author: "Existence",
    quote:
      "The goal of   with , , and  for all;  for the interdependent web of all existence of which we are a part.\n"
  },
  {
    author: "Ken Livingstone",
    quote:
      "Finally, I wish to speak, through you, directly to those who came to London today to take life. I know that you personally do not fear to give your own life in exchange for taking others � that is why you are so dangerous. But I know you do fear that you may fail in your long-term objective to destroy our free society, and I can show you why you will fail. In the days that follow look at our airports, look at our sea ports and look at our railway stations, and even after your cowardly attack, you will see that people from the rest of Britain, people from around the world will arrive in London to become Londoners and to fulfil their dreams and achieve their potential.They choose to come to London, as so many have come before because they come to be free, they come to live the life they choose, they come to be able to be themselves. They flee you because you tell them how they should live. They don't want that and nothing you do, however many of us you kill, will stop that flight to our cities where freedom is strong and where people can live in harmony with one another. Whatever you do, however many you kill, you  fail."
  },
  { author: "Shadow Warrior", quote: '"Oh, better zip fly."' },
  {
    author: "All Dogs Go to Heaven 2",
    quote: "Maybe you  do something besides making a nuisance of yourself."
  },
  {
    author: "Vernon Corea",
    quote:
      "I want the program to be very open and develop in style as time goes on. But I am also interested in the positive aspects of Asian family life and other Asian qualities, although overall, my style is very informal.\n"
  },
  {
    author: "Abd al-Karim Qasim",
    quote:
      "We are in a new era. The Almighty has destined us to serve this country and helped to succeed in our Revolution, which aimed at destroying injustice and tyranny, from which we suffered for many long years."
  },
  {
    author: "Joan the Woman",
    quote:
      "Englishman, there is room in each heart but for one love - mine is for France!"
  },
  {
    author: "Anders Chydenius",
    quote: "The exercise of one coercion always makes another inevitable.\n"
  },
  {
    author: "Modernity",
    quote:
      "That teaching of modern metaphysics ... exhorts man to feel comparatively little esteem for the truly thinking portion of himself and to honor the active and willing part of himself with all his devotion.\n"
  },
  {
    author: "Xavier Leroy",
    quote:
      "You see, the Caml garbage collector is like a god from ancient mythology: mighty, but very irritable.  If you mess with it, it'll make you suffer in surprising ways.\n"
  },
  {
    author: "Steven J. Rosen",
    quote:
      "The search for  is natural, because it is the constitutional position of the spirit soul to be eternally joyful. But our search for happiness in the external, physical world is always frustrated; we look everywhere, never realizing permanent pleasure. Temporary, relative pleasure is certainly here to be had, but it is always accompanied by its counterpart: pain. Those who are wise, then, look within, learning how to pursue not only the relative pleasure of this world but, more to the point, they focus on the higher pleasure of the spiritual realm.\n"
  },
  {
    author: "Matsushita Konosuke",
    quote:
      "I underlined my conviction that running a business and managing an enterprise were not merely a private concern but a public endeavor.\n"
  },
  {
    author: "Unitarian Universalism",
    quote:
      "What do I believe? As an American I believe in generosity, in liberty, in the rights of man."
  },
  {
    author: "Victoria of the United Kingdom",
    quote:
      "Since it has pleased Providence to place me in this station, I shall do my utmost to fulfil my duty towards my country;"
  },
  {
    author: "It Conquered the World",
    quote:
      " He learned almost too late that man is a feeling creature... and because of it, the greatest in the universe. He learned too late for himself that men have to find their own way, to make their own mistakes. There can't be any gift of perfection from outside ourselves. And when men seek such perfection... they find only death... fire... loss... disillusionment... the end of everything that's gone forward. Men have always sought an end to the toil and misery, but it can't be given, it has to be achieved. There is hope, but it has to come from inside, from Man himself."
  },
  {
    author: "William Faulkner",
    quote: "The past is never dead. It's not even past."
  },
  { author: "National Treasure: Book of Secrets", quote: "Tea time, chaps!" },
  {
    author: "Lis Wiehl",
    quote:
      "Fire was everything Joey wanted to be. Exciting. Dangerous. Beautiful. Destructive. And yet he controlled it. Other people were too boring, too afraid to do what he did.\n"
  },
  {
    author: "Francis Thompson",
    quote:
      "The drift of pinions, would we hearken,Beats at our own clay-shuttered doors.\n"
  },
  {
    author: "Thessaloniki",
    quote:
      "THESSALONIKI (Salonika) Greece's second city is named after a daughter of , Thessaloniki, who was married to Kassandros. This shortlived monarch was without descendants, so he gave Thessaloniki's name to the capital  (founded 315 B.C.) to remind posterity of his family's royal descent.\n"
  },
  {
    author: "Suffering",
    quote:
      "For  is called omnipotent on account of His doing what He wills, not on account of His suffering what He wills not; for if that should befall Him, He would by no means be omnipotent. Wherefore, He cannot do some things for the very reason that He is omnipotent.\n"
  },
  {
    author: "Drive (2011 film)",
    quote:
      "If I drive for you, you get your money. You tell me where we start, where we're going, where we're going afterwards. I give you five minutes when we get there. Anything happens in that five minutes and I'm yours. No matter what. Anything a minute on either side of that and you're on your own. I don't sit in while you're running it down. I don't carry a gun. I drive."
  },
  {
    author: "Arthur Ashe",
    quote:
      "I may not be walking with you all the way, or even much of the way, as I walk with you now. Don�t be angry with me if I am not there in person, alive and well, when you need me. I would like nothing more than to be with you always. Do not feel sorry for me if I am gone. When we were together, I loved you deeply and you gave me so much happiness I can never repay you. Camera, wherever I am when you feel sick at heart and weary of life, or when you stumble and fall and don�t know if you can get up again, think of me. I will be watching and smiling and cheering you on.\n"
  },
  {
    author: "Ferm�n Lasu�n",
    quote:
      "It happens that they put on a heathen and abominable dance or  if the Christian who is present refuses to participate in that vile diversion, they mock him and laugh at him and persecute him until he gives in.\n"
  },
  {
    author: "Art Clokey",
    quote:
      "There's none of this wisecracking and cynicism that you see in some of the other cartoons. He's supposed to be a role model for kids. He cares about other people.\n"
  },
  {
    author: "Constitutional court",
    quote:
      "In a community, the constitution of which provides for a legislator and a law, it is the concern of the legislator and of the laws given by him to ascertain the mediation through calculable and attainable rules and to prevent the terror of the direct and automatic enactment of values. That is a very complicated problem, indeed. One may understand why law-givers all along world history, from Lycurgus to Solon and Napoleon have been turned into mythical figures. In the highly industrialized nations of our times, with their provisions for the organization of the lives of the masses, the mediation would give rise to a new problem. Under the circumstances, there is no room for the law-giver, and so there is no substitute for him. At best, there is only a makeshift which sooner or later is turned into a scapegoat, due to the unthankful role it was given to play.A jurist who interferes, and wants to become the direct executor of values should know what he is doing. He must recall the origins and the structure of values and dare not treat lightly the problem of the tyranny of values and of the unmediated enactment of values. He must attain a clear understanding of the modern philosophy of values before he decides to become valuator, revaluator, upgrader of values. As a value-carrier and value-sensitive person, he must do that before he goes on to proclaim the positings of a subjective, as well as objective, rank-order of values in the form of pronouncements with the force of law.\n"
  },
  {
    author: "Rosanna Eleanor Leprohon",
    quote:
      "Thy soft-breathed hopes with magic mightHave chased from my soul the shades of night\n"
  },
  {
    author: "Andrew Taylor Still",
    quote:
      "Let us not be governed today by what we did yesterday, nor tomorrow by what we do today, for day by day we must show progress.\n"
  },
  {
    author: "Gerd Theissen",
    quote:
      "Over this period many issues have been clarified. Today we know very much more about these  from a  in the  than ever before. Nevertheless, they risk being forgotten - partly because the link with the Christian history which they have influenced has been broken, partly because many of our educated contemporaries come from other religious and cultural traditions, and partly because the results of historical-critical research are so complex that many people are deterred from trying to grasp them.\n"
  },
  {
    author: "Burt Bacharach",
    quote:
      "Somewhere there's a happy harborfar from the storm.Out where the sun shines there is someoneI'm meant to adore,and I know the day I find her,I'll smile once more.\n"
  },
  {
    author: "Julia Gillard",
    quote:
      "I thought that, that side of [Rudd's] character � the very anxious, 'I must be in the media, I must shine in Parliament today' � would fall away when he became Labor leader and there was no more fighting for the spotlight; the spotlight was well and truly on him."
  },
  {
    author: "Architecture",
    quote:
      "Grandeur * * * consists in form, and not in size: and to the eye of the philosopher, the curve drawn on a paper two inches long, is just as magnificent, just as symbolic of divine mysteries and melodies, as when embodied in the span of some cathedral roof.\n"
  },
  {
    author: "Jean de Florette",
    quote:
      "I'll never sell the house where my mother was born, and where I hope to live forever until I die as a rich man! We can get by quite well on four thousand francs! I'll buy a mule, a load of miner's tools, and some dynamite to blast this damn rock! In a year I'll pay off the mortgage, and we'll be set!"
  },
  {
    author: "N.T. Wright",
    quote:
      'Our task as image-bearing, God-loving, Christ-shaped, Spirit-filled Christians, following Christ and shaping our world, is to announce redemption to a world that has discovered its fallenness, to announce healing to a world that has discovered its brokenness, to proclaim love and trust to a world that knows only exploitation, fear and suspicion...The gospel of Jesus points us and indeed urges us to be at the leading edge of the whole culture, articulating in story and music and art and philosophy and education and poetry and politics and theology and even--heaven help us--Biblical studies, a worldview that will mount the historically-rooted Christian challenge to both modernity and postmodernity, leading the way...with joy and humor and gentleness and good judgment and true wisdom. I believe if we face the question, "if not now, then when?" if we are grasped by this vision we may also hear the question, "if not us, then who?" And if the gospel of Jesus is not the key to this task, then what is?'
  },
  {
    author: "A Very Harold & Kumar 3D Christmas",
    quote:
      "Koreans have killed his mother and now his tree. Christmas is ruined."
  },
  {
    author: "Observe and Report",
    quote:
      "Sit the fuck down do you hear me you sit the fuck down. Don't fucking talk back to me. That's what the fuck I thought you little asshole."
  },
  {
    author: "Nudity",
    quote:
      "I honestly don't understand the big fuss made over nudity and sex in films. It's silly. On TV, the children can watch people murdering each other, which is a very unnatural thing, but they can't watch two people in the very natural process of making love. Now, really, that doesn't make any sense, does it?\n"
  },
  {
    author: "Harold Lloyd",
    quote:
      "I used old comic clothes stuff in the early days. I had the big shoes, I had the tight clothes, in fact I played several different characters. I played one called Willie Work; he used to have wide shoulders, a little cat mustache, a high hat. Another one was called Lonesome Luke, and his clothes were tight with a little funny hat; he had a funny little mustache. But when I adopted the glasses, it more or less put me in a different category because I became a human being. He was a kid that you would meet next door, across the street, but at the same time I could still do all the crazy things that we did before, but you believed them. They were natural and the romance could be believable.\n"
  },
  {
    author: "Muhammad Ilyas Qadri",
    quote: "I must strive to reform myself and people of the entire world."
  },
  {
    author: "Beno�t Minisini",
    quote:
      '"When you are doing something, you have against you every people doing the same thing, every people doing the opposite thing, and the very large majority of people doing nothing."\n'
  },
  {
    author: "John Cleveland",
    quote:
      "Like an ambassador that beds a queenWith the nice caution of a sword between.\n"
  },
  {
    author: "Dan le Sac Vs Scroobius Pip",
    quote:
      "Thou shalt not put musicians and recording artists on ridiculous pedestals, no matter how great they are or were."
  },
  {
    author: "The Two Jakes",
    quote:
      "You can follow the action, which gets you good pictures. You can follow your instincts, which'll probably get you in trouble. Or, you can follow the money, which nine times out of ten will get you closer to the truth."
  },
  {
    author: "Cinderella (2015 film)",
    quote:
      " Just because it's what's done doesn't mean it's what should be done."
  },
  {
    author: "Henry Way Kendall",
    quote:
      "While science and technology play critical roles in sustaining modern civilization, they are not part of our culture in the sense that they are not commonly studied or well comprehended. Neither the potential nor the limitations of science are understood so that what can be achieved and what is beyond reach are not comprehended. The line between science and magic becomes blurred so that public judgments on technical issues can be erratic or badly flawed. It frequently appears that some people will believe almost anything. Thus judgments can be manipulated or warped by unscrupulous groups. Distortions or outright falsehoods can come to be accepted as fact.\n"
  },
  {
    author: "S. H. Raza",
    quote:
      "I didn't become a French painter or a European one. I remained an Indian painter through the years. That was always in my heart and I am very glad that I was able to come back here again.\""
  },
  {
    author: "Susannah Constantine",
    quote:
      "Generally speaking Scottish women are pretty good. Look at  and  � you've got two fabulously well-dressed women in different ways."
  },
  {
    author: "Brigitte Gabriel",
    quote:
      "In , there is no difference between the state and the religion.  The religion  the state, the state is the religion.\n"
  },
  {
    author: "Oswald Pohl",
    quote:
      "What can I say? If I knew in 1934 what I know now, I would have remained in the navy. I didn't know that this was going to happen and I didn't know that Germany was going to lose the war and be in ruins.\n"
  },
  {
    author: "4D Man",
    quote: "Look, he's not a magician. He's not invisible. He can't fly."
  },
  {
    author: "Existence",
    quote:
      "The goal of   with , , and  for all;  for the interdependent web of all existence of which we are a part.\n"
  },
  {
    author: "Ken Livingstone",
    quote:
      "Finally, I wish to speak, through you, directly to those who came to London today to take life. I know that you personally do not fear to give your own life in exchange for taking others � that is why you are so dangerous. But I know you do fear that you may fail in your long-term objective to destroy our free society, and I can show you why you will fail. In the days that follow look at our airports, look at our sea ports and look at our railway stations, and even after your cowardly attack, you will see that people from the rest of Britain, people from around the world will arrive in London to become Londoners and to fulfil their dreams and achieve their potential.They choose to come to London, as so many have come before because they come to be free, they come to live the life they choose, they come to be able to be themselves. They flee you because you tell them how they should live. They don't want that and nothing you do, however many of us you kill, will stop that flight to our cities where freedom is strong and where people can live in harmony with one another. Whatever you do, however many you kill, you  fail."
  },
  { author: "Shadow Warrior", quote: '"Oh, better zip fly."' },
  {
    author: "All Dogs Go to Heaven 2",
    quote: "Maybe you  do something besides making a nuisance of yourself."
  },
  {
    author: "Vernon Corea",
    quote:
      "I want the program to be very open and develop in style as time goes on. But I am also interested in the positive aspects of Asian family life and other Asian qualities, although overall, my style is very informal.\n"
  },
  {
    author: "Abd al-Karim Qasim",
    quote:
      "We are in a new era. The Almighty has destined us to serve this country and helped to succeed in our Revolution, which aimed at destroying injustice and tyranny, from which we suffered for many long years."
  },
  {
    author: "Joan the Woman",
    quote:
      "Englishman, there is room in each heart but for one love - mine is for France!"
  },
  {
    author: "Anders Chydenius",
    quote: "The exercise of one coercion always makes another inevitable.\n"
  },
  {
    author: "Modernity",
    quote:
      "That teaching of modern metaphysics ... exhorts man to feel comparatively little esteem for the truly thinking portion of himself and to honor the active and willing part of himself with all his devotion.\n"
  },
  {
    author: "Xavier Leroy",
    quote:
      "You see, the Caml garbage collector is like a god from ancient mythology: mighty, but very irritable.  If you mess with it, it'll make you suffer in surprising ways.\n"
  },
  {
    author: "Steven J. Rosen",
    quote:
      "The search for  is natural, because it is the constitutional position of the spirit soul to be eternally joyful. But our search for happiness in the external, physical world is always frustrated; we look everywhere, never realizing permanent pleasure. Temporary, relative pleasure is certainly here to be had, but it is always accompanied by its counterpart: pain. Those who are wise, then, look within, learning how to pursue not only the relative pleasure of this world but, more to the point, they focus on the higher pleasure of the spiritual realm.\n"
  },
  {
    author: "Matsushita Konosuke",
    quote:
      "I underlined my conviction that running a business and managing an enterprise were not merely a private concern but a public endeavor.\n"
  },
  {
    author: "Unitarian Universalism",
    quote:
      "What do I believe? As an American I believe in generosity, in liberty, in the rights of man."
  },
  {
    author: "Victoria of the United Kingdom",
    quote:
      "Since it has pleased Providence to place me in this station, I shall do my utmost to fulfil my duty towards my country;"
  },
  {
    author: "It Conquered the World",
    quote:
      " He learned almost too late that man is a feeling creature... and because of it, the greatest in the universe. He learned too late for himself that men have to find their own way, to make their own mistakes. There can't be any gift of perfection from outside ourselves. And when men seek such perfection... they find only death... fire... loss... disillusionment... the end of everything that's gone forward. Men have always sought an end to the toil and misery, but it can't be given, it has to be achieved. There is hope, but it has to come from inside, from Man himself."
  },
  {
    author: "William Faulkner",
    quote: "The past is never dead. It's not even past."
  },
  { author: "National Treasure: Book of Secrets", quote: "Tea time, chaps!" },
  {
    author: "Lis Wiehl",
    quote:
      "Fire was everything Joey wanted to be. Exciting. Dangerous. Beautiful. Destructive. And yet he controlled it. Other people were too boring, too afraid to do what he did.\n"
  },
  {
    author: "Francis Thompson",
    quote:
      "The drift of pinions, would we hearken,Beats at our own clay-shuttered doors.\n"
  },
  {
    author: "Thessaloniki",
    quote:
      "THESSALONIKI (Salonika) Greece's second city is named after a daughter of , Thessaloniki, who was married to Kassandros. This shortlived monarch was without descendants, so he gave Thessaloniki's name to the capital  (founded 315 B.C.) to remind posterity of his family's royal descent.\n"
  },
  {
    author: "Suffering",
    quote:
      "For  is called omnipotent on account of His doing what He wills, not on account of His suffering what He wills not; for if that should befall Him, He would by no means be omnipotent. Wherefore, He cannot do some things for the very reason that He is omnipotent.\n"
  },
  {
    author: "Drive (2011 film)",
    quote:
      "If I drive for you, you get your money. You tell me where we start, where we're going, where we're going afterwards. I give you five minutes when we get there. Anything happens in that five minutes and I'm yours. No matter what. Anything a minute on either side of that and you're on your own. I don't sit in while you're running it down. I don't carry a gun. I drive."
  },
  {
    author: "Arthur Ashe",
    quote:
      "I may not be walking with you all the way, or even much of the way, as I walk with you now. Don�t be angry with me if I am not there in person, alive and well, when you need me. I would like nothing more than to be with you always. Do not feel sorry for me if I am gone. When we were together, I loved you deeply and you gave me so much happiness I can never repay you. Camera, wherever I am when you feel sick at heart and weary of life, or when you stumble and fall and don�t know if you can get up again, think of me. I will be watching and smiling and cheering you on.\n"
  },
  {
    author: "Ferm'n Lasu'n",
    quote:
      "It happens that they put on a heathen and abominable dance or  if the Christian who is present refuses to participate in that vile diversion, they mock him and laugh at him and persecute him until he gives in.\n"
  },
  {
    author: "Art Clokey",
    quote:
      "There's none of this wisecracking and cynicism that you see in some of the other cartoons. He's supposed to be a role model for kids. He cares about other people.\n"
  },
  {
    author: "Constitutional court",
    quote:
      "In a community, the constitution of which provides for a legislator and a law, it is the concern of the legislator and of the laws given by him to ascertain the mediation through calculable and attainable rules and to prevent the terror of the direct and automatic enactment of values. That is a very complicated problem, indeed. One may understand why law-givers all along world history, from Lycurgus to Solon and Napoleon have been turned into mythical figures. In the highly industrialized nations of our times, with their provisions for the organization of the lives of the masses, the mediation would give rise to a new problem. Under the circumstances, there is no room for the law-giver, and so there is no substitute for him. At best, there is only a makeshift which sooner or later is turned into a scapegoat, due to the unthankful role it was given to play.A jurist who interferes, and wants to become the direct executor of values should know what he is doing. He must recall the origins and the structure of values and dare not treat lightly the problem of the tyranny of values and of the unmediated enactment of values. He must attain a clear understanding of the modern philosophy of values before he decides to become valuator, revaluator, upgrader of values. As a value-carrier and value-sensitive person, he must do that before he goes on to proclaim the positings of a subjective, as well as objective, rank-order of values in the form of pronouncements with the force of law.\n"
  },
  {
    author: "Rosanna Eleanor Leprohon",
    quote:
      "Thy soft-breathed hopes with magic mightHave chased from my soul the shades of night\n"
  },
  {
    author: "Andrew Taylor Still",
    quote:
      "Let us not be governed today by what we did yesterday, nor tomorrow by what we do today, for day by day we must show progress.\n"
  },
  {
    author: "Gerd Theissen",
    quote:
      "Over this period many issues have been clarified. Today we know very much more about these  from a  in the  than ever before. Nevertheless, they risk being forgotten - partly because the link with the Christian history which they have influenced has been broken, partly because many of our educated contemporaries come from other religious and cultural traditions, and partly because the results of historical-critical research are so complex that many people are deterred from trying to grasp them.\n"
  },
  {
    author: "Burt Bacharach",
    quote:
      "Somewhere there's a happy harborfar from the storm.Out where the sun shines there is someoneI'm meant to adore,and I know the day I find her,I'll smile once more.\n"
  },
  {
    author: "Julia Gillard",
    quote:
      "I thought that, that side of [Rudd's] character � the very anxious, 'I must be in the media, I must shine in Parliament today' � would fall away when he became Labor leader and there was no more fighting for the spotlight; the spotlight was well and truly on him."
  },
  {
    author: "Architecture",
    quote:
      "Grandeur * * * consists in form, and not in size: and to the eye of the philosopher, the curve drawn on a paper two inches long, is just as magnificent, just as symbolic of divine mysteries and melodies, as when embodied in the span of some cathedral roof.\n"
  },
  {
    author: "Jean de Florette",
    quote:
      "I'll never sell the house where my mother was born, and where I hope to live forever until I die as a rich man! We can get by quite well on four thousand francs! I'll buy a mule, a load of miner's tools, and some dynamite to blast this damn rock! In a year I'll pay off the mortgage, and we'll be set!"
  },
  {
    author: "N.T. Wright",
    quote:
      'Our task as image-bearing, God-loving, Christ-shaped, Spirit-filled Christians, following Christ and shaping our world, is to announce redemption to a world that has discovered its fallenness, to announce healing to a world that has discovered its brokenness, to proclaim love and trust to a world that knows only exploitation, fear and suspicion...The gospel of Jesus points us and indeed urges us to be at the leading edge of the whole culture, articulating in story and music and art and philosophy and education and poetry and politics and theology and even--heaven help us--Biblical studies, a worldview that will mount the historically-rooted Christian challenge to both modernity and postmodernity, leading the way...with joy and humor and gentleness and good judgment and true wisdom. I believe if we face the question, "if not now, then when?" if we are grasped by this vision we may also hear the question, "if not us, then who?" And if the gospel of Jesus is not the key to this task, then what is?'
  },
  {
    author: "A Very Harold & Kumar 3D Christmas",
    quote:
      "Koreans have killed his mother and now his tree. Christmas is ruined."
  },
  {
    author: "Observe and Report",
    quote:
      "Sit the fuck down do you hear me you sit the fuck down. Don't fucking talk back to me. That's what the fuck I thought you little asshole."
  },
  {
    author: "Nudity",
    quote:
      "I honestly don't understand the big fuss made over nudity and sex in films. It's silly. On TV, the children can watch people murdering each other, which is a very unnatural thing, but they can't watch two people in the very natural process of making love. Now, really, that doesn't make any sense, does it?\n"
  },
  {
    author: "Harold Lloyd",
    quote:
      "I used old comic clothes stuff in the early days. I had the big shoes, I had the tight clothes, in fact I played several different characters. I played one called Willie Work; he used to have wide shoulders, a little cat mustache, a high hat. Another one was called Lonesome Luke, and his clothes were tight with a little funny hat; he had a funny little mustache. But when I adopted the glasses, it more or less put me in a different category because I became a human being. He was a kid that you would meet next door, across the street, but at the same time I could still do all the crazy things that we did before, but you believed them. They were natural and the romance could be believable.\n"
  },
  {
    author: "Muhammad Ilyas Qadri",
    quote: "I must strive to reform myself and people of the entire world."
  },
  {
    author: "Beno�t Minisini",
    quote:
      '"When you are doing something, you have against you every people doing the same thing, every people doing the opposite thing, and the very large majority of people doing nothing."\n'
  },
  {
    author: "John Cleveland",
    quote:
      "Like an ambassador that beds a queenWith the nice caution of a sword between.\n"
  },
  {
    author: "Dan le Sac Vs Scroobius Pip",
    quote:
      "Thou shalt not put musicians and recording artists on ridiculous pedestals, no matter how great they are or were."
  },
  {
    author: "The Two Jakes",
    quote:
      "You can follow the action, which gets you good pictures. You can follow your instincts, which'll probably get you in trouble. Or, you can follow the money, which nine times out of ten will get you closer to the truth."
  },
  {
    author: "Cinderella (2015 film)",
    quote:
      " Just because it's what's done doesn't mean it's what should be done."
  },
  {
    author: "Henry Way Kendall",
    quote:
      "While science and technology play critical roles in sustaining modern civilization, they are not part of our culture in the sense that they are not commonly studied or well comprehended. Neither the potential nor the limitations of science are understood so that what can be achieved and what is beyond reach are not comprehended. The line between science and magic becomes blurred so that public judgments on technical issues can be erratic or badly flawed. It frequently appears that some people will believe almost anything. Thus judgments can be manipulated or warped by unscrupulous groups. Distortions or outright falsehoods can come to be accepted as fact.\n"
  },
  {
    author: "S. H. Raza",
    quote:
      "I didn't become a French painter or a European one. I remained an Indian painter through the years. That was always in my heart and I am very glad that I was able to come back here again.\""
  },
  {
    author: "Susannah Constantine",
    quote:
      "Generally speaking Scottish women are pretty good. Look at  and  � you've got two fabulously well-dressed women in different ways."
  },
  {
    author: "Brigitte Gabriel",
    quote:
      "In , there is no difference between the state and the religion.  The religion  the state, the state is the religion.\n"
  },
  {
    author: "Oswald Pohl",
    quote:
      "What can I say? If I knew in 1934 what I know now, I would have remained in the navy. I didn't know that this was going to happen and I didn't know that Germany was going to lose the war and be in ruins.\n"
  },
  {
    author: "4D Man",
    quote: "Look, he's not a magician. He's not invisible. He can't fly."
  },
  {
    author: "Existence",
    quote:
      "The goal of   with , , and  for all;  for the interdependent web of all existence of which we are a part.\n"
  },
  {
    author: "Ken Livingstone",
    quote:
      "Finally, I wish to speak, through you, directly to those who came to London today to take life. I know that you personally do not fear to give your own life in exchange for taking others � that is why you are so dangerous. But I know you do fear that you may fail in your long-term objective to destroy our free society, and I can show you why you will fail. In the days that follow look at our airports, look at our sea ports and look at our railway stations, and even after your cowardly attack, you will see that people from the rest of Britain, people from around the world will arrive in London to become Londoners and to fulfil their dreams and achieve their potential.They choose to come to London, as so many have come before because they come to be free, they come to live the life they choose, they come to be able to be themselves. They flee you because you tell them how they should live. They don't want that and nothing you do, however many of us you kill, will stop that flight to our cities where freedom is strong and where people can live in harmony with one another. Whatever you do, however many you kill, you  fail."
  },
  { author: "Shadow Warrior", quote: '"Oh, better zip fly."' },
  {
    author: "All Dogs Go to Heaven 2",
    quote: "Maybe you  do something besides making a nuisance of yourself."
  },
  {
    author: "Vernon Corea",
    quote:
      "I want the program to be very open and develop in style as time goes on. But I am also interested in the positive aspects of Asian family life and other Asian qualities, although overall, my style is very informal.\n"
  },
  {
    author: "Abd al-Karim Qasim",
    quote:
      "We are in a new era. The Almighty has destined us to serve this country and helped to succeed in our Revolution, which aimed at destroying injustice and tyranny, from which we suffered for many long years."
  },
  {
    author: "Joan the Woman",
    quote:
      "Englishman, there is room in each heart but for one love - mine is for France!"
  },
  {
    author: "Anders Chydenius",
    quote: "The exercise of one coercion always makes another inevitable.\n"
  },
  {
    author: "Modernity",
    quote:
      "That teaching of modern metaphysics ... exhorts man to feel comparatively little esteem for the truly thinking portion of himself and to honor the active and willing part of himself with all his devotion.\n"
  },
  {
    author: "Xavier Leroy",
    quote:
      "You see, the Caml garbage collector is like a god from ancient mythology: mighty, but very irritable.  If you mess with it, it'll make you suffer in surprising ways.\n"
  },
  {
    author: "Steven J. Rosen",
    quote:
      "The search for  is natural, because it is the constitutional position of the spirit soul to be eternally joyful. But our search for happiness in the external, physical world is always frustrated; we look everywhere, never realizing permanent pleasure. Temporary, relative pleasure is certainly here to be had, but it is always accompanied by its counterpart: pain. Those who are wise, then, look within, learning how to pursue not only the relative pleasure of this world but, more to the point, they focus on the higher pleasure of the spiritual realm.\n"
  },
  {
    author: "Matsushita Konosuke",
    quote:
      "I underlined my conviction that running a business and managing an enterprise were not merely a private concern but a public endeavor.\n"
  },
  {
    author: "Unitarian Universalism",
    quote:
      "What do I believe? As an American I believe in generosity, in liberty, in the rights of man."
  },
  {
    author: "Victoria of the United Kingdom",
    quote:
      "Since it has pleased Providence to place me in this station, I shall do my utmost to fulfil my duty towards my country;"
  },
  {
    author: "It Conquered the World",
    quote:
      " He learned almost too late that man is a feeling creature... and because of it, the greatest in the universe. He learned too late for himself that men have to find their own way, to make their own mistakes. There can't be any gift of perfection from outside ourselves. And when men seek such perfection... they find only death... fire... loss... disillusionment... the end of everything that's gone forward. Men have always sought an end to the toil and misery, but it can't be given, it has to be achieved. There is hope, but it has to come from inside, from Man himself."
  },
  {
    author: "William Faulkner",
    quote: "The past is never dead. It's not even past."
  },
  { author: "National Treasure: Book of Secrets", quote: "Tea time, chaps!" },
  {
    author: "Lis Wiehl",
    quote:
      "Fire was everything Joey wanted to be. Exciting. Dangerous. Beautiful. Destructive. And yet he controlled it. Other people were too boring, too afraid to do what he did.\n"
  },
  {
    author: "Francis Thompson",
    quote:
      "The drift of pinions, would we hearken,Beats at our own clay-shuttered doors.\n"
  },
  {
    author: "Thessaloniki",
    quote:
      "THESSALONIKI (Salonika) Greece's second city is named after a daughter of , Thessaloniki, who was married to Kassandros. This shortlived monarch was without descendants, so he gave Thessaloniki's name to the capital  (founded 315 B.C.) to remind posterity of his family's royal descent.\n"
  },
  {
    author: "Suffering",
    quote:
      "For  is called omnipotent on account of His doing what He wills, not on account of His suffering what He wills not; for if that should befall Him, He would by no means be omnipotent. Wherefore, He cannot do some things for the very reason that He is omnipotent.\n"
  },
  {
    author: "Drive (2011 film)",
    quote:
      "If I drive for you, you get your money. You tell me where we start, where we're going, where we're going afterwards. I give you five minutes when we get there. Anything happens in that five minutes and I'm yours. No matter what. Anything a minute on either side of that and you're on your own. I don't sit in while you're running it down. I don't carry a gun. I drive."
  },
  {
    author: "Arthur Ashe",
    quote:
      "I may not be walking with you all the way, or even much of the way, as I walk with you now. Don�t be angry with me if I am not there in person, alive and well, when you need me. I would like nothing more than to be with you always. Do not feel sorry for me if I am gone. When we were together, I loved you deeply and you gave me so much happiness I can never repay you. Camera, wherever I am when you feel sick at heart and weary of life, or when you stumble and fall and don�t know if you can get up again, think of me. I will be watching and smiling and cheering you on.\n"
  },
  {
    author: "Ferm�n Lasu�n",
    quote:
      "It happens that they put on a heathen and abominable dance or  if the Christian who is present refuses to participate in that vile diversion, they mock him and laugh at him and persecute him until he gives in.\n"
  },
  {
    author: "Art Clokey",
    quote:
      "There's none of this wisecracking and cynicism that you see in some of the other cartoons. He's supposed to be a role model for kids. He cares about other people.\n"
  },
  {
    author: "Constitutional court",
    quote:
      "In a community, the constitution of which provides for a legislator and a law, it is the concern of the legislator and of the laws given by him to ascertain the mediation through calculable and attainable rules and to prevent the terror of the direct and automatic enactment of values. That is a very complicated problem, indeed. One may understand why law-givers all along world history, from Lycurgus to Solon and Napoleon have been turned into mythical figures. In the highly industrialized nations of our times, with their provisions for the organization of the lives of the masses, the mediation would give rise to a new problem. Under the circumstances, there is no room for the law-giver, and so there is no substitute for him. At best, there is only a makeshift which sooner or later is turned into a scapegoat, due to the unthankful role it was given to play.A jurist who interferes, and wants to become the direct executor of values should know what he is doing. He must recall the origins and the structure of values and dare not treat lightly the problem of the tyranny of values and of the unmediated enactment of values. He must attain a clear understanding of the modern philosophy of values before he decides to become valuator, revaluator, upgrader of values. As a value-carrier and value-sensitive person, he must do that before he goes on to proclaim the positings of a subjective, as well as objective, rank-order of values in the form of pronouncements with the force of law.\n"
  },
  {
    author: "Rosanna Eleanor Leprohon",
    quote:
      "Thy soft-breathed hopes with magic mightHave chased from my soul the shades of night\n"
  },
  {
    author: "Andrew Taylor Still",
    quote:
      "Let us not be governed today by what we did yesterday, nor tomorrow by what we do today, for day by day we must show progress.\n"
  },
  {
    author: "Gerd Theissen",
    quote:
      "Over this period many issues have been clarified. Today we know very much more about these  from a  in the  than ever before. Nevertheless, they risk being forgotten - partly because the link with the Christian history which they have influenced has been broken, partly because many of our educated contemporaries come from other religious and cultural traditions, and partly because the results of historical-critical research are so complex that many people are deterred from trying to grasp them.\n"
  },
  {
    author: "Burt Bacharach",
    quote:
      "Somewhere there's a happy harborfar from the storm.Out where the sun shines there is someoneI'm meant to adore,and I know the day I find her,I'll smile once more.\n"
  },
  {
    author: "Julia Gillard",
    quote:
      "I thought that, that side of [Rudd's] character � the very anxious, 'I must be in the media, I must shine in Parliament today' � would fall away when he became Labor leader and there was no more fighting for the spotlight; the spotlight was well and truly on him."
  },
  {
    author: "Architecture",
    quote:
      "Grandeur * * * consists in form, and not in size: and to the eye of the philosopher, the curve drawn on a paper two inches long, is just as magnificent, just as symbolic of divine mysteries and melodies, as when embodied in the span of some cathedral roof.\n"
  },
  {
    author: "Abdus Salam",
    quote:
      "By generalization of methods developed by Kamefuchi, , and Salam, conditions for  of general  of massive  are derived. ... It is shown that all theories based on  (with the one exception of the neutral vector meson theory in interaction with a conserved current) are unrenormalizable.\n"
  },
  {
    author: "The Room (film)",
    quote: "Everybody betray me! I  with this world."
  },
  { author: "Glory", quote: "Great is the glory, for the strife is hard!" },
  {
    author: "Valerie Marshall",
    quote:
      "The law is: mere drunkenness is not the equivalent of being incapable\n"
  },
  {
    author: "Irwin Cotler",
    quote:
      "As somebody who understands the pervasive evil of apartheid, to say 'Israel is an apartheid state' is not only false and prejudicial to Israel, but it undermines the real struggle against apartheid and the integrity of that movement.\n"
  },
  {
    author: "Eoghan Harris",
    quote:
      "The automatic assumption that everything a unionist does is wrong is not good for us.  Like, how could everything that unionists do be wrong?  I mean, they're not a special people.  They're not a kind of special bad people.\n"
  },
  {
    author: "Paul Gerhardt",
    quote:
      "Oh! make me Thine forever;And should I fainting be,Lord! let me never, never,Outlive my love to Thee!\n"
  },
  {
    author: "Arjuna Ranatunga",
    quote: "It does not matter if they come from , ,  or .\n"
  },
  {
    author: "Jackie Brown",
    quote:
      "Now that there is the Tec-9, cheap little spray gun outta South Miami. They advertise this Tec-9 as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit."
  },
  {
    author: "Robert Anderson (Scotland Yard official)",
    quote:
      '"The natural attitude of a thinking mind toward the supernatural is that of skepticism�skepticism, not agnosticism. The skeptic halts at the cross-roads, to take his bearings; but at the sight of a cross-road the agnostic gives up his journey altogether. True skepticism connotes intellectual caution, but agnosticism is intellectual suicide." In Defence (1890)'
  },
  {
    author: "Dorothy Thompson",
    quote:
      "Anti-semitism became equal to anti-Republicanism. And Hitler went to the peasants with a campaign of anti-capitalism.\n"
  },
  {
    author: "Li Yu (author)",
    quote:
      "First we look at the hills in the painting,Then we look at the painting in the hills."
  },
  {
    author: "Popper's experiment",
    quote:
      'A few years after writing the preface of that book, Popper fell into an opposite, and equally serious error about an "EPR situation," On this occasion, contrary to the preceding one, there is an over- rather than an underevaluation of the EPR analysis. On p. 27 of the same book, Popper proposes an experiment that constitutes a variant of the EPR argument, asserting that if the the Copenhagen interpretation is correct, the experiment just analyzed would allow for sending signals faster than the speed of light. This work is one of a lengthy series we will discuss later, in which it is maintained that quantum formalism would permit us to use the reduction of the wave packet to violate one of the postulates at the basis of relativity (i.e., that the speed of light cannot be exceeded). Now, despite the peculiarity of the situation addressed by EPR, this conclusion is fundamentally erroneous and arise from an incorrect use of quantum formalism.I recall a spirited discussion I once had with Popper at the International Center for Theoretical Physics at Miramare in 1983. Professor Abdus Salam informed me that on the occasion of Popper\'s visit (for delivering a lecture on the foundations of quantum mechanics), he would be very pleased if the Center would have on hand some competent person in the field, and asked me to take mart in the discussion. I knew Popper\'s work well and told Professor Salam that my intervention could be critical. Salam\'s reply was simple: "I have full confidence in you, and if you think you are right, you should explain your position without any fear." Popper presented his thought experiment (a variant of the EPR argument), which, according to him, left us with only two alternatives: either the orthodox interpretation was correct, and it would then be possible to send signals faster than the speed of light, or there would not be any action at a distance and the experiment would constitute a falsification of quantum theory. At the end of the conference I explained to him in simple, but mathematically precise term,s the reasons why his point of departure was erroneous: he had not correctly applied the rules of the theory and in fact, the  of sending superluminal signals would confirm the theory rather than falsify it�the exact opposite of what he maintained. At the end of my intervention he only said that he could not answer my objection since he did not have a mastery of the mathematics of the formalism, but was still convinced that the theory implied the possibility of superluminal signals. This strange, and, as we shall see, fundamentally erroneous idea has been supported by various researchers in various scientific works, and published in prestigious journals.\n'
  },
  { author: "The Beast from 20,000 Fathoms", quote: "Cpl. Stone" },
  {
    author: "Madeleine L'Engle",
    quote: "Maybe you have to   before you can appreciate the ."
  },
  {
    author: "Digression",
    quote:
      "Digression is the soul of wit. Take the philosophic asides away from Dante, Milton or Hamlet's father's ghost and what stays is dry bones.\n"
  },
  {
    author: "Alfred Perceval Graves",
    quote:
      'Once the Bishop looked grave at your jest,Till this remark set him off wid the rest:"Is it lave gaietyAll to the laity?Cannot the clargy be Irishmen too?"\n'
  },
  {
    author: "Zhang Ziyi",
    quote:
      "I could have done a lot of Hollywood movies. After  I got a lot of offers, but I turned them down because they were all victim roles�poor girls sold to America to be a wife or whatever. I know I have the ability to go deeper, to take on more original roles than that. That's why I really appreciated Geisha, because it allowed us to show the world what kind of actors we are and what kind of characters we can play�not just action, kick-ass parts.\n"
  },
  {
    author: "Li Hongzhi",
    quote:
      "Many people aren�t able to completely understand what qigong is about. Since the time Dafa was made public, I have unveiled some inexplicable phenomena in qigong as well as things that hadn�t been explained in the qigong community. But this isn�t the reason why so many people are studying Dafa. It�s because our Fa can truly enable people to Consummate, truly save people, and allow you to truly ascend to high levels in the process of cultivation. Whether it�s your realm of mind or the physical quality of your body, the Fa truly enables you to reach the standards of different levels\n"
  },
  {
    author: "Nur Muhammad Taraki",
    quote:
      "I am proud that for the first time in the history of Afghanistan, I am raising the flag of such a people, who are producing all material and immaterial equipment necessary for the life in this country and who make all efforts for prosperity and serendipity of the society. This glorious and magnificent  is the symbol of the greatness and pride of these people.\n"
  },
  {
    author: "Timing",
    quote:
      "There is timing in the whole life of the warrior, in his thriving and declining, in his harmony and discord. Similarly, there is timing in the Way of the , in the rise and fall of capital. All things entail rising and falling timing. You must be able to discern this. In strategy there are various timing considerations. From the outset you must know the applicable timing and the inapplicable timing, and from among the large and small things and the fast and slow timings find the  timing, first seeing the distance timing and the background timing. This is the main thing in strategy. It is especially important to know the background timing, otherwise your strategy will become uncertain.\n"
  },
  {
    author: "J�rgen Klinsmann",
    quote:
      "What  played tonight was just phenomenal, outstanding. He kept  in that game for a long time.  are proud to have him with us. It was an absolutely amazing match tonight and you can give him the biggest compliment in the world. It's a bummer for us ending on the losing side after a game of 120 minutes that gave everything to the fans, a real drama, a thriller. We had enough possession to equalize that game at the end, but a big compliment to Belgium and congratulations to them. I'm very proud of our team. Every player on the field made  proud with this performance in this World Cup. All of the players just went beyond their capabilities and I told them they should take a lot of very positive stuff back home with them.\n"
  },
  {
    author: "Joseph Merrick",
    quote:
      "My feet and legs are covered with thick lumpy skin, also my body, like that of an Elephant, and almost the same colour, in fact, no one would believe until they saw it, that such a thing could exist. It was not perceived much at birth, but began to develop itself when at the age of 5 years."
  },
  {
    author: "Eric Kandel",
    quote:
      "The realization that our mental functioning is largely irrational was arrived at by several thinkers at the same time"
  },
  {
    author: "George Bird Evans",
    quote:
      "I have not written this book as something that is over. When you have lived like that, it will be present always, like the gun I shot and the dogs and those grouse living in the subcellars of my brain."
  },
  {
    author: "Kenneth D. Mackenzie",
    quote:
      "The  is the responsibility of the CEO, and the designer's role is to act as midwife to aid in the rebirth of the .\n"
  },
  {
    author: "J Dilla",
    quote:
      'One time we were in the studio and didn\'t have a drum machine, and he went inside the booth and played the drums on his body. He knew how to  it right and everything, like, "Okay, he just made a song using his body." [laughs] It was serious. ~  (from the  re-issue liner notes).'
  },
  { author: "Giosu� Carducci", quote: "To thee of All Being      /" },
  {
    author: "Nancy Wilson (rock musician)",
    quote:
      "I don't think that Anne or I had any concept that we were unusual to have this idea to go straight for -type thing. So, completely without a sexual reference involved, just strode in the door and made a band, or two, or three.\n"
  },
  {
    author: "Texe Marrs",
    quote:
      '"As the above report and photos indicate, foreign troops are now permanently stationed in our country... We must steel ourself [sic] for what may soon come. The dark clouds surely are gathering. We may not have much more time." (January 1997).'
  },
  {
    author: "Helen Diner",
    quote:
      "[Amazons] They were conquerors, horse tamers, and huntresses who gave birth to children but did not nurse or rear them. They were an extreme, feminist wing of a young human race, whose other extreme wing consisted of the stringent patriarchies.\n"
  },
  {
    author: "Ralph Nader",
    quote:
      "We don't need huge numbers of people. We need about one percent... spending three to five hundred hours a year, connecting with each other, opening full-time offices in every Congressional District, and focusing on just five-hundred and... thirty-five people... in the U.S. Congress... the branch that has the most power under our Constitution."
  },
  {
    author: "Mechanics",
    quote:
      'The reader will recollect that we are here speaking of the Principia as a mechanical treatise only... As a work on dynamics, its merit is, that it contains a wonderful store of refined and beautiful mathematical artifices, applied to solve all the most general problems which the subject offered. It can hardly be said to contain any new inductive discovery respecting the principles of mechanics; for though Newton\'s "Axioms or Laws of Motion," which stand at the beginning of the book, are a much clearer and more general statement of the grounds of mechanics than had yet appeared, it can hardly be said that they contain any doctrines which had not been previously stated or taken for granted by other mathematicians.\n'
  },
  {
    author: "The Mummy Returns",
    quote: "GO TO HELL, AND TAKE YOUR FRIENDS WITH YOU!!!"
  },
  {
    author: "Walter Rodney",
    quote:
      "After all, if there is no class stratification in a society, it follows that there is no state, because the state arose as an instrument to be used by a particular class to control the rest of society in its own interests.\n"
  },
  {
    author: "Thomas Tredgold",
    quote:
      "admit a jet of cold water, which condenses the steam in the cylinder, forming a partial vacuum, and the piston descends by the pressure of the atmosphere, raising water by the pump rod H from the mine"
  },
  { author: "W. Mark Felt", quote: "Follow the money." },
  {
    author: "Jodi Picoult",
    quote:
      "What if it turns out that a life isn't defined by who you belong to, or where you came from, by what you wished for or whom you've lost, but instead by the moments you spend getting from each of these places to the next?\n"
  },
  {
    author: "Seduction",
    quote:
      "Seduction is the world�s elementary dynamic All this has changed significantly for us, at least in appearance. For what has happened to  and ? Seduction hurls them against one another, and unites them beyond meaning, in a paroxysm [sudden outbreak of emotion] of intensity and charm.\n"
  },
  {
    author: "Frozen (2010 film)",
    quote: " You're gonna be okay, baby. You're gonna be okay."
  },
  {
    author: "Jessica Lange",
    quote:
      "We started shooting the film before they'd even come up with a working model of King Kong, it wasn't unusual for the wardrobe to be decided on the day before a scene was going to be shot - usually those things are worked out months in advance. We had a veteran crew, and our cameraman, Harold Wellman, had actually worked on the original 'King Kong' in 1933. It was my first movie, of course, and people would take me aside and tell me that no matter how many more movies I made, I'd never make another one like this\n"
  },
  {
    author: "Kinky Friedman",
    quote: '"Poly" means more than one, and ticks are bloodsucking parasites.\n'
  },
  {
    author: "Jean-Louis Gass�e",
    quote:
      "Yet you would not drive a car with your mouth unless you are my mother-in-law.\n"
  },
  {
    author: "Boris Yeltsin",
    quote:
      "Let's not talk about Communism. Communism was just an idea, just pie in the sky."
  },
  {
    author: "Ran HaCohen",
    quote:
      "Ramallah is not Auschwitz. Israel is not the Third Reich. We have no death camps and we haven't massacred one third of the Palestinian population in gas chambers. Therefore, everything we do is quite all right. We may fill the occupied territories with tear gas and blood, we may kill and injure and torture and blackmail and dispossess, we may surround millions by electric fences and tanks in tiny enclaves, we may hold them under siege and daily bombing, we may make pregnant women walk to hospitals, and we shoot ambulances too, don't we. But as long as we fall even an inch short of the atrocities of Nazi Germany, it's all fine and good, and don't you dare make the comparison.\n"
  },
  { author: "Free Willy", quote: "Let's free Willy!" },
  {
    author: "Hobby",
    quote:
      "A hobby is a work which is done in the spare time for the sake of pleasure and enjoyment."
  },
  { author: "Casablanca (film)", quote: "[] Are my eyes really brown?" },
  {
    author: "Claud Cockburn",
    quote:
      "A devout and serious Christian, she was often bothered by what she read of socialists because she could not, instantly and absolutely, see where they were so wrong. To her horrified ear, they kept sounding as though they had ideas rather like Christ's.\n"
  },
  {
    author: "George Takei",
    quote:
      "He is a clown in blackface sitting on the Supreme Court. He gets me that angry. He doesn't belong there. And for him to say, slaves have dignity. I mean, doesn't he know that slaves were in chains? That they were whipped on the back. If he saw the movie , you know, they were raped. And he says they had dignity as slaves or� My parents lost  that they worked for, in the middle of their lives, in their thirties. His business, my father's business, our , our  and we're supposed to call that ? Marched out of our homes at gun point. I mean, this man does not belong on the Supreme Court. He is an . He is a disgrace to America.\n"
  },
  {
    author: "The Enchanted Forest Chronicles",
    quote:
      "Blast you six ways from next Wednesday! This is the second time you�ve liquefies me! May you and your pet dragon and your triple-cursed wash water turn purple with orange spots and fall down a bottomless pit!\n"
  },
  {
    author: "Siren of Bagdad",
    quote:
      " I beg your pardon. I realize they haven't been invented yet, but have you got a match?"
  },
  {
    author: "Ed Harcourt",
    quote:
      "It's about, you know, how the world is so...fucking doomed. Sort of an apocalyptic album but I want it to be quite cartoony in a way.\n"
  },
  {
    author: "School of Rock",
    quote:
      "Dude, I service society by rocking. I�m out there on the front lines liberating people with my music. Rocking ain�t no walk in the park, lady."
  },
  {
    author: "Mayim Bialik",
    quote:
      "There is a strong wave of  and there is a pretty large movement, if you�re in a progressive synagogue and an environmental-friendly community, to only serve vegetarian. That�s happening more and more. You know in the Old Testament Adam and Eve are vegetarians, and in Judaism there is a strong indication that we are responsible for each other and for our planet. So some of us also make the choice to be vegan as an environmental statement. We have a tradition that goes back thousands of years about how to treat animals as best we can. Factory farming didn�t exist thousands of years ago, much less a hundred years ago. So I think it�s very interesting that as archaic as some people think traditional Judaism is, we are still trying to stay current with what is going on.\n"
  },
  {
    author: "Contact (1997 US film)",
    quote:
      "So what's more likely? That an all-powerful, mysterious god created the universe, and decided not to give any proof of his existence? Or, that he simply doesn't exist at all, and that we created him, so that we wouldn't have to feel so small and alone?"
  },
  {
    author: "Henry Knox",
    quote: "It is not easy to conceive the difficulties we have had.\n"
  },
  {
    author: "Guity Novin",
    quote:
      "Seurat and Signac mixed paintings with the dry and abstract laws of science. This approach, in my opinion, usually strays from the purpose of art in general. Because it means that one cannot expect from an artifact, that is created with mathematical laws, to establish an improbable and irrational relationship between the work and the viewer.\n"
  },
  {
    author: "Nicholas Lore",
    quote:
      "You are the author of your life, the inventor of your future, the agent of your intentions."
  },
  {
    author: "Dan Crenshaw",
    quote:
      "I've always supported President Trump, I didn't always support candidate Trump.\n"
  },
  {
    author: "Immortal Technique",
    quote:
      "They vote for us to go to war instantly, but none of their kids serve in the infantry.\n"
  },
  {
    author: "Alexander Melamid",
    quote:
      "... There's a machine which is called , which is a structure. And artist fits in this only because he or she is needed for this structure. If for example the History of Art needs some parallel lines, there is an individual who makes parallel lines. And this individual fits into this machine which works by itself; it doesn't care about people or anything else, it just goes by itself.\n"
  },
  {
    author: "American Pie (film)",
    quote:
      "You realize we're all going to go to college as virgins. They probably have special dorms for people like us."
  },
  {
    author: "William Henry Ashurst (judge)",
    quote:
      "It is a strong presumption that that which never has been done cannot by law be done at all.\n"
  },
  {
    author: "High Road to China",
    quote: "The oxen are slow, but the earth is patient."
  },
  {
    author: "Frits Bolkestein",
    quote:
      "If we fail in our efforts to achieve harmonisation of patent law relating to computer-implemented inventions in the European Union, we may well be confronted with a renegotiation of the European Patent Convention. The process of renegotiating the European Patent Convention would not require any contribution from this Parliament.\n"
  },
  {
    author: "Kylie Minogue",
    quote:
      "I maintain that the best song is the one that ends up on the album. So whether I�ve written it or I haven�t, I�m very comfortable with both.\n"
  },
  {
    author: "Bernard Groethuysen",
    quote:
      "The Church, sensing that the middle class was slipping out of its grasp, certainly tried to  create patterns of living which would enable the bourgeois to remain a bourgeois as well as a Christian; that is, to carry out his economic and social functions while preserving the features of a son of the Church. But it never succeeded in hallowing the aspirations of the new middle class by giving them a religious basis.\n"
  },
  {
    author: "All About My Mother",
    quote:
      "Just don't disappear again. I like to say good-bye to the people I love, even if it's only to cry my eyes out, bitch."
  },
  {
    author: "Griff Rhys Jones",
    quote:
      "Mel and I genuinely get on. It's like another marriage. He is very straightforward and never loses his rag. I run around in a frenzy most of the time. London cabbies will say to me, 'Your mate Mel's a miserable bastard', but he's far more grounded than me.\n"
  },
  {
    author: "Francis Quarles",
    quote:
      "We spend our midday sweat, our midnight oil;We tire the night in thought, the day in toil.\n"
  },
  {
    author: "Brigadoon",
    quote:
      "Why do people have to lose things to find out what they really mean?"
  },
  {
    author: "David Sedaris",
    quote:
      "\"You kids think you invented sex,\" my mother was fond of saying. But hadn't we? With no instruction manual or federally enforced training period, didn't we all come away feeling we'd discovered something unspeakably modern? What produced in others a feeling of exhilaration left Jason and me with a mortifying feeling of guilt. We fled the room as if, in our fumblings, we had uncapped some virus we still might escape if we ran fast enough. Had one of the counselors not caught me scaling the fence, I felt certain I could have made it back to Raleigh by morning, skittering across the surface of the ocean like one of those lizards often featured on television wildlife programs."
  },
  { author: "November 12", quote: "2  22:32, 11 November 2008 (UTC)" },
  {
    author: "Lawrence Durrell",
    quote:
      "He had at last discovered that love had no pith in it, and that the projection of one own's feelings upon the images of a beloved was in the long run, an act of self-mutilation."
  },
  {
    author: "Ernst Fischer (writer)",
    quote:
      " is necessary in order that  should be able to recognize and  the . But art is also necessary by  of the  inherent in it.\n"
  },
  {
    author: "Free Willy",
    quote: "I'm sick of this place! I'm going to find my mom!"
  },
  { author: "Names", quote: "Call a spade a spade.\n" },
  {
    author: "Laura Anne Gilman",
    quote:
      "Any change in routine was terrifying, even if it involved less violence rather than more.\n"
  },
  {
    author: "Night Shift (book)",
    quote:
      "Behold a dream came to me in the night, and the Lord did shew all this to me...And in my dream the Lord was a shadow that walked behind the rows, and he spoke to me in the words he used to our older brothers years ago. He is much displeased with this sacrifice...And the Lord did say: Have I not given you a place of killing, that you might make sacrifice there&gt; And have I not shewn you favor? But this man has made a blasphemy within me, and I have completed the sacrifice myself...So now is the Age of Favor lowered from nineteen plantings and harvests to eighteen. Yet be fruitful and multiply as the corn multiplies, that my favor may be shewn you, and be upon you.\n"
  },
  { author: "Allen Newell", quote: "pp. 120-121." },
  {
    author: "Harry Potter and the Deathly Hallows � Part 2",
    quote:
      " That little git. Least we've still got Bogrod.  That's unfortunate."
  },
  { author: "Mothers", quote: "The mother of all living.\n" },
  {
    author: "Mean Girls",
    quote:
      " In the regular world, Halloween is when children dress up in costumes and beg for candy. In Girl World, Halloween is the one night a year when a girl can dress like a total slut and no other girls can say anything about it."
  },
  {
    author: "Josef Mengele",
    quote:
      "The Jewish people, no matter where they are, they become the best in the world.\n"
  },
  {
    author: "Andrew Huxley",
    quote:
      "I am very conscious that there is no scientific explanation for the fact that we are conscious.\n"
  },
  {
    author: "Leo Ryan",
    quote:
      "How much longer, for instance, can we continue to crowd more and more people into this world?  How much longer can we afford to wage senseless, destructive wars?  How long can we permit the uncontrolled use of the earth's resources when there is no possibility of replacing them?  Indeed, how long will it be before we have completely used up everything our lives depend on?  These issues are the politics of the future.  Neither Republicans nor Democrats have begun to spell out in substantive fashion the means by which we can control population growth, environmental problmes, and the conservation of our natural resources.\n"
  },
  {
    author: "Fred Polak",
    quote:
      "As the reader is aware, at the cradle of our learning stood the philosophy of Asia Minor and Greece, itself influenced in turn by Indian and Oriental philosophical and religious conceptions.  It is the tragedy of this philosophy that, although it was traditionally directed towards the undogmatic acquisition of wisdom and virtue, always regarding the freedom of human rational thought in visionary fashion as the highest good, it nevertheless inevitably led to a mental hardening of the arteries into coercive thought models.\n"
  },
  {
    author: "Quentin Reynolds",
    quote: "Short on glamour and long on tragedy.\n"
  },
  {
    author: "Niall Horan",
    quote:
      "I'm the kind of boy that can fall in love with any girl because I love with the heart, not the eyes.  by One Direction, "
  },
  {
    author: "Ian Brady",
    quote:
      "I can't stand feeble, robotic psychiatrists.  They give you false drugs and turn you into a zombie."
  },
  { author: "Rocky Marquette", quote: "Acting is reacting. " },
  {
    author: "Joseph Stalin",
    quote:
      "It is impossible to finish off capitalism without having finished off social democracy in the working-class movement.\n"
  },
  {
    author: "Chela Sandoval",
    quote:
      ' puts it this way: because "class instinct is subjective and spontaneous," the class instinct of the middle classes and "" must undergo a painful and "revolutionary" transformation in order to become oppositional�that is, in order to become aligned with the methodology of the oppressed.\n'
  },
  { author: "March 22", quote: "2  13:09, 21 March 2009 (UTC)" },
  {
    author: "Geoffrey Chaucer",
    quote: "Right as an aspen lefe she gan to quake.\n"
  },
  {
    author: "Larry Sanger",
    quote:
      "If the project was lucky enough to have a writer or two well-informed about some specialized subject, and if their work was not degraded in quality by the majority of people, whose knowledge of the subject is based on paragraphs in books and mere mentions in college classes, then there  be a good, credible article on that specialized subject. Otherwise, there will be no article at all, a very amateurish-sounding article, or an article that looks like it might once have been pretty good, but which has been hacked to bits by .\n"
  },
  {
    author: "Ken Dodd",
    quote:
      "Television is like a great monster, eating your gags as fast as you say them.\n"
  },
  {
    author: "The Road to Wigan Pier",
    quote:
      "In almost any revolt the leaders would tend to be people who could pronounce their aitches."
  },
  {
    author: "Opposition",
    quote: "No government can be long secure without a formidable opposition.\n"
  },
  {
    author: "William Shakespeare quotes about death",
    quote:
      "We must die, Messala: With meditating that she must die once, I have the patience to endure it now.\n"
  },
  {
    author: "A Theory of Justice",
    quote:
      "What, then, can possibly justify this kind of initial inequality in life prospects? According to the difference principle, it is justifiable only if the difference in expectation is to the advantage of the representative man who is worse off, in this case the representative unskilled worker. The inequality in expectation is permissible only if lowering it would make the working class even more worse off."
  },
  {
    author: "George Oppen",
    quote:
      "Perhaps what I would like is a truly democratic culture. Not a polemic nor a moralistic culture in the arts but a culture which permits one man to speak to another honestly and modestly and in freedom and to say what he thinks and what he feels, to express his doubts and his fears, his immoral as well as his moral impulses, to say what he thinks is true and what he thinks is false, and what he likes and what he does not like. What I am against is that we should all engage in the most vigorous and most polemic lying to each other for each other's benefit. �&nbsp;Who could have the conceit, the self-confidence to believe that that is what we should do throughout all the rest of human history?\n"
  },
  {
    author: "RoseMarie Panio",
    quote:
      "For the presidency, I don't think it really matters if it's a man or a woman, it has to be the right person for the job"
  },
  {
    author: "Absolute Power (film)",
    quote: "Remember, tomorrow is promised to no one."
  },
  { author: "Chibi Vampire", quote: "Karin" },
  {
    author: "James Bridie",
    quote:
      "I sat through the first act and heard my lovely lines falling like cold porridge on a damp mattress.\n"
  },
  {
    author: "Daniel Clement Colesworthy",
    quote: " (1876); reported in , 10th ed. (1919)."
  },
  {
    author: "Alex Ferguson",
    quote:
      "My greatest challenge is not what's happening at the moment, my greatest challenge was knocking Liverpool right off their fucking perch. And you can print that.\n"
  },
  {
    author: "A Civil Action (film)",
    quote:
      "The odd's of a plaintiff's lawyer winning in civil court are two to one against. Think about that for a second. Your odds of surviving a game of Russian roulette are better than winning a case at trial. 12 times better. So, why does anyone do that? They don't. They settle. Out of the 780,000, only 12,000 or 11/2% ever reach a verdict. The whole idea of  is to settle, to compel the other side to settle. And you do that by spending more money than you should, which forces them to spend more money than they should, and whoever comes to their senses first loses. Trials are a corruption of the entire process and only fools who have something to prove end up ensnared in them. Now when I say prove, I don't mean about the case, I mean about themselves."
  },
  {
    author: "Leonard Bacon",
    quote:
      '"Thou shalt not get found out" is not one of God\'s commandments, and no man can be saved by trying to keep it.\n'
  },
  {
    author: "Everlast",
    quote:
      "Gotta kill these painsOr blow out my brainsTo free me from these chainsI'm trapped in this physical hellTo walk again I just might sell my soulAnd I'm only twenty somethin' years old\n"
  },
  {
    author: "Mullah Dadullah",
    quote:
      "Our war is not against everybody who is American or British, but against whoever stops us from fighting America and Britain, whether it is Pakistan or even our own people.\n"
  },
  { author: "Mary Wilson, Baroness Wilson of Rievaulx", quote: "Poem: " },
  {
    author: "Tribeni",
    quote:
      "�The eastern portion of the tomb was formerly a maNDapa of an earlier Krishna temple which stood on the same spot and sculptures on the inner walls represent scenes from the R�m�yaNa and the Mah�bh�rata, with descriptive titles inscribed in proto-Bengali characters The other frieze shows Vishnu with Lakshm� and Sarasvat� in the centre, with two attendents, and five avat�ras of VishNu on both flanks Further clearance work has been executed during the year 1932-33 and among the sculptures discovered in that year are twelve figures of the Sun God, again in the 12th century style and evidently reused by the masons when the Hindu temple was converted into a Muslim structure"
  },
  { author: "Perth (film)", quote: "I am a very simple man." },
  {
    author: "Annus Mirabilis papers",
    quote:
      "1905 is often described as Einstein�s annus mirabilis: a wonderful year in which he came up with three remarkable ideas. These were the Brownian motion in fluids, the photoelectric effect and the special theory of relativity. Each of these was of a basic nature and also had a wide impact on physics.\n"
  },
  {
    author: "John Hospers",
    quote:
      "Government is the most dangerous institution known to man. Throughout history it has violated the rights of men more than any individual or group of individuals could do: it has killed people, enslaved them, sent them to forced labor and concentration camps, and regularly robbed and pillaged them of the fruits of their expended labor. Unlike individual criminals, government has the power to arrest and try; unlike individual criminals, it can surround and encompass a person totally, dominating every aspect of one's life, so that one has no recourse from it but to leave the country (and in totalitarian nations even that is prohibited).\n"
  },
  {
    author: "Visual thinking",
    quote:
      "In many cases a dull proof can be supplemented by a geometric analogue so simple and beautiful that the truth of a theorem is almost seen at a glance.\n"
  },
  {
    author: "Peter Duesberg",
    quote:
      "Epidemiology is like a bikini: what is revealed is interesting; what is concealed is crucial.\n"
  },
  {
    author: "Gerardus Mercator",
    quote:
      "Since my youth geography has been for me the primary object of study. When I was engaged in it, having applied the considerations of the natural and geometric sciences, I liked, little by little, not only the description of the earth, but also the structure of the whole machinery of the world, whose numerous elements are not known by anyone to date.\n"
  },
  {
    author: "Billy Bragg",
    quote:
      "Our enemy really isn't capitalism, it's cynicism. That's one the things I learned from Woody (Guthrie)... Not to be cynical... That cynicism... It destroys you, it rots you away from the inside. So that sense of optimism and humanity... which 20 years ago I would have called socialism but now I'll call compassion... You know, that idea is still out there and alive and if you can plug into that and encourage that it makes it all worth while.\n"
  },
  {
    author: "Wilson Harris",
    quote:
      "There is no economic solution to the ills of the world until the arts of originality [] open the partialities and biases of tradition in ways that address the very core of our pre-possessions."
  },
  {
    author: "Henry Louis Gates Jr.",
    quote:
      "There haven�t been fundamental structural changes in America. There�s been a very important symbolic change and that is the election of Barack Obama. But the only black people who truly live in a post-racial world in America all live in a very nice house on 1600 Pennsylvania Avenue.\n"
  },
  {
    author: "The Maze (1953 film)",
    quote:
      "The shocking chills of the sensational suspense novel leap from the screen... in 3 Dimension"
  },
  { author: "I'm Sorry I Haven't a Clue", quote: "Jeremy Hardy" },
  {
    author: "David Cronenberg",
    quote:
      "I think of horror films as , as films of confrontation. Films that make you confront aspects of your own life that are difficult to face. Just because you're making a horror film doesn't mean you can't make an artful film.\n"
  },
  {
    author: "W. W. Thayer",
    quote:
      "It must be remembered that our State is but in its infancy. That its population is small, and its material wealth is very limited. That notwithstanding it embraces within its boundaries a large area of territory, which includes extensive districts of productive lands, valuable mines of coal, iron, and precious metals, vast quantities of timber, broad rivers, innumerable bays, harbors, and inlets, abounding in fish of the choicest kind sufficient to supply the markets of the world, yet its resources are comparatively undeveloped. And that while it possesses all the elements of grandeur and magnificence, its greatness can not be successfully achieved without the benefit of a well regulated government, whose foundation is laid upon the broad principles of honesty, economy, and justice.\n"
  },
  {
    author: "Ashlee Simpson",
    quote:
      "As long as there are girls, we need guy bands. However, in this day, it is not good enough to just sing great. You have to write, sing and play. We want it all.\n"
  },
  {
    author: "Mowaffak Rubaie",
    quote:
      "We need to stop the flow of , we need to stop the fatwas (religious edicts) coming from Saudis to justify the killings of innocent Iraqis.\n"
  },
  {
    author: "Economy of India",
    quote:
      "India's bane is the profesional 'povertywallas': the politicians who have incessantly mouthed slogans such as 'garibi hathao' and the economists who write continually about 'abysmal poverty'. Both have generally espoused policies, such as defending public sector enterprises at any cost, discounting and even opposing liberal reforms, promoting white-elephant style projects that use capital-intensive techniques on unrealistic grounds such as that they would create profits and savings when in fact they have drained the economy through losses...\n"
  },
  {
    author: "Arthur Chapman (poet)",
    quote:
      "The sheep are down at the water, a-drinkin' their bloomin' fill,An' me and the dog are dozin', as herders and collies will;The world may be movin' somewheres, but here it is standin' still.\n"
  },
  {
    author: "Honor� de Balzac",
    quote:
      "Tone is light in another shape. In music, instruments perform the functions of the colours employed in painting."
  },
  {
    author: "Grief",
    quote:
      "Were floods of tears to be unloosed  In tribute to my grief,The doves of Noah ne'er had roost  Nor found an olive-leaf.\n"
  },
  {
    author: "Austin Grossman",
    quote:
      "Go out to the last few grains of sand, the smartest of the smartest of the smartest, times a thousand. It makes sense that people would be a little odd out here. But you really have to wonder why we all end up in jail.\n"
  },
  {
    author: "Indo-Pakistani War of 1965",
    quote:
      "India fought a second war with Pakistan over Kashmir in 1965, little more than a year after Nehru's death. Pakistan's ruler at the time, Field Marshal Ayub Khan, personally planned Operation Grand Slam, which he hoped would totally cut Kashmir off at its narrow southern neck from India's Punjab. Ayub was a giant of a man, as tall and sturdy as India's Prime Minister Lal Bahadur Shastri was small and physically frail. But India's army was four times larger than Pakistan's, and quickly dispelled the popular Pakistani myth that one Muslim soldier was �worth ten Hindus.� Operation Grand Slam ground to a halt as soon as India's tanks rolled west across the Punjab border to the environs of Lahore. In three weeks the second IndoPak War ended in what appeared to be a draw when the embargo placed by Washington on U.S. ammunition and replacements for both armies forced cessation of conflict before either side won a clear victory. India, however, was in a position to inflict grave damage to, if not capture, Pakistan's capital of the Punjab when the cease-fire was called, and controlled Kashmir's strategic Uri-Poonch bulge, much to Ayub's chagrin.\n"
  },
  { author: "Harm", quote: "do no harm" },
  {
    author: "Weather",
    quote:
      "Everybody talks about the weather, but nobody does anything about it. People are always ready to complain about a  but never willing to solve it;...\n"
  },
  {
    author: "Corinna Cortes",
    quote: "I've been out doing 22 miles this morning.\n"
  },
  {
    author: "John Foster Dulles",
    quote:
      "The ability to get to the verge without getting into the war is the necessary art.\n"
  },
  {
    author: "Renewable energy",
    quote:
      "Rather than an eyesore on the roof, it becomes actually a feature of the home. People are going to start wanting to put  on the front side of their home to show that they have solar.\n"
  },
  {
    author: "Dmitri Volkogonov",
    quote:
      'The only thing I can be proud of�the greatest merit of my life�is that I was able to fundamentally alter my views."'
  },
  {
    author: "Colley Cibber",
    quote:
      "Perish that thought! No, never be it saidThat Fate itself could awe the soul of Richard.Hence, babbling dreams! you threaten here in vain!Conscience, avaunt! Richard �s himself again!Hark! the shrill trumpet sounds to horse! away!My soul �s in arms, and eager for the fray.\n"
  },
  {
    author: "Richard Cobden",
    quote:
      'The Blockade Laws are about as rascally an invention as the old Corn Laws. Suppose  lived in a street, and on the opposite side lived a shopkeeper with whom he has been in the habit of dealing. Tom quarrels with his shopkeeper and forthwith sends him a challenge to fight, which is accepted. Tom, being a powerful man, sends word to each and every householder in the street that he is going to fight the shopkeeper, and that until he has finished fighting no person in the street must have any dealings with the shopkeeper. "We have nothing to do with your quarrel," say the inhabitants, "and you have no right to stop our dealings with the shopkeeper".\n'
  },
  {
    author: "Jay Leno",
    quote:
      "French troops arrived in Afghanistan last week, and not a minute too soon. The French are acting as advisers to the Taliban, to teach them how to surrender properly.\n"
  },
  {
    author: "Languages of India",
    quote:
      "I am not suggesting that  be pushed aggressively, but only that the advantage of this great classical language, which is understood by more people in India than  and  in modern , must be appreciated and utilized. Further, in the  script, there exists a possible common script for other Indian languages, though one cannot be too optimistic about the practicability of adopting it in view of the tenacious attachment of people to their own particular scripts. Another link language which flourished in India was  which in its interplay with Sanskrit and  produced the great modern language, Urdu. Here again, beginning as a court or camp language, it blossomed into a modern tongue of the people, linking India linguistically with the .\n"
  },
  {
    author: "Waheeda Rehman",
    quote:
      "I don't believe in remakes. I think original films are classics and one can't make it or match up to it (original film) the same way. And even if they do there will be comparisons...it's not a good idea,\""
  },
  {
    author: "Seconds (comics)",
    quote:
      "Is that weird? It�s my little ritual. You know, keeping the house spirit happy.\n"
  },
  {
    author: "Complexity",
    quote:
      "You can't prove  is better than  - although if you actually do prefer Rockwell, I'd say you were shunning complexity, were secretly , and hadn't really looked at either 's work.  is a .\n"
  }
];
