import type { Preview } from "@storybook/react";
import { generateCssVariables } from "../src/utils/theme";

generateCssVariables()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
