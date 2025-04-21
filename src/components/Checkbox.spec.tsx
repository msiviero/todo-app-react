import { describe, expect, test } from "vitest"
import { render } from "vitest-browser-react"
import { Checkbox } from "./Checkbox"


describe("Checkbox", () => {
    test('Should be clickable', async () => {
        const { getByRole } = render(<Checkbox label="Learn React" checked={false} />)

        // initially should not be checked
        await expect.element( getByRole('checkbox', {name : 'Learn React'})).not.toBeChecked();

        // click the checkbox
        await getByRole('checkbox', {name : 'Learn React'}).click();

        // now sohuld be checked
        await expect.element( getByRole('checkbox', {name : 'Learn React'})).toBeChecked();
    })

    test('Should allow initial value as prop', async () => {
        const { getByRole } = render(<Checkbox label="Learn React" checked={true} />)

        // initially should not be checked
        await expect.element( getByRole('checkbox', {name : 'Learn React'})).toBeChecked();
    })
})
