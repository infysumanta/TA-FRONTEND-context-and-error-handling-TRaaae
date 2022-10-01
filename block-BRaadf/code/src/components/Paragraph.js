import { useContext } from "react";
import { ThemeContext } from "./../context/ThemeContext";
function Paragraph() {
  let isDarkMode = useContext(ThemeContext);
  return (
    <p className={`para ${isDarkMode ? "para-dark" : "para-light"}`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et
      pharetra pharetra massa massa ultricies. Id porta nibh venenatis cras sed
      felis eget velit. A diam sollicitudin tempor id eu. Tincidunt arcu non
      sodales neque sodales ut etiam sit. Eu scelerisque felis imperdiet proin
      fermentum. Faucibus a pellentesque sit amet porttitor. Laoreet id donec
      ultrices tincidunt arcu non sodales neque. Rutrum tellus pellentesque eu
      tincidunt tortor aliquam nulla facilisi cras. Sollicitudin tempor id eu
      nisl nunc. Eget velit aliquet sagittis id consectetur purus ut. Cras
      pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur
      adipiscing elit pellentesque habitant morbi tristique senectus et.
    </p>
  );
}
export default Paragraph;
