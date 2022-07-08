import React, { useState } from 'react'

import buttonPress from '../sounds/button_press.mp3'
import buttonWrong from '../sounds/wrong_answer.mp3'

function randomArrayElement(array) {
    const randIndex = Math.floor(Math.random() * array.length)
    return array[randIndex]
}

// Returns an array of length n, with no duplicates, from 
// random elements in array
function getNRandomAnswers(array, n, correctAnswer = null) {
    let answerSet = new Set()
    while (answerSet.size < n) {
        const randomAnswer = randomArrayElement(array)
        if (randomAnswer !== correctAnswer) {
            answerSet.add(randomAnswer)
        }
    }

    return Array.from(answerSet)
}

// Durstenfeld shuffle; see https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}
class Question {
    constructor(questionText, possibleAnswers, key = null) {
        this.questionText = questionText
        this.possibleAnswers = possibleAnswers

        this.hasCorrectAnswer = false
        this.correctAnswer = null

        // possibleAnswers is all the possible answer choices that can be used to
        // build displayedAnswers. displayedAnswers is exactly 4 answers, with only
        // 1 being the correct one
        this.createDisplayedAnswers()

        this.key = key
    }

    createDisplayedAnswers() {
        if (this.correctAnswer !== null) {
            const wrongAnswers = getNRandomAnswers(this.possibleAnswers, 
                3, this.correctAnswer)
            this.displayedAnswers = [this.correctAnswer, ...wrongAnswers]
            shuffleArray(this.displayedAnswers)
        }
        else {
            const randomAnswers = getNRandomAnswers(this.possibleAnswers, 4)
            this.displayedAnswers = [...randomAnswers]
            // No shuffling needed as the answers are chosen randomly; we only
            // need to shuffle to make sure the correct answer isn't always displayed
            // in the same place
        }
    }

    setCorrectAnswer(answer) {
        this.correctAnswer = answer
        this.hasCorrectAnswer = true
    }

    reset() {
        this.correctAnswer = null
        this.hasCorrectAnswer = false
        this.createDisplayedAnswers()
    }
}

const possibleNames = ['Danny James', 'Megan Jenkins', 
'Alexander Patel', 'Kwabena Ihejirika', 'Mei Ueda', 'Nishant Chowdhury',
'Yejide Afolayan', 'Tina Powell', 'Hong Wu', 'Kevin Campbell', 'Ai Chen', 
'Seok Yi', 'Robert Dixon', 'Jack Marshall']

// These functions help build the report
export function getGenderPronoun(name) {
    if (name.startsWith('Megan') || name.startsWith('Mei') || name.startsWith('Yejide')
    || name.startsWith('Tina') || name.startsWith('Ai')) {
        return 'she'
    }
    return 'he'
}

export function getGenderPossessivePronoun(name) {
    if (getGenderPronoun(name) === 'she') {
        return 'her'
    }
    return 'his'
}

const possibleLocations = ['China', 'Canada', 
'The Philippines', 'India', 'Indonesia', 'Mexico', 'Russia', 'Brazil', 
'The United States', 'The United Kingdom', 'Japan', 'Italy', 'Germany']

const possibleAges = ['51', '35', '33', '32', '37', '19', '43', '31', '38', 
'24', '45', '46', '16', '49', '27', '42', '30', '52', '21']

const possibleActivities = ['Visiting a friend', 'Drinking', 'Skydiving', 'Working',
'Playing video games', 'Getting married', 'Hiking', 'Selling drugs', 'Cooking drugs',
'Enjoying nature', 'Using the bathroom', 'Ice skating']

const possibleNumKilled = ['0', '1', '2', '3', '4', '5-10']

const possibleRelations = ['My grandfather', 'My brother', 
'My uncle', 'My mother', 'My sister', 'My grandmother', 'My father', 'My aunt']

const possibleOccupations = ['Exobiologist', 'Computer Hardware Engineer', 
'Nuclear Engineer', 'Linguist', 'Software Engineer', 'Actor', 'Chemist', 
'Aerospace Engineer', 'Floral Designer', 'Architect', 'Writer', 'Civil Engineer']

