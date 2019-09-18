export declare function randomNumber(min?: number, max?: number, round?: boolean): number;
export declare function randomEvenNumber(min?: number, max?: number): number;
export declare function randomOddNumber(min?: number, max?: number): number;
export declare function guid(): string;
export declare function randomString(len?: number): string;
export declare function uuid(): string;
export declare function randomName(min?: number, max?: number): string;
export declare function randomMobile(_mobilePrefix?: any[]): string;
declare type randomIdNoOpt = {
    minAge: number;
    maxAge: number;
    gender: 'F' | 'M' | '';
    areaCode: string;
};
export declare function randomIdNo(opt?: randomIdNoOpt): string;
export declare function randomBankAccount(bank_no?: string): string;
declare const _default: {
    randomNumber: typeof randomNumber;
    guid: typeof guid;
    randomString: typeof randomString;
    randomName: typeof randomName;
    randomMobile: typeof randomMobile;
    randomBankAccount: typeof randomBankAccount;
    randomIdNo: typeof randomIdNo;
    uuid: typeof uuid;
};
export default _default;
