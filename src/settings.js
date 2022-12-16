import { createClient, createMicrophoneAndCameraTracks} from "agora-rtc-react"

const appId ="db9e855e5f954b3bb94c33280a6ccf90"
const token ="007eJxTYOi0s5px4eSy2DXhB5hfbehxyy08fenev/gL/ybLXL2x989TBYaUJMtUC1PTVNM0S1OTJOOkJEuTZGNjIwuDRLPk5DRLA+VPM5MbAhkZsl41szIyQCCIz8yQkVrJwAAAgzQkAQ=="

export const config = { mode:"rtc", codec:"vp8", appId:appId, token:token, uid:undefined, channel:"test", cameraId:undefined, microphoneId:undefined, encryptionMode:"aes-128-xts", encryption}
export const useClient= createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export const channelName = "hi"