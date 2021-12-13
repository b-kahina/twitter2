import React from "react";
import firebase from "./firebase";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

const Main = () => {
    return (
      <main>
        <nav>
          <div onClick={() => firebase.auth().signOut()}>Se déconnecter</div>
        </nav>
        <Sidebar />
        <Feed />
        <Widgets />
     </main >
  );
};

export default Main;

