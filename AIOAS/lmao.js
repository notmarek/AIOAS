(function () {
  function buildPlayer() {
    var vilos = new VilosPlayer();

    vilos.config.player.language = "enUS";
    vilos.config.player.pause_screen.text = "Tower of God";
    vilos.config.player.start_offset = 0;
    vilos.config.user = null;

    if (localStorage.getItem("vilosPreferredVolume") !== null) {
      vilos.config.player.preferred_volume = parseFloat(
        localStorage.getItem("vilosPreferredVolume")
      );
    }

    vilos.config.media = {
      metadata: {
        id: "GRG5Q72WR",
        series_id: "G6J0G49DR",
        type: "episode",
        channel_id: null,
        title: "Tower of God",
        description:
          "Just as the guardian's test is about to end, Bam is pushed off by Rachel.\r\nTime turns back to when the tower's doors opened.\r\nHow did Bam spend his time? What is the world Rachel saw?",
        episode_number: "13",
        display_episode_number: "13",
        is_mature: false,
        duration: 1434000,
      },
      thumbnail: {
        url:
          "https://img1.ak.crunchyroll.com/i/spire1-tmb/6fc4c43b87042818082975dc03ea87ae1592991257_fwide.jpg",
      },
      streams: [
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832735.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzUubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=s6bQSX~7oAqD4L85FAUwK1fD3QGIlxL8Lqb1dlP0zFr2YWDy0MSJvVTlLWiBnXdFnZzWkmlHEKm5fDPF0Vy4FjDG6Qh~gd7WcjZ2v14V2M37ng1VLSUw7krNMDfvUqK7jbkey97rHhCQHDGmq~Tc-faln~QMOES68k~ZxdDpZ5HRNIPAAJeiMONWdAiielhQghC7mpNlrIvx3jc7l-1MWI8nuwbzeg8jf9etI4ilUiKwsl4olbZCv2QmPxe~2iVUoB32593iw0xvCudL-9Yr~KdDVmabMRiF0pk5WjDP7YzmKAABaQj8HhAuHAiRY-LD6Gx7oviPiTa9G6Iovcrsmw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832739.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=W8UxY6jzaHNocPnMRlv7Hwr4ViWSBbMmccmCWZAUcgsjGRhw4ZYWU7Z2feAHG~aBRFQ6PzQBHRUSe923gGNb4KgBen8YJICBd76m2tuV-rfsVpQlhAanVU1XuEBItIG4zgY7v6q4VCCr66BrMx-bRHxHbdosvowDVIXcaGvm~uqll6aGh0kK9IwpYlxWT~-d1HBGPDjQwBjNDExJLs01hQZpc6tBkOfRRvr3JzFU8wcmcVWJ~C4nOpaMli8X8ue0CPZv8RZzvfTIZxZzsL7Qmw9ElmxwVAeWU6bR5gXbGeLH8PlMK0sggF3p4ETJMFha8cqz~qlEBdHiTEw2zyWw0Q__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832736.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=VsGs06WlqoLY7O-ULwnwSwZcmME4SYuczJ4K7~gnmow5ghSfDYcR510d843pRMZAITXPcgqMD-sM3Nwk9cpSGOjR85Q-lrsB0wnnuegEA2LCWfgjRYWz0CDCiEmHJHt8yv7eUh3uG~nd5j7XCrqVT-yi7gyX83n6jV3b2WIU7JIdLjFBe8lPlxAXTIFZUmk4m1JIomEmujtW8Qw-DLCjlhu~kstcjdM9Io7BGy4kTPQhL8gfO3sWrNbl-fs6reK48CvfyX6mFTUId6LOS~ruLrG1rYx9zjID9E~1svgoEXU~T0IV2v6Kl9Uq8JIHTU8vMIgxPomtylAF0Jjtiwl16w__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832741.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=ajTqBNAJyUuP5DhLkxJpota9UYK4mEBNhEoq8lBtL7e0EqYk1kOlFDEE6-bQn4YIwAXzD8tdO81gR-GhE5RLcEnbRE8ZTIQGzNSM8Fi3XN9c670PFe9928TgIhRpYTtbMolHMs2t4z1XvaPkDTSEMu7KrqoWlE-id2Xy6~ji4P3ljawPx-oEABGtpJlBRdIDcUvFysBu2Kv9qe867Ik9xm9rLjglXvmmDML6oApGsAzvWNuB~gih8aplbwG~DvcGVOUqdcTIdviRA7Bn8WjyULzgqh09urSMjTjATQy1zH859Fpd-0AJMEoR77Zq87wIXD7Ve2kWHv903~uuxM3ujA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832700.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=eXCwTK12qQLHtdqGGvMBVfgAs2qasudQ3e3M0-nNH7jQRhlgf4XIEBY8cFqP0Vj-yoSTr65c24NLVr~9CKmxkoynAmDdFNbZgZy8xTzezjk3ZN4FxXohRWSzO~xS5eODEluoe4h0KZg21yMhgHz9q4CLssG~oA3rPZaguBkc936V2XQ6y~XRuU1Zi717vBkY95x1Ba7KseO3FeeSaK3DcTEP0S3DGZtXp2jXGDUJEBhG-TP3G1Jmo763LJ-NJQ4xX2bXrRKgQnAexmCcc0GWOF9i4FFxLsXWO3wr1Gr37PaEgF44jkThBmrr~vPOULWQjMgam1RUD3E9Cd-x-0IKVg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832738.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=lB8SKxNQb24rgAL1sPA99s6zRbP41RzvGe1Jg5l6DjB7lfJywQa65XjozsLG3-qzKjEOYPJAbHbCL0CIs6o95Buw4f4Yh-Jq0a~~RK1STn4yUa1bxYFYbSgbRKmu8-k-H6N4Th0RWufogGfIdDZ6oKalvPAutJs4UP6c4EGl3CVguO~VXgWvEg2r7uJPgqd27~XmWaQd~u6Y3dc97j8AoEcwU-9fuPkTgkX3DaqLC7-A01pIYcIGm-4JqOllDTP7y5dU60qDU4PlKzB9jsLnEZ8kdSD7PQdecScqjTKmNHrpHJazSMnalrX958VejumZkjRlj22nHwplXrqPlgtjMA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832740.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=G0-UxCmRxJ43ebok-jQKMSwmiD48Sd1cEtemd7clMOIdEEZ90jd8lE5X8ZXmlv~W2YmkjeukUvBiWYrZg215Og47iJxBKS2czghX3DogO-DCR-IWF5C6vb3AxC2mtx22Ff2bAWA4Qh68-U10Ss-qc41YuEs4Oae0zT1FEffo-rEwLVelIeor1liZgsvYs-MwmCEPooyCQhX5zcMbwa~80jpiqmJR00m4m34MTUGdFertzsak9f7lf4YpAOz1C-R-tz~RYiEH2P4d7dPKF-ahmI7DTPCc0PAoSH7yAZl24VJ1EkVszRbigpoCV1J82cdux-gO933FTuK63-E3-u791Q__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832771.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NzEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=V1KkUEp-7Sces8aZdTVITPunh4Ddzc0szk1MtS21Rw7NkOfcterGgE5ff1yNIAx2vcdzKpJ-V6-5BiFV0OH2GfoWroMff140d8OQrPJeTS05w6RgMdQNxzMElmtCjV4g8T5NRt5C8j822gpWPTem1OZxhKCVhTOfq8Y37eN6EJQXgSURjKeGSeeXcfwr-O-PjtOoN3cYTstdBSIJ1Q6zVeY~Vp1HS3vfmySjF9hU1~d60sY0BR7IogrHX7SQ4qIju2cLvsh8eDhUdJ5KyPu4dbPut~9eiZUljXhD1f~uyV3pZl-JkUzMQoi48hkLN0oEU6L7uYweef8dN9cIkzvBxQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832742.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=vjvAy2teQXD-XZefA2c10xEolsJ4C~zRmdBl7d4wUsqk9EzBmMBNrk24B2EILnQdxyJUkFAGIoRjtxMD5A--DzqqSJElU-Au0v34oQy2x1DOCZ4khob0Gmih8u4HTJYj-gP8NDD4UPVi7acbvN7n3cwG90Ec4AM4bK-npvDjZujmn9plITRtzeIWkzrzMMERBsWQ-6djfaU3uNzNcd7I2588KklywcDNWS4syC6I2b93ygc5uLAVcY87jw5ypfAB9SHnACO7hJZDGG9gXXiRzTn5FNIz9K46p8qlWqwp7A1NWsiJCxiRt42bJ~Nc1jLQL6gIT7zm7EAfB9nL26hosw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832737.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=AS6iKg35eh~nn0X91Ds0x~0l-iM5bHY6Y-AHWEWs5rLzr0QDlZyV67EujFsWZ0bSBwjTtNv6F6bJCnML-TsTJXAKIuhRAuzemQQHaQJO29kdY3CPh2-OPmEx6ejA6hc2YVmNuaW9v391tRVWeNC2kwgp9GKvaokagjhvK6EQal3mYrLW844~doeLmukpHk07XWK0LoWdtu5BZd~eKru8Yq87VyaLnV~R0N1uw7gOhGzEQw1iR6cU9uaM17N6jN57DVlH3hSc0mxMG5-kJgZCFrXLhJQ-R4BIc2cpJ6xU9Gy7~~GzPxAzidjSVNwWozpnAMFsSaN9YI0ETI9V0TEF7Q__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832750.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=tn9eZb--lADR1qsiyUYuV2Roxsa8jzRIoDhaW4avQfLn-aiNQwc-zljPizgT6mhhCxoCbCB~6U1iatfgwd~Jj4B9WPCuVnbtsTA7SGQrQY-hGcPAxkOZAcibuEnuQD6CUe8-cgOnz3w~H8ZnKHBTqP6N9g4XaQcCY1c9Scbvd-qhMhJX78mli2yHvEn6msH5bV5my6vU~LNSJ1pFKdAYC-r1HjlNNJoDUQRCIvfwkEuflrZNoM6FqMTme5lr16qQaRxP2LIqO4l2G6YdOnF7N8RoPlKeuPVTuStzMKQth2rc0BvmrzqbFOrlzpF1OCT3yIacHvkfj0tuoVYtmzHyYA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832749.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=je7JkvMgGwIg7OS203aD6Jsod5n-eyh3v4~DHxMO7BV4~ei~UghugX41W7I5yoFvGFs~HNZHNfh1s14NUTRgQTsYlag16I8WYoyFi6rOKg0bbT~gYcUi6grEHjvd18pL4vE0WOcaCAUHGcm4fyDcxBt~AX-yipMCLzaCq536kw6NugjGaV1dOP5YSTZ5Pu66Y2Np~YxZjMisZrkoQOUTmDMDLgMrsWOU9D86w8HB4Mell9BTIOul-SSGt3No97HROtAnJWCvMVj9QABX80z-UWFd-8bGJhSurVJFbWjqOWw8hSGyP2xUOQ4Gs9aGMhjS5g4kmzJu0r9mGTvPSycp0g__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832748.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=bjHXNHRJ~aMhRDirW346sdJBiMYYSc8lCjIDDqV5TeqnKQmr2spcm5vEitLjz49Hwgu2e8HvKvvvlzwWdYDEW6bH-Q3hCGG7~YJwvg5Kl-PvzzvWopU4Ra9RDBAjOi1jcVh6TvDuiwF7H5QOq9SXWdiFO7gPhntBWoKzYD~ICsnkOoF0NvRD-kJ2ERkQ-5PU5eZi-p9~yByxKDI8ttFLQa-7eQHPr-dKMERgQjUj1snhPBdrnuYv2j3aG1hVyoISpsAKx0OmvZ5v5VM~NguprJjfPAXISV2hGjUhifWwGwKgfZZUAYpBNx7RqqFsWVDdZa3tR25QodgttOiq4J6JjA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832772.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NzIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=HffEnjWEFQlBx40~IkVEMuL5QjiUQFS9bK3AmP92uZ9KlnAUjtch2x7iiy8F3uRABUyWJIPQCRRo8A6S8mP5uGkuDntBYB1~HyBZNGDef6cv4XZKNhPu4H9spVm4jl15f~y5S~YobXpbsOr-hXA8KB8GPA0~bXi0e-7UocPOJPnwqKIhzJiLwWvq6l1wdZuEAGWJLDJZECtEVCniVP0i4Xhe42xOpRmHzJjDLneqHO2F8rkNq~J-NOjCEIfhUXupug0LIrGbVoWdTmHfwbDmVYA0QFam6Jr55Omp4J0nY-waMsBiGGiMLkOjY27QLXksmm49TLMD6Ez2P7ZxdVRpLg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832701.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=bCyqex7urjqBDuCpSPidcW54Pg-UtulfdEtjNehWbaBtNgF-EMOgvsP1mhRwnsHjmCweJC2Kkd8xDSKK-AdrxBo9bkeGMS4MFah4iGNr9Au6OA-S0caYXMOtQVs0M0Pyb3y2vGlIWk2NjwCVhFFyeCrS6ISP~syhSEg-H3Ijm1K4cpcSNYxyWOqQwFi9MvWGNIwC-Rhjkn-QEfRfJv2RJjsJqST3OJeHgYj7Ez8czN2TXwbX5nlCT0q2nJlzwy7nQN0qiBIQkTzaVP1oMxR-YLLHfXhc8nCmwQSEpxWZvkf8ewkiGEaE-lytNwjujvT4tT9NmS5onYLADzIauEJqFA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832744.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDQubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=dTPNrT9CnYvMfyoGhgFePAQuFbxiSyUQe80-SQG4daqsfQoFSd3DancKFa74039N3B7dbyPrzhPV2d9SX6qB-U1v4CdDG1vN6S-0DdZaF-bCOYCE4uiPuakLU8skxaw8dnlUplmLqTPpUfO6XDy3BhAJSQz93cDpfmhYxmhpn9D6meJlUa19ajMfdTwStEgl6HZsG8KVJEcgeJbiRKjwLyUi6giQEcbmKq5tJ91jPulzHqxCXxQebZimTVb5dmSqrt~EMM1cAEUJ59ZrA9mJgqzd1MTP9rbe~e5JOd6W-FAEgJayDyvi4esJ9rOYzInQiBtL4RtDFGu7H-JsqM0iHQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832745.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDUubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=BK21BWdJj4KIek3BZCnk07UAWyJpLdU16U0rAshgp47Bi7wqaHh4uL1X1s7nu0u1RHxwq~ZAIy93eod3A1zmYY12V~qjhXLXGLMO-Kc-XtHw1uUoB2VxaokXBznN8uMq2IXo7wOnVCsN~9vhZhM99O05tK5~o1KG-hLlwYz38a4ELWEkkne7e96p47DVAFeczx2J6Oq3ZbT~cj56h3vhyOkrkBokVb1SVj1hgLigE73zoRUSI1DftsgHoaalL2~re~diuJ-8OPWGtwXeZ0v2CYgW3egG2BaD4AOo5iJHbAbwLdil6ppuQVjEBOQD3BrHra~jA2MVmOr1L7uttTJFFw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832743.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=eXooxinvJbRRB3IrmG5Tkysgld2~oUtJiAAdG4qGKSjtyplpNh5dq7wEmWr5ETXZxrymD5Hp70LcqeRoz9weDv25WhFOlEigUAIUNvZL2DXl5m8gWesFTTkPki2JOetLtx2KMGLj6jKYbmzGrg3fl1EHimXD2mdqnKbU3g5pUDcwm~2t49C8sVTLZmIpVfYUcvjwpZN4yWHIScpZQCbMGTEnL6JCEbzZFh7JI0gVFLw4DHPlu0xsy9R4vi-yCbw-BlMyKZw~6q413B8mXtp5vvueT2-SFilAmlTpqaABHOwDhrfRvFgZmljnteSWDT4OMORBWLlyQ7o6zL0frY8cEw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832746.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=eSn0VwCDYVgueNlE7jZMgQ3LmIMqhoruJ302QTZxmLkEbKAtULRl6vg-GNUrVWYZmYFfm88xZnIz3fwNrgLPFHv1TkWPmWl97h0MlXn9hOvmypNEyop6ba7r0MHqKSEi7jYkKkQu9jJ72sTkN8JbjpchVdY8tzj~VuULcDhN~ncCUNU4F5beP-zlAd60iVdvdToZN2~oK48wLBF7lua8KVjYqXde4L07X-YiIW-hFJFO1ksuYXGrIplb4CNElqiF6dzUlrDb4y~r0Xua4kn-GOBP-RWqwxhmqKWYRcvv9--PUeIQk3gpscqA9bN1TCLkfGSGRYVoewVdv5-bQXZ4bA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832747.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=b3~YCkkg5dGqJb10hLeOqAg5PELLilK9CCPMshJNdvyLY1zi50jHC3te5N1GVYV6-WCNSbKIK8A5jFdoPTC5P3NjvB9Y5SoZLIBXARDFJsBU7yme0aixW2FOHZq3cV-VYoTtelrpl7ybNEH4oZE7N93rrFek0DgXKLAb2WbxtGoSRKOkbqn4yAYLOLyRj-UcHPvkQJeaTAMa0e~0vMjex3umWUhNVQHuF6kS5XsSfjq2Ku4RQN8Pb0850Lo4hfgAn0tD0NYvKuftIpc46xIO1pC-5YGVaxe3KvOXERBXnHQ-x6vY2XEyJ7jduPbgA462Cg6CUO06o6aqtlWVvNW9ag__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832728.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=euLf~Tm~iGVkKmVmCoI7XBCM28xbwDTpefzlss6CGfqRV0CAfQ39JiTpXz9UhgdP7scOLhUwJdJW3yZPk29rd-QAyoflAnSfBkUEz2Ufxb34QfLd5I9rOOoSPFBoIzJwRphvvCUqP029FgTsO8dJxEk2QKaHUVwbmSSUyVqjSiZ2akIi1RCss488Cs53YtHxkuDSRthP370j81QT2KqqR9qSSSWhJxtaEBoajmO3Y9l~j~Q6Q9eU765HaKAhUnK2k2CuIrk2h~941573Hvs6jzUyMJtk5~7oLB6TeCsHrqTFnQg5Peu7G6R6FNkLSMrcQ9aZH-Y7nKf16I2Yu4WyNg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832727.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=WHEfCI7quS0vOCJvqCtTFbd2cW8DUX~2zuLQJYPfq9sbd9wBdUOSt0aib2Mp93~7mFk~~jHX6Bc6m19Vl15056fMYg3d1f0Uv-02gS5OLwBDo8SCJfN2Uii8VQkmpoLbm7OJdWfsIDFDoaGVnuGOyWwCaK8CdjHi2in3pI1EnLSZ9FSEIgTZwmxW8Dotni466HOWeSePIlcQdGcOZpgVm0728wGeIMG2D8JQr8AqyRf2-Znk49reMEV13U1hutXT-3Ouk-P9PG~wGNqZpUvINr6vcnzSts-JQyAau3Fry8~VTo7d~1Ijl~oanjXSFyaRN7qvNjd6rW9F3SKokZtb~Q__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832729.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=EvnVV42y7FnEOBRWieWlTYlswOVPlBcMYkvCJbdRjYLab5GswP6BjcNaBB70nElGeKWkL49V2orVyfrWYLH94BIBa9F7Jxdlk2wWBKZdPaRJ7pA4sRxqeSemU8pIBmDQFn528IbJzHlQmwZAdKuy-4Nrc662KLU4a1D4onp9XbGQEZHAdU94oJ1y5Y8GOTJ2PjOi1BZ0wlHpiCkUhnNgKtVJRuzppA0f1Rnnry4tkaCMXABa7jtN1oHTT71ekClaixoBhWeb0m6fKEywZN67EKIDtTW3F80sD4edZufnRaZUnV6ule7BhcdgqjnEkRC~h9L3QRi0u6nKlIZqf0YoEA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832730.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=uGV9~bdfSZKUj~Vha4~wdbJGRceIHEpZpbRjjBPGtyPnlfhkjfplpJHvDJeXfzKXoiw4uHXiXV-ygVzjqAWnYJltOahVEcRndDSZVV2c3yKFPIQKr4923itmBEW6mlQ68SOtZ8Cbhaq77fNV9Q0zLYVqfZuGs2l2w8vQp9~XPtOzJ1uxNm3VqGNKH4GOGiUeO7Rfea6TPj6y84eZgzSANIgpIDLNVtJT-BGsTSF4Ec-N1iMRBtU8BgUhvHmgmjrxkEII3zPQ-Y2~2nwred2FLsFknvN~CBP86QbuvP8HefAZ6Rivi156DShJZhCP9~pJN-Wo~-Oyzkw~T6BtGsAbFA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832770.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NzAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=Yl8da9hIUu3ys6cgNafjWMqCpLDy6xpLZTATzNvTp01fSzSvzWE43W~8r-EK1cmmkAddomomJ4G~4sGaaPCaQkeZBrK12i0KBi~QKqQ~8e4EPQL8hkCkaZS3iV0n3~lDE6ljMJCTukTpn5PL2Kdn4M9FoWQ7AS~LXdKy6KElDQsziEwSHJSPBUVLd71-HDkkDiquvLaHxESFRaQeR4BsQ6JUmQbh0VfOL3FtVsh3vyCl0OVlbur0o0I~yynOBiTmxF4RMn2Azhf3RzqHEBqnakBySBipQG4-DSVvudFosUGR~bbx~Kr37W1NFmVOe35iCviiO0vfZgwQduO~50n4GA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832731.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=JGYjKf~3iSoNmHJL109Wa38K6HxC2HpxkG~Awg-WLDfcJg6rg-GnrdhSSKxcHyemk4qi9coZrKcgxKHMkyEFJNjGZUog911R8~m36TMX2dViJ2zJvBxomwah2CUVwMfgoGADhk4Fw~fi6z9TOlE8T4t926dUdTpHtBLku~ygXkyV~~aMtAgmTyccnh1Kg6bZykV2a0bkazx~IN~DCcWClxZlxxeHyt5n8bl6lxspn5AKERY3R0L1IT5hE74580AMLHGc17~FqLE4AX23LlfjktjPyfWzfyyETv2SlGT2bOQfYGTYtx9DZLWd1BcDjhm55ab9BFqL4aN5oK2qJiGOeg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832699.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI2OTkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=BTxNon0ZO7A4LIogJfu93RGZt-mZLswT2FXk2J~ShGvoGqxHU4Hf9~u-c52nCvyvrw1~VRp6-hoG~NfUQjW9j-06HryAGqL91a80VqrhVwb13xxIvAa-KfcihrXrtW4k7N2zmfgtDetTqIUI-g-hVTjzd5xitZok3uxwdZZlrdzHSps3j4zyYSHa3ftuiTBnym542gvyRhgjD0J0eAaxxWVpjlpUAPmGCFzpKiERJkhpz7PFZdSks6rACnBvp-s9lUvwKDANab52tHTEXzvFmJW1nqE~wUJet9pis9bSRmDER50L2r47q-99wJlHVQeEyoqx66gGqVXSEpo6prSm-Q__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832733.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=NQyWFCysEuUuRSJHs9TWKCjNItSnE6~GOSAoxKo2JxrnHGCHWKh~v6qp7PYB1Uo3gIMXHrSJ4rbGYOA43kyMzEH9wPBEkGIuIbgfHVpU2dfg0HyThFIGZALaluDcd0auQ-zbHgp9dANyDWPWlZxsbSi0OKgpqXl9Z1KYW5YqKxb5xX-ekuOefg34CJAnBadLuYjDoHVIYrKvbj7jS0BAWCFGW4U9wjF8NDJ6dVWlKxa1a7LmHPaO-kvIzgqhH5rGYMxBSIiL-ZzX4UQPEn3VBWhzEk8U5cY5pBG383zY1qdcC04d648Pn4hCqx2~e1qcbVBtnskxzaTJ9l1gWuiuCQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832732.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=b7kqoMwwG2xVtLhIuKAkgzryfyJwzPJV3BdOR1-i1T2L6KQZQ3avtMGcCDZ3rTg7w2-9A~GLM8VNFs~0myGokkNKc1OeRL8ieO5oLhxuVqMkZFzLlpIDo97AmIHyDN43fvfQXEc6EAMlM0z2C3v9o9PO4ntHe4bqnO4jeRDaYZrstKAFlu1Nqw9wMQkKUrWkjLxhl~YmKdyQISqXuBmgttrH~Tn0-XoLBvQQAz4WZfKNG7gROrzm3WadVCKifdlHWTkSljfAEDvscpFkyJrCLVvCe6tfvkXcOrRBjp1ylAAVHTim47GwFfR~wvfbhMQaHccT1vs2~MdYOYu9938ipA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832734.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzQubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=tTaK-QevDVTANiBI3msZVQWfy2rCWsomVkC61juxi1YV~LusioMxHp1VVCgW7uPJmDAy9S6dxUzgw1ZMIf~596Ydo4ZzhhfKG0XUqaZbtKPOcImJkwPCQS2tkCNJ34dOzAF7WwWM~bEHwBvC7p7Z2RPm~RCJOo-EOVu6-XyUBx-KYajkLbWSI-t-t1FEeFeXKB9rC5LLioGGITmwNiHq4iYpnsd5SUlxA3qyJrdJpzMdXC-6Prw3xvx7uTgl-9jB6tv9sd-sUJSJKf0Y0LMO-q~-IqH5~tSRFCvAct9i9InRFv~to6tsnGpPEey9RSUdk3ULT1BaH1a3TpkpWtnHCw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832717.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=pRKAOREhYzY~xcptIke~ask~2MAp6Xr0q9NL1wt~7~yr6nMoO0DaAYiyN3LbVtrW2G-oQ9IVXTuRZDd6m4eFvuE9iVNhA5G49iETArTY0tZbSoHrU3BJL-sO2Ju8XwXr-6Y6fLsPmxp2934Ud1-boDg5S~uO~E2SglgbTOF8l5x-RDSmGTBuV1KlO-rGPjLGslq9WVSDh1ZzIcZptx4zQIZWLL0l64XNMj5UfodMFZbsareR7-eNYxNlgCeqeMzSaMvyGKO1OwhWs29t7wEs3svhg1zkSIogKnIj1-jvsM2jAw97F~8rR6SEfGbAwu6XJG4lHCTphZSeimsE1oSdwQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832716.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=Vc0z61V8FBYzYjNJuPd~89Hs15YU~LEyW44X0NCGa83t3awygcnoMBF28cgX3LiBTyv8g38zlSRgqpDDtGcgMbycfA4tPnta427OxvOuZdSKYFZXNZXVOE-xXMtwprIDGAdKFRR7IIuFIvEXa4UxfGxxl4RUGWgTfXc8IkMyvgUrw8NuqXV0zFROfQXumbc2LSxhPRwrBAKmvMX~sxcQodypYQsfiNjV0LQrnJLPndKJTDn40PTiwmAcx9wL64kVKfeQumLesKq6Yc27NUrKeXiJo9rauwprrPMixeNNYdxLItbWyG8kibSCgE56d11FYYru9puWaRevHfpLAu32iQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832714.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTQubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=YmF7PidsCSgAeBZWwMk49HtQ~JFEJQBzqMHqDaU-a51J6ZhUro8sqyj8G1zSa4zjYa5RZFUmPxBTHnvURULxBF4DKgtu8JddwMDgxf5CUoy3revEVun5TIyyHpJwAHX29wueU4XU0wmAXFcIFmV8qIrG3nUIeD8Mj~xW9GcQzrNvvz31hCrF3IHtPvly93A9EQnBIfLZPFMRuAs8-Rm00xUfzmr9jkbd3f-aH6LsRDnyRUWre2BWJoeHf1WUvncqEkwKaPWdbxPkpItCHQeE-WglLFzIh1vUqu16fVxZwLi4aRqynQFFn2K7~JKvP9votggTlhVtNkINX1u60-unFg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832713.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=VMFCZczm7EGjEU-XDivVyZOh6YXgEN38Ze~IWPLwimX7ebnkZ2xr5Ti5~DqXbsOHAgAeFBhuFbZEW1z1f9oGj9rNkhIDN6s1idp1AdKQgV30wfvAKT~xncf4hRlPxk8P5c5sdkQeCBgdVSwi~UL8r-0nZxzO6DrYXLZ6t0enEzBDzaAmh-8-99V-BM7SD1o6V1gazZ7f8wq7PwlsYIYFpkOy1jUYa-Y2G6ZJroo5XVJ0i3s-wj3RheGC4~UjlUpYC6V3EdzsTDHRWsM0r~~BbQa0noWod211rAWGqO79xdDamY4ce-bHUOWb64cmYSt9sxpaOrRiHNqNYiLoEdVlQw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832711.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=L3~BCoYIsdw0v1vhHDfR0sNKe21e-CxKpnVh2fh326bAs5uh90hmWSe0JProi4Q~6pCGFqe03D8wbQrwvrkc9s8iHbHNUSwmxW3nDbkBtu6kAXSOKtjfR8RVfOe-g3nmfy3I0gvA0DRDTwzC40GRelY-7uJsbnMhBK8QEtrljzWOVbw25bssEK0pDjbEiHc4BD8LSkVmsaYVTA~rt7DW2JELSUY6fL8bT1xU~jLHLDimdno6PFvNig3oJrl1eWYboqzRIHzRCELWbjNCzQz103SAsg5nzqIi3pmuh13iERMScnSjGWzjw-jBQGx7H1nkXPbES331s6oNWG3ojI0WUg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832712.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=qeZnYxZGjtSg9L3ugb6atKKoE9kiACs-KUdANOgCaXOzEbsuHdxHupFfEeifTMNCJyywriMDxOUTDMl~fevT8WAmocdA63cQ9pTXyq1NQkWgXctoDBJO6ITOQ1Ux-AHK3hdhDjrM24lRbi99FDppoa73gR2mFLg2e9j8QvoCEL6QorAbbCQ2zHHha1etPavBnwqSA9fwJlorOvlXwPNjMcQNXnU3SGTN68EDwEFxIrXz7kNQVT1LXVOGlzcCSPmuwxr8CMqouSClOdeUQxWEAaX-vjx2QmabIkryT9bGlfhtNq~EaAiD4HfjhAjno883qlVgZxKY1eCOJUBwyYXkwA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832768.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NjgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=F1MTfnYpf~tbkzwRa6Rv09UmfZnG6RTlUxzMKXZPrDzhr-0ulcGOHQdWNOuOOOMSnZp9056xT~jmciXq1vrgBSvQt7v16zZ8Z-rz99JoyyLtr6EBGaN0ioH0x-19cd8BdAu4Xu3rXN0yi-wkGf6UPM~s~4kPcb-m-0r2ahIZ1hJJGl4Rl4YI-SAmV24IHiRdj6~BiqAcU7iqwKhXHVI1OwoSGP1DSYe2Oo~jadFPK4Lo0eTvQuyCk4t-trulAAGqHvVemsfS2equzFbTe6lZozVgNTvGIR2vPK60YuqvZzed1Taf3TdB6JDr8~Gk58BgXPXePFA6V6dDttgEwaNv9Q__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832697.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI2OTcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=ZysAsJbLS60osDSTRRM6-ftWzPkCKw1oq8xO4AtcynIq2LgXbsXNub8KZnel2D3vYkn0SN6oWmu0XS0aAPP62VZw8zQBmBHCUcHrG6317KLYFnOyDBzBGQIXQzUIOAJXxkhkCEPBHHgR6WTIgfxggqxxnteBSp6INam5Ab5BOOxDlk0DVE2rzYaQpwvA8~AqQ6eBt82n~~~wvRePfyHap-FkwXeSfNss7oPyRDiiPOHcUyLl1mo4CbMmgxfn3tt707z4ShK~7t~qy0nvL1kz4qSYXuH6O4bDeK7SsiIVSiqXOzvAEV1Tr5S99aXMCy~aT-hlD0P6ogGlyrnICYY6WQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832715.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTUubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=autITTHhbXiVBb2nqX1KjlF1hJrS~ib4ACAzv1s~4eVQ-gm5gwZb7m9oTWIlYH7eubSfe7YfBuRmpAlGk74JCBpMyRVQ0s2SZOLetzk~vchryYLt3cNgqFDm0BBMmXkok3vPjeNWT8lyQtoWp1ErTYZBnmOJS0CuqfIedtHoeAyebUGVvQEiR6UPyjcO1LHt-IcDLz-8ZP7j1909nDSXW47HU3S6ZIuiPsdpSgQVdhYXgCvj8plgY68QWf5j6sJduHQ7WLSpaGgNRiqoPg1NP9FesFp4al1fjFBMDzjT94ZKCTICWoHLRcfzGB~-Ohvmkr3QwPIriK77DiZJCDJYug__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832718.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=JNGYnC-6LjocvwOAPvzYnmjSWX1uD4TqvX9ZsJ50WFAOc36HON-mfthh0YuZNh6BoR3fPd2qawJjaZOU3yPD4Z3LP0GydPGA2jZdHy9YB9clFd8ToNV8QXOrYDL9KgpckBNuLicPE1~lnC1bvhX5cHDoDjISmQV1vSAjBP8pOvJhM8MP4ynZHF6zR9K6Y75jV2nspxjH8F4TXPuP7bnf6XvZAaiTLKUNIHMdD6K2U0s2GGm4iWW39RmF3wgEpJjfPRLjQvdcokM-oH1mHWJ3TGqRPLeQkjMlVGMwL6Mn5n3bvylRRFAvI5XRPgyENCnW1kdW-kQdTG6fILa3CdV73g__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832769.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NjkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=G2BRO90xeWaPsGtFo-9Q3nNY1-mpXUHqWYRE6woYWYhYd-PGqY1VsVcjB8vy43ZXQHv1QanxpzAvgU1Re2lsanc2m9hiszTJmBy0DXLPEj78M0JeqSrxufD4sCyCvXOquX1CE1HsxdRKL1rbH31ypMhxsPVWNH2VpQayft8A3W1EdRgrCW7Cbzq4tXuMTolS9X9UZ82IE8StlhgkOTbhGzImp0O8WG4bJQbtSjsXkRndlEK4TAyvO8q5Yp2vGO-LgWMBfvZ9Daok4ZJ8bPpg1z0qQ9tgjW9NN4Bo4ZVJR9OBmY~iwEZXnK5dmIlAzK2FmuyUs5BFm7y7mSrwzSBATA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832726.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=ErnUBtU52Dv0uqIUWCAq-yESoXlCLcAGX-eVO25WQ0Eh6ezce45841qzjYYAy8BI2jPtP2beRHncG3YdnjZAuav1~EHLJQy6btRYk8T-zb5iOOiQKm~1aNklN-eWcrG7tk9nE6khK80Whhsw2CY1tS-~TSxiEC2mAYASFEmYGa08UfAWWHUqV5jMe5MARD-qEVsiARq0AcoGUgLF~Wk~TGEJwAhkFrS2El3E1kEXT8aDDt7LIVb3cP9ucx4u7~pWFU4vcDWvkc77AivZRz-HepDVb17-uhyFj6u85z96I0e9-KMSs-v3kDDrBIzWR5vdoW6Ofz4Q89bM-dDJxFmOBg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832724.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjQubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=sqHQsKbmkDA7PQQ7MvKGO0V143j64R8~D7Q~Jt5j-W6wf5wR2dHfjUoYgy4AcBhAxN3ebzzgdYTOzr~RJ6iI8tcmY05-koHdAFAAyEx-8~DJZ3PeFJp7nCay8Dyd54IWbQizSr1qByWCLXi33lCxcjyfiZYK0FYn66LMGUcNbbt4TkuqnnFlSBIiKAmPFrrLhwMv31MpHaFVEmxG4E6UxIE-FA0klNqBToZM9UqKP5WtTHrCSBeONqdwEWY7pu~1QFwC-14cMzGQuqU8nwq-hUmVsJk2klW1kR6r2PHecymJb~8S669nhxdFsJ4jy0FV4n0PthmWbKjpcoAL9DKl3A__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832723.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=UQWtve2iYw5-S8UzOF1rshVGzVzIO~JP~GK-pShKfxTSMyDb36J1MH0fxrVI1-7Cou9ZlWnXB2boftqCWaCek4l~vxTpbBBtPGbzimZ9ki-MnSuQ0XwS6CmtRPVQzAWrjAl4R4heCxLcsuLeb0yNYOEzVOZDuBjAmbr7WRolnELx5zmGqiTPjVpTGu9lTB2C8WW6reVH9I2eTgFE4guFnLFl~ue4ILNbPmQSuVdMQhmNHa1gBRAgCpGfoK6kcLDv8G31Ao1Ngb9ZkDZseCHWI3PD9rhuoJK9SL8aJ1pBDllD9EdrsRX~SkjKjeFpMOnc~gs3ei5kODiYHDU6fE1aqg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832698.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI2OTgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=j6h97IjONenqF0wXKbnAA0cGEvH8hyq~-xdEcl3g9y1SRUVPTH3A1kdjRdTLLpFb1CiFZug~07lNlwueqe1TzWSjD-~iTwJroY9lHVcQ5Y~oiNln9zjiwYCIGKjlZgDfRcwv29VAxGtUlQIaTe7C~iZJY8TA8FVEvDtXNah4OTW4WiXeEM8GB11Q3Zsfr7vHyXcSvfCjrZ1FzO~rch0~gHaArrhcx0dCwJhrPIvBZEc-B1FrdOjR~jC8K0nA8kzGMrkxOx11anTe6o3nciDNPkwPRCEkkWruvEyTw~kWHvy4yLgR1adMRjkhQ0ir1Z41ilaV7mouMT2M1VAW9gpmNw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832722.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=uJY7qmLmSMCYzAre4gSNpCJbU8ho9g8ednd5HdFNN2P1-XNEFVdLOlkR1e2C4AHCSACKFpl2BhOUjwntABwDOinwy8q46SHC7glNRZVe0zI-K0gHso7mKzGhVueI9BtsFcm93WAHiW5CeB5W8WyQD44WyKkGQZeni3qHeZK5MJSuC8R4ZiJRpcIL1zS1ymjXeBFRR0s1GRNlSXb7KA1Twfsli6kfMLrDKzaVnWVMsa9F4yrdovh0lOMZJ4SSbtIEPXarhuXUoG9c~q9yRBy15SPqjv8IOIFqfyNFc0eVhbxV7l~vhvnzmcDzNcmyNaYJ0~zthoxbOS5-ykKr98QxwQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832721.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=OyijiTpgCWeNTeKgaYtxNmYVYFIdpPwAOuBZYjAbnSYHM9em6Y4m33Mexm71dJdwVm-FsaSXTH4KVBeGjiCkp-NxQshO7n5wXp5-jRQJGm72LgxvB2gZtIpYjuPNScZml4Zgb-2IyEvh02AuPcdRobg-ezIBhQlMcAg7EQyXTlldx~ThG65-oGgsMYipnUX0sxV~rZMfri3ZfBFC4Zh90pyvssMf5k4q5AccuXH6rv7oKXoS4OfJdnWpyW1jyni3DCnV18lGvBTW8T6PgnWDbUVMetDsh7aQSYfwrY34PbiqvQTyCavdLQ5jGjHI3Jy-t2mhsQtlvaXVIC-VW5VYfg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832720.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=cAsWCh1tIe2znKEp-EgEbLUwlt~bj9kDs-fmS1sTPzAgKf2HEOLBL4FIzIhNvvx~viL-TDYMQ-KMf0QMx4ygcVWMZveH5GQjafDRiSC3FWnbO7lYXbXzYJ-ESaWx4d-OQv76OLGe1xNGdLXsqdZVerhX6XmG7-v34cjaRcYX7wPuVLiHErlHswluHFgs9~Nn7SmgF7d6iIJECcsrx8NP57Jp3QWh-3aPab7yWdiejVnnfF2inN32nzdz3VY3PveYfJeEYVybROORJ0bNwJdbhB7tNIF~2Einc7xoQ7~cRLBScj-f0y3kSd62-QZW01-bLCfYan3tcgrn3CuIxWRUfQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832719.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=r4GUDnZfuEREVX9zySDkGmkbd1BNR9WxfBZgB8WXP8Y3DuRW--5rJO07zbd2EGvZpEEcfiDJk0cb0IKJaCQEC202GPYqEFbGiMzYpBMqQ804RSPVmgM0uN85VzYGFAm1kiBouk5Qc9A397j9ZoALdNZsZV71IIjt-hGwRQJCBeNYxL4kIOgUJBcOtIDrEGYb7f5yPZgeT~fG23wv7ULRVyq~JtnfcdfrQ3DdnvCCcZ-zz9yZuTqu-1cjeXZy8QadYoErxBgcEeta0qFJpt~Fd~ccu~J0ncJUOinmwk2pw7j-4OUcHwS3AJVvT~z4Ac91J~fn0QAmlf7snGdeoHlqKw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832725.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjUubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=TMWvYzpUWKn3R6ptzOtuFFE7F0uDqUSoDRjZ6epj0mGhcmOZqBngcb5BLslZsYVUnXow7KnoeaxziUY-AsUhoLJ4mOcO8tCfNdKnmN23oUUR5EyrsaTriRNl2sBWIypN6i-bumyBMSNldJFij2CgUmL8Aoi7~YqPMdiFtwceeH3AoGbWG2J1qf0T3OH1sc~pQbQTWaoB6Kn~-69icBvnEwCrX6CTBbaE6qTkbybV2Rx0jDQ8ThEmDVuMggUgzS37vVFeC~uNI-dx7-ALBBlUfikE1EDQb~3aACIAyYdZdvpRyt1wzcaGtzISNcfTBll055IdsXsHbj5EkkCZ~b51DQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832696.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI2OTYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=KcBSaJPpun-Idj2hN3UkRhx2nTP2TcQ3eHda31q6XTRj8lLqKlP~oM4tNPulTGTrDy-YdGRGoVl~JT-gyNlpW5WhT6u02jM5W79je895iN95EAfctzwCuqrRn2PPHTebiwxuH1aZBWdQic9KXOShkzzXA6Yt8-EGjkZmYb9qulDZbtHDVDT3GsBjSRHbv~Fm6z0yaqorwJs0vIrtKMaRP6X4hgHpsrmrBaAVVUT~IZXOCu8whsZaXhFhqmHd07-FIUWgkl1lCBU27rH9bfxTl7MYRQWzIu-13WS3zVAVlPtJ5O9Tn2xqqFInNiTDLYsYxTEssFU44F47A4l6kSB4wQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832709.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=myKqApwn2QI1z2DjlkwX8UoPTu8N2pWiN5N39xmswn-NvV-ZTogPdKSyVz5p~Ao~JgLafTIM1DI6gXdT7-HghXHkR1N~wb2RBHWaEG4V3HJBACGhcimywtosK9t7QoC0C00vjEqm6ceaX3cAqdp8-DZRjkg4zvC1WSY-rsaZ0IDF2dNO5v8ySIb8LQlDVBLOuFaqHMds0JSUhWjl67ay5KT1z2iU1EYetS5lnoMnfAUI5ubciWHtFP9sDO4NJkAxyEEZWc6~iML1lqkvTriJajV0S475QS~k6NyhpEJcXO8zWTttaLpRe9dmtoU-Yp7KMCnukWu8X5~OUTIfIZcTBQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832708.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=kQ7ojQDN8WxcUDcQ~Kbh6d4EliLMWCoy6hQBkA0ca91czxv9XU2HRV8Bg5KDUD88laFiwgEmSykWRidSgmWZE8ZFEeQknus9uedjrYlR~z1oHFS-yz-sC5Kl0NJ~0LUQO3xOHqeA3yH0G8YN~4zsxh0IVil7ctyQcaX0Nsf6KzD576f-v-Yhm6Bmz6FAARy2opDdXIUM~w2tVDqG-Y76U~-QLiRXGzLqUMuh7WnT8SoPtOor-TovOrB6OgUl3I3ACJ4s5mpXV4q~dX7dmC6CMk0xOGFMNROM6ABWXf2UmDvmEUqyGZO1GvEouYEfqc6QPYtM0oV80NoyXA0h2BwY-g__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832707.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=gCTu04AzGVRShEJWyIwo9~QP-1gvetgYnumA77gYYQykrT5q9HeECV5JPZ~9aMvlNBWbrdWLk3Q8qTNGBAIEJd5VzEqgJaZeDVnksDCFWMr0QWFVr0LRvNqGDXacnYNkQlyD0fWFV6U2IRbtYMoBqjlV8Vw27WgRz-VM9R7eOvS3fM~wc0RiIqqih5WF72dE9~AsGmTsKSkbwJ8zBY7RioAQ86sJDCTh8S2PmhkFMBCaq1sXQpd56nW4mnvQxqeromal2-b4PHh9KU9-t2uWJ0DPMFyrwtvJ-dDUEQ8NetihDPyvk0AfVhXUjdj6oewyCw2k9tvrkkf07i8sk3dVJQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832706.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=tTFAjjmFraT3AWX10e7Ho9vEiJTwVk97obzXqA6h7X4FvW~DIEbaJ0b3QnXqYsG8VQhEOFnFUhcqs~dJ~Wnz7cMXdl3~1gYcm4~YbNGQkGmwJ~ALmJcAB5Ysgr09-z0IpC0AUkPxy47D6C2XBClL1VQLCY1rWTrKJZHwmTTzdglKII4P9mhw4gbJXNd8kQH7wktZczVKnNtV44YGJdEdabjfP2C5FvFh0MjF-U41qz92jVA-7ejnIyr4rIgFGqkOlzTyu6o8HRaWnO7YrBuJbWNaxi1lnOHRFxMecFMvP8b89GxjBFLb-cYGj-IIdtIJhDr5nKrFqncJpgV2PK4fcQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832705.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDUubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=NSfrLzsrGysVVAuf1s2mfqGp0B-RuCmFMTi0Y6L8f5t5CrphWcZmS7CPXDqAf1BNCUH53dlWSnPnBmr3Noeo2KjsrRSZMk8XKfxp3-Hi5EMeydpx9nBk3~TuWpqoLy5F~lPePERx5XoDk8aVZuHUhfvOf4e3fqmS1fTJH00DApqnx8NHuYI7o42IzZYERsbqfiRRFAjSVH4NeMaLftjfjItv183Pq89CJ0Axx9~SvgyfKyfrrXbWQIadKrpu8H9EUYznDgi4FiqIG78qwFbEOdi4bjWcG8c1XBDnAL2C4zCfKFFwfA25oA4H76Zxi-jZgiAkRhAQA1CFFRLQL-tUUQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832710.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=UmyUJ1yzRFWAOdQnP5QkMy6JhxhX7VlHLyBOePaL8BeJRtIFHoquIiQ4SCVIKZbhhZs3M8SnVD82Z1jqpJBsz8uFXiRK1TofkhNTKScPEi5QuY4QnFmJPk4jz4tUGWg0bvN7Y8EG~POYgFZVt4zxthSuJKTs2Gp0cME3vcK59XzFOjkZ4yENIyz91U4UIMIG8Qvrp4FskmCAZW44mW3GDOOhXP2rObudVG4co-N4yDXd1HWcip0qNEeA2j5lGVKtySobU7gwKLWvG1EYrCXui6sd8JpxFhljY19cE~I6t5JnImuzuq~wAxj3E8HdIBWxS9XlHLWXVMeqAGTxxJwWcg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832767.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NjcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=OO~RvZorjII6B0gg9NI9WohdPuOIZIoriY35zxjurwAzrOs9UieJ24cTizFOY1l5i4dhZJTfhvXU1uwQgcm-~JN9O-au-giS~GfJuw1ROTHTBtcSeyIGEuzLA9wJPD1D7~ec7OtK~XcQ5eeEAYIpL0~HSZtILuH~G6bf-Ri0aUpB7z6kUstwXuSFt0d0b-9kpSIA6l4waO7~D~yZeEVFqTT2Fiao4gHBoCa42rsBT57BE0cGxu8E6QkPzAuWAypYbuutcSUlsVDDPVm-3QR8u-iuYtHoBTREu11ZrWLKnqQN~Z589d-5ewgYqg7zulVeemX0LrMB0EymFjK5ctmvlQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832703.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=TEaviXnw73eRuuqmqu0NHj5-j6eiYrq0wRbOisobjxjCXZLdU9m9jXgX0vtZgFq9cyoGPoO6DoE~Rodzi3qPFHluUV0uQUBahcGT0YssX2xXJ67xE-1GcOiCiNJ7OQNFps~Ili816bCWiAFiPVhYYHUWMKKu352BfvNLP6qvNxNu4EGQF4tbHm8~UChHEvQdgz~MTcw-5EeAi7dR908bTJW88KGT9B1-X-3U-uQXgHk0kFRL~xIdMaGpksO5iTLQPHu8NcoMVYLIykUwBdqnL8Lu-W5x4y4kUu-RxncQe1I3JUoWYqUAV0YyaCUROZL7bHMcR6HLiMp5qVNIyjLqaw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832704.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDQubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=VucPyOzxRGMDGK2GldcA-9yG1nOEqWconAXJe0HvXhKyh5nfIFgeat9WrSf~YYR7UhuOAerQ1NbIikJ0B7SVzFut4T37z2zeLLwn4adkZaJmwmbIsOWZlhH4HPioFTgA2vKuG--QSXnIf7X9nzA5AfNofpLLUtHUkPmEOS2qyMQkVG9xQ4FLgEY6q~x19lF2xnFBZV-KN6Sy8Wmay-~V7t7i13-OuCNwGabXGItQqfxzNiZLl-1L~0DIrbngSZ-Gv6DWyOl4~e3zZEfP8R1ytOzMRit29qwTG1nhZrUiskoMX9R2gT2KJNgCgeka4C34wWUbqZZTdcw5zi8NO9xrtQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832756.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=ePLYSW7ctj6JtOTikjFGurTdWzhm7y~kMV9M-ue130y02lrUEjaE0pd2kY-D4c7lvf7gE7el2ObWiiW~yGWHJ-xIwClbQKKWLk9L6qisefhA3ONJRC6KgVWlWPv3Ow-r9W07Vek73eqJ13JwCf3SEL-BGEufUn-p25NG-yCd8y7XEAEar7IbgLzwwj0gdqvaBBAAg9YptAKq~qoUo9ev7F0sVYBZmYv1pKMi31AxDyte3S0-WWUeju5SvXDjH0AuXIErlj2pv6FdTudIIZBYWYvZHNKwFVTwRJXd~dFpV6aIpB-lQruR4CqfMmR0rGTl-h6EjhoUgdhwWy5p4n9lHA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832757.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=kK9GmYcKk42C12~fguNBmRMmE2ArHo0ThiLiu~AQmd0DhK7mCY1bSJNdjY~FpRnxFEEcf39j1RvRN4mQcL4ZrSTOM~Hwsjdswdzpn-4i9NTpqIK1TPOqToOFLbqGhZ1MrBmop7GLihSA194yCxAE2UudhNTzWT4hsiouaMfFsBCu6Mjvv~nGXAH8SCNGl~PzK-ZC0t6xrDFcmdHec02qBaK1bpr1aI3T9mTd2bdRdXTvP~WKl5FS3cOFraUdZA0itgwgZz4mXxEvWZrYpeI3WE4MXlYwlMJEJ8SvaxT37SgT1DNlpGzH~dxSo-o2TYz1hCMzQ3wiKPgBFJxA46Sutg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832758.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=BVTCoD0JR36Rn8pWsQEQoQalp2mUSeLKrBNw9ZY7l~u0URrxZngCcXLFjZaT0MCDMLeKS4GCEdYYsksP1sHIwhs3iOFjDWcKL9~wPWNMAoYZZBJ0h4G47UCP~-YVu2aL6ht3vBAp7PPn9aCq4kTz-y86mrqKFcfrHYwvOar~WYaBM5BCUDCWQ0s3VMtvZqlpUCjJomAR8hYxbNH9dibj-3A4G-oeRpDlHt5Gh~SkjfrxfEIaFC3t2-3sM1ah379mWbYWQbr6YuQJx9LNG4dqiTrWRVLt-p9IumOS6KKsAdnt-gvwfFWMyWRfaSp5GKAXv1XpMCGpBZ8iDDSv3cnCyQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832754.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTQubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=HG8B3KQBrleP-YgvobDBX1bkzCmyhDeqPQEjIzejEoUiObXZEuGB-Uqpxb2foOfvjI5QLqsNGy-wyqUHaor-wQvhK5bkdEi5S3mLVPq2TB29law4dm8hxT48hOaVGS6bMAalUeGAIV2hdd51pANInLu0qjTuRU8hjZMK4wzCoIEt-HlevZfrsxOsGPURZDtqxXdfiTakxQqm6TTkELgxFO-dh4AhGTDJPcMGci3YguBg0HBUnpYP7k728K7acuG3g1i-PZvNSFMeE1dtC43FoT1wzpcsRiiteUKldPxk7NZ08h16H4QSAS6kiF4huLc5fYLbcS1dixtZDxHVi17dsw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832753.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=O6q-aKr6HEZaR0nH2M-Fh-FyiRH~cg5Bv8YBXq2Iw1ox9DlwJXY~gEFJFVFBK~8tC9aOUqUZpF9-VlWLIxLhB-hLQP6WyBQM6ywty8VeHxb8LbvhHLdUG7EumnmtbuCnYEwM057qAUdkRvnGMdMcVl9MpdBefwe4NlqVxuOPuBRcXV6GRv8kBbFg-gwaOiAINDjTcEcu-9cbZAN4b6rlGrNJF1GbLN3WhmJfZ9RT3OKp-TeZsVA2ZawCzkFWAUIwV5NmW3TNa2DkHuqMtcQYnZ65UX3VaEd6bsBEhVVqf3SFqHw6HghSbIGHwkaT32Rjk0ic4EvobUIXQacIFW5BxA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832752.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=n3FzFmuQRn0fWd0FNSmMBG7tRhIZbqAkjX~Y1pJTQY43pTdxSa5RZm862J-yuJlelkx-QRiSFgd-dfatvChNkewkoM7QAoyVObAzQ8v1cQoV1CQZJ86I5iDx9bs7pRoEIs06zP9xtRzK~ocXB0ygvkuEgN38O-yVvfUJPNv0XdVCsNC9XFRts3WqNVS28n~ur9K1ps6yaOUz21cxUHXvGtIi5LX9Dzce~Nlj-tD2dmHRYeUVg6IGMEboZXVLIYwca-uy04Dz-Wvq4xsoreDVAqmEkWQQP8aFKjkR8493ASM6yTzAkYvOV5zB7kx~hgwd~9l19eIGHiTfjr7GTIegXg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832751.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=hw82529eYfXl8ElTV9fA8w9Q7xuZNSwotyDV46q7T4ZrSpu-iMJgAP~Zjpq9vBQ6qFS-0ZhnuDF1vKeje0vTu4e9A7oxm83G16b6EIEMacnPzn92K-FbmZ~cEnvyaOQzf-XsvHcqMSycTsXLqy7cHXCRAi0Nu03W7RIUVj6oMO2D10W4stOV7LP5xF8~2CrR0Q4eLgAU09jEwugpkKytWi73stwKh-99w65YhzNOJcLH7sGQP-EMlzzwQW9qevyWHimdSeFT6vL~6lQzpxs9X9OuUrNGjsIqgWdoOw6MyQizqMxNMhjZ5z5dNcxPR-8jZVhTZcu32ohRw8QVJOXmHw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832773.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NzMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=FGIAONGuK8kOni9vfzqN2ihNlRkkfZzA72yXEpUyyeghGfDdz6WztwCmOJ88vn-c6hcPLL~7I76-yiBVAnEac7-3cZQ7kyuuyb8-mxHhvmb~35aRKmwhMsGpyNgSzC7bfgY6hqmPlJioKimOaIZ0a2lPkvDmHRf4fHH0-MRZMnPTgPjTOnsY0Pd--Y~eq6P7DmBkvribdhs5W1tbh96B8YIOYBPSURX6N8qD80tZ2lFVH~5UBY2dQnK8Poe3fDS0rbMov3Sau-o3NOMID-CrtOWF-ZTruq1ZIzRngQVw--BXidNj9~Fqu7MxS90GCGLJEZ-e4Xw8B1dPlnez9Edlsw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832702.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=LO~LRTKZoz1kab4R~N6X~dZQcvKBIzEIby-bJ~F8vclI8IgFvnh57yC807wcNTdPLJ~o4buWg32yF2F2nyJ0sw-YkZXTD8PMDAR5e7bMwu4L2Ut-pdCO1klu60MqIUNAg9u0To7WKC0-E2eGAn89hnAf1U2Z4DHnvYv5UmNjMfCsdGnFsNJbHIdyGkhiLbUXPT4BiL6DfNeMWS5NVEKEoL2uq75nVTIF76LQwKr4tYQ6JeZQEGB5wlaZnDRXAQQP7OjhzLTEXzDVza~GiBvS2AwJAH66ZBk6dtWWM3xKf0HDQ9~hv5JKcw7fVsIs6D0RP1jAvu9W0h7892ITKtVDyA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_hls",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832755.mp4/clipFrom/0000/clipTo/120000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTUubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTkzNjI4Mzc4fX19XX0_&Signature=Wk1AY~kmY-nBKQEOUYIrBg0ncajzVtFMMlvQFZNeoyi1S~lAfoseGkTishjZbaSLMFmZUSb4Vvl84uUjJpiBnY7KnGMBXDAmBGJlsmMTEVFNySOkdIs82~g44vdN4McZryNNiqbr68dCOMMXcRGXNGQ9EqfmoY58iJvz4lpXv3MeOqOphnFedEfiLqVmiWLt6e9SvTLgaur-fopbzsouji9rZzfXaB6ZlQghMVvhZkwHU54GDSp38HEqQf6-hLRBoGjt11xH8WVAG1z66g78MvZrEuOJqITctYOG4TWCV2GQQ9rtZ3J5hGiqJNbch-Tw2t5vSupWBpdKHw46EOOaJg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832735.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzUubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=O-ixmxGO2lbozKL-MjCQavVEwhvxFxNjPdEp5ehifK3~PRg8BxLH4CX0~OxDh-Diy-RMkQJORWPFWBqJWfwe5mfvAGgUw0D8Q~crYjBVyXybujAGEWFjvYQ0zj71F4~MgEtc4m1V4IivK7~eibDFzWeAkHDltVfUDZjJul9iQUmW8PzOJH1xASaQmdYyBmX5IKeR2BIJ0Bv1cxKac8GCs-VSiQQB0NO5erOLb~rJCPE5nqi9XNiaZljl0PSx8MnFguI~GzxL8fFbYDR7M3pCrFOCjbb8g~Zh9HuSoMt4n4PI53Uwb5YfKSs5aKQgOXBWGF~tPeFkEoVQq-WIXHc6VQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832739.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=VjxrnaMyvNcfLmtBtD31KXyxeul-11VYkAurVEzH4EhWlHtavboM-Ae8Q4m4gkHoIp6~g6KqQEucFlxB0QsGJxTKLVB8NkEXmU4n~80Eubgu6LuebiyAnR0J0NPDAN3Hja~pcZtwFQtmhBlcsY2FEzEd4NB~NQPDxDzmw6FaEZYlXioszsZF36~f0LVIOef1FqIfNPe2KIGzmWb3Jp1BdpSed79Ltemt18Hh93Pt7zeaLrdsRYExNjHbAMAvKL46l7ApneIIWBOC9kY1t-YcBupFHSm5qgLo7la6bnVQbAqm4cUpVAwqVNJEU4c~69m0eyjZ3gKhk90~U~pnf59vZw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832736.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=H-gWsrNj758XIUwXfzh0RjYPzC3DULLl4iu3fr3zy~i0v8zUmzyiex5CARzDCOJh6u3BrwBuJHjtWV~xARw8aV0CKSvHmdXwJl0wp-BKhlXX5gZ~vxPlocn-1mHsiJH13jazBq3mSuWh3KH9vha~l7INQGxrQyOa2pR7sEkwB9B6DGlcXLFzHA1HDID~1j~uBD6v-gJNykrtxQnsly2smHr3oVBW~ATJNUcuT03SPsvN~RxNivpCJ0kkWEwU5~a-~84T-QUtooRLCMXZAEG3yv7FyPbd~o~E~qVAqaNZaoP~Ry-jUohirhfUfRsbQJl~ch5ELag6TdEVF1HKRuMV0A__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832741.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=qs6cJDroaCBH~hYm~oW7Q37AYlP2WW2X-B9yqcTEThBo8eF9Q6AGjH5tEgBeZwpAonyJ5hgyCCKChJdV7HJA69RIbgxemQW4CTBONSJrUO5fUuPOWhYVDCicsJGWrRJeSnx9MVKLlFVUVzyFSgsgGrA0ABO9G6AgOEw-aNOk52B5r0BRGBYNGz6jHO4OaMWo8N4ZN8dAuNyQbl~g34-ETrvlv034hxy0hrB~iXwcNc86XOZ6wFMrJp3Wl~7CfFhPzarOePd4JxbNjxmWmVf1BEoZ3XoG4aEieV2NbUvYJ3AUZop51EldZuAQEa3penOqUQY-tJyMFnJ-dA4aJdcxJA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832700.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=n-BtQvutjYNhNOAnnXWSQnOBYfgtE6iOMNroxcqXIK3KXUlMv2kc-TmXw1Shkzdih90-bPoJPhCKq7cCBGZNPn3X6rxr8EUaZLLVf1OyHPzGX4z69cEGHl0rA0z1JcFf25hqWNbOCl4lFKDgYHH6pRxE6MfS9BHXCO0d~v991IJ1IIfN5mk4qkmMFX6piwJB8vFE5I7C5FEg8qB4WsKLt8cIwV~etyIYX4f2M~SQQxbHu5cs~5ysEzLW6TJiR61qvFtL8D1Th-vX1hPLQC73rqOdPgi1hAbKDWW8fCaEtCNvZd1KMv0qcrcEVJBGRFd~Zpo-ub4PpMPA~5KSc5D4rg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832738.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=SJgzZEg2Bo~ZkzvJZM-y29-mQQ54X5wvOEhqZlo~yORVkutPGkcK4B~-4AirfzQaxlTtg7v6KfV3qNvMpsoVI2Klw1iqBbYjq9QvV2nkBUAn36mYwsI3hGqSuw5YUQHpJ-XaW-E1o4y8nfDuuCDBeS5hh0KD4O3JGy~P2SmL~Qeq-6LU4Dgkos970FBvfa9Enr308ynAUgz0A5gxVMHzt64j4VK8jC5h9p0SAjg0uikJ1C1d4xLspwz88b~21YRWZL0J9ktNsbZ1IKx5SrgE0bMxeSZnIO3y3-qb~~DxA3kn2FbzzvkUHPIgfwI62HObo4TjbIWpis1ro3QCn4IE9w__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832740.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=pRQIv4SIxP~KZabClC604DSiS8UcD3ZwYrsYB6QBTyvOP5cWL7-XeUjAtAWZKsVkxMM1TgbRjnKYE~QGlg7dFl-97fBISyRdPFh1YBvO8xXNnXq~1zysfCPIcX2jxr-E57AiEL9hPhJtY9BEW5oiJaBzejtzwnOUOrC6lK1gN1glZ45IUqazYXCrlYM2TEUKyVqbFn57tcndrXux0s9Pakix7jH4LrFA~HDNjwrhOoERVQCdmHw51txV2AXI3Wi0wfcKX-LdH299Jk-gxJVcYRXf5ou1bMEyYeInUB4LYffUH2ImzFbb1pmuO7DUh8fyhl9BidMPAmNvd9ZqajGE-g__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832771.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NzEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=RSLkCCe3slGfbzpD4T7xhm4zd60HGeloDv09AEa3LbeayRtOWnVsDgs7YVczhnWeFq9E6R-oHSG2zpAWePqovXMzCYVNLQeKhHa9ibuyOWl3cnGWg8SD6N0MJrNqHsCvU~w9Y7hVkP2-bY7cXSIvCsdsCIpmTCOD3NcT8S1quQ~96j-rcgrOJk1SbiM0nfOR3kHV8jfwEmqoUa5uvew4dHsVz-euJyppL-Xl6RUU8Ox98TYKqxJqr4efI5gaZT8ChFRm07mlHUEQNbw11NTdcKcQG-LX~DlkBDfLhkg~PQ-AM~BvoWpZvW6us65Xu5~4tSc5Xg7hhZAVpiHXVn6KGw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832742.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=W18eBlVWDGsgwg642M59qYxTPsQUOwYVDGMwOKYEODegw-U8fCmBly~tuyUU9PhSZ8eIXy8e6W2erdjk-GgLS3nk9Z5vDQruyZ~wXLIySAPtvkUJzW8ZH2QEt-UXNt5I~7HEmucKS-Rn2-7984O4AoVr33pUnSzpWtJqYWbhSuhkHe6xARubc1x9Qfap9G6hdDZtVGkKpL~RhvARQFmSJ20qHBrkQCAns8fhZ~vQieAoh3kVVNz~AyaDnYGhi0iCR2qdjwYLyMm2z5TceMG7s67e28LWl09aDiC6~WJTZ-IvNF~~Jf~6qqoqK3sZoXT9T6-fr5EFbRFBt31b3fGDWA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832737.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=CElJtDgzlWFd~11vK7ub16eQOXjkh4uy2lB9c4R7F2gI5M0aA5yKh1VPiKE5aeov3mC8nOYki2JIiE-37msRMiDhGbtQE1JlnFzy7jLgXOsYpkNMzQUHb3-7nVPMcd2dNkLfJuD5PDDFTMyVgAt~JillhWa3XQ3IN1GO3OugAx9zKDRZJn~fFcg8DppXyPRo9KFugPVwqyjphJIxyXZwtbVvUclhWJ5cj~0W0N02k6xeKkHY4gzVNIjbn2QBSlCOXLDbMsKi9ue750AQKLFsZvoLgOEez6e8mh6caU-ozWaFaUM2Qf7x71rorAt684SV7-L0rtxyEoeRuoo7PD~RSQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832750.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=DyH6kmR3AuUUL3rnVU6RYQBQreCETC73hmhOtl5kKMmAZA~FTphSJ4wtPOj0uO9OLPmdR5PJBIYS95HfN7Pj7VOy-6OcDKA3vD5DNEYBnh6qVAl1JsDJbWzRUh3gDHIcplFnlEmum68R6tfOQDqSSZRVMongmP4ZaJUM5jKovohqxQgEM3ubfr9PZP9-hIE5lzgre4a4SfrcFxL6w7f6YZB~-z61B9ih99xvpEX8PNxSozick5X3o1qUZk9YfOYZv5q~PrqrXRVkUjxxtjSkm3AbsSYmhQlD034lrJCg4eRzGIEoaX0TyK4iMQxvi8Y-iNOudBOL2olSBTjsGRtBAw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832749.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=jfSRqwS3doWNuVjGKyZUXm-Yx1ef2C65sz3jxa7uQzbdADwBkEYZIGLVvJsSpM844FpOmlzRZvmBNoNdHFtRQ2NeNTlaAiGRztui8cDPmO2NG2jbZ1f79VJiaO8yrIGVxUVRtq0KWnKM5M31lQxVVQ1mNh8EFV3vNIehDUISaaLVET7EAqO21gJd2IBnwuoytTy4bao07ijz2TajEa729TDsFLzoemP4fnUyrF4CywTLPi43cAtBbH8QJwKtcDm7wQKmwL7rR6zQ1z3onUKcpC1zFAqidK3lX-kbYxugcSC3VFml6NdiZYhKVr~nEFleFQGMaEB9sNRyv-1aBE32GA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832748.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=gzTXpos7-nbVwhVMrNgxhE4BFhbITqHOe5obGiSO6E-EvIesCToqU0o5Vo89Zz-Jh8b67m4LRMIpjyu7f0ewSVQU4PE6bH38dx3QOnXfcgBIf43Q8nId-GmN5DOhA9pMR8OEoQvr4bIwWMirf6b4BjfUeo96c7sfLNayq4a8OAAZaF~MZKQUtSTTfzqncIx6yautbTISNUnzkYiixZ6f3mVvTIl~R0q4dvO9uiwegoG~GPXhAiGg4B3UZQSxegZlPcTLdNV0TsSNZn5spSkCtdUmBEGOpNvSMygeHi0O74K~GOev1sLy-NoA9COKfV0fDaS~SwlhNglYCJtcD93QHQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832772.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NzIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=pZKxl2Bh0KOAokGfcdVSGX0F5Ci9t0Pu~05J5-q2GZFBX6M5UBWtiiPfSwr2bi8kDg2-qibTEpcc54ADtxi3ybwt4deq9KzMpsUyDqx7FJw2SQ8mdyp5a5SjfXBLBu3uRM8zV~EEJWc68kurdtu8RCZfkTQdecdjbe1VZTO6jmfGgRCeDnkuFp2z9gp6fGk7I2K5sQ8A~GLYUVNrjtm-CsTrFB3N~63AuBNp-sBHITNc5DPlbG3jjhvoGowdTriWnnjWpcO8E6zSsGd0ZZIOmc3ThCfww5IFkjdtNdtl~ElX5mb-BKjUShgkD-89kVL37JknFfse5ZWnN-c2oI-IVg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832701.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=E8ijCvmmPFctPTbS8LPhqbSioaV25V3Emn3k6bKZSX7SfmgFU4a7jWL-tkybzil9We1IlFEjkTwNWfq0Lgqr7G~lm3DMQ~MHJRtSvi9scqCduRoIjQmpCuke7d~yEzH3KV-vVGblUp3ZvYBETanRRMhbThT8SXydHidlZAs7idDOuJLWNUlMCmxE5THtqFRzvFA3yOhVm4VgrhJe40URiTEtLA-3pvTVdccFy6e6g5Z2SC152NomsI2BO3xar~03iK1MCFF-5Tn-nkQzFjs~2cGqUjLMB5XHxf6hG0Glajd8kEzIGGNGXBjc6IkopKVIwhy3zNcaVgeSSgTn9HUGxg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832744.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDQubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=q72iEkXpa8HF73QHF9rnMoSLcPjF-iJtqrFGUeJ1-HggXpLttkIYebHJxLPxFp4o9krykG-4C1mxY~DxOeTndX7C4jSYeU3N1f-V1CrIc1zR~xeTvX93Y608R6FP7LTU5w01g-NIVK-FE8WPfTn7xJ1JSwiThExFsGzQTmPSoZepaIuU8uGmLxJdAJk-ww~vm0xEZ-GJcNIFawfTF-fhdJilKXyCLSzIRcnl4FAiLbdyFmQePIndd9whwgRcGyMa63EVrUF5ddvDgpREhv5963CrHIgBW8Mm3CwOGj1K4FA25j3KL2J66pVQbC2mgD6PD8Bs~JN9lUQIu-BBY4OTpA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832745.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDUubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=TAswcFbQwOwC5la-s7Nfn--LRBzUMYXcd3JV-DwhMb~beuVEvA8QRXBNMFjOMxkn3nQgLVhaVc2O75TfGxIo9gbxPVoKmJj4Ly2hKfj9kTN3GrRoui99hv74G3dE7yUq6nyRW0qhFKCHkQxrAVXNFbJW5Pmx14G4VlrEWs7LMtssSpemZu7G58jlkw8dpCozYBUFHzGGBNyZPePaosMR8kalC096J~nh4l5iiADr1Pz6BgieWOy3XWPoJ7gsDIzQHI35glQioip1YtPgNCx6YfN9xcU2T9DMGTlTEGpdtLvcyJ7Zz1O7-ZJw0UkXVO6E8ep2iyl~YPZkvGoMCZ9QPQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832743.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=rLW6SNTJ11ZNPSvd8WcJ9XZUVJ-eDbnqBAaccskeytNTk4A0EShvp6W8PA5f9~m~D4Ruzfy5omJo3TXQKM5b5B7jp3sFCnX-4oYOgZmErTpWF234oOheW6iM0WsgLgubCdJnD7xxszODbz1f3CSFhIEw1ugvsE5mKb2zjk-ayHGb6V-8Fh9JyZ0BeiFTUglDGStD2fayqXbNkg4aIaNg3igyL3Ig9Ek~QwLM91adTJjzRi2pq5i9D1JRBP6u1~HCx7VXgF2uA7h6R3ypma3M6LdLpBin0tS270ukKp~Zm18VtFYt-ENylHvteZHKu8sJ56kqdR7RMB9nRcZdvQVNvA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832746.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=UACbS4gaYRpLl2rgm5k5ImIn0NbHd4EzrLL3-EjeAtYu4SVk-lvAhjHzDmoL0DX0Zg~knyFnsW9puDddjbUulALlmSp9xYZeeEuQ3KPL6OZCZO6YGVqwWa7m2MxOJGWiN4vLgmZtZiZ3yV9vNdCvjYJpIsEuclHDM~23Ayy7jqd6Axy7CwHJu76FkEXJFKc3RnY3Y6dcNjv0r6vchbA5TDTl3hdnTv20Ne-CX-wZutO~uHkOdX-MdLOgZ77-MizjaoPlXOJx2ozfTM0BHXzvyuB~KZpTeO0OqbhPiaKsuo7xmVify-XKU4buf4u~Cd6avE~aaaevH~-kTL9mUO9R3A__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832747.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NDcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=lE04FxFuv18WSY2qUEjE1DdN4Pjm1hCjQI4caWtfWRYt5Gx2BNqHvXBD~xZsublRoDHRqFdyMpN7SBXnmj0vZ0nQTFyi4UkrbvLFNnO88V9lDG3Lpr-WJEScxBOy4Oc4qhiuTUzYHosdWk6HpjtXZ3MBv-tJz1mGsMDJhUPKQ5GT6EIyXapn2uZ7IYQgZt5Ztxdnd9mat73serAF7LVeIwda3xr2GTQt0vPp2UkRFkmT~mEWg-dQJ3urnchZo97peB3Z4vY-GflMN2wKy~1ZNHdYikLMTz4PECfLqJmmqDUWsXhcecwwaj7cB2R5xEhP9U5jENGG-Q9~hAlxlgatCw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832728.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=IPYiStGLh2fvohZFc9Y7HAQdR~OTHa1Ap-p8V5wC8g1mEqICcTmIFlDkkJFS4FyJpwJpgLkvMg8XzZxTJSyodVQYGfEqHTk7BXsmgokJsQF7MQAHARpLbN-nzNAz5tQxUGeEQZkxlcA5nx7bm2vtCJCQYtwEH72Q2M~l~0Mi4Ns6fTjVTqNSUMSfaJ9eKhO6oegOw~neJIe7aljvUdMfeQSF9qm0XEFht5Elqn4WX00J0QutkVYIJTBo~AbMGeaHLD3ySancVdLKDdNJ~xSzl-hjD5H30xWCkY0dGlUs0nQDiOfQiZrZpCw1gXVhlCPhcLXs1u5hZ-SzG20rAY8ePA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832727.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=Br0kKOaX3XoyVgkm5I3NWqlLBmTqUdsxVRVYJ6yiW3W5jizrnstXF-69WIhOnWcZSglIiBYdCHN-hEifsgC6J~jF9TbUaTQwsT~6b9J1-Izee-esE5valn7tTgA1AmVKVltwHEvgM0ZqquzW63dEWCZSZcj1XWfiS5cD7Hwfga7doAP0jh1J94ZeNldv5gy7NHfscm7UX0me4yV4isFrhMm0x0qg7l-eMJHJD~eLUA5NE4OQCNRfmEv4IZdY15Qna3V4YdX83z9cHIJxIqkkQ~w7SxLK0~ioz1Wla8CAn3U7sEo1n2jeADDBQEpaNNEoRE7ZChlchJbIHUhlFoEkHA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832729.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=U1xI9ZGO7UGa7NtR3qSrv8HsUpoSx1XSy77AbWiSbmRo5BGAxLQmJkngtWkeP8fKThDqAXrhB3x8ZcfoRFg~2y85y3e1W4QxFafyNBWRXLMGRM6jqwTh18zf~xO7fJHqmnLamzaFbbXKVvoNZxXSW1nhKXOTkpeG8nKNQdkBqpXlTLjgrlLnQpgILGvqnQQe4yTwENOGXjLrpg8fCG6QS4-ab7we58MQ6c8C0KHMFhYfx2bkOAdrj5Zbl4om5-0BpRv8rR9maNrEEDhsr0A-i3NbPdyLKytPWO7LkfpRszl2Eo6LRv2O3wbMhIEp8m3xUc-n6DZtmPBeC0Zi1r-PtA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832730.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=kZk2IVS9bOR08ccV7NoWumNIZZSdL9c-2aAh1qi5Q8Zu45Xj3WiB2nSSA443bWDhIFPtVIJsFZHVfpzbxtxqE7mZyCYfCaZlUSEC8Hv7Q3frIc0aUtIZgLkouF66jQyMUXjW3Wl01Nq-DVzX-kMtGtBNWWZGH5ad~VEHidogU2Y8cQj4cZAREk4pdCJM4yE5o73a2ynNFLTEHFrhr1QRfUnRlx8Ir4PQXHMNZDzsFEz4H5SBLba5usz2B~7jvBc7KmjVCZjGIOG6zYenV68OHlQFiAq61ebLWgNVyAsqFdqiSR7y2DkzS08eff~OcAR0HaKRb2WnAzRDp4Hu~sTD-A__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832770.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NzAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=lpMiRpY9eaS0epQgllAPP4ZNlT8fbDx7zceW1jz1sRcW8TJ-dXSL0hB38jCz5FtXneeDDcabRpzfbuYnykO1Qbt-DEGRkvwH7xrICGH5JGtZiRnuVB6XLHcUXPAunsoyTtl-j5POZXYveEWH8y1SdpwzUiY2agmm96Vw~-KQAjP~pbHdeJiR9z8xkOa5kn0qWpbzcXLnVPJyEFzbItzfgK-bPcEHBwVqzGW5LOppb6rBJfRapyU9sHrzk5ERPza10zH4b5MoimFj3GyNv~WiNx9g0-rJU~zQKcj8TkIn5s1Risrrj13smKXf3PZllxd4o4ydEWyuyGXBFWBYruacRg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832731.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=ujfsIfH-r4Md4M5hXwojqVYf4yUFJkF~tLrwlpYlkzOJ-SIqYsEwGOMKsShxsJvdbEDsDg7ekLbyZfmjMp3LrIiG4n3g5S0Ud8stctuKHx6kc2Q-8zxrXh3jNVEmIrOkIA9wJQdasQxNqAcyzkkHmMjAtEMGrnl5WD3HTEvi51DkMGkXeOTiVE3BnXAGr69JxcOnfBjX50szgKSh36xk-g1kLeNwHVu6Uek5OXj0kA2WlsYxaZdsp--f26Ysw75cGeVzjdNraE6TNTerXwOKAT9p3bN4PSOZsZWCxwEnER3ln7AUC3E7FATult8WwLfLix7wf4j1lEToYsykTL~s3Q__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832699.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI2OTkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=Y-OVN27HwBdHUrof9yRp7ptTd0OaUldCNlywkYyzYLptD~dJYig7TZiCb4J33hf9g0I3jDaNAkHlKcbeKAH2kFPklkpE1xbdIDWyeCFPw7wlE4Ddsg3tebix-79XQdtmMGwxSo-IexeYVBG37nwqikRVuA6TAsqLu2obkoGaYBF5IM9n~SY4bVuRN0Zt7LBswMDDnaqjbv3tvGpYJBAdwOAaxY8EjdvLlhDYOO~~ih5hr-adzxtKSkKrP3CiDd4V~CuJSUG05tzJ0EDOfzxa396cJKq1bJFX~f~zEnll-x85GbK8I7qbz3qLjfd2OS5g5~x8QQkSDjIx~BVASR4CIg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832733.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=qdoh4ujc6VQDfaNwRKuZgmAc32IaRFvy3MmCjflZUtWOpnzUwlkqWfrk7Vn2PcyedpnxuJZ~TFxyDwaOcb5WhJyUVkscpc8-E-PnO1AyWlqJcKQOENQ-v4Dag4ywWy3o0B6ahJPq6YZsbfT6GXWexanMXz8OamvK8aoqtcoS5RmU32At8gwCcTjMOtWJERZOxndgY4Q36UsP9chkViztk7Wll-jMzeTB~EwgVrf9Vgx9Y28JCK92pYcJhq3pxMIMAIVWrdrlzqN0-ea4lEJfNaZ4VmyIhwb2nqeORuHszy0cX2-7A8yVaKg2-xYdjHTJACDZSvsJz-yllGcyRo0Mtw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832732.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=i3gCb7O384fkIEe1iygbXI83EMVzApHRhHa-6SQvS5FJ227LUO4Jhi1hRMpqcggU7O09FREHhzCzbcsrw1oT-SNYd7ueWQfaX5YcCzFnvt8HMAIxngSdf10AcjgL~DLN0DBthGmd~f4RUsl2osRoLGq7n3LyCEOYnTWah8BcNwybR3KsnWO8nt-kApiTU7Qj-JuCRbuBXC5Z505rOZNYGMcx-BoCXbOyF1v~6TL250gNgxTYakRzRW5cuYF0f6m4lT-vZLcXRBWP1Dq1bQnwDTn~sKPvITIxruzYPs3Bmz2X7xubG8SLL74aGb6mM1Hv-uJ8OnLBS-R73N4xMcyW1Q__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832734.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MzQubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=p-UHLbqHjHbF7ThxcFZsdiHTWyRxSQhuwhlFqgLlHlnknu748pUF39gUowUSAKJK2MLZ2iiNDevZOoUcz-34lqSzquX11USQtxUzOm43PIpbFHA97EdHRmuF0ILBW40J3FRL0AzIYvDLGlXfwl0b9Y-IPUIDc7vuflFZfidAzMOzW0i9RpFWJ3wBF9oCD3hOA6FwVkMmfFtnG1DGLK79GNKAcWRWYKWjMj9JAkB9PWyc1MMvdPavDOuT72ABG9Bph8kMjELEm4zgf74JHivaXrhaWDGtXo-bQYWyEfymuB9sqfZimFaz-JKrVk55CPrQXzLz3bc8-XeKLM81x-xGKA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832717.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=RzygaK05ZiqXqPfGafSr8TloeGM-GNHyd28LJsoPpy0FDfjGQ0RDugKmNugT3xEQabsXkY~me0et4PnoWAqLvhB0YbWSKwvJ1njuSxwJE8bRIyBjUBKesRsgSqCFXUAlEcm~51kRjHdcMSWJ1aGWNbRSquuL-~YZWZfXFFht5sptzy1Tsr~oSOQOCIk4hORd8ZDdB3-eh7abIXRPJ8ypABqlSyyHAJ4j~W0h6~8J5SPpqbEWzIJNqZvzxeDko13ODGE4IBHra0N9wd7DcmgWk8n8kwCns6slthBNenlonUWJgIDyUxXDw4X9AhV65mfvQbM4SinFNR4piKlBXamAzg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832716.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=Fmpc2qubxtbZFuptMCJi7HXkPcMai-Ok8zjucO21bJBomRL4B6qfoUbzUktjCzX5cWkQnQQw~5rNdb3hClDAn04TKOvAkxq0bQhcTDjphrJ4FtB8wg76b0Z7UOIVqQm67TnNLtK~SgK0C-WBFo4SyqNoWXOyTXiWvveGHObjAZl8UI-HgA5oqwjMnvhri46oMKpizdC6UHUpGMBneXiPIOaictbbwtI2gb-RQl0pyxET9enpDrm0Q3hyi80ftGyfcDeOMJrtGH0bAAKQk8g2MlUdmREpDJcAcyvD5s5UfNJZ-lT1jfqtI6m6GVLjVslS2PvqX0JDAKeu40TCWgN6Mg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832714.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTQubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=mqic7T1eD4cO2RBpmb4VAh4vYDbfEV41V2twIdymZCJ2y3KKLwXLiztvMmeTCEUC-mxs1FPX0vHrxObp8cKAGAjL1TEzpVcgtbbTeZmpA8agF8AgFTTzojklX~GLqk8jmIShB~ENg582UbkxpAm8jrJ5FlYOJoBQcv1LRta284DMAbA8QdKw4fpVgXVSlWgrWoK2QRF-CzlcErd2nSaPrjDut-wmuUKirlZ5CFPI311MfF66Lg3414YsbKG7xHGc9VaniUlav-1Mhz~2wMRZQr2RVHzMTGEIov2Ji59vkxX00qdL5HoxuAj7i56KYpujDGpHXqPeO9ZKoeK6iDZOVQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832713.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=mcHljLvNfVSL1ShPMzcfqrMaCoFgxWdkk4rmdqrbcqYqWl~8czChTPkbZS1AxWpUxIe6pveNYy9ZXu8cxhHUWwOoOTecmj-85B2D1m~MBxCEc3ApaULFeHMN6MJtJcH8iX2mHzrsuzpqFyVxq~ueiMesALVEnNQ-vGUDJIq5WuzdKKHl3Jha2fneXsa3Mev9eUCrBEIwvXlruJ~gPNN3k1Ih898wAUqfywXniVYCq4ySsnJwdSy57mh9gqotCshbnGZ0VRpjCJ-ewBMCTQ9Kad0Ld3cP9yL~Zi8RdGfdQ5gBSs5WITTDpPFf52O~J06lh9sPwmkykVsOFmavhFOznQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832711.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=iDpuheEkno7~WNY5tHVQBM9ZvlZTleAvMMIDw8n8Z0XiuV7pFO4q2gYl9lkaVM8VoQ1NxmL9Lmh8U~rjclye~UDUNSmqJ8u2KyKFgNqRFfEXNLRjhN18DLETYj9ytObsUoyqlt4rp35wxgIJ7TU8sXdZKuungo3CKF0kQagD6OJ2olK5H-sg0pz1AJosBbEwO5x2qo2QKdJ7Dwbiqd4m7vhqpidsIJxeLAeEd-xWCK0YVfMlRLakEAU8gBBagyw1h8FJ~zQGm8JSJycKoRgD928knPjk-nA-GbTFsZqiSDUdyN-29~YB-rTefKVgBp-PXrzaKx0JahWGphKF2Dt24Q__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832712.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=YKGqW06WBTeaLO46wUf5Gy~upv0ATityE8868LHHQP~SnFGLXt1rHONVv2RXwD4Vvrgk8O-B2G0KGJLDIXUollBLoAqJk19iwCVvjSUDvC2Y0n0n0SLj3hONRkbBnYq2ecF9XPTLvBpwYGi8U5dMK~memR4uwkB9N6fNdnMwaB4H8pS3cHmo-Mfu9OAkcqG2PbeBC6zgB9MDTrMYH2Y5WQdOw6f4oRiLKNK2kcW2JkOFvGo0LYXpYWgt0uesD5HKxDdljn-ZfUGx00T5BGSHcVvNZM4Z4ixH2ymJPJGopm3wtnvo2JuQBo0ON5H6yGd9JxAB7YsmhsitV1HBCXpPaw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832768.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NjgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=SFNrjl~HjNJ3OnUSxnzuz6fo3EuWJTc~D4GN9vFSvKhTSNWHQXtbmYbzxuwbYFtS5agS9Rp5lxrcG7PPk8lyoptGz0wkc2ctrisdNDeZEV1z6ACn2E3AFuHhQ~RGRM8NL6z-MtvSUkDj8qAzK5Bjp0psCvU98j5r0CeQ34LN-dquXTZm65eZBmqDAeT4rfC51MTyPmm7us0lEpDE7aUOJFfIJZ9iyhh8DWj5FfK1d3Uax0ZRQ1sR2SXR8v8t00iE-LE4MuzbP2-bxsm6k1vALaEugqzpn93MDpB4b7OO5bgjnwWFGgzdkRahuIKx0fvcmEC26uz3aEbyki9jI88~uw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832697.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI2OTcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=BKIR4f2cxFlfk-giLRWAwXdqOzzQoWMjA-EpaAQt57PKOpWKuaR-t1bYOZeBpXAgPt-JPnZRnc6tdTnnLBzdY5I5D4NOwpH-3Hzs4RJQzPwnhENLgxE2LxZO4B4uBCraF7sdFUFvEmadklxpMFP8KXY1v4cWm3OzbBAcr5-k3L6myE5GneP97neulWFZHqJR2T8ri4bHMhsm9aID7q2uYaghfRDTKmXAxnJyVvgF8pdg2ObhfFvRAOe678OGb9eG3QDLRpP-YItREZTM2lgDIF0bk6c3Tgdp6uNPnt6teOXSXGiag-Wa~k857oNxnT76GkviejL4dUPN045FMhP-dg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832715.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTUubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=HsuLHLY3E7GVD5Oxpb94qEs4IED5Q0aYIu0gg6crnMgs-~3j-Ukb02IDekkwnqzVpr1jvM~uiyc0JLchNYtTV-1dwS789wpCgdNoRLkHxdqv2YXKaSsCM6gV8rEbay9XHdgqbA2Cy~o5udAPmJXYcYJK07CXNIAXU5MrPP1ijp0mQZBq0aRW7mJac4VyK0Ac9p128BMeJqu5M5DPjx6ehqXDap0jRhWwvaRItl2qzx4XCVzcdn50svud4M0knbNnwtgCxefwnOFR8-eaJdIbKtc8qte62ATFE4HEM6qVOeOs6JsOk2mNyCLEJbHzWDM0WNE1rq0pxvlHihAVGWrhMA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832718.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=R9J~fbgQL363w9Wa0XAV19sNLl-Dq-Xt-xhbSAHncd9WGrkBDRJxmvI95d0gozNKFJSKOXdSYw4nXf1BUXPeKbYxrJwjlUMH8q6EUaRBjEJ9axZbnxYDXgoUSNSj0QoQcYEBs2at~XgxI9GjLAxSC0c33O1AlepheKRGc38OoozHRoseITKcfru3cg6DtYX4reRMLTUXm3~3tEvTP~dQzm6yypiV4yhUIK5xS7qgRNKkr4QVuQchH17xRtdH6Paghl-CJMI4yA0RYYBzhsSTiqseR1NktfKWYvUYNTs1vbdEvxdBnldlOg-pWvliyKX2kWba1byhdJ14l8Pd6rnmhg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832769.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NjkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=ue3TkCiDjEsuzfZZqyqE5u2d3ZTZ5qR1QaMvgc0vHh4ZS43Rc2pqNXMDiOQwYi7hC06t4gaBvm6rUsBn0J8aopM~wLPVAggNGsq~cZlBlDQhBMUkoAFvUPREE-LeAJAPuh0Ddlz0~Lf4DQ~kDspDPsoi5q4OAhhnt6gWNL9dPPRJcA-9Mfjx7fjYzQz2-68t2YhgVgX~4BLKvAOZHbJ00iAOTWMkiu51pe71PE3T3CYDCrqreqUkDA8y8b3emNG-P~vsH23zVStXxNSayKfucVFO6bBWBgkSeeci56MPKtr4gfA1doCqZvYOi0DmF577VKXs7Dr~A61D4bZArcKiZA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832726.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=bv1Xzi~9UecJdhpk7-EoioUQ2I64LRsE20wSB573alSyyMe3yBi5JcNPLEok9tzBpdhYQRK-PQLen2GcGC1uvDY15RFVmL3QAgkWHb4UhXL~YYamSsqbXNT3NRk4EPUEBJiwvoEH7a9B1CJDH~PWXQK5VlixWblvbk6SlefarFsq1XXwMSJDAfc7zioJv99vHLwl7r~UWj0kAc6XdM08eE2xQGBPwo4E5U6l4zpvqNJ24sdU1p3uz4CtCt0kx8OA4gqNh~ZQyubSvyyMWsPb-id6CqeERAnIs8Ui-HprCIeMToYXdUEwyNIEXRjtTLkAJRDKx9jxLenOmXu2ldoEVw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832724.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjQubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=k6aNIXL6pPdu55M2m9Inh1YzJOgx2~2nEGp5qwSjDokx1brIj0xD1Pd-zA4ZogvO8F5qz-kVxMfyAfZb6MMueZZGqFqFenBpsaSD8BhgwVVV1f9W1iPDofh5GCX99wE3Vc~nh~UiBvwqmHxzu3ag5IWv2woD5~nDryvFs3q99GSPL2NS27i4hhEbkN6unspQklcmEXY4p~Wt-TpFJawG19MSINLnhI89OkjCpX1~~XLkt5FQRR4f51lup7u5ZjJW~JOY4kQYsTPFRbnRns133PWBj9ytfvKGcRrsPBUVoB2NJyFHIY~mXFxL3ReoayTxwJzuB4FiDNDdE-YpxzVn-Q__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832723.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=rxWEI~~xr-VowC-E5yD2-aB9V95onM9tNJSIY8kvIJASRV11tDXcQr34abyZZuVAgTeAM~eiocTF1wezwZeVgQbZdoCzCvPbe8Bt95~8pZSBEWA7cUmYc9lAxUSa6eVKAQ~THUeeOZHbZmEj3cm0k0MAaVJ0sT68bpt7NJXbIPLyzv-dpVPGoF9A~1o1qB1cvLo9fgZCuBcvQ4bS2cEasFKxpRx6MWMVbX1aKudqOa1EOAERLUAPUVHzVXN1J~kk9wUkbZWcb-ESUEAyU3xslbWw84R3SnE8Q8lzDcPikpMRoEFeLdmUP2wOu8BvCoG~wY55R7U3gPOhUSwBJkAgpQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832698.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI2OTgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=Mt5FM0kftghIlQKWPL7GWgyBREuYvv2B50AsstAACOexwRk0sOZPg~sYU7tuG1J-DU9WYoZRuJw1SxEYxVMV-yF0x7dZwGZf8Rb8m5HcTaVjSZJcWZDslXLqml6ugYfXTixvzJ39wCbMNSaI6gCIZRMjU4tbIos5kKzltD-g6K~LncH7W~vbL~MBWAeaQiheI6Xjq4ZbSF47bfm5cUBFr0UTsRpUw1mzoRXwS~~eJXqafvjHe9qNoQ89NGhjS56Z~F1sxOFs1afGeBstL0DPsvCt3fTfP6XzT4HsfeYYJhjgNoVF1iyR-04Wxzkug2UTwoKDjBTI5nROgyEpetK6VQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832722.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=HEK5tnbmYfQLA-Glt3Zj228vJglWvggYvxOl8l6UrHqO4qMMZPxhW65tLR6u0afZXZkaNaFG7HL9wgjnhlS5RW~eB~MZeVf8-Zb4gyAo0Fb0LN93CCGi~P8sB8ed~5KyBt-Ag3dhzxrRVblfBaCNLX0UvfWIxBcG1IhI6EfZyQGnyJyV9o08nB2sUXMuUx-0KxRniO1seF~ntt8wA57cT2ohQmlBH9vNKGu4uumUQYmJnLGte5Y~ba0Ikds31fjb9v5QskUUymiAsEUTsXPRQAIxdx3pNy0dTFReiIfTbtOun9twJMCD5LVP8SSjgQ-8d6VYcF~kL8xlmVjGsRPV6A__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832721.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=j~CTb8sHrsoW8nCVVsxuifH1HfLujVo9UpcJNfLH420cpoPnCOX3Biog2pOldsaH8QBVRNbMiShMeyv~~c9tPUfI9BQhUdBE8GJ4UmBqDeqU6vG3g2FAewlzkHKQEFCEgNKzIuqWry036YmAZVwXF7i6hS5dgs8l548cPsagkoWTcKcO2tIwSMPGRmjCJfkcJ4qfz5zN1TViWHPh0XAfeyJn32tO-uK44BrCCTPHA6-MbkO1ic01xzwjo5aQ3n2WmYMDeYylvySs5CZQy4t5KXOTaytdFFrgp6Tzh6PvBrZIuRzgDtsVSzbY7U6jqf7BnNVD2cXws7qC09WstbdvIg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832720.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=kElG43bAo3QdOIpxK9H-fbtwXGDakE5CJl~fXHXsWdc84ilKM4n2ND5WK~qtEe-tVNd5AYeB6xFYrVoxN8HhvUqF9qEmY34n4mq2~e9HLz9mE0DuivDnjMvuLpgJT~4aWlnpuSONuTY168yHt574lZM8w3Vov838fH38-2YDFdAeTYltKnMtawU3Ir66b9rmsnNM7pcNxci9aSGSTuy6CGi-Q3poytzG-~P2coHGcJ3hK20saDdB-oNzVyeqfnYMR9qMc7HsZFuxjOd~OQgg8FOfnIaaEyMnIUbtxHM9b-wlkj2-Y2H~J11ZHrsl8YQ3pa36yoDU~f62AlBDYsEs5Q__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832719.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=aeI07yUrPnsxO-Jg1RoB4sRh7TTZdRVHRGgg1CQIXvfuRZZI5UI9eRAYbFWj-t7jk51RkqDKxkwbxp82~pNWmYnK9zykKezurfQu1S69H4ITzmpcUx4yVpvGx41Y67H1u8-k0L5WMHKUerHImD1QiBDRQoAz6gT4Ey0QSr8IGv4BVIpduvQ8QuaA6tvFbh2rn1c3gRaFww4GCQYd-XTrbJ~WagLzI~9rz0NfmXc0fT8acv7U7U4FDhL1rSybNsYe0x9cYNzJ0THrV5TGV3eyOWwzQAOLtVBLEztMVoC4B-DYL66zUy7ml-uttETAUEMAT9WYush1-bSWpHYeDG7AVQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832725.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MjUubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=LVmflDpPT1fBaXrVyX~FwQlJzGKfu~cqqzHOxCeOLFIe0Rzus4-M6dZmRhi1tCHnebzLh5~tXEa4xcILfHuAzY0MV87MGva6kkcH1i0G8odJJc3WX8ZWxntZ7gsY3jXVToJHi9F82iEH9TMewqX0Wk5d6WJvxW9Ja7IXlJ0MNcEgToXjphsafPYsu1q0w7D7Z0LCUfVpwrFm8e5ioX8yWp1IlCMoRFFXielJk-9FH7v8Ko1mvnj7fsJ9HsdL6Evg1CRPQydNQ7vDL6xaIpnfBKPBWOtYuI9K-fTGOas-7NIjutxAEJi1d7VenntgMrQnVVMEejBdz5cQcEdhyaP3wQ__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832696.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI2OTYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=lEc0Et-6Hc8J4QzM31m6i47~w5JcKeedPJUAlaGrDW8RyszfDZisHXLSS9kqPb9reB80V8ZVABN8G6VRc5~dPrHoC7ttH8Ljlu9U2KhS2OAFBNChwvMgIxJ2~Oz6zSbwkoRX0DLzQtRrNeZ~lxGaC6LpEmQjT-tk96PJERY8u5C0Urgf-r2RX6DFLxn1PQbQ8BVzm~q3gtWq2vE5PcvdRIs2u4j6dcZO93UD0lJ2hHo0uA7pyJvIKRI5jNH5JjT~oLU8wEvzne0sbOv0G7Vk2mU0gavZWHCL0vWZIVbOTUEaRI9PUqTrruJhCFTlbHkSjws3~UFJ~MXOVd-R9WI7lA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832709.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=pFFZvbJnhjjXyLtJXwgd4YQAq7fhcVROMwdCHD3wzx1eLmChTpvL~02-L0EVcz-OSxStRqnaBu97tCrkX7xcnmlp6AYPPO3alRjKbCZLLQ5F3DnLn4R66KmBx5ZNhYVKsQKaijQ6Nuv4-RhexOGQGGgF2ZF~CfWAMxEu9lAWdpVkoFSY2XRvkYzRAbDO7XhaWYS6KUGovikCqqJBwXNGGXaLQn-6ZPhWUETqlgHGqqIkcT0QkYGFnAfyuSWHQ9XQDNTxXnuhsSd10ry28EQnVuRUwCRlYF9V13UCKiqQ-nFhdVSsHHV6B1oWK6zmPqMP4DWqLWS3HHMN0Uz9B94vKg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832708.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=VJGi3gbqFsXjBJnNDUiXqz-4FNkFsTMJAwa47UOj3EBo6uEiBrnJiBSTU225WF416RjoSo3Krabi3YmgDQFDRfejL-GG-0RTRsCM0KhxGZfmVwzfUiqvItXVShq3fcisk9LKhjl~iLp4B2ot75JPClCG6Crhm70qdwFf1RwgCuhIVzM6v71aKNVDk~Diaa8VhuxRxAj~BSIQzeUS4LsIBTr098VKLL~SZB9HGCrEytzGQ-qj2XOquV4pdFEaZt8NpZ7a4ha3WCBIHZXVd2zy8DuxrJsZK-vnGDvlDjiFVhytcucJt3cy9qi1aiTKZCz3Tn84kq9w9CUcR-Fbnad70Q__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832707.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=beXznvtJL5s4lJc-bGYEBlLkZdKNhjmgY4WAu25V23bK6pBbAZ2jj5xJ9nntlXgFHBi4qf22Xmqr1~BOl~WEo9V8D5m0OwAoX0mfVThnDOQhBYyJ694gtyN6MCnXKk0LkIDJGNQpVGtVmEmzpTgbKBXLsgMxw1HEDRQqLO-Gio-ain2gUZgFUOGLDMp2PKho0ZlwC0xPlcEOZCiJm~fAegPHNXAfUfMZbhArsonOklXWZ3aHGIs~mZj1eSkPoP1kZuXx012EnDXRiMOaMC1CZPgkxwaYsLVy71CuJNaRYCuK1iF8pTa2~e8-Gqh92jgwXS1rwk2HQjFQSuYjP1LJ1A__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832706.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=fmz5XvDOAYMW~oqjwWs0KNkHP5xosgeLH0anIZLfybGXh9e0J1TvYBD7OqLHb~lAB6yydbDhdNyXDxMFbBgi1gnn6mv3wa5zd0jYc4fqk4oaSqfo0jDH5fmpgfdnmR1o43GSrtSIi0GBSlBZIvglu0T1WT-1-IUx3T6bcfvuRQoyCUgpahIr~DIJdWO-q79QmNQho9pi0zw6fSQjzbTqXbnxtY-C75O7rZjL37DmYVYeKqb2iGOgNeI~Qy7OpU0PmfF8C99hvszdDO83FyE0zjgVTb2WIfpwowORrY1Wiu8~XzDnHmTDSpv49vLU4Mv-6NGge48mbs5zh23oKRLHFA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832705.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDUubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=ignLQedIzrN~yTe-yVjbfDo497My7DVppkB9rC5crvuEUq1nvRGtfB~4Wh~Kns4PBuLQxnhMOu4nM7Gmp1BX77d68YHaiV6kiwp-6e~1tft4u29roWJbGyZ3fXArld-13cwM-yGHICHLj6FfrqKJSZYbueRW2h-8fQAneuJcYt5L6r8vScmpuL2h98d8fAfRVeTj-3E-M-MBgKPMOJqGze5c9W9inWWtWyEAbmLc8n08x9vxaGtq6wHObwF~W7ju-FXXtAWbyZO-9Ta5haAgjUxkxONdP5zuUxayzEn5Ye0Iq1921KOTS~kd8LbZxGI85ShsbzUKlF4s0Llldc2OzA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832710.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MTAubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=FGIcRf9DborRxXPJzODv0U8~W7fPxyGXAp7sBjGaYNBh1HwNPZSYqg9GH4ZL8TJWA97dRTC24bbk7P3hOahAbgNAcZl5f8MY8wtM4HeFkDiVfXDZc1YdJ21FGnz7jyIwgrevsHOsF1Pkawh20OfDhv45D~M6JwmbWhvwRXOFd4Z923SYwz4dwYPlf5cOasmCgJJFAIbPSF4A91j5wvrs5fwMHK2~2O3eDhT-h-~8mN~2KjP7h7h8rvyp5tJNpUQ4KNnxb-rDxFIZp7WvVns0~G1B8oJGk-yohFceOzEIIJybwfIIMkW9RYxuAREfuOf7Ivp0Q0w-iio6TPW0zptt6w__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832767.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NjcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=nq5xb3Qwy880nD8E8hUyCFkuy-mSHL7NHrkMBo2nJi98lWpwtXbSPEay8Nc9RUQTwiAO-PdlLT1a2RRj8DEziOiPzbB2YwJu8cUscIBBrDSxUh7AL5wf2a~9--QaM2sWTXvQmf1O-DuQ0QINx5ZfkDZZf4eS5xYRMjAFL4dID7pfmiDfOEa0VR~rqp5X1qAHUBYLu1p1p-wncxNYmV7~jv~~TUJarCtp4hE1-ungW-L8LPEeHxBg653Ko8uzvgu~Rx793Ml6FvdcLc6sZJTH8MJfo1b76IdWT5BxhvRQ8Gllb6rmsFAhU0KMq8xQrfmRGxobzYZVSZ9pxh4dGrcq2A__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832703.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=qYafkOhw2sulcDNyopORPU4efMobIp62thW2clfNvPodw6B4nVhw8HnpAjXyhfYAxSxm-lx9Da0PdJVZT6LNpyEtXgRuVEs-4sHYneLbK-KYItAKQ0WP13W2Z-O9Nqup7-ToZYz4VUpN5xtnalUR6WCV2ChF1HgRj7c67yDHWtxiyahVrOxFKxjNxvF664kDjhNMqMH3QW~mfn-NDOsVP7zOuNwQLG7KQ8v9TYmf1RbOdgXP8xXxCqB8KOJ8Bajq-72amoul9xVSysUUFSPMQ4GSFZfJadkqJlTV6z7iShVTfaz8sS9Qj4-oFyWTK8DoqOU6QTZsHkIf6o2WohjGow__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832704.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDQubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=lfnoPh81~kpYS3YtSH3G3S-WfagtsIlptOw19RQEpbFFunLH5ylJBAvM1VZjxSOEZrb2zm9g-HYulKwbabLG3CshlApKJ64I4IAyjmXcs~x1fjmfureV4nCRbxas3I6qKa~Q1fxzYra-nIYwhw-Dan1BEmnZjX3Iv6VjoO3VrHLuYMb5UWnekhkvwS7gIyNaJ5NcOOVjCPTMkE-PlQMOwaf-LHdv1T5fbd6pbo2o-tE~gCZetar~6BUTwEPbYS-AUk0i0B-g61COrxI9m0kPf8E75aN-ZpPAQozl~iZJYNUHZSX5i1L7BxqLe7Rnh8tumwMAGp4wlxOdJELNRPHO4g__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "arME",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832756.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=VRsYFL6n2g19F6Un-CsTNBrHJJJkUQRwBQKPo5ivcxmMTUiuz5KIXuzkEj5s3MwGr7Gnvi22RW9JQTztC2f1C4ig5LxrkvELNkAMz35VGm5vsobcEGKeiojJ4xNeJCaPp8Iu3AiqfdFLRZ0S4zyULgzCkrCh~ydZlPz3gfanVwcFH1SrYvAKA8~PCU3M2m7s8dJfqSZJouGIiiNRV5nLb5VK1cX3fAIftO1uW~zmSZoERpxa-VSfsc9ttJ0Om~Ek21edHoeiJcmTkTzWcg54Ws6GN7Yjw1vwumfRfkHKwMKx934uZjoPc3ariFUWOGyvU1EfeIFaC-nZGYOL8ZvrSw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "deDE",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832757.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTcubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=j8o6m0bwgPhsswqO5MHubNSY5Swdb1JhGeGrqb39tC6um1SYXZ~--vN5e95kbnw~snxZAEXnBgqu6oufWpm5cmOJlMCA1emdZanKPILei-QJaUuhINYTlJMMV20j2WmF6Dp8N18wLDqudqTymKta0Ik7t3nSuGuI4pOvwxXmE3CWW5z0GbnziAi9330uh-v~WX9SL0shERC-LZE2JVrjBZ5A61xrbRLhUAiVbDNRvCdC8TUDQcQnKlGOy7m0d9lDwrjCuHO7lHKGn44~w7e6Qh~v3RQ6hnYM1QX~Gj5GctJ9h4h9T3mM-c3P40jmY2LJj9qHP~23EzrDdywQJi7aNA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ruRU",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832758.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=MwOB5MS0K-HgIKDBHBQmeahs6~i1lJFy2TxLdm~80cJYcEoIgTZ1ISCUTHkjhjORXp49A6xidpTEX50PtwtyjPpxveS8~2Nh93CeVaBBxWq0RJXyCPPhpQ5f9OcRdVTSzaDQIr8~hOjdC85oK7tzSnBpeUepSpqAWPhtglqlTIbEFDzQ0GoyYTJUCR1lEph8Uy~-8k5YPaJlJnRcO08mIVe2wexamVZ7jThkJWsAWq7wtow8B16iKLP8AWkuI40IoNZgfAoZVJQvnP0Hq75NdY81TZJrMAUYcIkmXnvTF~JIUrd~JB4ghdYhFBG363tDbdOsgTbcUTiYkueSUDbPNg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "frFR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832754.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTQubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=bfOvJ3zFzDwoAt75fse5Iu5eJtFuvZmNT6DvjzgoCmtyKlXnOv-2O2x9LAHELUpYXs0Q3NnhxL-mYE73ahYDkQilGoXAqnwwlVH~9xctKZ5I-vIdlpcH1T2WOnhJWYGKGeWUz77IBjzziSvmItObtgUWFSTMKohYCEpf6GuZ6F5wYCl3UbZ6OraZNXhbz07Jf-Mb825tvf6tHNNjOgs13ZWxt92F3UzG16XIEQGwgp27g55bcsvK9E54B1oiiNu1G5d6CE8iP6Qmvh8s6lZGQ0JhogTZUcIG8WrE4mhJt9hUgF8t7wkiMsfph3Rld84-kEdsfvX0f3ELLH8mywdAag__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esES",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832753.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=Vbo7Sr1Ztn01Dx-LMIf1N64-bNbSqLdD4euDZn3DXXOSxTuhpZ1M~7Sj5LKMLWkfYuSQ7kEigxReC8OqvEYJIcSAQ1NP4WOQC32BVyKQfLTWLMEyAagAdk2UQTMyT6un0CN7c3QQmg33pcQNlUfrHeBaNTFdWirGcDEIEDLRgT~FBMzYe0SBzYGMftlNTDEf2uCDyQC-YHP1CY8sNhlnQ9qq7QxCpdZ1ZcOQYmjPBMXYrAQF6Htzx-xfD5Vk0Tcv24nTnawaeU6Du-IBrcLgs35090-TZ--WhwJ1rLpGucNMG-wfUnwyUCRh13-u4GRCvBhGDZ3GJ7BY-iH~iFKw-g__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "esLA",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832752.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=snVpQryh0-HhpyI-RS8N8rCIJMwyG7vlMIjhXp-4SYn-VAxFPQTPrdUJvFol45h-u~CLX1mxo1psl7ymdjitsu8W~7T5-WCYIV2F~HDkzm87xGPcuBqhcIvBmhK-iutRUGfqWjWOPIqD1qbaaHKn00mwTMCN9~bJllGaDQEQgRt95TErte~kT0h2UyW1MmNfdgpf9ymgCOh0rE54HT0kt8emyUBSt1HU-ZouR4REU8FzcLA0xopS3rVliTwzdZfghNvnl2ERCZV-G1lkU5aLjkx1uG7x2eGxCSnDiv5D8PDmfeByv5jaoT4wYK~b6KRVVb8ONKsMGrTaOhQDhgfqag__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "enUS",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832751.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=S~EhaVm8UtwUo50BYDVUeomlphjWP-ODen6xYL3IJqdBlpkXZUQkGjVDP2StwopQlxbBN4wE19QgOWNBae5EfQRFDijN2LBqYehFl7wwC~rWQBs8iAROF14EZVa2mnXGpb9Dk4MLQgI8LQuA7IZ-qbWkZYuoEt9P6koDJuP8SrI~EjzuDgAP1~Vz1E-pndxmomGeZX9L4s2-LJiLHrPDDJr3-3CQdGONHOpP0euKXsoKKFkUkIpRoZLzsBMDkghwQoOcWC7~HNWtfkQ-1J2JtwWizbXlO-ETi7XK-sE64e9x4OVsWIIc0j5zQNN~RT9P00DThDFtci9gC5ZP8pHpyw__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "itIT",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832773.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NzMubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=NXIcd0YlKalhqiszHTQ4y6wNkN~~UN8J8fbl4aFH5llfFJqgjuq1yVy9H5XERxpgYWNv2J78aeayGb4w7OvGJpJTDlP-ht~aWauM5TMMieDt2G3Uw0~Lhwv5QUE0eQGqxV9F9l8LdvxbT3FZoxvJaMAGYbnHFMTKYwwcACy9aUO7Dy5nrlunQAxj9BpGjSsNXxzW1XYwQ5lZObxcoaRWRrdoNk-RDwqUWofg0IIyLUKABI9ZQ26kEeGqFOtHaOKUGE6Y8YfBVRqtcuqaTUy4SZR6yiOGJkzF7qEDweuhnBgoqH8CyRyX1Ynm6IhjlNc85d-rsh6JgR9X1l-AIrIaEA__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: null,
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832702.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3MDIubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=jnkq29sC-bnMW5xdsZYB3WcwG8hxrmnX0z08h4aAT0z0RSudpUXwRSaW0Wqgjg89IVTABNHIN5VLTQ3PGEkIu2w6D70nLBbgBhSvaSpTNYsF1naCxiO9qgZpmYKdKULgAnHotgsQDu0CpiWCSvT6zRNvQjt858KPZSBVnHkhxv9Sjv6N8VE45GUnf1jy-wQuR2gHscb~m0Q~-WS3tpNGXyq1Ugk6~P~3iCECVnK~REE3KGGuiMjRPxJKWZOKitfCk8nzCnLKFYxOPZmTn4DK4OMSGx2f~yNi8vndot~RKYN2WpFSnNbEOtA9dGcjqZgLrltLxcI3WwOf~m2qBAnG3A__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
        {
          format: "trailer_dash",
          audio_lang: "jaJP",
          hardsub_lang: "ptBR",
          url:
            "https://dl.v.vrv.co/evs/50461e07d29d3b11e2d4d33ebaa009b7/assets/50461e07d29d3b11e2d4d33ebaa009b7_3832755.mp4/clipFrom/0000/clipTo/120000/manifest.mpd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvNTA0NjFlMDdkMjlkM2IxMWUyZDRkMzNlYmFhMDA5YjcvYXNzZXRzLzUwNDYxZTA3ZDI5ZDNiMTFlMmQ0ZDMzZWJhYTAwOWI3XzM4MzI3NTUubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9tYW5pZmVzdC5tcGQiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTM2MjgzNzl9fX1dfQ__&Signature=GvpSk9HZd9SSHIywpDOQavF~nOE6tdkeS6IA3KmgLs32GKt4cseNAgLcslKE4M0j6RQVsrs1yDNkHOODPhEvz~LqH6xotTNEq8KNqcF00k2gn0iTMCDjEwCCTzeCXkqGczBXDrcNZzd3K~cqyVtY4nNVizeRAlhVFHgwsQ~uDz~hoaHnzt6O3GFn-v4t~DItdmcKsnDuet9PPuzdYlgOhlTqacMKsRjYCG00zPPJ4a055-mdpZAWMtaK2s8e23FO-zmgucxPm79LYjNX8VMajqLR9-yKtLuwE3adgd1ACcGvI-oYpIt6v2gz2Su-SjMaxGB3ZvuKkBn4OAVtXkDyGg__&Key-Pair-Id=DLVR",
          resolution: "adaptive",
        },
      ],
      ad_breaks: [],
      subtitles: [],
    };

    vilos.config.analytics = {
      user_id: null,
      legacy: {
        media_id: "794531",
        media_type: "1",
        url: "https://www.crunchyroll.com/ajax/",
        video_encode_id: "2168101",
      },
      media_reporting_parent: {
        type: "Series",
        id: "279180",
        title: "Tower of God",
      },
    };
    vilos.config.analytics.anonymous_id =
      "cbfdb4ea-588d-4be3-a2d9-f5ae7b59bb0d";
    vilos.config.analytics.segment = {
      write_key: "KC3ITMkcWCrn2dZrMXlkjNQBaFSB9ilG",
    };

    vilos.config.player.DRM = { DASH: true, HLS: true };

    vilos.config.privacy = {
      ccpa_do_not_sell: !window.WM.UserConsent.getUserConsentAdvertisingState(),
    };

    return vilos;
  }

  function setStylingWideAspectRatio() {
    if (document.getElementsByClassName("player-container").length === 1) {
      document
        .getElementsByClassName("player-container")[0]
        .classList.add("player-container-16-9");
    }

    if (document.getElementsByClassName("wide-player-container").length === 1) {
      document
        .getElementsByClassName("wide-player-container")[0]
        .classList.add("wide-player-container-16-9");
    }
  }

  var iframeURL =
    "https://static.crunchyroll.com/vilos-v2/web/vilos/player.html?control=1&advancedsettings=1";
  if ($.cookie("VILOS_OVERRIDE_URL")) {
    iframeURL = $.cookie("VILOS_OVERRIDE_URL");
  }
  var vilosIframeContainer = "#showmedia_video_player";
  var nextMediaUrl = "";

  setStylingWideAspectRatio();
  var vilosPlayer = buildPlayer();
  vilosPlayer.load(vilosIframeContainer, iframeURL, nextMediaUrl);
})();
