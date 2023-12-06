
class Validator {
    isEmail(email){
        const reg= /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        if(reg.test(email) == false) {
            return false;
         }else{
            return true
         }
    }
    isNumber(number){
        const numberPositive = Math.sign(number)
        if (numberPositive === 1) {
            return true
        }else{
            return false
        }
        
    }
}

module.exports = new Validator()