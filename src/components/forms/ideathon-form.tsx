import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Box, Button, Image, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerIdeathon } from "../../api/register-event";
import RegistrationFormHeader from "../reusables/registration-form-header";
import FileInput from "../ui/FileInput";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import TextAreaInputField from "../ui/TextAreaField";
import QrImage from "../../assets/qr.jpg";


const ideathonSchema = z.object({
    teamName: z.string().min(3).max(50),
    teamMembers: z.string().min(3).max(50),
    collegeName: z.string().min(3).max(50),
    sdgGoals: z.string().min(3).max(50),
    ideaName: z.string().min(3).max(50),
    ideaDescription: z.string().min(150).max(250),
    payment: z.any(),
});

type FormValues = z.infer<typeof ideathonSchema>;

export default function IdeathonForm() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(ideathonSchema),
    });

    const watchFields = watch();
    const onSubmit = async (data: FormValues) => {
        const formData = new FormData();
        formData.append("teamName", data.teamName);
        formData.append("TeamMembers", data.teamMembers);
        formData.append("collegeName", data.collegeName);
        formData.append("sdgGoal", data.sdgGoals);
        formData.append("ideaName", data.ideaName);
        formData.append("ideaDescription", data.ideaDescription);
        formData.append("payment", data.payment[0]);

        const response = await registerIdeathon(formData);

        if (response.success === true) {
            toast.success("Successfully registered for Ideathon");
            navigate("/");
        } else {
            response.error.detail.forEach((error: any) => {
                toast.warning(error);
            });
            toast.error("Failed to register for Ideathon");
        }
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
                marginTop={"128px"}
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
                        base: "32px 32px 32px 32px",
                    }}
                    backgroundColor={"var(--form-background)"}
                    boxShadow={"0px 0px 150px -10px #061847;"}
                >
                    <Text fontSize={"xl"} fontWeight={"bold"} color={"white"}>
                        Ideathon is an event or competition that focuses on generating and
                        developing innovative ideas within a specific timeframe working
                        intensively on creating solutions to a given challenge or problem.
                        The goal is to encourage innovative thinking, foster creativity, and
                        provide a platform for individuals to showcase their problem-solving
                        skills.
                        <br />
                        <br />
                        <Text as='span' fontWeight={'1000'} color='#FF6B2E'> Theme: Sustainable Development Goals (SDGs)</Text>
                        <br />
                        • This Ideathon centers around addressing challenges based on 5 out of 17 SDG goals aligned with the United Nations' SDGs, encouraging participants to create solutions that contribute to a better and more sustainable future. The selected goals are as follows:
                        <br />
                        <br />
                        1. <Text as='span' fontWeight={'1000'} color='#FF6B2E'>SDG 4:</Text> Quality Education<br />
                        2. <Text as='span' fontWeight={'1000'} color='#FF6B2E'>SDG 6: </Text>Clean Water and Sanitation<br />
                        3. <Text as='span' fontWeight={'1000'} color='#FF6B2E'>SDG 7: </Text>Affordable and Clean Energy<br />
                        4. <Text as='span' fontWeight={'1000'} color='#FF6B2E'>SDG 11: </Text>Sustainable Cities and Communities<br />
                        5. <Text as='span' fontWeight={'1000'} color='#FF6B2E'>SDG 13:</Text> Climate Action<br />
                        <br />
                        Who can apply:
                        <br />
                        • All bachelors running students are eligible to participate.
                        <br />
                        <br />
                        Rules:
                        <br />
                        • Teams should submit ideas based on the theme provided by the
                        organizers.
                        <br />
                        • Teams can consist of at most four members each.
                        <br />• The registration will be through our official website.
                        <br />
                        <br />
                        Payment Details:
                        <br />
                        • Registration Fee: <Text as='span' fontWeight={'1000'} color='#00ff62'>Rs. 2000 </Text>per team
                        <br />

                    </Text>
                </Box>

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

                        <SelectField
                            label="SDG Goals"
                            errors={errors.sdgGoals}
                            required={true}
                            placeholder="SDG Goals"
                            type="text"
                            field={register("sdgGoals")}
                            key={"sdgGoals"}
                            options={["SDG4", "SDG6", "SDG7", "SDG11", "SDG13"]}
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
                        <Text color={'white'} fontSize={'22px'} fontWeight={'500'}>
                            Pay by Scanning the QR code below and upload the screenshot of the payment
                        </Text>
                        <Image src={QrImage} width={'80%'} marginX={'auto'} />
                        <FileInput
                            label="Payment"
                            errors={errors.payment}
                            registerName="payment"
                            register={register}
                            key={"payment"}
                            watch={watchFields.payment}
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
