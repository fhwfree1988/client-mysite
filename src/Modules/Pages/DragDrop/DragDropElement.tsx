import { createStore } from "solid-js/store";
import {Board} from "./Board";
import s from "./styles.module.css";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {useState} from "react";
import {Column} from "./Column";
import {BoardContainer} from "./BoardContainer";
import MenuI from "../../Components/Pages/MenuI";

interface Position {
    position: [number, number];
}
interface Boards {
    boards:Board[];
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
interface  BordsContainer{
    id: number;
    name: string;
    items: Column[];
}
const boardsData/*:BordsContainer[]*/=
    [
        {
            id: 1,
            name: "TODO",
            items: [
                { id: 41, columnName: "item41" ,parentBoard:{id:1}},
                { id: 42, columnName: "item42" ,parentBoard:{id:1}},
                { id: 43, columnName: "item43" ,parentBoard:{id:1}},
                { id: 44, columnName: "item44" ,parentBoard:{id:1}},
                { id: 45, columnName: "item45" ,parentBoard:{id:1}},
                { id: 46, columnName: "item46" ,parentBoard:{id:1}},
                { id: 47, columnName: "item47" ,parentBoard:{id:1}},
                { id: 48, columnName: "item48" ,parentBoard:{id:1}},
                { id: 49, columnName: "item49" ,parentBoard:{id:1}},
                { id: 50, columnName: "item50" ,parentBoard:{id:1}},
                { id: 51, columnName: "item51" ,parentBoard:{id:1}}
            ]//,
            //onDeleteItem: {}

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
const DragDropElement=()=>{
    /*const [boardsData, setBoardsData] = createStore({
        boardItems: [
                {
                    id: 1,
                    name: "TODO",
                    items: [
                        { id: 41, columnName: "item41" },
                        { id: 42, columnName: "item42" },
                        { id: 43, columnName: "item43" },
                        { id: 44, columnName: "item44" },
                        { id: 45, columnName: "item45" },
                        { id: 46, columnName: "item46" },
                        { id: 47, columnName: "item47" },
                        { id: 48, columnName: "item48" },
                        { id: 49, columnName: "item49" },
                        { id: 50, columnName: "item50" },
                        { id: 51, columnName: "item51" }
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

    });*/
    const [boards,setBoards] =useState(boardsData);

    /*function moveItem(item: Column,from:Board, to: Board) {
        if(!boards.columnItems.map(c => c.id).includes(to.id)) {
            //setBoards({...boards,boards.columnItems.map(c =>addItem (item,  to))});
            setBoards({...boards,columnItems: addItem()});
        }
    }*/

    /*function deleteItem(deleteItem: Column,parentBoard:number) {

    }*/
    function moveItem(dragItem: Column,targetID:number/*from:Board, to: Board*/) {
        debugger;
        //let boards.columnItems
        let items: any;
        /*boardsData.boardItems.map(brd => {
            if(brd.id == targetID){
                if(!brd.items.map(i => i.id).includes(item.id)){
                    brd.items.concat(item);
                    items = brd.items;
                }
            }

        });

        setBoards(boardsData);*/
        let boardsList = boards;
        let myDragItem = null;
        /*for(var b = 0; b < boardsList.length; b++) {
            //if(boardsList[b].id == targetID){
            myDragItem = boardsList[b].items.find(X => X.id === dragItem.id);
                //if(boardsList[b].items.map(i => i.id).includes(dragItemId)){
                if(dragItem){
                    const newList = boardsList[b].items.filter((X) => X.id !== dragItem.id);
                    boardsList[b].items = newList;
                    break;
                }
                //return i;
            //}
        }

        if(dragItem) {
            for (var b = 0; b < boardsList.length; b++) {
                if (boardsList[b].id == targetID) {
                    if (!boardsList[b].items.map(i => i.id).includes(dragItem.id)) {
                        const newList = boardsList[b].items.concat(dragItem!);
                        boardsList[b].items = newList;
                        break;
                    }
                    //return i;
                }
            }
        }*/


       /* boards.map(brd => {
            myDragItem = brd.items.find(X => X.id === dragItem.id);
            if(myDragItem) {
                let newList:Column[] = brd.items.filter((X) => X.id !== dragItem.id);
                    setBoards((brd) => (return {...brd ,items: newList}));

            }

        });*/
        /*boards.map(brd => {
            myDragItem = brd.items.find(X => X.id === dragItem.id);
            if(brd.id == targetID){
                if(!brd.items.map(i => i.id).includes(item.id)){
                    setBoards({...brd,{
                        items: items.items.concat(item)
                    }});
                }
            }
        });*/
        /*boards.boardItems.map(brd => {
            if(brd.id == targetID){
                if(!brd.items.map(i => i.id).includes(item.id)){
                    setBoards({...brd,{
                        items: items.items.concat(item)
                    }});
                }
            }
        });*/
        //setBoards(boardsList);
        /*const updatedBoards = boards.map(brd => {
            if (brd.id === targetID) {
                if(!brd.items.map(i => i.id).includes(item.id)) {
                    return {
                        ...brd,
                        items: [...brd.items, item],
                    };
                }else {
                    return brd;
                }
            } else {
                return brd;
            }
        });
        setBoards(updatedBoards);*/


        /*boards.boardItems.map(c => {
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
    function columnItemsChange(key: string,
    value: any[] | ((column: any) => boolean),
        subKey?: string,
        subValue?: any[]){

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
                {/*<BoardContainer board={boardsData} onColumnItemsChange={setBoards} onColumnItemsDrop={moveItem} />*/}
                <BoardContainer boards={boards} onColumnItemsChange={columnItemsChange} onColumnItemsDrop={moveItem} />
            </DndProvider>
        </main>
    );
}
export default DragDropElement