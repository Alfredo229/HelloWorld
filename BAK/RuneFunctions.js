/*var path = new Array("frey","ur","thorn","os","rad","ken","gyfu","wyn",
                 "hagel","nyd","is","jera","tree","pethro","sedge","sowilo",
                 "tyr","berkano","eh","man","lagu","ing","daeg","odal");
*/

function changeFreq(){
 switch(document.getElementById("dialog11").value){
  case"0":
   document.getElementById("field10").value="1000";
   document.getElementById("field20").value=Math.round(225/88*1000);
   break;
  case"1":
   document.getElementById("field10").value="1000";
   document.getElementById("field20").value=Math.round(365/225*1000);
   break;
  case"2":
   document.getElementById("field10").value="1000";
   document.getElementById("field20").value=Math.round(687/365*1000);
   break;
  case"3":
   document.getElementById("field10").value="1000";
   document.getElementById("field20").value=Math.round(4332/687*1000);
   break;
  case"4":
   document.getElementById("field10").value="1000";
   document.getElementById("field20").value=Math.round(10759/4332*1000);
   break;
  case"5":
   document.getElementById("field10").value="1000";
   document.getElementById("field20").value=Math.round(27321/24000*1000);
   break;
 }
}

var line = new Array(
"Wealth is a comfort to all men yet must every man bestow it freely if he wish to gain honour in the sight of the Lord.",
"The aurochs is proud and has great horns it is a very savage beast and fights with its horns a great ranger of the moors, it is a creature of mettle.",
"The thorn is exceedingly sharp an evil thing for any knight to touch uncommonly severe on all who sit among them. ",
"The mouth is the source of all language a pillar of wisdom and a comfort to wise men a blessing and a joy to every knight. ",
"Riding seems easy to every warrior while he is indoors and very courageous to him who traverses the high-roads on the back of a stout horse. ",
"The torch is known to every living man by its pale, bright flame it always burns where princes sit within. ",
"Generosity brings credit and honour, which support one's dignity it furnishes help and subsistence to all broken men who are devoid of aught else. ",
"Bliss he enjoys who knows not suffering, sorrow nor anxiety and has prosperity and happiness and a good enough house. ",
"Hail is the whitest of grain it is whirled from the vault of heaven and is tossed about by gusts of wind and then it melts into water. ",
"Trouble is oppressive to the heart yet often it proves a source of help and salvation to the children of men, to everyone who heeds it betimes. ",
"Ice is very cold and immeasurably slippery it glistens as clear as glass and most like to gems it is a floor wrought by the frost, fair to look upon. ",
"Summer is a joy to men, when God, the holy King of Heaven suffers the earth to bring forth shining fruits for rich and poor alike. ",
"The yew is a tree with rough bark hard and fast in the earth, supported by its roots a guardian of flame and a joy upon an estate. ",
"Peorth is a source of recreation and amusement to the great where warriors sit blithely together in the banqueting-hall. ",
"The Eolh-sedge is mostly to be found in a marsh it grows in the water and makes a ghastly wound covering with blood every warrior who touches it. ",
"The sun is ever a joy in the hopes of seafarers when they journey away over the fishes' bath until the courser of the deep bears them to land. ",
"Tiw is a guiding star; well does it keep faith with princes it is ever on its course over the mists of night and never fails. ",
"The poplar bears no fruit; yet without seed it brings forth suckers for it is generated from its leaves Splendid are its branches and gloriously adorned its lofty crown which reaches to the skies. ",
"The horse is a joy to princes in the presence of warriors A steed in the pride of its hoofs when rich men on horseback bandy words about it and it is ever a source of comfort to the restless. ",
"The joyous man is dear to his kinsmen  yet every man is doomed to fail his fellow since the Lord by his decree will commit the vile carrion to the earth. ",
"The ocean seems interminable to men if they venture on the rolling bark and the waves of the sea terrify them and the courser of the deep heed not its bridle. ",
"Ing was first seen by men among the East-Danes till, followed by his chariot he departed eastwards over the waves So the Heardingas named the hero. ",
"Day, the glorious light of the Creator, is sent by the Lord it is beloved of men, a source of hope and happiness to rich and poor and of service to all. ",
"An estate is very dear to every man if he can enjoy there in his house whatever is right and proper in constant prosperity. ",
"This random shit"
);

