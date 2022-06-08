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
}

const possibleNames = ['Danny James', 'Megan Jenkins', 
'Alexander Patel', 'Kwabena Ihejirika'];

const possibleLocations = ['China', 'Canada', 
'The Philippines', 'India', 'Indonesia', 'Mexico', 'Russia'];

const possibleAges = ['51', '35', '32', '19', '43', '31', '38', 
'24', '45', '16', '49', '27', '42', '30', '52'];

const possibleActivities = ['Visiting a friend', 'Drinking', 'Skydiving', 'Working',
'Playing video games', 'Getting married', 'Hiking'];

const possibleNumKilled = ['0', '1', '2', '5-10'];

const possibleRelations = ['My grandfather', 'My brother', 
'My uncle', 'My mother', 'My sister', 'My grandmother', 'My father', 'My aunt']

const possibleOccupations = ['Exobiologist', 'Computer Hardware Engineer', 
'Nuclear Engineer', 'Linguist', 'Software Engineer', 'Actor', 'Chemist', 
'Aerospace Engineer'];

const possibleBuddhismReasons = ['For political reasons', 'For a friend', 
'For a loved one', 'Just for fun', "I don't know"];

const possibleValuablesLocations = ['Under the kitchen sink', 'Behind my bookshelf',
'Under the floorboards', 'In the basement'];

const possibleComputerTimes = ['10:45 AM', '1:45 PM', '7:30 AM', '4:00 PM'];

const possibleDrugReasons = ['For a loved one', 'For a friend', 'For protection',
'It clears a guilty heart'];

const possibleReligions = ['Christianity', 'None', 'Hinduism', 'Judaism', 'Islam'];

const possibleSisterLocations = [...possibleLocations, "I don't know"];

const possibleSisterLunchTimes = ['1PM - 2PM', '10PM - 4AM', '6AM - 9PM', '5AM - 12AM',
'2PM - 3PM', '2AM - 3AM', '1AM - 2AM'];

const possibleSisterLastSeenTimes = ['2 days ago', '10 years ago', 'Before The Incident',
'Last month'];

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
    new Question('When did you last see your sister in person?', possibleSisterLastSeenTimes)
]

function Game(props) {
    let [isGameOver, setGameOver] = useState(false);

    let [question, setQuestion] = useState(questions[0]);

    console.log(question);

    const answers = [...question.displayedAnswers];

    function handleClick(answerIndex) {
        // console.log('Test: ' + answerIndex);
        const chosenAnswer = answers[answerIndex];

        if (!question.hasCorrectAnswer) {
            // console.log('Correct answer set to ' + chosenAnswer);
            question.setCorrectAnswer(chosenAnswer)
            setQuestion(randomArrayElement(questions));
        }
        else if (chosenAnswer === question.correctAnswer) {
            // console.log('Correct! Next question')
            setQuestion(randomArrayElement(questions));
        }
        else {
            console.log('Wrong! The correct answer is ' + question.correctAnswer);
        }
    }
    
    return (
        <>
            <p className="game-question">{question.questionText}</p>

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