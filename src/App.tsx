import { Box } from "@chakra-ui/react";
import "./App.css";
import MainRoute from "./router/MainRoute";

function App() {
    return (

        <Box bg='radial-gradient(132.21% 68.86% at 43.76% 52.23%, #040E2C 0.47%, rgba(0, 0, 0, 0.80) 100%)'
            width={'100vw'} height={'100vh'}>
            <MainRoute />
        </Box>
    );
}

export default App;
