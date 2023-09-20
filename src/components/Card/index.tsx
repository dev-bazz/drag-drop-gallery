import style from "./style.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
export function Card({
	name,
	img,
	tag,
	id,
}: {
	name: string;
	img: string;
	tag: string;
	id: number;
}) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: id });

	const styles = {
		transition,
		transform: CSS.Transform.toString(transform),
	};
	return (
		<div
			className={style.card}
			ref={setNodeRef}
			style={styles}
			{...attributes}
			{...listeners}>
			<div className={style.back}>
				<h2>{name}</h2>
			</div>
			<div className={style.front}>
				<span className={tag == "dark side" ? style.red : style.blue}>
					{tag}
				</span>
				<img
					src={img}
					alt={name}
				/>
			</div>
		</div>
	);
}
