import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
    @font-face{
        font-family: 'mukta';
        src: url('./assets/fonts/Mukta-Bold.ttf') format('ttf');
    }

    @font-face{
        font-family: 'mukta';
        src: url('./assets/fonts/Mukta-Regular.ttf') format('ttf');
    }

    @font-face{
        font-family: 'OpenSans';
        src: url('./assets/fonts/OpenSans-Regular.ttf') format('ttf');
    }

    @font-face{
        font-family: 'value-serif-bold';
        src: url('./assets/fonts/Value_Serif_Bold.ttf') format('ttf');
    }
`;

export default FontStyles;