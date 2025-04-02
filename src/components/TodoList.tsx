
import { Button } from './Button'
import { TodoItem } from './TodoItem';

export const TodoList: React.FC<{}> = () => {
    return (
        <>
            <div className='py-4'>
                <TodoItem title='test'  isCompleted={false} id={1} />
                <TodoItem title='test2' isCompleted={true} id={2} />
            </div>
            <div className='py-4'>
                <Button onClick={() => console.log('add')}>Add</Button>
            </div>
        </>
    );
};
