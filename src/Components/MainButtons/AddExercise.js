import React from 'react';
import '../../sass/Components/AddExercise.scss';
import '../../sass/Sections/General.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Add = ({ setDay, setActivity, setTime, addExercise, toggleShowModal }) => {
    return (
        <div>
            <div className="overlay"></div>
            <div id="add-box" className="modal">
                <header id="add-header">
                    <h2>Add Exercise</h2>
                    <p className="close-button" onClick={toggleShowModal}>
                        <FontAwesomeIcon icon={faTimes} className="close-icon" />
                    </p>
                </header>

                <form id="add-form">

                    <select id="select-day" name="days" onChange={e => setDay(e.target.value)}>
                        <option value="Monday" selected>Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>

                    <input className="add-input"
                        onChange={e => setActivity(e.target.value)}
                        type="text"
                        placeholder="Activity"
                        maxlength="20"
                    />

                    <input className="add-input"
                        onChange={e => setTime(e.target.value)}
                        type="number"
                        placeholder="Time in minutes"
                    />

                    <button className="add-activity-button" type="button" onClick={addExercise}>Add Exercise!</button>
                </form>
            </div>
        </div>
    )
}

export default Add;
