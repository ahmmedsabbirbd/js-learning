function friedns(friedns){
    if(!Array.isArray(friedns)) {
        return 'Please type Array';
    }
    
    let megaFriend = friedns[0];

    for(const friend of friedns){
        if(megaFriend.length < friend.length) {
            megaFriend = friend;
        }
    }

    return megaFriend;
}
const friends = ['sabbir', 'oishi',  'jannnnn'];
console.log(friedns(friends));

// indexOf
if(friends.indexOf('sabbir') != -1){
    console.log('sabbir is exit')
}
// includes
if(friends.includes('jan') != -1){
    console.log('oishi is exit')
}