import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAUanfRGZIcf_u-Won3VDo88b_CEPAVEXk",
    authDomain: "test-c1aa7.firebaseapp.com",
    databaseURL: "https://test-c1aa7-default-rtdb.firebaseio.com",
    projectId: "test-c1aa7",
    storageBucket: "test-c1aa7.firebasestorage.app",
    messagingSenderId: "367408746285",
    appId: "1:367408746285:web:12439b6050a98c8770cda4",
    measurementId: "G-JNMLFWCN14"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Configure Google provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

// Configure GitHub provider
export const githubProvider = new GithubAuthProvider();
githubProvider.setCustomParameters({
    'allow_signup': 'true'
});

// Add scopes for GitHub provider
githubProvider.addScope('user');
githubProvider.addScope('repo');

export default app;