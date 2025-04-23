import { describe, expect, test } from "vitest"
import { Notification } from "./Notification"
import { render } from "vitest-browser-react"
import { page } from '@vitest/browser/context'

describe("Notificatio component", () => {
    test('Should allow to close by clicking x button', async () => {
        const { container, getByRole, getByText } = render(<Notification visible={true} message="Hello world" />)

        await expect.element(getByText('Hello world')).toBeVisible()
        await getByRole('button').click();
        await expect.element(page.elementLocator(container)).toBeEmptyDOMElement()
    })

    test('Should be hidden if visible prop is set to false', async () => {
        const { container } = render(<Notification visible={false} message="Hello world" />)
       
        await expect.element(page.elementLocator(container)).toBeEmptyDOMElement()
    })
})
