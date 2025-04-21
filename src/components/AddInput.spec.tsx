import { describe, expect, test } from "vitest"
import { AddTodoInput } from "./AddInput"
import { render } from "vitest-browser-react"

describe("Add input box", () => {
    test('Should allow to insert input', async () => {

        let result = "";
        const { getByRole } = render(<AddTodoInput onSubmit={(value) => result = value} />)

        expect(getByRole('button')).toBeDisabled();
        await getByRole('textbox').fill("a test string");

        expect(getByRole('button')).not.toBeDisabled();
        await getByRole('button').click();

        expect(result).toEqual("a test string")
    })

    test('Should not allow to insert empty input', async () => {

        const { getByRole } = render(<AddTodoInput onSubmit={() => {}} />)

        await getByRole('textbox').fill("blablabla");
        await getByRole('textbox').fill("");
        expect(getByRole('button')).toBeDisabled();
    })
})
