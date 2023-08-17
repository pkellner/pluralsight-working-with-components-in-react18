import "server-only";

export default function Header({layoutVersion}) {
  return (
    <header>
      <h2>To-do List</h2>
      <span className="nav-item">
        <span>{layoutVersion}</span>
      </span>
    </header>
  );
}


