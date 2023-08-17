"use client";


import {useImportantContext} from "@/app/contexts/ImportantContext";

export default function ToDoFilterToolbar() {

  const {important, setImportant} = useImportantContext();

  const displayStatus = "all";

  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <div className="filters">
            <li className="nav-item">
              <input
                type="text"
                className="form-search-text"
                placeholder="Search"
              />
            </li>
            <li className="nav-item">
              <a
                className={
                  displayStatus === "all" ? "nav-link active" : "nav-link"
                }
                href="#"
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  displayStatus === "pending" ? "nav-link active" : "nav-link"
                }
                href="#"
              >
                Pending
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  displayStatus === "completed" ? "nav-link active" : "nav-link"
                }
                href="#"
              >
                Completed
              </a>
            </li>
          </div>
          <div className="form-check d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="important-checkbox-toggle-id"
              checked={important}
              onChange={() => {
                setImportant((prev) => {
                  return !prev;
                });
              }}
            />
            <label
              className="form-check-label"
              htmlFor="important-checkbox-toggle-id"
            >
              Important
            </label>
          </div>
        </ul>
      </div>
    </nav>
  );
}

