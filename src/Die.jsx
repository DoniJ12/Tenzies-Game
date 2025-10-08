export default function ({ value, isHeld, hold, id }) {
  const style = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };

  return (
    <>
      <button onClick={() => hold(id)} style={style}>
        {value}
      </button>
    </>
  );
}
