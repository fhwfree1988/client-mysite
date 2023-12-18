import {DndProvider, useDrag} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import s from './styles.module.css';
import {ItemTypes} from "./DragDropElement";


interface ColumnProps {
    name: string;
   // items: Array<{ name: string }>;
    items: Array<Column>;
    onItemsChange: (e:any) => void;
}
export interface Column {
    id: number;
    name: string;
    onItemsClick: (e:any) => void;
}

export function Column(props: ColumnProps) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.ITEM,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    function handleClick() {
        alert("dragabble elements are still clickable :)");
    }
    return (
        <div className={s.wrapper} >
            <div className={s.columnTitle}>{props.name}</div>
            <div className={s.columnContent}>
                {props.items.map((item) =>
                    <div className={s.card} onClick={handleClick} ref={drag}>
                        {item.name}
                    </div>
                )}
            </div>
        </div>
    );
}

