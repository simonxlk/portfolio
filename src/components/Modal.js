import { motion, AnimatePresence } from "framer-motion"
import  "./Modal.css"
import reactDom from "react-dom"
import { VscChromeClose } from 'react-icons/vsc';

const Backdrop = ({open, children, onClose}) => {
if (!open) return null

  return reactDom.createPortal (
    <AnimatePresence
    //initial={false}
    //exitBeforeEnter={true}
    //onExitComplete={()=> null}
    >
    <motion.div className="backdrop"
    key="mbox"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity:0, transition: {duration: 0.2}}}
    transition={{duration: 0.1}}
    onClick={onClose}
    >
      
      <motion.div className="modal-container" onClick={(e) => e.stopPropagation()}
      key="mcontent"
      initial={{y:"100%"}}
      animate={{y:0}}
      transition={{duration: 0.5, type: "spring", stiffness: 200, damping: 30}}
      exit={{y:"100%", transition: {duration: 0.2}}}
      >
        <div className="close-container">
          <motion.div onClick={onClose} 
          whileHover={{scale:1.05}} whileTap={{scale: 0.9}}
          className="modal-close">
            <VscChromeClose />
          </motion.div>
        </div>
        {children}
      </motion.div>
      
    </motion.div>
    </AnimatePresence>,
    document.getElementById('portal')
  )
}

export default Backdrop