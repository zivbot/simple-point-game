input.onButtonPressed(Button.A, function () {
    if (1 >= sprite.get(LedSpriteProperty.X)) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        game.addScore(1)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 2)
basic.forever(function () {
    sprite.move(1)
    basic.pause(100)
    sprite.ifOnEdgeBounce()
})
