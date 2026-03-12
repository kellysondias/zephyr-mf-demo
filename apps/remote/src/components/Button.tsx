import { useState } from "react";

interface ButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

export default function Button({
  label = "Click me",
  variant = "primary",
  onClick,
}: ButtonProps) {
  const [clicked, setClicked] = useState(false);

  const styles: Record<string, React.CSSProperties> = {
    primary: { backgroundColor: "#6366f1", color: "#fff" },
    secondary: { backgroundColor: "#e2e8f0", color: "#1e293b" },
    danger: { backgroundColor: "#ef4444", color: "#fff" },
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      style={{
        ...styles[variant],
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: "14px",
        transition: "opacity 0.2s",
        opacity: clicked ? 0.7 : 1,
      }}
    >
      {clicked ? "✓ Done!" : label}
    </button>
  );
}
