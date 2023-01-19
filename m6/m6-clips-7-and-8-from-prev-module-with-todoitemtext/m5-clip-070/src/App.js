import { useState } from "react";
import ToDoListWithToolbar from "./components/todo/ToDoListWithToolbar";
import { TodosDataProvider } from "./contexts/ToDosDataContext";
import ToDoManager from "./components/todo/ToDoManager";
import Layout from "./components/layout/Layout";

const App = () => {

  const [displayStatus, setDisplayStatus] = useState("all"); // all, pending, completed
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <TodosDataProvider>
      <Layout>
        <ToDoListWithToolbar
          displayStatus={displayStatus} setDisplayStatus={setDisplayStatus} important={important}
          setImportant={setImportant} searchText={searchText} setSearchText={setSearchText}
        >
          <ToDoManager
            displayStatus={displayStatus} important={important} searchText={searchText}
          />
        </ToDoListWithToolbar>
      </Layout>
    </TodosDataProvider>
  );
};

export default App;
