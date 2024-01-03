import {DndProvider, DropTargetMonitor, useDrop,useDrag} from 'react-dnd';
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
        id: number;
        name: string;
        items: any[];
    };
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
}

export function Board(props: BoardProps) {
    const [collectedProps, drop] = useDrop(() => ({
        accept: ItemTypes.ITEM,
        drop: (dragItem: Column) => props.onColumnItemsDrop(dragItem,props.board.id),

        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }));
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

    function handleDndColumnsSorted(e: CustomEvent) {
        props.onColumnItemsChange("columnItems", e.detail.items);
    }

    function handleDndCardsSorted(cid: number, e: CustomEvent) {
        debugger;
        props.onColumnItemsChange(
            "columnItems",
            (column) => column.id === cid,
            "items",
            e.detail.items
        );
    }

    return (
        <div className={s.columnContent} ref={drop}>
            {/*{props.board.items.map((column) =>*/}
                <div className={s.column}>
                    <div className={s.wrapper} >
                        <div className={s.columnTitle}>{props.board.name}</div>
                        <div className={s.columnContent}>
                            {props.board.items.map((column) =>
                                <Column
                                    key={column.id}
                                    id={column.id}
                                    name={column.name}
                                   // items={column.items}
                                    onItemsChange={(e) => handleDndCardsSorted(column.id, e)}
                                />
                            )}
                        </div>
                    </div>
                </div>
           {/* )}*/}
        </div>
    );
}

