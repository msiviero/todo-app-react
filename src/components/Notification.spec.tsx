import { describe, expect, test, vi } from "vitest"
import { Notification } from "./Notification"
import { render } from "vitest-browser-react"
import { page } from '@vitest/browser/context'
import { NotificationProvider, useDispatchNotification } from "../state/NotificationProvider"

describe("Notificatio component", () => {

    test('Should allow to close by clicking x button', async () => {


        vi.mock('../state/NotificationProvider');
        vi.mocked(useDispatchNotification).mockReturnValue(() => { })

        const { getByRole, getByText } = render(
            <NotificationProvider initialState={{ visible: true, message: 'Hello world' }}>
                <Notification visible={true} message="Hello world" />
            </NotificationProvider>
        )

        await expect.element(getByText('Hello world')).toBeVisible();
        await getByRole('button').click();

        expect(useDispatchNotification).toBeCalledTimes(1);
    })

    test('Should be hidden if visible prop is set to false', async () => {
        const { container } = render(<Notification visible={false} message="Hello world" />)
        await expect.element(page.elementLocator(container)).toBeEmptyDOMElement()
    })
})
