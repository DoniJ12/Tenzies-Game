export default function ({ value, isHeld }) {
  const style = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };

  return (
    <>
      <button style={style}>{value}</button>
    </>
  );
}
