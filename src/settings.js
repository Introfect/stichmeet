import { createClient, createMicrophoneAndCameraTracks} from "agora-rtc-react"

const appId ="68abba6870da47e6b58856f271835034"
const token ="007eJxTYBB19XH0nbgiYbNtY+jhPLvrxesvxG3klb9zbmr+7rU661cqMJhZJCYlJZpZmBukJJqYp5olmVpYmJqlGZkbWhibGhibOF+dm9wQyMjgGZHPyMgAgSA+E0NlPgMDAOFHHdk="

export const config = { mode:"rtc", codec:"vp8", appId:appId, token:token, uid:undefined, channel:"test", cameraId:undefined, microphoneId:undefined, encryptionMode:"aes-128-xts",}
export const useClient= createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export const channelName = "hi"