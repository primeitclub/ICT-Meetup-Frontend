import { extendBaseTheme } from "@chakra-ui/react";
import { buttonTheme } from "./buttonTheme";

export const theme = extendBaseTheme({
  fonts: {
    body: "Nunito Sans, sans-serif",
    heading: "Syncopate, sans-serif",
  },
  components: {
    Button: buttonTheme,
    Input: {
      variants: {
        "login-input": {
          background: "#FFFFFF12",
          color: "#FFFFFF61",
          borderBottom: "1px solid #FFFFFF61",
          _hover: {
            background: "#FFFFFF12",
            color: "#FFFFFF",
            borderBottom: "1px solid #FFFFFF",
          },
        },
      },
    },
  },
});
