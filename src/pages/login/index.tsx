import React, { useState } from "react";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth";
import { useNavigate } from "react-router-dom";
import { useContextStore } from "../../context";
import { Spinner } from "../../components";

export function LoginPage() {
	const { loading, setLoading } = useContextStore();

	const [invalid, setInvalid] = useState("");
	const navigate = useNavigate();
	const getUser = async (email: string, password: string) => {
		try {
			if (setLoading) {
				setLoading(true);
			}
			const user = await signInWithEmailAndPassword(auth, email, password);
			const token = await user.user.getIdToken();

			localStorage.setItem("user", JSON.stringify(token));
			if (setLoading) {
				setLoading(false);
			}
			navigate("/");
		} catch (error) {
			setInvalid("Invalid email or password");

			if (setLoading) {
				setLoading(false);
			}
		}
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const ErroHandler = ({ children }: { children: React.ReactNode }) => (
		<div className={style.holders}>{children}</div>
	);
	if (loading) {
		return <Spinner loader={`🔐 Checking Your Credentials... 🔐`} />;
	}

	return (
		<div className={style.container}>
			<div className={style.side}></div>
			<div className={style.main}>
				<form
					onSubmit={handleSubmit((data) => {
						getUser(data.email, data.password);
					})}>
					<h1>Login</h1>
					<p className={style.errorMsg}>{invalid}</p>
					<p className={style.text}>
						Only student of the force can have access
					</p>
					<div className={style.inputs}>
						<ErroHandler>
							<input
								{...register("email", {
									required: {
										message: "Email is required",
										value: true,
									},
									value: "user@example.com",
								})}
								type="email"
								placeholder="Email"
							/>
							<p>{errors.email?.message?.toString()}</p>
						</ErroHandler>
						<ErroHandler>
							<input
								{...register("password", {
									required: {
										message: "Password is required",
										value: true,
									},
									value: "1Password",
								})}
								required
								type="password"
								placeholder="Password"
							/>
							<p>{errors.password?.message?.toString()}</p>
						</ErroHandler>
					</div>
					<div className={style.btn}>
						<button type="submit">Login</button>
					</div>
				</form>
			</div>
		</div>
	);
}
