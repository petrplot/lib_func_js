const crypto = require('crypto');
require('dotenv').config()
const {env} = require('node:process');

async function passHashing(password, salt){
    if (salt === '') {
        throw new Error('the salt cannot be an empty string') 
    }
    if(!password){
        throw new Error('the password must be a string between 5 and 12 characters long x1')
    }
    if (typeof(password) !== 'string'||password.length < 5 || password.length > 12 ) {
        throw new Error('the password must be a string between 5 and 12 characters long x2')
    }

    return  new Promise((resolve, reject)=>{
        crypto.scrypt(password, salt, 64, { N: 256 }, (err, res)=>{
            if(err){
                reject(err);
            }
            resolve({
                hash:res.toString('base64'),
                salt:salt
            });   
        });
    });    
}
//usage example
const  createUser = async(email, password, salt)=>{
    try {
       const hashPass = await passHashing(password, salt)
        console.log(hashPass); 
    } catch (e) {
        console.log('Error : ', e.message );
    }
}
const salt = env.SALT//either a string or a buffer
const password = 'abvgdgz'
createUser('a@a.a',password, salt)
