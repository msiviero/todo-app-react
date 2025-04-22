import { describe, test, expect } from "vitest";
import { render } from "vitest-browser-react";
import { EditableLabel } from "./EditableLabel";
import { userEvent } from "@vitest/browser/context";


describe("Add input box", () => {
    test('Should allow to insert input', async () => {

        let result = "";
        const { getByRole } = render(<EditableLabel value="test label" readOnly={false} onChange={(value) => result = value} />)

        await getByRole('button', { hasText: "test label" }).click();
        await getByRole('textbox').fill("a test string");
        
        await userEvent.keyboard("{Enter}");
        await userEvent.keyboard("{/Enter}");

        await expect.element(getByRole('button', { hasText: "a test string" })).toBeInTheDocument();
    })

    test('Should not allow to insert input if readonly prop is true', async () => {
        const { getByRole } = render(<EditableLabel value="test label" readOnly={true} onChange={() => {}} />)
        
        await expect.element(getByRole('button', { hasText: "test label" })).toBeDisabled();
    })
});
