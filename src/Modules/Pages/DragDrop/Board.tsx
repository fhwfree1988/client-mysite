import {DndProvider, useDrop} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Column} from "./Column";
import s from './styles.module.css';
import {ItemTypes} from "./DragDropElement";
import {useState} from "react";

export interface Board {
    id: number;
    name: string;
    items: Column[];
    //onItemsDrop: (e:Board) => void;
}
interface BoardProps {
    board: {
        columnItems: {
            id: number;
            name: string;
            items: any[];
        }[];
    };
    onColumnItemsChange: (
        key: string,
        value: any[] | ((column: any) => boolean),
        subKey?: string,
        subValue?: any[]
    ) => void;
    onColumnItemsDrop: (
        item: Column,
        from:Board,
        to: Board
    ) => void;
}

export function Board(props: BoardProps) {
    const [collectedProps, drop] = useDrop(() => ({
        accept: ItemTypes.ITEM,
        //drop: () => props.onColumnItemsDrop(null,null,null),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }));

   /* const black = (x + y) % 2 === 1
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.KNIGHT,
        drop: () => moveKnight(1, 1),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }), [x, y])*/

    function handleDndColumnsSorted(e: CustomEvent) {
        props.onColumnItemsChange("columnItems", e.detail.items);
    }

    function handleDndCardsSorted(cid: number, e: CustomEvent) {
        props.onColumnItemsChange(
            "columnItems",
            (column) => column.id === cid,
            "items",
            e.detail.items
        );
    }

    return (
            <div className={s.columnContent} ref={drop}>
                {props.board.columnItems.map((column) =>
                    <div className={s.column}>
                        <Column
                            key={column.id}
                            name={column.name}
                            items={column.items}
                            onItemsChange={(e) => handleDndCardsSorted(column.id, e)}
                        />
                    </div>
                )}
            </div>
    );
}

