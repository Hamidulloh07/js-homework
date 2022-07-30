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
var answerFirstName = prompt(firstName).trim();
var answerLastName = prompt(lastName).trim();
var answerAddres = prompt(addres).trim();
var answerStudy = prompt(study).trim();
var answerGraetWish = prompt(graetWish).trim();
var answerWho = prompt(who).trim();
var answerMember = prompt(member).trim();
var answerFriend = prompt(friend).trim();
var answerBook = prompt(book).trim();
var answerInterest = prompt(interest).trim();
var alertLastText = alert(lastText);

var paragraph = document.createElement("p");
paragraph.textContent = ` ${'Malumot!'}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `Foydalanuvchi ismi, ${answerFirstName}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `Foydalanuvchi familiyasi , ${answerLastName}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `Foydalanuvchi familiyasi , ${answerLastName}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `Foydalanuvchi adresi, ${answerAddres}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `Foydalanuvchi qayerda oqishi, ${answerStudy}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `Foydalanuvchi orzusi, ${answerGraetWish}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `Foydalanuvchi oyilasidagilari, ${answerWho}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `Foydalanuvch oilada necha kishiligi, ${answerMember}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `Foydalanuvchi dostlari haqida, ${answerFriend}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `Foydalanuvchi kitobga qiziqishi, ${answerBook}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `Foydalanuvchi nimaga qiziqishi, ${answerInterest}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `${'Tamom'}`;
document.body.appendChild(paragraph);

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
foydalanuvchi nimaga qiziqishi ${answerInterest}.
tugadi ${alertLastText}.`);
