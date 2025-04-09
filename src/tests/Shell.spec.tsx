import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

test('should render a title', async () => {
    const { getByText } = render(<div />)
    await expect.element(getByText('Dummy todo app')).toBeInTheDocument()
})

test('should render a children', async () => {
    const { getByText } = render(
        <div>
            <div>child</div>
        </div>,
    )
    await expect.element(getByText('child')).toBeInTheDocument()
})
