'use client'
import { motion } from 'framer-motion'

export default function EnterAnimation({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 }
      }}

      // style={ball}
    >
      {children}
    </motion.div>
  )
}

/**
 * ==============   Styles   ================
 */

// const ball = {
//     width: 100,
//     height: 100,
//     backgroundColor: "#dd00ee",
//     borderRadius: "50%",
// }
