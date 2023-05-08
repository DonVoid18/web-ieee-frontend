import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const MemberCard = ({ identify, name, lastName, dateRegister }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: identify * 0.4 }}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="flex h-20"
    >
      <div className="flex h-full w-16 items-center justify-center rounded-l-md bg-colorSection_2 text-white">
        <FontAwesomeIcon icon={faUserTie} className="text-xl" />
      </div>
      <div className="flex w-full flex-col items-start justify-center rounded-r-md border-y border-r px-3">
        <h3 className="text-left line-clamp-1">
          {name} {lastName} asdjojfasiodjfoasj as dfjo asjdf oi
        </h3>
        <p className="text-sm text-gray-600">Miembro desde el {dateRegister}</p>
      </div>
    </motion.div>
  );
};
export default MemberCard;
