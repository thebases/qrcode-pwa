"use client"
import { BrowserMultiFormatReader, NotFoundException, ChecksumException, FormatException, Result } from '@zxing/library';
import { useEffect, useRef } from 'react';

interface BarcodeScannerComponentProps {
    setBarcode: (barcode: string) => void;
    setError: (error: string) => void;
}

const BarcodeScannerComponent: React.FC<BarcodeScannerComponentProps> = ({ setBarcode, setError }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const codeReader: BrowserMultiFormatReader = new BrowserMultiFormatReader();
        let selectedDeviceId: string;

        // Checking for the mediaDevices support
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Get the environment camera (usually the rear camera on a smartphone)
            navigator.mediaDevices.enumerateDevices()
                .then((devices) => {
                    devices = devices.filter((device) => device.kind === 'videoinput');
                    selectedDeviceId = devices[0]?.deviceId;
                    //   selectedDeviceId = devices[devices.length - 1]?.deviceId;

                    if (selectedDeviceId) {
                        startCamera(selectedDeviceId);
                    }
                }).catch((error) => {
                setError(`Error enumerating devices: ${error}`);
            });

            const startCamera = (deviceId: string) => {
                navigator.mediaDevices.getUserMedia({
                    video: {
                        deviceId: { exact: deviceId }
                    }
                })
                    .then((stream) => {
                        if (videoRef.current) {
                            videoRef.current.srcObject = stream;
                            videoRef.current.setAttribute("playsinline", "true"); // required to tell iOS safari we don't want fullscreen
                            videoRef.current.play();
                            decodeOnce(codeReader, videoRef.current);
                        }
                    })
                    .catch((error) => {
                        setError(`Error starting camera: ${error}`);
                    });
            };

            const decodeOnce = (
                codeReader: BrowserMultiFormatReader,
                video: HTMLVideoElement
            ) => {
                codeReader.decodeFromVideoDevice(selectedDeviceId, video, (result: Result | null, err: Error | undefined ) => {
                    if (result) {
                        setBarcode(result.getText());
                        codeReader.reset();
                        deleteTracks();
                    }
                    if (err && !(err instanceof NotFoundException || err instanceof ChecksumException || err instanceof FormatException)) {
                        console.error(err);
                        setError(`Error decoding barcode: ${err}`);
                    }
                });
            };
        } else {
            setError('Your browser does not support camera access');
        }

        return () => {
            codeReader.reset();
            deleteTracks();
        };
    }, []);

    const deleteTracks = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const mediaStream: MediaStream = videoRef.current.srcObject as MediaStream;
            mediaStream.getTracks().forEach(track => track.stop());
        }
    }

    return (
        // <video ref={videoRef} style={{ border: '1px solid gray'}} width="100%"></video>
        <video ref={videoRef} style={{ display: "none" }} width="100%"></video>
    );
};

export default BarcodeScannerComponent;