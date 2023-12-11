import { Box, Text } from "@chakra-ui/react";

interface Props {
  placeholder: string;
  label?: string;
  errors?: any;
  type: string;
  field?: any;
  required?: boolean;
  disabled?: boolean;
  options?: any;
}

export default function SelectField(props: Props) {
  return (
    <div>
      <label htmlFor={props.label}>
        {
          <Box
            display={"flex"}
            textColor={"var(--accent-input-label-blue)"}
            fontSize={"20px"}
            fontStyle={"normal"}
            fontWeight={"700"}
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
      </label>
      <select
        className={`custom-input ${props.errors ? "error-input" : ""}`}
        {...props.field}
        type={props.type}
        placeholder={props.placeholder}
        autoComplete="off"
        disabled={props.disabled}
      >
        <option
          style={{ color: "white", backgroundColor: "var(--bg)" }}
          value=""
        >
          Select an option
        </option>
        {props.options?.map((item: any) => (
          <option
            style={{
              color: "white",
              backgroundColor: "var(--bg)",
            }}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
      {
        <Text
          marginTop={"12px"}
          color={"red"}
          fontSize={"14px"}
          fontStyle={"normal"}
          fontWeight={"500"}
          lineHeight={"150%"}
        >
          {props.errors?.message}
        </Text>
      }
    </div>
  );
}
