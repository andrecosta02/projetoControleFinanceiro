import { createRoot } from "react-dom/client"
import App from "./App"

const Root = createRoot(document.querySelector("#root"))

Root.render(<App />)