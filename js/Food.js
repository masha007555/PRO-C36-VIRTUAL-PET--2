class Food{
    constructor(){
        this.foodStock;
        this.lastFed;
        this.image = loadImage("images/Milk.png");
    }

    getFoodStock(){
        return this.foodStock;
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    getFedTime(lastFed){
        this.lastFed=lastFed;
    }
   

    deductFood(){
        if (this.foodStock > 0) {
            this.foodStock = this.foodStock-1
        }
    }

    display(){

        var x = 15;
        var y = 200;

        imageMode(CENTER);
        image(this.image);

        if (this.FoodStock != 0 ) {
            for (var i=0; i<this.foodStock; i++){
                if (i%5 == 0) {
                    x=15;
                    y = y + 50;
                }

                image(this.image,x,y,50,50);
                x = x + 30;
            }
        }
    }




}