import React from 'react';

class MainMenu extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="button">1</div>
                        </div>
                        <div className="col">
                            <button type="button" className="btn button" data-bs-toggle="modal" data-bs-target="#helpWindow">Where
                                am I? (Help)</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="button">1</div>
                        </div>
                        <div className="col">
                            <div className="button">1</div>
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
            </>
        );
    }
}

export default MainMenu;