import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollAnimatedSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when the element enters the viewport.
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}>
      {/* Your section content */}
    </motion.section>
  );
};

export default ScrollAnimatedSection;
