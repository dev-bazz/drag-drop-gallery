import style from "./style.module.scss";
import image from "./assets/animation_lmsl8tiu_small.gif";
export function Spinner({ loader }: { loader: string }) {
	return (
		<div className={style.container}>
			<div className={style.spinner}>
				<img src={image} />
				<h1>{loader}</h1>
			</div>
		</div>
	);
}
