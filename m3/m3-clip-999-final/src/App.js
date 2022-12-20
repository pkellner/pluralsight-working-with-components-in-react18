import { useState } from "react";
import ToDoListWithToolbar from "./components/todo/ToDoListWithToolbar";
import { TodosDataProvider } from "./contexts/ToDosDataContext";
import ToDoManager from "./components/todo/ToDoManager";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => {
  const [displayStatus, setDisplayStatus] = useState("all"); // all, pending, completed
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  console.log("App.js:darkTheme", darkTheme);

  return (
    <TodosDataProvider>
      <div className="container" data-theme={darkTheme ? "dark" : "light"}>
        <Header toggleTheme={toggleTheme} />
        <ToDoListWithToolbar
          displayStatus={displayStatus}
          setDisplayStatus={setDisplayStatus}
          import={important}
          setImportant={setImportant}
          searchText={searchText}
          setSearchText={setSearchText}
        >
          <ToDoManager
            displayStatus={displayStatus}
            important={important}
            searchText={searchText}
            darkTheme={darkTheme}
          />
        </ToDoListWithToolbar>
        <Footer />
      </div>
    </TodosDataProvider>
  );
};

export default App;
