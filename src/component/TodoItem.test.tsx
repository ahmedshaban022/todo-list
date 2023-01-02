import { render, screen } from "@testing-library/react"
import App from "../App"


describe("redner btn",()=>{
    test("render the Btn",()=>{
        render(<App/>)
        const btn=screen.getByTestId("btn-to-toast");
        expect(btn).toBeInTheDocument()
    })
})