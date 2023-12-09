import { useEffect, useRef } from "react";

import { useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  teamMemberSchema,
  teamMemberSchemaType,
} from "../../../schema/valorantRegistration";
import {
  useValorantFormDataStore,
  useValorantFormStore,
} from "../../../store/valorantForm";
import FileInput from "../../ui/FileInput";
import InputField from "../../ui/InputField";
import FormStepperButtons from "./form-stepper-buttons";

export default function ValorantTeamMemberFormOne() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<teamMemberSchemaType>({
    resolver: zodResolver(teamMemberSchema),
  });
  const watchFields = watch();
  const shouldFetch = useRef(true);
  const { fields, append } = useFieldArray({
    control,
    name: "teamMembers",
  });
  const { setFormData, formData } = useValorantFormDataStore((state) => state);
  const setStep = useValorantFormStore((state) => state.setStep);
  const onSubmit = async (data: teamMemberSchemaType) => {
    const teamMembers = data.teamMembers;
    setFormData({
      ...formData,
      teamMembers: [...teamMembers],
    });
    //   nextStep();

    const valorantFormData = new FormData();
    valorantFormData.append("teamName", formData.teamName);
    valorantFormData.append("teamLeaderName", formData.teamLeaderName);
    valorantFormData.append("teamSubName", formData.teamSubName);
    if (formData.teamLogo) {
      valorantFormData.append("teamLogo", formData.teamLogo);
    }
    if (formData.teamLeaderImage) {
      valorantFormData.append("teamLeaderImage", formData.teamLeaderImage);
    }
    const number = ["One", "Two", "Three", "Four"];
    teamMembers.forEach((member, index) => {
      valorantFormData.append(`teamMember${number[index]}Name`, member.name);
      if (member.image) {
        valorantFormData.append(
          `teamMember${number[index]}Image`,
          member.image
        );
      }
    });
    console.log(Object.fromEntries(valorantFormData.entries()));
    setStep(0);
  };
  useEffect(() => {
    if (shouldFetch.current) {
      append([{ name: "", image: null }]);
      append([{ name: "", image: null }]);
      append([{ name: "", image: null }]);
      append([{ name: "", image: null }]);
      shouldFetch.current = false;
    }
  }, [append]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {fields?.map((field, index) => (
          <>
            <InputField
              placeholder={`Enter Team Member #${index + 1} Name`}
              label={`Team Member #${index + 1} Name`}
              errors={errors.teamMembers?.[index]?.name}
              type="text"
              field={register(`teamMembers.${index}.name` as const)}
              required={true}
              key={field.id}
            />

            <FileInput
              label={`Team Member #${index + 1} Image`}
              registerName={`teamMembers.${index}.image` as const}
              watch={watchFields.teamMembers?.[index]?.image}
              register={register}
              errors={errors.teamMembers?.[index]?.image}
            />
          </>
        ))}

        <FormStepperButtons handleNextStep={handleSubmit(onSubmit)} />
      </form>
    </>
  );
}
