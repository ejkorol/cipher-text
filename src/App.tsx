import Cursor from "./cursor/cursor";
import TableComponent from "./table/table";
import { motion } from "framer-motion";
import "./index.css";

function App() {
  return (
    <>
      <Cursor />
      <section className="cursor-none bg-black flex flex-col w-full h-svh flex p-12">
        <div className="mb-4">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4, easings: "easeInOut", delay: 1 }}
            className="font-dmSans text-5xl font-extralight text-light tracking-wide"
          >
            Cipher
          </motion.h3>
        </div>
        <TableComponent />
      </section>
    </>
  );
}

export default App;
