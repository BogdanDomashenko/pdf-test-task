import { Font } from "@react-pdf/renderer";
import { Availibity } from "./components/Availibity/Availibity";

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
  ],
});

const App = () => {
  return (
    <div>
      <Availibity />
    </div>
  );
};

export default App;
