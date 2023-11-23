import { Box, Button } from '@chakra-ui/react';
import RegistrationFormHeader from '../reusables/registration-form-header';
import { useForm, useFieldArray } from 'react-hook-form';
import InputField from '../ui/InputField';
import {
 valorantRegistrationSchema,
 valorantRegstrationSchemaType
} from '../../schema/valorantRegistration';
import { zodResolver } from '@hookform/resolvers/zod';
import FileInput from '../ui/FileInput';

const formSteps = [
 {
  name: 'Team Info',
  component: <></>
 },
 //for four members a different component
 {
  name: 'Team Members',
  component: [
   {
    name: 'Member 1',
    component: <></>
   },
   {
    name: 'Member 2',
    component: <></>
   },
   {
    name: 'Member 3',
    component: <></>
   },
   {
    name: 'Member 4',
    component: <></>
   }
  ]
 }
];

export default function ValorantRegistrationForm() {
 const {
  register,
  handleSubmit,
  watch,
  control,
  formState: { errors }
 } = useForm<valorantRegstrationSchemaType>({
  resolver: zodResolver(valorantRegistrationSchema)
 });
 const watchFields = watch();

 const { fields, append } = useFieldArray({
  control,
  name: 'teamMembers'
 });

 const onSubmit = (data: valorantRegstrationSchemaType) => {
  console.log(errors);
  console.log(data);
 };

 return (
  <>
   <Box
    maxW={{
     xl: '1100px',
     '2xl': '1440px'
    }}
    paddingX={{
     base: '32px',
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
     padding={'64px 64px 103px 64px'}
     backgroundColor={'var(--form-background)'}
     boxShadow={'0px 0px 150px -10px #061847;'}>
     <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
       display: 'flex',
       flexDirection: 'column',
       gap: '40px'
      }}>
      <InputField
       placeholder="Enter team name"
       label="Team Name"
       errors={errors.teamName}
       type="text"
       field={register('teamName')}
       required={true}
      />

      <FileInput
       label="Team Logo"
       registerName="teamLogo"
       watch={watchFields.teamLogo}
       register={register}
       errors={errors.teamLogo}
      />

      <InputField
       placeholder="Enter Team Leader Name"
       label="Team Leader Name"
       errors={errors.teamLeaderName}
       type="text"
       field={register('teamLeaderName')}
       required={true}
      />

      <FileInput
       label="Team Leader Photo"
       registerName="teamLeaderImage"
       register={register}
       watch={watchFields.teamLeaderImage}
       errors={errors.teamLeaderImage}
      />

      {fields.map((member, index) => (
       <div key={member.id}>
        <InputField
         placeholder={`Enter Team Member ${index + 1} Name`}
         label={`Team Member ${index + 1} Name`}
         errors={errors.teamMembers?.[index]?.name}
         type="text"
         field={register(`teamMembers.${index}.name`)}
         required={true}
        />

        <FileInput
         label={`Team Member ${index + 1} Image`}
         registerName={`teamMembers.${index}.image`}
         register={register(`teamMembers.${index}.image`)}
         watch={watchFields}
         errors={errors}
        />
       </div>
      ))}

      <Button
       variant={'primary-button'}
       type="button"
       onClick={() => append({ name: '', image: null })}>
       Add Team Member
      </Button>

      <Button variant={'primary-button'} type="submit">
       Submit
      </Button>
     </form>
    </Box>
   </Box>
  </>
 );
}
