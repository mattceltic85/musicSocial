import React from "react";
import { Switch, Route } from "react-router-dom";
import UsersContainer from '../containers/UsersContainer'
import Others from '../components/Others'

class Menu extends React.Component {


    render(){
        return(
            <Switch>

            <Route path="/all" render={() => <UsersContainer /> }/>
            <Route path="/guitar" render={() => <UsersContainer instrument="Guitar" /> }/>
            <Route path="/drums" render={() => <UsersContainer instrument="Drums" /> }/>
            <Route path="/vocals" render={() => <UsersContainer instrument="Vocals" /> }/>
            <Route path="/other" component={Others} />
            <Route path="/create"  />

             </Switch>
        )
    }


}




export default Menu;