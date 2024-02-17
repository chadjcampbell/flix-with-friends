import { motion } from "framer-motion";
import Image from "next/image";

type TrailerProps = {
  movie: any;
  isActive: boolean;
};

const Trailer = ({ movie, isActive }: TrailerProps) => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        {isActive && (
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-2 left-2 text-lg bg-black p-1 rounded-lg shadow-lg shadow-black md:p-2 md:top-4 md:left-4"
          >
            <strong>{movie.title}</strong>
          </motion.p>
        )}
        <Image
          width={800}
          height={400}
          className="w-auto"
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        />
      </div>
    </div>
  );
};

export default Trailer;
