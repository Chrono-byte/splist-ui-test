class User {
  displayName: string;
  handle: string;

  avatar: {
    URL: string;
    altText: string;
  };

  location: string;
  localTimezone: string;

  pronouns: string;

  lastActive: Date;
  constructor(
    displayName: string,
    handle: string,
    avatar: { URL: string; altText: string },
    location: string,
    localTimezone: string,
    pronouns: string,
    lastActive: Date,
  ) {
    this.displayName = displayName;
    this.handle = handle;
    this.avatar = avatar;
    this.location = location;
    this.localTimezone = localTimezone;
    this.pronouns = pronouns;
    this.lastActive = lastActive;
  }
}
