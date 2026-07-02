import { useEffect, useState } from "react";

export function Typewriter({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx % words.length];
    if (!deleting && sub === current.length) {
      const t = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(t);
    }
    if (deleting && sub === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setSub((s) => s + (deleting ? -1 : 1));
    }, deleting ? 45 : 90);
    return () => clearTimeout(t);
  }, [sub, deleting, idx, words]);

  const current = words[idx % words.length];
  return (
    <span className="text-gradient">
      {current.slice(0, sub)}
      <span className="animate-blink text-primary">|</span>
    </span>
  );
}
