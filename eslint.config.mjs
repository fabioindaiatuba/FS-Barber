import { FlatCompat } from "@eslint/eslintrc"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Configurações do plugin React em formato flat
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Desliga a regra que exige import React no JSX
    },
    settings: {
      react: {
        version: "detect", // Detecta automaticamente versão do React instalada
      },
    },
  },
]

export default eslintConfig
