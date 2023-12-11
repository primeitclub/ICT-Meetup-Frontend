import { motion, isValidMotionProp, Transition } from 'framer-motion';
import { Box, chakra, shouldForwardProp } from '@chakra-ui/react';

function FramerAnimation( { children } : { children: React.ReactNode } ) {

        const MotionBox = chakra( motion.div , {
            shouldForwardProp:( prop ) => isValidMotionProp( prop ) || shouldForwardProp( prop )
        } );

        const transitionProp:Transition = {
            duration:0.3,
            ease:"Linear",
            type:"spring",
            stiffness:200,
            damping:30
        }

    return ( <>
    
        <MotionBox initial={{y:200}} whileInView={{y:0}} viewport={{once:true}} transition={transitionProp} >
            {children}
        </MotionBox>

    </> );
} 

export default FramerAnimation;





// scaling animation for images 
export function ScaleUpanimation ( {children} : {children:React.ReactNode} ) {

    const MotionBoxImage = chakra( motion.div , {
        shouldForwardProp:( prop ) => isValidMotionProp( prop ) || shouldForwardProp( prop )
    } );

    const transitionPropScale:Transition = {
        duration:0.3,
        ease:"Linear",
        type:"spring",
        stiffness:200,
        damping:30
    }

    return (<>
    
    <MotionBoxImage height={"100%"} width={"100%"} transition={transitionPropScale} initial={{scale:0.4}} whileInView={{scale:1}} viewport={{once:true}} >
        {children}
    </MotionBoxImage>
    
    </>)

}