const possibleReasons = ['For political reasons', 'For a loved one', 
'Just for fun', 'For a friend', 'For protection', 'Out of necessity', 
'For the children']

const possibleBuddhismReasons = [...possibleReasons, "I don't know"]

const possibleValuablesLocations = ['Under the kitchen sink', 'Behind my bookshelf',
'Under the floorboards', 'In the basement', 'The bathroom cabinet', 'Under my bed',
'My bedroom closet']

const possibleComputerTimes = ['10:45 AM', '1:45 PM', '7:30 AM', '4:00 PM', 'Midnight',
'8:00 AM', '6:00 PM', '9:06 AM', '5:40 PM', 'Noon']

const possibleDrugReasons = [...possibleReasons, 'It clears a guilty heart']

const possibleReligions = ['Christianity', 'None', 'Hinduism', 'Judaism', 'Islam']

const possibleSisterLocations = [...possibleLocations, "I don't know"]

const possibleSisterLunchTimes = ['1PM - 2PM', '10PM - 4AM', '6AM - 9PM', '5AM - 12AM',
'2PM - 3PM', '2AM - 3AM', '3AM - 4AM', '1AM - 2AM', '7AM - 3PM', '8AM - 6PM', '11AM - 12PM']

const possibleSisterLastSeenTimes = ['2 days ago', '10 years ago', 'Before The Incident',
'Last month', '8 years ago', '9 years ago', 'Last year', 'Last week', '11 years ago', '7 years ago', 
'6 years ago', 'Yesterday', 'A few hours ago']

const possibleTalkTimes = ['Never', 'Tomorrow', 'In a few days', 'In a few weeks',
'Next week', 'In about a year', 'In several months']

const possibleMemorySounds = ["I don't remember", 'There are four facets of mind',
'We brought you here for a reason', 'When did you exist?']

const possibleDestinations = ['Neptune', 'The Asteroid Belt', 'Jupiter', 'Saturn', 
'The Moon colony', 'Mars']

const possibleWeapons = ['Clubs', 'Submachine guns', 'Pistols', 'Antimatter mints',
'Swords', 'Javelins']

const possibleRestaurants = ['The White Rug', 'Trounce Steaks', 'The Dancing Crow', 
'The Eating Hole', 'The Blue Daisy', "Supreme Overlord's Noodles", 'Stellar Seafood']

const possibleStrange = ['A hooded figure', 'A glowing skyward object', 
'A one-eyed man', 'A white motor vehicle']

const possibleTerroristLeaders = ['Lady Dukkha', 'Dr. Smith', "I'm not a terrorist",
"I don't know", '...What?']

const possibleDepartureHelpers = [...possibleRelations, 'No one!']

const possibleDrugSellers = [...possibleRelations, 'A stranger']

const possibleCriticismReasons = ['She was angry', 'That question is unfair',
"I don't remember", 'She felt it was important', 'For school']

const possibleCodes = ['Sbyybj @OenaqYvory', 'Va gur qlfgbcvn2a shgher',
'Guvf zft vf abg 1frpher', 'Vaqrsvavgr frdhry']

// These dictionaries show which questions affect the post-game Report
const youQuestions = {
    'name': 'What is your full name?',
    'how old': 'How old are you?',
    'where born': 'Where were you born?',
    'your location': 'Where were you during The Incident?',
    'what doing': 'What were you doing the day of The Incident?',
    'closest to': 'Who are you closest to?',
    'your occupation': 'What is your occupation?',
    'religion': 'Which religion do you identify with?',
    'how many killed': 'How many did you kill during The Incident?',
}

const sisQuestions = {
    'sis how old': 'How old is your sister?',
    'sis why buddhism': 'Your sister converted to Buddhism. Why?',
    'sis occupation': "What was your sister's occupation?",
    'sis whereabouts': 'What are the whereabouts of your sister?',
    'sis lunch when': 'When does your sister usually go out for lunch?',
    'sis last seen': 'When did you last see your sister in person?',
    'sis ran away': 'When did your sister run away from home?',
    'sis sig other': "Who is your sister's significant other?",
}

