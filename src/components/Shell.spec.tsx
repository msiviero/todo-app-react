import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { Shell } from './Shell'

test('should render a title', async () => {
    const { getByText } = render(<Shell />)
    await expect.element(getByText('Dummy todo app')).toBeInTheDocument()
})

test('should render a children', async () => {
    const { getByText } = render(
        <Shell>
            <div>child</div>
        </Shell>,
    )
    await expect.element(getByText('child')).toBeInTheDocument()
})
