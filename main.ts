input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 3060, 3060, 255, 0, 5000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
