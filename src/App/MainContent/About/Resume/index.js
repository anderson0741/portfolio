import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import ResumePDF from './Resume.pdf';
import './Resume.css';

export default class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }
    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <div className="resume">
                <Document
                    file={ResumePDF}
                    onLoadSuccess={this.onDocumentLoad}>
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
        )
    }
}
