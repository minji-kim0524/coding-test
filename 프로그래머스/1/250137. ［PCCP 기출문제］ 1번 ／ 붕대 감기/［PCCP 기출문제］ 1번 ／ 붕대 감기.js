function solution(bandage, health, attacks) {
    const castingTime = bandage[0]
    const recovery = bandage[1]
    const addition = bandage[2]
    
    let winning = 0
    const time = attacks[attacks.length-1][0]
    const maxHealth = health
    
    for (let i = 0; i <= time; i++) {
        let isAttacked = false
        
        for (let j = 0; j < attacks.length; j++) {
            let attackTime = attacks[j][0]
            let attack = attacks[j][1]
            
            if (i === attackTime) {
                health -= attack
                winning = 0
                isAttacked = true
                break
            }
        }
        
        if (isAttacked) {
            if (health <= 0) return -1
            continue
        }
        
        if (winning < castingTime) {
            health += recovery
            if (health > maxHealth) health = maxHealth
            winning++
            
            if (winning === castingTime) {
                health += addition
                if (health > maxHealth) health = maxHealth
                winning = 0
            }
        }
        if (health <= 0) return -1
    }
    return health
}