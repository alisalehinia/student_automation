'use client';

import { useAuthStore } from "@/store/authStore";
import AdminPanel from "./AdminPanel";
import ManagerPanel from "./ManagerPanel";
import StudentPanel from "./StudentPanel";
import SecretaryPanel from "./SecretaryPanel";

export default function Panel() {
    const {role} = useAuthStore();

    if (!role) return <div>Loading...</div>;

    switch (role) {
      case "admin":
        return <AdminPanel />;
      case "manager":
        return <ManagerPanel />;
      case "student":
        return <StudentPanel />;
    case "secretary":
        return <SecretaryPanel />;
      default:
        return <div>Unauthorized</div>;
    }
}