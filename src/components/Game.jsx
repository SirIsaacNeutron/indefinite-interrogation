import React, { useState } from 'react';

function randomArrayElement(array) {
    const randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];
}

// Returns an array of length n, with no duplicates, from 
// random elements in array
function getNRandomAnswers(array, n, correctAnswer = null) {
    let answerSet = new Set();
    while (answerSet.size < n) {
        const randomAnswer = randomArrayElement(array);
        if (randomAnswer !== correctAnswer) {
            answerSet.add(randomAnswer);
        }
    }

    return Array.from(answerSet);
}

// Durstenfeld shuffle; see https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
class Question {
    constructor(questionText, possibleAnswers) {
        this.questionText = questionText;
        this.possibleAnswers = possibleAnswers;

        this.hasCorrectAnswer = false;
        this.correctAnswer = null;

        // possibleAnswers is all the possible answer choices that can be used to
        // build displayedAnswers. displayedAnswers is exactly 4 answers, with only
        // 1 being the correct one
        this.createDisplayedAnswers();
    }

    createDisplayedAnswers() {
        if (this.correctAnswer !== null) {
            const wrongAnswers = getNRandomAnswers(this.possibleAnswers, 
                3, this.correctAnswer);
            this.displayedAnswers = [this.correctAnswer, ...wrongAnswers];
            shuffleArray(this.displayedAnswers);
        }
        else {
            const randomAnswers = getNRandomAnswers(this.possibleAnswers, 4);
            this.displayedAnswers = [...randomAnswers];
            // No shuffling needed as the answers are chosen randomly; we only
            // need to shuffle to make sure the correct answer isn't always displayed
            // in the same place
        }
    }

    setCorrectAnswer(answer) {
        this.correctAnswer = answer;
        this.hasCorrectAnswer = true;
    }

    reset() {
        this.correctAnswer = null;
        this.hasCorrectAnswer = false;
        this.createDisplayedAnswers();
    }
}

const possibleNames = ['Danny James', 'Megan Jenkins', 
'Alexander Patel', 'Kwabena Ihejirika', 'Mei Ueda', 'Nishant Chowdhury',
'Yejide Afolayan', 'Tina Powell', 'Hong Wu', 'Kevin Campbell', 'Ai Chen', 
'Seok Yi', 'Robert Dixon', 'Jack Marshall'];

const possibleLocations = ['China', 'Canada', 
'The Philippines', 'India', 'Indonesia', 'Mexico', 'Russia', 'Brazil', 
'The United States', 'The United Kingdom', 'Japan', 'Italy', 'Germany'];

const possibleAges = ['51', '35', '33', '32', '37', '19', '43', '31', '38', 
'24', '45', '46', '16', '49', '27', '42', '30', '52', '21'];

const possibleActivities = ['Visiting a friend', 'Drinking', 'Skydiving', 'Working',
'Playing video games', 'Getting married', 'Hiking', 'Selling drugs', 'Cooking drugs',
'Enjoying nature', 'Using the bathroom', 'Ice skating'];

const possibleNumKilled = ['0', '1', '2', '3', '4', '5-10'];

const possibleRelations = ['My grandfather', 'My brother', 
'My uncle', 'My mother', 'My sister', 'My grandmother', 'My father', 'My aunt']

const possibleOccupations = ['Exobiologist', 'Computer Hardware Engineer', 
'Nuclear Engineer', 'Linguist', 'Software Engineer', 'Actor', 'Chemist', 
'Aerospace Engineer', 'Floral Designer', 'Architect', 'Writer', 'Civil Engineer'];

const possibleReasons = ['For political reasons', 'For a loved one', 
'Just for fun', 'For a friend', 'For protection', 'Out of necessity', 
'For the children'];

const possibleBuddhismReasons = [...possibleReasons, "I don't know"];

const possibleValuablesLocations = ['Under the kitchen sink', 'Behind my bookshelf',
'Under the floorboards', 'In the basement', 'The bathroom cabinet', 'Under my bed',
'My bedroom closet'];