/*
var description = new Array(
"Fehu: Decision. Intellectual thinking and reasoning about a course of action to be determined.",
"Uruz: Action. Power, strength and efficency in performing a task.",
"Turisaz: Reprimand. Detrimental. Teasing, bullying, intimidation. Sadness.",
"Ansuz: Support. Beneficial. Congratulations and support. Pride, happiness.",
"Raido: Simple, lazy. Path of less resistance. Working smart.",
"Kaunan: Supplies, rations. Spendings, groceries, rotation.",
"Gebo: Humble. Poor men don't usually choose this life and therefore would change it if they could. At the mercy of other's charity.",
"Wunjo: Hapiness. Satisfaction about overall success.",

"Haglaz: Blunt. A lot of wasted energy for a given result.",
"Naudiz: Precise. Hitting the nail on the head.",
"Isaz: Destructive. Crumbeling of established structures. Wanted or not.",
"Jeran: Constructive. Care for a long term project until the end results.",
"Eihaz: Savings. Untapped ressources avaliable and useful.",
"Pertho: Occasions and activities. 4th of July or Canada day...",
"Algiz: Warning. A dog barking, a rose's thorns. Dissuasion most often effective.",
"Sowilo: Success. Project meeting satisfactory terms. Would have been hunting but times change.",

"Tiwaz: Guided. Confused person seeking coaching.",
"Berkanan: Consensus. You won't find many people in slippers in winter time.",
"Ehwaz: Exclusion, different.",
"Mannaz: Solidarity, patriotism. Both at home and at work, good company.",
"Laguz: Cautious. It's raining outside so put a movie on and close the windows.",
"Ingwaz: Spontanious. Offensive. Curious and spontanious behavior.",
"Dagaz: Work. Doing it's part for your country or at least your family.",
"Othalan: Home. Freedom in a way where you respect your own policies."
);
*/


/*var description = new Array(
"Fehu: Money lets you have things you couldn't do or create on your own. Service.",
"Uruz: Never better served than by one's self. One's ability to shape his destiny.",
"Turisaz: Mistake. Mistakes are made all the time, repetadly. Until you learn from then.",
"Ansuz: Support. Beneficial. Congratulations and support. Pride, happiness.",
"Raido: Simple. Working smart because of the workload.",
"Kaunan: Supplies. Food, soap, clothing and other commodities.",
"Gebo: Problems. Lost the keys, lost a job, got a ticket...",
"Wunjo: Happiness. Satisfaction about overall success. Emotionnal stability.",
"Haglaz: Accident. An event occurs unhindered and in full.",
"Naudiz: Saved. Foresight causes one to adjust the course of events to a desired outcome.",
"Isaz: Threat. Danger lurking in the shadows. You're missing relevant information, think.",
"Jeran: Supervising. Tending a long term project and seeing it to term.",
"Eihaz: Avaliable. Untapped ressources avaliable and useful.",
"Pertho: Respect. A celebration in honor of those who can't celebrate anymore.",
"Algiz: Warning. A dog barking, a rose's thorns. Dissuasion most often effective.",
"Sowilo: Profitable. An operation well polished where an end result is obtained.",
"Tiwaz: Advice. Encouraged behavior either in doubt or culturally.",
"Berkanan: Common Sense. They say God has a plan. Some things just make sense on the larger picture. If you don't believe in God it would mean like, politicians caring for the country and having special info.",
"Ehwaz: Consulting. Getting advice from others in order to complement your own knowledge.",
"Mannaz: Skilled. A knowledgeble person in a given field, a reference.",
"Laguz: Reacting. Reaction breeding another reaction. Escalation.",
"Ingwaz: Delegation. Someone doing a job so you don't have to. \"Eastward\" means thowards the rising sun.",
"Dagaz: Need. Any kind of neccesity, broken computer, viruses, plumbing problems...",
"Othalan: Cultural. Freedom in a way where you respect your own policies. Stable and prosper."
);*/

