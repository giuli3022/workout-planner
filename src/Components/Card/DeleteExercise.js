import React, { useContext } from 'react';
import '../../sass/Components/DeleteExercise.scss';
import ExercisesContext from "../../Context/ExercisesContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Delete = (props) => {

    const { deleteExercise, toggleModalDelete } = useContext(ExercisesContext);
    return (
        <div>
            <div className="overlay"></div>
            <div id="delete-box" className="modal">
                <article>
                    <header id="delete-header">
                        <h2>Delete Exercise</h2>
                        <p className="close-button" onClick={toggleModalDelete}>
                            <FontAwesomeIcon icon={faTimes} className="close-icon" />
                        </p>
                    </header>

                    <p>Do you want to delete this exercise?</p>

                    <button className="delete-activity-button"
                        type="button"
                        onClick={() => deleteExercise(props.day, props.activity)}>
                        Delete it!
                </button>

                    <button className="cancel-activity-button"
                        type="button"
                        onClick={() => toggleModalDelete()}>
                        Cancel
                </button>
                </article>
            </div>
        </div>
    )
}


export default Delete;

