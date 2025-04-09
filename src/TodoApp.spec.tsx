import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { TodoApp } from './TodoApp'

test('should render the title', async () => {
    const { getByText } = render(<TodoApp />)
    await expect.element(getByText('Todo App')).toBeInTheDocument()
})
