import { character, familyNames, givenNames, mobilePrefix, idCoefficientArray, idLastNumberArray, idAreaCode } from './config';

/**
 * 
 * @param min 最小
 * @param max 最大
 * @param round 是否整数
 */
export function randomNumber(min = 0, max = 10000, round = true) {

    let offset = Math.abs(min)
    min = min + offset;
    max = max + offset;
    let num = (Math.random() * (max - min) + min) - offset;
    return round ? Math.round(num) : num;
}
/**
 * 随机偶数
 * @param min 最小
 * @param max 最大
 */
export function randomEvenNumber(min = 0, max = 10000) {
    let num = randomNumber(min, max);

    return num % 2 == 0 ? num : (num + 1) > max ? num - 1 : num + 1;
}
/**
 * 随机奇数
 * @param min 最小
 * @param max 最大
 */
export function randomOddNumber(min = 0, max = 10000) {
    let num = randomNumber(min, max);

    return num % 2 != 0 ? num : (num + 1) > max ? num - 1 : num + 1;
}
/**
 * 生成guid
 */
export function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
/**
 * 随机字符串
 * @param len 最长
 */
export function randomString(len = 10) {
    let str = '';
    for (let i = 0; i < len; i++) {
        str += character[randomNumber(0, character.length - 1)];
    }
    return str;
}
/**
 * 随机uuid
 */
export function uuid() {
    var s: any[] = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}
/**
 * 随机名字
 * @param min 最小
 * @param max 最大
 */
export function randomName(min = 2, max = 4) {
    let _familyNames = familyNames,
        _givenNames = givenNames;

    let familyName = familyNames[randomNumber(0, _familyNames.length - 1)];
    let r = randomNumber(1, max - min + 1)

    let givenName = new Array(r).join('*').split('*').map(v => {
        return _givenNames[randomNumber(0, _givenNames.length - 1)];
    }).join("");
    let name = `${familyName}${givenName}`
    return name.length > max ? name.substr(0, max - 1) : name;
}
/**
 * 随机手机号码
 * @param _mobilePrefix ["158","159"]
 */
export function randomMobile(_mobilePrefix?: any[]) {
    var prefixArray = _mobilePrefix || mobilePrefix;
    return prefixArray[randomNumber(0, prefixArray.length - 1)] +
        new Array(8).join('*').split('*').map(v => {
            return randomNumber(0, 9);
        }).join("");
}
type randomIdNoOpt = {
    /**
     * 最小年龄
     */
    minAge: number
    /**
     * 最大年龄
     */
    maxAge: number
    /**
     * 性别
     */
    gender: 'F' | 'M' | ''
    /**
     * 地区编码
     */
    areaCode: string
}
function merge(a: any, b: any) {
    if (!a) {
        a = {};
    }
    for (let v in b) {
        a[v] = b[v];
    }
    return a;
}
/**
 * 随机身份证
 * @param opt 
 */
export function randomIdNo(opt?: randomIdNoOpt) {

    let config: randomIdNoOpt = merge({
        minAge: 0,
        maxAge: 100,
        gender: '',
        areaCode: idAreaCode[randomNumber(0, idAreaCode.length)] + '00',
    }, opt);
    var coefficientArray = idCoefficientArray; // 加权因子
    var lastNumberArray = idLastNumberArray; // 校验码

    let age = randomNumber(config.minAge, config.maxAge);


    let d1 = new Date();
    let d2 = new Date(d1.setFullYear(d1.getFullYear() - age));
    const fixPrefix = (d: number) => d < 10 ? `0${d}` : d;

    var birthday = `${d2.getFullYear()}${fixPrefix(d2.getMonth() + 1)}${fixPrefix(d2.getDate())}`  ///"19810101"; // 生日

    let s = randomNumber(10, 99) + '';
    if (config.gender == 'F') {
        s += randomEvenNumber(1, 9);
    } else if (config.gender == 'M') {

        s += randomOddNumber(1, 9);
    } else {
        s += randomNumber(1, 9);
    }
    console.log(s);

    var array = (config.areaCode + birthday + s).split("");
    var total: number = 0;
    for (let i in array) {
        total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
    }
    var lastNumber = lastNumberArray[total % 11];
    var id_no_String = config.areaCode + birthday + s + lastNumber;

    return id_no_String;
}
/**
 * 
 * @param bankNo 随机银行卡号
 */
export function randomBankAccount(bankNo?: string) {
    bankNo = bankNo || '0102';
    var prefix = "";
    switch (bankNo) {
        case "0102":
            prefix = "622202";
            break;
        case "0103":
            prefix = "622848";
            break;
        case "0105":
            prefix = "622700";
            break;
        case "0301":
            prefix = "622262";
            break;
        case "104":
            prefix = "621661";
            break;
        case "0303":
            prefix = "622666";
            break;
        case "305":
            prefix = "622622";
            break;
        case "0306":
            prefix = "622556";
            break;
        case "0308":
            prefix = "622588";
            break;
        case "0410":
            prefix = "622155";
            break;
        case "302":
            prefix = "622689";
            break;
        case "304":
            prefix = "622630";
            break;
        case "309":
            prefix = "622908";
            break;
        case "310":
            prefix = "621717";
            break;
        case "315":
            prefix = "622323";
            break;
        case "316":
            prefix = "622309";
            break;
        default:
    }
    for (var j = 0; j < 13; j++) {
        prefix = prefix + randomNumber(0, 9);
    }
    return prefix;
}
export default {
    randomNumber,
    randomEvenNumber,
    randomOddNumber,
    guid,
    randomString,
    randomName,
    randomMobile,
    randomBankAccount,
    randomIdNo,
    uuid,
}