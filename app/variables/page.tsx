export default function VariablesPage() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <h2>Environment variables</h2>
      {Object.entries(process.env)
        .filter(([key, _]) => !key.endsWith("TOKEN"))
        .map(([key, value]) => (
          <div key={key}>
            <span className="pe-4">{key}</span>
            <span>{value}</span>
          </div>
        ))}
    </main>
  );
}
