function PickRune(MyString){

name2 = new Array(
"Frey: Honor",
"Ur: Might",
"Thorn: Reprimand",
"Os: Reward",
"Rad: Work",
"Ken: Rest",
"Gyfu: Problem",
"Wyn: Solution",
"Hagel: Amateur",
"Nyd: Skilled",
"Is: Defeat",
"Jera: Victory",
"Eoh: Pay Day",
"Pethro: Shopping",
"Eloh: Dangerous",
"Sigel: Safe",
"Tyr: Truth",
"Birch: Fiction",
"Eh: Concert",
"Man: Birthday",
"Lagu: Upset",
"Ing: Controlled",
"Daeg: Public",
"Odal: Private");

 name2 = new Array("Frey","Ur","Thorn","Os","Rad","Ken","Gyfu","Wyn",
                   "Hagel","Nyd","Isa","Jera","Eoh","Pethro","Eloh","Sigel",
                   "Tyr","Birch","Eh","Man","Lagu","Ing","Daeg","Odal");

 switch(MyString){
  case "S":
   myPath = "Runes\\";
   break;

  case "P1":
   myPath = "Pictures\\";
   break;

  case "P2":
   myPath = "Pictures01\\";
   break;

  case "P3":
   myPath = "Pictures02\\";
   break;

  case "P4":
   myPath = "Pictures03\\";
   break;

  case "P5":
   myPath = "Pictures04\\";
   break;

  case "P6":
   myPath = "Pictures05\\";
   break;

  case "P7":
   myPath = "Pictures06\\";
   break;

  case "P8":
   myPath = "Pictures07\\";
   break;

  case "P9":
   myPath = "Pictures08\\";
   break;

  case "P10":
   myPath = "Pictures09\\";
   break;

  case "P11":
   myPath = "Pictures10\\";
   break;

  case "P12":
   myPath = "Pictures11\\";
   break;

  case "P13":
   myPath = "Pictures12\\";
   name2 = new Array(
   "FREY: READING THE MENU",
   "UR: WASHING DISHES",
   "THORN: TIGHT LEASH",
   "OS: DOG TREAT",
   "RAD: OVERLOADED BUS",
   "KEN: PIZZA DELIVERY",
   "GYFU: DIFFICULT",
   "WYN: EASY",

   "HAGEL: HOCKEY FIGHTING",
   "NYD: WASHING WINDOWS",
   "ISA: CONSTRUCTION FLAG",
   "JERA: HIGHWAY DRIVING",
   "EOH: SAVINGS",
   "PETHRO: EMPTY MILK BOX",
   "ELOH: GARDENING GLOVES",
   "SIGEL: ROLLERBLADES",

   "TYR: DUNGEON GROUP",
   "BIRCH: CRAFTING",
   "EH: RAID BOSS",
   "MAN: LOOT ROLL",
   "LAGU: ADDS",
   "ING: PULLING",
   "DAEG: AUCTION HOUSE",
   "ODAL: CHARACTER CREATION");
   break;

  case "P14":
   myPath = "Runes\\";
name2 = new Array ("FREY: PASSPORT",
"UR: BODYBUILDER",
"THORN: ARMY LINEUP",
"OS: GOOD GRADE",
"RAD: CHEAT CODES",
"KEN: WINDOWS LOGO",
"GYFU: FLOODING RESCUE",
"WYN: SLEEPING",

"HAGEL: COMPUTER ASSEMBLY",
"NYD: BUS STOP",
"ISA: TRYING CLOTHES",
"JERA: POPCORN",
"EOH: KEYS",
"PETHRO: CHRISTMAS GIFTS",
"ELOH: MOSQUITOS",
"SIGEL: ICE CREAM",

"TYR: PIZZA",
"BIRCH: COOKING",
"EH: TIM HORTON TEAM",
"MAN: FAMILY",
"LAGU: YOU'RE FIRED",
"ING: EARPLUGS",
"DAEG: COUPLE",
"ODAL: WARDROBE");
   name2 = new Array("Buy","Create","Conflict","Harmony","Real","Theory","Poor","Rich","Tension","Precision","Dead","Alive","Recieve","Give","Accident","Safe","Indoors","Outdoors","Alone","Team","Worn","New","Public","Territory");
   break;

  case "P14":
   myPath = "Pictures13\\";
   break;

  case "P15":
   myPath = "Pictures14\\";
   name2 = new Array("Frey","Ur","Thorn","Os","Rad","Ken","Gyfu","Wyn",
                     "Hagel","Nyd","Isa","Jera","Eoh","Pethro","Eloh","Sigel",
                     "Tyr","Birch","Eh","Man","Lagu","Ing","Daeg","Odal");
   name2 = new Array("Sedentary","Active","Disorder","Order","Traveling","Indoors","Work","Peace",
                     "Recursive","Progress","Danger","Healing","Harvesting","Using","Field Work","Safe",
                     "Mass Produced","Unique","Work in Progress","Clean and Proper","Post Traumatic Syndrom","Decision Layer","Public","Private");
   break;

  case "P16":
   myPath = "Pictures15\\";
   break;

  case "P17":
   myPath = "Pictures16\\";
   break;

  case "P18":
   myPath = "Pictures17\\";
   break;

  case "P19":
   myPath = "Pictures18\\";
   break;

  case "P20":
   myPath = "Pictures19\\";
   break;

  case "P21":
   myPath = "Pictures20\\";
   break;

  case "P22":
   myPath = "Pictures21\\";
   break;

  case "P23":
   myPath = "Pictures22\\";
   name2 = new Array("01","02","03","04","05","06","07","08",
                     "09","10","11","12","13","14","15","16",
                     "17","18","19","20","21","22","23","24");
break;

  case "P24":
   myPath = "Pictures23\\";
   name2 = new Array("01","02","03","04","05","06","07","08",
                     "09","10","11","12","13","14","15","16",
                     "17","18","19","20","21","22","23","24");
   break;

  case "P25":
   myPath = "Pictures24\\";
   name2 = new Array("01","02","03","04","05","06","07","08",
                     "09","10","11","12","13","14","15","16",
                     "17","18","19","20","21","22","23","24");
   break;

  case "P26":
   myPath = "Pictures25\\";
   name2 = new Array("01","02","03","04","05","06","07","08",
                     "09","10","11","12","13","14","15","16",
                     "17","18","19","20","21","22","23","24");
   break;

  case "P27":
   myPath = "Pictures26\\";
   break;

  case "P28":
   myPath = "Pictures27\\";
   name2 = new Array("01","02","03","04","05","06","07","08",
                     "09","10","11","12","13","14","15","16",
                     "17","18","19","20","21","22","23","24");
   break;

  case "P29":
   myPath = "Pictures28\\";
   name2 = new Array("01","02","03","04","05","06","07","08",
                     "09","10","11","12","13","14","15","16",
                     "17","18","19","20","21","22","23","24");
   break;

  default:
   alert("other");
  break;
 }
}
