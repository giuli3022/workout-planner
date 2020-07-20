
const phrases = [
    "No pain, No gain. Shut up and train.",
    "Look in the mirror...That's is your competition.",
    "Make muscles, not excuses.",
    "Train insane or remain the same.",
    "The body achieves what the mind believes."
]

const randomPhrases = () => {
    console.log(getRandomArbitrary(phrases.length - 1))
    const aux = phrases[getRandomArbitrary(phrases.length - 1)]
    console.log(aux)
    return aux;
}

function getRandomArbitrary(max) {
    return Math.floor(Math.random() * (max));
}

export default randomPhrases;