function sortFriendList(friendList){
    let result = friendList.toUpperCase().split(';').map(item => {let new_item = item.split(":"); return `(${new_item[1]}, ${new_item[0]})`}).sort().join(" ")
    return result;
};
document.write("Task 5: List of friends: Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill. <br>Result of sorting: ")
document.write(sortFriendList("Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))