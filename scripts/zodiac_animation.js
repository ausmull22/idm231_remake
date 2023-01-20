var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim_mobile'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie/opening_logo.json'
})

var animation_2 = bodymovin.loadAnimation({
    container: document.getElementById('input_field_animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie/opening_logo.json'
})

var sunrise_loading = bodymovin.loadAnimation({
    container: document.getElementById('sunrise_loading'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/lottie/loading_screen.json'
})