const list1 = [
    new Question(youQuestions['name'], possibleNames, 'name'),
    new Question(youQuestions['how old'], possibleAges, 'how old'),
    new Question(youQuestions['where born'], possibleLocations, 'where born'),
    new Question(youQuestions['your location'], possibleLocations, 'your location'),
    new Question(youQuestions['what doing'], possibleActivities, 'what doing'),
    new Question(youQuestions['closest to'], possibleRelations, 'closest to'),
    new Question(youQuestions['your occupation'], possibleOccupations, 'your occupation'),
    new Question('Where in your home do you keep your valuables?', possibleValuablesLocations),
    new Question(youQuestions['religion'], possibleReligions, 'religion')
]

const list2 = [
    new Question(sisQuestions['sis how old'], possibleAges, 'sis how old'),
    new Question(sisQuestions['sis why buddhism'], possibleBuddhismReasons, 'sis why buddhism'),
    new Question(sisQuestions['sis occupation'], possibleOccupations, 'sis occupation'),
    new Question(sisQuestions['sis whereabouts'], possibleSisterLocations, 'sis whereabouts'),
    new Question(sisQuestions['sis lunch when'], possibleSisterLunchTimes, 'sis lunch when'),
    new Question(sisQuestions['sis last seen'], possibleSisterLastSeenTimes, 'sis last seen'),
    new Question(sisQuestions['sis ran away'], possibleSisterLastSeenTimes, 'sis ran away'),
    new Question('When were you planning to talk to us about your sister?', possibleTalkTimes),
    new Question('Why have you been buying illegal drugs like SpyteFire?', possibleDrugReasons),
    new Question('Who sold you illegal drugs like SpyteFire?', possibleDrugSellers),
    new Question('When did you last log into a computer console?', possibleComputerTimes),
    new Question('When do you usally go out for lunch?', possibleSisterLunchTimes),
    new Question('How many did you kill during The Incident?', possibleNumKilled),
]

const list3 = [
    new Question("Who is your sister's significant other?", possibleNames),
    new Question('Years ago, your sister criticized the government. Why?', possibleCriticismReasons),
    new Question('What did you hear, just as you lost your memory?', possibleMemorySounds),
    new Question('Where were you planning to go after leaving Earth?', possibleDestinations),
    new Question('What kinds of weapons have you been buying?', possibleWeapons),
    new Question('In which restaurant do you have your lunch meetings?', possibleRestaurants),
    new Question('What period of The Incident do you have no memory of?', possibleSisterLunchTimes),
    new Question('What seemed strange to you the day before The Incident?', possibleStrange),
    new Question('Who is the leader of your terrorist cell?', possibleTerroristLeaders),
    new Question('Before we got you, when were you planning to leave Earth?', possibleTalkTimes),
    new Question('Who helped arrange your departure from Earth?', possibleDepartureHelpers),
    new Question('Why were you planning to leave Earth?', possibleReasons),
    new Question('You recently received a coded message. What did it say?', possibleCodes),
    new Question('When did you search "overthrow government" yesterday?', possibleComputerTimes)
]

const questions = [
    list1,
    list2,
    list3
]

const wrongAnswerReplies = ['You slipped up!', 'Liar! You contradicted yourself.', 
"Your responses don't match.", 'Liar!'
]

const correctAnswerVariations = ["Here's your previous answer: ", 'This was what you said before: ',
'Earlier you said: '
]

const questionIntroVariations = ['I see.', 'Interesting.']

function getWrongAnswerReply() {
    return randomArrayElement(wrongAnswerReplies) + ' ' + randomArrayElement(correctAnswerVariations);
}

function getInitialQuestionList(questionsIndices) {
    let initialList = [list1[0], list1[1], list1[2]]

    while (initialList.length < 10) {
        const nextIndex = randomArrayElement(questionsIndices)

        const nextQuestion = randomArrayElement(questions[nextIndex])

        const lastInitialListIndex = initialList.length - 1

        if (nextQuestion.questionText !== initialList[lastInitialListIndex].questionText) {
            initialList.push(nextQuestion)
        }
    }

    return initialList
}

