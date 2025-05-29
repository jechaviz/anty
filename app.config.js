export default {
  expo: {
    name: "anty",
    slug: "antamina",
    // Additional Expo configuration can go here
    assetBundlePatterns: [
        "**/*"
      ],
    // Define any extra config or secrets in environment variables as needed
    ios: {
      bundleIdentifier: "com.jechaviz.anty"
    },
    android: {
      package: "com.jechaviz.anty"
    },
    extra: {
      eas: {
        projectId: "d7236c21-33b9-4ed7-8a29-dcc1602f5f0b",
        owner: "jechaviz",
        userInterfaceStyle: "automatic"
      }
    }
  }
};