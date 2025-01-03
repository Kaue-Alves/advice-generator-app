import React from "react";
import styled from "styled-components";

const Tagicon = styled.div`

& svg {
    margin: 0; padding: 0;
    height: 16px;
}
`

export default function IconPause() {
    return (
        <Tagicon>
            <svg xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                    <g transform="translate(138)" fill="#CEE3E9">
                        <rect width="6" height="16" rx="3" />
                        <rect x="14" width="6" height="16" rx="3" />
                    </g>
                </g>
            </svg>
        </Tagicon>
    );
}
