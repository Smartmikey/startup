export interface ItemsInterface {
    id:number
    name:string, 
    isDone: boolean
}

export interface dataForm {
    id: number
    categoryName: string
    items: ItemsInterface[]
}