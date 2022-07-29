var intro ="welcome"
var firstName = "what is your name?";
var lastName = "what is your lastname?";
var addres ="where do you live?"
var study = "where do you study?";
var graetWish = "what goals do you have in the future?";
var who ="how many people are in your family?"
var member = "tell in detail about your family and life?";
var friend = "will your friends help you?";
var book ="what book Do you like?"
var interest = "what are you interested in?";
var lastText = "Thank you for your attention!";

var alertIntro = alert(intro);
var answerFirstName = prompt(firstName);
var answerLastName = prompt(lastName);
var answerAddres = prompt(addres);
var answerStudy = prompt(study);
var answerGraetWish = prompt(graetWish);
var answerWho = prompt(who);
var answerMember = prompt(member);
var answerFriend = prompt(friend);
var answerBook = prompt(book);
var answerInterest = prompt(interest);
var alertLastText = alert(lastText);

console.log(`foydalanuvchi haqida malumot.

foydalanuvchi ismi ${answerFirstName}. 
foydalanuvchi familiyasi ${answerLastName}.
foydalanuvchi adresi ${answerAddres}.
foydalanuvchi qayerda oqishi ${answerStudy}.
foydalanuvchi orzusi ${answerGraetWish}.
foydalanuvchi oyilasidagilari ${answerWho}.
foydalanuvch oilada necha kishiligi ${answerMember}.
foydalanuvchi dostlari haqida ${answerFriend}.
foydalanuvchi kitobga qiziqishi ${answerBook}.
foydalanvchi nimaga qiziqishi ${answerInterest}.
tugadi ${alertLastText}.`);
