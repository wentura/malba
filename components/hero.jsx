"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Images = [{
  img: "/images/koko/5.webp",
  alt: "hrad Kokořín",
  width: 300,
  height: 300,
  position_x: "20%",
  position_y: "30%",
}, {
  img: "/images/koko/6.webp",
  alt: "Hero image 2",
  width: 300,
  height: 300,
  position_x: "80%",
  position_y: "70%",
}, {img: "/images/malba/m3.webp",
alt: "Hero image 4",
width: 300,
height: 300,
position_x: "30%",
position_y: "80%",
}, {
  img: "/images/malba/8.webp",
  alt: "Hero image 2",
  width: 300,
  height: 300,
  position_x: "70%",
  position_y: "30%",
},{
  img: "/images/malba/ml2.webp",
  alt: "Hero image 3",
  width: 300,
  height: 300,
  position_x: "50%",
  position_y: "50%",
},]

const BigImage = {"img": "/images/malba/malba2.webp", "alt": "Penzion Malba", "width": 1920, "height": 1080}

export default function Hero() {
  const [showBigImage, setShowBigImage] = useState(false);

  useEffect(() => {
    // Show small images for 3 seconds, then show big image
    const timer = setTimeout(() => {
      setShowBigImage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Remove the cycling effect - we'll show all images at once

  return (
    <div className="mx-auto min-h-[70vh] md:min-h-[100vh] relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!showBigImage ? (
          <motion.div
            key="small-images"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {Images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute w-1/4 aspect-square"
                style={{
                  left: image.position_x,
                  top: image.position_y,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: {
                    duration: 0.1,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }
                }}
                exit={{ 
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn"
                  }
                }}
              >
                <Image
                  src={image.img}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="big-image"
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: {
                duration: 1.2,
                ease: "easeOut"
              }
            }}
          >
            <Image
              src={BigImage.img}
              alt={BigImage.alt}
              width={BigImage.width}
              height={BigImage.height}
              className="w-full h-full object-cover"
              priority
            />
            <motion.div
              className="absolute inset-0 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
            <motion.div
              className="absolute bottom-[5%] md:bottom-[10%] left-1/2 lg:left-2/3 transform -translate-x-1/2 z-10 mx-auto pr-4 md:pr-0 md:pl-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
            >
              <Image
                src="/images/malba_logo.png"
                alt="Penzion Malba - logo"
                width={200}
                height={100}
                className="h-24 md:h-32 lg:h-48 w-auto object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