function getNextQuestionList(questionsIndices) {
    let nextList = []

    while (nextList.length < 10) {
        const nextIndex = randomArrayElement(questionsIndices)
        const nextQuestion = randomArrayElement(questions[nextIndex])

        const lastListIndex = nextList.length - 1

        if (nextList.length === 0) {
            nextList.push(nextQuestion)
        }
        else if (nextQuestion.questionText !== nextList[lastListIndex].questionText) {
            nextList.push(nextQuestion)
        }
    }

    return nextList
}

let questionList = getInitialQuestionList([0])
let currentListIndex = 0
let questionsIndices = [0]

function Game(props) {
    const [question, setQuestion] = useState(questionList[currentListIndex])

    const answers = [...question.displayedAnswers]
    console.log(question)

    function getNextQuestion() {
        //setCurrentListIndex(currentListIndex + 1)
        const nextListIndex = currentListIndex + 1
        if (nextListIndex >= questionList.length) {
            const nextQuestionsIndex = questionsIndices[questionsIndices.length - 1] + 1
            // [0], [0, 1], [0, 1, 2], ... until there are no more indices to add
            if (nextQuestionsIndex < questions.length) {
                questionsIndices = [...questionsIndices, nextQuestionsIndex]
            }

            const nextList = getNextQuestionList(questionsIndices)
            
            currentListIndex = 0
            questionList = nextList

            return questionList[currentListIndex]
        }

        currentListIndex = nextListIndex
        const currentQuestion = questionList[currentListIndex]
        return currentQuestion
    }

    function handleClick(answerIndex) {
        // Prevents users from continuing to further questions after wrong answers
        if (props.isGameOver) { return; }

        const chosenAnswer = answers[answerIndex]

        if (!question.hasCorrectAnswer) {
            const buttonSound = new Audio(buttonPress)
            buttonSound.play()
            question.setCorrectAnswer(chosenAnswer)

            // Make sure the answers aren't displayed the same way next time
            question.createDisplayedAnswers()

            const nextQuestion = getNextQuestion()
            setQuestion(nextQuestion)

            props.setScore(props.score + 1)

            if (question.key !== null) {
                props.setAnsweredQuestions(aq => {
                    // This copying code is needed for the correctAnswer and other attributes
                    // to be preserved
                    const newQuestion = new Question(question.questionText, question.possibleAnswers, question.key)
                    newQuestion.correctAnswer = question.correctAnswer
                    return [...aq, newQuestion]
                })
            }
        }
        else if (chosenAnswer === question.correctAnswer) {
            const buttonSound = new Audio(buttonPress)
            buttonSound.play()

            question.createDisplayedAnswers()

            const nextQuestion = getNextQuestion()
            setQuestion(nextQuestion)
            props.setScore(props.score + 1)
        }
        else {
            const wrongAnswerSound = new Audio(buttonWrong)
            wrongAnswerSound.play()

            props.setGameOver(true)
            
            setTimeout(() => {
                // This forEach is required to reset the Question answers;
                // otherwise they'll keep the correctAnswer from the previous session!
                questions.forEach(array => {
                    array.forEach(q => {
                        q.reset()
                    })
                })

                questionsIndices = [0]
                currentListIndex = 0
                questionList = getInitialQuestionList(questionsIndices)
    
                setQuestion(questions[0][0])

                props.setGameOver(false)

                props.setShowReport(true)

                // Return to Main Menu
                props.setGameStarted(false)
            }, 3000)
        }
    }

    function getQuestionText() {
        let displayedText = ''
        const randomNum = Math.random() * 100
    
        // 0-9 is ten numbers, so this should have a 10% chance of being called
        // props.score can't be 0; otherwise this might get called for the very first question!
        // That wouldn't match the original game's behavior... 
        if (randomNum < 10 && props.score !== 0) {
            displayedText = randomArrayElement(questionIntroVariations) + ` ${question.questionText}`
        }
        else {
            displayedText = question.questionText
        }
        return displayedText
    }
    
    return (
        <>
            <p>{props.score}</p>
            <p className="game-question">{props.isGameOver ? `${getWrongAnswerReply()} ${question.correctAnswer}`
            : getQuestionText()}</p>

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
    )
}

export default Game