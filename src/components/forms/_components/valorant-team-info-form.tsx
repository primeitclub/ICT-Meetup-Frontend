import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  teamInfoSchema,
  teamInfoSchemaType,
} from "../../../schema/valorantRegistration";
import {
  useValorantFormDataStore,
  useValorantFormStore,
} from "../../../store/valorantForm";
import FileInput from "../../ui/FileInput";
import InputField from "../../ui/InputField";
import FormStepperButtons from "./form-stepper-buttons";

export default function ValorantTeamForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<teamInfoSchemaType>({
    resolver: zodResolver(teamInfoSchema),
  });
  const { nextStep } = useValorantFormStore((state) => state);
  const { setFormData, formData } = useValorantFormDataStore((state) => state);
  const watchFields = watch();
  const onSubmit = (data: teamInfoSchemaType) => {
    setFormData({
      ...formData,
      ...data,
    });
    nextStep();
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <InputField
          placeholder="Enter team name"
          label="Team Name"
          errors={errors.teamName}
          type="text"
          field={register("teamName")}
          required={true}
        />

        <FileInput
          label="Team Logo"
          registerName="teamLogo"
          watch={watchFields.teamLogo}
          register={register}
          errors={errors.teamLogo}
        />

        <FileInput
          label="Team Leader Photo"
          registerName="teamLeaderImage"
          register={register}
          watch={watchFields.teamLeaderImage}
          errors={errors.teamLeaderImage}
        />

        <FormStepperButtons handleNextStep={handleSubmit(onSubmit)} />
      </form>
    </>
  );
}
