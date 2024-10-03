import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const symbols: string[] = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "/",
  "~",
  "-",
];
const letters: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const CipherText = ({
  text,
  number,
  duration = 2,
  animate = false,
  index = 0,
}: {
  text?: string;
  number?: number;
  duration?: number;
  animate?: boolean;
  index?: number;
}): React.ReactElement => {
  const [displayValue, setDisplayValue] = useState<string>("");

  const getRandomChar = (isNumber: boolean): string => {
    return isNumber
      ? symbols[Math.floor(Math.random() * symbols.length)]
      : letters[Math.floor(Math.random() * letters.length)];
  };

  useEffect(() => {
    const isText = !!text;
    const value = isText ? text! : number!.toString();
    const length = value.length;

    let scrambledValue = value
      .split("")
      .map((char) =>
        char === " " ? " " : getRandomChar(!isText && !isNaN(Number(char))),
      )
      .join("");
    setDisplayValue(scrambledValue);

    let currentStep = 0;
    const scrambleInterval = setInterval(() => {
      scrambledValue = scrambledValue
        .split("")
        .map((_char, index) => {
          return index <= currentStep
            ? value[index]
            : value[index] === " "
              ? " "
              : getRandomChar(!isText && !isNaN(Number(value[index])));
        })
        .join("");
      setDisplayValue(scrambledValue);
      currentStep++;
      if (currentStep >= length) {
        currentStep = 0;
      }
    }, 100);

    if (animate) {
      clearInterval(scrambleInterval);
      const resolveInterval = setInterval(
        () => {
          if (currentStep < length) {
            scrambledValue = scrambledValue
              .split("")
              .map((_char, index) => {
                return index <= currentStep
                  ? value[index]
                  : scrambledValue[index];
              })
              .join("");
            setDisplayValue(scrambledValue);
            currentStep++;
          } else {
            clearInterval(resolveInterval);
          }
        },
        (duration * 1000) / length,
      );
    }

    const delay = index * 200;

    const timeoutId = setTimeout(
      () => {
        if (animate) {
          setDisplayValue(value);
        }
      },
      delay + duration * 1000,
    );

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(timeoutId);
    };
  }, [text, number, duration, animate, index]);

  return (
    <motion.p
      className="font-dmSans font-light text-sm text-gray transition-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: "20px", height: "20px" }}
    >
      {displayValue}
    </motion.p>
  );
};

export default CipherText;
