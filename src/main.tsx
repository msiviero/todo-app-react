import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoApp } from './TodoApp.tsx'
import './tailwind.css'
import { NotificationProvider } from './state/NotificationProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotificationProvider>
      <TodoApp />
    </NotificationProvider>
  </StrictMode>,
)
