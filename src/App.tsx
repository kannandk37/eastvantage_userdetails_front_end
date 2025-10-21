import { ThemeProvider, createTheme } from "@mui/material/styles";
import { UserProfileCard } from "./components/users/user";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProfileCard />
    </ThemeProvider>
  );
}

export default App;
