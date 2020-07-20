import React, { useState } from 'react';
import Links from './Sections/Links/Links';
import SwitchDay from './Sections/SwitchDay/SwitchDay';
import Header from './Sections/Header/Header';
import Add from './Components/MainButtons/AddExercise';
import Edit from './Components/Card/EditExercise';
import Delete from './Components/Card/DeleteExercise';
import MainButtons from './Components/MainButtons/main-buttons';
import DaysContainer from './Sections/DaysContainer/DaysContainer';
import ExercisesContext from './Context/ExercisesContext';
import './sass/Common/all.scss';
import {
  BrowserRouter,
} from 'react-router-dom';


function App() {

  /* Add Function */
  const [activities, setActivities] = useState(DaysContainer);
  const [day, setDay] = useState("Monday");
  const [activity, setActivity] = useState("");
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  const addExercise = () => {
    const clon = [...activities];
    const index = activities.findIndex(item => item.day === day);
    if (index === -1) {
      alert("Error");
    } else {
      clon[index].exercises.push({
        activity,
        time
      })
      setActivities(clon);
      toggleShowModal();
    }
  }

  /* Edit Function */

  const [dayMod, setDayMod] = useState("");
  const [activityMod, setActivityMod] = useState("");
  const [timeMod, setTimeMod] = useState("");
  const [modalEdit, setModalEdit] = useState(false);
  const toggleModalEdit = () => setModalEdit(!modalEdit);

  const editExercise = (day, activity) => {

    const data = {
      activity: activityMod,
      time: timeMod
    }

    const clon = [...activities];

    for (let i = 0; i < clon.length; i++) {
      if (clon[i].day === day) {
        for (let j = 0; j < clon[i].exercises.length; j++) {
          if (clon[i].exercises[j].activity === activity) {
            clon[i].exercises[j] = data;
          }
        }
      }
    }
    setActivities(clon);
    toggleModalEdit();
  }

  const openEditModal = (day, activity, time) => {
    setDayMod(day);
    setActivityMod(activity);
    setTimeMod(time);
    toggleModalEdit();
  }

  /* Delete Function */

  const [ModalDelete, setModalDelete] = useState(false);
  const toggleModalDelete = () => setModalDelete(!ModalDelete);

  const [activityToDelete, setActivitytoDelete] = useState();
  const [dayToDelete, setDayToDelete] = useState();

  const deleteExercise = (day, nameActivity) => {
    const clon = [...activities];
    const dayIndex = clon.findIndex(activity => activity.day === day);
    const exercisesIndex = clon[dayIndex].exercises.findIndex(exercise => exercise.activity === nameActivity);
    clon[dayIndex].exercises.splice(exercisesIndex, 1);

    setActivities(clon);
    toggleModalDelete();
  }



  return (
    <ExercisesContext.Provider value={{
      addExercise,
      editExercise,
      openEditModal,
      deleteExercise,
      toggleModalDelete,
      setDayToDelete,
      setActivitytoDelete
    }}>
      {showModal ?
        <Add
          setDay={setDay}
          setActivity={setActivity}
          setTime={setTime}
          addExercise={addExercise}
          toggleShowModal={toggleShowModal}
        ></Add>
        :
        null
      }
      {modalEdit ?
        <Edit
          day={dayMod}
          activity={activityMod}
          time={timeMod}
          setDayMod={setDayMod}
          setActivityMod={setActivityMod}
          setTimeMod={setTimeMod}
          toggleModalEdit={toggleModalEdit}
          setActivitytoDelete={setActivitytoDelete}
          setDayToDelete={setDayToDelete}
        ></Edit>
        :
        null
      }
      {
        ModalDelete ?
          <Delete
            day={dayToDelete}
            activity={activityToDelete}
          ></Delete>
          : null
      }
      <Header />
      <BrowserRouter>
        <Links />
        <SwitchDay edit={editExercise} />
      </BrowserRouter>
      <MainButtons toggleShowModal={toggleShowModal} />

    </ExercisesContext.Provider>
  );
}

export default App;
