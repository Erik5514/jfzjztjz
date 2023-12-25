input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    5000,
    5000,
    255,
    0,
    9999,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
})
