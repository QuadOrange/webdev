var express = require('express');
var app = express();

var jokes=[{setup:"What did one butt cheek say to the other?",punchline:"if we stick together, we can stop this crap!"},{setup:"What did one butt cheek say to the other?",punchline:"if we stick together, we can stop this crap!"},{setup:"What did one butt cheek say to the other?",punchline:"if we stick together, we can stop this crap!"},{setup:"I am terrified of elevators,",punchline:"I'm going to start taking steps to avoid them"},{setup:"If Jake stops coming up with jokes,",punchline:"We'll be fine"},{setup:"Why don't skeletons ever go trick or treating?",punchline:"Because they have no body to go with"},{setup:"What do you call cheese by itself?",punchline:"Provolone"},{setup:'"Ill call you later."',punchline:"Don't call me later, call me Dad"},{setup:"Dad, I'm hungry.",punchline:"Hello, Hungry. I'm Dad"},{setup:"Where does Fonzie like to go for lunch?",punchline:"Chick-Fil-Eyyyyyyyy"},{setup:"Did you hear about the cheese factory that exploded in France?",punchline:"There was nothing left but de Brie"},{setup:"I knew I shouldn't have had the seafood",punchline:"I'm feeling a little eel"},{setup:"What do you call a sketchy Italian neighbour hood?",punchline:"The Spaghetto"},{setup:"Why can't you have a nose 12 inches long?",punchline:"Because then it would be a foot"},{setup:"My wife is on a tropical food diet, the house is full of the stuff",punchline:"It's enough to make a mango crazy"},{setup:"I'd like to give a big shout out to all the sidewalks",punchline:"for keeping me off the streets"},{setup:"What does an annoying pepper do?",punchline:"It get's jalapeño face"},{setup:"Why did the scarecrow win an award?",punchline:"Because he was outstanding in his field"},{setup:"Why do bees hum?",punchline:"Because they don't know the words"},{setup:"What do prisoners use to call each other?",punchline:"Cell phones"},{setup:"What do you call cheese that isn't yours?",punchline:"Nacho Cheese"},{setup:"What do you get when you cross a snowman with a vampire",punchline:"Frostbite"},{setup:"What lies at the bottom of the ocean and twitches?",punchline:"A nervous wreck"},{setup:"Why couldn't the bicycle stand up by itself?",punchline:"It was two tired"},{setup:"What did the grape do when he got stepped on?",punchline:"He let out a little wine"},{setup:"I've just been diagnosed as colorblind",punchline:"I know, it certainly has come out of the purple"},{setup:"Last night I dreamt I was a muffler",punchline:"I woke up exhausted"},{setup:"What do you call a deer with no eyes?",punchline:"No idea"},{setup:"I just watched a program about beavers",punchline:"It was the best dam program I've ever seen"},{setup:"Two satellites decided to get married",punchline:"The wedding wasn't much, but the reception was incredible"},{setup:"Did you hear about the guy who invented the knock knock joke?",punchline:"He won the 'no-bell' prize"},{setup:"Is this pool safe for diving?",punchline:"It deep ends"},{setup:"I used to hate facial hair,",punchline:"but then it grew on me"},{setup:"What do you call a fake noodle?",punchline:"An Impasta"},{setup:"Can February March?",punchline:"No, but April May"},{setup:"Wanna hear a joke about paper?",punchline:"Nevermind, it's tearable"},{setup:"Don't trust atoms",punchline:"They make up everything"},{setup:"Who lives in the bottom under the sea",punchline:"SPONGEBOB SQUAREPANTS"},{setup:"What do you call somebody with no body and no nose?",punchline:"Nobody knows"},{setup:"What did the buffalo say to his son when he left for college?",punchline:"Bison"},{setup:"What do you call a pony with a sore throat?",punchline:"A little horse"},{setup:"I bought shoes from a drug dealer once",punchline:"I don't know what he laced them with, but I was tripping all day"},{setup:"Where do you learn to make ice cream?",punchline:"Sunday school"},{setup:"What did the officer molecule say to the suspect molecule?",punchline:"I've got my ion you"},{setup:"If prisoners could take their own mug shots,",punchline:"they'd be called cellfies"},{setup:"Why can't you hear a pterodactyl go to the bathroom?",punchline:"Because the pee is silent"},{setup:"I'm not addicated to brake fluid",punchline:"I can stop whenever I want"},{setup:"Why did the coffee file a police report?",punchline:"It got mugged"},{setup:"Did you hear about the restaurant on the moon?",punchline:"Great food, no atmosphere"},{setup:"I hate jokes about german sausages",punchline:"They're the wurst"},{setup:"Why did the can-crusher quit his job?",punchline:"Because it was soda-pressing"},{setup:"I wouldn't buy anything with velcro",punchline:"It's a total rip-off"},{setup:"Dad, can you put the cat out?",punchline:"I didn't know it was on fire"},{setup:"This graveyard looks overcrowded,",punchline:"people must be dying to get in there"},{setup:"Dad, can you put my shoes on?",punchline:"I don't think they'll fit me"},{setup:"Dad, did you get a haircut?",punchline:"No I got them all cut"},{setup:"Have you heard of the band 1023MB?",punchline:"They haven't got a gig yet"}];

var bodyParser = require('body-parser')
app.use(bodyParser.json() );

app.listen(process.env.PORT);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/app.js', function(req, res) {
    res.sendFile(__dirname + '/app.js');
});

app.route('/jokes').get(function(req,res,next){

    var randomNumber = Math.floor(Math.random()*jokes.length);

    res.send(jokes[randomNumber]);
    jokes[randomNUmber].id = randomNumber;
app.post('/upvote', function(req, res {...}));
});
