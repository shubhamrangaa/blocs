import AgoraRTC from 'agora-rtc-sdk-ng';

export default class AgoraService {
  constructor() {
    this.rtc = {
      client: null,
      localAudioTrack: null,
    };

    this.options = {
      appId: '85ee5af5aa59403393cf7a3c26e97238',
      channel: 'vc',
      token: '00685ee5af5aa59403393cf7a3c26e97238IAA7mxU/M6IV6P4EaEegE4RjhWAZQhRwI3364KiamC8sA238B+wAAAAAEACX33iMnlXPYAEAAQCeVc9g',
    };

    this.setup();
  }

  async setup() {
    this.rtc.client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    const uid = await this.rtc.client.join(
      this.options.appId,
      this.options.channel,
      this.options.token,
      null
    );

    this.rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();

    console.log("agora uid", uid);

    this.rtc.client.on("user-joined", async () => {
      await this.rtc.client.publish([this.rtc.localAudioTrack]);
    });

    console.log("agora publish success!");

    this.rtc.client.on("user-published", async (user, mediaType) => {
      await this.rtc.client.subscribe(user, mediaType);
      console.log("subscribe success");
    
      if (mediaType === "audio") {
        const remoteAudioTrack = user.audioTrack;
        remoteAudioTrack.play();
      }
    });

  }
}
