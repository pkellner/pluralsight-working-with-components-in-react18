function MyComponent({ myNumber }) {
  const displayDate = new Date().toLocaleDateString();
  return (
    <div>
      {myNumber} - {displayDate}
    </div>
  );
}

export default MyComponent;
