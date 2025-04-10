import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { TodoApp } from './TodoApp'

test('should render the title', async () => {
    const { getByText } = render(<TodoApp />)
    await expect.element(getByText('Todo App')).toBeInTheDocument()
})

test('Should filter by completed status', async () => {
    const { getByRole, getByText, getByLabelText } = render(<TodoApp />)

    const filterIcon = getByLabelText('Title').getByRole('button');

    await filterIcon.click();

    await getByText('Show uncompleted only').click();
    await getByRole('button', { name: 'ok' }).click();

    expect(getByText('Learn React')).toBeInTheDocument();
    expect(getByText('Learn Typescript').query()).not.toBeInTheDocument();
})
