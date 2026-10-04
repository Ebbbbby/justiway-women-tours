import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const OurVision = () => {
  // const containerVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeOut",
  //     },
  //   },
  // };
  return (
    <div className=" w-full bg-gradient-to-br from-blush to-cream">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 text-ink">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            // className=" w-full md:w-[400px] lg:w-[580px] xl-w-[650px]"
            className="w-full max-w-[580px] mx-auto lg:max-w-none lg:mx-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.3,
            }}
          >
            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <div>
                <Image
                  src="/images/travlady.png"
                  alt="Background blob"
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* <div className="">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="text-ink max-w-8xl mx-auto px-4 py-6">
                <h2 className="text-2xl font-display font-semibold mb-2">
                  Mission Statement
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Justiway Travel & Tours exists to help women explore the world safely, confidently and on their own terms. We design women-only tours led by vetted guides, book carefully screened hotels and transfers, and stay reachable 24/7, so every journey feels as good as it looks.
                </p>
                <h2 className="text-2xl font-display font-semibold mb-2">
                  Vision Statement
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Our vision is to become Africa's most trusted women-first travel brand, where safety is measured, not just promised, and where every woman, whether solo or with friends, can say yes to the next destination without second-guessing it.
                </p>
              </div>
            </motion.div>
          </div> */}
          <div className="px-4 md:px-6 lg:px-8 py-6 lg:py-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              <motion.h2
                className="text-2xl md:text-2xl font-display font-semibold mb-4"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Mission Statement
              </motion.h2>

              <motion.p
                className="mb-4 text-lg leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Justiway Travel & Tours exists to help women explore the world safely, confidently and on their own terms. We design women-only tours led by vetted guides, book carefully screened hotels and transfers, and stay reachable 24/7, so every journey feels as good as it looks.
              </motion.p>
              <motion.h2
                className="text-2xl md:text-2xl font-display font-semibold mb-4"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Vision Statement
              </motion.h2>

              <motion.p
                className="mb-4 text-lg leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Our vision is to become Africa&apos;s most trusted women-first travel brand, where safety is measured, not just promised, and where every woman, whether solo or with friends, can say yes to the next destination without second-guessing it.
              </motion.p>

            </motion.div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default OurVision;
