import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TypingText({
  text = "",
  speed = 22,
  className = "",
  onDone = () => {},
  cursor = true,
  startDelay = 0
}) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;
    setShown("");
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          onDone();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span className={className}>
      {shown}
      {cursor && shown.length < text.length && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-niilm-cyan ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </span>
  );
}
