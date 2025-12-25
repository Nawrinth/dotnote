// src/components/AuthInitializer.tsx
"use client";

import { useRef } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export default function AuthInitializer({ userData }: { userData: any }) {
    const initialized = useRef(false);

    if (!initialized.current) {
        // Sync server data to Zustand state before the page renders
        useAuthStore.setState({ authUser: userData });
        initialized.current = true;
    }

    return null;
}