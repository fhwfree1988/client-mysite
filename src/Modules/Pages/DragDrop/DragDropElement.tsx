import { createStore } from "solid-js/store";
import {Board} from "./Board";
import s from "./styles.module.css";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {useState} from "react";
import {Column} from "./Column";

interface Position {
    position: [number, number];
}

function emitChange(itemPosition:Position) {
    //observer(itemPosition);
}


// export function moveItem(toX: number, toY: number) {
//     /*let itemPosition = [toX, toY]
//     emitChange(itemPosition);*/
// }
export const ItemTypes = {
    ITEM: 'item'
}
const DragDropElement=()=>{
    const [board, setBoard] = createStore({
            columnItems: [
                {
                    id: 1,
                    name: "TODO",
                    items: [
                        { id: 41, name: "item41" },
                        { id: 42, name: "item42" },
                        { id: 43, name: "item43" },
                        { id: 44, name: "item44" },
                        { id: 45, name: "item45" },
                        { id: 46, name: "item46" },
                        { id: 47, name: "item47" },
                        { id: 48, name: "item48" },
                        { id: 49, name: "item49" },
                        { id: 50, name: "item50" },
                        { id: 51, name: "item51" }
                    ]//,
                    //onItemsDrop: {}

                },
                {
                    id: 2,
                    name: "DOING",
                    items: []
                },
                {
                    id: 3,
                    name: "DONE",
                    items: []
                }
            ]

    });
    const [boards,setBoards] =useState(board);

    /*function moveItem(item: Column,from:Board, to: Board) {
        if(!boards.columnItems.map(c => c.id).includes(to.id)) {
            //setBoards({...boards,boards.columnItems.map(c =>addItem (item,  to))});
            setBoards({...boards,columnItems: addItem()});
        }
    }*/
    function moveItem(item: Column,from:Board, to: Board) {
       /* boards.columnItems.map(c => {
            c.items.map(i => {
                if(c.id == to.id)
                    setBoards(if(!to.items.map(i => i.id).includes(newColumn.id))
                    {..c ,{
                        ...to,
                        items: to.items.concat(newColumn)
                    }});
            })
        });*/
            //setBoards({...boards,boards.columnItems.map(c =>addItem (item,  to))});
          //  setBoards({...boards,columnItems: addItem()});
        //}
    }
    function addItem (newColumn:Column,  to: Board,) {
       // boards.columnItems.map((c: Board) => addItem(item, c))
        if(!to.items.map(i => i.id).includes(newColumn.id))
            return {
                ...to,
                items: to.items.concat(newColumn)
            }
        return to;
        /*return {
            ...tree,
            subCategories: tree.subCategories.map(c => remove(c, idToRemove))
        }*/
    }
    /*function add (bord:Board, newCategory,  to: BoardProps) {
        if(bord.id === to.board)
            return {
                ...tree,
                subCategories: tree.subCategories.concat(newCategory)
            }
        return {
            ...tree,
            subCategories: tree.subCategories.map(c => add(c, newCategory, parentId))
        }
    }*/



   /* function remove (tree, idToRemove) {
        if(tree.subCategories.map(c => c.id).includes(idToRemove))
            return {
                ...tree,
                subCategories: tree.subCategories.filter(c => c.id !== idToRemove)
            }
        return {
            ...tree,
            subCategories: tree.subCategories.map(c => remove(c, idToRemove))
        }
    }*/
    return (
        <main className={s.App}>
            <br/>
            <br/>
            <h4>
                Drag items or columns. Hold an item at the edge of a column to make the
                content scroll
            </h4>
            <hr />
            <DndProvider backend={HTML5Backend}>
                <Board board={board} onColumnItemsChange={setBoard} onColumnItemsDrop={moveItem} />
            </DndProvider>
        </main>
    );
}
export default DragDropElement