import style from "./style.module.scss";
export function Spinner({ loader }: { loader: string }) {
	return (
		<div className={style.container}>
			<h1>{loader}</h1>
		</div>
	);
}
