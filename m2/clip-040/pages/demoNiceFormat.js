import { useEffect, useState } from "react";

export default function Index() {
  return <ToDoItem text="Wash clothes" completed={false} important={true} />;
}

function ToDoItem({ text, completed, important }) {
  const [textState, setTextState] = useState(text);
  const [completedState, setCompletedState] = useState(completed);
  useEffect(() => {
    async function makeRequest() {
      await delay(3000);
      setTextState(`${text} ${new Date().toLocaleTimeString()}`);
    }

    makeRequest();
  }, []);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div style={{ backgroundColor: "gray" }}>
      <div style={{ margin: "20px 20px 20px 20px" }}>
        <div
          className="container"
          style={{ margin: "20px 20px 20px 20px", backgroundColor: "gray" }}
        >
          <div>&nbsp;</div>
          <div
            style={{
              backgroundColor: "gray",
              padding: "40px",
              margin: "30px 30px 30px 30px;",
            }}
          >
            <div
              className="layout"
              style={{
                backgroundColor: "white",
                padding: "10px",
              }}
              data-theme="dark"
              onClick={() => {
                setCompletedState(!completedState);
              }}
            >
              <div className={completedState ? "completed" : ""}>
                {important ? "*" : ""} {textState}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
