import { extendBaseTheme } from "@chakra-ui/react";
import { buttonTheme } from "./buttonTheme";
import { sectionHeaderTheme } from "./headerTheme";
import { cardTheme } from "./cardTheme";

export const theme = extendBaseTheme({
  fonts: {
    body: "Nunito Sans, sans-serif", 
    heading: "Syncopate, sans-serif",
  },
  components: {
    Button: buttonTheme,
    Heading: sectionHeaderTheme,
    CustomCard: cardTheme
  },
});
