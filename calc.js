
var operators = [
    {
        op: "plus",
        symbol: "+"
    },
    {
        op: "minus",
        symbol: "-"
    },
    {
        op: "times",
        symbol: "X"
    },
    {
        op: "divide",
        symbol: "÷"
    },
    {
        op: "power",
        symbol: "^"
    },
]
var calc = {
    solved: false,
    focus: 0,
    currentNum: 0,
    newNum: 0,
    operator: '',
    result: 0,
    add: function(current, next){
        this.currentNum = parseFloat(this.currentNum);
        this.newNum = parseFloat(this.newNum);
        console.log('running add function');
        console.log(this.currentNum);
        this.result = this.currentNum + this.newNum;
        console.log(this.result);
    },
    minus: function(current, next){
        this.currentNum = parseFloat(this.currentNum);
        this.newNum = parseFloat(this.newNum);
        this.result = this.currentNum - this.newNum;
    },
    multiply: function(current, next){
        this.currentNum = parseFloat(this.currentNum);
        this.newNum = parseFloat(this.newNum);
        this.result = this.currentNum * this.newNum;
    },
    divide: function(current, next){
        this.currentNum = parseFloat(this.currentNum);
        this.newNum = parseFloat(this.newNum);
        this.result = this.currentNum / this.newNum;
    },
    powerOf: function(current, next){
        this.currentNum = parseFloat(this.currentNum);
        this.newNum = parseFloat(this.newNum);
        this.result = this.currentNum ** this.newNum;
    },
    showResult: function(result){
        
        console.log('showing results');
        console.log(this.operator);
        this.calculate();
        console.log(this.currentNum, this.newNum);
        console.log('result: ' + this.result);
        $('#result').text(this.result);
        this.currentNum = this.result;
        this.focus = 0;
    },
    addNumbers: function(number, foc){
        if (foc == 0) {
            console.log(this.currentNum, number);
            if (this.currentNum == "0"){
                this.currentNum = number;
            } else {
                this.currentNum = this.currentNum + number;
            }
            $('#first-number').text(this.currentNum);
        } else {
            console.log(this.currentNum, number);
            if (this.newNum == "0"){
                this.newNum = number;
            } else {
                this.newNum = this.newNum + number;
            }
            $('#second-number').text(this.newNum);
        }
    },
    addOperator: function(operator){
        console.log('running addOperator()');
        if (this.focus == 0){
            if(this.solved = true){
                $('#first-number').text(this.currentNum);
                $('#second-number').text('');
                $('#result').text('');
                this.newNum = 0;
            }
            this.focus = 1;
        }
        
        $.each(operators, function(){
            console.log($(this).get(0).op);
            if($(this).get(0).op == operator) {
                $('#operator').text($(this).get(0).symbol);
            }
        });
    },
    calculate: function(){
        if (this.operator == "plus") {
            calc.add();
        } else if (this.operator == "minus") {
            calc.minus();
        } else if (this.operator == "times") {
            calc.multiply();
        } else if (this.operator == "divide") {
            calc.divide();
        } else if (this.operator == "power") {
            calc.powerOf();
        }
    },
    clear: function(){
        this.currentNum = 0;
        this.newNum = 0;
        this.result = 0;
        this.focus = 0;
        $('#result').text('');
        $('#operator').text('');
        $('#first-number').text('');
        $('#second-number').text('');
    }
};

    

console.log(calc);
// button clicked
$('.btn').click(function(){
    console.log($(this));
    if ($(this).val() == "plus"){
        console.log($(this).val());
        calc.addOperator($(this).val());
        calc.operator = $(this).val();
    } else if ($(this).val() == "minus") {
        calc.addOperator($(this).val());
        console.log($(this).val());
        calc.operator = $(this).val();
    } else if ($(this).val() == "times") {
        calc.addOperator($(this).val());
        console.log($(this).val());
        calc.operator = $(this).val();
    } else if ($(this).val() == "divide") {
        calc.addOperator($(this).val());
        console.log($(this).val());
        calc.operator = $(this).val();
    } else if ($(this).val() == "power") {
        calc.addOperator($(this).val());
        console.log($(this).val());
        calc.operator = $(this).val();
    } else if ($(this).val() == "equals") {
        
        calc.showResult();
        console.log($(this).val());
    } else if ($(this).val() == "clear") {
        console.log($(this).val());
        calc.clear();
    } else if (parseInt($(this).val()) != NaN) {
        calc.addNumbers($(this).val(), calc.focus);
        console.log($(this).val());
    } 
});
