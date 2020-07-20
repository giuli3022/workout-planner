import React, { useState, useEffect, useContext } from 'react';
import ExercisesContext from "../../Context/ExercisesContext";
import '../../sass/Components/EditExercise.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Edit = ({ day, activity, time, setActivityMod, setTimeMod, toggleModalEdit }) => {
    const [dayToModify, setDayToModify] = useState();
    const [activityToModify, setActivityToModify] = useState();
    const { editExercise } = useContext(ExercisesContext);
    useEffect(() => {
        setDayToModify(day)
        setActivityToModify(activity)
    }, []);

    return (
        <div>
            <div className="overlay"></div>
            <div id="edit-box" className="modal">
                <header id="edit-header">
                    <h2>Edit Exercise</h2>
                    <p className="close-button" onClick={toggleModalEdit}>
                        <FontAwesomeIcon icon={faTimes} className="close-icon" />
                    </p>
                </header>
                <form id="edit-form">

                    <input className="edit-input"
                        value={activity}
                        onChange={e => setActivityMod(e.target.value)}
                        type="text"
                        placeholder="Activity"
                    />

                    <input className="edit-input"
                        value={time}
                        onChange={e => setTimeMod(e.target.value)}
                        type="text"
                        placeholder="Time"
                    />

                    <button className="edit-activity-button"
                        type="button"
                        onClick={e => editExercise(dayToModify, activityToModify)}>
                        Edit Exercise!
                            </button>
                </form>
            </div>
        </div>
    )
}

export default Edit;
