export default function NewGoal() {
  const handleOnSubmit = () => {};

  return (
    <form onSubmit={handleOnSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
