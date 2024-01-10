import {DndProvider, useDrag} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import s from './styles.module.css';
import {ItemTypes} from "./DragDropElement";
import {Board, ColumDelete} from "./Board";
import React, {forwardRef, useImperativeHandle} from "react";
import MainApp from "../../MainApp/MainApp";


export interface ColumnI /*ColumnProps*/ {
    id?: number;
    columnName?: string;
    //parentBoard: Board;
   // items: Array<{ name: string }>;
   // items: Array<Column>;
   // onItemsChange?: (e:any) => void;
    onRemoveFromParent?: (item: ColumnI) => void;
}
/*export interface Column {
    id: number;
    columnName: string;
    parentBoard: Board;
    //onItemsClick: (e:any) => void;

}*/

//export function Column(props: Column/*ColumnProps*/) {
//const Column = forwardRef<ColumDelete, {}>((props: ColumnI, ref) => {
const Column = React.forwardRef(function MyInput(props: ColumnI, ref) {

    let id = props.id;
    let columnName = props.columnName;
    //let parentBoard = props.parentBoard;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.ITEM,
        item: props/*{ id,columnName,parentBoard }*/,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    function handleClick() {
        alert("dragabble elements are still clickable :)");
    }
    /*function Column(id: number,columnName: string):Column {
        let column:Column = null;
        column.columnName = columnName;
        column.id = id;
        return column;
    }*/
    useImperativeHandle(
        ref,
        () => ({
            deleteI() {
                //alert("Child Function Called")
                //console.log('hello world')
                props.onRemoveFromParent!(props);
                console.log('onRemoveFromParent ---------->')
            }
        }),
    )
    return (
        /*<div className={s.wrapper} >
            <div className={s.columnTitle}>{props.name}</div>
            <div className={s.columnContent}>
                {props.items.map((item) =>*/
                    <div className={s.card} onClick={handleClick} ref={drag}>
                        {/*{item.name}*/}
                        {props.columnName}
                    </div>
                /*)}
            </div>
        </div>*/
    );
})

export default Column
