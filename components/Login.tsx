// components/Login.tsx
"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@aws-amplify/ui-react/styles.layer.css";
import type { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

function Login({ user }: { user?: AuthUser }) {
    useEffect(() => {
        if (user) {
            redirect("/");
        }
    }, [user]);
    return null;
}

export default withAuthenticator(Login);