const possibleComputerTimes = ['10:45 AM', '1:45 PM', '7:30 AM', '4:00 PM', 'Midnight',
'8:00 AM', '6:00 PM', '9:06 AM', '5:40 PM', 'Noon'];

const possibleDrugReasons = [...possibleReasons, 'It clears a guilty heart'];

const possibleReligions = ['Christianity', 'None', 'Hinduism', 'Judaism', 'Islam'];

const possibleSisterLocations = [...possibleLocations, "I don't know"];

const possibleSisterLunchTimes = ['1PM - 2PM', '10PM - 4AM', '6AM - 9PM', '5AM - 12AM',
'2PM - 3PM', '2AM - 3AM', '3AM - 4AM', '1AM - 2AM', '7AM - 3PM', '8AM - 6PM', '11AM - 12PM'];

const possibleSisterLastSeenTimes = ['2 days ago', '10 years ago', 'Before The Incident',
'Last month', '8 years ago', '9 years ago', 'Last year', 'Last week', '11 years ago', '7 years ago', 
'6 years ago', 'Yesterday', 'A few hours ago'];

const possibleTalkTimes = ['Never', 'Tomorrow', 'In a few days', 'In a few weeks',
'Next week', 'In about a year', 'In several months'];

const possibleMemorySounds = ["I don't remember", 'There are four facets of mind',
'We brought you here for a reason', 'When did you exist?'];

const possibleDestinations = ['Neptune', 'The Asteroid Belt', 'Jupiter', 'Saturn', 
'The Moon colony', 'Mars'];

const possibleWeapons = ['Clubs', 'Submachine guns', 'Pistols', 'Antimatter mints',
'Swords', 'Javelins'];

const possibleRestaurants = ['The White Rug', 'Trounce Steaks', 'The Dancing Crow', 
'The Eating Hole', 'The Blue Daisy', "Supreme Overlord's Noodles", 'Stellar Seafood'];

const possibleStrange = ['A hooded figure', 'A glowing skyward object', 
'A one-eyed man', 'A white motor vehicle'];

const possibleTerroristLeaders = ['Lady Dukkha', 'Dr. Smith', "I'm not a terrorist",
"I don't know", '...What?'];

const possibleDepartureHelpers = [...possibleRelations, 'No one!'];

const possibleDrugSellers = [...possibleRelations, 'A stranger'];

const possibleCriticismReasons = ['She was angry', 'That question is unfair',
"I don't remember", 'She felt it was important', 'For school'];

const possibleCodes = ['Sbyybj @OenaqYvory', 'Va gur qlfgbcvn2a shgher',
'Guvf zft vf abg 1frpher', 'Vaqrsvavgr frdhry'];