var description = new Array(
"Fehu    : Aid, service by another",
"Uruz    : Power, capability",
"Turisaz : Punition, undesirable, broken rule",
"Ansuz   : Support, adequate, praises",
"Raido   : Vacation, quiet, peace",
"Kaunan  : Activity, work",
"Gebo    : Need, rejection marginal",
"Wunjo   : Health, perfection, an ideal",
"Haglaz  : Overwhelming, forcing",
"Naudiz  : Adapting",
"Isaz    : Mistake, accident",
"Jeran   : Control, result, profit, functionnal",
"Eihaz   : Accumulation, anabolic",
"Pertho  : Spending, catabolic, good morale",
"Algiz   : Death, wound, destruction",
"Sowilo  : Life, luck, destiny",
"Tiwaz   : Stubborn, faith, vision, dogma",
"Berkanan: Open Minded, common sense",
"Ehwaz   : Fixing, exchanges, calibration, adjustments",
"Mannaz  : Thrive, duties met, homework done",
"Laguz   : Defensive, prudent, conservation",
"Ingwaz  : Creative, exploration, development",
"Dagaz   : The Economy, capitalism, communism",
"Othalan : Freedom"
);



/*
var name2 = new Array(
"Apparances",
"Unpredictable",
"Prejudice",
"Approval",
"Effort",
"Observed",
"Situation",
"Prepared",

"Ephemeral",
"Common Sense",
"Darkness",
"Just Reward",
"Valor",
"Simplification",
"Danger",
"Opportunity",

"Trust",
"Questionning",
"Opinion",
"Feelings",
"Stress",
"Direct",
"Need",
"Values"
);*/

/*var name2 = new Array(
"Fehu    : Actions speak louder than words",
"Uruz    : Valor, strength, worth",
"Turisaz : Negative, refusal, image consultant",
"Ansuz   : Truth, solid facts, proof",
"Raido   : Resonable, courageous, difficulty",
"Kaunan  : Control, stability, known information",
"Gebo    : Doing the right thing out of need",
"Wunjo   : Prepared, avoiding problems, bliss",

"Haglaz  : To be adapted to, helpless, transformation",
"Naudiz  : To adapt to, learning, mistakes",
"Isaz    : Unknown, undetermined, unpredictable",
"Jeran   : Just reward, fresh few or rotten many fruits",
"Eihaz   : Dependencies, functionnal, moderation",
"Pertho  : Recreation, harmless, excess",
"Algiz   : Consequences, aggravation, care",
"Sowilo  : Normal, peace, prosperity",

"Tiwaz   : Invariable, landmark, map",
"Berkanan: Aimless, endless, pointless",
"Ehwaz   : Perfection, quality, dedication",
"Mannaz  : Humanity, arts, religion",
"Laguz   : Contrariety, delay, setback",
"Ingwaz  : Anticipating, open minded, leader",
"Dagaz   : Work, a favor for a favor, mutual interest",
"Othalan : Home, possessions, family"
);*/

/*var name2 = new Array(
"Fehu    : Habit, routine, autopilot",
"Uruz    : Effort, feat, quality, valor, respect",
"Turisaz : Marginal, dissention, desertion",
"Ansuz   : Proper, politicaly correct, rules",
"Raido   : Concentration, micro-management",
"Kaunan  : Vigilance, paranoia",
"Gebo    : Stressed",
"Wunjo   : Relaxed",

"Haglaz  : To force, to shape",
"Naudiz  : To learn, to adapt",
"Isaz    : To fail, to make a mess",
"Jeran   : To succede, to complete",
"Eihaz   : Catabolic, to work",
"Pertho  : Anabolic, to enjoy",
"Algiz   : To heal, to fix, to tune",
"Sowilo  : To operate",

"Tiwaz   : Sedentary, fixed, reliable",
"Berkanan: Nomad, random, changing",
"Ehwaz   : Pride, adventage, high social class",
"Mannaz  : Common folk, reality",
"Laguz   : Control",
"Ingwaz  : Development",
"Dagaz   : Worker, slave, outside",
"Othalan : Boss, master, home");*/

