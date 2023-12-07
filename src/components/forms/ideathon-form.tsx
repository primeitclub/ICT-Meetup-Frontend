import { useForm } from "react-hook-form";
import { z } from "zod";

import { Box, Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";

import RegistrationFormHeader from "../reusables/registration-form-header";
import InputField from "../ui/InputField";
import TextAreaInputField from "../ui/TextAreaField";

const ideathonSchema = z.object({
  teamName: z.string().min(3).max(50),
  teamMembers: z.string().min(3).max(50),
  collegeName: z.string().min(3).max(50),
  teamLeaderName: z.string().min(3).max(50),
  sdgGoals: z.string().min(3).max(50),
  ideaName: z.string().min(3).max(50),
  ideaDescription: z.string().min(150).max(250),
  ideaImpact: z.string().min(3).max(50),
  ideaImplementation: z.string().min(3).max(50),
});

type FormValues = z.infer<typeof ideathonSchema>;

export default function IdeathonForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(ideathonSchema),
  });

  console.log(errors);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <Box
        maxW={{
          xl: "1100px",
          "2xl": "1440px",
        }}
        paddingX={{
          base: "10px",
          md: "64px",
          xl: "0px",
        }}
        margin={"auto"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        marginTop={"64px"}
      >
        <RegistrationFormHeader
          title="Ideathon Form"
          description="Please fill up the details"
        />
        <Box
          marginTop={"64px"}
          borderRadius={"24px"}
          backdropFilter={"blur(20px)"}
          maxW={"800px"}
          width={"100%"}
          padding={{
            base: "32px 32px 103px 32px",
            md: "64px 64px 103px 64px",
          }}
          backgroundColor={"var(--form-background)"}
          boxShadow={"0px 0px 150px -10px #061847;"}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
            }}
          >
            <InputField
              label="Team Name"
              errors={errors.teamName}
              required={true}
              placeholder="Team Name"
              type="text"
              field={register("teamName")}
              key={"teamName"}
            />

            <InputField
              label="Team Members (Separate by commas)"
              errors={errors.teamMembers}
              required={true}
              placeholder="Team Members"
              type="text"
              field={register("teamMembers")}
              key={"teamMembers"}
            />

            <InputField
              label="College Name"
              errors={errors.collegeName}
              required={true}
              placeholder="College Name"
              type="text"
              field={register("collegeName")}
              key={"collegeName"}
            />

            <InputField
              label="Team Leader Name"
              errors={errors.teamLeaderName}
              required={true}
              placeholder="Team Leader Name"
              type="text"
              field={register("teamLeaderName")}
              key={"teamLeaderName"}
            />

            <InputField
              label="SDG Goals"
              errors={errors.sdgGoals}
              required={true}
              placeholder="SDG Goals"
              type="text"
              field={register("sdgGoals")}
              key={"sdgGoals"}
            />

            <InputField
              label="Idea Name"
              errors={errors.ideaName}
              required={true}
              placeholder="Idea Name"
              type="text"
              field={register("ideaName")}
              key={"ideaName"}
            />

            <TextAreaInputField
              label="Idea Description"
              errors={errors.ideaDescription}
              required={true}
              placeholder="Idea Description"
              type="text"
              field={register("ideaDescription")}
              key={"ideaDescription"}
            />

            <InputField
              label="Idea Impact"
              errors={errors.ideaImpact}
              required={true}
              placeholder="Idea Impact"
              type="text"
              field={register("ideaImpact")}
              key={"ideaImpact"}
            />

            <TextAreaInputField
              label="Idea Implementation"
              errors={errors.ideaImplementation}
              required={true}
              placeholder="Idea Implementation"
              type="text"
              field={register("ideaImplementation")}
              key={"ideaImplementation"}
            />

            <Button type="submit" variant={"primary-button"}>
              Submit Form
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

//team name
//team members all in one
//college name
//team leader name
//sdg goals(4,6,7,11,13)
//idea name
//idea description(150 words)
//how it impacts the society
//idea implementation
