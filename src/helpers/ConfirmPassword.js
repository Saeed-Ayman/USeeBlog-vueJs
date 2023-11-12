import {useAuthStore} from "@/stores/useAuthStore.js";

export default function ConfirmPassword() {
    const auth = useAuthStore();
    const password = window.prompt("Enter Your Password");

    if (password === null) return false;
    if (auth.user.password === password) return true;
    if (!window.confirm('wrong password! try again?')) return false;

    return ConfirmPassword();
}