/*var name2 = new Array(
"Frey   : Spontanious",
"Ur     : Authority",
"Thorn  : Rejection",
"Os     : Approval",
"Rad    : Stamina",
"Ken    : Watching",
"Gyfu   : Feelings",
"Wyn    : Peace",

"Hagel  : Overwhelming",
"Nyd    : Accessible",
"Is     : Risk",
"Jera   : Control",
"Eoh    : Chores",
"Pethro : Motivated",
"Eloh   : Organising",
"Sigel  : Following",

"Tyr    : Principles",
"Birch  : Wild",
"Eh     : Status",
"Man    : Connection",
"Lagu   : Chaos",
"Ing    : Leader",
"Daeg   : Opportunity",
"Odal   : Reflexion");*/

/*var name2 = new Array(
"Frey: Prudent, flexible",
"Ur: Daring, powerful",
"Thorn: Rejection",
"Os: Adequate, standards",
"Rad: Controlled effort",
"Ken: Attention, awareness",
"Gyfu: Unrest, problem",
"Wyn: Peace, bliss",

"Hagel: Simple, just because",
"Nyd: Precautions, reason",
"Is: Caution, warning",
"Jera: Conclusion, long term",
"Eoh: Work, results",
"Pethro: Celebration",
"Eloh: Wounded, recovering, fixing",
"Sigel: Functionnal, efficient",

"Tyr: Guided, trust",
"Birch: Natural, wild",
"Eh: Hobby, passion",
"Man: Teamwork, greater good",
"Lagu: Vulnerable, victim",
"Ing: Genius, innovation",
"Daeg: Improvement, evolution",
"Odal: Rest, peace, quiet");*/

/*var name2 = new Array(
"frey: Passive, prudent",
"ur: active",
"thorn: failure",
"os: ideal, values",
"rad: temperance, moderation",
"ken: awareness",
"gyfu: unrest, disturbance",
"wyn: peace",

"hagel: overpowering",
"nyd: adaptation",
"is: confusion, doubt",
"jera: progressive",
"eoh: anabolic, increasing",
"pethro: catabolic, spending",
"eloh: impaired",
"sigel: efficient",

"tyr: faith, dreams",
"birch: everything, personal world",
"eh: choosing",
"man: necessity",
"lagu: hardship",
"ing: change, new",
"daeg: exchange",
"odal: stabilization");*/

/*var name2 = new Array(
"frey: Caution",
"ur: Strength",
"thorn: Dread",
"os: Values, ideal",
"rad: Tool, Machine",
"ken: Conscious life",
"gyfu: Pain",
"wyn: Peace",

"hagel: Brute force",
"nyd: Adaptation",
"is: Confusion",
"jera: Progress",
"eoh: Creating",
"pethro: Consuming",
"eloh: Danger",
"sigel: Luck, blessing",

"tyr: Guidance",
"birch: Choices, options",
"eh: Planning",
"man: Following instructions",
"lagu: Chaos",
"ing: Developing",
"daeg: Public",
"odal: Personnal");*/

/*var name2 = new Array(
"frey: Civilian",
"ur: Fighter",
"thorn: Evil",
"os: Good",
"rad: Others",
"ken: Self",
"gyfu: Values",
"wyn: Assets",

"hagel: Anger",
"nyd: Sadness",
"is: Fear",
"jera: Joy",
"eoh: Serious",
"pethro: Careless",
"eolh: Pain",
"sigel: Satisfaction",

"tyr: Steady",
"birch: Evolving",
"eh: Discussion",
"man: Action",
"lagu: Victim",
"ing: Control",
"daeg: Serving others",
"odal: Serving self");*/

var name2 = new Array(
"Frey",
"Ur",
"Thorn",
"Os",
"Rad",
"Ken",
"Gyfu",
"Wyn",

"Hagel",
"Nyd",
"Is",
"Jera",
"Eoh",
"Pethro",
"Eolh",
"Sigel",

"Tyr",
"Birch",
"Eh",
"Man",
"Lagu",
"Ing",
"Daeg",
"Odal");