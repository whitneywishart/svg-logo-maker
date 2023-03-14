const generateSvg = (shape) => {
    return `
    ${shape.render()}
    <text 
        x="50% 
        y="${shape.chosenshape != 'triangle' ? '50%' : '40%'}" 
        text-anchor="middle" 
        fill="${shape.textcolor}"
        font-size="2rem" letter-spacing="2.2rem" dy=".2rem"
        font-family="sans-serif" > ${shape.logotext}
        </text>
        </svg>
    `;
}

module.exports = { generateSvg };