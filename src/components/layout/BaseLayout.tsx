import { ThemeProvider } from "../../context/ThemeContext";
import Header from "../ui/Header";

interface BaseLayoutProps extends React.ComponentPropsWithoutRef<"main"> {}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <ThemeProvider>
      <div className="base-wrapper">
        <Header />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default BaseLayout;
