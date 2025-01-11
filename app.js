const words = [
  { word: "Aerobics", translation: "aerobika" },
  { word: "Blog", translation: "blog" },
  { word: "Busy", translation: "band" },
  { word: "Camping", translation: "lagerda tunash" },
  { word: "Chat", translation: "suhbatlashmoq" },
  { word: "Damp", translation: "nam" },
  { word: "Dream", translation: "tush, orzu" },
  { word: "Early", translation: "ertaroq" },
  { word: "Equal", translation: "teng" },
  { word: "Film v", translation: "film ko‘rmoq" },
  { word: "Fun", translation: "qiziqarli" },
  { word: "Gym", translation: "sport zal" },
  { word: "Housework", translation: "uy ishlari" },
  { word: "Humid", translation: "nam havo" },
  { word: "Indoors", translation: "uy ichida" },
  { word: "Late", translation: "kech" },
  { word: "Lie-in", translation: "kechroq uyg‘onmoq" },
  { word: "Light", translation: "yorug‘lik, yengil" },
  { word: "Lightning", translation: "chaqmoq" },
  { word: "Look", translation: "qaramoq" },
  { word: "Make a list", translation: "ro‘yxat tuzmoq" },
  { word: "Make plans", translation: "rejalar tuzmoq" },
  { word: "Meal", translation: "ovqat" },
  { word: "Nasty", translation: "yoqimsiz" },
  { word: "Outdoors", translation: "tashqarida" },
  { word: "Period", translation: "davr" },
  { word: "Pleasant", translation: "yoqimli" },
  { word: "Pleasure", translation: "zavq" },
  { word: "Post", translation: "xabar joylashtirmoq" },
  { word: "Promise", translation: "va’da bermoq" },
  { word: "Psychologist", translation: "psixolog" },
  { word: "Record", translation: "yozib olmoq" },
  { word: "Relationship", translation: "munosabat" },
  { word: "Relative", translation: "qarindosh" },
  { word: "Reviewer", translation: "sharhlovchi" },
  { word: "Snowfall", translation: "qor yog‘ishi" },
  { word: "Spend time", translation: "vaqt o‘tkazmoq" },
  { word: "Stay in", translation: "uyda qolmoq" },
  { word: "To-do list", translation: "vazifalar ro‘yxati" },
  { word: "Trip", translation: "sayohat" },
  { word: "Uncomfortable", translation: "noqulay" },
  { word: "Walk", translation: "yurmoq" },
  { word: "Journey", translation: "sayohat" },
  { word: "Weather", translation: "ob-havo" },
  { word: "Relax", translation: "dam olmoq" },
  { word: "Adventure", translation: "sarguzasht" },
  { word: "Explore", translation: "o‘rganmoq" },
  { word: "Vacation", translation: "ta’til" },
  { word: "Destination", translation: "manzil" },
  { word: "Candle", translation: "sham" },
  { word: "CCTV camera", translation: "kuzatuv kamerası" },
  { word: "Chest of drawers", translation: "tortmali shkaf" },
  { word: "Cloth", translation: "mato" },
  { word: "Collect", translation: "yig‘moq" },
  { word: "Crowded", translation: "gavjum" },
  { word: "Destroy", translation: "vayron qilmoq" },
  { word: "Dull", translation: "zerikarli" },
  { word: "Dustpan and brush", translation: "supurgi va cho‘mich" },
  { word: "Duvet", translation: "ko‘rpa" },
  { word: "Fast lane", translation: "tez harakatlanish yo‘lagi" },
  { word: "Fine", translation: "jarima" },
  { word: "Flower stall", translation: "gul rastasi" },
  { word: "House swap", translation: "uy almashish" },
  { word: "Household possessions", translation: "uy-ro‘zg‘or buyumlari" },
  { word: "House-sit", translation: "uyga qarab turmoq" },
  { word: "Industry", translation: "sanoat" },
  { word: "Lively", translation: "jonli, quvnoq" },
  { word: "Location", translation: "joylashuv" },
  { word: "Market place", translation: "bozor maydoni" },
  { word: "Maze", translation: "labirint" },
  { word: "Microwave oven", translation: "mikroto‘lqinli pech" },
  { word: "Mirror", translation: "oyna" },
  { word: "Narrow", translation: "tor" },
  { word: "Navigation", translation: "yo‘nalish, navigatsiya" },
  { word: "Pan", translation: "qozon" },
  { word: "Parking space", translation: "avtoturargoh joyi" },
  {
    word: "Pavement artist",
    translation: "yo‘l chetida surat chizuvchi rassom",
  },
  { word: "Pedestrian area", translation: "piyodalar hududi" },
  { word: "Play area", translation: "o‘yin maydoni" },
  { word: "Project", translation: "loyiha" },
  { word: "Publisher", translation: "nashriyotchi" },
  { word: "Rage", translation: "g‘azab" },
  { word: "Recycle", translation: "qayta ishlash" },
  { word: "Rubbish", translation: "chiqindi" },
  { word: "Rug", translation: "gilamcha" },
  { word: "Safe", translation: "xavfsiz" },
  { word: "Satellite dish", translation: "sun’iy yo‘ldosh antennasi" },
  { word: "Sheet", translation: "choyshab" },
  { word: "Shop display", translation: "do‘kon vitrinası" },
  { word: "Shopper", translation: "xaridor" },
  { word: "Solution", translation: "yechim" },
  { word: "Souvenir seller", translation: "sovg‘a sotuvchi" },
  { word: "Stall", translation: "rastasi" },
  { word: "Statue", translation: "haykal" },
  { word: "Strange", translation: "g‘alati" },
  { word: "Street cleaner", translation: "ko‘cha tozalovchi" },
  { word: "Street performer", translation: "ko‘cha artisti" },
  { word: "Student accommodation", translation: "talabalar yotoqxonasi" },
  { word: "Tap", translation: "kran" },
  { word: "Towel", translation: "sochiq" },
  { word: "Tower block", translation: "ko‘p qavatli bino" },
  { word: "Truck", translation: "yuk mashinasi" },
  { word: "Wardrobe", translation: "kiyim shkafi" },
  { word: "Wash basin", translation: "yuvinish uchun rakovina" },
];

let currentIndex = 0;
let isShowingTranslation = false;

const flashcard = document.getElementById("flashcard");
const nextBtn = document.getElementById("nextBtn");

function updateCard() {
  const front = flashcard.querySelector(".front");
  const back = flashcard.querySelector(".back");
  const currentWord = words[currentIndex];

  if (isShowingTranslation) {
    front.textContent = currentWord.translation;
    flashcard.classList.add("flipped");
  } else {
    front.textContent = currentWord.word;
    flashcard.classList.remove("flipped");
  }
  back.textContent = currentWord.translation;
}

nextBtn.addEventListener("click", () => {
  if (!isShowingTranslation) {
    isShowingTranslation = true;
    updateCard();
  } else {
    currentIndex = (currentIndex + 1) % words.length;
    isShowingTranslation = false;
    updateCard();
  }
});

updateCard();
