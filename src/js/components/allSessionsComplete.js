import settings from "./settings";

function allSessionsComplete() {
  return settings.sessionsComplete === settings.sessions;
}

export default allSessionsComplete;
