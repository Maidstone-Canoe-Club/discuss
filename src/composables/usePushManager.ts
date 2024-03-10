export async function usePushManager () {
  const permission = await Promise.resolve(Notification.requestPermission().then((p) => {
    return p === "default" ? "prompt" : p;
  }));

  if (permission === "denied") {
    console.log("permission denied");
  } else {
    console.log("permission granted!");
  }
}
