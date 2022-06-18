import React from 'react'

import buttonSound from '../sounds/button_press.mp3'

function MainMenu({ setGameStarted }) {

    function handleClick() {
        const buttonAudio = new Audio(buttonSound)
        buttonAudio.play()
    }

    function startGameButton() {
        handleClick()
        setGameStarted(prevGameStarted => !prevGameStarted)
    }

    return (
        <>
            <h1 className="game-header">Indefinite</h1>
            <p className="menu-question">Ready to begin the interrogation?</p>

            <div className="container">
                <div className="row row-eq-height">
                    <div className="col">
                        <div className="btn button" 
                        onClick={startGameButton}>Yes. Let's start. (Play)</div>
                    </div>
                    <div className="col">
                        <button className="btn button" data-bs-toggle="modal" 
                        data-bs-target="#helpWindow"
                        onClick={handleClick}>Where
                            am I? (Help)</button>
                    </div>
                </div>
                <div className="row row-eq-height">
                    <div className="col">
                        <a className="btn button code-link" href="https://github.com/SirIsaacNeutron/indefinite-interrogation" 
                        target="_blank" rel="noreferrer" onClick={handleClick}>What are you? (Source Code)</a>
                    </div>
                    <div className="col">
                        <div className="btn button" data-bs-toggle="modal" data-bs-target="#musicHelpWindow"
                        onClick={handleClick}>What's below the buttons?</div>
                    </div>
                </div>
            </div>

            {/* Help Modal */}
            <div className="modal fade" id="helpWindow" tabIndex="-1" aria-labelledby="helpWindowLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>As you know, The Incident was a catastrophic global event
                                in which all world leaders were killed. You are a person of interest brought
                                to us for questioning.
                            </p>
                            We expect you to:
                            <ol>
                                <li>Answer questions quickly.</li>
                                <li>Give identical responses to identical questions.</li>
                                <li>Accept your fate when it is over.</li>
                            </ol>
                            <button type="button" className="btn button" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Music Help Window */}
            <div className="modal fade" id="musicHelpWindow" tabIndex="-1" aria-labelledby="musicHelpWindowLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                    <div className="modal-body">
                        <p>
                            Certain web browsers such as Google Chrome do not allow us to play background music automatically.
                            They require people like you to use a visible audio player like the one we provided below the buttons. 
                            Without such a player, you would not be able to hear the music at all.
                        </p> 
                        <button type="button" className="btn button" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainMenu;