export const buttonTheme = {
 variants: {
  'primary-button': {
   background: 'linear-gradient(92deg, #2C84EC 0.11%, #0055D5 103.68%)',
   padding: '10px 30px',

   borderRadius: '10px',
   color: 'white',
   fontWeight: '500',
   fontSize: '22px',
   transition: 'background 0.3s ease-in-out, transform 0.3s ease-in-out',
   _hover: {
    transform: 'scale(1.05)' // Scale the button slightly on hover for a smooth effect
   }
  },

  'disabled-button': {
    background: 'gray',
    padding: '10px 30px',
    borderRadius: '10px',
    color: 'white',
    transition: 'background 0.3s ease-in-out, transform 0.3s ease-in-out',
    _hover: {
    }
    },

    "outlined-button": {
      padding: "10px 30px",
      color: "white",
      border: "2px solid var(--blue-gradient, #2C84EC)",
      transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
      _hover: {
        transform: "scale(1.05)", // Scale the button slightly on hover for a smooth effect
      },
    },
    
  },
};
