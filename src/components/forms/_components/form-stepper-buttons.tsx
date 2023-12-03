import { Button, Flex } from '@chakra-ui/react';
import { useValorantFormStore } from '../../../store/valorantForm';

export default function FormStepperButtons({ handleNextStep }: { handleNextStep: () => void }) {
 const activeStep = useValorantFormStore((state) => state.activeStep);
 const maxStep = useValorantFormStore((state) => state.maxStep);
 const handlePreviousStep = useValorantFormStore((state) => state.prevStep);
 return (
  <>
   <Flex justifyContent={'space-between'}>
    <Button
     onClick={handlePreviousStep}
     disabled={activeStep === 0}
     variant={activeStep === 0 ? 'disabled-button' : 'primary-button'}>
     Previous
    </Button>
    <Button disabled={activeStep === maxStep} onClick={handleNextStep} variant={'primary-button'}>
     {activeStep === maxStep ? 'Submit' : 'Next'}
    </Button>
   </Flex>
  </>
 );
}
