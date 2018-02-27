module.exports = function solveEquation(equation) {
    equation = equation.replace(/x\^2\s/,'').replace(/x\s/,'').replace(/[\+\s][\*\s]/g,'')
                       .replace(/\-\s/gi,'-').split(' ').map((el) => +el); //[A,B,C]

    let d = Math.pow(equation[1],2) - 4 * equation[0] * equation[2];

    function countX (sign){
        let D = sign ? Math.sqrt(d) : -Math.sqrt(d);
        return (-equation[1] + D) / (2 * equation[0]);
    }

    return [countX(true), countX(false)]
            .map((el) => Math.round(el))
            .sort((a1,b1)=> a1 - b1);
}
