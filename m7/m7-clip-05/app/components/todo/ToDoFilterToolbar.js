'use client';

import { useImportantContext } from '../../contexts/ImportantContext';

export default function ToDoFilterToolbar() {
  const { important, setImportant } = useImportantContext();

  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
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
          <label className="form-check-label" htmlFor="important-checkbox-toggle-id">
            Important
          </label>
        </div>
      </div>
    </nav>
  );
}
