import React from "react";

const ToDoFilterToolbar = ({
  displayStatus,
  setDisplayStatus,
  important,
  setImportant,
  searchText,
  setSearchText,
}) => {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <div className="filters">
            <li className="nav-item">
              <input
                value={searchText}
                onChange={(event) => {
                  setSearchText(event.target.value);
                }}
                type="text"
                className="form-search-text"
                placeholder="Search"
              />
            </li>
            <li className="nav-item">
              <a
                className={
                  displayStatus === "all"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => setDisplayStatus("all")}
                href="#"
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  displayStatus === "pending"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => setDisplayStatus("pending")}
                href="#"
              >
                Pending
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  displayStatus === "completed"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => setDisplayStatus("completed")}
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
              // THIS FAILS, MAYBE BECAUSE NEED TO INSURE THIS CHANGE HAPPENS AFTER COMPONENT COMPLETELY RENDERS
              // onChange={() => {
              //   setImportant(!important);
              // }}
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
};
export default ToDoFilterToolbar;
