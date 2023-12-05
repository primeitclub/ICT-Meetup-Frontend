import ValorantTeamForm from './_components/valorant-team-info-form';
import { Box, Flex } from '@chakra-ui/react';
import RegistrationFormHeader from '../reusables/registration-form-header';
import {
 Step,
 StepIcon,
 StepIndicator,
 StepNumber,
 StepStatus,
 StepTitle,
 Stepper
} from '@chakra-ui/react';
import TeamSubForm from './_components/valorant-sub-member-form';
import ValorantTeamMemberFormOne from './_components/valorant-team-member-form';
import { useValorantFormStore } from '../../store/valorantForm';

const ValorantRegistrationFormSteps = [
 {
  name: 'Team Info',
  component: <ValorantTeamForm />,
  label: 'Please fill up the details'
 },
 {
  name: 'Team Sub Info',
  component: <TeamSubForm />,
  label: 'Please fill up the details'
 },
 {
  name: 'Team Members',
  component: <ValorantTeamMemberFormOne />,
  label: 'Please fill up the details'
 }
];

export default function ValorantRegistrationForm() {
 const activeFormState = useValorantFormStore((state) => state.activeStep);

 return (
  <>
   <Box
    maxW={{
     xl: '1100px',
     '2xl': '1440px'
    }}
    paddingX={{
     base: '10px',
     md: '64px',
     xl: '0px'
    }}
    margin={'auto'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    marginTop={'64px'}>
    <RegistrationFormHeader title="Valorant Form" description="Please fill up the details" />
    <Box
     marginTop={'64px'}
     borderRadius={'24px'}
     backdropFilter={'blur(20px)'}
     maxW={'800px'}
     width={'100%'}
     padding={{
      base: '32px 32px 103px 32px',
      md: '64px 64px 103px 64px'
     }}
     backgroundColor={'var(--form-background)'}
     boxShadow={'0px 0px 150px -10px #061847;'}>
     {/* form headers for different components */}

     <Stepper
      index={activeFormState}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      color={'white'}
      fontSize={'16px'}
      marginBottom={'64px'}>
      {ValorantRegistrationFormSteps.map((step, index) => (
       <Step key={index}>
        <Box display={'flex'} alignItems={'center'} gap={'5'} flexDirection={'column'}>
         <Flex
          alignItems={'center'}
          justifyContent={'center'}
          padding={'6px 10px'}
          rounded={'full'}
          backgroundColor={'var(--accent-blue)'}>
          <StepIndicator>
           <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={<StepNumber />}
           />
          </StepIndicator>
         </Flex>

         <Box flexShrink="0" color={'var(--input-label)'}>
          <StepTitle>{step.name}</StepTitle>
         </Box>
        </Box>
       </Step>
      ))}
     </Stepper>

     {ValorantRegistrationFormSteps.map((step, index) => {
      return (
       <Box key={index} display={index === activeFormState ? 'block' : 'none'}>
        {step.component}
       </Box>
      );
     })}
    </Box>
   </Box>
  </>
 );
}
