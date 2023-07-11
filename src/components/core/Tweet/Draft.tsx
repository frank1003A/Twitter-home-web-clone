import React, { useEffect, useRef } from "react";

interface DraftComponentProps {
  handleInputChange: (event: React.SyntheticEvent<HTMLSpanElement>) => void;
  count: number;
  onFocusIn?: () => void;
  text: string;
}
const Draft = ({
  handleInputChange,
  count,
  onFocusIn,
  text,
}: DraftComponentProps) => {
  const inputRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let input = inputRef.current!;

    // focus events
    input.addEventListener("focusin", (e) => (onFocusIn ? onFocusIn() : {}));

    return () => {
      input.removeEventListener("focusin", () =>
        onFocusIn ? onFocusIn() : {}
      );
    };
  }, [count, onFocusIn]);

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
