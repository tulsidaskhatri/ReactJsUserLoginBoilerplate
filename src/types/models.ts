export interface UserI {
    email: string;
    name: string;
    role: string;
}

export interface CaseI {
    id: number;
    creatorId: number;
    title: string;
    brand?: string;
    model?: string;
    hsnTsn?: string;
    psKw?: string;
    year?: string;
}

export interface BodyPart {
    id?: number;
    title?: string;
}

export interface BodyPartOption {
    value?: number;
    label?: string;
}

export interface Subitem {
    id: number;
    title: string;
    hasTime: boolean;
}

export interface SubitemInstance {
    id?: number;
    title?: string;
    hasTime?: boolean;
    cost?: number;
    time?: string;
}

export interface BodyPartInstance {
    bodyPart: BodyPart;
    subitems: SubitemInstance[];
}
