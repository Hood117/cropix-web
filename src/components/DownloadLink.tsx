import { downloadUrl } from "../config";

type DownloadLinkProps = {
  className?: string;
};

export function DownloadLink({ className }: DownloadLinkProps) {
  return (
    <a href={downloadUrl} className={className}>
      <WindowsMark />
      <span className="min-w-0 text-balance">Download for Windows</span>
    </a>
  );
}

function WindowsMark() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="currentColor" aria-hidden>
      <path d="M1 3.2 6.7 2.4v5.1H1V3.2Zm6.3-.9L15 1v6.5H7.3V2.3ZM1 8.5h5.7v5.2L1 12.9V8.5Zm6.3 0H15V15l-7.7-1.1V8.5Z" />
    </svg>
  );
}
