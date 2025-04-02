import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { Shell } from './Shell'

test('should render', async () => {

    const { getByText } = render(<Shell />)
    await expect.element(getByText('Hello World')).toBeInTheDocument()
})

