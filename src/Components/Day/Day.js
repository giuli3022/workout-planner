import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import DaysContainer from '../../Sections/DaysContainer/DaysContainer';



const Day = () => {
    const { id } = useParams();
    const exercises = DaysContainer.find(day => { return (day.id === id) }).exercises;
    return (
        <div className="day">
            {exercises.map(exercise => <Card day={id} key={`card-${exercise.id}`} activity={exercise.activity} time={exercise.time} />)}
        </div>
    )
}

export default Day;

