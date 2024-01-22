import { ReactNode } from "react";


export interface NavItem{
    
}

export interface Country{
    icon: ReactNode,
    country: string,
    code: number,

}

// Frontpage data
export interface Standards{
    standard: string,
    subject: string[],

}
export interface Subjects{
    subject:string,

}