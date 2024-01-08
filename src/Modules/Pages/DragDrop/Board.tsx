import {DndProvider, DropTargetMonitor, useDrop,useDrag} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Column} from "./Column";
import s from './styles.module.css';
import {ItemTypes} from "./DragDropElement";
import {useCallback, useEffect, useMemo, useReducer, useState} from "react";

export interface Board {
   /* id: number;
    name: string;
    items: Column[];*/
    board: {
        id: number;
        name: string;
        items: Column[];
        //onItemsDelete: (item: Column) => void;
    };
    //onItemsDelete: (item: Column) => void;
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

/*interface BoardProps {
    board: {
        id: number;
        name: string;
        items: any[];
        //onItemsDelete: (item: Column) => void;
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
    //onItemsDelete: (item: Column) => void;
    //onItemsAdd: (item: Column) => void;
}*/
const initialState = {
    id: 0,
    name: "",
    items:[]

};

export function Board(props: Board/*BoardProps*/) {
   /* const reducer = (state: Column[], action: { type:string; value:Column; }) => {
        if (action.type === "reset") {
            return initialState;
        }

        const result = { ...state };
       // result[action.type] = action.value;
        let newList:Column[] = result.filter(X => X.id !== action.value.id);
        return newList;
    };
    const [state, dispatch] = useReducer(reducer,initialState);*/

    const [boardItems,setBoardItems] =useState<Column[]>/*(()=>{return props.board.items})*/(props.board.items);
    /*useEffect(()=>{
        console.log("useEffect ---> content is changed ");
        setBoardItems(boardItems);
    },[boardItems])*/
    const [collectedProps, drop] = useDrop(() => ({
        accept: ItemTypes.ITEM,
        drop: (dragItem: Column) => addItem(dragItem,props.board.id),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const deleteItem = useCallback((item: Column) => {
        debugger;
        let newList:Column[] = boardItems.filter(X => X.id !== item.id);
        setBoardItems(newList);
    }, [boardItems]);
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
   /* function deleteItem(item: Column) {
        debugger;
        let newList:Column[] = boardItems.filter(X => X.id !== item.id);
        setBoardItems(newList);
    }*/
    function addItem(dragItem: Column,targetID:number/*from:Board, to: Board*/) {
        debugger;
        //let boards.columnItems
        //let items: any;
        /*boardsData.boardItems.map(brd => {
            if(brd.id == targetID){
                if(!brd.items.map(i => i.id).includes(item.id)){
                    brd.items.concat(item);
                    items = brd.items;
                }
            }

        });

        setBoards(boardsData);*/
        //let items:Column = boardItems;
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

        //dragItem.parentBoard.onItemsDelete(dragItem);
        dragItem.onRemoveFromParent!(dragItem);
        //dispatch({ type: "reset",value:dragItem });
        let newList:Column[] = boardItems;
        newList.push(dragItem);
        setBoardItems(newList);
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
                            {boardItems.map((column) =>
                                <Column
                                    key={column.id}
                                    id={column.id}
                                    columnName={column.columnName}
                                    //parentBoard={props.board}
                                   // items={column.items}
                                    onItemsChange={(e) => handleDndCardsSorted(column.id! , e)}
                                    onRemoveFromParent={(dragedItem:Column)=> deleteItem(dragedItem)}
                                />
                            )}
                        </div>
                    </div>
                </div>
           {/* )}*/}
        </div>
    );
}

