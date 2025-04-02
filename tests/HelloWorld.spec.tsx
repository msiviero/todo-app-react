import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { HelloWorld } from '../src/HelloWorld'

test('renders name', async () => {
  const { getByText } = render(<HelloWorld name="Vitest" />)

  await expect.element(getByText('Hello Vitest!')).toBeInTheDocument()
})
