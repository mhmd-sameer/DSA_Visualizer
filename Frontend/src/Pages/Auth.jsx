import { useState } from "react";
import { loginUser, signupUser } from "../Services/AuthApi.js";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setMessage("");

        if (!email || !password) {
            setMessage("Email and password are required");
            return;
        }

        // Signup validation
        if (!isLogin && password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {
            setLoading(true);

            if (isLogin) {
                const res = await loginUser({ email, password });
                localStorage.setItem("token", res.data.token);
                window.location.href = "/algorithm";
            } else {
                await signupUser({ email, password });
                setMessage("Signup successful. Please login.");
                setIsLogin(true);
                setPassword("");
                setConfirmPassword("");
            }
        } catch (err) {
            const msg =
                err.response?.data?.message ||   // preferred
                err.response?.data?.error ||     // fallback
                "Signup failed";

            setMessage(msg);
    } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-xl shadow w-80">

                {/* HEADER */}
                <div className="text-center mb-6">
                    <div className="mx-auto mb-2 bg-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">
                        {"</>"}
                    </div>
                    <h2 className="text-xl font-bold">
                        {isLogin ? "Welcome Back" : "Create Account"}
                    </h2>
                    <p className="text-gray-500 text-sm">
                        {isLogin
                            ? "Sign in to continue learning"
                            : "Sign up to start visualizing algorithms"}
                    </p>
                </div>

                {/* TOGGLE */}
                <div className="flex mb-4">
                    <button
                        className={`flex-1 py-2 ${isLogin ? "bg-gray-200" : ""}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`flex-1 py-2 ${!isLogin ? "bg-gray-200" : ""}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>
                </div>

                {/* INPUTS */}
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full border rounded px-3 py-2 mb-3"
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full border rounded px-3 py-2 mb-3"
                />

                {!isLogin && (
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        className="w-full border rounded px-3 py-2 mb-4"
                    />
                )}

                {/* BUTTON */}
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-purple-600 text-white py-2 rounded disabled:opacity-50"
                >
                    {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
                </button>

                {/* MESSAGE */}
                {message && (
                    <p className="text-center text-sm mt-4 text-gray-600">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}
