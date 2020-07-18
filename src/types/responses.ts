import {UserI, CaseI, BodyPart, Subitem} from './models';

export interface AuthenticateResponse {
    user: UserI;
    success: boolean;
}

export interface LoginResponse {
    data: {
        accessToken: string;
        user: UserI;
    };
    success: boolean;
    message: string;
}

export interface NextCaseResponse {
    data: CaseI;
    success: boolean;
}

export interface BodyPartsResponse {
    data: BodyPart[];
    success: boolean;
}

export interface SubitemsResponse {
    data: Subitem[];
    success: boolean;
}
