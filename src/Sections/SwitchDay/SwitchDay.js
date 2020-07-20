import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Day from '../../Components/Day/Day';
import '../../sass/Sections/SwitchDay.scss';
import randomPhrases from "../SwitchDay/phrases";

const SwitchDay = () => {
    return (

        <Switch>
            <Route exact path="/">
                <div className="home">
                    <p>{randomPhrases()}</p>
                </div>
            </Route>
            <Route path="/:id">
                <Day />
            </Route>

        </Switch>
    )
};

export default SwitchDay;
