function computerPlay(){
    var action = ['Rock', 'Paper', 'Scissor'];
    num = Math.floor((Math.random() * 3));
    var randaction = action[num].toString();
    console.log(randaction);
}