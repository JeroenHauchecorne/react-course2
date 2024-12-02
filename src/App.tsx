import "./App.css";
import { Exercice as ImmutableExercice } from "./examples/Immutable";
import { PokemonsOverview } from "./pokemon/views/PokemonsOverview";
import { Excercice as DropdownExercice } from "./exercices/dropdown/Dropdown";
import { Lists } from "./examples/Lists";
import { Events } from "./examples/Events";
import { ComponentA } from "./examples/SimplestComponent";
import { State } from "./examples/State";
import { LiftedState } from "./examples/LiftedState";
import { TodoList } from "./exercices/TodoList";
import { List as ListExercice } from "./exercices/list/List";
import { DontNestComponents } from "./examples/DontNestComponents";
import { Memoization } from "./examples/Memoization";
import Impure from "./examples/Impure";
import { FormExercise } from "./exercices/Form";
import { Ref } from "./examples/Ref";
import { PropsTyping } from "./examples/PropsTyping";
import { Game } from "./exercices/TicTacToe";
import { AuthProvider } from "./examples/context/AuthProvider";
import { Avatar } from "./examples/context/Avatar";
import { CustomHook } from "./examples/CustomHook";
import { Route, Routes } from "react-router-dom";
import PokemonDetail from "./pokemon/views/PokemonDetail";
import PageNotFound from "./pokemon/views/PageNotFound";
import { FetchData } from "./examples/FetchData";
import { NavBar } from "./pokemon/NavBar";
import { ThemeProvider } from "./pokemon/contexts/ThemeContext";
import { PokemonApp } from "./pokemon/PokemonApp";
import { LazyLoading } from "./examples/lazy/LazyLoading";

function App() {
  // console.log("render");

  return (
    <>
      {/* <ListExercice /> */}
      {/* <ImmutableExercice /> */}
      {/* <DropdownExercice></DropdownExercice> */}
      {/* <Lists></Lists> */}
      {/* <Events></Events> */}
      {/* <State></State> */}
      {/* <LiftedState></LiftedState> */}
      {/* <ComponentA></ComponentA> */}
      {/* <TodoList></TodoList> */}
      {/* <DontNestComponents /> */}
      {/* <Impure /> */}
      {/* <FormExercise /> */}
      {/* <Ref /> */}
      {/* <PropsTyping /> */}
      {/* <Game></Game> */}

      {/* <CustomHook /> */}
      {/* <Memoization /> */}
      {/* <AuthProvider>
        <Avatar />
      </AuthProvider> */}

      {/* <FetchData /> */}

      {/* <LazyLoading /> */}

      <PokemonApp />
    </>
  );
}

export default App;
