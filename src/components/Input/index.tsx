import { RefObject } from "react";
import style from "./style.module.scss";
export function Input({
	name,
	id,
	ref,
	checked,
}: {
	name: string;
	id: string;
	ref: RefObject<HTMLInputElement>;
	checked?: boolean;
}) {
	return (
		<div className={style.search_filter}>
			<label htmlFor={id}>{name}</label>
			<input
				ref={ref}
				type="radio"
				name="force"
				id={id}
				checked={checked}
			/>
		</div>
	);
}
