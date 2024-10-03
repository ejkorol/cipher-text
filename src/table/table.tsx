import { useState } from "react";
import { motion } from "framer-motion";
import CipherText from "../cipher-text/cipher-text";

export const data = [
  { author: "Dieter Rams", published: 1995, title: "Less but better" },
  { author: "Dieter Rams", published: 2001, title: "Haus" },
  { author: "Dieter Rams", published: 2008, title: "Design in Frankfurt" },
  { author: "Naoto Fukasawa", published: 2003, title: "Without Thought" },
  { author: "Naoto Fukasawa", published: 2007, title: "Naoto Fukasawa" },
  { author: "Naoto Fukasawa", published: 2018, title: "Yuugu" },
  {
    author: "Jony Ive",
    published: 2016,
    title: "Designed by Apple in California",
  },
  { author: "James Dyson", published: 1999, title: "Design" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

const TableComponent = () => {
  const [rowsAnimated, setRowsAnimated] = useState(false);

  return (
    <motion.div
      className="flex flex-col w-3/5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      onAnimationComplete={() => setRowsAnimated(true)}
    >
      <div className="flex flex-row py-3 border-b-[1px] border-[#212121]">
        <div className="w-[300px]">
          <p className="font-dmSans text-darkGray text-sm capitalize">date</p>
        </div>
        <div className="w-[300px]">
          <p className="font-dmSans text-darkGray text-sm capitalize">author</p>
        </div>
        <div className="w-[300px]">
          <p className="font-dmSans text-darkGray text-sm capitalize">title</p>
        </div>
      </div>

      <motion.div className="flex flex-col">
        {data.map((book, idx) => (
          <motion.div
            key={idx}
            className="flex flex-row border-b-[1px] border-[#212121] py-3 transition-all w-full"
            variants={rowVariants}
            style={{ minHeight: "50px" }}
          >
            <div className="w-[300px]">
              <CipherText
                number={book.published}
                duration={0.3}
                animate={rowsAnimated}
                index={idx}
              />
            </div>
            <div className="w-[300px]">
              <CipherText
                text={book.author}
                duration={0.75}
                animate={rowsAnimated}
                index={idx}
              />
            </div>
            <div className="w-[300px]">
              <CipherText
                text={book.title}
                duration={0.75}
                animate={rowsAnimated}
                index={idx}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TableComponent;
