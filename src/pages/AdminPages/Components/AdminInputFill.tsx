import { Box, FormLabel, Text, Textarea } from "@chakra-ui/react";

interface Props {
  placeholder: string;
  label: string;
  errors: any;
  type: string;
  field?: any;
  required?: boolean;
}

export default function InputFieldAdmin(props: Props) {
  return (
    <Box>
      <FormLabel htmlFor={props.label}>
        {
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
            {props.label}
            {props.required ? (
              <Text marginLeft={"5px"} textColor={"red"}>
                *
              </Text>
            ) : (
              ""
            )}
          </Box>
        }
      </FormLabel>

      {props.type === "textarea" ? (
        <Textarea
          className={`custom-input-admin `}
          {...props.field}
          type={props.type}
          placeholder={props.placeholder}
        ></Textarea>
      ) : (
        <input
          className={`custom-input-admin `}
          {...props.field}
          type={props.type}
          placeholder={props.placeholder}
        />
      )}

      {
        <Text
          marginTop={"12px"}
          color={"red"}
          fontFamily={"body"}
          fontSize={"14px"}
          fontStyle={"normal"}
          fontWeight={"100"}
          lineHeight={"150%"}
        >
          {props.errors?.message}
        </Text>
      }
    </Box>
  );
}