const questions = [
    new Question('What is your full name?', possibleNames),
    new Question('How old are you?', possibleAges),
    new Question('Where were you born?', possibleLocations),
    new Question('Where were you during The Incident?', possibleLocations),
    new Question('What were you doing the day of The Incident?', possibleActivities),
    new Question('How many did you kill during The Incident?', possibleNumKilled),
    new Question('Who are you closest to?', possibleRelations),
    new Question('How old is your sister?', possibleAges),
    new Question('What is your occupation?', possibleOccupations),
    new Question('Your sister converted to Buddhism. Why?', possibleBuddhismReasons),
    new Question('Where in your home do you keep your valuables?', possibleValuablesLocations),
    new Question('When did you last log into a computer console?', possibleComputerTimes),
    new Question('Why have you been buying illegal drugs like SpyteFire?', possibleDrugReasons),
    new Question("What was your sister's occupation?", possibleOccupations),
    new Question('Which religion do you identify with?', possibleReligions),
    new Question('What are the whereabouts of your sister?', possibleSisterLocations),
    new Question('When does your sister usually go out for lunch?', possibleSisterLunchTimes),
    new Question('When did you last see your sister in person?', possibleSisterLastSeenTimes),
    new Question('When did your sister run away from home?', possibleSisterLastSeenTimes),
    new Question('When do you usally go out for lunch?', possibleSisterLunchTimes),
    new Question('When did you search "overthrow government" yesterday?', possibleComputerTimes),
    new Question('When were you planning to talk to us about your sister?', possibleTalkTimes),
    new Question('What did you hear, just as you lost your memory?', possibleMemorySounds),
    new Question('Where were you planning to go after leaving Earth?', possibleDestinations),
    new Question('What kinds of weapons have you been buying?', possibleWeapons),
    new Question('In which restaurant do you have your lunch meetings?', possibleRestaurants),
    new Question('What period of The Incident do you have no memory of?', possibleSisterLunchTimes),
    new Question('What seemed strange to you the day before The Incident?', possibleStrange),
    new Question('Who is the leader of your terrorist cell?', possibleTerroristLeaders),
    new Question('Before we got you, when were you planning to leave Earth?', possibleTalkTimes),
    new Question('Who helped arrange your departure from Earth?', possibleDepartureHelpers),
    new Question('Who sold you illegal drugs like SpyteFire?', possibleDrugSellers),
    new Question("Who is your sister's significant other?", possibleNames),
    new Question('Why were you planning to leave Earth?', possibleReasons),
    new Question('Years ago, your sister criticized the government. Why?', possibleCriticismReasons),
    new Question('You recently received a coded message. What did it say?', possibleCodes)
]

const wrongAnswerReplies = ['You slipped up!', 'Liar! You contradicted yourself.', 
"Your responses don't match.", 'Liar!'
]

const correctAnswerVariations = ["Here's your previous answer: ", 'This was what you said before: ',
'Earlier you said: '
]

function getWrongAnswerReply() {
    return randomArrayElement(wrongAnswerReplies) + ' ' + randomArrayElement(correctAnswerVariations);
}

function Game(props) {
    let [question, setQuestion] = useState(questions[0]);

    console.log(question);

    const answers = [...question.displayedAnswers];

    function handleClick(answerIndex) {
        // Prevents users from continuing to further questions after wrong answers
        if (props.isGameOver) { return; }

        // console.log('Test: ' + answerIndex);
        const chosenAnswer = answers[answerIndex];

        if (!question.hasCorrectAnswer) {
            // console.log('Correct answer set to ' + chosenAnswer);
            question.setCorrectAnswer(chosenAnswer)
            // Make sure the answers aren't displayed the same way next time
            question.createDisplayedAnswers();
            setQuestion(randomArrayElement(questions));
        }
        else if (chosenAnswer === question.correctAnswer) {
            // console.log('Correct! Next question')
            setQuestion(randomArrayElement(questions));
        }
        else {
            // console.log('Wrong! The correct answer is ' + question.correctAnswer);
            props.setGameOver(true);
            
            setTimeout(() => {
                // This forEach is required to reset the Question answers;
                // otherwise they'll keep the correctAnswer from the previous session!
                questions.forEach(q => {
                    q.reset();
                })
    
                setQuestion(questions[0]);

                props.setGameOver(false);

                // Return to Main Menu
                props.setGameStarted(false);
            }, 3000)
        }
    }
    
    return (
        <>
            <p className="game-question">{props.isGameOver ? `${getWrongAnswerReply()} ${question.correctAnswer}`
            : question.questionText}</p>

            <div className="container">
                <div className="row row-eq-height">
                    <div className="col">
                        <button className="btn button"
                        onClick={() => handleClick(0)}>{answers[0]}</button>
                    </div>
                    <div className="col">
                        <button className="btn button"
                        onClick={() => handleClick(1)}>{answers[1]}</button>
                    </div>
                </div>
                <div className="row row-eq-height">
                    <div className="col">
                        <button className="btn button"
                        onClick={() => handleClick(2)}>{answers[2]}</button>
                    </div>
                    <div className="col">
                        <button className="btn button"
                        onClick={() => handleClick(3)}>{answers[3]}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Game;