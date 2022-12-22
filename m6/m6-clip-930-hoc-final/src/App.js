import {useState, useTransition} from "react";
import ToDoListWithToolbar from "./components/todo/ToDoListWithToolbar";
import { TodosDataProvider } from "./contexts/ToDosDataContext";
import ToDoManager from "./components/todo/ToDoManager";
import Footer from "./components/layout/Footer";
import Layout from "./components/layout/Layout";

const App = () => {
  const [displayStatus, setDisplayStatus] = useState("all"); // all, pending, completed
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState("");
  
  const [isPending, startTransition] = useTransition();
  
  return (
    <TodosDataProvider>
      <Layout>
        <ToDoListWithToolbar
          displayStatus={displayStatus}
          setDisplayStatus={setDisplayStatus}
          import={important}
          setImportant={setImportant}
          searchText={searchText}
          setSearchText={setSearchText}
          startTransition={startTransition}
          isPending={isPending}
        >
          <ToDoManager
            displayStatus={displayStatus}
            important={important}
            searchText={searchText}
          />
        </ToDoListWithToolbar>
        <Footer />
      </Layout>
    </TodosDataProvider>
  );
};

export default App;
