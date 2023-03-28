interface  MenuI{
    keyID: number,
    title: string,
    picUrl: string,
    href: string
}

export interface MenuDataI{
    data: MenuI,
    menuPosition:MenuPosition
}
export enum MenuPosition{
    Top,
    Side
}
export default MenuI;