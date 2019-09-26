let board = [
    ['_','_','_'],
    ['_','_','_'],
    ['_','_','_']
];

let players = ['o', 'x'];
let currentPlayer ; 
let w;
let h;
function setup(){
    createCanvas(400,400);
    currentPlayer = floor(random(players.length));
    w = width /3;
    h = height / 3;
}

function mouseClicked(event) {
    console.log(event);
    let x = event.clientX;
    let y = event.clientY;
    console.log(x);
    console.log(y);
   
   if ((x<width) && (y<height)){
       if ( x<w)
            x =0;
        else if (x<(w*2))
            x=1;
            else
                x=2;

        if ( y<h)
                y =0;
            else if (y<(h*2))
                y=1;
                else
                    y=2;


        console.log(board[y][x]);
        console.log(currentPlayer);
        console.log(players[currentPlayer]);
        if (board[y][x] =='_'){
            board[y][x] = players[currentPlayer];
            currentPlayer = (currentPlayer +1)%players.length;
        }else{
            alert('that spot is already taken');
        }
   }
}

function draw(){
    background(220);
    let posx = 0;
    
    strokeWeight(2);
    line (w,0,w,height);
    line (w*2,0,w*2,height);
    line (0,h,width,h);
    line (0,h*2,width,h*2);
    

    board.forEach(element => {
        let posy = 0;
        element.forEach(element2 => {
            let y  = (w*posx);
            let x = (h*posy);
            
            noFill();
            strokeWeight(4);
            if (element2 == players[0]){
                ellipse((x+(w/2)),y+(h/2), (h-(h/8)));
            } else if (element2 == players[1]){
                let a = h/14;
                line(x+a,y+a,x+w-a,y+h-a);
                line(x+a,y+h-a,x+w-a,y+a);
            }
            posy++;
        });
        posx++;
    });
}


    