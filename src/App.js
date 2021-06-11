import React from "react";
import "./styles.css";
import ViewOne from "./ViewOne";
import ViewTwo from "./ViewTwo";

const App = () => {
  const [currentView, setCurrentView] = React.useState("view1");
  return (
    <div>
      {currentView === "view1" ? (
        <ViewOne onClick={(page) => setCurrentView(page)} />
      ) : (
        <ViewTwo onClick={(page) => setCurrentView(page)} />
      )}
    </div>
  );
};

export default App;
