import style from "./style.module.scss";
import { ChangeEvent, useState } from "react";
import characterData from "../../data";
import { Card } from "../../components";
import {
	DndContext,
	DragEndEvent,
	MouseSensor,
	TouchSensor,
	closestCenter,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import {
	SortableContext,
	arrayMove,
	rectSortingStrategy,
} from "@dnd-kit/sortable";

export function App() {
	const [searchString, setSearchString] = useState<string>("");
	const [character] = useState<typeof characterData>(characterData);
	const [filteredData, setFilteredData] = useState(character);

	const mouse = useSensor(MouseSensor),
		touch = useSensor(TouchSensor, {
			activationConstraint: {
				delay: 250,
				tolerance: 5,
			},
		});

	const sensors = useSensors(mouse, touch);

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;
		if (active?.id === over?.id) return;
		setFilteredData(() => {
			const oldIndex = filteredData.findIndex(
				(user) => user.id === active?.id
			);
			const newIndex = filteredData.findIndex((user) => user.id === over?.id);

			return arrayMove(filteredData, oldIndex, newIndex);
		});
	}

	function handleSearch(e: ChangeEvent) {
		// Store search String
		const target = e.target as HTMLInputElement;
		const searchValue = target?.value;
		setSearchString(searchValue);

		// filter result
		const handleFiltter = character.filter((item) => {
			const byTag = item.tag
				.toLowerCase()
				.includes(searchValue.toLowerCase());
			const byName = item.name
				.toLowerCase()
				.includes(searchValue.toLowerCase());
			const byId = item.id.toString().includes(searchValue);
			return byId || byName || byTag;
		});

		setFilteredData(handleFiltter);
	}
	return (
		<>
			<h1 className={style.heading}>TOP STAR WARS CHARACTERS</h1>
			<div className={style.search}>
				<input
					value={searchString}
					className={style.searchInput}
					type="text"
					placeholder="Search by Name , Tag or ID"
					onChange={handleSearch}
				/>
			</div>
			<div className={style.grid}>
				<DndContext
					sensors={sensors}
					collisionDetection={closestCenter}
					onDragEnd={handleDragEnd}>
					<SortableContext
						items={filteredData}
						strategy={rectSortingStrategy}>
						{filteredData.length > 0 ? (
							filteredData.map((character) => (
								<Card
									key={character.id}
									{...character}
								/>
							))
						) : (
							<div className={style.empty}>
								<h4>No Result</h4>
								<p>🤔Hmm... Can't seem to find this </p>
								<p>Try to Search by Name:Mace, Tage: Light Side or ItemId: 4</p>
							</div>
						)}
					</SortableContext>
				</DndContext>
			</div>
		</>
	);
}
