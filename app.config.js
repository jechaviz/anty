export default {
  expo: {
    name: "planty",
    slug: "planty",
    // Additional Expo configuration can go here
    assetBundlePatterns: [
        "**/*"
      ],
    // Previous keys for PlantNet and Kindwise APIs have been removed
    // Define any extra config or secrets in environment variables as needed
    ios: {
      bundleIdentifier: "com.salmxnz.planty"
    },
  }
};