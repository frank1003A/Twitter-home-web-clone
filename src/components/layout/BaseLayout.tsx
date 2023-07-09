import { ThemeProvider } from "../../context/ThemeContext";
import Header from "../ui/Header";

interface BaseLayoutProps extends React.ComponentPropsWithoutRef<"main"> {}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <ThemeProvider>
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default BaseLayout;
