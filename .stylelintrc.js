module.exports = {
    plugins: [
        "stylelint-order",
    ],
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-recommended-scss',
    ],
    rules: {
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'order/properties-alphabetical-order': true,
    },
}