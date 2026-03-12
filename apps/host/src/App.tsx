import { Suspense, lazy } from "react";

const RemoteButton = lazy(() => import("remote/Button"));
const RemoteCounter = lazy(() => import("remote/Counter"));

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Host Application — Zephyr MF Demo</h1>
      <p style={{ color: "#888", marginBottom: "24px" }}>
        Componentes abaixo são carregados em runtime do Remote App via Module
        Federation.
      </p>
      <Suspense fallback={<div>Carregando componentes remotos...</div>}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <RemoteButton
            label="Botão do Remote"
            onClick={() => alert("Remote funcionando!")}
          />
          <RemoteButton label="Secondary do Remote" variant="secondary" />
          <RemoteCounter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
