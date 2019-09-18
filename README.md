# randoming
```js
const random = require('randoming');
// 随机手机号码
console.log(random.randomMobile())
// 随机手机号码(只生成159，189前缀号码)
console.log(random.randomMobile(['159','189']))
// 随机guid
console.log(random.guid())
// 随机字符串 len长度
console.log(random.randomString(len))
// 随机姓名 min最小，max最大长度
console.log(random.randomName(min =2,max =4))
// 随机数字
console.log(random.randomNumber(min = 0,max = 1000,round = true))
// 随机偶数
console.log(random.randomEvenNumber(min = 0,max = 1000))
// 随机奇数
console.log(random.randomOddNumber(min = 0,max = 1000))
// 随机银行卡号
console.log(random.randomBankAccount(bankNo))

type randomIdNoOpt = {
    // 最小年龄
    minAge: number
    // 最大年龄
    maxAge: number
    // 性别
    gender: 'F' | 'M' | ''
    // 地区编码
    areaCode: string
}
// 随机身份证
console.log(random.randomIdNo(randomIdNoOpt))
// 随机uuid
console.log(random.uuid())
```