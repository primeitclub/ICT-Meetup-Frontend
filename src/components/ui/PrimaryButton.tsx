import { Button, Text } from "@chakra-ui/react";

export default function PrimaryButton({ buttonText }: { buttonText: string }) {
  return (
    <>
      <Button
        paddingX={"64px"}
        width={{
          base: "100%",
          md: "fit-content",
        }}
        paddingY={"12px"}
        variant={"primary-button"}
      >
        <Text>{buttonText}</Text>
      </Button>
    </>
  );
}
