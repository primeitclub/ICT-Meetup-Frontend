import { extendBaseTheme } from "@chakra-ui/react";
import { buttonTheme } from "./buttonTheme";

export const theme = extendBaseTheme({
  fonts: {
    body: "Nunito Sans, sans-serif",
    heading: "Syncopate, sans-serif",
  },
  components: {
    Button: buttonTheme,
  },
});
