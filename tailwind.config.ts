import type { Config } from "tailwindcss";
import tailwindForms from "@tailwindcss/forms";
import headlessui from "@headlessui/tailwindcss";

export default <Partial<Config>>{
  plugins: [
    tailwindForms,
    headlessui
  ]
};
