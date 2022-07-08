import React from 'react'

import { getGenderPronoun, getGenderPossessivePronoun } from './Game'

import buttonSound from '../sounds/button_press.mp3'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getIndefiniteArticle(occupation) {
    if (occupation.startsWith('A') || occupation.startsWith('E') || occupation.startsWith('I')
    || occupation.startsWith('O') || occupation.startsWith('U')) {
        return 'an'
    }
    return 'a'
}

function getNewSisterReportText(newText, sisterReportLength, counter) {
    //console.log('sisReportLength = ', sisterReportLength)
    //console.log('counter = ', counter)
    if (counter === sisterReportLength) {
        if (sisterReportLength === 1) {
            return newText + '. '
        }
        return 'and ' + newText + '. '
    }
    return newText + ', '
}

function Report(props) {

    function getReport() {
        let reportObject = {}
        let sisterReport = {}
        for (let i = 0; i < props.answeredQuestions.length; ++i) {
            const question = props.answeredQuestions[i]

            if (question.key.startsWith('sis')) {
                sisterReport[question.key] = question
            }
            else {
                reportObject[question.key] = question
            }
        }

        let reportText = "";

        let genderPronoun = ''
        let genderPossessivePronoun = ''
        if (reportObject['name']) {
            const name = reportObject['name'].correctAnswer
            reportText += 'Our subject is ' + name
            genderPronoun = getGenderPronoun(name)
            genderPossessivePronoun = getGenderPossessivePronoun(name)
        }
        if (reportObject['how old']) {
            if (reportObject['your occupation']) {
                reportText += ', a ' + reportObject['how old'].correctAnswer + ' year old ' + reportObject['your occupation'].correctAnswer + ' '
            }
            else {
                reportText += ', a ' + reportObject['how old'].correctAnswer + ' year old '
            }

            if (reportObject['where born']) {
                reportText += 'born in ' + reportObject['where born'].correctAnswer + '. '
            }
            else {
                reportText += '. '
            }
        }

        if (reportObject['religion']) {
            const religion = reportObject['religion'].correctAnswer

            if (religion === 'Buddhism') {
                reportText += capitalizeFirstLetter(genderPronoun) + ' admits following Buddhism, a dangerous Heathen belief. '
            }
            else if (religion === 'None') {
                reportText += capitalizeFirstLetter(genderPronoun) + ' says he follows no religion, which is suspicious and unlikely. '
            }
            else {
                reportText += capitalizeFirstLetter(genderPronoun) + ' follows ' + religion + ', an approved religious belief. ' 
            }
        }

        if (reportObject['your location']) {
            reportText += 'During the Incident, ' + reportObject['name'].correctAnswer + ' was in ' + reportObject['your location'].correctAnswer + ' '
            if (reportObject['what doing']) {
                reportText += reportObject['what doing'].correctAnswer.toLowerCase() + '. '
            }
            else {
                reportText += '. '
            }
        }

        if (reportObject['closest to']) {
            const capitalizedPronoun = capitalizeFirstLetter(genderPronoun)
            const closestRelation = reportObject['closest to'].correctAnswer.split(' ')[1]
            reportText += capitalizedPronoun + ' claims ' + genderPronoun + ' is closest to ' + genderPossessivePronoun + ' ' + closestRelation + '.'
        }

        let sisterText = ''
        const sisterReportLength = Object.keys(sisterReport).length
        if (sisterReportLength > 0) {
            let counter = 0
            const nameArray = reportObject['name'].correctAnswer.split(' ')
            const firstName = nameArray[0]
            const lastName = nameArray[1]
            sisterText += 'We learned some things about Clara ' + lastName + ', ' + firstName + "'s sister and member of radical Buddhist group 'Four Truths': she "

            if (sisterReport['sis how old']) {
                ++counter
                const age = sisterReport['sis how old'].correctAnswer
                const newText = 'is ' + age
                sisterText += getNewSisterReportText(newText, sisterReportLength, counter)
            }
            if (sisterReport['sis occupation']) {
                ++counter
                const occupation = sisterReport['sis occupation'].correctAnswer
                const indefiniteArticle = getIndefiniteArticle(occupation)
                const newText = 'is ' + indefiniteArticle + ' ' + occupation
                sisterText += getNewSisterReportText(newText, sisterReportLength, counter)
            }
            if (sisterReport['sis whereabouts']) {
                ++counter
                const whereabouts = sisterReport['sis whereabouts'].correctAnswer
                if (whereabouts === "I don't know") {
                    const newText = 'never told her family her location'
                    sisterText += getNewSisterReportText(newText, sisterReportLength, counter)
                }
                else {
                    const newText = 'is in ' + whereabouts
                    sisterText += getNewSisterReportText(newText, sisterReportLength, counter)
                }
            }
            if (sisterReport['sis why buddhism']) {
                ++counter
                const reason = sisterReport['sis why buddhism'].correctAnswer
                let newText = ''
                if (reason === "I don't know") {
                    newText = "didn't reveal why she converted to Buddhism"
                }
                else {
                    newText = 'converted to Buddhism ' + reason.toLowerCase()
                }
                sisterText += getNewSisterReportText(newText, sisterReportLength, counter)
            }
            if (sisterReport['sis last seen']) {
                ++counter
                const time = sisterReport['sis last seen'].correctAnswer
                // This .toLowerCase() doesn't actually match the original game's behavior!
                // The original would display 'Last month' with the capitalized L, for example
                // I'm only writing this for the convenience of future readers of this code
                const newText = 'was last seen ' + time.toLowerCase()
                sisterText += getNewSisterReportText(newText, sisterReportLength, counter)
            }
            if (sisterReport['sis ran away']) {
                ++counter
                const time = sisterReport['sis ran away'].correctAnswer
                const newText = 'ran away from home ' + time.toLowerCase()
                sisterText += getNewSisterReportText(newText, sisterReportLength, counter)
            }
            if (sisterReport['sis lunch when']) {
                ++counter
                const time = sisterReport['sis lunch when'].correctAnswer
                const newText = 'has lunch during ' + time
                sisterText += getNewSisterReportText(newText, sisterReportLength, counter)
            }
            if (sisterReport['sis sig other']) {
                ++counter
                const sigOther = sisterReport['sis sig other'].correctAnswer
                const sigOtherFirstName = sigOther.split(' ')[0] 
                const newText = 'is in a relationship with ' + sigOther + ' - which we can use to get to her. A team has been sent to pick ' + sigOtherFirstName + ' up for interrogation'
                sisterText += getNewSisterReportText(newText, sisterReportLength, counter)
            }

        }

        let endText = ''
        if (sisterReportLength > 0) {
            const name = reportObject['name'].correctAnswer
            endText = 'Based on our interrogation, we determined that ' + name + ' was recruited '
            endText += 'by ' + getGenderPossessivePronoun(name) + " sister Clara into Buddhist terrorist group 'Four Truths' to play an unknown role in The Incident."
        }
        else {
            const name = reportObject['name'].correctAnswer
            endText = 'Based on our interrogation, we determined that ' + name + ' was recruited '
            endText += "into Buddhist terrorist group 'Four Truths' to play an unknown role in The Incident."
        }

        const punishment = 'Punishment: Indefinite detention.'

        return [reportText, sisterText, endText, punishment]
    }

    function handleClick() {
        const buttonAudio = new Audio(buttonSound)
        buttonAudio.play()

        props.setShowReport(false)
        props.setAnsweredQuestions([])
        props.setScore(0)
    }

    const [reportText, sisterText, endText, punishment] = getReport()

    return (
        <>
            <h1 className="game-header">Score: {props.score}</h1>
            <hr />


            <div style={{'textAlign': 'left', 'paddingLeft': '5%'}}>
                <p>{reportText}</p>
                <p>{sisterText}</p>
                <p>{endText}</p>
                <p>{punishment}</p>
            </div>

            <div className="container">
                <div className="row row-eq-height">
                    <div className="col">
                        <button className="btn button" data-bs-toggle="modal" 
                        data-bs-target="#helpWindow"
                        onClick={handleClick}>Main Menu</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Report