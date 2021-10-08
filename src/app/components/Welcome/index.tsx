import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

const WelcomeComponent = styled.div`
    ${tw`
        flex
        h-screen
        items-center
        justify-center
        -space-x-96
    `}
`;

const BlobOneComponent = styled.div`
    
    width: 600px;
    height: 600px;

    ${tw`
        m-auto
        bg-blue-400
        rounded-full
        z-20
        mix-blend-darken
    `}
`;

const BlobTwoComponent = styled.div`
    
    width: 600px;
    height: 600px;

    ${tw`
        mt-36
        -mr-60
        bg-red-400
        rounded-full
        z-30
        mix-blend-exclusion	
    `}
`;

const BlobThreeComponent = styled.div`
    
    width: 600px;
    height: 600px;

    ${tw`
        bg-green-600
        rounded-full
        z-30
        mix-blend-lighten
    `}
`;

const TextComponent = styled.div`
    
    ${tw`
        text-9xl
        font-black
        tracking-wider
        z-40
        subpixel-antialiased

    `}

    p {
        font-size: 28px;
    }

`;



export function Welcome() {
    return <WelcomeComponent>
        <BlobOneComponent />
        <TextComponent>
            <h1>HELLO</h1>
            <p>_Template</p>
            <p>__React _ Redux _ TypeScript</p>
            <p>__TailwindCSS - Twin Macro</p>
            <p>__Cracos _ Styled Components</p>
            <br></br>
            <p>®JWolfram –2021–</p>
        </TextComponent>
        <BlobTwoComponent />
        <BlobThreeComponent />
    </WelcomeComponent>
}