import React, { useState } from "react";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
	const [invalid, setInvalid] = useState("");
	const navigate = useNavigate();
	const getUser = async (email: string, password: string) => {
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			console.log("user: ", user);
			localStorage.setItem(
				"user",
				JSON.stringify(user?._tokenResponse.idToken)
			);
			console.log(localStorage.getItem("user"));
			navigate("/");
		} catch (error) {
			setInvalid("Invalid email or password");
			console.log("error");
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
	return (
		<div className={style.container}>
			<div className={style.side}></div>
			<div className={style.main}>
				<form
					onSubmit={handleSubmit((data) => {
						getUser(data.email, data.password);
						console.log(data, errors);
					})}>
					<h1>Login</h1>
					<p>{invalid}</p>
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
