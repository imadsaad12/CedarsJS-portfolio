import "./App.css";
import ApplicationRoutes from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApplicationRoutes />
    </ThemeProvider>
  );
}

export default App;
