
class Validator {
    isEmail(email){
        const reg= /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        if(!reg.test(email)) {
            return false;
         }else{
            return true
         }
    }
    isNumber(number){
        const isNum = Math.sign(number)
        if (isNum) {
            return true
        }else{
            return false
        }
        
    }
}

module.exports = new Validator()