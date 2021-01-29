import React, { useState } from 'react';
import { PixiComponent, Text } from '@inlet/react-pixi';

import system from 'apps/system';

const Card = (props) => {
    const [isHovered, setIsHovered] = useState(null);
    const { id, x, y, resolved, active, onClick } = props;
    let bg = 0xffffff;
    let color = system.colors.text.commentPin;
    let borderColor = 0x3c4149;
    if (resolved) {
        borderColor = 0x4cb782;
        bg = 0x4cb782;
        color = 'white';
    } else if (active) {
        bg = 0x3c4149;
        color = system.colors.text.inverse;
    }
    const style = new PIXI.TextStyle({
        align: 'center',
        fontFamily: 'sans-serif',
        fontSize: 12,
        fontWeight: 'normal',
        fill: [color],
        wordWrap: true,
        wordWrapWidth: 350,
    });
    return (
        <Container
            interactive={true}
            click={(e) => {
                e.stopPropagation();
                onClick(id);
            }}
            cursor={isHovered ? 'pointer' : 'auto'}
            mouseover={() => setIsHovered(true)}
            mouseout={() => setIsHovered(false)}
        >
            <CommentPin y={y} x={x} bg={bg} borderColor={borderColor} />
            <Text text={id} anchor={0.5} x={x} y={y} style={style} resolution={2} />
        </Container>
    );
};

Card.propTypes = {
    artboardArray: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    setPixiStage: PropTypes.func.isRequired,
    fitAllArtboards: PropTypes.func.isRequired,
    onActivateArtboard: PropTypes.func.isRequired,
};

Card.sampleProps = {
    artboardArray: [
        {
            imgUrl: 'https://placebeard.it/640x360',
            x: 30,
            y: 40,
            width: 90,
            height: 50,
            flattenedLayers: [],
            loading: false,
        },
    ],
    artboardComments: [],
    width: 600,
    height: 600,
    selectedLayers: [
        {
            toyboxId: 'bar',
        },
    ],
    activeLayerInfo: {
        x: 25,
        y: 50,
        width: 45.0,
        height: 20.0,
        toyboxId: 'bar',
        name: 'Gray-10',
        type: 'artboard',
    },
    setPixiStage: () => {},
    fitAllArtboards: () => {},
};

export default Card;
