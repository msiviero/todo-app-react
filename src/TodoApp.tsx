import { TodoList } from "./components/TodoList";
import { Notification } from "./components/Notification";
import { ApiService, httpClient, makeApiService } from "./service/apiService";
import { useNotificationState } from "./state/NotificationProvider";
import { uuidKeyGenerator } from "./service/keyService";


const apiService: ApiService = makeApiService(httpClient);

export const TodoApp = () => {
    const notificationState = useNotificationState();

    return (
        <div className="flex flex-col bg-gray-100 h-screen">
            <nav className="flex justify-between p-4 text-white bg-slate-800">
                <h1 className="text-3xl">
                    Todo App
                </h1>
            </nav>
            <main className="flex flex-col my-4 text-gray-700">
                <TodoList api={apiService} keyGenerator={uuidKeyGenerator}  />
            </main>
            <Notification
                message={notificationState.message}
                visible={notificationState.visible}
                type={notificationState.type}
            />
        </div>
    )
}
