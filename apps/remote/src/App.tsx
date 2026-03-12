import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", width: "100%" }}>
      <h2>Remote App — Components exposed via Module Federation</h2>
      <p style={{ color: "#888", marginBottom: "24px" }}>
        These components are consumed by the Host at runtime.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Button label="Primary Button" onClick={() => alert("clicked!")} />
        <Button label="Secondary Button" variant="secondary" />
        <Counter />
      </div>
    </div>
  );
}

export default App;
