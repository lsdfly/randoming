(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.randomModule = {}));
}(this, function (exports) { 'use strict';

    var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
    var familyNames = new Array("赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许", "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章", "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦", "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳", "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常", "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹");
    var givenNames = new Array("子璇", "淼", "国栋", "夫子", "瑞", "堂", "甜", "敏", "尚", "国", "贤", "贺祥", "晨涛", "昊轩", "易轩", "益辰", "益帆", "益", "冉", "瑾春", "瑾昆", "春齐", "杨", "文昊", "东东", "雄", "霖", "浩晨", "熙涵", "溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政", "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建", "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋", "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅", "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡", "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕", "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵", "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌");
    var mobilePrefix = new Array("130", "131", "132", "133", "135", "137", "138", "153", "155", "156", "158", "159", "187", "181", "177", "189");
    var idCoefficientArray = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"]; // 加权因子
    var idLastNumberArray = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
    var idAreaCode = [
        "1100",
        "1200",
        "1200",
        "1301",
        "1401",
        "1501",
        "2101",
        "2200",
        "2301",
        "3100",
        "3201",
        "3301",
        "3401",
        "3501",
        "3601",
        "3701",
        "4101",
        "4201",
        "4301",
        "4401",
        "4501",
        "4601",
        "5101",
        "5201",
        "5301" ];

    function randomNumber(min, max, round) {
        if ( min === void 0 ) min = 0;
        if ( max === void 0 ) max = 10000;
        if ( round === void 0 ) round = true;

        var offset = Math.abs(min);
        min = min + offset;
        max = max + offset;
        var num = (Math.random() * (max - min) + min) - offset;
        return round ? Math.round(num) : num;
    }
    function randomEvenNumber(min, max) {
        if ( min === void 0 ) min = 0;
        if ( max === void 0 ) max = 10000;

        var num = randomNumber(min, max);
        return num % 2 == 0 ? num : (num + 1) > max ? num - 1 : num + 1;
    }
    function randomOddNumber(min, max) {
        if ( min === void 0 ) min = 0;
        if ( max === void 0 ) max = 10000;

        var num = randomNumber(min, max);
        return num % 2 != 0 ? num : (num + 1) > max ? num - 1 : num + 1;
    }
    function guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    function randomString(len) {
        if ( len === void 0 ) len = 10;

        var str = '';
        for (var i = 0; i < len; i++) {
            str += character[randomNumber(0, character.length - 1)];
        }
        return str;
    }
    function uuid() {
        var s = [];
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
    function randomName(min, max) {
        if ( min === void 0 ) min = 2;
        if ( max === void 0 ) max = 4;

        var _familyNames = familyNames, _givenNames = givenNames;
        var familyName = familyNames[randomNumber(0, _familyNames.length - 1)];
        var r = randomNumber(1, max - min + 1);
        var givenName = new Array(r).join('*').split('*').map(function (v) {
            return _givenNames[randomNumber(0, _givenNames.length - 1)];
        }).join("");
        var name = "" + familyName + givenName;
        return name.length > max ? name.substr(0, max - 1) : name;
    }
    function randomMobile(_mobilePrefix) {
        var prefixArray = _mobilePrefix || mobilePrefix;
        return prefixArray[randomNumber(0, prefixArray.length - 1)] +
            new Array(8).join('*').split('*').map(function (v) {
                return randomNumber(0, 9);
            }).join("");
    }
    function merge(a, b) {
        if (!a) {
            a = {};
        }
        for (var v in b) {
            a[v] = b[v];
        }
        return a;
    }
    function randomIdNo(opt) {
        var config = merge({
            minAge: 0,
            maxAge: 100,
            gender: '',
            areaCode: idAreaCode[randomNumber(0, idAreaCode.length)] + '00',
        }, opt);
        var coefficientArray = idCoefficientArray; // 加权因子
        var lastNumberArray = idLastNumberArray; // 校验码
        var age = randomNumber(config.minAge, config.maxAge);
        var d1 = new Date();
        var d2 = new Date(d1.setFullYear(d1.getFullYear() - age));
        var fixPrefix = function (d) { return d < 10 ? ("0" + d) : d; };
        var birthday = "" + (d2.getFullYear()) + (fixPrefix(d2.getMonth() + 1)) + (fixPrefix(d2.getDate())); ///"19810101"; // 生日
        var s = randomNumber(10, 99) + '';
        if (config.gender == 'F') {
            s += randomEvenNumber(1, 9);
        }
        else if (config.gender == 'M') {
            s += randomOddNumber(1, 9);
        }
        else {
            s += randomNumber(1, 9);
        }
        console.log(s);
        var array = (config.areaCode + birthday + s).split("");
        var total = 0;
        for (var i in array) {
            total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
        }
        var lastNumber = lastNumberArray[total % 11];
        var id_no_String = config.areaCode + birthday + s + lastNumber;
        return id_no_String;
    }
    function randomBankAccount(bank_no) {
        bank_no = bank_no || '0102';
        var prefix = "";
        switch (bank_no) {
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
    var index = {
        randomNumber: randomNumber,
        guid: guid,
        randomString: randomString,
        randomName: randomName,
        randomMobile: randomMobile,
        randomBankAccount: randomBankAccount,
        randomIdNo: randomIdNo,
        uuid: uuid,
    };

    exports.default = index;
    exports.guid = guid;
    exports.randomBankAccount = randomBankAccount;
    exports.randomEvenNumber = randomEvenNumber;
    exports.randomIdNo = randomIdNo;
    exports.randomMobile = randomMobile;
    exports.randomName = randomName;
    exports.randomNumber = randomNumber;
    exports.randomOddNumber = randomOddNumber;
    exports.randomString = randomString;
    exports.uuid = uuid;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
