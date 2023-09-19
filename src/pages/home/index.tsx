import style from "./style.module.scss";
import { useGlobalContext } from "../../context";

export function App() {
	const { gold } = useGlobalContext();
	console.log("Global Context: ", gold);
	const getItem = () => {
		console.log("Clicked");
	};
	return (
		<>
			<h1 className={style.heading}>TOP STAR WARS CHARACTERS</h1>
			<div className={style.search}>
				<input type="text" />

				<div className={style.search_filter}>
					<div>
						<label htmlFor="all">All</label>
						<input
							type="radio"
							name="force"
							id="all"
							onClick={getItem}
						/>
					</div>
					<div>
						<label htmlFor="light">Light Side</label>
						<input
							type="radio"
							name="force"
							id="light"
						/>
					</div>
					<div>
						<label htmlFor="dark">Dark Side</label>
						<input
							type="radio"
							name="force"
							id="dark"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
