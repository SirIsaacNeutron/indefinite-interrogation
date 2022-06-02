import React from 'react';

class MainMenu extends React.Component {
    render() {
        return (
            <>
                <h1 className="game-header">Indefinite</h1>
                <p className="menu-question">Ready to begin the interrogation?</p>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="btn button">Yes. Let's start. (Play)</div>
                        </div>
                        <div className="col">
                            <button className="btn button" data-bs-toggle="modal" data-bs-target="#helpWindow">Where
                                am I? (Help)</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <a className="btn button code-link" href="https://github.com/SirIsaacNeutron/indefinite-interrogation" target="_blank" rel="noreferrer">What are you? (Source Code)</a>
                        </div>
                        <div className="col">
                            <div className="btn button" data-bs-toggle="modal" data-bs-target="#musicHelpWindow">Why is there an audio player below the buttons?</div>
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
                <div class="modal fade" id="musicHelpWindow" tabindex="-1" aria-labelledby="musicHelpWindowLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">

                        <div class="modal-body">
                            <p>
                                Certain web browsers such as Google Chrome do not allow us to play background music automatically.
                                They require people like you to use a visible audio player like the one we provided. Without such a player,
                                you would not be able to hear the music at all.
                            </p> 
                            <p>We decided that the audio player was best left below the buttons.</p>
                            <button type="button" class="btn button" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MainMenu;