
import {
    handleAuth,
    handleLogin,
    handleCallback,
    handleLogout,
    handleProfile,
    withApiAuthRequired,
    withPageAuthRequired,
    getSession,
    getAccessToken
  } from '@auth0/nextjs-auth0';

export const GET = handleAuth();
export const isAuthenticate =  handleProfile
