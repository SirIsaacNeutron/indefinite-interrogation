import React from 'react'

import buttonSound from '../sounds/button_press.mp3'

function Report(props) {

    function getReport() {
        let reportObject = {}
        for (let i = 0; i < props.answeredQuestions.length; ++i) {
            const question = props.answeredQuestions[i]
            reportObject[question.key] = question
        }

        let reportText = "";
        if (reportObject['name']) {
            reportText += 'Our subject is ' + reportObject['name'].correctAnswer
        }
        if (reportObject['how old']) {
            if (reportObject['your occupation']) {
                reportText += ', a ' + reportObject['how old'].correctAnswer + ' year old ' + reportObject['your occupation'].correctAnswer
            }
            else {
                reportText += ', a ' + reportObject['how old'].correctAnswer + ' year old '
            }
        }

        if (reportObject['where born']) {
            reportText += 'born in ' + reportObject['where born'].correctAnswer + '.'
        }

        const punishment = 'Punishment: Indefinite detention.'

        return [reportText, punishment]
    }

    function handleClick() {
        const buttonAudio = new Audio(buttonSound)
        buttonAudio.play()

        props.setShowReport(false)
        props.setAnsweredQuestions([])
        props.setScore(0)
    }

    const [reportText, punishment] = getReport()

    return (
        <>
            <h1 className="game-header">Score: {props.score}</h1>
            <hr />
            <p>{reportText}</p>
            <p>{punishment}</p>

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