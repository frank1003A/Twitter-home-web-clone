import React, { useEffect, useRef } from "react";

interface DraftComponentProps {
  handleInputChange: (event: React.SyntheticEvent<HTMLSpanElement>) => void;
  count: number;
  onFocusIn?: () => void;
  onFocusOut?: () => void;
  text: string;
}
const Draft = ({
  handleInputChange,
  count,
  onFocusIn,
  onFocusOut,
  text,
}: DraftComponentProps) => {
  const inputRef = useRef<HTMLSpanElement | null>(null);
  const max = 300;

  useEffect(() => {
    let input = inputRef.current! as HTMLSpanElement;

    // focus events
    input.addEventListener("focusin", (e) => onFocusIn && onFocusIn());
    input.addEventListener("focusout", (e) => onFocusIn && onFocusIn());

    return () => {
      input.removeEventListener("focusin", () => onFocusIn && onFocusIn());
      input.removeEventListener("focusout", () => onFocusOut && onFocusOut());
    };
  }, [count, onFocusIn, onFocusOut]);

  return (
    <div className="text-component">
      <span
        className="textarea"
        placeholder="What is happening?!"
        role="textbox"
        contentEditable
        ref={inputRef}
        onInput={handleInputChange}
      ></span>
    </div>
  );
};

export default Draft;

/*
{reactStringReplace(content, /\b(\w+\b\s*){301,}/g, (match, i) => (
        <span key={i} className="text-offset">
          {match}
        </span>
      ))}
*/

/**<span className="text-offset" role="textbox" ref={inputHiRef}>
          {content && content.slice(max, content.length)}
        </span> */

/**{count > max ? (
        <span
          className="text-offset"
          role="textbox"
          ref={inputHiRef}
          contentEditable
        ></span>
      ) : (
        ""
      )} */
