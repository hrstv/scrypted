import { PrepareStreamRequest, StartStreamRequest } from '../../hap';

import { ChildProcess } from 'child_process';
import dgram from 'dgram';

import { HomeKitRtpSink } from '../../rtp/rtp-ffmpeg-input';

export interface CameraStreamingSession {
    killed: boolean;
    prepareRequest: PrepareStreamRequest;
    startRequest: StartStreamRequest;
    videossrc: number;
    audiossrc: number;
    cp: ChildProcess;
    videoReturn: dgram.Socket;
    audioReturn: dgram.Socket;
    rtpSink?: HomeKitRtpSink;
    isHomeKitHub: boolean;
    opusMangler?: dgram.Socket;
}

export type KillCameraStreamingSession = () => void;