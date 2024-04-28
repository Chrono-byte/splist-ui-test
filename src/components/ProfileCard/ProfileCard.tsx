import { clockSvg, locationSvg } from "./ProfileImages.tsx";

// This is the ProfileCard component.
// This component is used to display a user's profile information.
// This takes in a user object with the following properties:
// - name: string - User's display name.
// - username: string - This should represent the user's username. Unsure how this project is gonna handle usernames, so I'm just gonna throw this in.
// - avatar: { URL: string, altText: string } - User's avatar image, along with an alt text description.
// - location: string - User's location, customizable by the user.
// - lastActive: Date - Last active timestamp.
// - localTime: string - User's timezone.
export default function ProfileCard(user: { name: string; username: string, avatar: { URL: string, altText: string }, location: string, lastActive: Date, localTime: string}) {
  return (
    <div
      className="flex flex-col profile-card w-auto h-auto p-4"
      style={{
        background: "rgba(10, 8, 0, 0.70)",
        color: "#f0f0f0",
        // minWidth: "",
        borderRadius: "0.8rem",
        border: "6.45px solid #2b2b2b",
        padding: "25px",
      }}
    >
      <div className="pb-4">
        <img
          src={user.avatar.URL}
          alt={user.avatar.altText}
          width={"175px"}
          height={"175px"}
          style={{ border: "6px solid #333", borderRadius: "29.97%" }}
        />
      </div>
      <div className="pb-4">
        <p className="text-base pb-0">{`Display Name`}</p>
        <p className="text-sm pb-0">@{`chrono__`}</p>
      </div>
      <div className="flex flex-col max-w-lg text-sm">
        <p className="flex flex-row pb-2">
          {locationSvg}
          <span className="inline-block align-middle">{`Location`}</span>
        </p>
        <p className="flex flex-row pb-2">
          {clockSvg}
          Local Time:{" "}
          <span className="inline-block align-middle">18:21:28, 4/28/2024</span>
        </p>
      </div>
    </div>
  );
}
