import { useState, useEffect } from "react";

const SITE_PASSWORD = "Grace";
const STORAGE_KEY = "portfolio-authenticated";

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate = ({ children }: PasswordGateProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setAuthenticated(true);
    }
    setLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!loaded) return null;
  if (authenticated) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-2">
        Art for Grace
      </h1>
      <p className="text-muted-foreground text-sm mb-10 font-light">
        Enter the password to view the portfolio
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          autoFocus
          className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
        />
        {error && (
          <p className="text-sm text-destructive animate-fade-in">
            Incorrect password. Please try again.
          </p>
        )}
        <button
          type="submit"
          className="w-full border border-foreground bg-foreground text-primary-foreground px-4 py-3 text-xs tracking-[0.2em] uppercase hover:bg-background hover:text-foreground transition-colors duration-300"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default PasswordGate;
