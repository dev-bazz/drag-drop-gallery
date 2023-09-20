import React from "react";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";

export function LoginPage() {
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
						console.log(data, errors);
					})}>
					<h1>Login</h1>
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
