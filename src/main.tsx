import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router.tsx'
import { RouterProvider } from 'react-router'

import { auth } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from './stores/userStore'

onAuthStateChanged(auth, (user) => {
    if (user) {
        useUserStore.getState().setUser({
            id: user.uid,
            name: user.displayName || 'Escoteiro',
            email: user.email || '',
            photoURL: user.photoURL || '',
            group: "Escoteiro"
        });
    } else {
        useUserStore.getState().setUser(null);
    }
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
