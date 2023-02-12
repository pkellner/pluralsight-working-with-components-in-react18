import { useState } from "react";
import ToDoListWithToolbar from "./components/todo/ToDoListWithToolbar";
import { TodosDataProvider } from "./contexts/ToDosDataContext";
import ToDoManager from "./components/todo/ToDoManager";
import Layout from "./components/layout/Layout";

const App = () => {
  const [displayStatus, setDisplayStatus] = useState("all"); // all, pending, completed
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);
  return (
    <TodosDataProvider>
      <Layout toggleTheme={toggleTheme} darkTheme={darkTheme}>
        <ToDoListWithToolbar
          displayStatus={displayStatus} setDisplayStatus={setDisplayStatus}
          import={important} setImportant={setImportant}
          searchText={searchText} setSearchText={setSearchText}
        >
          <ToDoManager
            displayStatus={displayStatus} important={important}
            searchText={searchText} darkTheme={darkTheme}
          />
        </ToDoListWithToolbar>
      </Layout>
    </TodosDataProvider>
  );
};
export default App;
