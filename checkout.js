class checkout {
    constructor(rules) {
        this.total = 0
        this.rules = rules
    }
    scan (item) {
        this.total = 0
        for (var i = 0; i < item.length; i++) {
            if (this.rules[0].name === item[i]) {
                this.total += this.rules[0].price
                this.rules[0].count++
            } else if (this.rules[1].name === item[i]) {
                this.total += this.rules[1].price
                this.rules[1].count++
            } else if (this.rules[2].name === item[i]) {
                this.total += this.rules[2].price
                this.rules[2].count++
            }
        }
        if (this.rules[0].count >= 4) {
            console.log(this.total)
            this.total -= 28 
            this.total += 20 
        }
        return this.total
    }
}

module.exports = checkout