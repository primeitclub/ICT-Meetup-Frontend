import { useForm } from 'react-hook-form';
import InputField from '../../ui/InputField';
import { teamSubSchema, teamSubSchemaType } from '../../../schema/valorantRegistration';
import { zodResolver } from '@hookform/resolvers/zod';
import FileInput from '../../ui/FileInput';
import { useValorantFormStore } from '../../../store/valorantForm';
import FormStepperButtons from './form-stepper-buttons';
import { useValorantFormDataStore } from '../../../store/valorantForm';

export default function TeamSubForm() {
 const {
  register,
  handleSubmit,
  watch,
  formState: { errors }
 } = useForm<teamSubSchemaType>({
  resolver: zodResolver(teamSubSchema)
 });
 const watchFields = watch();
 const nextStep = useValorantFormStore((state) => state.nextStep);
 const { setFormData, formData } = useValorantFormDataStore((state) => state);

 const onSubmit = (data: teamSubSchemaType) => {
  console.log(data);
  setFormData({
   ...formData,
   ...data
  });
  nextStep();
 };

 return (
  <>
   <form
    style={{
     display: 'flex',
     flexDirection: 'column',
     gap: '40px'
    }}>
    <InputField
     placeholder="Enter Team Sub Name"
     label="Team Sub Name (Manager/Extra Player)"
     errors={errors.teamSubName}
     type="text"
     field={register('teamSubName')}
     required={true}
    />
    <FileInput
     label="Team Sub Image"
     registerName="teamSubImage"
     watch={watchFields.teamSubImage}
     register={register}
     errors={errors.teamSubImage}
    />

    <FormStepperButtons handleNextStep={handleSubmit(onSubmit)} />
   </form>
  </>
 );
}
