class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){

     this.chain.bodyA=null

    }
    attach(body){
        this.chain.bodyA=body
    }
}