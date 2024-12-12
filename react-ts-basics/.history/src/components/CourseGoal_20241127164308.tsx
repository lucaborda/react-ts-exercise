export default function CourseGoal({
  titile,
  description,
}: {
  titile: string;
  description: string;
}) {
  return (
    <article>
      <div>
        <h2>{titile}</h2>
        <p>{description}</p>
        <button>Delete</button>
      </div>
    </article>
  );
}
