import React from "react";
import style from "./style.module.scss";

export function LoginPage() {
	const ErroHandler = ({ children }: { children: React.ReactNode }) => (
		<div className={style.holders}>{children}</div>
	);
	return (
		<div className={style.container}>
			<div className={style.side}></div>
			<div className={style.main}>
				<form>
					<h1>Login</h1>
					<p className={style.text}>
						Only student of the force can have access
					</p>
					<div className={style.inputs}>
						<ErroHandler>
							<input
								required
								type="email"
								placeholder="Email"
							/>
						</ErroHandler>
						<ErroHandler>
							<input
								required
								type="password"
								placeholder="Password"
							/>
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
