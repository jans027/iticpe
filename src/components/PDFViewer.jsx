import React, { useRef, useEffect } from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.min.css';
import PolíticaProtecciónDatos from '../documents/Política-de-protección-de-datos-ITICPE.pdf'
import NavBar from '../pages/Navbar';
import styled from 'styled-components';



function PDFViewer({ pdfName, onClose }) {

    const IframeStyle = styled.iframe`
        z-index: 9999!important;
        .pdf-viewer-modal{
            display: none;
        }
    `

    const pdfRef = useRef(null);

    useEffect(() => {

        const viewer = new Viewer(pdfRef.current, {
            url: pdfName,

        });
        viewer.show();

        return () => {
            viewer.destroy();
        };
    }, [pdfName]);
    // console.log(PolíticaProtecciónDatos)


    return (
        <>
            <div className="pdf-viewer-modal-content" ref={pdfRef} />
            <IframeStyle src={PolíticaProtecciónDatos} width="100%" height="1000px" />
            <button onClick={onClose}>Close</button>
            
        </>
    );
}

export default PDFViewer;
