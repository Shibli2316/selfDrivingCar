class Road{
    constructor(x, width, laneCount=3){
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;

        this.left=x-width/2;
        this.right=x+width/2;

        const infinty = 10000000;
        this.top=-infinty;
        this.top=infinty;
    }

    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

        // for(let i =0; i<=this.laneCount; i++){
        //     const x = lerp(
        //         this.left,
        //         this.right,
        //         i/this.laneCount
        //     );
        // }

        ctx.beginPath();
        ctx.moveTo(this.left,this.top);
        ctx.lineTo(this.left, this.bottom);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.right,this.top);
        ctx.lineTo(this.right, this.bottom);
        ctx.stroke();
    }
}