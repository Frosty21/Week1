module.exports = {
  explain: function Restaurant() {
    var myPrivateVar;

    var private_stuff = function() // Only visible inside Restaurant()
      {
        myPrivateVar = "I can set this here!";
      };

    this.use_restroom = function() {
      private_stuff();
    };

    this.buy_food = function()
    private_stuff();
  };
}
};
