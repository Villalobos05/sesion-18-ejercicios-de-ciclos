let NUMERO = randint(5, 10)
basic.showNumber(NUMERO)
for (let index = 0; index <= NUMERO; index++) {
    let INICIO = 0
    basic.showNumber(index)
    for (let index2 = 0; index2 < INICIO; index2++) {
        music.playTone(247, music.beat(BeatFraction.Sixteenth))
        basic.pause(500)
    }
}
basic.showString("¡A BUSCAR!")
music.playMelody("C5 A B G A F G E ", 120)
basic.forever(function () {
	
})
