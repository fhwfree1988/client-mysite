import {DndProvider, DropTargetMonitor, useDrop,useDrag} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Column} from "./Column";
import s from './styles.module.css';
import {ItemTypes} from "./DragDropElement";
import {useState} from "react";
import {Board} from "./Board";


interface BoardContainerProps {
    boards: {
        id: number;
        name: string;
        items: any[];
        //onItemsDelete: (item: Column) => void;
    }[];
    onColumnItemsChange: (
        key: string,
        value: any[] | ((column: any) => boolean),
        subKey?: string,
        subValue?: any[]
    ) => void;
    onColumnItemsDrop: (
        item: Column,
        target:number,
        //to: Board
    ) => void;
    //onItemsDelete: (item: Column) => void;
    //onItemsAdd: (item: Column) => void;
}

export function BoardContainer(props: BoardContainerProps) {
    /*const [collectedProps, drop] = useDrop(() => ({
        accept: ItemTypes.ITEM,
        drop: (dragItem: Column) => props.onColumnItemsDrop(dragItem,props.board.),

        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }));*/
    /*const [{isDragging}, drag] = useDrag(() => ({
        accept: ItemTypes.ITEM,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));*/

   /* const black = (x + y) % 2 === 1
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.KNIGHT,
        drop: () => moveKnight(1, 1),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }), [x, y])*/

    /*function handleDndColumnsSorted(e: CustomEvent) {
        props.onColumnItemsChange("columnItems", e.detail.items);
    }

    function handleDndCardsSorted(cid: number, e: CustomEvent) {
        props.onColumnItemsChange(
            "columnItems",
            (column) => column.id === cid,
            "items",
            e.detail.items
        );
    }*/

    return (
            <div className={s.columnContent} >
                {props.boards.map((brd:Board) =>
                    <Board  board={brd} onColumnItemsChange={props.onColumnItemsChange} onColumnItemsDrop={props.onColumnItemsDrop}  />
                )}
            </div>
    );
}

