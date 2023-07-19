import ReactDOM from "react-dom/client";
import { App } from "./App"

const container: Element | DocumentFragment | null = document.getElementById("root")

if(container)

    ReactDOM.createRoot(container).render(
        <App />
    )

