import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import router from './router.tsx'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'

import { auth, db } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from './stores/userStore'
import { doc, getDoc } from 'firebase/firestore'

// ... (existing code remains but I only see lines up to 42 so I will replace the imports and render)

onAuthStateChanged(auth, async (user) => {
    if (user) {
        let isAdmin = false;
        try {
            if (user.email) {
                const adminDoc = await getDoc(doc(db, "admins", user.email));
                isAdmin = adminDoc.exists() && adminDoc.data()?.active === true;
            }
        } catch (error) {
            console.error("Error checking admin status", error);
        }

        useUserStore.getState().setUser({
            id: user.uid,
            name: user.displayName || 'Escoteiro',
            email: user.email || '',
            photoURL: user.photoURL || '',
            group: "Escoteiro",
            isAdmin: isAdmin
        });
    } else {
        useUserStore.getState().setUser(null);
    }
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        <RouterProvider router={router} />
    </StrictMode>
)
