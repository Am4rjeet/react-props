import { MapPin } from "lucide-react";

function ProfileCard(props) {
  return (
    <div className="card">
      <div className="card-cover">
        <img
          src={props.cover}
          alt="cover"
        />
      </div>

      <div className="card-body">
        <img
          className="avatar"
        src= {props.image}
          alt={props.name}
        />

        <h3>{props.name}</h3>

        <p className="location">
          <MapPin size={16} />
          India
        </p>

        <div className="actions">
          <button className="message-btn">Message</button>

          <button className="follow-btn">Following</button>
        </div>

        <a href="#" className="profile-link">
          View Profile
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
