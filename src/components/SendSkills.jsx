export function SendSkills({ skills }) {
  return (
    <div style={{ background: "#1f1a36", padding: 10 }}>
      {skills.map((ele) => {
        return <button>{ele}</button>;
      })}
    </div>
  );
}
