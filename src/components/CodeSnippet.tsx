import { JSX, useEffect, useRef, useState } from "react";
import { EN_CODE, PT_CODE, themes } from "../utils";

const CodeSnippet = ({
  code,
  setCode,
}: {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [copied, setCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [theme, setTheme] = useState<string | null>(null);
  const lines = code.split("\n");
  const currentTheme = themes[theme || "dark"];
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const syntaxHighlight = (text: string): JSX.Element[] => {
    const patterns = [
      { type: "comment", regex: /\/\/.*|\/\*[\s\S]*?\*\//g },
      { type: "string", regex: /(["'`])(?:(?=(\\?))\2.)*?\1/g },
      {
        type: "keyword",
        regex:
          /\b(const|let|var|function|return|if|else|import|export|default|from|class|public|new)\b/g,
      },
      { type: "number", regex: /\b\d+\b/g },
      { type: "function", regex: /\b([a-zA-Z_$][0-9a-zA-Z_$]*)(?=\()/g },
      { type: "operator", regex: /[{}()[\]=><+-,;:*%&|!~?]/g },
      { type: "class", regex: /\b[A-Z][a-zA-Z]+\b/g },
    ];

    let elements: JSX.Element[] = [];
    let remaining = text;
    let index = 0;

    while (remaining.length > 0) {
      let earliestMatch = null;
      let earliestIndex = Infinity;
      let matchType = "";
      let matchText = "";

      for (let { type, regex } of patterns) {
        regex.lastIndex = 0;
        const match = regex.exec(remaining);
        if (match && match.index < earliestIndex) {
          earliestMatch = match;
          earliestIndex = match.index;
          matchType = type;
          matchText = match[0];
        }
      }

      if (earliestMatch) {
        if (earliestIndex > 0) {
          elements.push(
            <span key={index++}>{remaining.slice(0, earliestIndex)}</span>
          );
        }

        elements.push(
          <span key={index++} style={{ color: currentTheme[matchType] }}>
            {matchText}
          </span>
        );

        remaining = remaining.slice(earliestIndex + matchText.length);
      } else {
        elements.push(<span key={index++}>{remaining}</span>);
        break;
      }
    }

    return elements;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="rounded-lg shadow-2xl overflow-hidden border relative"
      style={{ backgroundColor: currentTheme.background }}
    >
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ backgroundColor: currentTheme.headerBg }}
      >
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] hover:bg-[#ff3b30] transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] hover:bg-[#ffa500] transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] hover:bg-[#00c400] transition-colors" />
          </div>
          <span
            className="text-sm font-mono"
            style={{ color: currentTheme.lineNumber }}
          >
            index.js
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCode(PT_CODE)}
            className="flex items-center space-x-1 text-gray-400 hover:text-gray-200 transition-colors group"
          >
            <span className="text-xs font-medium">PT</span>
          </button>
          <button
            onClick={() => setCode(EN_CODE)}
            className="flex items-center space-x-1 text-gray-400 hover:text-gray-200 transition-colors group"
          >
            <span className="text-xs font-medium">EN</span>
          </button>
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-1 text-gray-400 hover:text-gray-200 transition-colors group"
          >
            <svg
              className="w-4 h-4 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs font-medium">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-1 text-gray-400 hover:text-gray-200 transition-colors group"
            >
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <span className="text-xs font-medium">Theme</span>
            </button>
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-[-10px] mt-2 w-40 bg-[#1e1e1e] border border-[#333] rounded-lg shadow-lg z-10"
              >
                {Object.keys(themes).map((t) => (
                  <button
                    key={t}
                    className="w-full px-4 py-2 text-left text-gray-400 hover:bg-[#2a2a2a] transition-colors"
                    onClick={() => {
                      setTheme(t);
                      setShowDropdown(false);
                    }}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex">
        <div
          className="py-4 px-3 text-right select-none border-r"
          style={{
            backgroundColor: currentTheme.headerBg,
            borderColor: "#333",
            color: currentTheme.lineNumber,
          }}
        >
          {lines.map((_, i) => (
            <div key={`line-${i}`} className="text-xs font-mono pr-2">
              {i + 1}
            </div>
          ))}
        </div>

        <pre
          className="flex-1 p-4 overflow-x-auto text-sm font-mono whitespace-pre"
          style={{ color: currentTheme.text }}
        >
          <code>
            {lines.map((line, i) => (
              <div
                key={i}
                style={{
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    currentTheme.codeHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {syntaxHighlight(line)}
              </div>
            ))}
          </code>
        </pre>
      </div>

      <div className="absolute inset-0 pointer-events-none rounded-lg shadow-[inset_0_0_15px_rgba(0,0,0,0.2)]" />
    </div>
  );
};

export default CodeSnippet;
