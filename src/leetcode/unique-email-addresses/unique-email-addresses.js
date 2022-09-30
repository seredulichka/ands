/**
* Leetcode #929
* Difficulty: Easy
* https://leetcode.com/problems/unique-email-addresses/
*/
export const uniqueEmailAddresses  = emails => {
    const set = new Set(); 
    
    for (const email of emails) {
        let final = '';
        const domainInd = email.indexOf('@');
        
        for (let i = 0; i < domainInd; i += 1) {
            if(email[i] === '.') continue;
            if(email[i] === '+') break;
            final += email[i];
        }
        
        final += email.slice(domainInd);
        set.add(final);
    }
    
    return set.size;
};