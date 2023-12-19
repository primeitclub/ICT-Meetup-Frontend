import { useEffect } from "react";

import { useFieldArray, useForm } from "react-hook-form";
import { TbTrash } from "react-icons/tb";
import { toast } from "sonner";

import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";

import { addNewEvent } from "../../../../api/admin";
// form schemda
import {
  AddEventFormValues,
  addEventSchema,
} from "../../DataSchemas/AddEventSchema";
import AdminFile from "../AdminFile";
import InputFieldAdmin from "../AdminInputFill";
// demo select
import SelectInput from "../AdminSelectInput";
import Editor from "../reusables/AdminCkEditor";

function EventForm() {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<AddEventFormValues>({
    resolver: zodResolver(addEventSchema),
    defaultValues: {
      eventDate: [
        {
          date: "",
          endTime: "",
          startTime: "",
        },
      ],
    },
  });

  // onSubmit function

  function slugify(title: string): string {
    // Convert the title to lowercase and replace spaces with hyphens
    const slug = title.toLowerCase().replace(/\s+/g, "-");

    // Remove special characters and non-alphanumeric characters
    const cleanedSlug = slug.replace(/[^\w-]+/g, "");

    return cleanedSlug;
  }

  const onSubmit = async (value: AddEventFormValues) => {
    const formData = new FormData();
    Object.keys(value).forEach((key) => {
      //@ts-ignore
      if (key === "eventThumbnail") {
        //@ts-ignore
        formData.append(key, value[key][0]);
      }
      if (key === "eventDate") {
        console.log(value[key]);
        //@ts-ignore
        value[key].forEach((item) => {
          formData.append("eventDate", item.date);
          formData.append("startTime", item.startTime);
          formData.append("endTime", item.endTime);
        });
      }
      //@ts-ignore
      else {
        //@ts-ignore
        formData.append(key, value[key]);
      }
    });
    console.log(Object.fromEntries(formData.entries()));
    const response = await addNewEvent(formData);
    if (response.success === true) {
      toast.success("Event Added Successfully");
    } else {
      response.error.detail.forEach((err: any) => {
        toast.error(err);
      });
      toast.error("Event Not Added");
    }
  };

  const watchFields = watch();

  useEffect(() => {
    if (watchFields.title) {
      setValue("slug", slugify(watchFields.title));
    }
  }, [watchFields.title]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "eventDate",
  });

  return (
    <>
      <Box width={"95%"} margin={"auto"} className="event_form">
        <Box
          className="Form_heaing"
          sx={{
            color: "#090D1B",
            fontSize: "22px",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 8,
            paddingLeft: 5,
          }}
        >
          Add Event
        </Box>

        <Box sx={{ borderRadius: 10 }} className="form_wrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex align={"start"} direction={"column"} gap={6}>
              <Box flex={1} backgroundColor={"white"} padding={"30px"}>
                <InputFieldAdmin
                  key={"name"}
                  required={true}
                  label="Event Name"
                  type="text"
                  placeholder="Enter Event Title"
                  field={register("title")}
                  errors={errors.title}
                />

                <InputFieldAdmin
                  key={"slug"}
                  required={true}
                  label="Event Slug"
                  type="text"
                  placeholder="Enter Event Slug"
                  field={register("slug")}
                  errors={errors.slug}
                  readOnly={true}
                />

                <SelectInput
                  key={"event"}
                  errors={errors.eventType}
                  required={true}
                  field={register("eventType")}
                  label="Event Category"
                  options={[
                    "workshop",
                    "session",
                    "pannel_discussion",
                    "competition",
                  ]}
                />

                <InputFieldAdmin
                  key={"venue"}
                  required={true}
                  label="Event Venue"
                  type="text"
                  placeholder="Enter Venue"
                  field={register("location", {
                    required: "Venue is Required",
                  })}
                  errors={errors.location}
                />

                <Flex gap={"5"}>
                  <Box flex={1}>
                    <InputFieldAdmin
                      key={"floor"}
                      required={true}
                      label="Event Floor"
                      type="text"
                      placeholder="Enter Floor Detail"
                      field={register("floor")}
                      errors={errors.floor}
                    />
                  </Box>

                  <Box flex={1}>
                    <InputFieldAdmin
                      key={"room"}
                      required={true}
                      label="Event Room"
                      type="text"
                      placeholder="Enter Room Detail"
                      field={register("roomNo")}
                      errors={errors.roomNo}
                    />
                  </Box>
                </Flex>

                <div>
                  <Box
                    display={"flex"}
                    textColor={"#A2A2A2"}
                    fontFamily={"body"}
                    fontSize={"20px"}
                    fontStyle={"normal"}
                    fontWeight={"700"}
                    color={"#252525"}
                    lineHeight={"150%"}
                  >
                    Event Description
                    <Text marginLeft={"5px"} textColor={"red"}>
                      *
                    </Text>
                  </Box>
                  <Editor
                    registerName="description"
                    setValue={setValue}
                    placeholder="Description"
                    // value={productInfo?.description}
                  />
                  {errors.description?.message && (
                    <p className="text-red-500">
                      {errors.description?.message}
                    </p>
                  )}
                </div>
              </Box>

              <Box flex={1} backgroundColor={"white"} padding={"30px"}>
                {/* <InputFieldAdmin
                  key={"eventDate"}
                  required={true}
                  label="Event Date"
                  type="date"
                  placeholder="Event Date"
                  field={register("eventDate", {
                    required: "please enter a date",
                  })}
                  errors={errors.eventDate}
                />

                <Flex gap={"5"}>
                  <Box flex={1}>
                    <InputFieldAdmin
                      key={"startTime"}
                      required={true}
                      label="Start At"
                      type="time"
                      placeholder="Event Time"
                      field={register("startTime", {
                        required: "please enter a time",
                      })}
                      errors={errors.startTime}
                    />
                  </Box>

                  <Box flex={1}>
                    <InputFieldAdmin
                      key={"endTime"}
                      required={true}
                      label="End Time"
                      type="time"
                      placeholder="Event Time"
                      field={register("endTime", {
                        required: "please enter a time",
                      })}
                      errors={errors.endTime}
                    />
                  </Box>
                </Flex> */}
                {fields.length > 0 &&
                  fields.map((item, index) => (
                    <Flex key={item.id} gap={"5"}>
                      <Box flex={1}>
                        <InputFieldAdmin
                          key={"date"}
                          required={true}
                          label="Event Date"
                          type="date"
                          placeholder="Event Date"
                          field={register(`eventDate.${index}.date`, {
                            required: "please enter a date",
                          })}
                          errors={errors.eventDate?.[index]?.date}
                        />
                      </Box>

                      <Box flex={1}>
                        <InputFieldAdmin
                          key={"startTime"}
                          required={true}
                          label="Start At"
                          type="time"
                          placeholder="Event Time"
                          field={register(`eventDate.${index}.startTime`, {
                            required: "please enter a time",
                          })}
                          errors={errors.eventDate?.[index]?.startTime}
                        />
                      </Box>

                      <Box flex={1}>
                        <InputFieldAdmin
                          key={"endTime"}
                          required={true}
                          label="End Time"
                          type="time"
                          placeholder="Event Time"
                          field={register(`eventDate.${index}.endTime`, {
                            required: "please enter a time",
                          })}
                          errors={errors.eventDate?.[index]?.endTime}
                        />
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Button
                          onClick={() => remove(index)}
                          paddingX={"10px"}
                          rounded={"lg"}
                          paddingY={"12px"}
                          color={"black"}
                          fontWeight={"700"}
                          backgroundColor={"#d1d0ce"}
                        >
                          <TbTrash />
                        </Button>
                      </Box>
                    </Flex>
                  ))}

                <Button
                  onClick={() =>
                    append({
                      date: "",
                      endTime: "",
                      startTime: "",
                    })
                  }
                  paddingX={"10px"}
                  rounded={"lg"}
                  paddingY={"12px"}
                  color={"black"}
                  fontWeight={"700"}
                  backgroundColor={"#d1d0ce"}
                >
                  Add Second Date
                </Button>

                <InputFieldAdmin
                  key={"totalSeats"}
                  required={false}
                  label="Number of Seats"
                  type="number"
                  placeholder="Number of seats"
                  field={register("totalSeats")}
                  errors={errors.totalSeats}
                />

                <AdminFile
                  errors={errors.eventThumbnail}
                  registerName="eventThumbnail"
                  label="Event Thumbnail"
                  key={"file upload"}
                  register={register}
                  watch={watchFields.eventThumbnail}
                />
                <Flex align={"center"} marginTop={"9"} gap={"5"}>
                  <Button
                    paddingX={"10px"}
                    width={{
                      base: "100%",
                      md: "321px",
                    }}
                    rounded={"lg"}
                    paddingY={"12px"}
                    color={"black"}
                    fontWeight={"700"}
                    backgroundColor={"#d1d0ce"}
                  >
                    Cancel
                  </Button>
                  <Button
                    paddingX={"10px"}
                    width={{
                      base: "100%",
                      md: "321px",
                    }}
                    rounded={"lg"}
                    paddingY={"12px"}
                    color={"white"}
                    fontWeight={"700"}
                    backgroundColor={"var(--accent-blue)"}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default EventForm;
