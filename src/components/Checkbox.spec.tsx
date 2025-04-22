import { describe, expect, test } from "vitest"
import { render } from "vitest-browser-react"
import { Checkbox } from "./Checkbox"


describe("Checkbox", () => {
    test('Should be clickable', async () => {

        let checked = false;
        const { getByRole } = render(<Checkbox id={0} onChange={(value) => checked = value} />)

        // initially should not be checked
        await expect.element(getByRole('checkbox')).not.toBeChecked();

        // click the checkbox
        await getByRole('checkbox').click();

        // now sohuld be checked
        expect(checked).toBeTruthy();
    })

    test('Should allow initial value as prop', async () => {
        const { getByRole } = render(<Checkbox id={0} checked={true} />)

        // initially should not be checked
        await expect.element(getByRole('checkbox')).toBeChecked();
    })
})
