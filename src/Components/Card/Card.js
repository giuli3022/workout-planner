import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ExercisesContext from '../../Context/ExercisesContext';
import '../../sass/Components/Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import edit from "../../imgs/edit.png";
import remove from "../../imgs/quit.png";

const Card = props => {
    const {
        addExercise,
        editExercise,
        deleteExercise,
        openEditModal,
        toggleModalDelete,
        setDayToDelete,
        setActivitytoDelete
    } = useContext(ExercisesContext);
    const { id } = useParams();
    const deleteModalOpen = () => {
        setDayToDelete(id);
        setActivitytoDelete(props.activity);
        toggleModalDelete();
    }

    return (
        <div id="card">
            <article className="card-article">
                <h2>{props.activity}</h2>
                <h3>{props.time} min.</h3>
                <footer className="card-footer">
                    <FontAwesomeIcon icon={faPen} className="pen-icon" onClick={e => openEditModal(props.day, props.activity, props.time)} />
                    <FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={e => deleteModalOpen()} />
                </footer>
            </article>
        </div>

    );
};

export default Card;