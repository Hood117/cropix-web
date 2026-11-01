type MarkProps = {
  className?: string;
};

export function Mark({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden>
      <rect width="32" height="32" rx="7" fill="#14171e" />
      <rect x="5" y="5" width="14" height="14" rx="2" stroke="#2dd4bf" strokeWidth="2" />
      <rect x="13" y="13" width="14" height="14" rx="2" stroke="#94a3b8" strokeWidth="2" />
    </svg>
  );
}
