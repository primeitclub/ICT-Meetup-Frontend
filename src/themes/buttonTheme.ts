export const buttonTheme = {
  variants: {
    "primary-button": {
      background: "linear-gradient(92deg, #2C84EC 0.11%, #0055D5 103.68%)",
      padding: "10px 30px",

      borderRadius: "10px",
      color: "white",
      transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
      _hover: {
        transform: "scale(1.05)", // Scale the button slightly on hover for a smooth effect
      },
    },

    "outlined-button": {
      padding: "10px 30px",
      color: "#2C84EC",
      border: "1px solid var(--blue-gradient, #2C84EC)",
      transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
      _hover: {
        transform: "scale(1.05)", // Scale the button slightly on hover for a smooth effect
      },
    },
  },
};
